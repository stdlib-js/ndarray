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


// MAIN //

/**
* Tests whether an input value is a supported built-in ndarray data type string.
*
* @name isDataTypeString
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported built-in ndarray data type string
*
* @example
* var bool = isDataTypeString( 'binary' );
* // returns true
*
* bool = isDataTypeString( 'float32' );
* // returns true
*
* bool = isDataTypeString( 'float64' );
* // returns true
*
* bool = isDataTypeString( 'generic' );
* // returns true
*
* bool = isDataTypeString( 'int16' );
* // returns true
*
* bool = isDataTypeString( 'int32' );
* // returns true
*
* bool = isDataTypeString( 'int8' );
* // returns true
*
* bool = isDataTypeString( 'uint16' );
* // returns true
*
* bool = isDataTypeString( 'uint32' );
* // returns true
*
* bool = isDataTypeString( 'uint8' );
* // returns true
*
* bool = isDataTypeString( 'uint8c' );
* // returns true
*
* bool = isDataTypeString( 'foo' );
* // returns false
*/
var isDataTypeString = contains( dtypes() );


// EXPORTS //

module.exports = isDataTypeString;
