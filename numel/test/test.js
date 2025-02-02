/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var zeros = require( './../../zeros' );
var numel = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof numel, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a minimal ndarray-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		{
			'length': 3.14
		},
		{
			'length': -1
		},
		{
			'shape': [ 1, -1 ]
		},
		{
			'shape': [ 1, 3.14 ]
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			numel( value );
		};
	}
});

tape( 'if provided a zero-dimensional ndarray, the function returns 1', function test( t ) {
	t.strictEqual( numel( zeros( [] ) ), 1, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty ndarray, the function returns 0', function test( t ) {
	t.strictEqual( numel( zeros( [ 0 ] ) ), 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the number of elements in an ndarray', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] )
	];

	expected = [
		27,
		1,
		0,
		24,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		n = numel( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape)', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ]
		},
		{
			'shape': [ 1, 1 ]
		},
		{
			'shape': [ 3, 3, 0, 3 ]
		},
		{
			'shape': [ 1, 2, 3, 4 ]
		},
		{
			'shape': [ 5 ]
		}
	];

	expected = [
		27,
		1,
		0,
		24,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		n = numel( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (length)', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		{
			'length': 27
		},
		{
			'length': 1
		},
		{
			'length': 0
		},
		{
			'length': 24
		},
		{
			'length': 5
		}
	];

	expected = [
		27,
		1,
		0,
		24,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		n = numel( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for length '+values[ i ].length );
	}
	t.end();
});
