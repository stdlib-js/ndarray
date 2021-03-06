/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var removeSingletonDimensions = require( './../lib' );

// Create a 5-dimensional array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
	'ndmin': 5
});
// returns <ndarray>

// Remove singleton dimensions:
var y = removeSingletonDimensions( x );
// returns <ndarray>

// Retrieve the shape:
var sh = y.shape;
// returns [ 2, 2 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
	console.log( 'Y[%s] = %d', ind2sub( sh, i ).join( ', ' ), y.iget( i ) );
}
