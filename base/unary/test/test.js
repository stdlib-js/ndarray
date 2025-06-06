/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var ndarray = require( './../../../ctor' );
var zeros = require( '@stdlib/array/zeros' );
var ones = require( '@stdlib/array/ones' );
var shape2strides = require( './../../../base/shape2strides' );
var strides2offset = require( './../../../base/strides2offset' );
var numel = require( './../../../base/numel' );
var unary = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided input and output ndarrays which do not have the same number of dimensions', function test( t ) {
	var shapes;
	var i;

	shapes = [
		[ [ 4, 2, 1 ], [ 4, 2 ] ],
		[ [ 2, 2 ], [ 2, 2, 2 ] ],
		[ [ 1, 1, 1, 1 ], [ 1, 1, 1 ] ],
		[ [ 2, 2, 1, 2 ], [ 2, 1, 2 ] ],
		[ [ 1, 1, 4, 2, 2, 2 ], [ 10, 2 ] ],
		[ [ 1, 1, 1, 1 ], [ 1, 1, 1 ] ]
	];

	for ( i = 0; i < shapes.length; i++ ) {
		t.throws( badValue( shapes[i][0], shapes[i][1] ), Error, 'throws an error when input shape is ' + shapes[i][0] + ' and output shape is ' + shapes[i][1] );
	}
	t.end();

	function scale( z ) {
		return z * 10.0;
	}

	function badValue( sh1, sh2 ) {
		return function badValue() {
			var dtype;
			var ord;
			var st1;
			var st2;
			var o1;
			var o2;
			var x;
			var y;

			ord = 'row-major';
			dtype = 'float64';

			st1 = shape2strides( sh1, ord );
			st2 = shape2strides( sh2, ord );
			o1 = strides2offset( sh1, st1 );
			o2 = strides2offset( sh2, st2 );

			x = ndarray( dtype, ones( numel( sh1 ), dtype ), sh1, st1, o1, ord );
			y = ndarray( dtype, zeros( numel( sh2 ), dtype ), sh2, st2, o2, ord );

			unary( [ x, y ], scale );
		};
	}
});

tape( 'the function throws an error if provided input and output ndarrays which do not have the same shape', function test( t ) {
	var shapes;
	var i;

	shapes = [
		[ [ 4, 2, 1 ], [ 4, 2, 2 ] ],
		[ [ 3, 3 ], [ 2, 2 ] ],
		[ [ 5, 5, 5 ], [ 5, 5, 4 ] ],
		[ [ 1, 1, 1 ], [ 2, 2, 2 ] ],
		[ [ 1, 4, 1, 2, 2 ], [ 3, 8 ] ],
		[ [ 10, 2, 1 ], [ 1, 2, 10 ] ]
	];

	for ( i = 0; i < shapes.length; i++ ) {
		t.throws( badValue( shapes[i][0], shapes[i][1] ), Error, 'throws an error when input shape is ' + shapes[i][0] + ' and output shape is ' + shapes[i][1] );
	}
	t.end();

	function scale( z ) {
		return z * 10.0;
	}

	function badValue( sh1, sh2 ) {
		return function badValue() {
			var dtype;
			var ord;
			var st1;
			var st2;
			var o1;
			var o2;
			var x;
			var y;

			ord = 'row-major';
			dtype = 'float64';

			st1 = shape2strides( sh1, ord );
			st2 = shape2strides( sh2, ord );
			o1 = strides2offset( sh1, st1 );
			o2 = strides2offset( sh2, st2 );

			x = ndarray( dtype, ones( numel( sh1 ), dtype ), sh1, st1, o1, ord );
			y = ndarray( dtype, zeros( numel( sh2 ), dtype ), sh2, st2, o2, ord );

			unary( [ x, y ], scale );
		};
	}
});
