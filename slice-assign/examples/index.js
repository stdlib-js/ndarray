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

var E = require( '@stdlib/slice/multi' );
var scalar2ndarray = require( './../../from-scalar' );
var ndarray2array = require( './../../to-array' );
var ndzeros = require( './../../zeros' );
var slice = require( './../../slice' );
var sliceAssign = require( './../lib' );

// Alias `null` to allow for more compact indexing expressions:
var _ = null;

// Create an output ndarray:
var y = ndzeros( [ 3, 3, 3 ] );

// Update each matrix...
var s1 = E( 0, _, _ );
sliceAssign( scalar2ndarray( 100 ), y, s1 );

var a1 = ndarray2array( slice( y, s1 ) );
console.log( a1 );
// => [ [ 100, 100, 100 ], [ 100, 100, 100 ], [ 100, 100, 100 ] ]

var s2 = E( 1, _, _ );
sliceAssign( scalar2ndarray( 200 ), y, s2 );

var a2 = ndarray2array( slice( y, s2 ) );
console.log( a2 );
// => [ [ 200, 200, 200 ], [ 200, 200, 200 ], [ 200, 200, 200 ] ]

var s3 = E( 2, _, _ );
sliceAssign( scalar2ndarray( 300 ), y, s3 );

var a3 = ndarray2array( slice( y, s3 ) );
console.log( a3 );
// => [ [ 300, 300, 300 ], [ 300, 300, 300 ], [ 300, 300, 300 ] ]

// Update the second rows in each matrix:
var s4 = E( _, 1, _ );
sliceAssign( scalar2ndarray( 400 ), y, s4 );

var a4 = ndarray2array( slice( y, s4 ) );
console.log( a4 );
// => [ [ 400, 400, 400 ], [ 400, 400, 400 ], [ 400, 400, 400 ] ]

// Update the second columns in each matrix:
var s5 = E( _, _, 1 );
sliceAssign( scalar2ndarray( 500 ), y, s5 );

var a5 = ndarray2array( slice( y, s5 ) );
console.log( a5 );
// => [ [ 500, 500, 500 ], [ 500, 500, 500 ], [ 500, 500, 500 ] ]

// Return the contents of the entire ndarray:
var a6 = ndarray2array( y );
console.log( a6 );
/* =>
  [
    [
      [ 100, 500, 100 ],
      [ 400, 500, 400 ],
      [ 100, 500, 100 ]
    ],
    [
      [ 200, 500, 200 ],
      [ 400, 500, 400 ],
      [ 200, 500, 200 ]
    ],
    [
      [ 300, 500, 300 ],
      [ 400, 500, 400 ],
      [ 300, 500, 300 ]
    ]
  ]
*/
