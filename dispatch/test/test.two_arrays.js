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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var unary = require( './../../base/unary' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dtype = require( './../../base/buffer-dtype' );
var ndarray = require( './../../ctor' );
var dispatch = require( './../lib' );


// FIXTURES //

var forEach = require( './fixtures/foreach.js' );
var map1N = require( './fixtures/map1n.js' );
var fill = require( './fixtures/fill.js' );
var sum = require( './fixtures/sum.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if not provided an ndarray for the first argument', function test( t ) {
	var values;
	var types;
	var data;
	var fcn;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	fcn = dispatch( unary, types, data, 2, 1, 1 );

	values = [
		'5',
		5,
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var ybuf = new Float64Array( 10 );
			var y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );
			fcn( value, y );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an ndarray for the second argument', function test( t ) {
	var values;
	var types;
	var data;
	var fcn;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	fcn = dispatch( unary, types, data, 2, 1, 1 );

	values = [
		'5',
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var xbuf = new Float64Array( 10 );
			var x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );
			fcn( x, value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided insufficient arguments', function test( t ) {
	var values;
	var types;
	var data;
	var xbuf;
	var f;
	var x;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	f = dispatch( unary, types, data, 2, 1, 1 );

	xbuf = new Float64Array( 10 );
	x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );

	values = [
		[],
		[ x ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( wrapper( values[i] ), Error, 'throws an error when provided ' + values[ i ].length + ' arguments' );
	}
	t.end();

	function wrapper( args ) {
		return function fcn() {
			f.apply( null, args );
		};
	}
});

tape( 'the function returns a function which throws an error if provided too many arguments', function test( t ) {
	var values;
	var types;
	var data;
	var xbuf;
	var ybuf;
	var f;
	var x;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	f = dispatch( unary, types, data, 2, 1, 1 );

	xbuf = new Float64Array( 10 );
	x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );

	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );

	values = [
		[ x, y, y ],
		[ x, y, y, y ],
		[ x, y, y, y, y ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( wrapper( values[i] ), Error, 'throws an error when provided ' + values[ i ].length + ' arguments' );
	}
	t.end();

	function wrapper( args ) {
		return function fcn() {
			f.apply( null, args );
		};
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a ndarray function supporting the provided array argument data types', function test( t ) {
	var values;
	var types;
	var data;
	var xbuf;
	var fcn;
	var x;
	var i;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [ abs, abs ];
	fcn = dispatch( unary, types, data, 2, 1, 1 );

	xbuf = new Float64Array( 4 );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

	values = [
		new Uint8Array( 4 ),
		new Int32Array( 4 ),
		[ 0, 0, 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided an array having data type: ' + dtype( values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = ndarray( dtype( value ), value, [ value.length ], [ 1 ], 0, 'row-major' );

			fcn( x, y );
		};
	}
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function; no data; only input arrays)', function test( t ) {
	var types;
	var xbuf;
	var ybuf;
	var ctx;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	fcn = dispatch( sum( ctx ), types, null, 2, 2, 0 );

	ctx.sum = 0;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );
	t.strictEqual( ctx.sum, 20.0, 'returns expected value' );

	ctx.sum = 5;

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );
	t.strictEqual( ctx.sum, 25.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function; no data; only output arrays)', function test( t ) {
	var expected;
	var types;
	var xbuf;
	var ybuf;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	fcn = dispatch( fill( 3.0 ), types, null, 2, 0, 2 );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( xbuf.length );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function array; no data; only input arrays)', function test( t ) {
	var types;
	var fcns;
	var xbuf;
	var ybuf;
	var fcn;
	var ctx;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	fcns = [
		sum( ctx ),
		sum( ctx )
	];
	fcn = dispatch( fcns, types, null, 2, 2, 0 );

	ctx.sum = 0;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );
	t.strictEqual( ctx.sum, 20.0, 'returns expected value' );

	ctx.sum = 5;

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );
	t.strictEqual( ctx.sum, 25.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function array; no data; only output arrays)', function test( t ) {
	var expected;
	var types;
	var fcns;
	var xbuf;
	var ybuf;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	fcns = [
		fill( 3.0 ),
		fill( 4.0 )
	];
	fcn = dispatch( fcns, types, null, 2, 0, 2 );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( xbuf.length );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function; data; only input arrays)', function test( t ) {
	var expected;
	var types;
	var data;
	var xbuf;
	var ybuf;
	var fcn;
	var cnt;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];

	fcn = dispatch( forEach, types, data, 2, 2, 0 );
	cnt = 0;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function; data; only output arrays)', function test( t ) {
	var expected;
	var types;
	var data;
	var xbuf;
	var ybuf;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		three,
		four
	];

	fcn = dispatch( map1N, types, data, 2, 0, 2 );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function; data; input and output arrays)', function test( t ) {
	var expected;
	var types;
	var data;
	var xbuf;
	var ybuf;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		abs,
		abs
	];

	fcn = dispatch( unary, types, data, 2, 1, 1 );

	xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function array; data; only input arrays)', function test( t ) {
	var expected;
	var types;
	var data;
	var fcns;
	var xbuf;
	var ybuf;
	var fcn;
	var cnt;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];
	fcns = [
		forEach,
		forEach
	];
	fcn = dispatch( fcns, types, data, 2, 2, 0 );
	cnt = 0;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function array; data; only output arrays)', function test( t ) {
	var expected;
	var types;
	var data;
	var fcns;
	var xbuf;
	var ybuf;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		three,
		four
	];
	fcns = [
		map1N,
		map1N
	];
	fcn = dispatch( fcns, types, data, 2, 0, 2 );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}
});

tape( 'the function returns a function which invokes a callback for indexed ndarray elements (function array; data; input and output arrays)', function test( t ) {
	var expected;
	var types;
	var data;
	var fcns;
	var xbuf;
	var ybuf;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		abs,
		abs
	];
	fcns = [
		unary,
		unary
	];
	fcn = dispatch( fcns, types, data, 2, 1, 1 );

	xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	x = ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	x = ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );

	fcn( x, y );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns one or more output arrays, if one or more output arrays is specified, and otherwise returns `undefined`', function test( t ) {
	var types;
	var data;
	var xbuf;
	var ybuf;
	var out;
	var ctx;
	var fcn;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	// No output arrays...
	ctx = {
		'sum': 0
	};
	fcn = dispatch( sum( ctx ), types, null, 2, 2, 0 );

	xbuf = new Float64Array( 10 );
	x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );

	out = fcn( x, y );
	t.strictEqual( out, void 0, 'returns expected value' );

	// One output array...
	data = [
		abs,
		abs
	];
	fcn = dispatch( unary, types, data, 2, 1, 1 );

	xbuf = new Float64Array( 10 );
	x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );

	out = fcn( x, y );
	t.strictEqual( out, y, 'returns expected value' );

	fcn = dispatch( fill( 3.0 ), types, null, 2, 1, 1 );

	xbuf = new Float64Array( 10 );
	x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );

	out = fcn( x, y );
	t.strictEqual( out, y, 'returns expected value' );

	// Two output arrays...
	fcn = dispatch( fill( 3.0 ), types, null, 2, 0, 2 );

	xbuf = new Float64Array( 10 );
	x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );
	ybuf = new Float64Array( xbuf.length );
	y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );

	out = fcn( x, y );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], x, 'returns expected value' );
	t.strictEqual( out[ 1 ], y, 'returns expected value' );

	t.end();
});
