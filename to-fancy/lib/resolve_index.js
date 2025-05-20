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

var normalizeIndex = require( './../../base/normalize-index' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Resolves an integer index from an integer string.
*
* ## Notes
*
* -   In non-strict mode, if provided an out-of-bounds index, the function returns `-1`.
*
* @private
* @param {string} str - integer string
* @param {NonNegativeInteger} max - index upper bound (exclusive)
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {RangeError} index exceeds ndarray bounds
* @returns {integer} integer index
*
* @example
* var idx = resolveIndex( '-1', 10, false );
* // returns 9
*
* @example
* var idx = resolveIndex( '-20', 10, false );
* // returns -1
*/
function resolveIndex( str, max, strict ) {
	var idx;
	var i;

	idx = parseInt( str, 10 );
	i = normalizeIndex( idx, max-1 );
	if ( i === -1 && strict ) {
		throw new RangeError( format( 'invalid operation. Index exceeds ndarray bounds.' ) );
	}
	return i;
}


// EXPORTS //

module.exports = resolveIndex;
