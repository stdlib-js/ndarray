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
var blockedaccessorevery2d = require( './2d_blocked_accessors.js' );
var blockedaccessorevery3d = require( './3d_blocked_accessors.js' );
var blockedaccessorevery4d = require( './4d_blocked_accessors.js' );
var blockedaccessorevery5d = require( './5d_blocked_accessors.js' );
var blockedaccessorevery6d = require( './6d_blocked_accessors.js' );
var blockedaccessorevery7d = require( './7d_blocked_accessors.js' );
var blockedaccessorevery8d = require( './8d_blocked_accessors.js' );
var blockedaccessorevery9d = require( './9d_blocked_accessors.js' );
var blockedaccessorevery10d = require( './10d_blocked_accessors.js' );
var blockedcomplexevery2d = require( './2d_blocked_complex.js' );
var blockedcomplexevery3d = require( './3d_blocked_complex.js' );
var blockedcomplexevery4d = require( './4d_blocked_complex.js' );
var blockedcomplexevery5d = require( './5d_blocked_complex.js' );
var blockedcomplexevery6d = require( './6d_blocked_complex.js' );
var blockedcomplexevery7d = require( './7d_blocked_complex.js' );
var blockedcomplexevery8d = require( './8d_blocked_complex.js' );
var blockedcomplexevery9d = require( './9d_blocked_complex.js' );
var blockedcomplexevery10d = require( './10d_blocked_complex.js' );
var blockedevery2d = require( './2d_blocked.js' );
var blockedevery3d = require( './3d_blocked.js' );
var blockedevery4d = require( './4d_blocked.js' );
var blockedevery5d = require( './5d_blocked.js' );
var blockedevery6d = require( './6d_blocked.js' );
var blockedevery7d = require( './7d_blocked.js' );
var blockedevery8d = require( './8d_blocked.js' );
var blockedevery9d = require( './9d_blocked.js' );
var blockedevery10d = require( './10d_blocked.js' );
var accessorevery0d = require( './0d_accessors.js' );
var accessorevery1d = require( './1d_accessors.js' );
var accessorevery2d = require( './2d_accessors.js' );
var accessorevery3d = require( './3d_accessors.js' );
var accessorevery4d = require( './4d_accessors.js' );
var accessorevery5d = require( './5d_accessors.js' );
var accessorevery6d = require( './6d_accessors.js' );
var accessorevery7d = require( './7d_accessors.js' );
var accessorevery8d = require( './8d_accessors.js' );
var accessorevery9d = require( './9d_accessors.js' );
var accessorevery10d = require( './10d_accessors.js' );
var accessoreverynd = require( './nd_accessors.js' );
var complexevery0d = require( './0d_complex.js' );
var complexevery1d = require( './1d_complex.js' );
var complexevery2d = require( './2d_complex.js' );
var complexevery3d = require( './3d_complex.js' );
var complexevery4d = require( './4d_complex.js' );
var complexevery5d = require( './5d_complex.js' );
var complexevery6d = require( './6d_complex.js' );
var complexevery7d = require( './7d_complex.js' );
var complexevery8d = require( './8d_complex.js' );
var complexevery9d = require( './9d_complex.js' );
var complexevery10d = require( './10d_complex.js' );
var complexeverynd = require( './nd_complex.js' );
var every0d = require( './0d.js' );
var every1d = require( './1d.js' );
var every2d = require( './2d.js' );
var every3d = require( './3d.js' );
var every4d = require( './4d.js' );
var every5d = require( './5d.js' );
var every6d = require( './6d.js' );
var every7d = require( './7d.js' );
var every8d = require( './8d.js' );
var every9d = require( './9d.js' );
var every10d = require( './10d.js' );
var everynd = require( './nd.js' );


// VARIABLES //

var EVERY = [
	every0d,
	every1d,
	every2d,
	every3d,
	every4d,
	every5d,
	every6d,
	every7d,
	every8d,
	every9d,
	every10d
];
var ACCESSOR_EVERY = [
	accessorevery0d,
	accessorevery1d,
	accessorevery2d,
	accessorevery3d,
	accessorevery4d,
	accessorevery5d,
	accessorevery6d,
	accessorevery7d,
	accessorevery8d,
	accessorevery9d,
	accessorevery10d
];
var COMPLEX_EVERY = [
	complexevery0d,
	complexevery1d,
	complexevery2d,
	complexevery3d,
	complexevery4d,
	complexevery5d,
	complexevery6d,
	complexevery7d,
	complexevery8d,
	complexevery9d,
	complexevery10d
];
var BLOCKED_EVERY = [
	blockedevery2d, // 0
	blockedevery3d,
	blockedevery4d,
	blockedevery5d,
	blockedevery6d,
	blockedevery7d,
	blockedevery8d,
	blockedevery9d,
	blockedevery10d // 8
];
var BLOCKED_ACCESSOR_EVERY = [
	blockedaccessorevery2d, // 0
	blockedaccessorevery3d,
	blockedaccessorevery4d,
	blockedaccessorevery5d,
	blockedaccessorevery6d,
	blockedaccessorevery7d,
	blockedaccessorevery8d,
	blockedaccessorevery9d,
	blockedaccessorevery10d // 8
];
var BLOCKED_COMPLEX_EVERY = [
	blockedcomplexevery2d, // 0
	blockedcomplexevery3d,
	blockedcomplexevery4d,
	blockedcomplexevery5d,
	blockedcomplexevery6d,
	blockedcomplexevery7d,
	blockedcomplexevery8d,
	blockedcomplexevery9d,
	blockedcomplexevery10d // 8
];
var MAX_DIMS = EVERY.length - 1;


// MAIN //

/**
* Tests whether every element is truthy.
*
* ## Notes
*
* -   A provided ndarray should be an `object` with the following properties:
*
*     -   **dtype**: data type.
*     -   **data**: data buffer.
*     -   **shape**: dimensions.
*     -   **strides**: stride lengths.
*     -   **offset**: index offset.
*     -   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing one input array
* @returns {boolean} result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
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
* // Test elements:
* var out = every( [ x ] );
* // returns true
*/
function every( arrays ) {
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
			return ACCESSOR_EVERY[ ndims ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_EVERY[ ndims ]( x );
		}
		return EVERY[ ndims ]( x );
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
			return ACCESSOR_EVERY[ ndims ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_EVERY[ ndims ]( x );
		}
		return EVERY[ ndims ]( x );
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
			return ACCESSOR_EVERY[ 1 ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_EVERY[ 1 ]( x );
		}
		return EVERY[ 1 ]( x );
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
				return ACCESSOR_EVERY[ 1 ]( x );
			}
			if ( isCmplx ) {
				return COMPLEX_EVERY[ 1 ]( x );
			}
			return EVERY[ 1 ]( x );
		}
		// The ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol ) {
				return ACCESSOR_EVERY[ ndims ]( x );
			}
			if ( isCmplx ) {
				return COMPLEX_EVERY[ ndims ]( x );
			}
			return EVERY[ ndims ]( x );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with a non-contiguous n-dimensional array or a high dimensional n-dimensional array, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_EVERY[ ndims-2 ]( x );
		}
		if ( isCmplx ) {
			return BLOCKED_COMPLEX_EVERY[ ndims-2 ]( x );
		}
		return BLOCKED_EVERY[ ndims-2 ]( x );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessoreverynd( x );
	}
	if ( isCmplx ) {
		return complexeverynd( x );
	}
	return everynd( x );
}


// EXPORTS //

module.exports = every;
