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

var normalizeIndex = require( './../../../base/normalize-index' );
var ndims = require( './../../../base/ndims' );
var getShape = require( './../../../base/shape' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the size (i.e., number of elements) of a specified dimension for a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {integer} dim - dimension index
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {RangeError} dimension index exceeds the number of dimensions
* @returns {NonNegativeInteger} dimension size
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = numelDimension( zeros( [ 4, 2, 3 ] ), 0 );
* // returns 4
*/
function numelDimension( x, dim ) {
	var N;
	var d;

	// Retrieve array meta data:
	N = ndims( x );

	// Check whether we were provided a zero-dimensional array...
	if ( N === 0 ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.', N ) );
	}
	// Normalize the dimension index:
	d = normalizeIndex( dim, N-1 );
	if ( d === -1 ) {
		throw new RangeError( format( 'invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.', N, dim ) );
	}
	// Return the dimension size:
	return getShape( x, false )[ d ];
}


// EXPORTS //

module.exports = numelDimension;
