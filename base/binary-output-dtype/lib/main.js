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

var unaryOutputDataType = require( './../../../base/unary-output-dtype' );
var isDataType = require( './../../../base/assert/is-data-type' );
var promotionRules = require( './../../../promotion-rules' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Resolves the output ndarray data type for a binary function.
*
* @param {string} xdtype - first input ndarray data type
* @param {string} ydtype - second input ndarray data type
* @param {string} policy - output ndarray data type policy
* @throws {TypeError} second argument must be a recognized data type policy
* @throws {Error} unexpected error
* @returns {string} output ndarray data type
*
* @example
* var dt = resolve( 'float64', 'float32', 'complex_floating_point' );
* // returns <string>
*/
function resolve( xdtype, ydtype, policy ) {
	var dt;

	// Check for a policy mandating an explicit data type...
	if ( isDataType( policy ) ) {
		// When the policy is a specific data type, the output data type should always be the specified data type without consideration for the input data types:
		return policy;
	}
	if ( policy === 'same' ) {
		// When the policy is "same", we require that all data types (both input and output) be the same...
		if ( xdtype !== ydtype ) {
			throw new Error( format( 'invalid arguments. Unable to resolve an output data type. The output data type policy is "same" and yet the input data types are not equal. Data types: [%s, %s].', xdtype, ydtype ) );
		}
		return xdtype;
	}
	if ( policy === 'default' || policy === 'default_index' ) {
		return unaryOutputDataType( xdtype, policy ); // note: these policies are independent of the input data type, so it doesn't matter what data type we provide as the first argument
	}
	// For all other policies, we always apply type promotion rules...
	dt = promotionRules( xdtype, ydtype );
	if ( dt === null || dt === -1 ) {
		throw new Error( format( 'invalid arguments. Unable to apply type promotion rules when resolving a data type to which the input data types can be safely cast. Data types: [%s, %s].', xdtype, ydtype ) );
	}
	// Resolve the output data type by treating this scenario as equivalent to passing the promoted data type as an input to a unary function...
	try {
		dt = unaryOutputDataType( dt, policy );
	} catch ( err ) { // eslint-disable-line no-unused-vars
		// We should only get here if the policy is invalid...
		throw new TypeError( format( 'invalid argument. Third argument must be a supported data type policy. Value: `%s`.', policy ) );
	}
	return dt;
}


// EXPORTS //

module.exports = resolve;
