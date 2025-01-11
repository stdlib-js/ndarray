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

var iterationOrder = require( './../../../base/iteration-order' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
var ndarray2object = require( './../../../base/ndarraylike2object' );
var blockedaccessorunary2d = require( './2d_blocked_accessors.js' );
var blockedaccessorunary3d = require( './3d_blocked_accessors.js' );
var blockedaccessorunary4d = require( './4d_blocked_accessors.js' );
var blockedaccessorunary5d = require( './5d_blocked_accessors.js' );
var blockedaccessorunary6d = require( './6d_blocked_accessors.js' );
var blockedaccessorunary7d = require( './7d_blocked_accessors.js' );
var blockedaccessorunary8d = require( './8d_blocked_accessors.js' );
var blockedaccessorunary9d = require( './9d_blocked_accessors.js' );
var blockedaccessorunary10d = require( './10d_blocked_accessors.js' );
var blockedunary2d = require( './2d_blocked.js' );
var blockedunary3d = require( './3d_blocked.js' );
var blockedunary4d = require( './4d_blocked.js' );
var blockedunary5d = require( './5d_blocked.js' );
var blockedunary6d = require( './6d_blocked.js' );
var blockedunary7d = require( './7d_blocked.js' );
var blockedunary8d = require( './8d_blocked.js' );
var blockedunary9d = require( './9d_blocked.js' );
var blockedunary10d = require( './10d_blocked.js' );
var accessorunary0d = require( './0d_accessors.js' );
var accessorunary1d = require( './1d_accessors.js' );
var accessorunary2d = require( './2d_accessors.js' );
var accessorunary3d = require( './3d_accessors.js' );
var accessorunary4d = require( './4d_accessors.js' );
var accessorunary5d = require( './5d_accessors.js' );
var accessorunary6d = require( './6d_accessors.js' );
var accessorunary7d = require( './7d_accessors.js' );
var accessorunary8d = require( './8d_accessors.js' );
var accessorunary9d = require( './9d_accessors.js' );
var accessorunary10d = require( './10d_accessors.js' );
var accessorunarynd = require( './nd_accessors.js' );
var unary0d = require( './0d.js' );
var unary1d = require( './1d.js' );
var unary2d = require( './2d.js' );
var unary3d = require( './3d.js' );
var unary4d = require( './4d.js' );
var unary5d = require( './5d.js' );
var unary6d = require( './6d.js' );
var unary7d = require( './7d.js' );
var unary8d = require( './8d.js' );
var unary9d = require( './9d.js' );
var unary10d = require( './10d.js' );
var unarynd = require( './nd.js' );


// VARIABLES //

var UNARY = [
	unary0d,
	unary1d,
	unary2d,
	unary3d,
	unary4d,
	unary5d,
	unary6d,
	unary7d,
	unary8d,
	unary9d,
	unary10d
];
var ACCESSOR_UNARY = [
	accessorunary0d,
	accessorunary1d,
	accessorunary2d,
	accessorunary3d,
	accessorunary4d,
	accessorunary5d,
	accessorunary6d,
	accessorunary7d,
	accessorunary8d,
	accessorunary9d,
	accessorunary10d
];
var BLOCKED_UNARY = [
	blockedunary2d, // 0
	blockedunary3d,
	blockedunary4d,
	blockedunary5d,
	blockedunary6d,
	blockedunary7d,
	blockedunary8d,
	blockedunary9d,
	blockedunary10d // 8
];
var BLOCKED_ACCESSOR_UNARY = [
	blockedaccessorunary2d, // 0
	blockedaccessorunary3d,
	blockedaccessorunary4d,
	blockedaccessorunary5d,
	blockedaccessorunary6d,
	blockedaccessorunary7d,
	blockedaccessorunary8d,
	blockedaccessorunary9d,
	blockedaccessorunary10d // 8
];
var MAX_DIMS = UNARY.length - 1;


// MAIN //

/**
* Performs a reduction over elements in an input ndarray.
*
* ## Notes
*
* -   Each provided ndarray should be an `object` with the following properties:
*
*     -   **dtype**: data type.
*     -   **data**: data buffer.
*     -   **shape**: dimensions.
*     -   **strides**: stride lengths.
*     -   **offset**: index offset.
*     -   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing one input array
* @param {*} initial - initial value
* @param {Callback} accumulator - callback function
* @returns {*} result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function add( acc, x ) {
*     return acc + x;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Compute the sum:
* var v = accumulateUnary( [ x ], 0.0, add );
* // returns 39.0
*/
function accumulateUnary( arrays, initial, accumulator ) {
	var ndims;
	var xmmv;
	var shx;
	var iox;
	var len;
	var sx;
	var ox;
	var ns;
	var x;
	var d;
	var i;

	// Unpack the ndarray and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	shx = x.shape;
	ndims = shx.length;

	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_UNARY[ ndims ]( x, initial, accumulator );
		}
		return UNARY[ ndims ]( x, initial, accumulator );
	}
	// Determine the number of elements and the number of singleton dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < ndims; i++ ) {
		d = shx[ i ];

		// Note that, if one of the dimensions is `0`, the length will be `0`...
		len *= d;

		// Check whether the current dimension is a singleton dimension...
		if ( d === 1 ) {
			ns += 1;
		}
	}
	// Check whether we were provided an empty ndarray...
	if ( len === 0 ) {
		return;
	}
	// Determine whether the ndarray is one-dimensional and thus readily translates to a one-dimensional strided array...
	if ( ndims === 1 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_UNARY[ ndims ]( x, initial, accumulator );
		}
		return UNARY[ ndims ]( x, initial, accumulator );
	}
	sx = x.strides;

	// Determine whether the ndarray has only **one** non-singleton dimension (e.g., ndims=4, shape=[10,1,1,1]) so that we can treat an ndarray as being equivalent to a one-dimensional strided array...
	if ( ns === ndims-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < ndims; i++ ) {
			if ( shx[ i ] !== 1 ) {
				break;
			}
		}
		x.shape = [ shx[i] ];
		x.strides = [ sx[i] ];
		if ( x.accessorProtocol ) {
			return ACCESSOR_UNARY[ 1 ]( x, initial, accumulator );
		}
		return UNARY[ 1 ]( x, initial, accumulator );
	}
	iox = iterationOrder( sx ); // +/-1

	// Determine whether we can avoid blocked iteration...
	if ( iox !== 0 ) {
		// Determine the minimum and maximum linear indices which are accessible by the array view:
		xmmv = minmaxViewBufferIndex( shx, sx, x.offset );

		// Determine whether we can ignore shape (and strides) and treat the ndarray as a linear one-dimensional strided array...
		if ( len === ( xmmv[1]-xmmv[0]+1 ) ) {
			// Note: the above is equivalent to @stdlib/ndarray/base/assert/is-contiguous, but in-lined so we can retain computed values...
			if ( iox === 1 ) {
				ox = xmmv[ 0 ];
			} else {
				ox = xmmv[ 1 ];
			}
			x.shape = [ len ];
			x.strides = [ iox ];
			x.offset = ox;
			if ( x.accessorProtocol ) {
				return ACCESSOR_UNARY[ 1 ]( x, initial, accumulator );
			}
			return UNARY[ 1 ]( x, initial, accumulator );
		}
		// The ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol ) {
				return ACCESSOR_UNARY[ ndims ]( x, initial, accumulator );
			}
			return UNARY[ ndims ]( x, initial, accumulator );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with a non-contiguous n-dimensional array or a high dimensional n-dimensional array, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_UNARY[ ndims-2 ]( x, initial, accumulator );
		}
		return BLOCKED_UNARY[ ndims-2 ]( x, initial, accumulator );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorunarynd( x, initial, accumulator );
	}
	return unarynd( x, initial, accumulator );
}


// EXPORTS //

module.exports = accumulateUnary;
