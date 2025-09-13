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

/* eslint-disable array-element-newline */

'use strict';

var ddot = require( '@stdlib/blas/base/ndarray/ddot' );
var sdot = require( '@stdlib/blas/base/ndarray/sdot' );
var base = require( '@stdlib/blas/base/ndarray/gdot' );
var uniform = require( '@stdlib/random/array/uniform' );
var dtypes = require( './../../../dtypes' );
var dtype = require( './../../../dtype' );
var ndarray2array = require( './../../../to-array' );
var ndarray = require( './../../../ctor' );
var BinaryStrided1dDispatch = require( './../lib' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define dispatch policies:
var policies = {
	'output': 'promoted',
	'casting': 'promoted'
};

// Define a dispatch table:
var table = {
	'types': [
		'float64', 'float64', // input data types
		'float32', 'float32'  // input data types
	],
	'fcns': [
		ddot,
		sdot
	],
	'default': base
};

// Create an interface for performing a reduction:
var dot = new BinaryStrided1dDispatch( table, [ idt, idt ], odt, policies );

// Generate arrays of random numbers:
var xbuf = uniform( 100, -1.0, 1.0, {
	'dtype': 'generic'
});
var ybuf = uniform( 100, -1.0, 1.0, {
	'dtype': 'generic'
});

// Wrap in ndarrays:
var x = new ndarray( 'generic', xbuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );
var y = new ndarray( 'generic', ybuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );

// Perform a reduction:
var z = dot.apply( x, y, {
	'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( z );
console.log( dt );

// Print the results:
console.log( ndarray2array( z ) );
