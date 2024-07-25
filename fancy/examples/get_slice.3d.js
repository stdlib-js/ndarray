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

/* eslint-disable new-cap, array-element-newline, comma-spacing */

'use strict';

var S = require( '@stdlib/slice/ctor' );
var E = require( '@stdlib/slice/multi' );
var toArray = require( './../../to-array' );
var FancyArray = require( './../lib' );

var buffer = [
	1, 2,

	3, 4,    // 0,0,{0,1}
	5, 6,    // 0,1,{0,1}
	7, 8,    // 0,2,{0,1}

	9, 10,   // 1,0,{0,1}
	11, 12,  // 1,1,{0,1}
	13, 14,  // 1,2,{0,1}

	15, 16,
	17, 18,
	19, 20
];
var shape = [ 2, 3, 2 ];
var strides = [ 6, 2, 1 ];
var offset = 2;

var x = new FancyArray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <FancyArray>

// Access an ndarray property:
var ndims = x.ndims;
console.log( 'ndims: %d', ndims );
// => 'ndims: 3'

// Retrieve an ndarray element:
var v = x.get( 1, 2, 1 );
console.log( 'x[1,2,1] = %d', v );
// => 'x[1,2,1] = 14'

// Set an ndarray element:
x.set( 1, 2, 1, 100 );
console.log( 'x[1,2,1] = %d', x.get( 1, 2, 1 ) );
// => 'x[1,2,1] = 100'

// Create an alias for `undefined` for more concise slicing expressions:
var _ = void 0;

// Create a multi-dimensional slice:
var s = E( 1, S(0,_,2), _ );
// returns <MultiSlice>

// Use the slice to create a view on the original ndarray:
var y1 = x[ s ];
console.log( toArray( y1 ) );
// => [ [ 9, 10 ], [ 13, 100 ] ]

// Use alternative syntax:
var y2 = x[ [ 1, S(0,_,2), _ ] ];
console.log( toArray( y2 ) );
// => [ [ 9, 10 ], [ 13, 100 ] ]

// Use alternative syntax:
var y3 = x[ '1,0::2,:' ];
console.log( toArray( y3 ) );
// => [ [ 9, 10 ], [ 13, 100 ] ]

// Flip dimensions:
var y4 = x[ [ 1, S(_,_,-2), S(_,_,-1) ] ];
console.log( toArray( y4 ) );
// => [ [ 100, 13 ], [ 10, 9 ] ]

// Only the second rows:
var y5 = x[ [ _, 1, _ ] ];
console.log( toArray( y5 ) );
// throws [ [ 5, 6 ], [ 11, 12 ] ]
