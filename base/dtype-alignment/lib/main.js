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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var resolve = require( './../../../base/dtype-resolve-str' );
var table = require( './table.js' );


// VARIABLES //

var TABLE;


// MAIN //

/**
* Returns the alignment (in bytes) for an underlying array data type.
*
* ## Notes
*
* -   If provided an unrecognized/unsupported data type, the function returns `null`.
*
* @param {*} [dtype] - data type value
* @returns {(Object|number|null)} alignment (in bytes)
*
* @example
* var obj = dtypeAlignment();
* // returns {...}
*
* @example
* var out = dtypeAlignment( 'float64' );
* // returns 8
*
* out = dtypeAlignment( 'generic' );
* // returns null
*/
function dtypeAlignment( dtype ) {
	var v;
	if ( arguments.length === 0 ) {
		return table();
	}
	if ( TABLE === void 0 ) {
		TABLE = table();
	}
	if ( dtype ) {
		v = dtype.alignment;
		if ( isPositiveInteger( v ) ) {
			return v;
		}
		return TABLE[ resolve( dtype ) ] || null;
	}
	return null;
}


// EXPORTS //

module.exports = dtypeAlignment;
