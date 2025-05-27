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
* Returns a list of unique indices after normalizing to the interval `[0,max]`.
*
* @param {IntegerArray} indices - indices
* @param {NonNegativeInteger} max - maximum index
* @returns {(IntegerArray|null)} normalized indices
*
* @example
* var idx = toUniqueNormalizedIndices( [ -2, 5 ], 10 );
* // returns [ 9, 5 ]
*
* idx = toUniqueNormalizedIndices( [ 15 ], 10 );
* // returns null
*/
function toUniqueNormalizedIndices( indices, max ) {
	var hash;
	var out;
	var idx;
	var i;

	hash = {};
	out = [];
	for ( i = 0; i < indices.length; i++ ) {
		idx = normalizeIndex( indices[ i ], max );
		if ( idx < 0 ) {
			return null;
		}
		if ( hash[ idx ] === void 0 ) {
			hash[ idx ] = true;
			out.push( idx );
		}
	}
	return out;
}


// EXPORTS //

module.exports = toUniqueNormalizedIndices;
