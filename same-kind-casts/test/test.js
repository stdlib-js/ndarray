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

// MODULES //

var tape = require( 'tape' );
var dtypes = require( './../../dtypes' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var sameKindCasts = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sameKindCasts, 'function', 'main export is a function' );
	t.end();
});

tape( 'if not provided a data type, the function returns a table', function test( t ) {
	var out = sameKindCasts();
	t.strictEqual( typeof out, 'object', 'returns an object' );
	t.strictEqual( out[ 'float32' ][ 'float64' ], 1, 'returns expected value' );
	t.strictEqual( out[ 'float32' ][ 'int8' ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a list of ndarray data types to which a provided ndarray data type can be safely cast or cast within the same "kind"', function test( t ) {
	var list;
	var i;
	for ( i = 0; i < DTYPES.length; i++ ) {
		list = sameKindCasts( DTYPES[ i ] );
		t.strictEqual( isStringArray( list ), true, 'returns an array of strings when provided '+DTYPES[ i ] );
	}
	t.end();
});

tape( 'if provided an unrecognized or unsupported data type, the function returns `null`', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'foo',
		'bar',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( sameKindCasts( values[ i ] ), null, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
