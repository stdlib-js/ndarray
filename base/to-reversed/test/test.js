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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var typedarray = require( '@stdlib/array/typed' );
var scalar2ndarray = require( './../../../base/from-scalar' );
var ndarray2array = require( './../../../to-array' );
var baseCtor = require( './../../../base/ctor' );
var ctor = require( './../../../ctor' );
var toReversed = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toReversed, 'function', 'main export is a function' );
	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a new zero-dimensional array (base)', function test( t ) {
	var actual;
	var x;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );

	actual = toReversed( x );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), x.get(), 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a new zero-dimensional array (base, offset)', function test( t ) {
	var actual;
	var x;

	x = new baseCtor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );

	actual = toReversed( x );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a new zero-dimensional array (non-base, offset, read-only)', function test( t ) {
	var actual;
	var x;

	x = new ctor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );

	actual = toReversed( x );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), false, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a new zero-dimensional array (non-base, offset, writable)', function test( t ) {
	var actual;
	var x;

	x = new ctor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );

	actual = toReversed( x );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a new ndarray where the order of the elements of an input ndarray is reversed along each dimension (ndims=1)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var i;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 6 ];
	st = [ 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = toReversed( x );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 14, 12, 10, 8, 6, 4 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a new ndarray where the order of the elements of an input ndarray is reversed along each dimension (ndims=2)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 4, 3 ];
	st = [ 6, 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = toReversed( x );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 26, 24, 22 ],
		[ 20, 18, 16 ],
		[ 14, 12, 10 ],
		[ 8, 6, 4 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a new ndarray where the order of the elements of an input ndarray is reversed along each dimension (ndims=3)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = typedarray( zeroTo( 100 ), 'float64' );
	sh = [ 2, 4, 3 ];
	st = [ 24, 6, 2 ];
	o = 10;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = toReversed( x );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.notEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[
			[ 56, 54, 52 ],
			[ 50, 48, 46 ],
			[ 44, 42, 40 ],
			[ 38, 36, 34 ]
		],
		[
			[ 32, 30, 28 ],
			[ 26, 24, 22 ],
			[ 20, 18, 16 ],
			[ 14, 12, 10 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
