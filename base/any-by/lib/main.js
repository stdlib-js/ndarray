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
var blockedaccessorany2d = require( './2d_blocked_accessors.js' );
var blockedaccessorany3d = require( './3d_blocked_accessors.js' );
var blockedaccessorany4d = require( './4d_blocked_accessors.js' );
var blockedaccessorany5d = require( './5d_blocked_accessors.js' );
var blockedaccessorany6d = require( './6d_blocked_accessors.js' );
var blockedaccessorany7d = require( './7d_blocked_accessors.js' );
var blockedaccessorany8d = require( './8d_blocked_accessors.js' );
var blockedaccessorany9d = require( './9d_blocked_accessors.js' );
var blockedaccessorany10d = require( './10d_blocked_accessors.js' );
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
var MAX_DIMS = ANY.length - 1;


// MAIN //

/**
* Tests whether at least one element in an ndarray passes a test implemented by a predicate function.
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
* @returns {boolean} boolean indicating whether at least one element passes a test
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
* var out = anyBy( [ x ], predicate );
* // returns true
*/
function anyBy( arrays, predicate, thisArg ) {
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
			return ACCESSOR_ANY[ ndims ]( x, predicate, thisArg );
		}
		return ANY[ ndims ]( x, predicate, thisArg );
	}
	// Check whether we were provided an empty ndarray...
	if ( numel( shx ) === 0 ) {
		return false;
	}
	// Determine whether we can avoid blocked iteration...
	if ( ndims <= MAX_DIMS && iterationOrder( x.strides ) !== 0 ) {
		// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		if ( x.accessorProtocol ) {
			return ACCESSOR_ANY[ ndims ]( x, predicate, thisArg );
		}
		return ANY[ ndims ]( x, predicate, thisArg );
	}
	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_ANY[ ndims-2 ]( x, predicate, thisArg );
		}
		return BLOCKED_ANY[ ndims-2 ]( x, predicate, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessoranynd( x, predicate, thisArg );
	}
	return anynd( x, predicate, thisArg );
}


// EXPORTS //

module.exports = anyBy;
