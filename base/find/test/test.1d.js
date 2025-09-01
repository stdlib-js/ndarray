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
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( './../../../from-scalar' );
var ndarray = require( './../../../ctor' );
var find = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof find, 'function', 'main export is a function');
	t.end();
});

tape( 'the function returns the first element in a 1-dimensional ndarray which passes a test implemented by a predicate function', function test( t ) {
	var actual;
	var sv;
	var x;

	sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});
	x = ndarray( 'float64', oneTo( 8, 'float64' ), [ 4 ], [ 1 ], 0, 'row-major' );

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

tape( 'the function returns the first element in a 1-dimensional ndarray which passes a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var sv;
	var x;

	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});
	x = ndarray( 'complex128', oneTo( 8, 'complex128' ), [ 4 ], [ 1 ], 0, 'row-major' );

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

tape( 'the function supports specifying the callback execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var sv;
	var x;

	x = new ndarray( 'float64', oneTo( 8, 'float64'), [ 4 ], [ 1 ], 0, 'row-major' );
	sv = scalar2ndarray( -1.0, {
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
		[ 0 ],
		[ 1 ]
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

tape( 'the function supports specifying the callback execution context (accessors)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var sv;
	var x;

	x = ndarray( 'complex128', oneTo( 8, 'complex128' ), [ 4 ], [ 1 ], 0, 'row-major' );
	sv = scalar2ndarray( new Complex128( -1.0, 0.0 ), {
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
		[ 0 ],
		[ 1 ]
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
