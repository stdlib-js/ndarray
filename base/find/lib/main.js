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

var ndarray2object = require( './../../../base/ndarraylike2object' );
var numel = require( './../../../base/numel' );
var accessorfind0d = require( './0d_accessors.js' );
var accessorfind1d = require( './1d_accessors.js' );
var accessorfind2d = require( './2d_accessors.js' );
var accessorfind3d = require( './3d_accessors.js' );
var accessorfind4d = require( './4d_accessors.js' );
var accessorfind5d = require( './5d_accessors.js' );
var accessorfind6d = require( './6d_accessors.js' );
var accessorfind7d = require( './7d_accessors.js' );
var accessorfind8d = require( './8d_accessors.js' );
var accessorfind9d = require( './9d_accessors.js' );
var accessorfind10d = require( './10d_accessors.js' );
var accessorfindnd = require( './nd_accessors.js' );
var find0d = require( './0d.js' );
var find1d = require( './1d.js' );
var find2d = require( './2d.js' );
var find3d = require( './3d.js' );
var find4d = require( './4d.js' );
var find5d = require( './5d.js' );
var find6d = require( './6d.js' );
var find7d = require( './7d.js' );
var find8d = require( './8d.js' );
var find9d = require( './9d.js' );
var find10d = require( './10d.js' );
var findnd = require( './nd.js' );


// VARIABLES //

var FIND = [
	find0d,
	find1d,
	find2d,
	find3d,
	find4d,
	find5d,
	find6d,
	find7d,
	find8d,
	find9d,
	find10d
];
var ACCESSOR_FIND = [
	accessorfind0d,
	accessorfind1d,
	accessorfind2d,
	accessorfind3d,
	accessorfind4d,
	accessorfind5d,
	accessorfind6d,
	accessorfind7d,
	accessorfind8d,
	accessorfind9d,
	accessorfind10d
];
var MAX_DIMS = FIND.length - 1;


// MAIN //

/**
* Returns the first element in an ndarray which passes a test implemented by a predicate function.
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
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray and a zero-dimensional ndarray containing a sentinel value
* @param {Function} predicate - predicate function
* @param {thisArg} [thisArg] - predicate function execution context
* @returns {*} result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function predicate( value ) {
*    return value % 2.0 === 0.0;
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
* // Create an ndarray-like object containing a sentinel value:
* var sentinelValue = {
*     'dtype': 'float64',
*     'data': new Float64Array( [ NaN ] ),
*     'shape': [],
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Perform operation:
* var out = find( [ x, sentinelValue ], predicate );
* // returns 2.0
*/
function find( arrays, predicate, thisArg ) { // eslint-disable-line stdlib/no-redeclare
	var ndims;
	var shx;
	var sv;
	var x;

	// Unpack the ndarrays and standardize ndarray meta data:
	x = ndarray2object( arrays[ 0 ] );
	sv = ndarray2object( arrays[ 1 ] );

	shx = x.shape;
	ndims = shx.length;

	// Resolve the sentinel value:
	sv = sv.accessors[ 0 ]( sv.data, sv.offset );

	// Determine whether we can avoid iteration altogether...
	if ( ndims === 0 ) {
		if ( x.accessorProtocol ) {
			return ACCESSOR_FIND[ ndims ]( x, sv, predicate, thisArg );
		}
		return FIND[ ndims ]( x, sv, predicate, thisArg );
	}
	// Check whether we were provided an empty ndarray...
	if ( numel( shx ) === 0 ) {
		return sv;
	}
	// Determine whether we can avoid linear view iteration...
	if ( ndims <= MAX_DIMS ) {
		// So long as iteration always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops; however, for mixed signed strides, iteration will not be cache-optimal, but we don't have much of a choice as loop tiling could lead to different results than cache-optimal iteration, so we just use normal nested loops for all iteration...
		if ( x.accessorProtocol ) {
			return ACCESSOR_FIND[ ndims ]( x, sv, predicate, thisArg );
		}
		return FIND[ ndims ]( x, sv, predicate, thisArg );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( x.accessorProtocol ) {
		return accessorfindnd( x, sv, predicate, thisArg );
	}
	return findnd( x, sv, predicate, thisArg );
}


// EXPORTS //

module.exports = find;
