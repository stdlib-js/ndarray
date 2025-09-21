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

var nCartesianProduct = require( '@stdlib/array/base/n-cartesian-product' );
var unzip = require( '@stdlib/utils/unzip' );
var dtypes = require( './../../../../base/dtype-strings' );
var modes = require( './../../../../casting-modes' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var isAllowedCast = require( './../lib' );

// Generate a list of dtype pairs and casting modes:
var pairs = nCartesianProduct( dtypes(), dtypes(), modes() );

// Unzip the list into individual arrays:
var lists = unzip( pairs );

// For each data type pair and mode, determine whether one can cast to another data type:
logEachMap( '%s => %s. %s: %s.', lists[ 0 ], lists[ 1 ], lists[ 2 ], isAllowedCast );
