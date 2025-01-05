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
var ones = require( '@stdlib/array/ones' );
var ndarray = require( './../../ctor' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var Float64Array = require( '@stdlib/array/float64' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var numel = require( './../../base/numel' );
var dfill = require( '@stdlib/blas/ext/base/dfill' );
var blockSize = require( './../../base/unary-tiling-block-size' );
var forEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		{
			'data': true
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, naryFunction( log, 1 ) );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var x;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	x = ndarray( 'generic', ones( 4, 'generic' ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( x, value );
		};
	}
});

tape( 'the function applies a callback to each indexed element in the input ndarray (row-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	forEach( x, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element in the input ndarray (column-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	forEach( x, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element in the input ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	forEach( x, scale );
	expected = ones( x.length*2, dt );
	dfill.ndarray( x.length, 100.0, expected, st[2], expected.length/2 );

	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element in the input ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	forEach( x, scale );
	expected = ones( x.length*2, dt );
	dfill.ndarray( x.length, 100.0, expected, st[0], expected.length/2 );

	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var expected;
	var ctx;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	ctx = {
		'count': 0
	};
	forEach( x, scale, ctx );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});

tape( 'the function invokes a provided callback with three arguments (row-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var i;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];
	forEach( x, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( arrays[ i ], expected[ i ], 'returns expected value' );
	}

	t.end();

	function scale( v, i, arr ) {
		values.push( v );
		indices.push( i );
		arrays.push( arr );
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});

tape( 'the function invokes a provided callback with three arguments (column-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var i;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];
	forEach( x, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 1, 0, 0 ],
		[ 0, 0, 1 ],
		[ 1, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( arrays[ i ], expected[ i ], 'returns expected value' );
	}

	t.end();

	function scale( v, i, arr ) {
		values.push( v );
		indices.push( i );
		arrays.push( arr );
		x.set( i[0], i[1], i[2], v*10.0 );
	}
});
