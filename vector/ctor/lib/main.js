/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isIterableLike = require( '@stdlib/assert/is-iterable-like' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var isDataType = require( './../../../base/assert/is-data-type' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var buffer = require( './../../../base/buffer' );
var typedarray = require( '@stdlib/array/typed' );
var copy = require( '@stdlib/array/base/copy' );
var ndarray = require( './../../../ctor' );
var defaults = require( './../../../defaults' );
var strides2offset = require( './../../../base/strides2offset' );
var arraybuffer2buffer = require( '@stdlib/buffer/from-arraybuffer' );
var array2buffer = require( '@stdlib/buffer/from-array' );
var copyBuffer = require( '@stdlib/buffer/from-buffer' );
var iterator2array = require( '@stdlib/array/from-iterator' );
var bytesPerElement = require( './../../../base/bytes-per-element' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );
var DEFAULT_ORDER = defaults.get( 'order' );


// FUNCTIONS //

/**
* Tests whether a data type is a "generic" data type.
*
* @private
* @param {string} dtype - data type
* @returns {boolean} result
*/
function isGenericDataType( dtype ) {
	return ( dtype === 'generic' );
}

/**
* Tests whether a data type is a binary data type.
*
* @private
* @param {string} dtype - data type
* @returns {boolean} result
*/
function isBinaryDataType( dtype ) {
	return ( dtype === 'binary' );
}

/**
* Resolves the order of the output vector.
*
* @private
* @param {*} options - options argument
* @returns {string} order
*/
function resolveOrder( options ) {
	if ( hasOwnProp( options, 'order' ) ) {
		return options.order;
	}
	return DEFAULT_ORDER;
}

/**
* Creates a one-dimensional ndarray from an ArrayBuffer.
*
* @private
* @param {string} dtype - data type
* @param {ArrayBuffer} buffer - ArrayBuffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length (in units of elements)
* @param {NonNegativeInteger} byteOffset - byte offset of the first indexed element
* @param {string} order - memory layout (either row-major or column-major)
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=false] - boolean indicating whether to return a read-only ndarray
* @param {string} [options.mode='throw'] - specifies how to handle indices which exceed ndarray dimensions
* @throws {TypeError} data type must be compatible with the provided ArrayBuffer
* @returns {ndarray} one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2vector( 'float64', buf, 4, 1, 0, 'row-major' );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 4
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2vector( 'float32', buf, 8, 1, 0, 'row-major' );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 8
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2vector( 'float64', buf, 4, -1, 32, 'row-major' );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 4
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2vector( 'float64', buf, 2, -1, 24, 'row-major' );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 2
*/
function arraybuffer2vector( dtype, buffer, length, stride, byteOffset, order, options ) {
	var buf;
	var sh;
	var st;
	var N;
	var o;

	if ( isGenericDataType( dtype ) ) {
		throw new TypeError( format( 'invalid argument. ArrayBuffer is incompatible with the specified data type. Value: `%s`.', dtype ) );
	}
	o = byteOffset;

	// Compute the number of underlying elements across which the vector view will span:
	N = length * stride;

	// Adjust the byte offset to point to the element marking the beginning of the view:
	if ( stride < 0 ) {
		N *= -1;
		o -= N * bytesPerElement( dtype );
	}
	// Create the underlying ndarray buffer:
	if ( isBinaryDataType( dtype ) ) {
		buf = arraybuffer2buffer( buffer, o, N );
	} else {
		buf = typedarray( buffer, o, N, dtype );
	}
	// Resolve ndarray meta data:
	sh = [ length ];
	st = [ stride ];
	o = strides2offset( sh, st );

	// Return a new ndarray instance:
	if ( arguments.length > 6 ) {
		return new ndarray( dtype, buf, sh, st, o, order, options );
	}
	return new ndarray( dtype, buf, sh, st, o, order );
}

/**
* Returns a vector having a specified data type.
*
* @private
* @param {(NonNegativeInteger|Collection|ArrayBuffer|Buffer|Iterable|Options)} arg - length, typed array, array-like object, buffer, iterable, or options object
* @param {string} dtype - data type
* @param {(Options|null)} options - function options
* @param {boolean} [options.readonly=false] - boolean indicating whether to return a read-only ndarray
* @param {string} [options.mode='throw'] - specifies how to handle indices which exceed ndarray dimensions
* @returns {(ndarray|null)} one-dimensional ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var v = vectorWithDType( 10, 'float64', {} );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 10
*
* var dt = getDType( v );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var v = vectorWithDType( [ 1, 2, 3, 4 ], 'generic', {} );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 4
*
* var dt = getDType( v );
* // returns 'generic'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = vectorWithDType( buf, 'float64', {} );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 4
*
* var dt = getDType( v );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var v = vectorWithDType( {}, 'float64', null );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 0
*
* var dt = getDType( v );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var v = vectorWithDType( array2iterator( [ 1, 2, 3, 4 ] ), 'generic', {} );
* // returns <ndarray>
*
* var len = numel( v );
* // returns 4
*
* var dt = getDType( v );
* // returns 'generic'
*/
function vectorWithDType( arg, dtype, options ) {
	var opts;
	var buf;

	// Note: in all of the following, we delegate option validation to the ndarray constructor...
	if ( options === null ) {
		opts = {};
	} else {
		opts = options;
	}
	// Case: vector( length )
	if ( isNonNegativeInteger( arg ) ) {
		buf = buffer( dtype, arg );
		return new ndarray( dtype, buf, [ buf.length ], [ 1 ], 0, resolveOrder( opts ), opts );
	}
	// Case: vector( Buffer )
	if ( isBuffer( arg ) ) {
		if ( isGenericDataType( dtype ) ) {
			buf = copy( arg );
		} else if ( isBinaryDataType( dtype ) ) {
			buf = copyBuffer( arg );
		} else {
			buf = typedarray( arg, dtype );
		}
		return new ndarray( dtype, buf, [ buf.length ], [ 1 ], 0, resolveOrder( opts ), opts );
	}
	// Case: vector( collection )
	if ( isCollection( arg ) ) {
		if ( isGenericDataType( dtype ) ) {
			buf = copy( arg );
		} else if ( isBinaryDataType( dtype ) ) {
			buf = array2buffer( arg ); // note: we assume that `arg` is an array of octets
		} else {
			buf = typedarray( arg, dtype );
		}
		return new ndarray( dtype, buf, [ buf.length ], [ 1 ], 0, resolveOrder( opts ), opts );
	}
	// Case: vector( ArrayBuffer )
	if ( isArrayBuffer( arg ) ) {
		return arraybuffer2vector( dtype, arg, arg.byteLength/bytesPerElement( dtype ), 1, 0, resolveOrder( opts ), opts );
	}
	// Case: vector( Iterable )
	if ( isIterableLike( arg ) ) {
		if ( isGenericDataType( dtype ) ) {
			buf = arg[ ITERATOR_SYMBOL ]();
			buf = iterator2array( buf );
		} else if ( isBinaryDataType( dtype ) ) {
			buf = arg[ ITERATOR_SYMBOL ]();
			buf = array2buffer( iterator2array( buf ) ); // note: the temporary array is necessary as we cannot allocate a `Buffer` in advance due to the iterator's indeterminate length
		} else {
			buf = typedarray( arg, dtype );
		}
		return new ndarray( dtype, buf, [ buf.length ], [ 1 ], 0, resolveOrder( opts ), opts );
	}
	// Case: vector( options )
	if ( options === null && isPlainObject( arg ) ) {
		buf = buffer( dtype, 0 );
		return new ndarray( dtype, buf, [ buf.length ], [ 1 ], 0, resolveOrder( arg ), arg );
	}
	return null;
}


// MAIN //

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* ## Notes
*
* -   This API is intended to match the conventions of `@stdlib/array/typed`, which has a similar signature.
*
* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype='float64'] - data type
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=false] - boolean indicating whether to return a read-only vector
* @param {string} [options.mode='throw'] - specifies how to handle indices which exceed vector dimensions
* @param {string} [options.order='row-major'] - memory layout (either row-major or column-major)
* @throws {TypeError} first argument must be either a length, typed array, array-like object, buffer, iterable, data type, or options object
* @throws {TypeError} must provide valid options
* @returns {ndarray} one-dimensional ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector();
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector( 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector( [ 1.0, 2.0 ] );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector( [ 1.0, 2.0 ], 'float32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 4
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 16 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = vector( buf, 16, 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*/
function vector() {
	var nargs;
	var arg0;
	var arg1;
	var arg2;
	var arg3;
	var arg4;
	var buf;
	var out;

	nargs = arguments.length;

	// Case: vector()
	if ( nargs === 0 ) {
		buf = buffer( DEFAULT_DTYPE, 0 );
		return new ndarray( DEFAULT_DTYPE, buf, [ buf.length ], [ 1 ], 0, DEFAULT_ORDER );
	}
	arg0 = arguments[ 0 ];

	// Case: vector( arg0 );
	if ( nargs === 1 ) {
		if ( isDataType( arg0 ) ) {
			return vectorWithDType( 0, arg0, null );
		}
		out = vectorWithDType( arg0, DEFAULT_DTYPE, null );
		if ( out === null ) {
			throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, iterable, data type, or options object. Value: `%s`.', arg0 ) );
		}
		return out;
	}
	arg1 = arguments[ 1 ];

	// Case: vector( arg0, arg1 )
	if ( nargs === 2 ) {
		// Case: vector( dtype, options )
		if ( isDataType( arg0 ) ) {
			return vectorWithDType( 0, arg0, arg1 );
		}
		// Case: vector( arg0, dtype )
		if ( isDataType( arg1 ) ) {
			out = vectorWithDType( arg0, arg1, null );
			if ( out === null ) {
				throw new TypeError( format( 'invalid argument. First argument must be a length, ArrayBuffer, typed array, array-like object, or iterable. Value: `%s`.', arg0 ) );
			}
			return out;
		}
		// Case: vector( ArrayBuffer, byteOffset )
		if ( isNonNegativeInteger( arg1 ) ) {
			if ( !isArrayBuffer( arg0 ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', arg0 ) );
			}
			return arraybuffer2vector( DEFAULT_DTYPE, arg0, (arg0.byteLength-arg1)/bytesPerElement( DEFAULT_DTYPE ), 1, arg1, DEFAULT_ORDER );
		}
		// Case: vector( arg0, options )
		out = vectorWithDType( arg0, DEFAULT_DTYPE, arg1 );
		if ( out === null ) {
			throw new TypeError( format( 'invalid argument. First argument must be a length, ArrayBuffer, typed array, array-like object, or iterable. Value: `%s`.', arg0 ) );
		}
		return out;
	}
	arg2 = arguments[ 2 ];

	// Case: vector( arg0, arg1, arg2 )
	if ( nargs === 3 ) {
		// Case: vector( ArrayBuffer, byteOffset, dtype )
		if ( isDataType( arg2 ) ) {
			if ( !isArrayBuffer( arg0 ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', arg0 ) );
			}
			if ( !isNonNegativeInteger( arg1 ) ) {
				throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', arg1 ) );
			}
			return arraybuffer2vector( arg2, arg0, (arg0.byteLength-arg1)/bytesPerElement( arg2 ), 1, arg1, DEFAULT_ORDER );
		}
		// Case: vector( arg0, dtype, options )
		if ( isDataType( arg1 ) ) {
			out = vectorWithDType( arg0, arg1, arg2 );
			if ( out === null ) {
				throw new TypeError( format( 'invalid argument. First argument must be a length, ArrayBuffer, typed array, array-like object, or iterable. Value: `%s`.', arg0 ) );
			}
			return out;
		}
		// Case: vector( ArrayBuffer, byteOffset, arg2 )
		if ( !isArrayBuffer( arg0 ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', arg0 ) );
		}
		if ( !isNonNegativeInteger( arg1 ) ) {
			throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', arg1 ) );
		}
		// Case: vector( ArrayBuffer, byteOffset, options )
		if ( isPlainObject( arg2 ) ) {
			return arraybuffer2vector( DEFAULT_DTYPE, arg0, (arg0.byteLength-arg1)/bytesPerElement( DEFAULT_DTYPE ), 1, arg1, resolveOrder( arg2 ), arg2 );
		}
		// Case: vector( ArrayBuffer, byteOffset, length )
		if ( !isNonNegativeInteger( arg2 ) ) {
			throw new TypeError( format( 'invalid argument. Length must be a nonnegative integer. Value: `%s`.', arg2 ) );
		}
		return arraybuffer2vector( DEFAULT_DTYPE, arg0, arg2, 1, arg1, DEFAULT_ORDER );
	}
	arg3 = arguments[ 3 ];

	// Case: vector( ArrayBuffer, byteOffset, arg2, arg3 )
	if ( nargs === 4 ) {
		if ( !isArrayBuffer( arg0 ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', arg0 ) );
		}
		if ( !isNonNegativeInteger( arg1 ) ) {
			throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', arg1 ) );
		}
		// Case: vector( ArrayBuffer, byteOffset, length, dtype )
		if ( isNonNegativeInteger( arg2 ) ) {
			if ( isDataType( arg3 ) ) {
				return arraybuffer2vector( arg3, arg0, arg2, 1, arg1, DEFAULT_ORDER );
			}
			// Case: vector( ArrayBuffer, byteOffset, length, options )
			if ( !isPlainObject( arg3 ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', arg3 ) );
			}
			return arraybuffer2vector( DEFAULT_DTYPE, arg0, arg2, 1, arg1, resolveOrder( arg3 ), arg3 );
		}
		// Case: vector( ArrayBuffer, byteOffset, dtype, options )
		if ( !isDataType( arg2 ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a recognized/supported data type. Value: `%s`.', arg2 ) );
		}
		if ( !isPlainObject( arg3 ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', arg3 ) );
		}
		return arraybuffer2vector( arg2, arg0, (arg0.byteLength-arg1)/bytesPerElement( arg2 ), 1, arg1, resolveOrder( arg3 ), arg3 );
	}
	arg4 = arguments[ 4 ];

	// Case: vector( ArrayBuffer, byteOffset, length, dtype, options )
	if ( !isArrayBuffer( arg0 ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', arg0 ) );
	}
	if ( !isNonNegativeInteger( arg1 ) ) {
		throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', arg1 ) );
	}
	if ( !isNonNegativeInteger( arg2 ) ) {
		throw new TypeError( format( 'invalid argument. Length must be a nonnegative integer. Value: `%s`.', arg2 ) );
	}
	if ( !isDataType( arg3 ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a recognized/supported data type. Value: `%s`.', arg3 ) );
	}
	if ( !isPlainObject( arg4 ) ) {
		throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', arg4 ) );
	}
	return arraybuffer2vector( arg3, arg0, arg2, 1, arg1, resolveOrder( arg4 ), arg4 );
}


// EXPORTS //

module.exports = vector;
