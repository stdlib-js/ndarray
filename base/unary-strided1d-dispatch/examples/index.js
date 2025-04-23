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

var base = require( '@stdlib/stats/base/ndarray/cumax' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dtypes = require( './../../../dtypes' );
var dtype = require( './../../../dtype' );
var ndarray2array = require( './../../../to-array' );
var ndarray = require( './../../../ctor' );
var UnaryStrided1dDispatch = require( './../lib' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define the policy mapping an input data type to an output data type:
var policy = 'same';

// Define a dispatch table:
var table = {
	'default': base
};

// Create an interface for performing a reduction:
var cumax = new UnaryStrided1dDispatch( table, [ idt ], odt, policy );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
	'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cumax.apply( x, {
	'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
