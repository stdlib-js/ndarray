/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var ndarraylike2ndarray = require( './../../base/ndarraylike2ndarray' );
var dtype = require( './../../base/dtype' );
var ndarray2json = require( './../../to-json' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var cache = require( './cache.js' );
var findndindex = require( './find.js' );
var generateId = require( './id.js' );


// MAIN //

/**
* ndarray index constructor.
*
* @constructor
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {boolean} [options.persist=false] - boolean indicating whether to continue persisting an index object after first usage
* @param {string} [options.kind=''] - specifies whether a provided ndarray is a specialized kind of integer input ndarray
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} first argument must be a valid index ndarray
* @throws {TypeError} first argument must be compatible with a specified index "kind"
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndindex} ndindex instance
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*/
function ndindex( x ) {
	var opts;
	var err;
	var arr;
	var dt;
	var t;
	var v;
	if ( !(this instanceof ndindex) ) {
		if ( arguments.length > 1 ) {
			return new ndindex( x, arguments[ 1 ] );
		}
		return new ndindex( x );
	}
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	// Resolve index options:
	opts = defaults();
	if ( arguments.length > 1 ) {
		err = validate( opts, arguments[ 1 ] );
		if ( err ) {
			throw err;
		}
	}
	// Normalize the input ndarray-like object by converting to a "base" ndarray:
	arr = ndarraylike2ndarray( x );

	// Resolve the input ndarray data type:
	dt = dtype( arr ); // note: as we've normalized to a "base" ndarray, there should always be a resolved data type

	// When provided a "generic" ndarray, attempt to infer the type of index ndarray...
	if ( dt === 'generic' ) {
		if ( arr.length > 0 ) {
			v = arr.iget( 0 ); // note: we assume that, even for zero-dimensional ndarrays, we can pass `0` as an argument to `#.iget`

			// Infer the "type" of index array from the first element...
			if ( isBoolean( v ) ) {
				t = 'bool';
			} else if ( isInteger( v ) ) {
				t = 'int';
			} else {
				throw new TypeError( 'invalid argument. First argument must be a valid index ndarray.' );
			}
		} else {
			// If we've been provided an empty ndarray, fallback to a default index type:
			t = 'int';
		}
	} else if ( dt === 'int64' || dt === 'int32' ) {
		t = 'int';
	} else if ( dt === 'uint8' ) {
		t = 'mask';
	} else if ( dt === 'bool' ) {
		t = 'bool';
	} else {
		throw new TypeError( 'invalid argument. First argument must be a valid index ndarray.' );
	}
	if ( t !== 'int' && opts.kind !== '' ) { // note: here we assume that only integer ndarrays can have specialized "kinds"
		throw new TypeError( format( 'invalid argument. First argument is not compatible with the specified index "kind". Type: %s. Kind: %s.', t, opts.kind ) );
	}
	// Add the ndarray index to the index cache:
	cache.push({
		'id': generateId(),
		'ref': this,
		'data': arr, // note: while we cache a reference to the normalized ndarray object, and not the original input ndarray-like object, we still hold onto memory, as the normalized object references the same underlying data buffer
		'type': t,
		'kind': opts.kind,
		'dtype': dt,
		'persist': opts.persist
	});

	// Store a reference to the cache node:
	setReadOnly( this, '_node', cache.last() );

	// Initialize a boolean flag indicating whether an index object has been invalidated (i.e., freed):
	setNonEnumerable( this, '_invalidated', false );

	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof ndindex
* @readonly
* @type {string}
* @default 'ndindex'
*
* @example
* var str = ndindex.name;
* // returns 'ndindex'
*/
setReadOnly( ndindex, 'name', 'ndindex' );

/**
* Frees an ndarray index object associated with a provided identifier.
*
* @name free
* @memberof ndindex
* @type {Function}
* @param {string} id - identifier
* @returns {boolean} boolean indicating whether an index object was successfully freed
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x, {
*     'persist': true
* });
* // returns <ndindex>
*
* // ...
*
* var out = ndindex.free( idx.id );
* // returns true
*/
setReadOnly( ndindex, 'free', function free( id ) {
	var node;
	var v;

	// Retrieve the index object with the specified identifier:
	node = findndindex( id );
	if ( node === null ) {
		return false;
	}
	v = node.value;

	// Invalidate the index instance object:
	setReadOnly( v.ref, '_invalidated', true );

	// Remove the index instance from the cache:
	cache.remove( node );

	// Remove the reference to the cached ndarray:
	v.data = null;

	return true;
});

/**
* Returns the ndarray associated with a provided identifier.
*
* @name get
* @memberof ndindex
* @type {Function}
* @param {string} id - identifier
* @returns {(Object|null)} object containing index data
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x, {
*     'persist': true
* });
* // returns <ndindex>
*
* // ...
*
* var o = ndindex.get( idx.id );
* // returns {...}
*
* var d = o.data;
* // returns <ndarray>
*
* var t = o.type;
* // returns 'mask'
*
* var dt = o.dtype;
* // returns 'uint8'
*/
setReadOnly( ndindex, 'get', function get( id ) {
	var node;
	var out;
	var v;

	// Retrieve the index object with the specified identifier:
	node = findndindex( id );
	if ( node === null ) {
		return null;
	}
	v = node.value;

	// Assemble the output object:
	out = {
		'data': v.data,
		'type': v.type,
		'kind': v.kind,
		'dtype': v.dtype
	};

	// If the index object should not be persisted, go ahead and remove the object from the cache...
	if ( !v.persist ) {
		ndindex.free( id ); // note: this should come last, after having retrieved all desired index node data
	}
	return out;
});

/**
* Returns the underlying data of an ndarray index object.
*
* @name data
* @memberof ndindex.prototype
* @readonly
* @type {ndarray}
* @throws {Error} index object is no longer valid
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var v = idx.data;
* // returns <ndarray>
*/
setReadOnlyAccessor( ndindex.prototype, 'data', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.data;
});

/**
* Returns the underlying data type of an ndarray index object.
*
* @name dtype
* @memberof ndindex.prototype
* @readonly
* @type {string}
* @throws {Error} index object is no longer valid
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var t = idx.dtype;
* // returns 'uint8'
*/
setReadOnlyAccessor( ndindex.prototype, 'dtype', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.dtype;
});

/**
* Returns the identifier associated with an ndarray index object.
*
* @name id
* @memberof ndindex.prototype
* @readonly
* @type {string}
* @throws {Error} index object is no longer valid
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var id = idx.id;
* // returns <string>
*/
setReadOnlyAccessor( ndindex.prototype, 'id', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.id;
});

/**
* Returns a boolean indicating if an ndarray index object is actively cached.
*
* @name isCached
* @memberof ndindex.prototype
* @readonly
* @type {boolean}
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var out = idx.isCached;
* // returns true
*/
setReadOnlyAccessor( ndindex.prototype, 'isCached', function get() {
	return !this._invalidated;
});

/**
* Returns the ndarray index object "kind".
*
* @name kind
* @memberof ndindex.prototype
* @readonly
* @type {string}
* @throws {Error} index object is no longer valid
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'int32'
* });
*
* var idx = new ndindex( x, {
*     'kind': 'linear'
* });
* // returns <ndindex>
*
* var v = idx.kind;
* // returns 'linear'
*/
setReadOnlyAccessor( ndindex.prototype, 'kind', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.kind;
});

/**
* Returns the type of an ndarray index object.
*
* @name type
* @memberof ndindex.prototype
* @readonly
* @type {string}
* @throws {Error} index object is no longer valid
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var t = idx.type;
* // returns 'mask'
*/
setReadOnlyAccessor( ndindex.prototype, 'type', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.type;
});

/**
* Serializes an ndarray index object to a string.
*
* @name toString
* @memberof ndindex.prototype
* @type {Function}
* @throws {Error} index object is no longer valid
* @returns {string} serialized index object
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var str = idx.toString();
* // e.g., 'ndindex<0>'
*/
setReadOnly( ndindex.prototype, 'toString', function toString() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return 'ndindex<' + this._node.value.id + '>';
});

/**
* Serializes an ndarray index object as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying an `ndindex` instance.
*
* @name toJSON
* @memberof ndindex.prototype
* @type {Function}
* @throws {Error} index object is no longer valid
* @returns {Object} serialized index object
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* var o = idx.toJSON();
* // returns { 'type': 'ndindex', 'kind': '', 'data': {...} }
*/
setReadOnly( ndindex.prototype, 'toJSON', function toJSON() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This ndarray index instance has already been freed and can no longer be used.' );
	}
	return {
		'type': 'ndindex',
		'kind': this._node.value.kind,
		'data': ndarray2json( this._node.value.data )
	};
});


// EXPORTS //

module.exports = ndindex;
