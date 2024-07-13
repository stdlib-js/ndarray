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
var buffer = require( './../../base/buffer' );
var data = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof data, 'function', 'main export is a function' );
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
			'data': {}
		},
		{
			'data': null
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			data( value );
		};
	}
});

tape( 'the function returns the underlying data buffer of a provided ndarray', function test( t ) {
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
		values[ 0 ].data,
		values[ 1 ].data,
		values[ 2 ].data,
		values[ 3 ].data,
		values[ 4 ].data,
		values[ 5 ].data
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = data( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (data)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		{
			'data': buffer( 'float64', 10 )
		},
		{
			'data': buffer( 'float32', 10 )
		},
		{
			'data': buffer( 'int32', 10 )
		},
		{
			'data': buffer( 'uint32', 10 )
		},
		{
			'data': buffer( 'int8', 10 )
		},
		{
			'data': buffer( 'uint8', 10 )
		}
	];

	expected = [
		values[ 0 ].data,
		values[ 1 ].data,
		values[ 2 ].data,
		values[ 3 ].data,
		values[ 4 ].data,
		values[ 5 ].data
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = data( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
