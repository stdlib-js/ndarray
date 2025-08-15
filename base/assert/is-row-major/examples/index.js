/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var shape2strides = require( './../../../../base/shape2strides' );
var isRowMajor = require( './../lib' );

var shape = [ 10, 10, 10 ];

var strides = shape2strides( shape, 'row-major' );
console.log( 'Strides: %s', strides.join( ',' ) );
// => Strides: 100,10,1

var bool = isRowMajor( strides );
console.log( bool );
// => true

strides = shape2strides( shape, 'column-major' );
console.log( 'Strides: %s', strides.join( ',' ) );
// => Strides: 1,10,100

bool = isRowMajor( strides );
console.log( bool );
// => false
