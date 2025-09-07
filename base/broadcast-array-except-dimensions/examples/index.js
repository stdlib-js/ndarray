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
var numel = require( './../../../base/numel' );
var ind2sub = require( './../../../ind2sub' );
var getShape = require( './../../../shape' );
var broadcastArrayExceptDimensions = require( './../lib' ); // eslint-disable-line id-length

// Create a 1x3 array:
var x = array( [ [ 1, 2, 3 ] ] );
// returns <ndarray>

// Broadcast the array to 2x1x3:
var y = broadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
// returns <ndarray>

// Retrieve the shape:
var sh = getShape( y );
// returns [ 2, 1, 3 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var sub;
var v;
var i;
for ( i = 0; i < N; i++ ) {
	v = y.iget( i );
	sub = ind2sub( sh, i );
	console.log( 'Y[%s] = %d', sub.join( ', ' ), v );
}
