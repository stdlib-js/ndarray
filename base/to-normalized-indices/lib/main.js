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

var emptyLike = require( '@stdlib/array/empty-like' );
var normalizeIndex = require( './../../../base/normalize-index' );


// MAIN //

/**
* Normalizes a list of indices to the interval `[0,max]`.
*
* @param {IntegerArray} indices - indices
* @param {NonNegativeInteger} max - maximum index
* @returns {IntegerArray} normalized indices
*
* @example
* var idx = toNormalizedIndices( [ -2, 5 ], 10 );
* // returns [ 9, 5 ]
*
* idx = toNormalizedIndices( [ 15 ], 10 );
* // returns [ -1 ]
*/
function toNormalizedIndices( indices, max ) {
	var out;
	var i;

	out = emptyLike( indices );
	for ( i = 0; i < indices.length; i++ ) {
		out[ i ] = normalizeIndex( indices[ i ], max );
	}
	return out;
}


// EXPORTS //

module.exports = toNormalizedIndices;
