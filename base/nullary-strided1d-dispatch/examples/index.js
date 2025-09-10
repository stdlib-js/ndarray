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

var dsorthp = require( '@stdlib/blas/ext/base/ndarray/dsorthp' );
var ssorthp = require( '@stdlib/blas/ext/base/ndarray/ssorthp' );
var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dtypes = require( './../../../dtypes' );
var ndarray2array = require( './../../../to-array' );
var scalar2ndarray = require( './../../../from-scalar' );
var ndarray = require( './../../../ctor' );
var NullaryStrided1dDispatch = require( './../lib' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'all' );

// Define a dispatch table:
var table = {
	'types': [
		'float64', // input/output
		'float32'  // input/output
	],
	'fcns': [
		dsorthp,
		ssorthp
	],
	'default': base
};

// Create an interface for performing operation:
var sorthp = new NullaryStrided1dDispatch( table, [ idt ], odt );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
	'dtype': 'float64'
});

// Wrap in an ndarray:
var x = new ndarray( 'float64', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Specify the sort order:
var order = scalar2ndarray( 1.0, {
	'dtype': 'generic'
});

// Perform operation:
sorthp.assign( x, order, {
	'dims': [ 0, 1 ]
});

// Print the results:
console.log( ndarray2array( x ) );
