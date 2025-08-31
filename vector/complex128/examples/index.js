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
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex128Vector = require( './../lib' );

// Create a vector containing random values:
var x = new Complex128Vector( discreteUniform( 20, 0, 100 ) );

// Compute the sum:
var v = sum( x );
console.log( v.get() );

// Define a function which applies a threshold to real and imaginary components:
function threshold( v ) {
	if ( real( v ) > 10 && imag( v ) > 10 ) {
		return v;
	}
	return new Complex128( 0.0, 0.0 );
}

// Apply threshold:
var y = map( x, threshold );

// Recompute the sum:
v = sum( y );
console.log( v.get() );
