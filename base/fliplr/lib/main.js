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

var MultiSlice = require( '@stdlib/slice/multi' );
var reverseDimension = require( './../../../base/reverse-dimension' );
var slice = require( './../../../base/slice' );
var ndims = require( './../../../base/ndims' );


// MAIN //

/**
* Returns a view of an input ndarray in which the order of elements along the last dimension is reversed.
*
* @param {ndarray} x - input array
* @param {boolean} writable - boolean indicating whether a returned array should be writable
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
* var y = fliplr( x, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 2.0, 1.0 ], [ 4.0, 3.0 ], [ 6.0, 5.0 ] ]
*/
function fliplr( x, writable ) {
	// Check whether we were provided a zero-dimensional array...
	if ( ndims( x ) === 0 ) {
		// Nothing to reverse so just return a new view:
		return slice( x, new MultiSlice(), true, writable );
	}
	return reverseDimension( x, -1, writable );
}


// EXPORTS //

module.exports = fliplr;
