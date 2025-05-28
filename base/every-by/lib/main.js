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
var blockedaccessorevery2d = require( './2d_blocked_accessors.js' );
var blockedaccessorevery3d = require( './3d_blocked_accessors.js' );
var blockedaccessorevery4d = require( './4d_blocked_accessors.js' );
var blockedaccessorevery5d = require( './5d_blocked_accessors.js' );
var blockedaccessorevery6d = require( './6d_blocked_accessors.js' );
var blockedaccessorevery7d = require( './7d_blocked_accessors.js' );
var blockedaccessorevery8d = require( './8d_blocked_accessors.js' );
var blockedaccessorevery9d = require( './9d_blocked_accessors.js' );
var blockedaccessorevery10d = require( './10d_blocked_accessors.js' );
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
var MAX_DIMS = EVERY.length - 1;


// MAIN //

/**
* Tests whether all elements in an ndarray pass a test implemented by a predicate function.
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
* @param {Function} predicate - predicate function
* @param {thisArg} [thisArg] - predicate function execution context
* @returns {boolean} boolean indicating whether all elements pass a test
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function predicate( value ) {
*    return value > 0.0;
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
* // Test elements:
* var out = everyBy( [ x ], predicate );
* // returns true
*/
function everyBy( arrays, predicate, thisArg ) {
	var ndims;
	var shx;
	var x;

	// Unpack the ndarray and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	shx = x.shape;
	ndims = shx.length;

	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_EVERY[ ndims ]( x, predicate, thisArg );
		}
		return EVERY[ ndims ]( x, predicate, thisArg );
	}
	// Check whether we were provided an empty ndarray...
	if ( numel( shx ) === 0 ) {
		return true;
	}
	// Determine whether we can avoid blocked iteration...
	if ( ndims <= MAX_DIMS && iterationOrder( x.strides ) !== 0 ) {
		// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		if ( x.accessorProtocol ) {
			return ACCESSOR_EVERY[ ndims ]( x, predicate, thisArg );
		}
		return EVERY[ ndims ]( x, predicate, thisArg );
	}
	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_EVERY[ ndims-2 ]( x, predicate, thisArg );
		}
		return BLOCKED_EVERY[ ndims-2 ]( x, predicate, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessoreverynd( x, predicate, thisArg );
	}
	return everynd( x, predicate, thisArg );
}


// EXPORTS //

module.exports = everyBy;
