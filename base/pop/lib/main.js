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

var normalizeIndex = require( './../../../base/normalize-index' );
var getShape = require( './../../../base/shape' );
var sliceFrom = require( './../../../base/slice-from' );
var sliceTo = require( './../../../base/slice-to' );
var nulls = require( '@stdlib/array/base/nulls' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an array containing a truncated view of an input ndarray and a view of the last element(s) along a specified dimension.
*
* @param {ndarray} x - input array
* @param {integer} dim - dimension along which to perform the operation
* @param {boolean} writable - boolean indicating whether returned arrays should be writable
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {RangeError} dimension index exceeds the number of dimensions
* @returns {Array<ndarray>} a list of ndarrays
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
* var y = pop( x, 0, false );
* // returns [ <ndarray>, <ndarray> ]
*
* arr = ndarray2array( y[ 0 ] );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* arr = ndarray2array( y[ 1 ] );
* // returns [ [ 5.0, 6.0 ] ]
*/
function pop( x, dim, writable ) {
	var v0;
	var v1;
	var sh;
	var N;
	var s;

	// Retrieve array meta data:
	sh = getShape( x );
	N = sh.length;

	// Check whether we were provided a zero-dimensional array...
	if ( N === 0 ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.', N ) );
	}
	// Normalize the dimension index:
	dim = normalizeIndex( dim, N-1 );
	if ( dim === -1 ) {
		throw new RangeError( format( 'invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.', N, dim ) );
	}
	// Define a list of slice arguments:
	s = nulls( N );
	s[ dim ] = sh[ dim ] - 1;

	// Create a truncated view:
	v0 = sliceTo( x, s, false, writable );

	// Create a view of the last element(s):
	v1 = sliceFrom( x, s, false, writable );

	return [ v0, v1 ];
}


// EXPORTS //

module.exports = pop;
