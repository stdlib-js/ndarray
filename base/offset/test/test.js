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
var Float64Array = require( '@stdlib/array/float64' );
var zeros = require( './../../../zeros' );
var ndarray = require( './../../../ctor' );
var offset = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof offset, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a zero-dimensional ndarray, the function returns 0', function test( t ) {
	t.strictEqual( offset( zeros( [] ) ), 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index offset', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] ),
		ndarray( 'float64', new Float64Array( 100 ), [ 2, 2 ], [ 2, 1 ], 50, 'row-major' ),
		ndarray( 'float64', new Float64Array( 100 ), [ 2, 2 ], [ 2, 1 ], 35, 'row-major' ),
		ndarray( 'float64', new Float64Array( 100 ), [ 2, 2 ], [ -2, -1 ], 3, 'row-major' )
	];

	expected = [
		0,
		0,
		0,
		0,
		0,
		50,
		35,
		3
	];

	for ( i = 0; i < values.length; i++ ) {
		n = offset( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, strides)', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ],
			'strides': [ -9, -3, -1 ]
		},
		{
			'shape': [ 1, 1 ],
			'strides': [ 1, 1 ]
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'strides': [ 0, 0, 0, 1 ]
		},
		{
			'shape': [ 1, 2, 3, 4 ],
			'strides': [ 24, 12, 4, 1 ]
		},
		{
			'shape': [ 5 ],
			'strides': [ -1 ]
		},
		{
			'shape': [],
			'strides': [ 0 ]
		}
	];

	expected = [
		26,
		0,
		0,
		0,
		4,
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		n = offset( values[ i ] );
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
			'shape': [ 3, 3, 3 ],
			'strides': null
		},
		{
			'shape': [ 1, 1 ]
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'strides': null
		},
		{
			'shape': [ 1, 2, 3, 4 ]
		},
		{
			'shape': [ 5 ],
			'strides': null
		},
		{
			'shape': []
		}
	];

	expected = [
		0,
		0,
		0,
		0,
		0,
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		n = offset( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (offset)', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		{
			'offset': 3
		},
		{
			'offset': 1
		},
		{
			'offset': 0
		},
		{
			'offset': 4
		},
		{
			'offset': 5
		}
	];

	expected = [
		3,
		1,
		0,
		4,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		n = offset( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for '+values[ i ] );
	}
	t.end();
});
