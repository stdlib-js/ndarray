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

var base = require( '@stdlib/stats/base/ndarray/max-by' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var uniform = require( '@stdlib/random/base/uniform' );
var dtypes = require( './../../../dtypes' );
var dtype = require( './../../../dtype' );
var ndarray2array = require( './../../../to-array' );
var ndarray = require( './../../../ctor' );
var factory = require( './../lib' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = idt;

// Define dispatch policies:
var policies = {
	'output': 'same',
	'casting': 'none'
};

// Define a dispatch table:
var table = {
	'default': base
};

// Create an interface for performing a reduction:
var maxBy = factory( table, [ idt ], odt, policies );

// Define a function for creating an object with a random value:
function random() {
	return {
		'value': uniform( -1.0, 1.0 )
	};
}

// Generate an array of random numbers:
var xbuf = filledarrayBy( 100, 'generic', random );

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );

// Define an accessor function:
function accessor( v ) {
	return v.value * 100.0;
}

// Perform a reduction:
var opts = {
	'dims': [ 0 ]
};
var y = maxBy( x, opts, accessor );

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
