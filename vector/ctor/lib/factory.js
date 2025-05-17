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
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isDataType = require( './../../../base/assert/is-data-type' );
var objectAssign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var main = require( './main.js' );


// MAIN //

/**
* Returns a function for creating a vector (i.e., a one-dimensional ndarray).
*
* @param {string} dtype - data type
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=false] - boolean indicating whether to return a read-only vector by default
* @param {string} [options.mode='throw'] - specifies the default behavior when handling indices which exceed vector dimensions
* @param {string} [options.order='row-major'] - default memory layout (either row-major or column-major)
* @throws {TypeError} first argument must be a supported data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function for creating a vector
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var Float32Vector = factory( 'float32' );
*
* var arr = new Float32Vector( [ 1, 2, 3 ] );
* // returns <ndarray>
*
* var dt = getDType( arr );
* // returns 'float32'
*
* var len = numel( arr );
* // returns 3
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var Float32Vector = factory( 'float32' );
*
* var arr = new Float32Vector( 3 );
* // returns <ndarray>
*
* var dt = getDType( arr );
* // returns 'float32'
*
* var len = numel( arr );
* // returns 3
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var Float32Vector = factory( 'float32' );
*
* var buf = new ArrayBuffer( 12 );
* var arr = new Float32Vector( buf );
* // returns <ndarray>
*
* var dt = getDType( arr );
* // returns 'float32'
*
* var len = numel( arr );
* // returns 3
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var Float32Vector = factory( 'float32' );
*
* var buf = new ArrayBuffer( 12 );
* var arr = new Float32Vector( buf, 4 );
* // returns <ndarray>
*
* var dt = getDType( arr );
* // returns 'float32'
*
* var len = numel( arr );
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var Float32Vector = factory( 'float32' );
*
* var buf = new ArrayBuffer( 12 );
* var arr = new Float32Vector( buf, 4, 1 );
* // returns <ndarray>
*
* var dt = getDType( arr );
* // returns 'float32'
*
* var len = numel( arr );
* // returns 1
*/
function factory( dtype, options ) {
	var opts;
	var err;
	if ( !isDataType( dtype ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a supported data type. Value: `%s`.', dtype ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	return vector;

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @private
	* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or iterable
	* @param {NonNegativeInteger} [byteOffset=0] - byte offset
	* @param {NonNegativeInteger} [length] - view length
	* @param {Options} [options] - function options
	* @param {boolean} [options.readonly] - boolean indicating whether to return a read-only vector
	* @param {string} [options.mode] - specifies how to handle indices which exceed vector dimensions
	* @param {string} [options.order] - memory layout (either row-major or column-major)
	* @throws {Error} unexpected error
	* @returns {ndarray} one-dimensional ndarray
	*/
	function vector() {
		var options;
		var nargs;
		var arg0;
		var arg1;
		var err;

		options = objectAssign( {}, opts );
		nargs = arguments.length;

		// Case: vector()
		if ( nargs === 0 ) {
			return main( dtype, options );
		}
		// Case: vector( ArrayBuffer, byteOffset, length, options )
		if ( nargs > 3 ) {
			err = validate( options, arguments[ 3 ] );
			if ( err ) {
				throw err;
			}
			return main( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ], dtype, options );
		}
		// Case: vector( ArrayBuffer, byteOffset, arg2 )
		if ( nargs === 3 ) {
			// Case: vector( ArrayBuffer, byteOffset, length )
			if ( isNonNegativeInteger( arguments[ 2 ] ) ) {
				return main( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ], dtype, options );
			}
			// Case: vector( ArrayBuffer, byteOffset, options )
			err = validate( options, arguments[ 2 ] );
			if ( err ) {
				throw err;
			}
			return main( arguments[ 0 ], arguments[ 1 ], dtype, options );
		}
		// Case: vector( arg0, arg1 )
		if ( nargs === 2 ) {
			arg0 = arguments[ 0 ];
			arg1 = arguments[ 1 ];

			// Case: vector( length, options )
			if ( isNonNegativeInteger( arg0 ) ) {
				err = validate( options, arg1 );
				if ( err ) {
					throw err;
				}
				return main( arg0, dtype, options );
			}
			// Case: vector( ArrayBuffer, arg1 )
			if ( isArrayBuffer( arg0 ) ) {
				// Case: vector( ArrayBuffer, byteOffset )
				if ( isNonNegativeInteger( arg1 ) ) {
					return main( arg0, arg1, dtype, options );
				}
				// Case: vector( ArrayBuffer, options )
				err = validate( options, arg1 );
				if ( err ) {
					throw err;
				}
				return main( arg0, dtype, options );
			}
			// Case: vector( collection, options )
			if ( isCollection( arg0 ) ) {
				err = validate( options, arg1 );
				if ( err ) {
					throw err;
				}
				return main( arg0, dtype, options );
			}
			// Case: vector( iterable, options )
			err = validate( options, arg1 );
			if ( err ) {
				throw err;
			}
			return main( arg0, dtype, options );
		}
		// nargs === 1
		arg0 = arguments[ 0 ];

		// Case: vector( length|ArrayBuffer|Collection|Iterable )
		if (
			isNonNegativeInteger( arg0 ) ||
			isArrayBuffer( arg0 ) ||
			isCollection( arg0 ) ||
			isIterableLike( arg0 )
		) {
			return main( arg0, dtype, options );
		}
		// Case: vector( options )
		err = validate( options, arg0 );
		if ( err ) {
			throw err;
		}
		return main( dtype, options );
	}
}


// EXPORTS //

module.exports = factory;
