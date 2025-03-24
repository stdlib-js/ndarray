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

var normalizeIndex = require( './../../../base/normalize-index' );


// MAIN //

/**
* Normalizes a list of indices to the interval `[0,max]`.
*
* @param {IntegerArray} indices - indices
* @param {NonNegativeInteger} max - maximum index
* @returns {(IntegerArray|null)} normalized indices or null
*
* @example
* var idx = normalizeIndices( [ -2, 5 ], 10 );
* // returns [ 9, 5 ]
*
* idx = normalizeIndices( [ 15 ], 10 );
* // returns null
*/
function normalizeIndices( indices, max ) {
	var idx;
	var flg;
	var i;

	for ( i = 0; i < indices.length; i++ ) {
		idx = normalizeIndex( indices[ i ], max );
		if ( idx === -1 ) {
			flg = null;
		}
		indices[ i ] = idx;
	}
	return ( flg === null ) ? flg : indices;
}


// EXPORTS //

module.exports = normalizeIndices;
