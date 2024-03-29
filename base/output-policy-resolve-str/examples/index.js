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
var resolve = require( './../lib' );

var v = resolve( str2enum( 'same' ) );
console.log( v );
// => 'same'

v = resolve( str2enum( 'promoted' ) );
console.log( v );
// => 'promoted'

v = resolve( str2enum( 'signed_integer' ) );
console.log( v );
// => 'signed_integer'

v = resolve( str2enum( 'unsigned_integer' ) );
console.log( v );
// => 'unsigned_integer'

v = resolve( str2enum( 'floating_point' ) );
console.log( v );
// => 'floating_point'

v = resolve( str2enum( 'integer' ) );
console.log( v );
// => 'integer'

v = resolve( str2enum( 'real_floating_point' ) );
console.log( v );
// => 'real_floating_point'

v = resolve( str2enum( 'complex_floating_point' ) );
console.log( v );
// => 'complex_floating_point'
