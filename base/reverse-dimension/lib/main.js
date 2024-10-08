/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var args2multislice = require( '@stdlib/slice/base/args2multislice' );
var Slice = require( '@stdlib/slice/ctor' );
var slice = require( './../../../base/slice' );
var nulls = require( '@stdlib/array/base/nulls' );
var ndims = require( './../../../base/ndims' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a view of an input ndarray in which the order of elements along a specified dimension is reversed.
*
* @param {ndarray} x - input array
* @param {integer} dim - index of dimension to reverse
* @param {boolean} writable - boolean indicating whether a returned array should be writable
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {RangeError} dimension index exceeds the number of dimensions
* @returns {ndarray} ndarray view
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
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var y = reverseDimension( x, 0, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 5.0, 6.0 ], [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
*/
function reverseDimension( x, dim, writable ) {
	var args;
	var N;
	var d;

	// Retrieve the number of array dimensions:
	N = ndims( x );

	// Check whether we were provided a zero-dimensional array...
	if ( N === 0 ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.', N ) );
	}
	// Normalize the dimension index...
	d = dim;
	if ( d < 0 ) {
		d += N;
		if ( d < 0 ) {
			throw new RangeError( format( 'invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.', N, dim ) );
		}
	} else if ( d >= N ) {
		throw new RangeError( format( 'invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.', N, dim ) );
	}
	// Define a list of MultiSlice constructor arguments:
	args = nulls( N );
	args[ d ] = new Slice( null, null, -1 );

	// Return a new array view:
	return slice( x, args2multislice( args ), true, writable );
}


// EXPORTS //

module.exports = reverseDimension;
