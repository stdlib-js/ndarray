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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var array2ndarray = require( './../../../base/from-array' );
var zip2views1d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zip2views1d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided no input arrays', function test( t ) {
	var expected;
	var actual;
	var labels;

	labels = [];

	actual = zip2views1d( [], labels );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty input arrays', function test( t ) {
	var expected;
	var actual;
	var labels;

	labels = [ 'x', 'y' ];

	actual = zip2views1d( [ array2ndarray( [] ), array2ndarray( [] ) ], labels ); // eslint-disable-line max-len
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips one array to an array of objects', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var i;

	labels = [ 'x' ];

	x = array2ndarray( [ 1, 2 ], 'row-major' );

	actual = zip2views1d( [ x ], labels );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 1
		},
		{
			'x': 2
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips two arrays to an array of objects', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var y;
	var i;

	labels = [ 'x', 'y' ];

	x = array2ndarray( [ 1, 2 ], 'row-major' );
	y = array2ndarray( [ 3, 4 ], 'row-major' );

	actual = zip2views1d( [ x, y ], labels );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 2,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips three arrays to an array of objects', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var y;
	var z;
	var i;

	labels = [ 'x', 'y', 'z' ];

	x = array2ndarray( [ 1, 2 ], 'row-major' );
	y = array2ndarray( [ 3, 4 ], 'row-major' );
	z = array2ndarray( [ 5, 6 ], 'row-major' );

	actual = zip2views1d( [ x, y, z ], labels );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 1,
			'y': 3,
			'z': 5
		},
		{
			'x': 2,
			'y': 4,
			'z': 6
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views on the input arrays', function test( t ) {
	var expected;
	var actual;
	var labels;
	var xbuf;
	var ybuf;
	var x;
	var y;

	labels = [ 'x', 'y' ];

	xbuf = [ 1, 2 ];
	x = array2ndarray( xbuf, 'row-major' );

	ybuf = [ 3, 4 ];
	y = array2ndarray( ybuf, 'row-major' );

	actual = zip2views1d( [ x, y ], labels );

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 3, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 2, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	actual[ 0 ].x = -99;
	actual[ 1 ].y = 99;

	t.strictEqual( actual[ 0 ].x, -99, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 3, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 2, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 99, 'returns expected value' );

	expected = [ -99, 2 ];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	expected = [ 3, 99 ];
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});
