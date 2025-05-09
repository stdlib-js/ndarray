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
var isRealFloatingPointDataType = require( './../../../base/assert/is-real-floating-point-data-type' );
var isComplexFloatingPointDataType = require( './../../../base/assert/is-complex-floating-point-data-type' );
var isIntegerDataType = require( './../../../base/assert/is-integer-data-type' );
var isSignedIntegerDataType = require( './../../../base/assert/is-signed-integer-data-type' );
var isUnsignedIntegerDataType = require( './../../../base/assert/is-unsigned-integer-data-type' );
var isRealDataType = require( './../../../base/assert/is-real-data-type' );
var isNumericDataType = require( './../../../base/assert/is-numeric-data-type' );
var isBooleanDataType = require( './../../../base/assert/is-boolean-data-type' );
var isIntegerIndexDataType = require( './../../../base/assert/is-integer-index-data-type' );
var isBooleanIndexDataType = require( './../../../base/assert/is-boolean-index-data-type' );
var isMaskIndexDataType = require( './../../../base/assert/is-mask-index-data-type' );
var isDataType = require( './../../../base/assert/is-data-type' );
var promotionRules = require( './../../../promotion-rules' );
var defaults = require( './../../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );
var DEFAULT_INDEX_DTYPE = defaults.get( 'dtypes.default_index' );
var DEFAULT_SIGNED_INTEGER_DTYPE = defaults.get( 'dtypes.signed_integer' );
var DEFAULT_UNSIGNED_INTEGER_DTYPE = defaults.get( 'dtypes.unsigned_integer' );
var DEFAULT_REAL_FLOATING_POINT_DTYPE = defaults.get( 'dtypes.real_floating_point' );

var POLICY_TABLE = {
	'floating_point': [
		isFloatingPointDataType,
		defaults.get( 'dtypes.floating_point' )
	],
	'floating_point_and_generic': [
		wrap( isFloatingPointDataType ),
		defaults.get( 'dtypes.floating_point' )
	],
	'real_floating_point': [
		isRealFloatingPointDataType,
		DEFAULT_REAL_FLOATING_POINT_DTYPE
	],
	'real_floating_point_and_generic': [
		wrap( isRealFloatingPointDataType ),
		DEFAULT_REAL_FLOATING_POINT_DTYPE
	],
	'complex_floating_point': [
		isComplexFloatingPointDataType,
		defaults.get( 'dtypes.complex_floating_point' )
	],
	'complex_floating_point_and_generic': [
		wrap( isComplexFloatingPointDataType ),
		defaults.get( 'dtypes.complex_floating_point' )
	],

	'integer': [
		isIntegerDataType,
		defaults.get( 'dtypes.integer' )
	],
	'integer_and_generic': [
		wrap( isIntegerDataType ),
		defaults.get( 'dtypes.integer' )
	],
	'signed_integer': [
		isSignedIntegerDataType,
		DEFAULT_SIGNED_INTEGER_DTYPE
	],
	'signed_integer_and_generic': [
		wrap( isSignedIntegerDataType ),
		DEFAULT_SIGNED_INTEGER_DTYPE
	],
	'unsigned_integer': [
		isUnsignedIntegerDataType,
		DEFAULT_UNSIGNED_INTEGER_DTYPE
	],
	'unsigned_integer_and_generic': [
		wrap( isUnsignedIntegerDataType ),
		DEFAULT_UNSIGNED_INTEGER_DTYPE
	],

	'real': [
		isRealDataType,
		defaults.get( 'dtypes.real' )
	],
	'real_and_generic': [
		wrap( isRealDataType ),
		defaults.get( 'dtypes.real' )
	],

	'numeric': [
		isNumericDataType,
		defaults.get( 'dtypes.numeric' )
	],
	'numeric_and_generic': [
		wrap( isNumericDataType ),
		defaults.get( 'dtypes.numeric' )
	],

	'boolean': [
		isBooleanDataType,
		defaults.get( 'dtypes.boolean' )
	],
	'boolean_and_generic': [
		wrap( isBooleanDataType ),
		defaults.get( 'dtypes.boolean' )
	],

	'integer_index': [
		isIntegerIndexDataType,
		defaults.get( 'dtypes.integer_index' )
	],
	'integer_index_and_generic': [
		wrap( isIntegerIndexDataType ),
		defaults.get( 'dtypes.integer_index' )
	],
	'boolean_index': [
		isBooleanIndexDataType,
		defaults.get( 'dtypes.boolean_index' )
	],
	'boolean_index_and_generic': [
		wrap( isBooleanIndexDataType ),
		defaults.get( 'dtypes.boolean_index' )
	],
	'mask_index': [
		isMaskIndexDataType,
		defaults.get( 'dtypes.mask_index' )
	],
	'mask_index_and_generic': [
		wrap( isMaskIndexDataType ),
		defaults.get( 'dtypes.mask_index' )
	]
};


// FUNCTIONS //

/**
* Wraps a data type validation function to also check for a "generic" data type.
*
* @private
* @param {Function} fcn - validation function
* @returns {Function} wrapped validation function
*/
function wrap( fcn ) {
	return wrapper;

	/**
	* Tests whether a provided data type is either "generic" or satisfies a data type validation function.
	*
	* @private
	* @param {*} value - input value
	* @returns {boolean} boolean indicating whether a provided value passes a test
	*/
	function wrapper( value ) {
		return ( value === 'generic' ) || fcn( value );
	}
}


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
	var p;
	if ( policy === 'default' ) {
		// When the policy is "default", the output data type should always be the default data type without consideration for the input data types:
		return DEFAULT_DTYPE;
	}
	if ( policy === 'default_index' ) {
		// When the policy is "default_index", the output data type should always be the default index data type without consideration for the input data types:
		return DEFAULT_INDEX_DTYPE;
	}
	if ( policy === 'same' ) {
		// When the policy is "same", we require that all data types (both input and output) be the same...
		if ( xdtype !== ydtype ) {
			throw new Error( format( 'invalid arguments. Unable to resolve an output data type. The output data type policy is "same" and yet the input data types are not equal. Data types: [%s, %s].', xdtype, ydtype ) );
		}
		return xdtype;
	}
	// Check for an explicit data type...
	if ( isDataType( policy ) ) {
		// When the policy is a specific data type, the output data type should always be the specified data type without consideration for the input data types:
		return policy;
	}
	// From this point forward, we always apply type promotion rules...
	dt = promotionRules( xdtype, ydtype );
	if ( dt === null || dt === -1 ) {
		throw new Error( format( 'invalid arguments. Unable to apply type promotion rules when resolving a data type to which the input data types can be safely cast. Data types: [%s, %s].', xdtype, ydtype ) );
	}
	if ( policy === 'promoted' ) {
		// If the policy is "promoted", we're done...
		return dt;
	}
	if ( policy === 'accumulation' ) {
		// If the promoted data type is floating-point, allow accumulation in that data type as overflow/underflow is handled naturally as a built-in feature of that data type...
		if ( isFloatingPointDataType( dt ) || dt === 'generic' ) { // NOTE: we may want to revisit this in the future for float16/complex32, where the value range is much more limited
			return dt;
		}
		// Unless the promoted data type value range is larger than the default un/signed integer data type, accumulate in the default un/signed integer data type, as accumulating in small range integer data types (e.g., `int8`) are at high risk for overflow, especially for ndarrays containing many elements...
		if ( isUnsignedIntegerDataType( dt ) ) {
			return promotionRules( dt, DEFAULT_UNSIGNED_INTEGER_DTYPE );
		}
		if ( isSignedIntegerDataType( dt ) ) {
			return promotionRules( dt, DEFAULT_SIGNED_INTEGER_DTYPE );
		}
		// For all other promoted data types, accumulate in the default real-valued floating-point data type...
		return DEFAULT_REAL_FLOATING_POINT_DTYPE;
	}
	p = POLICY_TABLE[ policy ];
	if ( p === void 0 ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a supported data type policy. Value: `%s`.', policy ) );
	}
	if ( p[ 0 ]( dt ) ) {
		return dt;
	}
	return p[ 1 ];
}


// EXPORTS //

module.exports = resolve;
