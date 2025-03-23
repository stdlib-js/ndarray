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

var zeros = require( './../../zeros' );
var slice = require( './../../slice' );
var E = require( '@stdlib/slice/multi' );
var S = require( '@stdlib/slice/ctor' );
var numel = require( './../lib' );

// Create an array:
var x = zeros( [ 10, 10, 10, 10 ] );
// returns <ndarray>

// Define some slices:
var slices = [
	// :,:,:,:
	E( null, null, null, null ),

	// 5:10,:,2:4,::-1
	E( S( 5, 10 ), null, S( 2, 4 ), S( null, null, -1 ) ),

	// :,:,2,:
	E( null, null, 2, null ),

	// 1,2,3,4
	E( 1, 2, 3, 4 ),

	// :,:,::2,4::2
	E( null, null, S( null, null, 2 ), S( 4, null, 2 ) )
];

// Determine the number of elements in each slice...
var s;
var i;
for ( i = 0; i < slices.length; i++ ) {
	s = slice( x, slices[ i ] );
	console.log( '%s => %d elements', s.shape.join( 'x' ), numel( s ) );
}
