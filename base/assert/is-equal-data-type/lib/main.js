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

var isDataTypeString = require( './../../../../base/assert/is-data-type-string' );
var isDataTypeObject = require( './../../../../base/assert/is-data-type-object' );
var isStructDataType = require( './../../../../base/assert/is-struct-data-type' );


// MAIN //

/**
* Tests whether two values are equal ndarray data types.
*
* @param {*} v1 - first input value
* @param {*} v2 - second input value
* @returns {boolean} boolean indicating whether two input values are equal ndarray data types
*
* @example
* var DataType = require( '@stdlib/ndarray/dtype-ctor' );
*
* var bool = isEqualDataType( 'binary', 'binary' );
* // returns true
*
* bool = isEqualDataType( 'float32', 'float32' );
* // returns true
*
* bool = isEqualDataType( 'float64', new DataType( 'float64' ) );
* // returns true
*
* bool = isEqualDataType( 'generic', new DataType( 'generic' ) );
* // returns true
*
* bool = isEqualDataType( 'int16', 'int32' );
* // returns false
*
* bool = isEqualDataType( 'int32', new DataType( 'int16' ) );
* // returns false
*/
function isEqualDataType( v1, v2 ) {
	if ( isDataTypeString( v1 ) ) {
		// Nothing to do here. Branch is kept to avoid additional assertion logic for what is expected to be a common use case; namely, comparing data type strings...
	} else if ( isDataTypeObject( v1 ) ) {
		v1 = String( v1 );
	} else if ( isStructDataType( v1 ) ) {
		v1 = v1.layout;
	} else {
		return false;
	}
	if ( isDataTypeString( v2 ) ) {
		// Nothing to do here. Branch is kept to avoid additional assertion logic for what is expected to be a common use case; namely, comparing data type strings...
	} else if ( isDataTypeObject( v2 ) ) {
		v2 = String( v2 );
	} else if ( isStructDataType( v2 ) ) {
		v2 = v2.layout;
	} else {
		return false;
	}
	return ( v1 === v2 );
}


// EXPORTS //

module.exports = isEqualDataType;
