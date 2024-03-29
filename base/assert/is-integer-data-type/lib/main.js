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

var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var dtypes = require( './../../../../dtypes' );


// MAIN //

/**
* Tests whether an input value is a supported ndarray integer data type.
*
* @name isIntegerDataType
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported ndarray integer data type
*
* @example
* var bool = isIntegerDataType( 'binary' );
* // returns false
*
* bool = isIntegerDataType( 'float32' );
* // returns false
*
* bool = isIntegerDataType( 'float64' );
* // returns false
*
* bool = isIntegerDataType( 'generic' );
* // returns false
*
* bool = isIntegerDataType( 'int16' );
* // returns true
*
* bool = isIntegerDataType( 'int32' );
* // returns true
*
* bool = isIntegerDataType( 'int8' );
* // returns true
*
* bool = isIntegerDataType( 'uint16' );
* // returns true
*
* bool = isIntegerDataType( 'uint32' );
* // returns true
*
* bool = isIntegerDataType( 'uint8' );
* // returns true
*
* bool = isIntegerDataType( 'uint8c' );
* // returns true
*
* bool = isIntegerDataType( 'foo' );
* // returns false
*/
var isIntegerDataType = contains( dtypes( 'integer' ) );


// EXPORTS //

module.exports = isIntegerDataType;
