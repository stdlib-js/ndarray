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
var dtype = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtype, 'function', 'main export is a function' );
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
		[],
		function noop() {},
		{
			'dtype': 'foo'
		},
		{
			'dtype': null
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtype( value );
		};
	}
});

tape( 'the function returns the data type of a provided ndarray', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		zeros( [], {
			'dtype': 'float64'
		}),
		zeros( [ 3, 3, 3 ], {
			'dtype': 'float32'
		}),
		zeros( [ 1, 1 ], {
			'dtype': 'int32'
		}),
		zeros( [ 3, 3, 0, 3 ], {
			'dtype': 'uint32'
		}),
		zeros( [ 1, 2, 3, 4 ], {
			'dtype': 'int8'
		}),
		zeros( [ 5 ], {
			'dtype': 'uint8'
		})
	];

	expected = [
		'float64',
		'float32',
		'int32',
		'uint32',
		'int8',
		'uint8'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = dtype( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (dtype)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		{
			'dtype': 'float64'
		},
		{
			'dtype': 'float32'
		},
		{
			'dtype': 'int32'
		},
		{
			'dtype': 'uint32'
		},
		{
			'dtype': 'int8'
		},
		{
			'dtype': 'uint8'
		}
	];

	expected = [
		'float64',
		'float32',
		'int32',
		'uint32',
		'int8',
		'uint8'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = dtype( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
