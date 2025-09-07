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

var zeros = require( './../../zeros' );
var MultiSlice = require( '@stdlib/slice/multi' );
var Slice = require( '@stdlib/slice/ctor' );
var ndarray2array = require( './../../to-array' );
var fillSlice = require( './../lib' );

// Create a zero-filled ndarray:
var x = zeros( [ 2, 3, 4 ], {
	'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Specify the fill region:
var s0 = new Slice( 1, 2 );
var s1 = new Slice( null, null );
var s2 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1, s2 );

// Fill a slice with a scalar value:
fillSlice( x, 10.0, s );
console.log( ndarray2array( x ) );
