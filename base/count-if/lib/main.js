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
var blockedaccessorcount2d = require( './2d_blocked_accessors.js' );
var blockedaccessorcount3d = require( './3d_blocked_accessors.js' );
var blockedaccessorcount4d = require( './4d_blocked_accessors.js' );
var blockedaccessorcount5d = require( './5d_blocked_accessors.js' );
var blockedaccessorcount6d = require( './6d_blocked_accessors.js' );
var blockedaccessorcount7d = require( './7d_blocked_accessors.js' );
var blockedaccessorcount8d = require( './8d_blocked_accessors.js' );
var blockedaccessorcount9d = require( './9d_blocked_accessors.js' );
var blockedaccessorcount10d = require( './10d_blocked_accessors.js' );
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
var MAX_DIMS = COUNT.length - 1;


// MAIN //

/**
* Counts the number of elements in an ndarray which pass a test implemented by a predicate function.
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
* @returns {integer} result
*
* @example
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
* // Perform operation:
* var out = countIf( [ x ], predicate );
* // returns 5
*/
function countIf( arrays, predicate, thisArg ) {
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
			return ACCESSOR_COUNT[ ndims ]( x, predicate, thisArg );
		}
		return COUNT[ ndims ]( x, predicate, thisArg );
	}
	// Check whether we were provided an empty ndarray...
	if ( numel( shx ) === 0 ) {
		return true;
	}
	// Determine whether we can avoid blocked iteration...
	if ( ndims <= MAX_DIMS && iterationOrder( x.strides ) !== 0 ) {
		// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		if ( x.accessorProtocol ) {
			return ACCESSOR_COUNT[ ndims ]( x, predicate, thisArg );
		}
		return COUNT[ ndims ]( x, predicate, thisArg );
	}
	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_COUNT[ ndims-2 ]( x, predicate, thisArg );
		}
		return BLOCKED_COUNT[ ndims-2 ]( x, predicate, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorcountnd( x, predicate, thisArg );
	}
	return countnd( x, predicate, thisArg );
}


// EXPORTS //

module.exports = countIf;
