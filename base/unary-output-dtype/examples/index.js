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

var naryFunction = require( '@stdlib/utils/nary-function' );
var map2 = require( '@stdlib/utils/map2' );
var unzip = require( '@stdlib/utils/unzip' );
var cartesianProduct = require( '@stdlib/array/base/cartesian-product' );
var dtypes = require( './../../../dtypes' );
var logEach = require( '@stdlib/console/log-each' );
var unaryOutputDataType = require( './../lib' );

// Get the list of real-valued data types:
var dt = dtypes( 'real' );

// Define a list of output data type policies:
var policies = [
	'default',
	'real',
	'floating_point',
	'complex_floating_point'
];

// Generate dtype-policy argument pairs:
var args = cartesianProduct( dt, policies );

// Unzip the argument pair array:
args = unzip( args );

// Resolve output data types:
var out = map2( args[ 0 ], args[ 1 ], naryFunction( unaryOutputDataType, 2 ) );

// Print results:
logEach( 'dtypes: (%10s, %10s). policy: %s.', args[ 0 ], out, args[ 1 ] );
