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

var enumeration = require( './../../../output-dtype-policies' ).enum;


// VARIABLES //

var ENUM = enumeration();


// MAIN //

/**
* Returns the enumeration constant associated with an output ndarray data type policy string.
*
* ## Notes
*
* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `SAME == 0`). Instead, the function should be used in an opaque manner.
*
* @param {string} policy - policy string
* @returns {(integer|null)} integer value or null
*
* @example
* var v = str2enum( 'same' );
* // returns <number>
*/
function str2enum( policy ) {
	var v = ENUM[ policy ];
	return ( typeof v === 'number' ) ? v : null; // note: we include this guard to prevent walking the prototype chain
}


// EXPORTS //

module.exports = str2enum;
