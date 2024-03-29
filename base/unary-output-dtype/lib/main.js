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

var isFloatingPointDataType = require( './../../../base/assert/is-floating-point-data-type' );
var isRealFloatingPointDataType = require( './../../../base/assert/is-real-floating-point-data-type' ); // eslint-disable-line id-length
var isComplexFloatingPointDataType = require( './../../../base/assert/is-complex-floating-point-data-type' ); // eslint-disable-line id-length
var isIntegerDataType = require( './../../../base/assert/is-integer-data-type' );
var isSignedIntegerDataType = require( './../../../base/assert/is-signed-integer-data-type' );
var isUnsignedIntegerDataType = require( './../../../base/assert/is-unsigned-integer-data-type' );
var isRealDataType = require( './../../../base/assert/is-real-data-type' );
var isNumericDataType = require( './../../../base/assert/is-numeric-data-type' );
var isDataType = require( './../../../base/assert/is-data-type' );
var defaults = require( './../../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var POLICY_TABLE = {
	'floating_point': [
		isFloatingPointDataType,
		defaults.get( 'dtypes.floating_point' )
	],
	'real_floating_point': [
		isRealFloatingPointDataType,
		defaults.get( 'dtypes.real_floating_point' )
	],
	'complex_floating_point': [
		isComplexFloatingPointDataType,
		defaults.get( 'dtypes.complex_floating_point' )
	],

	'integer': [
		isIntegerDataType,
		defaults.get( 'dtypes.integer' )
	],
	'signed_integer': [
		isSignedIntegerDataType,
		defaults.get( 'dtypes.signed_integer' )
	],
	'unsigned_integer': [
		isUnsignedIntegerDataType,
		defaults.get( 'dtypes.unsigned_integer' )
	],

	'real': [
		isRealDataType,
		defaults.get( 'dtypes.real' )
	],

	'numeric': [
		isNumericDataType,
		defaults.get( 'dtypes.numeric' )
	]
};
var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// MAIN //

/**
* Resolves the output ndarray data type for a unary function.
*
* @param {string} dtype - input ndarray data type
* @param {string} policy - output ndarray data type policy
* @throws {TypeError} second argument must be a recognized data type policy
* @throws {Error} unexpected error
* @returns {string} output ndarray data type
*
* @example
* var dt = resolve( 'float64', 'complex_floating_point' );
* // returns <string>
*/
function resolve( dtype, policy ) {
	var p;
	if ( policy === 'default' ) {
		// When the policy is "default", the output data type should always be the default data type without consideration for the input data type:
		return DEFAULT_DTYPE;
	}
	if ( policy === 'same' || policy === 'promoted' ) { // note: for unary APIs, the "promoted" data type is the same as the input data type
		return dtype;
	}
	if ( policy === 'bool' ) {
		throw new Error( 'not implemented' ); // TODO: update once the `bool` dtype is supported
	}
	p = POLICY_TABLE[ policy ];
	if ( p === void 0 ) {
		// Check for an explicit data type...
		if ( isDataType( policy ) ) {
			return policy;
		}
		throw new TypeError( format( 'invalid argument. Second argument must be a supported data type policy. Value: `%s`.', policy ) );
	}
	if ( p[ 0 ]( dtype ) ) {
		return dtype;
	}
	return p[ 1 ];
}


// EXPORTS //

module.exports = resolve;
