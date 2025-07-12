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
var promoteDataTypes = require( './../../../base/promote-dtypes' );
var defaults = require( './../../../defaults' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );
var DEFAULT_INDEX_DTYPE = defaults.get( 'dtypes.default_index' );
var DEFAULT_SIGNED_INTEGER_DTYPE = defaults.get( 'dtypes.signed_integer' );
var DEFAULT_UNSIGNED_INTEGER_DTYPE = defaults.get( 'dtypes.unsigned_integer' );
var DEFAULT_REAL_FLOATING_POINT_DTYPE = defaults.get( 'dtypes.real_floating_point' );

// Table where, for each respective policy, the value is a function which applies the policy to an input data type...
var POLICY_TABLE1 = {
	'default': defaultPolicy,
	'default_index': defaultIndexPolicy,
	'same': samePolicy,
	'promoted': promotedPolicy,
	'accumulation': accumulationPolicy
};

// Table where, for each respective policy, the value is an array whose first element is an assertion and whose second element is a fallback data type...
var POLICY_TABLE2 = {
	// Floating-point policies...
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

	// Integer policies...
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

	// Real-valued number policies...
	'real': [
		isRealDataType,
		defaults.get( 'dtypes.real' )
	],
	'real_and_generic': [
		wrap( isRealDataType ),
		defaults.get( 'dtypes.real' )
	],

	// Real- and complex-valued number policies...
	'numeric': [
		isNumericDataType,
		defaults.get( 'dtypes.numeric' )
	],
	'numeric_and_generic': [
		wrap( isNumericDataType ),
		defaults.get( 'dtypes.numeric' )
	],

	// Boolean policies...
	'boolean': [
		isBooleanDataType,
		defaults.get( 'dtypes.boolean' )
	],
	'boolean_and_generic': [
		wrap( isBooleanDataType ),
		defaults.get( 'dtypes.boolean' )
	],

	// Index policies...
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

/**
* Returns the default data type.
*
* @private
* @returns {string} output ndarray data type
*/
function defaultPolicy() {
	// When the policy is "default", the output data type should always be the default data type without consideration for the input data types:
	return DEFAULT_DTYPE;
}

/**
* Returns the default index data type.
*
* @private
* @returns {string} output ndarray data type
*/
function defaultIndexPolicy() {
	// When the policy is "default_index", the output data type should always be the default index data type without consideration for the input data types:
	return DEFAULT_INDEX_DTYPE;
}

/**
* Applies the "same" policy by returning the common input data type.
*
* @private
* @param {StringArray} dtypes - input ndarray data types
* @throws {Error} invalid data types
* @returns {string} output ndarray data type
*/
function samePolicy( dtypes ) {
	var dt;
	var i;

	dt = dtypes[ 0 ];
	for ( i = 1; i < dtypes.length; i++ ) {
		// When the policy is "same", we require that all data types (both input and output) be the same...
		if ( dtypes[ i ] !== dt ) {
			throw new Error( format( 'invalid argument. Unable to resolve an output data type. The output data type policy is "same" and yet the input data types are not equal. Data types: [%s].', join( dtypes, ', ' ) ) );
		}
	}
	return dt;
}

/**
* Applies the "promoted" policy by applying type promotion to the list of provided data types.
*
* @private
* @param {StringArray} dtypes - input ndarray data types
* @throws {Error} must provide data types which can be safely cast to a common data type
* @returns {string} output ndarray data type
*/
function promotedPolicy( dtypes ) {
	var dt = promoteDataTypes( dtypes );
	if ( dt === null ) {
		throw new Error( format( 'invalid argument. Unable to apply type promotion rules when resolving a data type to which the input data types can be safely cast. Data types: [%s].', join( dtypes, ', ' ) ) );
	}
	return dt;
}

/**
* Applies the "accumulation" policy to the list of input data types.
*
* @private
* @param {StringArray} dtypes - input ndarray data types
* @throws {Error} must provide data types which can be safely cast to a common data type
* @returns {string} output ndarray data type
*/
function accumulationPolicy( dtypes ) {
	var dt = promotedPolicy( dtypes );

	// If the promoted data type is floating-point, allow accumulation in that data type as overflow/underflow is handled naturally as a built-in feature of that data type...
	if ( isFloatingPointDataType( dt ) || dt === 'generic' ) { // NOTE: we may want to revisit this in the future for float16/complex32, where the value range is much more limited
		return dt;
	}
	// Unless the promoted data type value range is larger than the default un/signed integer data type, accumulate in the default un/signed integer data type, as accumulating in small range integer data types (e.g., `int8`) is at high risk for overflow, especially for ndarrays containing many elements...
	if ( isUnsignedIntegerDataType( dt ) ) {
		return promoteDataTypes( [ dt, DEFAULT_UNSIGNED_INTEGER_DTYPE ] );
	}
	if ( isSignedIntegerDataType( dt ) ) {
		return promoteDataTypes( [ dt, DEFAULT_SIGNED_INTEGER_DTYPE ] );
	}
	// For all other data types, accumulate in the default real-valued floating-point data type...
	return DEFAULT_REAL_FLOATING_POINT_DTYPE;
}


// MAIN //

/**
* Resolves the output data type from a list of input ndarray data types.
*
* @param {StringArray} dtypes - list of input ndarray data types
* @param {string} policy - output ndarray data type policy
* @throws {TypeError} second argument must be a recognized data type policy
* @throws {Error} unexpected error
* @returns {string} output ndarray data type
*
* @example
* var dt = resolve( [ 'float64' ], 'complex_floating_point' );
* // returns <string>
*/
function resolve( dtypes, policy ) {
	var dt;
	var p;

	// First, check whether the policy mandates that the output data type always be a specific data type...
	if ( isDataType( policy ) ) {
		return policy;
	}
	// Next, check whether the policy is one in which we may be able to avoid type promotion...
	p = POLICY_TABLE1[ policy ];
	if ( p !== void 0 ) {
		return p( dtypes );
	}
	// For all other policies, we always apply type promotion rules...
	dt = promotedPolicy( dtypes );

	// Check whether the policy requires determining the data type "kind"...
	p = POLICY_TABLE2[ policy ];
	if ( p !== void 0 ) {
		// Check whether the promoted data type belongs to the data type "kind"...
		if ( p[ 0 ]( dt ) ) {
			// If so, we can just return the promoted data type:
			return dt;
		}
		// Otherwise, we need to fallback to a default data type belonging to that "kind":
		return p[ 1 ];
	}
	throw new TypeError( format( 'invalid argument. Second argument must be a supported data type policy. Value: `%s`.', policy ) );
}


// EXPORTS //

module.exports = resolve;
