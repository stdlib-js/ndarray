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

'use strict';

// MODULES //

var emptyLike = require( './../../../base/empty-like' );
var reverse = require( './../../../base/reverse' );
var assign = require( './../../../base/assign' );


// MAIN //

/**
* Returns a new ndarray where the order of elements of an input ndarray is reversed along each dimension.
*
* @param {ndarray} x - input array
* @returns {ndarray} output array
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
* var y = toReversed( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
*/
function toReversed( x ) {
	var out;
	var xr;

	// Create a reversed view of the input ndarray:
	xr = reverse( x, false );

	// Create an output ndarray with the same shape and data type as the input ndarray:
	out = emptyLike( x );

	// Assign the elements of the reversed input ndarray view to the output ndarray:
	assign( [ xr, out ] );

	return out;
}


// EXPORTS //

module.exports = toReversed;
