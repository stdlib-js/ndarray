/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var toReversed = require( './../lib' );

// Create a linear ndarray buffer:
var buf = zeroTo( 16 );

// Create a one-dimensional ndarray:
var x1 = array( buf, {
	'shape': [ 16 ]
});

// Reverse element order:
var y1 = toReversed( x1, false );
// returns <ndarray>

var a1 = ndarray2array( y1 );
console.log( a1 );
// => [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

// Create a two-dimensional ndarray:
var x2 = array( buf, {
	'shape': [ 4, 4 ]
});

// Reverse element order:
var y2 = toReversed( x2, false );
// returns <ndarray>

var a2 = ndarray2array( y2 );
console.log( a2 );
// => [ [ 15, 14, 13, 12 ], [ 11, 10, 9, 8 ], [ 7, 6, 5, 4 ], [ 3, 2, 1, 0 ] ]

// Create a three-dimensional ndarray:
var x3 = array( buf, {
	'shape': [ 2, 4, 2 ]
});

// Reverse element order:
var y3 = toReversed( x3, false );
// returns <ndarray>

var a3 = ndarray2array( y3 );
console.log( a3 );
// => [ [ [ 15, 14 ], [ 13, 12 ], [ 11, 10 ], [ 9, 8 ] ], [ [ 7, 6 ], [ 5, 4 ], [ 3, 2 ], [ 1, 0 ] ] ]
