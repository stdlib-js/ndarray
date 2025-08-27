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

var dtypes = require( './../../../../dtypes' );
var modes = require( './../../../../casting-modes' );
var isAllowedCast = require( './../lib' );

var DTYPES;
var MODES;
var bool;
var dt1;
var dt2;
var i;
var j;
var k;

// Get a list of supported ndarray data types and casting modes:
DTYPES = dtypes();
MODES = modes();

// For each data type and mode, determine whether one can cast to another data type...
for ( i = 0; i < DTYPES.length; i++ ) {
	dt1 = DTYPES[ i ];
	for ( j = 0; j < DTYPES.length; j++ ) {
		dt2 = DTYPES[ j ];
		for ( k = 0; k < MODES.length; k++ ) {
			bool = isAllowedCast( dt1, dt2, MODES[ k ] );
			console.log( '%s => %s. %s: %s.', dt1, dt2, MODES[ k ], bool );
		}
	}
}
