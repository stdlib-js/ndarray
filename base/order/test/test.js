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
var zeros = require( './../../../zeros' );
var order = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof order, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the data type of a provided ndarray', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		zeros( [], {
			'order': 'row-major'
		}),
		zeros( [ 3, 3, 3 ], {
			'order': 'column-major'
		}),
		zeros( [ 1, 1 ], {
			'order': 'column-major'
		}),
		zeros( [ 3, 3, 0, 3 ], {
			'order': 'row-major'
		}),
		zeros( [ 1, 2, 3, 4 ], {
			'order': 'row-major'
		}),
		zeros( [ 5 ], {
			'order': 'column-major'
		})
	];

	expected = [
		'row-major',
		'column-major',
		'column-major',
		'row-major',
		'row-major',
		'column-major'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = order( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (order)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		{
			'order': 'row-major'
		},
		{
			'order': 'column-major'
		},
		{
			'order': 'column-major'
		},
		{
			'order': 'row-major'
		},
		{
			'order': 'row-major'
		},
		{
			'order': 'column-major'
		}
	];

	expected = [
		'row-major',
		'column-major',
		'column-major',
		'row-major',
		'row-major',
		'column-major'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = order( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, strides)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		{
			'shape': [],
			'strides': [] // this should not happen, as for zero-dimensional ndarrays should be [ 0 ], but providing an empty array is supported by `ndarray/base/strides2order`
		},
		{
			'shape': [ 2, 2 ],
			'strides': [ 2, 1 ]
		},
		{
			'shape': [ 3, 3, 3 ],
			'strides': [ 1, 3, 9 ]
		},
		{
			'shape': [ 2, 2 ],
			'strides': [ 1, 2 ]
		},
		{
			'shape': [ 2, 2, 2 ],
			'strides': [ 8, 4, 2 ]
		},
		{
			'shape': [ 10 ],
			'strides': [ 1 ]
		},
		{
			'shape': [ 2, 2, 2 ],
			'strides': [ 2, 4, 8 ]
		}
	];

	expected = [
		'row-major',
		'row-major',
		'column-major',
		'column-major',
		'row-major',
		'row-major',
		'column-major'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = order( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns defaults to row-major if provided an ndarray-like object lacking an order and strides', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		{
			'shape': [ 2, 2, 2 ]
		},
		{
			'shape': [ 2, 2, 2 ],
			'strides': null
		}
	];

	expected = [
		'row-major',
		'row-major'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = order( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `null` if provided a minimal ndarray-like object which does not have a recognized order', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		{
			'shape': [ 2, 2, 2 ],
			'strides': [ 2, 3, 1 ]
		}
	];

	expected = [
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = order( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
