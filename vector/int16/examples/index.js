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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sum = require( '@stdlib/blas/ext/sum' );
var map = require( './../../../map' );
var Int16Vector = require( './../lib' );

// Create a vector containing random values:
var x = new Int16Vector( discreteUniform( 10, 0, 100 ) );

// Compute the sum:
var v = sum( x );
console.log( v.get() );

// Define a function which applies a threshold to individual values:
function threshold( v ) {
	return ( v > 10 ) ? v : 0;
}

// Apply threshold:
var y = map( x, threshold );

// Recompute the sum:
v = sum( y );
console.log( v.get() );
