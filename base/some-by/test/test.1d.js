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
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128Array = require( '@stdlib/array/complex128' );
var scalar2ndarray = require( './../../../from-scalar' );
var ndarray = require( './../../../ctor' );
var someBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof someBy, 'function', 'main export is a function');
	t.end();
});

tape( 'the function tests whether at least `n` elements in a 1-dimensional ndarray pass a test implemented by a predicate function', function test( t ) {
	var actual;
	var x;
	var n;

	x = ndarray( 'float64', zeros( 8, 'float64' ), [ 4 ], [ 2 ], 1, 'row-major' );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( 'float64', ones( 8, 'float64' ), [ 4 ], [ 2 ], 1, 'row-major' );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0;
	}
});

tape( 'the function tests whether at least `n` elements in a 0-dimensional ndarray pass a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var xbuf;
	var x;
	var n;

	xbuf = zeros( 6*2, 'float64' );
	x = ndarray( 'complex128', new Complex128Array( xbuf ), [ 4 ], [ 1 ], 1, 'row-major' );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	xbuf = ones( 6*2, 'float64' );
	x = ndarray( 'complex128', new Complex128Array( xbuf ), [ 4 ], [ 1 ], 1, 'row-major' );

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});

tape( 'the function supports specifying the callback execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var x;
	var n;

	x = new ndarray( 'float64', ones( 8, 'float64'), [ 4 ], [ 2 ], 0, 'row-major' );
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
		[ 0 ],
		[ 1 ],
		[ 2 ],
		[ 3 ]
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

tape( 'the function supports specifying the callback execution context (accessors)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var xbuf;
	var ctx;
	var x;
	var n;

	xbuf = ones( 6*2, 'float64' );
	x = ndarray( 'complex128', new Complex128Array( xbuf ), [ 4 ], [ 1 ], 1, 'row-major' );
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
		[ 0 ],
		[ 1 ],
		[ 2 ],
		[ 3 ]
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
