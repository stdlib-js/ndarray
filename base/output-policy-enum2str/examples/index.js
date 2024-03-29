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

var str2enum = require( './../../../base/output-policy-str2enum' );
var enum2str = require( './../lib' );

var str = enum2str( str2enum( 'same' ) );
console.log( str );
// => 'same'

str = enum2str( str2enum( 'floating_point' ) );
console.log( str );
// => 'floating_point'

str = enum2str( str2enum( 'signed_integer' ) );
console.log( str );
// => 'signed_integer'

str = enum2str( str2enum( 'unsigned_integer' ) );
console.log( str );
// => 'unsigned_integer'

str = enum2str( str2enum( 'integer' ) );
console.log( str );
// => 'integer'

str = enum2str( str2enum( 'promoted' ) );
console.log( str );
// => 'promoted'

str = enum2str( str2enum( 'complex_floating_point' ) );
console.log( str );
// => 'complex_floating_point'

str = enum2str( str2enum( 'real_floating_point' ) );
console.log( str );
// => 'real_floating_point'
