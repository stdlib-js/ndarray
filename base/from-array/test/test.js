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
var typedarray = require( '@stdlib/array/typed' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var base = require( './../../../base/ctor' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var array2ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'float64' );
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'float32' );
	arr = array2ndarray( buf, 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float32', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=int32)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'int32' );
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int32', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=int16)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'int16' );
	arr = array2ndarray( buf, 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int16', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=int8)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'int8' );
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int8', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=uint32)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'uint32' );
	arr = array2ndarray( buf, 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint32', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=uint16)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'uint16' );
	arr = array2ndarray( buf, 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint16', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=uint8)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'uint8' );
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=uint8c)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'uint8c' );
	arr = array2ndarray( buf, 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8c', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'complex128' );
	arr = array2ndarray( buf, 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex64)', function test( t ) {
	var buf;
	var arr;

	buf = typedarray( 4, 'complex64' );
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic)', function test( t ) {
	var buf;
	var arr;

	buf = [ 1, 2, 3, 4 ];
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic)', function test( t ) {
	var buf;
	var arr;

	buf = toAccessorArray( [ 1, 2, 3, 4 ] );
	arr = array2ndarray( buf, 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.strictEqual( arr.data, buf, 'returns expected value' );
	t.deepEqual( arr.shape, [ buf.length ], 'returns expected value' );
	t.deepEqual( arr.strides, [ 1 ], 'returns expected value' );
	t.strictEqual( arr.offset, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});
