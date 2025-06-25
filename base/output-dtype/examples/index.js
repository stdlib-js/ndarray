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

var naryFunction = require( '@stdlib/utils/nary-function' );
var unzip = require( '@stdlib/utils/unzip' );
var cartesianProduct = require( '@stdlib/array/base/cartesian-product' );
var dtypes = require( './../../../dtypes' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var outputDataType = require( './../lib' );

// Get the list of real-valued data types:
var dt = dtypes( 'real' );

// Define a list of output data type policies:
var policies = [
	'default',
	'real',
	'floating_point',
	'complex_floating_point',
	'promoted'
];

// Generate data type pairs:
var pairs = cartesianProduct( dt, dt );

// Generate argument pairs:
var args = cartesianProduct( pairs, policies );

// Unzip the argument pair array:
args = unzip( args );

// Resolve output data types:
logEachMap( 'dtypes: (%15s). policy: %-24s. output dtype: %s.', args[ 0 ], args[ 1 ], naryFunction( outputDataType, 2 ) );
