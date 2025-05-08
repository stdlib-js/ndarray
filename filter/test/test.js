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
var filter = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof filter, 'function', 'main export is a function' );
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
			filter( value, predicate );
		};
	}

	function predicate( z ) {
		return ( z > 0.0 );
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
			filter( x, value );
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
			filter( x, opts, value );
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
			filter( x, value, predicate );
		};
	}

	function predicate( z ) {
		return ( z > 0.0 );
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
			filter( x, opts, predicate );
		};
	}

	function predicate( z ) {
		return ( z > 0.0 );
	}
});

tape( 'the function throws an error if provided an invalid `order` option', function test( t ) {
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
				'order': value
			};
			filter( x, opts, predicate );
		};
	}

	function predicate( z ) {
		return ( z > 0.0 );
	}
});

tape( 'the function filters an array according to a predicate function (row-major)', function test( t ) {
	var expected;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	y = filter( x, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function predicate( z ) {
		return ( z > 0.0 );
	}
});

tape( 'the function filters an array according to a predicate function (column-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	y = filter( x, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function predicate( z ) {
		return ( z > 0.0 );
	}
});

tape( 'the function filters an array according to a predicate function (row-major, contiguous, options)', function test( t ) {
	var expected;
	var opts;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );
	x = ndarray( dt, buf, sh, st, o, ord );

	opts = {};
	y = filter( x, opts, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	opts = {
		'dtype': 'float32'
	};
	y = filter( x, opts, predicate );

	expected = new Float32Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat32Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function predicate( z ) {
		return ( z > 0.0 );
	}
});

tape( 'the function filters an array according to a predicate function (column-major, contiguous, options)', function test( t ) {
	var expected;
	var opts;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );
	x = ndarray( dt, buf, sh, st, o, ord );

	opts = {};
	y = filter( x, opts, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	opts = {
		'dtype': 'float32'
	};
	y = filter( x, opts, predicate );

	expected = new Float32Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat32Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function predicate( z ) {
		return ( z > 0.0 );
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var expected;
	var ctx;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	ctx = {
		'count': 0
	};
	y = filter( x, predicate, ctx );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function predicate( z ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( z > 0.0 );
	}
});

tape( 'the function supports providing a callback execution context (options)', function test( t ) {
	var expected;
	var ctx;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	ctx = {
		'count': 0
	};
	y = filter( x, {}, predicate, ctx );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function predicate( z ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( z > 0.0 );
	}
});

tape( 'the function invokes a provided callback with three arguments (row-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;
	var i;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];
	y = filter( x, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

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

	function predicate( z, idx, arr ) {
		values.push( z );
		indices.push( idx );
		arrays.push( arr );
		return ( z > 0.0 );
	}
});

tape( 'the function invokes a provided callback with three arguments (column-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;
	var i;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];
	y = filter( x, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

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

	function predicate( z, idx, arr ) {
		values.push( z );
		indices.push( idx );
		arrays.push( arr );
		return ( z > 0.0 );
	}
});

tape( 'the function supports specifying the iteration order (row-major/row-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var opts;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;
	var i;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];

	opts = {
		'order': 'row-major'
	};
	y = filter( x, opts, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

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

	function predicate( z, idx, arr ) {
		values.push( z );
		indices.push( idx );
		arrays.push( arr );
		return ( z > 0.0 );
	}
});

tape( 'the function supports specifying the iteration order (row-major/column-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var opts;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;
	var i;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];

	opts = {
		'order': 'column-major'
	};
	y = filter( x, opts, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

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

	function predicate( z, idx, arr ) {
		values.push( z );
		indices.push( idx );
		arrays.push( arr );
		return ( z > 0.0 );
	}
});

tape( 'the function supports specifying the iteration order (column-major/row-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var opts;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;
	var i;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];

	opts = {
		'order': 'row-major'
	};
	y = filter( x, opts, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

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

	function predicate( z, idx, arr ) {
		values.push( z );
		indices.push( idx );
		arrays.push( arr );
		return ( z > 0.0 );
	}
});

tape( 'the function supports specifying the iteration order (column-major/column-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var opts;
	var ord;
	var buf;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;
	var i;

	buf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, buf, sh, st, o, ord );

	values = [];
	indices = [];
	arrays = [];

	opts = {
		'order': 'column-major'
	};
	y = filter( x, opts, predicate );

	expected = new Float64Array([
		1.0,
		3.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

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

	function predicate( z, idx, arr ) {
		values.push( z );
		indices.push( idx );
		arrays.push( arr );
		return ( z > 0.0 );
	}
});
