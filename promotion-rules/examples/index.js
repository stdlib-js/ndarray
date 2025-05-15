/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var cartesianProduct = require( '@stdlib/array/cartesian-product' );
var dtypes = require( './../../dtypes' );
var unzip = require( '@stdlib/utils/unzip' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var promotionRules = require( './../lib' );

// Get the list of supported ndarray data types:
var dt = dtypes();

// Generate a list of data type pairs:
var pairs = cartesianProduct( dt, dt );

// Split the pairs into separate arrays:
var args = unzip( pairs );

// Print the promotion rule for each pair of ndarray data types:
logEachMap( '(%s, %s) => %s', args[ 0 ], args[ 1 ], promotionRules );
