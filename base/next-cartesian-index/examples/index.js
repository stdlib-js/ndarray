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
var zeroTo = require( '@stdlib/array/base/zero-to' );
var nextCartesianIndex = require( './../lib' );

// Create an ndarray:
var x = array( zeroTo( 27 ), {
	'shape': [ 3, 3, 3 ]
});

// Initialize a set of indices:
var idx = [ 0, 0, 0 ];

// Iterate over each element in the array...
var i;
for ( i = 0; i < x.length; i++ ) {
	console.log( 'x[%s] = %d', idx.join( ',' ), x.get.apply( x, idx ) );
	idx = nextCartesianIndex.assign( x.shape, x.order, idx, -1, idx );
}
