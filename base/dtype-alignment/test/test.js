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

// MODULES //

var tape = require( 'tape' );
var DataType = require( './../../../dtype-ctor' );
var structFactory = require( '@stdlib/dstructs/struct' );
var dtypeAlignment = require( './../lib' );


// VARIABLES //

var DTYPES = [
	'float64',
	'float32',
	'float16',
	'int8',
	'uint8',
	'uint8c',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'binary',
	'generic',
	'complex32',
	'complex64',
	'complex128',
	'bool'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeAlignment, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object mapping data type strings to alignments if not provided an argument', function test( t ) {
	var expected;
	var obj;
	var out;
	var i;

	expected = [
		8,
		4,
		2,
		1,
		1,
		1,
		2,
		2,
		4,
		4,
		1,
		null,
		2,
		4,
		8,
		1
	];

	obj = dtypeAlignment();
	for ( i = 0; i < DTYPES.length; i++ ) {
		out = obj[ DTYPES[ i ] ];
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns the alignment for an underlying array data type (string)', function test( t ) {
	var expected;
	var out;
	var i;

	expected = [
		8,
		4,
		2,
		1,
		1,
		1,
		2,
		2,
		4,
		4,
		1,
		null,
		2,
		4,
		8,
		1
	];
	for ( i = 0; i < DTYPES.length; i++ ) {
		out = dtypeAlignment( DTYPES[ i ] );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns the alignment for an underlying array data type (data type, string)', function test( t ) {
	var expected;
	var out;
	var i;

	expected = [
		8,
		4,
		2,
		1,
		1,
		1,
		2,
		2,
		4,
		4,
		1,
		null,
		2,
		4,
		8,
		1
	];
	for ( i = 0; i < DTYPES.length; i++ ) {
		out = dtypeAlignment( new DataType( DTYPES[ i ] ) );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns the alignment for an underlying array data type (struct)', function test( t ) {
	var expected;
	var schemas;
	var values;
	var out;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'foo',
				'type': 'float32'
			}
		]
	];

	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	expected = [
		8,
		4
	];
	for ( i = 0; i < values.length; i++ ) {
		out = dtypeAlignment( values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+values[i].layout );
	}
	t.end();
});

tape( 'the function returns the alignment for an underlying array data type (data type, struct)', function test( t ) {
	var expected;
	var schemas;
	var values;
	var out;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'foo',
				'type': 'float32'
			}
		]
	];

	values = [
		new DataType( structFactory( schemas[ 0 ] ) ),
		new DataType( structFactory( schemas[ 1 ] ) )
	];

	expected = [
		8,
		4
	];
	for ( i = 0; i < values.length; i++ ) {
		out = dtypeAlignment( values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+values[i].layout );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unknown/unsupported data type', function test( t ) {
	var values;
	var out;
	var i;

	values = [
		'foobar',
		null
	];
	for ( i = 0; i < values.length; i++ ) {
		out = dtypeAlignment( values[ i ] );
		t.strictEqual( out, null, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
