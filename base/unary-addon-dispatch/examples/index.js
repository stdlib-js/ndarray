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

var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var ndarray2array = require( './../../../to-array' );
var dispatch = require( './../lib' );

function addon( xbuf, metaX, ybuf, metaY ) { // eslint-disable-line no-unused-vars
	console.log( xbuf );
	// => <Float64Array>[ 1, 2, 3, 4 ]

	console.log( ybuf );
	// => <Float64Array>[ 0, 0, 0, 0 ]
}

function fallback( x, y ) {
	console.log( ndarray2array( x ) );
	// => [ [ 1, 2 ], [ 3, 4 ] ]

	console.log( ndarray2array( y ) );
	// => [ [ 0, 0 ], [ 0, 0 ] ]
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// Create ndarrays:
var opts = {
	'dtype': 'float64',
	'casting': 'unsafe'
};
var x = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
var y = zeros( [ 2, 2 ], opts );

// Dispatch to the add-on function:
f( x, y );

// Define new ndarrays:
opts = {
	'dtype': 'generic'
};
x = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
y = zeros( [ 2, 2 ], opts );

// Dispatch to the fallback function:
f( x, y );
