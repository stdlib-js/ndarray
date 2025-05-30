/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var bytesPerElement = require( './../../../base/bytes-per-element' );
var iterationOrder = require( './../../../base/iteration-order' );
var strides2order = require( './../../../base/strides2order' );
var slice = require( '@stdlib/array/base/slice' );
var Boolean = require( '@stdlib/boolean/ctor' );
var isColumnMajorContiguous = require( './is_column_major_contiguous.js' );
var isRowMajorContiguous = require( './is_row_major_contiguous.js' );
var isContiguous = require( './is_contiguous.js' );
var copyFlags = require( './copy_flags.js' );
var igetValue = require( './iget.js' );
var isetValue = require( './iset.js' );
var setValue = require( './set.js' );
var getValue = require( './get.js' );
var valueOf = require( './valueof.js' ); // eslint-disable-line stdlib/no-redeclare
var toJSON = require( './tojson.js' );
var toString = require( './tostring.js' ); // eslint-disable-line stdlib/no-redeclare
var meta2dataview = require( './meta2dataview.js' );
var meta2dataviewPolyfill = require( './meta2dataview.polyfill.js' );


// MAIN //

/**
* ndarray constructor.
*
* ## Notes
*
* -   To create a zero-dimensional array,
*
*     ```javascript
*     var buffer = [ 1 ];
*     var shape = [];
*     var strides = [ 0 ];
*     var offset = 0;
*
*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*     ```
*
* @constructor
* @param {string} dtype - data type
* @param {(ArrayLikeObject|TypedArray|Buffer)} buffer - data buffer
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - array strides
* @param {NonNegativeInteger} offset - index offset
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns {ndarray} ndarray instance
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*/
function ndarray( dtype, buffer, shape, strides, offset, order ) {
	var contiguous;
	var nbytes;
	var ord;
	var len;
	var i;
	if ( !(this instanceof ndarray) ) {
		return new ndarray( dtype, buffer, shape, strides, offset, order );
	}
	// Compute the number of elements...
	len = 1;
	for ( i = 0; i < shape.length; i++ ) {
		len *= shape[ i ]; // TODO: consider supporting accessor arrays here
	}
	// Compute the number of bytes...
	if ( buffer.BYTES_PER_ELEMENT ) {
		nbytes = buffer.BYTES_PER_ELEMENT * len;
	} else {
		nbytes = null;
	}
	// Set private properties...
	this._byteLength = nbytes;
	this._bytesPerElement = bytesPerElement( dtype );
	this._buffer = buffer;
	this._dtype = dtype;
	this._length = len;
	this._ndims = shape.length;
	this._offset = offset;
	this._order = order;
	this._shape = shape;
	this._strides = strides;
	this._accessors = Boolean( buffer.get && buffer.set );

	this._iterationOrder = iterationOrder( strides );

	// Determine if the array can be stored contiguously:
	contiguous = isContiguous( len, shape, strides, offset, this._iterationOrder ); // eslint-disable-line max-len

	// Infer the array "order" from the stride array (this is supplementary to the `order` parameter):
	ord = strides2order( strides );

	this._flags = {
		'ROW_MAJOR_CONTIGUOUS': isRowMajorContiguous( ord, contiguous ),
		'COLUMN_MAJOR_CONTIGUOUS': isColumnMajorContiguous( ord, contiguous ),
		'READONLY': false
	};

	// Initialize a property for caching serialized meta data:
	this.__meta_dataview__ = null;

	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof ndarray
* @type {string}
* @default 'ndarray'
*
* @example
* var str = ndarray.name;
* // returns 'ndarray'
*/
setReadOnly( ndarray, 'name', 'ndarray' );

/**
* Size (in bytes) of the array (if known).
*
* @name byteLength
* @memberof ndarray.prototype
* @type {(NonNegativeInteger|null)}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var buffer = new Float64Array( [ 1, 2, 3, 4, 5, 6 ] );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
*
* var byteLength = x.byteLength;
* // returns 48
*/
setReadOnlyAccessor( ndarray.prototype, 'byteLength', function get() {
	return this._byteLength;
});

/**
* Size (in bytes) of each array element (if known).
*
* @name BYTES_PER_ELEMENT
* @memberof ndarray.prototype
* @type {(PositiveInteger|null)}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var buffer = new Float64Array( [ 1, 2, 3, 4, 5, 6 ] );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
*
* var nbytes = x.BYTES_PER_ELEMENT;
* // returns 8
*/
setReadOnlyAccessor( ndarray.prototype, 'BYTES_PER_ELEMENT', function get() {
	return this._bytesPerElement;
});

/**
* Pointer to the underlying data buffer.
*
* @name data
* @memberof ndarray.prototype
* @type {(Array|TypedArray|Buffer)}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var data = x.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
setReadOnlyAccessor( ndarray.prototype, 'data', function get() {
	return this._buffer;
});

/**
* Underlying data type.
*
* @name dtype
* @memberof ndarray.prototype
* @type {string}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var dtype = x.dtype;
* // returns 'generic'
*/
setReadOnlyAccessor( ndarray.prototype, 'dtype', function get() {
	return this._dtype;
});

/**
* Meta information, such as information concerning the memory layout of the array.
*
* @name flags
* @memberof ndarray.prototype
* @type {Object}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var flgs = x.flags;
* // returns <Object>
*/
setReadOnlyAccessor( ndarray.prototype, 'flags', function get() {
	return copyFlags( this._flags );
});

/**
* Length of the array.
*
* @name length
* @memberof ndarray.prototype
* @type {NonNegativeInteger}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var len = x.length;
* // returns 6
*/
setReadOnlyAccessor( ndarray.prototype, 'length', function get() {
	return this._length;
});

/**
* Number of dimensions.
*
* @name ndims
* @memberof ndarray.prototype
* @type {PositiveInteger}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var ndims = x.ndims;
* // returns 2
*/
setReadOnlyAccessor( ndarray.prototype, 'ndims', function get() {
	return this._ndims;
});

/**
* Index offset which specifies the buffer index at which to start iterating over array elements.
*
* @name offset
* @memberof ndarray.prototype
* @type {NonNegativeInteger}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var o = x.offset;
* // returns 0
*/
setReadOnlyAccessor( ndarray.prototype, 'offset', function get() {
	return this._offset;
});

/**
* Array order.
*
* ## Notes
*
* -   The array order is either row-major (C-style) or column-major (Fortran-style).
*
* @name order
* @memberof ndarray.prototype
* @type {string}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var order = x.order;
* // returns 'row-major'
*/
setReadOnlyAccessor( ndarray.prototype, 'order', function get() {
	return this._order;
});

/**
* Shape of the array.
*
* @name shape
* @memberof ndarray.prototype
* @type {NonNegativeIntegerArray}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var s = x.shape;
* // returns [ 3, 2 ]
*/
setReadOnlyAccessor( ndarray.prototype, 'shape', function get() {
	return slice( this._shape, 0, this._shape.length );
});

/**
* Index strides which specify how to access data along corresponding array dimensions.
*
* @name strides
* @memberof ndarray.prototype
* @type {IntegerArray}
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var s = x.strides;
* // returns [ 2, 1 ]
*/
setReadOnlyAccessor( ndarray.prototype, 'strides', function get() {
	return slice( this._strides, 0, this._strides.length );
});

/**
* Returns an array element.
*
* ## Notes
*
* -   The number of indices should **equal** the number of dimensions. Accordingly, for zero-dimensional arrays, no indices should be provided.
*
* @name get
* @memberof ndarray.prototype
* @type {Function}
* @param {...integer} [idx] - indices
* @returns {*} array element
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.get( 1, 1 );
* // returns 4
*/
setReadOnly( ndarray.prototype, 'get', getValue );

/**
* Returns an array element located at a specified linear index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the input argument is ignored and, for clarity, should not be provided.
*
* @name iget
* @memberof ndarray.prototype
* @type {Function}
* @param {integer} [idx] - linear index
* @returns {*} array element
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.iget( 3 );
* // returns 4
*/
setReadOnly( ndarray.prototype, 'iget', igetValue );

/**
* Sets an array element.
*
* ## Notes
*
* -   The number of indices should **equal** the number of dimensions. Accordingly, for zero-dimensional arrays, no indices should be provided.
*
* @name set
* @memberof ndarray.prototype
* @type {Function}
* @param {...integer} [idx] - indices
* @param {*} v - value to set
* @returns {ndarray} ndarray instance
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.get( 1, 1 );
* // returns 4
*
* x.set( 1, 1, 10 );
*
* var b = x.data;
* // returns [ 1, 2, 3, 10, 5, 6 ]
*
* v = x.get( 1, 1 );
* // returns 10
*/
setReadOnly( ndarray.prototype, 'set', setValue );

/**
* Sets an array element located at a specified linear index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the first, and only, argument should be the value to set.
*
* @name iset
* @memberof ndarray.prototype
* @type {Function}
* @param {integer} [idx] - linear index
* @param {*} v - value to set
* @returns {ndarray} ndarray instance
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.iget( 3 );
* // returns 4
*
* x.iset( 3, 10 );
*
* var b = x.data;
* // returns [ 1, 2, 3, 10, 5, 6 ]
*
* v = x.iget( 3 );
* // returns 10
*/
setReadOnly( ndarray.prototype, 'iset', isetValue );

/**
* Serializes an ndarray as a string.
*
* ## Notes
*
* -   The method does **not** serialize data outside of the buffer region defined by the array configuration.
*
* @name toString
* @memberof ndarray.prototype
* @type {Function}
* @returns {string} serialized ndarray
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 2;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var str = x.toString();
* // returns "ndarray( 'generic', [ 3, 4, 5, 6, 7, 8 ], [ 3, 2 ], [ 2, 1 ], 0, 'row-major' )"
*/
setReadOnly( ndarray.prototype, 'toString', toString );

/**
* Serializes an ndarray as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying an `ndarray` instance.
* -   The method does **not** serialize data outside of the buffer region defined by the array configuration.
*
* @name toJSON
* @memberof ndarray.prototype
* @type {Function}
* @returns {Object} serialized ndarray
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 2;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var o = x.toJSON();
* // e.g., returns { 'type': 'ndarray', 'dtype': 'generic', 'flags': {...}, 'offset': 0, 'order': 'row-major', 'shape': [ 3, 2 ], 'strides': [ 2, 1 ], 'data': [ 3, 4, 5, 6, 7, 8 ] }
*/
setReadOnly( ndarray.prototype, 'toJSON', toJSON );

/**
* Converts an ndarray instance to a primitive value.
*
* ## Notes
*
* -   Only zero-dimensional ndarrays are converted to a primitive value. For ndarray instances having one or more dimensions, the method returns the `this` value, as is the default behavior for objects.
*
* @name valueOf
* @memberof ndarray.prototype
* @type {Function}
* @returns {(*|ndarray)} result
*
* @example
* var buffer = [ 3.14 ];
* var shape = [];
* var strides = [ 0 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.valueOf();
* // returns 3.14
*
* @example
* var buffer = [ 3.14 ];
* var shape = [ 1 ];
* var strides = [ 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.valueOf();
* // returns <ndarray>
*/
setReadOnly( ndarray.prototype, 'valueOf', valueOf );

/**
* Serializes ndarray meta data to a `DataView`.
*
* ## Notes
*
* -   Meta data format:
*
*     ```text
*     | <endianness> (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) | <flags> (4 bytes) |
*     ```
*
*     where `strides` and `offset` are in units of bytes.
*
* -   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.
*
* -   Serialization is performed according to host byte order (endianness).
*
* -   Consumers of this method should treat the returned `DataView` as **immutable**. Otherwise, mutation can invalidate meta data and potentially affect other consumers.
*
* @private
* @name __array_meta_dataview__
* @memberof ndarray.prototype
* @type {Function}
* @returns {DataView} serialized meta data
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 2;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var dv = x.__array_meta_dataview__();
* // returns <DataView>
*/
setReadOnly( ndarray.prototype, '__array_meta_dataview__', ( hasBigIntSupport() ) ? meta2dataview : meta2dataviewPolyfill );


// EXPORTS //

module.exports = ndarray;
