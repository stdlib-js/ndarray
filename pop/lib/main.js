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

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var base = require( './../../base/pop' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an array containing a read-only truncated view of an input ndarray and a read-only view of the last element(s) along a specified dimension.
*
* @param {ndarray} x - input array
* @param {Object} [options] - functions options
* @param {integer} [options.dim=-1] - dimension along which to perform the operation
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {RangeError} dimension index exceeds the number of dimensions
* @throws {TypeError} options arguments must be an object
* @throws {TypeError} must provide valid options
* @returns {Array<ndarray>} a list of ndarray views
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var y = pop( x );
* // returns [ <ndarray>, <ndarray> ]
*
* arr = ndarray2array( y[ 0 ] );
* // returns [ [ 1.0 ], [ 3.0 ], [ 5.0 ] ]
*
* arr = ndarray2array( y[ 1 ] );
* // returns [ [ 2.0 ], [ 4.0 ], [ 6.0 ] ]
*/
function pop( x ) {
	var options;
	var opts;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	opts = {
		'dim': -1
	};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'dim' ) ) {
			if ( !isInteger( options.dim ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be an integer. Option: `%s`.', 'dim', options.dim ) );
			}
			opts.dim = options.dim;
		}
	}
	return base( x, opts.dim, false );
}


// EXPORTS //

module.exports = pop;
