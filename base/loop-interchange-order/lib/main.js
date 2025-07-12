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

var zeroTo = require( '@stdlib/array/base/zero-to' );
var copy = require( '@stdlib/array/base/copy-indexed' );
var take = require( '@stdlib/array/base/take-indexed' );
var strides2order = require( './../../../base/strides2order' );
var sort2ins = require( './sort2ins.js' );


// MAIN //

/**
* Reorders ndarray dimensions and associated strides for loop interchange.
*
* ## Notes
*
* -   The returned array has the following elements:
*
*     ```text
*     [ <shape>, ...<strides> ]
*     ```
*
*     where
*
*     -   **shape**: dimensions sorted in loop order.
*     -   **...strides**: strides for each respective ndarray sorted in loop order.
*
* @param {NonNegativeIntegerArray} shape - array dimensions
* @param {ArrayLikeObject<ArrayLikeObject<integer>>} strides - list of stride arrays containing the stride lengths for each input and output ndarray
* @returns {Array<Array>} loop interchange data
*
* @example
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
* var sy = [ 24, 8, 1 ]; // row-major
* var sz = [ 1, -2, 6 ]; // column-major
*
* var o = loopOrder( sh, [ sx, sy, sz ] );
* // returns [...]
*
* var ssh = o[ 0 ];
* // returns [ 4, 3, 2 ]
*
* var ssx = o[ 1 ];
* // returns [ 1, 4, 12 ]
*
* var ssy = o[ 2 ];
* // returns [ 1, 8, 24 ]
*
* var ssz = o[ 3 ];
* // returns [ 6, -2, 1 ]
*/
function loopOrder( shape, strides ) {
	var idx;
	var tmp;
	var max;
	var len;
	var out;
	var st;
	var N;
	var M;
	var i;
	var j;

	N = strides.length;

	// Initialize an array for grouping stride arrays according to memory layout:
	tmp = [];
	for ( i = 0; i < 4; i++ ) { // note: `4` corresponds to the number of possible return values from `strides2order`
		tmp.push( [] );
	}
	M = tmp.length;

	// Group stride arrays according to memory layout:
	for ( i = 0; i < N; i++ ) {
		tmp[ strides2order( strides[ i ] ) ].push( strides[ i ] );
	}
	// Determine which array should be used to generate the loop order:
	max = tmp[ 0 ].length;
	if ( max === N ) {
		// If all arrays are "disorganized", then just use the first array, as, generally, each array is likely to be as un-ideal as every other:
		st = strides[ 0 ];
	} else if ( max === N-1 ) {
		// If all but one array is "disorganized", find the "organized" array...
		for ( i = 1; i < M; i++ ) {
			if ( tmp[ i ].length ) {
				st = tmp[ i ][ 0 ];
				break;
			}
		}
	} else {
		// Find the layout which is most common...
		j = 0;
		for ( i = 1; i < M; i++ ) {
			len = tmp[ i ].length;
			if ( len >= max ) {
				max = len;
				j = i;
			}
		}
		// Use the strides of the first array having the most common layout:
		st = tmp[ j ][ 0 ];
	}
	// Initialize a loop interchange index array for generating a loop order permutation:
	idx = zeroTo( shape.length );

	// Sort strides in increasing order of magnitude:
	sort2ins( copy( st ), idx );

	// Permute the shape based on the sorted strides:
	out = [ take( shape, idx ) ];

	// Permute each stride array based on the sorted strides:
	for ( i = 0; i < N; i++ ) {
		out.push( take( strides[ i ], idx ) );
	}
	return out;
}


// EXPORTS //

module.exports = loopOrder;
