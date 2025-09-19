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

var DataType = require( './../../../../dtype-ctor' );
var isEqualDataType = require( './../lib' );

var bool = isEqualDataType( 'binary', 'binary' );
console.log( bool );
// => true

bool = isEqualDataType( 'float32', 'float32' );
console.log( bool );
// => true

bool = isEqualDataType( 'float64', new DataType( 'float64' ) );
console.log( bool );
// => true

bool = isEqualDataType( 'generic', new DataType( 'generic' ) );
console.log( bool );
// => true

bool = isEqualDataType( 'int16', 'int32' );
console.log( bool );
// => false

bool = isEqualDataType( 'int32', new DataType( 'int16') );
console.log( bool );
// => false

bool = isEqualDataType( 'foo', 'foo' );
console.log( bool );
// => false

bool = isEqualDataType( {}, {} );
console.log( bool );
// => false
