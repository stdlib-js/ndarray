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
var BooleanArray = require( '@stdlib/array/bool' );
var Buffer = require( '@stdlib/buffer/ctor' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var base = require( './../../../base/ctor' );
var ndarray = require( './../../../ctor' );
var array = require( './../../../array' );
var zeros = require( './../../../base/zeros' );
var empty = require( './../../../base/empty' );
var scalar2ndarrayLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scalar2ndarrayLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument having an unrecognized data type', function test( t ) {
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
		},
		{
			'shape': [ 1, 2, 3 ],
			'order': 'row-major',
			'dtype': 'foo_bar_beep_boop'
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			scalar2ndarrayLike( value, 1.0 );
		};
	}
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=float64)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'float64', [ 2, 2 ], 'row-major' );

	expected = new Float64Array( [ 1.0 ] );
	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=float64)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Float64Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'float64',
		'order': 'column-major'
	});

	expected = new Float64Array( [ 1.0 ] );
	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=float32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'float32', [ 2, 2 ], 'column-major' );

	expected = new Float32Array( [ 1.0 ] );
	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=float32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Float32Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'float32',
		'order': 'row-major'
	});

	expected = new Float32Array( [ 1.0 ] );
	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=int32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'int32', [ 2, 2 ], 'row-major' );

	expected = new Int32Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=int32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Int32Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'int32',
		'order': 'column-major'
	});

	expected = new Int32Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=int16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'int16', [ 2, 2 ], 'column-major' );

	expected = new Int16Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int16', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=int16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Int16Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'int16',
		'order': 'row-major'
	});

	expected = new Int16Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int16', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=int8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'int8', [ 2, 2 ], 'row-major' );

	expected = new Int8Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int8', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=int8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Int8Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'int8',
		'order': 'column-major'
	});

	expected = new Int8Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int8', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=uint32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'uint32', [ 2, 2 ], 'column-major' );

	expected = new Uint32Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=uint32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Uint32Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'uint32',
		'order': 'row-major'
	});

	expected = new Uint32Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint32', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=uint16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'uint16', [ 2, 2 ], 'row-major' );

	expected = new Uint16Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint16', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=uint16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Uint16Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'uint16',
		'order': 'column-major'
	});

	expected = new Uint16Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint16', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=uint8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'uint8', [ 2, 2 ], 'column-major' );

	expected = new Uint8Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=uint8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Uint8Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'uint8',
		'order': 'row-major'
	});

	expected = new Uint8Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=uint8c)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'uint8c', [ 2, 2 ], 'row-major' );

	expected = new Uint8ClampedArray( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8c', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=uint8c)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Uint8ClampedArray( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'uint8c',
		'order': 'row-major'
	});

	expected = new Uint8ClampedArray( [ 1 ] );
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8c', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=complex128, complex)', function test( t ) {
	var expected;
	var arr;
	var x;
	var v;

	x = zeros( 'complex128', [ 2, 2 ], 'column-major' );

	expected = new Float64Array( [ 1.0, 2.0 ] );

	v = new Complex128( 1.0, 2.0 );
	arr = scalar2ndarrayLike( x, v );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=complex128, complex)', function test( t ) {
	var expected;
	var arr;
	var x;
	var v;

	x = array( new Complex128Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'complex128',
		'order': 'row-major'
	});

	expected = new Float64Array( [ 1.0, 2.0 ] );

	v = new Complex128( 1.0, 2.0 );
	arr = scalar2ndarrayLike( x, v );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=complex128, real)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'complex128', [ 2, 2 ], 'row-major' );

	expected = new Float64Array( [ 1.0, 0.0 ] );
	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=complex128, real)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Complex128Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'complex128',
		'order': 'column-major'
	});

	expected = new Float64Array( [ 1.0, 0.0 ] );

	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=complex64, complex)', function test( t ) {
	var expected;
	var arr;
	var x;
	var v;

	x = zeros( 'complex64', [ 2, 2 ], 'column-major' );

	expected = new Float32Array( [ 1.0, 2.0 ] );

	v = new Complex64( 1.0, 2.0 );
	arr = scalar2ndarrayLike( x, v );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=complex64, complex)', function test( t ) {
	var expected;
	var arr;
	var x;
	var v;

	x = array( new Complex64Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'complex64',
		'order': 'row-major'
	});

	expected = new Float32Array( [ 1.0, 2.0 ] );

	v = new Complex64( 1.0, 2.0 );
	arr = scalar2ndarrayLike( x, v );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=complex64, real)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'complex64', [ 2, 2 ], 'row-major' );

	expected = new Float32Array( [ 1.0, 0.0 ] );
	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=complex64, real)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new Complex64Array( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'complex64',
		'order': 'column-major'
	});

	expected = new Float32Array( [ 1.0, 0.0 ] );

	arr = scalar2ndarrayLike( x, 1.0 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=generic)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = zeros( 'generic', [ 2, 2 ], 'column-major' );

	expected = [ 1 ];
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=generic)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( [ 1, 2, 3, 4 ], {
		'shape': [ 2, 2 ],
		'dtype': 'generic',
		'order': 'row-major'
	});

	expected = [ 1 ];
	arr = scalar2ndarrayLike( x, 1 );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (base, dtype=bool)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = empty( 'bool', [ 2, 2 ], 'row-major' );

	expected = new Uint8Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, true );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'bool', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, BooleanArray ), true, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=bool)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = array( new BooleanArray( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'bool',
		'order': 'column-major'
	});

	expected = new Uint8Array( [ 1 ] );
	arr = scalar2ndarrayLike( x, true );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'bool', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, BooleanArray ), true, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional array (base, dtype=binary)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'binary', [ 2, 2 ], 'row-major' );
	arr = scalar2ndarrayLike( x, 127 );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'binary', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Buffer ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-dimensional ndarray (non-base, dtype=binary)', function test( t ) {
	var arr;
	var x;

	x = array( allocUnsafe( 4 ), {
		'shape': [ 2, 2 ],
		'dtype': 'binary',
		'order': 'column-major'
	});

	arr = scalar2ndarrayLike( x, true );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'binary', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Buffer ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );
	t.strictEqual( arr.length, 1, 'returns expected value' );

	t.end();
});
