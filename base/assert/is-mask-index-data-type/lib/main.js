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
* Tests whether an input value is a supported ndarray mask index data type.
*
* @name isMaskIndexDataType
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported ndarray mask index data type
*
* @example
* var bool = isMaskIndexDataType( 'binary' );
* // returns false
*
* bool = isMaskIndexDataType( 'float32' );
* // returns false
*
* bool = isMaskIndexDataType( 'float64' );
* // returns false
*
* bool = isMaskIndexDataType( 'generic' );
* // returns false
*
* bool = isMaskIndexDataType( 'int16' );
* // returns false
*
* bool = isMaskIndexDataType( 'int32' );
* // returns false
*
* bool = isMaskIndexDataType( 'int8' );
* // returns false
*
* bool = isMaskIndexDataType( 'uint16' );
* // returns false
*
* bool = isMaskIndexDataType( 'uint32' );
* // returns false
*
* bool = isMaskIndexDataType( 'uint8' );
* // returns true
*
* bool = isMaskIndexDataType( 'uint8c' );
* // returns false
*
* bool = isMaskIndexDataType( 'foo' );
* // returns false
*/
var isMaskIndexDataType = contains( dtypes( 'mask_index' ) );


// EXPORTS //

module.exports = isMaskIndexDataType;
