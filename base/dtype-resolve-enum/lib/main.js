/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var enum2str = require( './../../../base/dtype-enum2str' );
var str2enum = require( './../../../base/dtype-str2enum' );


// MAIN //

/**
* Returns the enumeration constant associated with a supported ndarray data type value.
*
* ## Notes
*
* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
*
* @param {*} dtype - data type value
* @returns {(integer|null)} enumeration constant or null
*
* @example
* var v = resolve( 'int8' );
* // returns <number>
*/
function resolve( dtype ) {
	var t = ( typeof dtype );
	if ( t === 'number' ) {
		return ( enum2str( dtype ) ) ? dtype : null;
	}
	if ( t === 'string' ) {
		return str2enum( dtype );
	}
	return null;
}


// EXPORTS //

module.exports = resolve;
