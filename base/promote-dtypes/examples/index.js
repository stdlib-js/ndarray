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

var dtypes = require( './../../../dtypes' );
var cartesianProduct = require( '@stdlib/array/base/cartesian-product' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var promoteDataTypes = require( './../lib' );

// Get the list of supported data types:
var dt = dtypes();

// Generate data type pairs:
var pairs = cartesianProduct( dt, dt );

// Resolve promoted data types:
logEachMap( '(%s) => %s', pairs, promoteDataTypes );
