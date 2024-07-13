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

var isComplexDataType = require( './../../../base/assert/is-complex-floating-point-data-type' );
var isRealDataType = require( './../../../base/assert/is-real-data-type' );
var iterationOrder = require( './../../../base/iteration-order' );
var castReturn = require( '@stdlib/complex/base/cast-return' );
var complexCtors = require( '@stdlib/complex/ctors' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
var ndarray2object = require( './../../../base/ndarraylike2object' );
var blockedaccessorassign2d = require( './2d_blocked_accessors.js' );
var blockedaccessorassign3d = require( './3d_blocked_accessors.js' );
var blockedaccessorassign4d = require( './4d_blocked_accessors.js' );
var blockedaccessorassign5d = require( './5d_blocked_accessors.js' );
var blockedaccessorassign6d = require( './6d_blocked_accessors.js' );
var blockedaccessorassign7d = require( './7d_blocked_accessors.js' );
var blockedaccessorassign8d = require( './8d_blocked_accessors.js' );
var blockedaccessorassign9d = require( './9d_blocked_accessors.js' );
var blockedaccessorassign10d = require( './10d_blocked_accessors.js' );
var blockedassign2d = require( './2d_blocked.js' );
var blockedassign3d = require( './3d_blocked.js' );
var blockedassign4d = require( './4d_blocked.js' );
var blockedassign5d = require( './5d_blocked.js' );
var blockedassign6d = require( './6d_blocked.js' );
var blockedassign7d = require( './7d_blocked.js' );
var blockedassign8d = require( './8d_blocked.js' );
var blockedassign9d = require( './9d_blocked.js' );
var blockedassign10d = require( './10d_blocked.js' );
var accessorassign0d = require( './0d_accessors.js' );
var accessorassign1d = require( './1d_accessors.js' );
var accessorassign2d = require( './2d_accessors.js' );
var accessorassign3d = require( './3d_accessors.js' );
var accessorassign4d = require( './4d_accessors.js' );
var accessorassign5d = require( './5d_accessors.js' );
var accessorassign6d = require( './6d_accessors.js' );
var accessorassign7d = require( './7d_accessors.js' );
var accessorassign8d = require( './8d_accessors.js' );
var accessorassign9d = require( './9d_accessors.js' );
var accessorassign10d = require( './10d_accessors.js' );
var accessorassignnd = require( './nd_accessors.js' );
var assign0d = require( './0d.js' );
var assign1d = require( './1d.js' );
var assign2d = require( './2d.js' );
var assign3d = require( './3d.js' );
var assign4d = require( './4d.js' );
var assign5d = require( './5d.js' );
var assign6d = require( './6d.js' );
var assign7d = require( './7d.js' );
var assign8d = require( './8d.js' );
var assign9d = require( './9d.js' );
var assign10d = require( './10d.js' );
var assignnd = require( './nd.js' );


// VARIABLES //

var ASSIGN = [
	assign0d,
	assign1d,
	assign2d,
	assign3d,
	assign4d,
	assign5d,
	assign6d,
	assign7d,
	assign8d,
	assign9d,
	assign10d
];
var ACCESSOR_ASSIGN = [
	accessorassign0d,
	accessorassign1d,
	accessorassign2d,
	accessorassign3d,
	accessorassign4d,
	accessorassign5d,
	accessorassign6d,
	accessorassign7d,
	accessorassign8d,
	accessorassign9d,
	accessorassign10d
];
var BLOCKED_ASSIGN = [
	blockedassign2d, // 0
	blockedassign3d,
	blockedassign4d,
	blockedassign5d,
	blockedassign6d,
	blockedassign7d,
	blockedassign8d,
	blockedassign9d,
	blockedassign10d // 8
];
var BLOCKED_ACCESSOR_ASSIGN = [
	blockedaccessorassign2d, // 0
	blockedaccessorassign3d,
	blockedaccessorassign4d,
	blockedaccessorassign5d,
	blockedaccessorassign6d,
	blockedaccessorassign7d,
	blockedaccessorassign8d,
	blockedaccessorassign9d,
	blockedaccessorassign10d // 8
];
var MAX_DIMS = ASSIGN.length - 1;


// MAIN //

/**
* Assigns elements in an input ndarray to elements in an output ndarray.
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
* @throws {Error} arrays must have the same number of dimensions
* @throws {Error} arrays must have the same shape
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
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
* // Copy elements:
* assign( [ x, y ] );
*
* console.log( y.data );
* // => <Float64Array>[ 2.0, 3.0, 6.0, 7.0, 10.0, 11.0 ]
*/
function assign( arrays ) {
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
	var d;
	var i;

	// Unpack the ndarrays and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	y = ndarray2object( arrays[ 1 ] );

	// Determine whether we are casting a real data type to a complex data type and we need to use a specialized accessor (note: we don't support the other way, complex-to-real, as this is not an allowed (mostly) safe cast)...
	if ( isRealDataType( x.dtype ) && isComplexDataType( y.dtype ) ) {
		x.accessorProtocol = true;
		x.accessors[ 0 ] = castReturn( x.accessors[ 0 ], 2, complexCtors( y.dtype ) ); // eslint-disable-line max-len
	}
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
			return ACCESSOR_ASSIGN[ ndims ]( x, y );
		}
		return ASSIGN[ ndims ]( x, y );
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
			return ACCESSOR_ASSIGN[ ndims ]( x, y );
		}
		return ASSIGN[ ndims ]( x, y );
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
			return ACCESSOR_ASSIGN[ 1 ]( x, y );
		}
		return ASSIGN[ 1 ]( x, y );
	}
	iox = iterationOrder( sx ); // +/-1
	ioy = iterationOrder( sy ); // +/-1

	// Determine whether we can avoid blocked iteration...
	if ( iox !== 0 && ioy !== 0 && x.order === y.order ) {
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
				return ACCESSOR_ASSIGN[ 1 ]( x, y );
			}
			return ASSIGN[ 1 ]( x, y );
		}
		// At least one ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol || y.accessorProtocol ) {
				return ACCESSOR_ASSIGN[ ndims ]( x, y );
			}
			return ASSIGN[ ndims ]( x, y );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol || y.accessorProtocol ) {
			return BLOCKED_ACCESSOR_ASSIGN[ ndims-2 ]( x, y );
		}
		return BLOCKED_ASSIGN[ ndims-2 ]( x, y );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol || y.accessorProtocol ) {
		return accessorassignnd( x, y );
	}
	assignnd( x, y );
}


// EXPORTS //

module.exports = assign;
