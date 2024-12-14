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
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var numel = require( './../../base/numel' );
var dfill = require( '@stdlib/blas/ext/base/dfill' );
var sfill = require( '@stdlib/blas/ext/base/sfill' );
var blockSize = require( './../../base/unary-tiling-block-size' );
var map = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map, 'function', 'main export is a function' );
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
			map( value, scale );
		};
	}

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function throws an error if a callback argument which is not a function', function test( t ) {
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
			map( x, value );
		};
	}
});

tape( 'the function throws an error if callback argument which is not a function (options)', function test( t ) {
	var values;
	var opts;
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
	opts = {
		'dtype': 'float64'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map( x, opts, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		[]
	];
	x = ndarray( 'generic', ones( 4, 'generic' ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+ values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map( x, value, scale );
		};
	}

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var x;
	var i;

	values = [
		'foo',
		'bar',
		1,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];
	x = ndarray( 'generic', ones( 4, 'generic' ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+ values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dtype': value
			};
			map( x, opts, scale );
		};
	}

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (row-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	y = map( x, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (column-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	y = map( x, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (row-major, contiguous, options)', function test( t ) {
	var expected;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );
	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	opts = {};
	y = map( x, opts, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	opts = {
		'dtype': 'float32'
	};
	y = map( x, opts, scale );

	expected = new Float32Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat32Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (column-major, contiguous, options)', function test( t ) {
	var expected;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );
	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	opts = {};
	y = map( x, opts, scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	opts = {
		'dtype': 'float32'
	};
	y = map( x, opts, scale );

	expected = new Float32Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat32Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (row-major, non-contiguous, large arrays)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	y = map( x, scale );
	expected = new Float64Array( y.length );
	dfill( y.length, 10.0, expected, 1 );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (row-major, non-contiguous, large arrays, options)', function test( t ) {
	var expected;
	var bsize;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	opts = {
		'dtype': 'float32'
	};
	y = map( x, opts, scale );
	expected = new Float32Array( y.length );
	sfill( y.length, 10.0, expected, 1 );

	t.strictEqual( isSameFloat32Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (column-major, non-contiguous, large arrays)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	y = map( x, scale );

	expected = new Float64Array( y.length );
	dfill( y.length, 10.0, expected, 1 );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element in an input ndarray and returns an output ndarray with mapped values (column-major, non-contiguous, large arrays, options)', function test( t ) {
	var expected;
	var bsize;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	opts = {
		'dtype': 'float32'
	};
	y = map( x, opts, scale );

	expected = new Float32Array( y.length );
	sfill( y.length, 10.0, expected, 1 );

	t.strictEqual( isSameFloat32Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
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
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	ctx = {
		'count': 0
	};
	y = map( x, scale, ctx );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function scale( z ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return z * 10.0;
	}
});

tape( 'the function supports providing a callback execution context (options)', function test( t ) {
	var expected;
	var ctx;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	ctx = {
		'count': 0
	};
	y = map( x, {}, scale, ctx );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function scale( z ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return z * 10.0;
	}
});
