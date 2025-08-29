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

var dtype = require( './../../../dtype' );
var typedarray = require( '@stdlib/array/typed' );
var array2ndarray = require( './../lib' );

var buf = typedarray( 10, 'float64' );
var x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'float64'

buf = typedarray( 10, 'int32' );
x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'int32'

buf = typedarray( 10, 'complex128' );
x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'complex128'

buf = typedarray( 10, 'bool' );
x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'bool'
