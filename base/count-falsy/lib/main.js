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

var isComplexArray = require( '@stdlib/array/base/assert/is-complex-typed-array' );
var isBooleanArray = require( '@stdlib/array/base/assert/is-booleanarray' );
var iterationOrder = require( './../../../base/iteration-order' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
var ndarray2object = require( './../../../base/ndarraylike2object' );
var reinterpretComplex = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var gscal = require( '@stdlib/blas/base/gscal' );
var blockedaccessorcount2d = require( './2d_blocked_accessors.js' );
var blockedaccessorcount3d = require( './3d_blocked_accessors.js' );
var blockedaccessorcount4d = require( './4d_blocked_accessors.js' );
var blockedaccessorcount5d = require( './5d_blocked_accessors.js' );
var blockedaccessorcount6d = require( './6d_blocked_accessors.js' );
var blockedaccessorcount7d = require( './7d_blocked_accessors.js' );
var blockedaccessorcount8d = require( './8d_blocked_accessors.js' );
var blockedaccessorcount9d = require( './9d_blocked_accessors.js' );
var blockedaccessorcount10d = require( './10d_blocked_accessors.js' );
var blockedcomplexcount2d = require( './2d_blocked_complex.js' );
var blockedcomplexcount3d = require( './3d_blocked_complex.js' );
var blockedcomplexcount4d = require( './4d_blocked_complex.js' );
var blockedcomplexcount5d = require( './5d_blocked_complex.js' );
var blockedcomplexcount6d = require( './6d_blocked_complex.js' );
var blockedcomplexcount7d = require( './7d_blocked_complex.js' );
var blockedcomplexcount8d = require( './8d_blocked_complex.js' );
var blockedcomplexcount9d = require( './9d_blocked_complex.js' );
var blockedcomplexcount10d = require( './10d_blocked_complex.js' );
var blockedcount2d = require( './2d_blocked.js' );
var blockedcount3d = require( './3d_blocked.js' );
var blockedcount4d = require( './4d_blocked.js' );
var blockedcount5d = require( './5d_blocked.js' );
var blockedcount6d = require( './6d_blocked.js' );
var blockedcount7d = require( './7d_blocked.js' );
var blockedcount8d = require( './8d_blocked.js' );
var blockedcount9d = require( './9d_blocked.js' );
var blockedcount10d = require( './10d_blocked.js' );
var accessorcount0d = require( './0d_accessors.js' );
var accessorcount1d = require( './1d_accessors.js' );
var accessorcount2d = require( './2d_accessors.js' );
var accessorcount3d = require( './3d_accessors.js' );
var accessorcount4d = require( './4d_accessors.js' );
var accessorcount5d = require( './5d_accessors.js' );
var accessorcount6d = require( './6d_accessors.js' );
var accessorcount7d = require( './7d_accessors.js' );
var accessorcount8d = require( './8d_accessors.js' );
var accessorcount9d = require( './9d_accessors.js' );
var accessorcount10d = require( './10d_accessors.js' );
var accessorcountnd = require( './nd_accessors.js' );
var complexcount0d = require( './0d_complex.js' );
var complexcount1d = require( './1d_complex.js' );
var complexcount2d = require( './2d_complex.js' );
var complexcount3d = require( './3d_complex.js' );
var complexcount4d = require( './4d_complex.js' );
var complexcount5d = require( './5d_complex.js' );
var complexcount6d = require( './6d_complex.js' );
var complexcount7d = require( './7d_complex.js' );
var complexcount8d = require( './8d_complex.js' );
var complexcount9d = require( './9d_complex.js' );
var complexcount10d = require( './10d_complex.js' );
var complexcountnd = require( './nd_complex.js' );
var count0d = require( './0d.js' );
var count1d = require( './1d.js' );
var count2d = require( './2d.js' );
var count3d = require( './3d.js' );
var count4d = require( './4d.js' );
var count5d = require( './5d.js' );
var count6d = require( './6d.js' );
var count7d = require( './7d.js' );
var count8d = require( './8d.js' );
var count9d = require( './9d.js' );
var count10d = require( './10d.js' );
var countnd = require( './nd.js' );


// VARIABLES //

var COUNT = [
	count0d,
	count1d,
	count2d,
	count3d,
	count4d,
	count5d,
	count6d,
	count7d,
	count8d,
	count9d,
	count10d
];
var ACCESSOR_COUNT = [
	accessorcount0d,
	accessorcount1d,
	accessorcount2d,
	accessorcount3d,
	accessorcount4d,
	accessorcount5d,
	accessorcount6d,
	accessorcount7d,
	accessorcount8d,
	accessorcount9d,
	accessorcount10d
];
var COMPLEX_COUNT = [
	complexcount0d,
	complexcount1d,
	complexcount2d,
	complexcount3d,
	complexcount4d,
	complexcount5d,
	complexcount6d,
	complexcount7d,
	complexcount8d,
	complexcount9d,
	complexcount10d
];
var BLOCKED_COUNT = [
	blockedcount2d, // 0
	blockedcount3d,
	blockedcount4d,
	blockedcount5d,
	blockedcount6d,
	blockedcount7d,
	blockedcount8d,
	blockedcount9d,
	blockedcount10d // 8
];
var BLOCKED_ACCESSOR_COUNT = [
	blockedaccessorcount2d, // 0
	blockedaccessorcount3d,
	blockedaccessorcount4d,
	blockedaccessorcount5d,
	blockedaccessorcount6d,
	blockedaccessorcount7d,
	blockedaccessorcount8d,
	blockedaccessorcount9d,
	blockedaccessorcount10d // 8
];
var BLOCKED_COMPLEX_COUNT = [
	blockedcomplexcount2d, // 0
	blockedcomplexcount3d,
	blockedcomplexcount4d,
	blockedcomplexcount5d,
	blockedcomplexcount6d,
	blockedcomplexcount7d,
	blockedcomplexcount8d,
	blockedcomplexcount9d,
	blockedcomplexcount10d // 8
];
var MAX_DIMS = COUNT.length - 1;


// MAIN //

/**
* Counts the number of falsy elements in an ndarray.
*
* ## Notes
*
* -   A provided ndarray should be an object with the following properties:
*
*     -   **dtype**: data type.
*     -   **data**: data buffer.
*     -   **shape**: dimensions.
*     -   **strides**: stride lengths.
*     -   **offset**: index offset.
*     -   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing one input array
* @returns {NonNegativeInteger} result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
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
* // Perform operation:
* var out = countFalsy( [ x ] );
* // returns 1
*/
function countFalsy( arrays ) {
	var isCmplx;
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

	// Check for known array types which can be reinterpreted for better iteration performance...
	if ( isBooleanArray( x.data ) ) {
		x.data = reinterpretBoolean( x.data, 0 );
		x.accessorProtocol = false;
	} else if ( isComplexArray( x.data ) ) {
		x.data = reinterpretComplex( x.data, 0 );
		x.accessorProtocol = false;
		x.strides = gscal( ndims, 2, x.strides, 1 );
		x.offset *= 2;
		isCmplx = true;
	}
	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_COUNT[ ndims ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_COUNT[ ndims ]( x );
		}
		return COUNT[ ndims ]( x );
	}
	// Compute the number of elements and the number of singleton dimensions...
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
		return true;
	}
	// Determine whether the ndarray is one-dimensional and thus readily translates to a one-dimensional strided array...
	if ( ndims === 1 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_COUNT[ ndims ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_COUNT[ ndims ]( x );
		}
		return COUNT[ ndims ]( x );
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
			return ACCESSOR_COUNT[ 1 ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_COUNT[ 1 ]( x );
		}
		return COUNT[ 1 ]( x );
	}
	iox = iterationOrder( sx ); // +/-1

	// Determine whether we can avoid blocked iteration...
	if ( iox !== 0 ) {
		// Determine the minimum and maximum linear indices which are accessible by the array view:
		xmmv = minmaxViewBufferIndex( shx, sx, x.offset );

		// Determine whether we can ignore shape (and strides) and treat the ndarray as a linear one-dimensional strided array...
		if ( len === ( xmmv[1]-xmmv[0]+1 ) || ( isCmplx && len*2 === ( xmmv[1]-xmmv[0]+1 ) ) ) { // eslint-disable-line max-len
			// Note: the above is equivalent to @stdlib/ndarray/base/assert/is-contiguous, but in-lined so we can retain computed values...
			if ( iox === 1 ) {
				ox = xmmv[ 0 ];
			} else {
				ox = xmmv[ 1 ];
			}
			x.shape = [ len ];
			x.strides = [ ( isCmplx ) ? iox*2 : iox ];
			x.offset = ox;
			if ( x.accessorProtocol ) {
				return ACCESSOR_COUNT[ 1 ]( x );
			}
			if ( isCmplx ) {
				return COMPLEX_COUNT[ 1 ]( x );
			}
			return COUNT[ 1 ]( x );
		}
		// The ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol ) {
				return ACCESSOR_COUNT[ ndims ]( x );
			}
			if ( isCmplx ) {
				return COMPLEX_COUNT[ ndims ]( x );
			}
			return COUNT[ ndims ]( x );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with a non-contiguous n-dimensional array or a high dimensional n-dimensional array, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_COUNT[ ndims-2 ]( x );
		}
		if ( isCmplx ) {
			return BLOCKED_COMPLEX_COUNT[ ndims-2 ]( x );
		}
		return BLOCKED_COUNT[ ndims-2 ]( x );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorcountnd( x );
	}
	if ( isCmplx ) {
		return complexcountnd( x );
	}
	return countnd( x );
}


// EXPORTS //

module.exports = countFalsy;
