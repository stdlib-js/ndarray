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
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( './../../../from-scalar' );
var numel = require( './../../../base/numel' );
var shape2strides = require( './../../../base/shape2strides' );
var strides2offset = require( './../../../base/strides2offset' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var ndarray = require( './../../../ctor' );
var blockSize = require( './../../../base/nullary-tiling-block-size' );
var find = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof find, 'function', 'main export is a function');
	t.end();
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, singleton dimensions)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 4, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 2.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, singleton dimensions, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 4, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
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
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = find( [ x, sv ], clbk, ctx );

	t.strictEqual( actual, 2.0, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );

	expected = [
		1.0,
		2.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
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
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports specifying the callback execution context (row-major, contiguous, accessors)', function test( t ) {
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
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = find( [ x, sv ], clbk, ctx );

	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );

	expected = [
		[ 1.0, 0.0 ],
		[ 2.0, 0.0 ]
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
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
		return real( v ) % 2.0 === 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, contiguous)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 2.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, contiguous, negative strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -2, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 4.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, same sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ 4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 1.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, mixed sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ 4, -4, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 3.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	x.set( sh[0]/2, 0, 1, 101.0 );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 101.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1 ];
	st = [ bsize*4, -2, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	x.set( 1, sh[1]/2, 0, 101.0 );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 101.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ bsize*4, -bsize*4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	x.set( 1, 0, sh[2]/2, 101.0 );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 101.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, contiguous, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, contiguous, negative strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -2, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 4.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ 4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 8*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 1.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 8*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 5.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*4, dt ), sh, st, o, ord );
	x.set( sh[0]/2, 0, 1, new Complex128( 101.0, 0.0 ) );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 101.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1 ];
	st = [ bsize*4, -2, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*4, dt ), sh, st, o, ord );
	x.set( 1, sh[1]/2, 0, new Complex128( 101.0, 0.0 ) );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 101.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ bsize*4, -bsize*4, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*4, dt ), sh, st, o, ord );
	x.set( 1, 0, sh[2]/2, new Complex128( 101.0, 0.0 ) );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 101.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, singleton dimensions)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 1, 1, 4 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 2.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, singleton dimensions, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 4 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
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
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = find( [ x, sv ], clbk, ctx );

	t.strictEqual( actual, 2.0, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );

	expected = [
		1.0,
		2.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 1, 0, 0 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
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
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports specifying the callback execution context (column-major, contiguous, accessors)', function test( t ) {
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
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = find( [ x, sv ], clbk, ctx );

	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );

	expected = [
		[ 1.0, 0.0 ],
		[ 2.0, 0.0 ]
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 1, 0, 0 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
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
		return real( v ) % 2.0 === 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, contiguous)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 2.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, contiguous, negative strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ -1, -2, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh ), dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 4.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, same sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 1.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, mixed sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ -2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 3.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ 2, -bsize*4, bsize*4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	x.set( sh[0]/2, 0, 1, 101.0 );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 101.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1 ];
	st = [ -2, 4, bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	x.set( 1, sh[1]/2, 0, 101.0 );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 101.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ -2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );
	x.set( 1, 0, sh[2]/2, 101.0 );
	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( actual, 101.0, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, NaN ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return v < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, contiguous, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, contiguous, negative strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ -1, -2, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( numel( sh )*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 4.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 === 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 8*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 1.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ -2, -4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, oneTo( 8*2, dt ), sh, st, o, ord );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 3.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -2, bsize*4, bsize*4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*4, dt ), sh, st, o, ord );
	x.set( sh[0]/2, 0, 1, new Complex128( 101.0, 0.0 ) );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 101.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, bsize*2, 1 ];
	st = [ 2, -4, bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*4, dt ), sh, st, o, ord );
	x.set( 1, sh[1]/2, 0, new Complex128( 101.0, 0.0 ) );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 101.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});

tape( 'the function returns the first element in a 3-dimensional ndarray which passes a test implemented by a predicate function (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var sv;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*4, dt ), sh, st, o, ord );
	x.set( 1, 0, sh[2]/2, new Complex128( 101.0, 0.0 ) );
	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	actual = find( [ x, sv ], clbk1 );
	t.strictEqual( isSameValue( actual, new Complex128( 101.0, 0.0 ) ), true, 'returns expected value' );

	actual = find( [ x, sv ], clbk2 );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return real( v ) % 2.0 !== 0.0;
	}

	function clbk2( v ) {
		return real( v ) < 0.0;
	}
});
