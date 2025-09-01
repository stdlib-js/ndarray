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
var cartesianProduct = require( '@stdlib/array/cartesian-product' );
var unzip = require( '@stdlib/utils/unzip' );
var dtypes = require( './../../../dtypes' );
var sum = require( '@stdlib/blas/ext/sum' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var vector = require( './../lib' );

// Create an array of random array lengths:
var lens = discreteUniform( 10, 5, 15, {
	'dtype': 'int32'
});

// Resolve a list of supported ndarray real-valued data types:
var dts = dtypes( 'real_and_generic' );

// Create length-dtype pairs:
var pairs = cartesianProduct( lens, dts );

// Split the pairs into individual arguments:
var args = unzip( pairs );

// Define a callback to create a random vector and return the sum of all vector elements:
function clbk( len, dtype ) {
	var x = vector( discreteUniform( len, 0, 100 ), dtype );
	return sum( x ).get();
}

// Apply the callback and print the results:
logEachMap( 'len: %2d. dtype: %7s. sum: %d.', args[ 0 ], args[ 1 ], clbk );
