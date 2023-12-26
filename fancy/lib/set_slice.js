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

var sliceAssign = require( './../../base/slice-assign' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isComplexDataType = require( './../../base/assert/is-complex-floating-point-data-type' );
var isFloatingDataType = require( './../../base/assert/is-floating-point-data-type' );
var isUnsignedIntegerDataType = require( './../../base/assert/is-unsigned-integer-data-type' );
var isSignedIntegerDataType = require( './../../base/assert/is-signed-integer-data-type' );
var isSafeCast = require( './../../base/assert/is-safe-data-type-cast' );
var INT8_MAX = require( '@stdlib/constants/int8/max' );
var INT16_MAX = require( '@stdlib/constants/int16/max' );
var INT32_MAX = require( '@stdlib/constants/int32/max' );
var minDataType = require( './../../min-dtype' );
var complexDataType = require( '@stdlib/complex/dtype' );
var scalar2ndarray = require( './../../from-scalar' );
var format = require( '@stdlib/string/format' );
var errMessage = require( './error_message.js' );
var errConstructor = require( './error_constructor.js' );


// FUNCTIONS //

/**
* Returns an options object for creating an ndarray from a scalar value.
*
* @private
* @param {string} dtype - output array data type
* @returns {Object} options
*/
function options( dtype ) {
	return {
		'dtype': dtype
	};
}


// MAIN //

/**
* Sets element values belonging to the ndarray view specified by an indexing expression.
*
* @private
* @param {Object} target - target object
* @param {string} property - indexing expression
* @param {*} value - new value
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @param {Function} prop2slice - function for converting an indexing expression to a slice
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @throws {Error} assigned value must be broadcast compatible with target array view
* @throws {TypeError} assigned value cannot be safely cast to the target array data type
* @throws {TypeError} target array must have a supported data type
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setSlice( target, property, value, receiver, prop2slice ) { // eslint-disable-line stdlib/jsdoc-require-throws-tags
	var strict;
	var vdt;
	var dt;
	var E;
	var s;

	if ( !isndarrayLike( value ) ) {
		dt = target.dtype;

		// If the target array data type is "generic", we can just go ahead and "cast" to the target array data type...
		if ( dt === 'generic' ) {
			value = scalar2ndarray( value, options( dt ) );
		}
		// If the input value is real-valued number, we need to inspect the value to determine whether we can safely cast the value to the target array data type...
		else if ( isNumber( value ) ) {
			// If the target array has a floating-point data type, we can just go ahead and cast the input scalar to the target array data type...
			if ( isFloatingDataType( dt ) ) {
				value = scalar2ndarray( value, options( dt ) );
			}
			// If the target array has an unsigned integer data type, then the assigned value must be a compatible nonnegative integer value...
			else if ( isUnsignedIntegerDataType( dt ) ) {
				vdt = minDataType( value );
				if ( isSafeCast( vdt, dt ) ) {
					value = scalar2ndarray( value, options( dt ) );
				} else {
					throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', vdt, dt ) );
				}
			}
			// If the target array has a signed integer data type, then the assigned value must be a compatible integer value...
			else if ( isSignedIntegerDataType( dt ) ) {
				if ( !isInteger( value ) ) {
					throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', minDataType( value ), dt ) );
				}
				// Manually resolve the minimum data type of the closest "kind" necessary for storing a scalar value, as `minDataType()` defaults to unsigned integer data types when a scalar value is greater than or equal to zero...
				if ( value < 0 ) {
					vdt = minDataType( value );
				} else if ( value <= INT8_MAX ) { // TODO: consider moving this logic to `@stdlib/ndarray/base/min-signed-intger-dtype` where the interface can assume that `value` is integer-valued
					vdt = 'int8';
				} else if ( value <= INT16_MAX ) {
					vdt = 'int16';
				} else if ( value <= INT32_MAX ) {
					vdt = 'int32';
				} else {
					vdt = 'float64';
				}
				if ( isSafeCast( vdt, dt ) ) {
					value = scalar2ndarray( value, options( dt ) );
				} else {
					throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', vdt, dt ) );
				}
			}
			// If the target array has "binary" data type, then the assigned value must be a compatible nonnegative integer value...
			else if ( dt === 'binary' ) {
				vdt = minDataType( value );
				if ( vdt === 'uint8' ) {
					value = scalar2ndarray( value, options( dt ) );
				} else {
					throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', vdt, dt ) );
				}
			}
			// If we reach this point, we must be dealing with an unexpected target array data type...
			else {
				// Raise an exception in order to flag that, in order to perform assignment, we need to add explicit support for additional data types:
				throw new TypeError( format( 'invalid operation. Unsupported target array data type. Data type: `%s`.', dt ) );
			}
		}
		// If the target array is not "generic" and the input value is a complex number, then the target array data type must also have a complex number data type...
		else if ( isComplexLike( value ) ) {
			if ( !isComplexDataType( dt ) ) {
				throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', complexDataType( value ), dt ) );
			}
			value = scalar2ndarray( value, options( dt ) );
		}
		// If the target array is not "generic" and the input value is neither a real- or complex-valued number, raise an exception in order to flag that, in order to perform assignment, we need to add explicit support for additional data types...
		else {
			throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', typeof value, dt ) );
		}
	}
	strict = false; // TODO: support strict mode
	s = prop2slice( target, property, strict );
	try {
		sliceAssign( value, receiver, s, strict );
		return true;
	} catch ( err ) {
		E = errConstructor( err );
		throw new E( errMessage( err.message ) );
	}
}


// EXPORTS //

module.exports = setSlice;
