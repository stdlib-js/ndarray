/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var strides2order = require( './../../../base/strides2order' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
var ndarray2object = require( './../../../base/ndarraylike2object' );
var format = require( '@stdlib/string/format' );
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
* Applies a unary callback to elements in an input ndarray and assigns results to elements in an output ndarray.
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
* @param {ArrayLikeObject<Object>} arrays - array-like object containing one input array and one output array
* @param {Callback} fcn - unary callback
* @throws {Error} arrays must have the same number of dimensions
* @throws {Error} arrays must have the same shape
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
* var sy = [ 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 1;
* var oy = 0;
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Apply the unary function:
* unary( [ x, y ], scale );
*
* console.log( y.data );
* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
*/
function unary( arrays, fcn ) {
	var ndims;
	var xmmv;
	var ymmv;
	var shx;
	var shy;
	var iox;
	var ioy;
	var len;
	var ord;
	var sx;
	var sy;
	var ox;
	var oy;
	var ns;
	var x;
	var y;
	var d;
	var i;

	// Unpack the ndarrays and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	y = ndarray2object( arrays[ 1 ] );

	// Verify that the input and output arrays have the same number of dimensions...
	shx = x.shape;
	shy = y.shape;
	ndims = shx.length;
	if ( ndims !== shy.length ) {
		throw new Error( format( 'invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == %d. ndims(y) == %d.', ndims, shy.length ) );
	}
	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return ACCESSOR_UNARY[ ndims ]( x, y, fcn );
		}
		return UNARY[ ndims ]( x, y, fcn );
	}
	// Verify that the input and output arrays have the same dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < ndims; i++ ) {
		d = shx[ i ];
		if ( d !== shy[ i ] ) {
			throw new Error( 'invalid arguments. Arrays must have the same shape.' );
		}
		// Note that, if one of the dimensions is `0`, the length will be `0`...
		len *= d;

		// Check whether the current dimension is a singleton dimension...
		if ( d === 1 ) {
			ns += 1;
		}
	}
	// Check whether we were provided empty ndarrays...
	if ( len === 0 ) {
		return;
	}
	// Determine whether the ndarrays are one-dimensional and thus readily translate to one-dimensional strided arrays...
	if ( ndims === 1 ) {
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return ACCESSOR_UNARY[ ndims ]( x, y, fcn );
		}
		return UNARY[ ndims ]( x, y, fcn );
	}
	sx = x.strides;
	sy = y.strides;

	// Determine whether the ndarray has only **one** non-singleton dimension (e.g., ndims=4, shape=[10,1,1,1]) so that we can treat the ndarrays as being equivalent to one-dimensional strided arrays...
	if ( ns === ndims-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < ndims; i++ ) {
			if ( shx[ i ] !== 1 ) {
				break;
			}
		}
		x.shape = [ shx[i] ];
		y.shape = x.shape;
		x.strides = [ sx[i] ];
		y.strides = [ sy[i] ];
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return ACCESSOR_UNARY[ 1 ]( x, y, fcn );
		}
		return UNARY[ 1 ]( x, y, fcn );
	}
	iox = iterationOrder( sx ); // +/-1
	ioy = iterationOrder( sy ); // +/-1

	// Determine whether we can avoid blocked iteration...
	ord = strides2order( sx );
	if ( iox !== 0 && ioy !== 0 && ord === strides2order( sy ) ) {
		// Determine the minimum and maximum linear indices which are accessible by the array views:
		xmmv = minmaxViewBufferIndex( shx, sx, x.offset );
		ymmv = minmaxViewBufferIndex( shy, sy, y.offset );

		// Determine whether we can ignore shape (and strides) and treat the ndarrays as linear one-dimensional strided arrays...
		if ( len === ( xmmv[1]-xmmv[0]+1 ) && len === ( ymmv[1]-ymmv[0]+1 ) ) {
			// Note: the above is equivalent to @stdlib/ndarray/base/assert/is-contiguous, but in-lined so we can retain computed values...
			if ( iox === 1 ) {
				ox = xmmv[ 0 ];
			} else {
				ox = xmmv[ 1 ];
			}
			if ( ioy === 1 ) {
				oy = ymmv[ 0 ];
			} else {
				oy = ymmv[ 1 ];
			}
			x.shape = [ len ];
			y.shape = x.shape;
			x.strides = [ iox ];
			y.strides = [ ioy ];
			x.offset = ox;
			y.offset = oy;
			if ( x.accessorProtocol || y.accessorProtocol ) {
				return ACCESSOR_UNARY[ 1 ]( x, y, fcn );
			}
			return UNARY[ 1 ]( x, y, fcn );
		}
		// At least one ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol || y.accessorProtocol ) {
				return ACCESSOR_UNARY[ ndims ]( x, y, ord === 1, fcn );
			}
			return UNARY[ ndims ]( x, y, ord === 1, fcn );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return BLOCKED_ACCESSOR_UNARY[ ndims-2 ]( x, y, fcn );
		}
		return BLOCKED_UNARY[ ndims-2 ]( x, y, fcn );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol || y.accessorProtocol ) {
		return accessorunarynd( x, y, fcn );
	}
	unarynd( x, y, fcn );
}


// EXPORTS //

module.exports = unary;
