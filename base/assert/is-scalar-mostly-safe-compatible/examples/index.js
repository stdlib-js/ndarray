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

var dtypes = require( './../../../../dtypes' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var isScalarMostlySafeCompatible = require( './../lib' ); // eslint-disable-line id-length

// Determine whether a decimal value can be cast to various data types...
logEachMap( '%f => %s: %s', 3.14, dtypes(), isScalarMostlySafeCompatible );
