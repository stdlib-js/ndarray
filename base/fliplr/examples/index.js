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

var array = require( './../../../array' );
var ndarray2array = require( './../../../to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var fliplr = require( './../lib' );

// Create a linear ndarray buffer:
var buf = zeroTo( 16 );

// Create a three-dimensional ndarray:
var x = array( buf, {
	'shape': [ 2, 4, 2 ]
});

// Reverse the order of last dimension:
var y = fliplr( x, false );
// returns <ndarray>

var a = ndarray2array( y );
console.log( a );
// => [ [ [ 1, 0 ], [ 3, 2 ], [ 5, 4 ], [ 7, 6 ] ], [ [ 9, 8 ], [ 11, 10 ], [ 13, 12 ], [ 15, 14 ] ] ]
