/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var array = require( './../../../../array' );
var hasEqualShape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hasEqualShape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two ndarrays having the same shape', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		[ array( [ 1, 2, 3, 4 ] ), array( [ 5, 6, 7, 8 ] ) ],
		[ array( [ [ 1, 2 ], [ 3, 4 ] ] ), array( [ [ 5, 6 ], [ 7, 8 ] ] ) ]
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = hasEqualShape( values[ i ][ 0 ], values[ i ][ 1 ] );
		t.strictEqual( bool, true, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided two ndarrays having the same shape', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		[ array( [ 1, 2, 3, 4 ] ), array( [ 1, 2, 3 ] ) ],
		[ array( [ [ 1, 2 ], [ 3, 4 ] ] ), array( [ 1, 2, 3, 4 ] ) ],
		[ array( [ [ 1, 2 ], [ 3, 4 ] ] ), array( [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ) ]
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = hasEqualShape( values[ i ][ 0 ], values[ i ][ 1 ] );
		t.strictEqual( bool, false, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
