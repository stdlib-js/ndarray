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

/* eslint-disable new-cap */

'use strict';

var S = require( '@stdlib/slice/ctor' );
var E = require( '@stdlib/slice/multi' );
var array = require( './../../array' );
var ndarray2array = require( './../../to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var slice = require( './../lib' );

// Alias `null` to allow for more compact indexing expressions:
var _ = null;

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
	'shape': [ 3, 3, 3 ]
});

// Get each matrix...
var s1 = E( 0, _, _ );
var y1 = slice( x, s1 );
// returns <ndarray>

var a1 = ndarray2array( y1 );
console.log( a1 );
// => [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

var s2 = E( 1, _, _ );
var y2 = slice( x, s2 );
// returns <ndarray>

var a2 = ndarray2array( y2 );
console.log( a2 );
// => [ [ 9, 10, 11 ], [ 12, 13, 14 ], [ 15, 16, 17 ] ]

var s3 = E( 2, _, _ );
var y3 = slice( x, s3 );
// returns <ndarray>

var a3 = ndarray2array( y3 );
console.log( a3 );
// => [ [ 18, 19, 20 ], [ 21, 22, 23 ], [ 24, 25, 26 ] ]

// Reverse all elements:
var s = S( _, _, -1 );
var s4 = E( s, s, s );
var y4 = slice( x, s4 );
// returns <ndarray>

var a4 = ndarray2array( y4 );
console.log( a4 );
// => [...]

// Get the second rows from each matrix:
var s5 = E( _, 1, _ );
var y5 = slice( x, s5 );
// returns <ndarray>

var a5 = ndarray2array( y5 );
console.log( a5 );
// => [ [ 3, 4, 5 ], [ 12, 13, 14 ], [ 21, 22, 23 ] ]

// Get the second columns from each matrix:
var s6 = E( _, _, 1 );
var y6 = slice( x, s6 );
// returns <ndarray>

var a6 = ndarray2array( y6 );
console.log( a6 );
// => [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]

// Use an alternative invocation style:
var y7 = slice( x, _, _, 1 );
// returns <ndarray>

var a7 = ndarray2array( y7 );
console.log( a7 );
// => [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]

// Use an alternative invocation style:
var y8 = slice( x, [ _, _, 1 ] );
// returns <ndarray>

var a8 = ndarray2array( y8 );
console.log( a8 );
// => [ [ 1, 4, 7 ], [ 10, 13, 16 ], [ 19, 22, 25 ] ]
