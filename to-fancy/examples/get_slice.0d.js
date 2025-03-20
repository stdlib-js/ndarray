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

/* eslint-disable new-cap */

'use strict';

var E = require( '@stdlib/slice/multi' );
var ndarray = require( './../../ctor' );
var ndarray2fancy = require( './../lib' );

var buffer = [ 6 ];
var shape = [];
var strides = [ 0 ];
var offset = 0;

// Create a normal ndarray:
var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

// Convert to a fancy ndarray:
var y = ndarray2fancy( x );

// Access an ndarray property:
var ndims = y.ndims;
console.log( 'ndims: %d', ndims );
// => 'ndims: 0'

// Retrieve an ndarray element:
var v = y.get();
console.log( 'y[] = %d', v );
// => 'y[] = 6'

// Set an ndarray element:
y.set( 10 );
console.log( 'y[] = %d', y.get() );
// => 'y[] = 10'

// Use an empty multi-slice to create a separate array view:
var y1 = y[ E() ];
console.log( y1.get() );
// => 10

// Use alternative syntax:
var y2 = y[ [] ];
console.log( y2.get() );
// => 10

// Use alternative syntax:
var y3 = y[ '' ];
console.log( y3.get() );
// => 10

// Use alternative syntax:
var y4 = y[ '...' ];
console.log( y4.get() );
// => 10
