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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isComplexDataType = require( './../../../../base/assert/is-complex-floating-point-data-type' );
var isBooleanDataType = require( './../../../../base/assert/is-boolean-data-type' );
var isRealFloatingDataType = require( './../../../../base/assert/is-real-floating-point-data-type' );
var isUnsignedIntegerDataType = require( './../../../../base/assert/is-unsigned-integer-data-type' );
var isSignedIntegerDataType = require( './../../../../base/assert/is-signed-integer-data-type' );
var isSafeCast = require( './../../../../base/assert/is-safe-data-type-cast' );
var minDataType = require( './../../../../min-dtype' );
var minSignedIntegerDataType = require( './../../../../base/min-signed-integer-dtype' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Verifies whether a provided value can be safely cast to a "generic" or unknown data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - data type
* @returns {boolean} boolean result
*
* @example
* var out = validateGeneric( 3, 'generic' );
* // returns true
*/
function validateGeneric() {
	return true;
}

/**
* Verifies whether a provided value can be safely cast to a boolean data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - data type
* @returns {boolean} boolean result
*
* @example
* var out = validateBoolean( true, 'bool' );
* // returns true
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var out = validateBoolean( new Complex128( 5.0, 6.0 ), 'bool' );
* // returns false
*/
function validateBoolean( value ) {
	return isBoolean( value );
}

/**
* Verifies whether a provided value can be safely cast to a real-valued floating-point data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - data type
* @returns {boolean} boolean result
*
* @example
* var out = validateRealFloating( 3.14, 'float64' );
* // returns true
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var out = validateRealFloating( new Complex128( 5.0, 6.0 ), 'float64' );
* // returns false
*/
function validateRealFloating( value ) {
	return isNumber( value );
}

/**
* Verifies whether a provided value can be safely cast to a complex-valued floating-point data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - data type
* @returns {boolean} boolean result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var out = validateComplexFloating( new Complex128( 5.0, 6.0 ), 'complex128' );
* // returns true
*
* @example
* var out = validateComplexFloating( {}, 'complex128' );
* // returns false
*/
function validateComplexFloating( value ) {
	return ( isNumber( value ) || isComplexLike( value ) );
}

/**
* Verifies whether a provided value can be safely cast to a signed integer data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - data type
* @returns {boolean} boolean result
*
* @example
* var out = validateSignedInteger( 3, 'int32' );
* // returns true
*
* @example
* var out = validateSignedInteger( 3.14, 'int32' );
* // returns false
*/
function validateSignedInteger( value, dtype ) {
	return ( isInteger( value ) && isSafeCast( minSignedIntegerDataType( value ), dtype ) ); // eslint-disable-line max-len
}

/**
* Verifies whether a provided value can be safely cast to an unsigned integer data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {boolean} boolean result
*
* @example
* var out = validateUnsignedInteger( 3, 'uint32' );
* // returns true
*
* @example
* var out = validateUnsignedInteger( -3, 'uint32' );
* // returns false
*/
function validateUnsignedInteger( value, dtype ) {
	return ( isInteger( value ) && isSafeCast( minDataType( value ), dtype ) );
}

/**
* Verifies whether a provided value can be safely cast to a binary data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {boolean} boolean result
*
* @example
* var out = validateBinary( 3, 'binary' );
* // returns true
*
* @example
* var out = validateBinary( -3, 'binary' );
* // returns false
*/
function validateBinary( value ) {
	return ( isInteger( value ) && minDataType( value ) === 'uint8' );
}


// MAIN //

/**
* Returns a boolean indicating whether a scalar value can be safely cast or, for floating-point data types, downcast to specified ndarray data type.
*
* @param {*} value - scalar value
* @param {string} dtype - ndarray data type
* @throws {TypeError} second argument must be a supported data type
* @returns {boolean} boolean indicating whether a scalar value can be safely cast
*
* @example
* var bool = isScalarMostlySafeCompatible( 3.0, 'float64' );
* // returns true
*
* @example
* var bool = isScalarMostlySafeCompatible( 3.14, 'int32' );
* // returns false
*
* @example
* var bool = isScalarMostlySafeCompatible( -1, 'uint32' );
* // returns false
*/
function isScalarMostlySafeCompatible( value, dtype ) { // eslint-disable-line id-length
	if ( dtype === 'generic' ) {
		return validateGeneric( value, dtype );
	}
	if ( dtype === 'binary' ) {
		return validateBinary( value, dtype );
	}
	if ( isRealFloatingDataType( dtype ) ) {
		return validateRealFloating( value, dtype );
	}
	if ( isUnsignedIntegerDataType( dtype ) ) {
		return validateUnsignedInteger( value, dtype );
	}
	if ( isSignedIntegerDataType( dtype ) ) {
		return validateSignedInteger( value, dtype );
	}
	if ( isBooleanDataType( dtype ) ) {
		return validateBoolean( value, dtype );
	}
	if ( isComplexDataType( dtype ) ) {
		return validateComplexFloating( value, dtype );
	}
	throw new TypeError( format( 'invalid argument. Second argument must be a supported data type. Value: `%s`.', dtype ) );
}


// EXPORTS //

module.exports = isScalarMostlySafeCompatible;
