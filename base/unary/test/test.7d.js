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
var zeros = require( '@stdlib/array/zeros' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var ndarray = require( './../../../ctor' );
var shape2strides = require( './../../../base/shape2strides' );
var strides2offset = require( './../../../base/strides2offset' );
var numel = require( './../../../base/numel' );
var dfill = require( '@stdlib/blas/ext/base/dfill' );
var zfill = require( '@stdlib/blas/ext/base/zfill' );
var blockSize = require( './../../../base/unary-tiling-block-size' );
var unary = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, singleton dimensions)', function test( t ) {
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
	sh = [ 4, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, singleton dimensions, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 4, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 2, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z) * 10.0, imag(z) * 10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, empty)', function test( t ) {
	var expected;
	var x;
	var y;

	x = ndarray( 'float64', oneTo( 4, 'float64' ), [ 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1 ], 0, 'row-major' );
	y = ndarray( 'float64', zeros( 4, 'float64' ), [ 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1 ], 0, 'row-major' );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, contiguous)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, contiguous, negative strides)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ -8, -8, -8, -4, -2, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, same sign strides)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 16, 16, 16, 8, 4, 2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		0.0,
		0.0,
		50.0,
		60.0,
		0.0,
		0.0,
		90.0,
		100.0,
		0.0,
		0.0,
		130.0,
		140.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, mixed sign strides)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ -16, 16, -16, 8, -4, 2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		0.0,
		0.0,
		50.0,
		60.0,
		0.0,
		0.0,
		90.0,
		100.0,
		0.0,
		0.0,
		130.0,
		140.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ bsize*2, 1, 2, 1, 2, 1, 2 ];
	st = [ 16, -16, 8, 8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, bsize*2, 1, 2, 1, 1, 2 ];
	st = [ bsize*16, -8, 8, 4, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, bsize*2, 1, 2, 1, 2 ];
	st = [ bsize*16, -bsize*16, 8, 8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, bsize*2, 1, 1, 2 ];
	st = [ bsize*16, -bsize*16, bsize*8, 4, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, bsize*2, 1, 2 ];
	st = [ bsize*16, -bsize*16, bsize*8, bsize*8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, 1, bsize*2, 2 ];
	st = [ bsize*16, -bsize*16, bsize*8, bsize*8, -bsize*8, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, 2, 1, bsize*2 ];
	st = [ bsize*16, -bsize*16, bsize*8, bsize*8, -bsize*4, bsize*4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 6 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 2, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0,
		90.0,
		100.0,
		110.0,
		120.0,
		130.0,
		140.0,
		150.0,
		160.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, contiguous, accessors, negative strides)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1, 2, 1, 2 ];
	st = [ -8, -8, -4, -4, -2, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 2, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0,
		90.0,
		100.0,
		110.0,
		120.0,
		130.0,
		140.0,
		150.0,
		160.0,
		170.0,
		180.0,
		190.0,
		200.0,
		210.0,
		220.0,
		230.0,
		240.0,
		250.0,
		260.0,
		270.0,
		280.0,
		290.0,
		300.0,
		310.0,
		320.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 16, 16, 16, 8, 4, 2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		0.0,
		0.0,
		0.0,
		0.0,
		90.0,
		100.0,
		110.0,
		120.0,
		0.0,
		0.0,
		0.0,
		0.0,
		170.0,
		180.0,
		190.0,
		200.0,
		0.0,
		0.0,
		0.0,
		0.0,
		250.0,
		260.0,
		270.0,
		280.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ -16, 16, -16, -8, 4, -2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		0.0,
		0.0,
		0.0,
		0.0,
		90.0,
		100.0,
		110.0,
		120.0,
		0.0,
		0.0,
		0.0,
		0.0,
		170.0,
		180.0,
		190.0,
		200.0,
		0.0,
		0.0,
		0.0,
		0.0,
		250.0,
		260.0,
		270.0,
		280.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2, 1, 2, 1, 2 ];
	st = [ 16, -16, 8, 8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1, 1, 2, 1, 2 ];
	st = [ bsize*16, -8, 8, 8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2, 1, 2, 1, 2 ];
	st = [ bsize*16, -bsize*16, 8, 8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 2, bsize*2, 1, 1, 2 ];
	st = [ bsize*16, -bsize*16, bsize*8, 4, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 2, 1, bsize*2, 1, 2 ];
	st = [ bsize*16, -bsize*16, bsize*8, bsize*8, -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 1, 2, 1, bsize*2, 2 ];
	st = [ bsize*16, -bsize*16, bsize*16, bsize*8, -bsize*8, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 2, 1, 2, 1, bsize*2 ];
	st = [ bsize*16, -bsize*16, bsize*8, bsize*8, -bsize*4, bsize*4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 6 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, singleton dimensions)', function test( t ) {
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
	sh = [ 4, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, singleton dimensions, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 4, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 2, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, empty)', function test( t ) {
	var expected;
	var x;
	var y;

	x = ndarray( 'float64', oneTo( 4, 'float64' ), [ 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1 ], 0, 'column-major' );
	y = ndarray( 'float64', zeros( 4, 'float64' ), [ 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1 ], 0, 'column-major' );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, contiguous)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, contiguous, negative strides)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, 2, 1, 2 ];
	st = [ -1, -2, -2, -4, -4, -8, -8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0,
		90.0,
		100.0,
		110.0,
		120.0,
		130.0,
		140.0,
		150.0,
		160.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, same sign strides)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, 1, 2, 4, 8, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		0.0,
		30.0,
		0.0,
		50.0,
		0.0,
		70.0,
		0.0,
		90.0,
		0.0,
		110.0,
		0.0,
		130.0,
		0.0,
		150.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, mixed sign strides)', function test( t ) {
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
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, -1, 2, -4, 8, -8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		0.0,
		30.0,
		0.0,
		50.0,
		0.0,
		70.0,
		0.0,
		90.0,
		0.0,
		110.0,
		0.0,
		130.0,
		0.0,
		150.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ bsize*2, 1, 2, 1, 2, 1, 2 ];
	st = [ 2, -bsize*4, bsize*4, bsize*8, -bsize*8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, bsize*2, 1, 2, 1, 2, 1 ];
	st = [ 2, -4, bsize*8, bsize*8, -bsize*16, bsize*16, bsize*32 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, bsize*2, 1, 2, 1, 2 ];
	st = [ 2, -4, -4, bsize*8, bsize*8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 1, bsize*2, 2, 1, 2 ];
	st = [ 2, -4, -4, 4, bsize*8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, bsize*2, 1, 2 ];
	st = [ 2, -4, -4, 8, 8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, 1, bsize*2, 2 ];
	st = [ 2, -4, -4, 8, 8, 8, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays)', function test( t ) {
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
	sh = [ 2, 1, 2, 1, 2, 1, bsize*2 ];
	st = [ 2, -4, -4, 8, 8, 16, 16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ) * 2, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Float64Array( x.length*2 );
	dfill( x.length, 10.0, expected, st[ 0 ] );

	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 2, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0,
		90.0,
		100.0,
		110.0,
		120.0,
		130.0,
		140.0,
		150.0,
		160.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, contiguous, accessors, negative strides)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1, 2, 1, 2 ];
	st = [ -1, -2, -2, -4, -4, -8, -8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 2, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0,
		90.0,
		100.0,
		110.0,
		120.0,
		130.0,
		140.0,
		150.0,
		160.0,
		170.0,
		180.0,
		190.0,
		200.0,
		210.0,
		220.0,
		230.0,
		240.0,
		250.0,
		260.0,
		270.0,
		280.0,
		290.0,
		300.0,
		310.0,
		320.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, 1, 2, 4, 8, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		0.0,
		0.0,
		50.0,
		60.0,
		0.0,
		0.0,
		90.0,
		100.0,
		0.0,
		0.0,
		130.0,
		140.0,
		0.0,
		0.0,
		170.0,
		180.0,
		0.0,
		0.0,
		210.0,
		220.0,
		0.0,
		0.0,
		250.0,
		260.0,
		0.0,
		0.0,
		290.0,
		300.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 2, 2, 1, 2 ];
	st = [ -1, 1, -1, -2, 4, -8, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( oneTo( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		0.0,
		0.0,
		50.0,
		60.0,
		0.0,
		0.0,
		90.0,
		100.0,
		0.0,
		0.0,
		130.0,
		140.0,
		0.0,
		0.0,
		170.0,
		180.0,
		0.0,
		0.0,
		210.0,
		220.0,
		0.0,
		0.0,
		250.0,
		260.0,
		0.0,
		0.0,
		290.0,
		300.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2, 1, 2, 1, 2 ];
	st = [ 2, -bsize*4, -bsize*4, bsize*8, bsize*8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1, 1, 2, 1, 2 ];
	st = [ 2, -4, -bsize*8, bsize*8, bsize*8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2, 1, 2, 1, 2 ];
	st = [ 2, -4, -4, bsize*8, bsize*8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 1, bsize*2, 1, 2, 2 ];
	st = [ 2, -4, -4, 4, bsize*8, bsize*8, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 2, 1, bsize*2, 1, 2 ];
	st = [ 2, -4, -4, 8, 8, bsize*16, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 2, 1, 1, bsize*2, 2 ];
	st = [ 2, -4, -4, 8, 8, 8, bsize*16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});

tape( 'the function applies a unary callback to each indexed element of a 7-dimensional ndarray (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var expected;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 2, 1, 2, 1, bsize*2 ];
	st = [ 2, -4, -4, 8, 8, 16, 16 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, new Complex128Array( ones( numel( sh ) * 4, 'float64' ) ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ) * 2, dt ), sh, st, o, ord );

	unary( [ x, y ], scale );

	expected = new Complex128Array( x.length*2 );
	zfill( x.length, new Complex128( 10.0, 10.0 ), expected, st[ 0 ] );

	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});
