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
var blockedaccessorany2d = require( './2d_blocked_accessors.js' );
var blockedaccessorany3d = require( './3d_blocked_accessors.js' );
var blockedaccessorany4d = require( './4d_blocked_accessors.js' );
var blockedaccessorany5d = require( './5d_blocked_accessors.js' );
var blockedaccessorany6d = require( './6d_blocked_accessors.js' );
var blockedaccessorany7d = require( './7d_blocked_accessors.js' );
var blockedaccessorany8d = require( './8d_blocked_accessors.js' );
var blockedaccessorany9d = require( './9d_blocked_accessors.js' );
var blockedaccessorany10d = require( './10d_blocked_accessors.js' );
var blockedcomplexany2d = require( './2d_blocked_complex.js' );
var blockedcomplexany3d = require( './3d_blocked_complex.js' );
var blockedcomplexany4d = require( './4d_blocked_complex.js' );
var blockedcomplexany5d = require( './5d_blocked_complex.js' );
var blockedcomplexany6d = require( './6d_blocked_complex.js' );
var blockedcomplexany7d = require( './7d_blocked_complex.js' );
var blockedcomplexany8d = require( './8d_blocked_complex.js' );
var blockedcomplexany9d = require( './9d_blocked_complex.js' );
var blockedcomplexany10d = require( './10d_blocked_complex.js' );
var blockedany2d = require( './2d_blocked.js' );
var blockedany3d = require( './3d_blocked.js' );
var blockedany4d = require( './4d_blocked.js' );
var blockedany5d = require( './5d_blocked.js' );
var blockedany6d = require( './6d_blocked.js' );
var blockedany7d = require( './7d_blocked.js' );
var blockedany8d = require( './8d_blocked.js' );
var blockedany9d = require( './9d_blocked.js' );
var blockedany10d = require( './10d_blocked.js' );
var accessorany0d = require( './0d_accessors.js' );
var accessorany1d = require( './1d_accessors.js' );
var accessorany2d = require( './2d_accessors.js' );
var accessorany3d = require( './3d_accessors.js' );
var accessorany4d = require( './4d_accessors.js' );
var accessorany5d = require( './5d_accessors.js' );
var accessorany6d = require( './6d_accessors.js' );
var accessorany7d = require( './7d_accessors.js' );
var accessorany8d = require( './8d_accessors.js' );
var accessorany9d = require( './9d_accessors.js' );
var accessorany10d = require( './10d_accessors.js' );
var accessoranynd = require( './nd_accessors.js' );
var complexany0d = require( './0d_complex.js' );
var complexany1d = require( './1d_complex.js' );
var complexany2d = require( './2d_complex.js' );
var complexany3d = require( './3d_complex.js' );
var complexany4d = require( './4d_complex.js' );
var complexany5d = require( './5d_complex.js' );
var complexany6d = require( './6d_complex.js' );
var complexany7d = require( './7d_complex.js' );
var complexany8d = require( './8d_complex.js' );
var complexany9d = require( './9d_complex.js' );
var complexany10d = require( './10d_complex.js' );
var complexanynd = require( './nd_complex.js' );
var any0d = require( './0d.js' );
var any1d = require( './1d.js' );
var any2d = require( './2d.js' );
var any3d = require( './3d.js' );
var any4d = require( './4d.js' );
var any5d = require( './5d.js' );
var any6d = require( './6d.js' );
var any7d = require( './7d.js' );
var any8d = require( './8d.js' );
var any9d = require( './9d.js' );
var any10d = require( './10d.js' );
var anynd = require( './nd.js' );


// VARIABLES //

var ANY = [
	any0d,
	any1d,
	any2d,
	any3d,
	any4d,
	any5d,
	any6d,
	any7d,
	any8d,
	any9d,
	any10d
];
var ACCESSOR_ANY = [
	accessorany0d,
	accessorany1d,
	accessorany2d,
	accessorany3d,
	accessorany4d,
	accessorany5d,
	accessorany6d,
	accessorany7d,
	accessorany8d,
	accessorany9d,
	accessorany10d
];
var COMPLEX_ANY = [
	complexany0d,
	complexany1d,
	complexany2d,
	complexany3d,
	complexany4d,
	complexany5d,
	complexany6d,
	complexany7d,
	complexany8d,
	complexany9d,
	complexany10d
];
var BLOCKED_ANY = [
	blockedany2d, // 0
	blockedany3d,
	blockedany4d,
	blockedany5d,
	blockedany6d,
	blockedany7d,
	blockedany8d,
	blockedany9d,
	blockedany10d // 8
];
var BLOCKED_ACCESSOR_ANY = [
	blockedaccessorany2d, // 0
	blockedaccessorany3d,
	blockedaccessorany4d,
	blockedaccessorany5d,
	blockedaccessorany6d,
	blockedaccessorany7d,
	blockedaccessorany8d,
	blockedaccessorany9d,
	blockedaccessorany10d // 8
];
var BLOCKED_COMPLEX_ANY = [
	blockedcomplexany2d, // 0
	blockedcomplexany3d,
	blockedcomplexany4d,
	blockedcomplexany5d,
	blockedcomplexany6d,
	blockedcomplexany7d,
	blockedcomplexany8d,
	blockedcomplexany9d,
	blockedcomplexany10d // 8
];
var MAX_DIMS = ANY.length - 1;


// MAIN //

/**
* Tests whether at least one element in an ndarray is truthy.
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
* var out = any( [ x ] );
* // returns true
*/
function any( arrays ) {
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
			return ACCESSOR_ANY[ ndims ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_ANY[ ndims ]( x );
		}
		return ANY[ ndims ]( x );
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
		return false;
	}
	// Determine whether the ndarray is one-dimensional and thus readily translates to a one-dimensional strided array...
	if ( ndims === 1 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_ANY[ ndims ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_ANY[ ndims ]( x );
		}
		return ANY[ ndims ]( x );
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
			return ACCESSOR_ANY[ 1 ]( x );
		}
		if ( isCmplx ) {
			return COMPLEX_ANY[ 1 ]( x );
		}
		return ANY[ 1 ]( x );
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
				return ACCESSOR_ANY[ 1 ]( x );
			}
			if ( isCmplx ) {
				return COMPLEX_ANY[ 1 ]( x );
			}
			return ANY[ 1 ]( x );
		}
		// The ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol ) {
				return ACCESSOR_ANY[ ndims ]( x );
			}
			if ( isCmplx ) {
				return COMPLEX_ANY[ ndims ]( x );
			}
			return ANY[ ndims ]( x );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with a non-contiguous n-dimensional array or a high dimensional n-dimensional array, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_ANY[ ndims-2 ]( x );
		}
		if ( isCmplx ) {
			return BLOCKED_COMPLEX_ANY[ ndims-2 ]( x );
		}
		return BLOCKED_ANY[ ndims-2 ]( x );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessoranynd( x );
	}
	if ( isCmplx ) {
		return complexanynd( x );
	}
	return anynd( x );
}


// EXPORTS //

module.exports = any;
