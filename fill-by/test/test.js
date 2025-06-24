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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zeros = require( '@stdlib/array/zeros' );
var ndarray = require( './../../ctor' );
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var numel = require( './../../base/numel' );
var scalar2ndarray = require( './../../from-scalar' );
var fillBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fillBy, 'function', 'main export is a function' );
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
			fillBy( value, fcn );
		};
	}

	function fcn() {
		return 10.0;
	}
});

tape( 'the function throws an error if provided a first argument which is a read-only ndarray', function test( t ) {
	var x = scalar2ndarray( 0.0, {
		'dtype': 'float64',
		'readonly': true
	});
	t.throws( badValue( x ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillBy( value, fcn );
		};
	}

	function fcn() {
		return 10.0;
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var x;
	var i;

	x = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillBy( x, value );
		};
	}
});

tape( 'the function fills a 0-dimensional input ndarray according to a callback function', function test( t ) {
	var expected;
	var x;

	x = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});

	fillBy( x, fcn );

	expected = new Float64Array( [ 10.0 ] );
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	t.end();

	function fcn() {
		return 10.0;
	}
});

tape( 'the function fills a 0-dimensional input ndarray according to a callback function (accessors)', function test( t ) {
	var expected;
	var x;

	x = scalar2ndarray( new Complex128( 0.0, 0.0 ), {
		'dtype': 'complex128'
	});

	fillBy( x, fcn );

	expected = new Complex128Array( [ 10.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( x.data, expected ), true, 'returns expected value' );

	t.end();

	function fcn() {
		return new Complex128( 10.0, 0.0 );
	}
});

tape( 'the function fills an input ndarray according to a callback function (row-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0
	]);

	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return 10.0;
	}
});

tape( 'the function fills an input ndarray according to a callback function (row-major, contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0
	]);

	t.strictEqual( isSameComplex128Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return new Complex128( -10.0, -20.0 );
	}
});

tape( 'the function fills an input ndarray according to a callback function (column-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0
	]);

	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return 10.0;
	}
});

tape( 'the function fills an input ndarray according to a callback function (column-major, contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0
	]);

	t.strictEqual( isSameComplex128Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return new Complex128( -10.0, -20.0 );
	}
});

tape( 'the function fills an input ndarray according to a callback function (row-major, non-contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return 10.0;
	}
});

tape( 'the function fills an input ndarray according to a callback function (row-major, non-contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return new Complex128( 10.0, 0.0 );
	}
});

tape( 'the function fills an input ndarray according to a callback function (column-major, non-contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		10.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return 10.0;
	}
});

tape( 'the function fills an input ndarray according to a callback function (row-major, non-contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );

	fillBy( x, fcn );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( x.data, expected ), true, 'returns expected value' );
	t.end();

	function fcn() {
		return new Complex128( 10.0, 0.0 );
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ctx;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	buf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];

	ctx = {
		'scalar': 10.0
	};
	fillBy( x, fcn, ctx );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	expected = [
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 2, 0, 0 ],
		[ 2, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );
	t.end();

	function fcn( value, idx, array ) {
		values.push( value );
		indices.push( idx );
		arrays.push( array );
		return this.scalar; // eslint-disable-line no-invalid-this
	}
});
