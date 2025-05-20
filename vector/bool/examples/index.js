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

var bernoulli = require( '@stdlib/random/array/bernoulli' );
var every = require( './../../../every' );
var map = require( './../../../map' );
var BooleanVector = require( './../lib' );

// Create a vector containing random values:
var x = new BooleanVector( bernoulli( 10, 0.9 ) );

// Determine whether every element is truthy:
var v = every( x );
console.log( v.get() );

// Define a function which inverts individual values:
function invert( v ) {
	return !v;
}

// Apply function:
var y = map( x, invert );

// Determine whether every element is truthy:
v = every( y );
console.log( v.get() );
