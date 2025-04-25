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
var shape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof shape, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a zero-dimensional ndarray, the function returns an empty array', function test( t ) {
	t.deepEqual( shape( zeros( [] ), false ), [], 'returns expected value' );
	t.end();
});

tape( 'the function returns the shape of an ndarray', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] )
	];

	expected = [
		values[ 0 ].shape,
		values[ 1 ].shape,
		values[ 2 ].shape,
		values[ 3 ].shape,
		values[ 4 ].shape
	];

	for ( i = 0; i < values.length; i++ ) {
		out = shape( values[ i ], false );
		t.deepEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape)', function test( t ) {
	var expected;
	var values;
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

	expected = [
		values[ 0 ].shape,
		values[ 1 ].shape,
		values[ 2 ].shape,
		values[ 3 ].shape,
		values[ 4 ].shape
	];

	for ( i = 0; i < values.length; i++ ) {
		out = shape( values[ i ], false );
		t.deepEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function supports returning a guaranteed copy of an input ndarray shape', function test( t ) {
	var expected;
	var values;
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

	expected = [
		values[ 0 ].shape,
		values[ 1 ].shape,
		values[ 2 ].shape,
		values[ 3 ].shape,
		values[ 4 ].shape
	];

	for ( i = 0; i < values.length; i++ ) {
		out = shape( values[ i ], true );
		t.notEqual( out, values[ i ].shape, 'returns expected value' );
		t.deepEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});
