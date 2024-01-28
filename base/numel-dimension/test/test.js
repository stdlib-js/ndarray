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
var numelDimension = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof numelDimension, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a zero-dimensional ndarray', function test( t ) {
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		numelDimension( zeros( [] ), 0 );
	}
});

tape( 'the function throws an error if provided a dimension index which exceeds the number of dimensions (positive)', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		numelDimension( zeros( [ 3, 3 ] ), 100 );
	}
});

tape( 'the function throws an error if provided a dimension index which exceeds the number of dimensions (negative)', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		numelDimension( zeros( [ 3, 3 ] ), -100 );
	}
});

tape( 'the function returns an ndarray dimension size', function test( t ) {
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
		values[ 0 ].shape[ dims[ 0 ] ],
		values[ 1 ].shape[ dims[ 1 ] ],
		values[ 2 ].shape[ dims[ 2 ] ],
		values[ 3 ].shape[ dims[ 3 ] ],
		values[ 4 ].shape[ dims[ 4 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = numelDimension( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
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
		0,
		4,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		out = numelDimension( values[ i ], dims[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});
