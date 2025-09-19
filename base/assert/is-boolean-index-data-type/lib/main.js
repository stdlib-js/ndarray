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

var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var dtypes = require( './../../../../dtypes' );


// VARIABLES //

var isDataType = contains( dtypes( 'boolean_index' ) );


// MAIN //

/**
* Tests whether an input value is a supported ndarray boolean index data type.
*
* @name isBooleanIndexDataType
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported ndarray boolean index data type
*
* @example
* var bool = isBooleanIndexDataType( 'bool' );
* // returns true
*
* bool = isBooleanIndexDataType( 'float32' );
* // returns false
*
* bool = isBooleanIndexDataType( 'float64' );
* // returns false
*
* bool = isBooleanIndexDataType( 'generic' );
* // returns false
*
* bool = isBooleanIndexDataType( 'int16' );
* // returns false
*
* bool = isBooleanIndexDataType( 'int32' );
* // returns false
*
* bool = isBooleanIndexDataType( 'int8' );
* // returns false
*
* bool = isBooleanIndexDataType( 'uint16' );
* // returns false
*
* bool = isBooleanIndexDataType( 'uint32' );
* // returns false
*
* bool = isBooleanIndexDataType( 'uint8' );
* // returns false
*
* bool = isBooleanIndexDataType( 'uint8c' );
* // returns false
*
* bool = isBooleanIndexDataType( 'foo' );
* // returns false
*/
function isBooleanIndexDataType( v ) {
	return isDataType( String( v ) );
}


// EXPORTS //

module.exports = isBooleanIndexDataType;
