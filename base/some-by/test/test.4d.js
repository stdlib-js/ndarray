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
var zeros = require( '@stdlib/array/zeros' );
var ones = require( '@stdlib/array/ones' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var scalar2ndarray = require( './../../../from-scalar' );
var Complex128Array = require( '@stdlib/array/complex128' );
var numel = require( './../../../base/numel' );
var shape2strides = require( './../../../base/shape2strides' );
var strides2offset = require( './../../../base/strides2offset' );
var ndarray = require( './../../../ctor' );
var blockSize = require( './../../../base/nullary-tiling-block-size' );
var someBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof someBy, 'function', 'main export is a function');
	t.end();
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, singleton dimensions)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 4, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, singleton dimensions, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 4, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function supports specifying the callback execution context (row-major, contiguous)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 1, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = someBy( [ x, n ], clbk, ctx );

	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		1.0,
		1.0,
		1.0,
		1.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0, 0 ],
		[ 0, 0, 0, 1 ],
		[ 0, 1, 0, 0 ],
		[ 0, 1, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v !== 0.0;
	}
});

tape( 'the function supports specifying the callback execution context (row-major, contiguous, accessors)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var xbuf;
	var ctx;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = someBy( [ x, n ], clbk, ctx );

	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		[ 1.0, 1.0 ],
		[ 1.0, 1.0 ],
		[ 1.0, 1.0 ],
		[ 1.0, 1.0 ]
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0, 0 ],
		[ 0, 0, 0, 1 ],
		[ 0, 1, 0, 0 ],
		[ 0, 1, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( [ real( v ), imag( v ) ] );
		indices.push( idx );
		arrays.push( arr );
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, contiguous)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 1, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, contiguous, negative strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -2, -2, -1, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, same sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ 4, 4, 2, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( 8, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( 8, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, mixed sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ 4, -4, 2, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( 8, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( 8, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2, 1 ];
	st = [ -4, 4, 2, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1, 1 ];
	st = [ bsize*4, -2, -2, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2, 1 ];
	st = [ bsize*4, -bsize*4, -2, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 1, bsize*2 ];
	st = [ bsize*4, -bsize*4, -bsize*4, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, contiguous, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, contiguous, negative strides, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -2, -2, -1, -1 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ 4, 4, 2, 2 ];
	o = strides2offset( sh, st );

	xbuf = zeros( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -4, 4, 2, 2 ];
	o = strides2offset( sh, st );

	xbuf = zeros( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2, 1 ];
	st = [ -4, 4, 2, 2 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1, 1 ];
	st = [ bsize*4, -2, 2, 2 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2, 1 ];
	st = [ bsize*4, -bsize*4, 2, 2 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 1, bsize*2 ];
	st = [ bsize*4, -bsize*4, bsize*4, 2 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, singleton dimensions)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 1, 1, 1, 4 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, singleton dimensions, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 4 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function supports specifying the callback execution context (column-major, contiguous)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = someBy( [ x, n ], clbk, ctx );

	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		1.0,
		1.0,
		1.0,
		1.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0, 0 ],
		[ 1, 0, 0, 0 ],
		[ 0, 0, 1, 0 ],
		[ 1, 0, 1, 0 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v !== 0.0;
	}
});

tape( 'the function supports specifying the callback execution context (column-major, contiguous, accessors)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var xbuf;
	var ctx;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = someBy( [ x, n ], clbk, ctx );

	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		[ 1.0, 1.0 ],
		[ 1.0, 1.0 ],
		[ 1.0, 1.0 ],
		[ 1.0, 1.0 ]
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0, 0 ],
		[ 1, 0, 0, 0 ],
		[ 0, 0, 1, 0 ],
		[ 1, 0, 1, 0 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( [ real( v ), imag( v ) ] );
		indices.push( idx );
		arrays.push( arr );
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, contiguous)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, contiguous, negative strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -1, -2, -2, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, same sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ 2, 4, 4, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( 8, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( 8, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, mixed sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -2, 4, 4, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( 8, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( 8, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2, 1 ];
	st = [ 2, -bsize*4, bsize*4, bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1, 1 ];
	st = [ -2, 4, bsize*8, bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2, 1 ];
	st = [ -2, 4, 4, bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 1, bsize*2 ];
	st = [ -2, 4, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, contiguous, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, contiguous, negative strides, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -1, -2, -2, -4 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ 2, 4, 4, 8 ];
	o = strides2offset( sh, st );

	xbuf = zeros( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var actual;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2, 1 ];
	st = [ -2, 4, 4, 8 ];
	o = strides2offset( sh, st );

	xbuf = zeros( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( 8*2, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2, 1 ];
	st = [ -2, bsize*4, bsize*4, bsize*8 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1, 1 ];
	st = [ 2, -4, bsize*8, bsize*8 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2, 1 ];
	st = [ 2, -4, 4, bsize*8 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function tests whether at least `n` elements in a 4-dimensional ndarray pass a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var n;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, 1, bsize*2 ];
	st = [ 2, -4, 4, 4 ];
	o = strides2offset( sh, st );

	xbuf = zeros( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( numel( sh )*4, 'float64' );
	x = ndarray( dt, new Complex128Array( xbuf ), sh, st, o, ord );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});
