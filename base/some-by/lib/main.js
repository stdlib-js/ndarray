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
var ndarray2object = require( './../../../base/ndarraylike2object' );
var numel = require( './../../../base/numel' );
var blockedaccessorsome2d = require( './2d_blocked_accessors.js' );
var blockedaccessorsome3d = require( './3d_blocked_accessors.js' );
var blockedaccessorsome4d = require( './4d_blocked_accessors.js' );
var blockedaccessorsome5d = require( './5d_blocked_accessors.js' );
var blockedaccessorsome6d = require( './6d_blocked_accessors.js' );
var blockedaccessorsome7d = require( './7d_blocked_accessors.js' );
var blockedaccessorsome8d = require( './8d_blocked_accessors.js' );
var blockedaccessorsome9d = require( './9d_blocked_accessors.js' );
var blockedaccessorsome10d = require( './10d_blocked_accessors.js' );
var blockedsome2d = require( './2d_blocked.js' );
var blockedsome3d = require( './3d_blocked.js' );
var blockedsome4d = require( './4d_blocked.js' );
var blockedsome5d = require( './5d_blocked.js' );
var blockedsome6d = require( './6d_blocked.js' );
var blockedsome7d = require( './7d_blocked.js' );
var blockedsome8d = require( './8d_blocked.js' );
var blockedsome9d = require( './9d_blocked.js' );
var blockedsome10d = require( './10d_blocked.js' );
var accessorsome0d = require( './0d_accessors.js' );
var accessorsome1d = require( './1d_accessors.js' );
var accessorsome2d = require( './2d_accessors.js' );
var accessorsome3d = require( './3d_accessors.js' );
var accessorsome4d = require( './4d_accessors.js' );
var accessorsome5d = require( './5d_accessors.js' );
var accessorsome6d = require( './6d_accessors.js' );
var accessorsome7d = require( './7d_accessors.js' );
var accessorsome8d = require( './8d_accessors.js' );
var accessorsome9d = require( './9d_accessors.js' );
var accessorsome10d = require( './10d_accessors.js' );
var accessorsomend = require( './nd_accessors.js' );
var some0d = require( './0d.js' );
var some1d = require( './1d.js' );
var some2d = require( './2d.js' );
var some3d = require( './3d.js' );
var some4d = require( './4d.js' );
var some5d = require( './5d.js' );
var some6d = require( './6d.js' );
var some7d = require( './7d.js' );
var some8d = require( './8d.js' );
var some9d = require( './9d.js' );
var some10d = require( './10d.js' );
var somend = require( './nd.js' );


// VARIABLES //

var SOME = [
	some0d,
	some1d,
	some2d,
	some3d,
	some4d,
	some5d,
	some6d,
	some7d,
	some8d,
	some9d,
	some10d
];
var ACCESSOR_SOME = [
	accessorsome0d,
	accessorsome1d,
	accessorsome2d,
	accessorsome3d,
	accessorsome4d,
	accessorsome5d,
	accessorsome6d,
	accessorsome7d,
	accessorsome8d,
	accessorsome9d,
	accessorsome10d
];
var BLOCKED_SOME = [
	blockedsome2d, // 0
	blockedsome3d,
	blockedsome4d,
	blockedsome5d,
	blockedsome6d,
	blockedsome7d,
	blockedsome8d,
	blockedsome9d,
	blockedsome10d // 8
];
var BLOCKED_ACCESSOR_SOME = [
	blockedaccessorsome2d, // 0
	blockedaccessorsome3d,
	blockedaccessorsome4d,
	blockedaccessorsome5d,
	blockedaccessorsome6d,
	blockedaccessorsome7d,
	blockedaccessorsome8d,
	blockedaccessorsome9d,
	blockedaccessorsome10d // 8
];
var MAX_DIMS = SOME.length - 1;


// MAIN //

/**
* Tests whether at least `n` elements in an ndarray pass a test implemented by a predicate function.
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
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray and a zero-dimensional ndarray specifying the minimum number of elements in the input ndarray that must satisfy the predicate function
* @param {Function} predicate - predicate function
* @param {thisArg} [thisArg] - predicate function execution context
* @returns {boolean} boolean indicating whether at least `n` elements pass a test
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* function predicate( value ) {
*    return value > 0.0;
* }
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
* // Define the success criterion:
* var n = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* // Test elements:
* var out = someBy( [ x, n ], predicate );
* // returns true
*/
function someBy( arrays, predicate, thisArg ) {
	var ndims;
	var shx;
	var x;
	var n;
	var N;

	// Unpack the ndarray and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	n = ndarray2object( arrays[ 1 ] );

	shx = x.shape;
	ndims = shx.length;

	// Resolve the success criterion:
	N = n.accessors[ 0 ]( n.data, n.offset );

	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_SOME[ ndims ]( x, N, predicate, thisArg );
		}
		return SOME[ ndims ]( x, N, predicate, thisArg );
	}
	// Check whether we were provided an empty ndarray...
	if ( numel( shx ) === 0 ) {
		return false;
	}
	// Determine whether we can avoid blocked iteration...
	if ( ndims <= MAX_DIMS && iterationOrder( x.strides ) !== 0 ) {
		// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		if ( x.accessorProtocol ) {
			return ACCESSOR_SOME[ ndims ]( x, N, predicate, thisArg );
		}
		return SOME[ ndims ]( x, N, predicate, thisArg );
	}
	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_SOME[ ndims-2 ]( x, N, predicate, thisArg );
		}
		return BLOCKED_SOME[ ndims-2 ]( x, N, predicate, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorsomend( x, N, predicate, thisArg );
	}
	return somend( x, N, predicate, thisArg );
}


// EXPORTS //

module.exports = someBy;
