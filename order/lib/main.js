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

var isOrder = require( './../../base/assert/is-order' );
var strides = require( './../../strides' );
var ndims = require( './../../ndims' );
var strides2order = require( './../../base/strides2order' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var ROW_MAJOR = 'row-major';
var COLUMN_MAJOR = 'column-major';


// MAIN //

/**
* Returns the layout order of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
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

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	o = x.order;
	if ( isOrder( o ) ) {
		return o;
	}
	// Try to infer the layout order from the strides array...
	st = strides( x );
	o = strides2order( st );
	if ( o === 1 || o === 3 ) {
		return ROW_MAJOR; // for o == 3 (both row- and column-major; e.g., one-dimensional ndarrays), default to row-major
	}
	if ( o === 2 ) {
		return COLUMN_MAJOR;
	}
	// o === 0
	if ( ndims( x ) === 0 ) {
		return ROW_MAJOR; // default to row-major for zero-dimensional ndarrays
	}
	// Case: mixed strides (e.g., [ 2, 3, 1 ] )
	return null;
}


// EXPORTS //

module.exports = order;
