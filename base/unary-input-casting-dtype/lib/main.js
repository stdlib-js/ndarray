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

/* eslint-disable id-length */

'use strict';

// MODULES //

var isFloatingPointDataType = require( './../../../base/assert/is-floating-point-data-type' );
var isSignedIntegerDataType = require( './../../../base/assert/is-signed-integer-data-type' );
var isUnsignedIntegerDataType = require( './../../../base/assert/is-unsigned-integer-data-type' );
var isDataType = require( './../../../base/assert/is-data-type' );
var promotionRules = require( './../../../promotion-rules' );
var defaults = require( './../../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_SIGNED_INTEGER_DTYPE = defaults.get( 'dtypes.signed_integer' );
var DEFAULT_UNSIGNED_INTEGER_DTYPE = defaults.get( 'dtypes.unsigned_integer' );
var DEFAULT_REAL_FLOATING_POINT_DTYPE = defaults.get( 'dtypes.real_floating_point' );


// MAIN //

/**
* Resolves the input ndarray casting data type for a unary function.
*
* @param {string} idtype - input ndarray data type
* @param {string} odtype - output ndarray data type
* @param {string} policy - input ndarray data type casting policy
* @throws {TypeError} third argument must be a recognized data type policy
* @throws {Error} unexpected error
* @returns {string} data type
*
* @example
* var dt = resolve( 'float32', 'float64', 'none' );
* // returns <string>
*/
function resolve( idtype, odtype, policy ) {
	var dt;
	if ( policy === 'none' ) {
		return idtype;
	}
	if ( policy === 'output' ) {
		return odtype;
	}
	if ( policy === 'promoted' ) {
		dt = promotionRules( idtype, odtype );
		if ( dt === -1 ) {
			throw new Error( format( 'invalid operation. Unable to promote the input and output data types. Input data type: %s. Output data type: %s.', idtype, odtype ) );
		}
		return dt;
	}
	if ( policy === 'accumulation' ) {
		// If the input data type is floating-point, allow accumulation in that data type as overflow/underflow is handled naturally as a built-in feature of that data type...
		if ( isFloatingPointDataType( idtype ) || idtype === 'generic' ) { // NOTE: we may want to revisit this in the future for float16/complex32, where the value range is much more limited
			return idtype;
		}
		// Unless the input data type value range is larger than the default un/signed integer data type, accumulate in the default un/signed integer data type, as accumulating in smaller range integer data types (e.g., `int8`) are at high risk for overflow, especially for ndarrays containing many elements...
		if ( isUnsignedIntegerDataType( idtype ) ) {
			return promotionRules( idtype, DEFAULT_UNSIGNED_INTEGER_DTYPE );
		}
		if ( isSignedIntegerDataType( idtype ) ) {
			return promotionRules( idtype, DEFAULT_SIGNED_INTEGER_DTYPE );
		}
		// For all other input data types, accumulate in the default real-valued floating-point data type...
		return DEFAULT_REAL_FLOATING_POINT_DTYPE;
	}
	// Check for an explicit data type...
	if ( isDataType( policy ) ) {
		return policy;
	}
	throw new TypeError( format( 'invalid argument. Third argument must be a supported casting policy. Value: `%s`.', policy ) );
}


// EXPORTS //

module.exports = resolve;
