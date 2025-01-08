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

var zeros = require( './../../../zeros' );
var data = require( './../lib' );

// Create a 'float64' array...
var opts = {
	'dtype': 'float64'
};
var x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

var buf = data( x );
// returns <Float64Array>

console.log( buf );

// Create a 'float32' array...
opts = {
	'dtype': 'float32'
};
x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

buf = data( x );
// returns <Float32Array>

console.log( buf );

// Create a 'complex128' array...
opts = {
	'dtype': 'complex128'
};
x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

buf = data( x );
// returns <Complex128Array>

console.log( buf );

// Create an 'int32' array...
opts = {
	'dtype': 'int32'
};
x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

buf = data( x );
// returns <Int32Array>

console.log( buf );
