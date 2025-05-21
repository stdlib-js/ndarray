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
var strides2order = require( './../../../base/strides2order' );
var anyIsEntryIn = require( '@stdlib/array/base/any-is-entry-in' );
var format = require( '@stdlib/string/format' );
var blockedaccessorbinary2d = require( './2d_blocked_accessors.js' );
var blockedaccessorbinary3d = require( './3d_blocked_accessors.js' );
var blockedaccessorbinary4d = require( './4d_blocked_accessors.js' );
var blockedaccessorbinary5d = require( './5d_blocked_accessors.js' );
var blockedaccessorbinary6d = require( './6d_blocked_accessors.js' );
var blockedaccessorbinary7d = require( './7d_blocked_accessors.js' );
var blockedaccessorbinary8d = require( './8d_blocked_accessors.js' );
var blockedaccessorbinary9d = require( './9d_blocked_accessors.js' );
var blockedaccessorbinary10d = require( './10d_blocked_accessors.js' );
var blockedbinary2d = require( './2d_blocked.js' );
var blockedbinary3d = require( './3d_blocked.js' );
var blockedbinary4d = require( './4d_blocked.js' );
var blockedbinary5d = require( './5d_blocked.js' );
var blockedbinary6d = require( './6d_blocked.js' );
var blockedbinary7d = require( './7d_blocked.js' );
var blockedbinary8d = require( './8d_blocked.js' );
var blockedbinary9d = require( './9d_blocked.js' );
var blockedbinary10d = require( './10d_blocked.js' );
var accessorbinary0d = require( './0d_accessors.js' );
var accessorbinary1d = require( './1d_accessors.js' );
var accessorbinary2d = require( './2d_accessors.js' );
var accessorbinary3d = require( './3d_accessors.js' );
var accessorbinary4d = require( './4d_accessors.js' );
var accessorbinary5d = require( './5d_accessors.js' );
var accessorbinary6d = require( './6d_accessors.js' );
var accessorbinary7d = require( './7d_accessors.js' );
var accessorbinary8d = require( './8d_accessors.js' );
var accessorbinary9d = require( './9d_accessors.js' );
var accessorbinary10d = require( './10d_accessors.js' );
var accessorbinarynd = require( './nd_accessors.js' );
var binary0d = require( './0d.js' );
var binary1d = require( './1d.js' );
var binary2d = require( './2d.js' );
var binary3d = require( './3d.js' );
var binary4d = require( './4d.js' );
var binary5d = require( './5d.js' );
var binary6d = require( './6d.js' );
var binary7d = require( './7d.js' );
var binary8d = require( './8d.js' );
var binary9d = require( './9d.js' );
var binary10d = require( './10d.js' );
var binarynd = require( './nd.js' );


// VARIABLES //

var BINARY = [
	binary0d,
	binary1d,
	binary2d,
	binary3d,
	binary4d,
	binary5d,
	binary6d,
	binary7d,
	binary8d,
	binary9d,
	binary10d
];
var ACCESSOR_BINARY = [
	accessorbinary0d,
	accessorbinary1d,
	accessorbinary2d,
	accessorbinary3d,
	accessorbinary4d,
	accessorbinary5d,
	accessorbinary6d,
	accessorbinary7d,
	accessorbinary8d,
	accessorbinary9d,
	accessorbinary10d
];
var BLOCKED_BINARY = [
	blockedbinary2d, // 0
	blockedbinary3d,
	blockedbinary4d,
	blockedbinary5d,
	blockedbinary6d,
	blockedbinary7d,
	blockedbinary8d,
	blockedbinary9d,
	blockedbinary10d // 8
];
var BLOCKED_ACCESSOR_BINARY = [
	blockedaccessorbinary2d, // 0
	blockedaccessorbinary3d,
	blockedaccessorbinary4d,
	blockedaccessorbinary5d,
	blockedaccessorbinary6d,
	blockedaccessorbinary7d,
	blockedaccessorbinary8d,
	blockedaccessorbinary9d,
	blockedaccessorbinary10d // 8
];
var MAX_DIMS = BINARY.length - 1;


// FUNCTIONS //

/**
* Returns a boolean indicating if at least one ndarray data buffer implements the accessor protocol.
*
* @private
* @param {ndarrayLike} x - first ndarray
* @param {ndarrayLike} y - second ndarray
* @param {ndarrayLike} z - third ndarray
* @returns {boolean} boolean indicating whether an ndarray data buffer implements the accessor protocol
*/
function hasAccessors( x, y, z ) {
	return anyIsEntryIn( [ x, y, z ], 'accessorProtocol', true );
}


// MAIN //

/**
* Applies a binary callback to elements in input ndarrays and assigns results to elements in an output ndarray.
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
* @param {ArrayLikeObject<Object>} arrays - array-like object containing two input arrays and one output array
* @param {Callback} fcn - binary callback
* @throws {Error} arrays must have the same number of dimensions
* @throws {Error} arrays must have the same shape
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* function add( a, b ) {
*     return a + b;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var zbuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
* var sy = [ 2, 2, 1 ];
* var sz = [ 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
*
* // Create the input and output ndarrays:
* var x = new ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var y = new ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
* var z = new ndarray( 'float64', zbuf, shape, sz, oz, 'row-major' );
*
* // Apply the binary function:
* binary( [ x, y, z ], add );
*
* console.log( getData( z ) );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
function binary( arrays, fcn ) { // eslint-disable-line max-statements
	var ndims;
	var xmmv;
	var ymmv;
	var zmmv;
	var shx;
	var shy;
	var shz;
	var iox;
	var ioy;
	var ioz;
	var len;
	var ord;
	var sx;
	var sy;
	var sz;
	var ox;
	var oy;
	var oz;
	var ns;
	var x;
	var y;
	var z;
	var d;
	var i;

	// Unpack the ndarrays and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	y = ndarray2object( arrays[ 1 ] );
	z = ndarray2object( arrays[ 2 ] );

	// Verify that the input and output arrays have the same number of dimensions...
	shx = x.shape;
	shy = y.shape;
	shz = z.shape;
	ndims = shx.length;
	if ( ndims !== shy.length || ndims !== shz.length ) {
		throw new Error( format( 'invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == %d. ndims(y) == %d. ndims(z) == %d.', ndims, shy.length, shz.length ) );
	}
	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ ndims ]( x, y, z, fcn );
		}
		return BINARY[ ndims ]( x, y, z, fcn );
	}
	// Verify that the input and output arrays have the same dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < ndims; i++ ) {
		d = shx[ i ];
		if ( d !== shy[ i ] || d !== shz[ i ] ) {
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
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ ndims ]( x, y, z, fcn );
		}
		return BINARY[ ndims ]( x, y, z, fcn );
	}
	sx = x.strides;
	sy = y.strides;
	sz = z.strides;

	// Determine whether the ndarrays have only **one** non-singleton dimension (e.g., ndims=4, shape=[10,1,1,1]) so that we can treat the ndarrays as being equivalent to one-dimensional strided arrays...
	if ( ns === ndims-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < ndims; i++ ) {
			if ( shx[ i ] !== 1 ) {
				break;
			}
		}
		x.shape = [ shx[i] ];
		y.shape = x.shape;
		z.shape = x.shape;
		x.strides = [ sx[i] ];
		y.strides = [ sy[i] ];
		z.strides = [ sz[i] ];
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ 1 ]( x, y, z, fcn );
		}
		return BINARY[ 1 ]( x, y, z, fcn );
	}
	iox = iterationOrder( sx ); // +/-1
	ioy = iterationOrder( sy ); // +/-1
	ioz = iterationOrder( sz ); // +/-1

	// Determine whether we can avoid blocked iteration...
	ord = strides2order( sx );
	if ( iox !== 0 && ioy !== 0 && ioz !== 0 && ord === strides2order( sy ) && ord === strides2order( sz ) ) { // eslint-disable-line max-len
		// Determine the minimum and maximum linear indices which are accessible by the array views:
		xmmv = minmaxViewBufferIndex( shx, sx, x.offset );
		ymmv = minmaxViewBufferIndex( shy, sy, y.offset );
		zmmv = minmaxViewBufferIndex( shz, sz, z.offset );

		// Determine whether we can ignore shape (and strides) and treat the ndarrays as linear one-dimensional strided arrays...
		if (
			len === ( xmmv[1]-xmmv[0]+1 ) &&
			len === ( ymmv[1]-ymmv[0]+1 ) &&
			len === ( zmmv[1]-zmmv[0]+1 )
		) {
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
			if ( ioz === 1 ) {
				oz = zmmv[ 0 ];
			} else {
				oz = zmmv[ 1 ];
			}
			x.shape = [ len ];
			y.shape = x.shape;
			z.shape = x.shape;
			x.strides = [ iox ];
			y.strides = [ ioy ];
			z.strides = [ ioz ];
			x.offset = ox;
			y.offset = oy;
			z.offset = oz;
			if ( hasAccessors( x, y, z ) ) {
				return ACCESSOR_BINARY[ 1 ]( x, y, z, fcn );
			}
			return BINARY[ 1 ]( x, y, z, fcn );
		}
		// At least one ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( hasAccessors( x, y, z ) ) {
				return ACCESSOR_BINARY[ ndims ]( x, y, z, ord === 1, fcn );
			}
			return BINARY[ ndims ]( x, y, z, ord === 1, fcn );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( hasAccessors( x, y, z ) ) {
			return BLOCKED_ACCESSOR_BINARY[ ndims-2 ]( x, y, z, fcn );
		}
		return BLOCKED_BINARY[ ndims-2 ]( x, y, z, fcn );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( hasAccessors( x, y, z ) ) {
		return accessorbinarynd( x, y, z, fcn );
	}
	binarynd( x, y, z, fcn );
}


// EXPORTS //

module.exports = binary;
