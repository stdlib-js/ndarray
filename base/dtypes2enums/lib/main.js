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

var resolveEnum = require( './../../../base/dtype-resolve-enum' );


// MAIN //

/**
* Resolves a list of data type enumeration constants.
*
* ## Notes
*
* -   If the function is unable to resolve an enumeration constant for a provided data type, the corresponding element in the returned array will be `null`.
*
* @param {StringArray} dtypes - list of data types
* @returns {Array} results
*
* @example
* var out = dtypes2enums( [ 'float32', 'float64' ] );
* // returns [...]
*
* @example
* var out = dtypes2enums( [ 'foo', 'bar' ] );
* // returns [ null, null ]
*/
function dtypes2enums( dtypes ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i++ ) {
		out.push( resolveEnum( dtypes[ i ] ) );
	}
	return out;
}


// EXPORTS //

module.exports = dtypes2enums;
