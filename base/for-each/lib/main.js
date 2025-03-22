/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var blockedaccessorForEach2d = require( './2d_blocked_accessors.js' );
var blockedaccessorForEach3d = require( './3d_blocked_accessors.js' );
var blockedaccessorForEach4d = require( './4d_blocked_accessors.js' );
var blockedaccessorForEach5d = require( './5d_blocked_accessors.js' );
var blockedaccessorForEach6d = require( './6d_blocked_accessors.js' );
var blockedaccessorForEach7d = require( './7d_blocked_accessors.js' );
var blockedaccessorForEach8d = require( './8d_blocked_accessors.js' );
var blockedaccessorForEach9d = require( './9d_blocked_accessors.js' );
var blockedaccessorForEach10d = require( './10d_blocked_accessors.js' );
var blockedForEach2d = require( './2d_blocked.js' );
var blockedForEach3d = require( './3d_blocked.js' );
var blockedForEach4d = require( './4d_blocked.js' );
var blockedForEach5d = require( './5d_blocked.js' );
var blockedForEach6d = require( './6d_blocked.js' );
var blockedForEach7d = require( './7d_blocked.js' );
var blockedForEach8d = require( './8d_blocked.js' );
var blockedForEach9d = require( './9d_blocked.js' );
var blockedForEach10d = require( './10d_blocked.js' );
var accessorForEach0d = require( './0d_accessors.js' );
var accessorForEach1d = require( './1d_accessors.js' );
var accessorForEach2d = require( './2d_accessors.js' );
var accessorForEach3d = require( './3d_accessors.js' );
var accessorForEach4d = require( './4d_accessors.js' );
var accessorForEach5d = require( './5d_accessors.js' );
var accessorForEach6d = require( './6d_accessors.js' );
var accessorForEach7d = require( './7d_accessors.js' );
var accessorForEach8d = require( './8d_accessors.js' );
var accessorForEach9d = require( './9d_accessors.js' );
var accessorForEach10d = require( './10d_accessors.js' );
var accessorForEachnd = require( './nd_accessors.js' );
var forEach0d = require( './0d.js' );
var forEach1d = require( './1d.js' );
var forEach2d = require( './2d.js' );
var forEach3d = require( './3d.js' );
var forEach4d = require( './4d.js' );
var forEach5d = require( './5d.js' );
var forEach6d = require( './6d.js' );
var forEach7d = require( './7d.js' );
var forEach8d = require( './8d.js' );
var forEach9d = require( './9d.js' );
var forEach10d = require( './10d.js' );
var forEachnd = require( './nd.js' );


// VARIABLES //

var FOR_EACH = [
	forEach0d,
	forEach1d,
	forEach2d,
	forEach3d,
	forEach4d,
	forEach5d,
	forEach6d,
	forEach7d,
	forEach8d,
	forEach9d,
	forEach10d
];
var ACCESSOR_FOR_EACH = [
	accessorForEach0d,
	accessorForEach1d,
	accessorForEach2d,
	accessorForEach3d,
	accessorForEach4d,
	accessorForEach5d,
	accessorForEach6d,
	accessorForEach7d,
	accessorForEach8d,
	accessorForEach9d,
	accessorForEach10d
];
var BLOCKED_FOR_EACH = [
	blockedForEach2d, // 0
	blockedForEach3d,
	blockedForEach4d,
	blockedForEach5d,
	blockedForEach6d,
	blockedForEach7d,
	blockedForEach8d,
	blockedForEach9d,
	blockedForEach10d // 8
];
var BLOCKED_ACCESSOR_FOR_EACH = [
	blockedaccessorForEach2d, // 0
	blockedaccessorForEach3d,
	blockedaccessorForEach4d,
	blockedaccessorForEach5d,
	blockedaccessorForEach6d,
	blockedaccessorForEach7d,
	blockedaccessorForEach8d,
	blockedaccessorForEach9d,
	blockedaccessorForEach10d // 8
];
var MAX_DIMS = FOR_EACH.length - 1;


// MAIN //

/**
* Invokes a callback function once for each ndarray element.
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
* @param {Callback} fcn - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( 12 );
*
* // Define the shape of the array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an ndarray-like object:
* var x = {
*     'ref': null,
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Apply the callback function:
* forEach( [ x ], naryFunction( log, 1 ) );
*/
function forEach( arrays, fcn, thisArg ) {
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
			return ACCESSOR_FOR_EACH[ ndims ]( x, fcn, thisArg );
		}
		return FOR_EACH[ ndims ]( x, fcn, thisArg );
	}
	// Check whether we were provided an empty ndarray...
	if ( numel( shx ) === 0 ) {
		return;
	}
	// Determine whether we can avoid blocked iteration...
	if ( ndims <= MAX_DIMS && iterationOrder( x.strides ) !== 0 ) {
		// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		if ( x.accessorProtocol ) {
			return ACCESSOR_FOR_EACH[ ndims ]( x, fcn, thisArg );
		}
		return FOR_EACH[ ndims ]( x, fcn, thisArg );
	}
	// Determine whether we can perform blocked iteration...
	if ( ndims <= MAX_DIMS ) {
		if ( x.accessorProtocol ) {
			return BLOCKED_ACCESSOR_FOR_EACH[ ndims-2 ]( x, fcn, thisArg );
		}
		return BLOCKED_FOR_EACH[ ndims-2 ]( x, fcn, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorForEachnd( x, fcn, thisArg );
	}
	forEachnd( x, fcn, thisArg );
}


// EXPORTS //

module.exports = forEach;
