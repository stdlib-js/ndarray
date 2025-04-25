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
var flags = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flags, 'function', 'main export is a function' );
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flags( value );
		};
	}
});

tape( 'the function returns the flags of an ndarray', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] ),
		zeros( [] )
	];

	expected = [
		values[ 0 ].flags,
		values[ 1 ].flags,
		values[ 2 ].flags,
		values[ 3 ].flags,
		values[ 4 ].flags,
		values[ 5 ].flags
	];

	for ( i = 0; i < values.length; i++ ) {
		out = flags( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for array '+i );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': true,
				'COLUMN_MAJOR_CONTIGUOUS': false,
				'READ_ONLY': true
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': true
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': false,
				'READ_ONLY': false
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': true,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': false
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': false
			}
		},
		{},
		{
			'flags': null
		},
		{
			'flags': {}
		}
	];

	expected = [
		values[ 0 ].flags,
		values[ 1 ].flags,
		values[ 2 ].flags,
		values[ 3 ].flags,
		values[ 4 ].flags,
		{},
		{},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		out = flags( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for array '+i );
	}
	t.end();
});

tape( 'the function always returns a copy of an input ndarray\'s flags', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': true,
				'COLUMN_MAJOR_CONTIGUOUS': false,
				'READ_ONLY': true
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': true
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': false,
				'READ_ONLY': false
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': true,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': false
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': false
			}
		}
	];

	expected = [
		values[ 0 ].flags,
		values[ 1 ].flags,
		values[ 2 ].flags,
		values[ 3 ].flags,
		values[ 4 ].flags
	];

	for ( i = 0; i < values.length; i++ ) {
		out = flags( values[ i ] );
		t.notEqual( out, values[ i ].flags, 'returns expected value' );
		t.deepEqual( out, expected[ i ], 'returns expected value for array '+i );
	}
	t.end();
});
