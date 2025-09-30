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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../base/assert/is-read-only' );
var isEqualDataType = require( './../../base/assert/is-equal-data-type' );
var zeroTo = require( '@stdlib/array/zero-to' );
var ndarray = require( './../../ctor' );
var getShape = require( './../../shape' );
var getData = require( './../../data-buffer' );
var getDType = require( './../../dtype' );
var scalar2ndarray = require( './../../from-scalar' );
var ndarray2array = require( './../../to-array' );
var reverse = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reverse, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reverse( value );
		};
	}
});

tape( 'the function returns a read-only view of a zero-dimensional input ndarray', function test( t ) {
	var actual;
	var x;

	x = scalar2ndarray( 10.0, {
		'dtype': 'float64',
		'order': 'row-major'
	});

	actual = reverse( x );

	t.notEqual( actual, x, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), x.get(), 'returns expected value' );
	t.strictEqual( getData( actual ), getData( x ), 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), getDType( x ) ), true, 'returns expected value' );
	t.deepEqual( getShape( x ), getShape( actual ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a read-only view of an input ndarray in which the order of elements along each dimension is reversed (ndims=1)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 10, 'float64' );
	sh = [ 5 ];
	st = [ 2 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = reverse( x );
	expected = [ 8, 6, 4, 2, 0 ];

	t.notEqual( actual, x, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );
	t.strictEqual( getData( actual ), getData( x ), 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), getDType( x ) ), true, 'returns expected value' );
	t.deepEqual( getShape( x ), getShape( actual ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a read-only view of an input ndarray in which the order of elements along each dimension is reversed (ndims=2)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 12, 'float64' );
	sh = [ 3, 2 ];
	st = [ 4, 2 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = reverse( x );
	expected = [
		[ 10, 8 ],
		[ 6, 4 ],
		[ 2, 0 ]
	];

	t.notEqual( actual, x, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );
	t.strictEqual( getData( actual ), getData( x ), 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), getDType( x ) ), true, 'returns expected value' );
	t.deepEqual( getShape( x ), getShape( actual ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a read-only view of an input ndarray in which the order of elements along each dimension is reversed (ndims=3)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 24, 'float64' );
	sh = [ 2, 3, 2 ];
	st = [ 12, 4, 2 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = reverse( x );
	expected = [
		[
			[ 22, 20 ],
			[ 18, 16 ],
			[ 14, 12 ]
		],
		[
			[ 10, 8 ],
			[ 6, 4 ],
			[ 2, 0 ]
		]
	];

	t.notEqual( actual, x, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );
	t.strictEqual( getData( actual ), getData( x ), 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), getDType( x ) ), true, 'returns expected value' );
	t.deepEqual( getShape( x ), getShape( actual ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
