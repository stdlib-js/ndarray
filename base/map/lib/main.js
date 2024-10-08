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

var iterationOrder = require( './../../../base/iteration-order' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
var ndarray2object = require( './../../../base/ndarraylike2object' );
var blockedaccessormap2d = require( './2d_blocked_accessors.js' );
var blockedaccessormap3d = require( './3d_blocked_accessors.js' );
var blockedaccessormap4d = require( './4d_blocked_accessors.js' );
var blockedaccessormap5d = require( './5d_blocked_accessors.js' );
var blockedaccessormap6d = require( './6d_blocked_accessors.js' );
var blockedaccessormap7d = require( './7d_blocked_accessors.js' );
var blockedaccessormap8d = require( './8d_blocked_accessors.js' );
var blockedaccessormap9d = require( './9d_blocked_accessors.js' );
var blockedaccessormap10d = require( './10d_blocked_accessors.js' );
var blockedmap2d = require( './2d_blocked.js' );
var blockedmap3d = require( './3d_blocked.js' );
var blockedmap4d = require( './4d_blocked.js' );
var blockedmap5d = require( './5d_blocked.js' );
var blockedmap6d = require( './6d_blocked.js' );
var blockedmap7d = require( './7d_blocked.js' );
var blockedmap8d = require( './8d_blocked.js' );
var blockedmap9d = require( './9d_blocked.js' );
var blockedmap10d = require( './10d_blocked.js' );
var accessormap0d = require( './0d_accessors.js' );
var accessormap1d = require( './1d_accessors.js' );
var accessormap2d = require( './2d_accessors.js' );
var accessormap3d = require( './3d_accessors.js' );
var accessormap4d = require( './4d_accessors.js' );
var accessormap5d = require( './5d_accessors.js' );
var accessormap6d = require( './6d_accessors.js' );
var accessormap7d = require( './7d_accessors.js' );
var accessormap8d = require( './8d_accessors.js' );
var accessormap9d = require( './9d_accessors.js' );
var accessormap10d = require( './10d_accessors.js' );
var accessormapnd = require( './nd_accessors.js' );
var map0d = require( './0d.js' );
var map1d = require( './1d.js' );
var map2d = require( './2d.js' );
var map3d = require( './3d.js' );
var map4d = require( './4d.js' );
var map5d = require( './5d.js' );
var map6d = require( './6d.js' );
var map7d = require( './7d.js' );
var map8d = require( './8d.js' );
var map9d = require( './9d.js' );
var map10d = require( './10d.js' );
var mapnd = require( './nd.js' );


// VARIABLES //

var MAP = [
	map0d,
	map1d,
	map2d,
	map3d,
	map4d,
	map5d,
	map6d,
	map7d,
	map8d,
	map9d,
	map10d
];
var ACCESSOR_MAP = [
	accessormap0d,
	accessormap1d,
	accessormap2d,
	accessormap3d,
	accessormap4d,
	accessormap5d,
	accessormap6d,
	accessormap7d,
	accessormap8d,
	accessormap9d,
	accessormap10d
];
var BLOCKED_MAP = [
	blockedmap2d, // 0
	blockedmap3d,
	blockedmap4d,
	blockedmap5d,
	blockedmap6d,
	blockedmap7d,
	blockedmap8d,
	blockedmap9d,
	blockedmap10d // 8
];
var BLOCKED_ACCESSOR_MAP = [
	blockedaccessormap2d, // 0
	blockedaccessormap3d,
	blockedaccessormap4d,
	blockedaccessormap5d,
	blockedaccessormap6d,
	blockedaccessormap7d,
	blockedaccessormap8d,
	blockedaccessormap9d,
	blockedaccessormap10d // 8
];
var MAX_DIMS = MAP.length -1;


// MAIN //

/**
* Applies a callback function to the elements in an input ndarray and assigns results to the elements in an output ndarray.
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
* @param {Callback} fcn - callback function
* @param {*} [thisArg] - callback execution context
* @throws {Error} arrays must have the same number of dimensions
* @throws {Error} arrays must have the same shape
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( z ) {
*     return z * 10.0;
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
* // Apply the map function:
* map( [ x, y ], scale );
*
* console.log( y.data );
* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
*/
function map( arrays, fcn, thisArg ) {
	var ndims;
	var xmmv;
	var ymmv;
	var shx;
	var shy;
	var iox;
	var ioy;
	var len;
	var sx;
	var sy;
	var ox;
	var oy;
	var ns;
	var x;
	var y;
	var i;
	var d;

	// Unpack the ndarrays and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	y = ndarray2object( arrays[ 1 ] );

	// Verify that the input and output arrays have the same number of dimensions...
	shx = x.shape;
	shy = y.shape;
	ndims = shx.length;
	if ( ndims !== shy.length ) {
		throw new Error( 'invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == '+ndims+'. ndims(y) == '+shy.length+'.' );
	}
	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return ACCESSOR_MAP[ ndims ]( x, y, fcn, thisArg );
		}
		return MAP[ ndims ]( x, y, fcn, thisArg );
	}
	// Verify that the input and output arrays have the same dimensions...
	len = 1; // number of elements
	ns = 0; // number of singleton dimensions
	for ( i = 0; i < ndims; i++ ) {
		d = shx[ i ];
		if ( d !== shy[ i ] ) {
			throw new Error( 'invalid arguments. Array must have the same shape.' );
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
			return ACCESSOR_MAP[ ndims ]( x, y, fcn, thisArg );
		}
		return MAP[ ndims ]( x, y, fcn, thisArg );
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
			return ACCESSOR_MAP[ 1 ]( x, y, fcn, thisArg );
		}
		return MAP[ 1 ]( x, y, fcn, thisArg );
	}

	iox = iterationOrder( sx ); // +/-1
	ioy = iterationOrder( sy ); // +/-1

	// Determine whether we can avoid blocked iteration...
	if ( iox !== 0 && ioy !== 0 && iox === ioy ) {
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
				return ACCESSOR_MAP[ 1 ]( x, y, fcn, thisArg );
			}
			return MAP[ 1 ]( x, y, fcn, thisArg );
		}
		// At least one ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol || y.accessorProtocol ) {
				return ACCESSOR_MAP[ ndims ]( x, y, fcn, thisArg );
			}
			return MAP[ ndims ]( x, y, fcn, thisArg );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return BLOCKED_ACCESSOR_MAP[ ndims-2 ]( x, y, fcn, thisArg );
		}
		return BLOCKED_MAP[ ndims-2 ]( x, y, fcn, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol || y.accessorProtocol ) {
		return accessormapnd( x, y, fcn, thisArg );
	}
	mapnd( x, y, fcn, thisArg );
}


// EXPORTS //

module.exports = map;
