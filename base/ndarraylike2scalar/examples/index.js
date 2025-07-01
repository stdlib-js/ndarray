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

var scalar2ndarray = require( './../../../from-scalar' );
var compose = require( '@stdlib/utils/compose' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var oneTo = require( '@stdlib/array/one-to' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var ndarraylike2scalar = require( './../lib' );

// Create a list of scalars:
var scalars = oneTo( 10 );

// Create a composite function which round-trips a scalar to an ndarray and back:
var f = compose( ndarraylike2scalar, naryFunction( scalar2ndarray, 1 ) );

// Apply the function to the list of scalars:
logEachMap( '%d => %d', scalars, f );
