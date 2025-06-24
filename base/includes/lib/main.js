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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var iterationOrder = require( './../../../base/iteration-order' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
var ndarray2object = require( './../../../base/ndarraylike2object' );
var reinterpretComplex = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var gscal = require( '@stdlib/blas/base/gscal' );
var blockedaccessorincludes2d = require( './2d_blocked_accessors.js' );
var blockedaccessorincludes3d = require( './3d_blocked_accessors.js' );
var blockedaccessorincludes4d = require( './4d_blocked_accessors.js' );
var blockedaccessorincludes5d = require( './5d_blocked_accessors.js' );
var blockedaccessorincludes6d = require( './6d_blocked_accessors.js' );
var blockedaccessorincludes7d = require( './7d_blocked_accessors.js' );
var blockedaccessorincludes8d = require( './8d_blocked_accessors.js' );
var blockedaccessorincludes9d = require( './9d_blocked_accessors.js' );
var blockedaccessorincludes10d = require( './10d_blocked_accessors.js' ); // eslint-disable-line id-length
var blockedcomplexincludes2d = require( './2d_blocked_complex.js' );
var blockedcomplexincludes3d = require( './3d_blocked_complex.js' );
var blockedcomplexincludes4d = require( './4d_blocked_complex.js' );
var blockedcomplexincludes5d = require( './5d_blocked_complex.js' );
var blockedcomplexincludes6d = require( './6d_blocked_complex.js' );
var blockedcomplexincludes7d = require( './7d_blocked_complex.js' );
var blockedcomplexincludes8d = require( './8d_blocked_complex.js' );
var blockedcomplexincludes9d = require( './9d_blocked_complex.js' );
var blockedcomplexincludes10d = require( './10d_blocked_complex.js' );
var blockedincludes2d = require( './2d_blocked.js' );
var blockedincludes3d = require( './3d_blocked.js' );
var blockedincludes4d = require( './4d_blocked.js' );
var blockedincludes5d = require( './5d_blocked.js' );
var blockedincludes6d = require( './6d_blocked.js' );
var blockedincludes7d = require( './7d_blocked.js' );
var blockedincludes8d = require( './8d_blocked.js' );
var blockedincludes9d = require( './9d_blocked.js' );
var blockedincludes10d = require( './10d_blocked.js' );
var accessorincludes0d = require( './0d_accessors.js' );
var accessorincludes1d = require( './1d_accessors.js' );
var accessorincludes2d = require( './2d_accessors.js' );
var accessorincludes3d = require( './3d_accessors.js' );
var accessorincludes4d = require( './4d_accessors.js' );
var accessorincludes5d = require( './5d_accessors.js' );
var accessorincludes6d = require( './6d_accessors.js' );
var accessorincludes7d = require( './7d_accessors.js' );
var accessorincludes8d = require( './8d_accessors.js' );
var accessorincludes9d = require( './9d_accessors.js' );
var accessorincludes10d = require( './10d_accessors.js' );
var accessorincludesnd = require( './nd_accessors.js' );
var complexincludes0d = require( './0d_complex.js' );
var complexincludes1d = require( './1d_complex.js' );
var complexincludes2d = require( './2d_complex.js' );
var complexincludes3d = require( './3d_complex.js' );
var complexincludes4d = require( './4d_complex.js' );
var complexincludes5d = require( './5d_complex.js' );
var complexincludes6d = require( './6d_complex.js' );
var complexincludes7d = require( './7d_complex.js' );
var complexincludes8d = require( './8d_complex.js' );
var complexincludes9d = require( './9d_complex.js' );
var complexincludes10d = require( './10d_complex.js' );
var complexincludesnd = require( './nd_complex.js' );
var includes0d = require( './0d.js' );
var includes1d = require( './1d.js' );
var includes2d = require( './2d.js' );
var includes3d = require( './3d.js' );
var includes4d = require( './4d.js' );
var includes5d = require( './5d.js' );
var includes6d = require( './6d.js' );
var includes7d = require( './7d.js' );
var includes8d = require( './8d.js' );
var includes9d = require( './9d.js' );
var includes10d = require( './10d.js' );
var includesnd = require( './nd.js' );


// VARIABLES //

var INCLUDES = [
	includes0d,
	includes1d,
	includes2d,
	includes3d,
	includes4d,
	includes5d,
	includes6d,
	includes7d,
	includes8d,
	includes9d,
	includes10d
];
var ACCESSOR_INCLUDES = [
	accessorincludes0d,
	accessorincludes1d,
	accessorincludes2d,
	accessorincludes3d,
	accessorincludes4d,
	accessorincludes5d,
	accessorincludes6d,
	accessorincludes7d,
	accessorincludes8d,
	accessorincludes9d,
	accessorincludes10d
];
var COMPLEX_INCLUDES = [
	complexincludes0d,
	complexincludes1d,
	complexincludes2d,
	complexincludes3d,
	complexincludes4d,
	complexincludes5d,
	complexincludes6d,
	complexincludes7d,
	complexincludes8d,
	complexincludes9d,
	complexincludes10d
];
var BLOCKED_INCLUDES = [
	blockedincludes2d, // 0
	blockedincludes3d,
	blockedincludes4d,
	blockedincludes5d,
	blockedincludes6d,
	blockedincludes7d,
	blockedincludes8d,
	blockedincludes9d,
	blockedincludes10d // 8
];
var BLOCKED_ACCESSOR_INCLUDES = [
	blockedaccessorincludes2d, // 0
	blockedaccessorincludes3d,
	blockedaccessorincludes4d,
	blockedaccessorincludes5d,
	blockedaccessorincludes6d,
	blockedaccessorincludes7d,
	blockedaccessorincludes8d,
	blockedaccessorincludes9d,
	blockedaccessorincludes10d // 8
];
var BLOCKED_COMPLEX_INCLUDES = [
	blockedcomplexincludes2d, // 0
	blockedcomplexincludes3d,
	blockedcomplexincludes4d,
	blockedcomplexincludes5d,
	blockedcomplexincludes6d,
	blockedcomplexincludes7d,
	blockedcomplexincludes8d,
	blockedcomplexincludes9d,
	blockedcomplexincludes10d // 8
];
var MAX_DIMS = INCLUDES.length - 1;


// MAIN //

/**
* Tests whether an ndarray contains a specified value.
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
* @param {ArrayLikeObject<Object>} arrays - array-like object containing one input array and a zero-dimensional search element array
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
* var ox = 0;
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
* // Create the search element ndarray-like object:
* var searchElement = {
*     'dtype': 'float64',
*     'data': new Float64Array( [ 2.0 ] ),
*     'shape': [],
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Perform reduction:
* var out = includes( [ x, searchElement ] );
* // returns true
*/
function includes( arrays ) {
	var isCmplx;
	var value;
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

	// Unpack the ndarrays and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	value = ndarray2object( arrays[ 1 ] );

	shx = x.shape;
	ndims = shx.length;

	// Resolve the search element as a scalar:
	value = value.accessors[ 0 ]( value.data, value.offset );

	// Check for known array types which can be reinterpreted for better iteration performance...
	if ( isBooleanArray( x.data ) ) {
		if ( !isBoolean( value ) ) {
			return false;
		}
		x.data = reinterpretBoolean( x.data, 0 );
		x.accessorProtocol = false;
	} else if ( isComplexArray( x.data ) ) {
		if ( !isComplexLike( value ) ) {
			return false;
		}
		// TODO: consider adding something like `complex/base/complex2object` where we normalize a user-provided complex-like object to a standardized object shape
		value = {
			're': real( value ),
			'im': imag( value )
		};
		x.data = reinterpretComplex( x.data, 0 );
		x.accessorProtocol = false;
		x.strides = gscal( ndims, 2, x.strides, 1 );
		x.offset *= 2;
		isCmplx = true;
	}
	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_INCLUDES[ ndims ]( x, value );
		}
		if ( isCmplx ) {
			return COMPLEX_INCLUDES[ ndims ]( x, value );
		}
		return INCLUDES[ ndims ]( x, value );
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
			return ACCESSOR_INCLUDES[ ndims ]( x, value );
		}
		if ( isCmplx ) {
			return COMPLEX_INCLUDES[ ndims ]( x, value );
		}
		return INCLUDES[ ndims ]( x, value );
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
			return ACCESSOR_INCLUDES[ 1 ]( x, value );
		}
		if ( isCmplx ) {
			return COMPLEX_INCLUDES[ 1 ]( x, value );
		}
		return INCLUDES[ 1 ]( x, value );
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
				return ACCESSOR_INCLUDES[ 1 ]( x, value );
			}
			if ( isCmplx ) {
				return COMPLEX_INCLUDES[ 1 ]( x, value );
			}
			return INCLUDES[ 1 ]( x, value );
		}
		// The ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims <= MAX_DIMS ) {
			// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			if ( x.accessorProtocol ) {
				return ACCESSOR_INCLUDES[ ndims ]( x, value );
			}
			if ( isCmplx ) {
				return COMPLEX_INCLUDES[ ndims ]( x, value );
			}
			return INCLUDES[ ndims ]( x, value );
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with a non-contiguous n-dimensional array or a high dimensional n-dimensional array, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_INCLUDES[ ndims-2 ]( x, value );
		}
		if ( isCmplx ) {
			return BLOCKED_COMPLEX_INCLUDES[ ndims-2 ]( x, value );
		}
		return BLOCKED_INCLUDES[ ndims-2 ]( x, value );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorincludesnd( x, value );
	}
	if ( isCmplx ) {
		return complexincludesnd( x, value );
	}
	return includesnd( x, value );
}


// EXPORTS //

module.exports = includes;
