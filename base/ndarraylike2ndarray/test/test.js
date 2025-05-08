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
var Float64Array = require( '@stdlib/array/float64' );
var array = require( './../../../array' );
var ndarray = require( './../../../base/ctor' );
var ndarraylike2ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarraylike2ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts an ndarray-like object to an ndarray (ndarray)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( 10 );
	x = array( xbuf );

	expected = {
		'data': x.data,
		'dtype': x.dtype,
		'length': x.length,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order
	};
	actual = ndarraylike2ndarray( x );

	t.strictEqual( actual instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	t.end();
});

tape( 'the function converts an ndarray-like object to an ndarray (ndarray-like)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( 10 );
	x = {
		'data': xbuf,
		'dtype': 'float64',
		'length': 10,
		'shape': [ 2, 5 ],
		'strides': [ 5, 1 ],
		'offset': 0,
		'order': 'row-major'
	};

	expected = {
		'data': x.data,
		'dtype': x.dtype,
		'length': x.length,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order
	};
	actual = ndarraylike2ndarray( x );

	t.strictEqual( actual instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	t.end();
});
