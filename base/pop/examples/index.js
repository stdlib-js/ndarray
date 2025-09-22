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

var array = require( './../../../array' );
var ndarray2array = require( './../../../to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var pop = require( './../lib' );

// Create a linear data buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
	'shape': [ 3, 3, 3 ]
});
console.log( ndarray2array( x ) );

// Remove the last row from each matrix:
var y = pop( x, 1, false );

console.log( ndarray2array( y[ 0 ] ) );
console.log( ndarray2array( y[ 1 ] ) );
