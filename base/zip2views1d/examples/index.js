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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var array2ndarray = require( './../../../base/from-array' );
var zip2views1d = require( './../lib' );

var x = array2ndarray( zeroTo( 10 ), 'row-major' );
var y = array2ndarray( discreteUniform( x.length, -100, 100 ), 'row-major' );

var labels = [ 'x', 'y' ];

var out = zip2views1d( [ x, y ], labels );
console.log( out );
// => [...]
