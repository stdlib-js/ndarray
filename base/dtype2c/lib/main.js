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

var resolve = require( './../../../base/dtype-resolve-str' );
var TABLE = require( './table.json' );


// MAIN //

/**
* Returns the C data type associated with a provided data type string.
*
* @param {*} dtype - data type value
* @returns {(string|null)} C data type
*
* @example
* var out = dtype2c( 'float64' );
* // returns 'double'
*
* out = dtype2c( 'generic' );
* // returns null
*/
function dtype2c( dtype ) {
	return TABLE[ resolve( dtype ) ] || null;
}


// EXPORTS //

module.exports = dtype2c;
