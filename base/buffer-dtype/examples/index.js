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

var dtypes = require( './../../../dtypes' );
var bufferCtors = require( './../../../base/buffer-ctors' );
var dtype = require( './../lib' );

// Get a list of supported ndarray buffer data types:
var DTYPES = dtypes( 'integer_and_generic' );

// Buffer length:
var len = 10;

// For each supported data type, create a buffer and confirm its data type...
var ctor;
var dt;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
	ctor = bufferCtors( DTYPES[ i ] );
	dt = dtype( new ctor( len ) );
	console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
}

// Try an array-like object...
var buf = {
	'length': len
};
dt = dtype( buf );
console.log( '%s == %s => %s', 'generic', dt, dt === 'generic' );
