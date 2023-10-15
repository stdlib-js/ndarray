/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var Complex128 = require( '@stdlib/complex/float64' );
var Complex64 = require( '@stdlib/complex/float32' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var base = require( './../../../base/ctor' );
var scalar2ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scalar2ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is not a recognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beepboop',
		'foo',
		'bar',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			scalar2ndarray( 1.0, value, 'row-major' );
		};
	}
});

tape( 'the function returns a zero-dimensional ndarray (dtype=float64)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 1.0 ] );
	arr = scalar2ndarray( 1.0, 'float64', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=float32)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( [ 1.0 ] );
	arr = scalar2ndarray( 1.0, 'float32', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=int32)', function test( t ) {
	var expected;
	var arr;

	expected = new Int32Array( [ 1 ] );
	arr = scalar2ndarray( 1, 'int32', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=int16)', function test( t ) {
	var expected;
	var arr;

	expected = new Int16Array( [ 1 ] );
	arr = scalar2ndarray( 1, 'int16', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int16', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=int8)', function test( t ) {
	var expected;
	var arr;

	expected = new Int8Array( [ 1 ] );
	arr = scalar2ndarray( 1, 'int8', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int8', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=uint32)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint32Array( [ 1 ] );
	arr = scalar2ndarray( 1, 'uint32', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=uint16)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint16Array( [ 1 ] );
	arr = scalar2ndarray( 1, 'uint16', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint16', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=uint8)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 1 ] );
	arr = scalar2ndarray( 1, 'uint8', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=uint8c)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8ClampedArray( [ 1 ] );
	arr = scalar2ndarray( 1, 'uint8c', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8c', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=complex128, complex)', function test( t ) {
	var expected;
	var arr;
	var v;

	expected = new Float64Array( [ 1.0, 2.0 ] );

	v = new Complex128( 1.0, 2.0 );
	arr = scalar2ndarray( v, 'complex128', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=complex128, real)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 1.0, 0.0 ] );
	arr = scalar2ndarray( 1.0, 'complex128', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=complex64, complex)', function test( t ) {
	var expected;
	var arr;
	var v;

	expected = new Float32Array( [ 1.0, 2.0 ] );

	v = new Complex64( 1.0, 2.0 );
	arr = scalar2ndarray( v, 'complex64', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=complex64, real)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( [ 1.0, 0.0 ] );
	arr = scalar2ndarray( 1.0, 'complex64', 'row-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (dtype=generic)', function test( t ) {
	var expected;
	var arr;

	expected = [ 1 ];
	arr = scalar2ndarray( 1, 'generic', 'column-major' );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});