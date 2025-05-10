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

var outputDataType = require( './../../../base/output-dtype' );


// MAIN //

/**
* Resolves the output ndarray data type for a binary function.
*
* @param {string} xdtype - first input ndarray data type
* @param {string} ydtype - second input ndarray data type
* @param {string} policy - output ndarray data type policy
* @throws {TypeError} third argument must be a recognized data type policy
* @throws {Error} must provide data types amenable to type promotion
* @returns {string} output ndarray data type
*
* @example
* var dt = resolve( 'float64', 'float32', 'complex_floating_point' );
* // returns <string>
*/
function resolve( xdtype, ydtype, policy ) {
	return outputDataType( [ xdtype, ydtype ], policy );
}


// EXPORTS //

module.exports = resolve;
