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

var isDataTypeString = require( './../lib' );

var bool = isDataTypeString( 'binary' );
console.log( bool );
// => true

bool = isDataTypeString( 'float32' );
console.log( bool );
// => true

bool = isDataTypeString( 'float64' );
console.log( bool );
// => true

bool = isDataTypeString( 'generic' );
console.log( bool );
// => true

bool = isDataTypeString( 'int16' );
console.log( bool );
// => true

bool = isDataTypeString( 'int32' );
console.log( bool );
// => true

bool = isDataTypeString( 'int8' );
console.log( bool );
// => true

bool = isDataTypeString( 'uint16' );
console.log( bool );
// => true

bool = isDataTypeString( 'uint32' );
console.log( bool );
// => true

bool = isDataTypeString( 'uint8' );
console.log( bool );
// => true

bool = isDataTypeString( 'uint8c' );
console.log( bool );
// => true

bool = isDataTypeString( '' );
console.log( bool );
// => false

bool = isDataTypeString( 'foo' );
console.log( bool );
// => false
