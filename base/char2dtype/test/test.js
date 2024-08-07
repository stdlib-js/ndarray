/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var objectInverse = require( '@stdlib/utils/object-inverse' );
var dtypeChar = require( './../../../base/dtype-char' );
var char2dtype = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof char2dtype, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object mapping single letter character abbreviations to data type strings if not provided an argument', function test( t ) {
	var obj = char2dtype();
	t.deepEqual( obj, objectInverse( dtypeChar() ), 'returns expected value' );
	t.end();
});

tape( 'the function returns the data type string associated with a provided single letter abbreviation', function test( t ) {
	var expected;
	var out;
	var ch;
	var i;

	expected = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8c',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'int64',
		'uint64',
		'binary',
		'generic',
		'complex64',
		'complex128',
		'bool'
	];
	for ( i = 0; i < expected.length; i++ ) {
		ch = dtypeChar( expected[ i ] );
		out = char2dtype( ch );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+ch );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unknown/unsupported abbreviation', function test( t ) {
	var out = char2dtype( '(' );
	t.strictEqual( out, null, 'returns expected value' );
	t.end();
});
