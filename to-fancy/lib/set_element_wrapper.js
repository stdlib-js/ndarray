/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isComplexDataType = require( './../../base/assert/is-complex-floating-point-data-type' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;


// FUNCTIONS //

/**
* Normalizes values assigned to complex number ndarrays.
*
* @private
* @param {*} value - input value
* @returns {(ComplexLike|*)} output value
*/
function wrapComplex( value ) {
	// Wrap real-valued scalars as valid input arguments to complex number ndarrays...
	if ( isNumber( value ) ) {
		return [ value, 0.0 ]; // note: we're assuming that a complex number ndarray setter accepts an array of interleaved real and imaginary components
	}
	// For everything other than a real-valued scalar, we delegate validation to the target complex number ndarray:
	return value;
}


// MAIN //

/**
* Returns a wrapper function for processing scalar input values before assignment.
*
* @private
* @param {string} dtype - ndarray data type
* @returns {(Function|null)} wrapper function or null
*/
function wrapper( dtype ) {
	if ( isComplexDataType( dtype ) ) {
		return wrapComplex;
	}
	return null;
}


// EXPORTS //

module.exports = wrapper;
