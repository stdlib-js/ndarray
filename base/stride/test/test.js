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
var stride = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stride, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a zero-dimensional ndarray', function test( t ) {
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		stride( zeros( [] ), 0 );
	}
});

tape( 'the function throws an error if provided a dimension index which exceeds the number of dimensions (positive)', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		stride( zeros( [ 3, 3 ] ), 100 );
	}
});

tape( 'the function throws an error if provided a dimension index which exceeds the number of dimensions (negative)', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		stride( zeros( [ 3, 3 ] ), -100 );
	}
});

tape( 'the function returns an ndarray stride', function test( t ) {
	var expected;
	var values;
	var dims;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] )
	];

	dims = [
		1,
		0,
		2,
		3,
		0
	];

	expected = [
		values[ 0 ].strides[ dims[ 0 ] ],
		values[ 1 ].strides[ dims[ 1 ] ],
		values[ 2 ].strides[ dims[ 2 ] ],
		values[ 3 ].strides[ dims[ 3 ] ],
		values[ 4 ].strides[ dims[ 4 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = stride( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape)', function test( t ) {
	var expected;
	var values;
	var dims;
	var out;
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

	dims = [
		1,
		0,
		2,
		3,
		0
	];

	expected = [
		3,
		1,
		3,
		1,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		out = stride( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, order=row-major)', function test( t ) {
	var expected;
	var values;
	var dims;
	var out;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ],
			'order': 'row-major'
		},
		{
			'shape': [ 1, 1 ],
			'order': 'row-major'
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'order': 'row-major'
		},
		{
			'shape': [ 1, 2, 3, 4 ],
			'order': 'row-major'
		},
		{
			'shape': [ 5 ],
			'order': 'row-major'
		}
	];

	dims = [
		1,
		0,
		2,
		3,
		0
	];

	expected = [
		3,
		1,
		3,
		1,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		out = stride( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, order=column-major)', function test( t ) {
	var expected;
	var values;
	var dims;
	var out;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ],
			'order': 'column-major'
		},
		{
			'shape': [ 1, 1 ],
			'order': 'column-major'
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'order': 'column-major'
		},
		{
			'shape': [ 1, 2, 3, 4 ],
			'order': 'column-major'
		},
		{
			'shape': [ 5 ],
			'order': 'column-major'
		}
	];

	dims = [
		1,
		0,
		2,
		3,
		0
	];

	expected = [
		3,
		1,
		9,
		6,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		out = stride( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, strides)', function test( t ) {
	var expected;
	var values;
	var dims;
	var out;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ],
			'strides': [ 9, 3, 1 ]
		},
		{
			'shape': [ 1, 1 ],
			'strides': [ 1, 1 ]
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'strides': [ 0, 0, 3, 1 ]
		},
		{
			'shape': [ 1, 2, 3, 4 ],
			'strides': [ 1, 1, 2, 6 ]
		},
		{
			'shape': [ 5 ],
			'strides': [ 5 ]
		}
	];

	dims = [
		1,
		0,
		2,
		3,
		0
	];

	expected = [
		values[ 0 ].strides[ dims[ 0 ] ],
		values[ 1 ].strides[ dims[ 1 ] ],
		values[ 2 ].strides[ dims[ 2 ] ],
		values[ 3 ].strides[ dims[ 3 ] ],
		values[ 4 ].strides[ dims[ 4 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = stride( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});
