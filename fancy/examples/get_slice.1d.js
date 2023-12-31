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

/* eslint-disable new-cap, comma-spacing */

'use strict';

var S = require( '@stdlib/slice/ctor' );
var E = require( '@stdlib/slice/multi' );
var toArray = require( './../../to-array' );
var FancyArray = require( './../lib' );

var buffer = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
var shape = [ 6 ];
var strides = [ 2 ];
var offset = 2;

var x = new FancyArray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <FancyArray>

// Access an ndarray property:
var ndims = x.ndims;
console.log( 'ndims: %d', ndims );
// => 'ndims: 1'

// Retrieve an ndarray element:
var v = x.get( 2 );
console.log( 'x[2] = %d', v );
// => 'x[2] = 7'

// Set an ndarray element:
x.set( 2, 100 );
console.log( 'x[2] = %d', x.get( 2 ) );
// => 'x[2] = 100'

// Create an alias for `undefined` for more concise slicing expressions:
var _ = void 0;

// Create a multi-dimensional slice:
var s = E( S(0,_,2) );
// returns <MultiSlice>

// Use a multi-slice to create a view on the original ndarray:
var y1 = x[ s ];
console.log( toArray( y1 ) );
// => [ 3, 100, 11 ]

// Use a slice to create a view on the original ndarray:
var y2 = x[ s.data[0] ];
console.log( toArray( y2 ) );
// => [ 3, 100, 11 ]

// Use alternative syntax:
var y3 = x[ [ S(0,_,2) ] ];
console.log( toArray( y3 ) );
// => [ 3, 100, 11 ]

// Use alternative syntax:
var y4 = x[ '::-2' ];
console.log( toArray( y4 ) );
// => [ 13, 9, 5 ]
