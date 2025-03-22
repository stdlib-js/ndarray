/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var strides2order = require( './../../../base/strides2order' );


// VARIABLES //

var ROW_MAJOR = 'row-major';
var COLUMN_MAJOR = 'column-major';


// MAIN //

/**
* Returns the layout order of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @returns {(string|null)} layout order
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'order': 'row-major'
* });
*
* var out = order( x );
* // returns 'row-major'
*/
function order( x ) {
	var st;
	var o;

	o = x.order;
	if ( typeof o === 'string' ) {
		return o;
	}
	// Try to infer the layout order from the strides array...
	st = x.strides;
	if ( typeof st !== 'object' || st === null ) {
		return ROW_MAJOR; // WARNING: default to row-major for ndarray-like objects lacking strides. This may or may not be accurate, and we're defaulting to row-major here based on the belief that row-major is more likely given that, e.g., JavaScript arrays are similar to C arrays (i.e., stored in row-major order).
	}
	o = strides2order( st );
	if ( o === 1 || o === 3 ) {
		return ROW_MAJOR; // for o == 3 (both row- and column-major; e.g., one-dimensional ndarrays), default to row-major
	}
	if ( o === 2 ) {
		return COLUMN_MAJOR;
	}
	// o === 0
	if ( x.shape.length === 0 ) {
		return ROW_MAJOR; // default to row-major for zero-dimensional ndarrays
	}
	// Case: mixed strides (e.g., [ 2, 3, 1 ] )
	return null;
}


// EXPORTS //

module.exports = order;
