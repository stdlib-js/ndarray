/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var DataType = require( './../../../../dtype-ctor' );
var structFactory = require( '@stdlib/dstructs/struct' );
var dtypes = require( './../../../../base/dtype-strings' );
var sameKindCasts = require( './../../../../same-kind-casts' );
var str2enum = require( './../../../../base/dtype-str2enum' );
var isSameKindCast = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();
var SAME_KIND_CASTS = sameKindCasts();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameKindCast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (strings)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			expected = ( SAME_KIND_CASTS[ dt ][ DTYPES[j] ] > 0 );
			actual = isSameKindCast( dt, DTYPES[ j ] );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt+'. to: '+DTYPES[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (enums)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			expected = ( SAME_KIND_CASTS[ dt ][ DTYPES[j] ] > 0 );
			actual = isSameKindCast( str2enum( dt ), str2enum( DTYPES[ j ] ) );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt+'. to: '+DTYPES[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			expected = ( SAME_KIND_CASTS[ dt ][ DTYPES[j] ] > 0 );
			actual = isSameKindCast( new DataType( dt ), new DataType( DTYPES[ j ] ) );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt+'. to: '+DTYPES[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isSameKindCast( dt, dt );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isSameKindCast( values[ 0 ], values[ 1 ] );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isSameKindCast( new DataType( dt ), new DataType( dt ) );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isSameKindCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ) );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});
