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
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var ndarray = require( './../../ctor' );
var zeros = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zeros, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is neither a nonnegative integer nor an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '5' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is neither a nonnegative integer nor an array of nonnegative integers (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '5' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '5' ],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( [ 2, 2 ], value );
		};
	}
});

tape( 'the function throws an error if provided a `dtype` option which is not a recognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'zeros',
		'Int32',
		'Uint32',
		'Int16',
		'Uint16',
		'Int8',
		'Uint8',
		'Uint8c',
		'uint8_clamped',
		'Float64',
		'Float32',
		'FLOAT64',
		'FLOAT32',
		'GENERIC'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( [ 2, 2 ], {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided an `order` option which is not a recognized order', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'ROW',
		'row',
		'col-major',
		'col',
		'major',
		'minor',
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( [ 2, 2 ], {
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a recognized mode', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'THROW',
		5,
		null,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( [ 2, 2 ], {
				'mode': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `submode` option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'THROW',
		5,
		null,
		true,
		false,
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( [ 2, 2 ], {
				'submode': [ value ]
			});
		};
	}
});

tape( 'the function throws an error if provided a `readonly` option which is not a boolean', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zeros( [ 2, 2 ], {
				'readonly': value
			});
		};
	}
});

tape( 'the function returns a zero-filled array (default)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	arr = zeros( [ 2, 2 ] );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (default; integer shape)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	arr = zeros( 4 );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 4 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (default; integer shape; order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'order': 'row-major'
	};
	arr = zeros( 4, opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 4 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (default; integer shape; order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'order': 'column-major'
	};
	arr = zeros( 4, opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 4 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (default; integer shape; dtype=generic)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0, 0, 0, 0 ];

	opts = {
		'dtype': 'generic'
	};
	arr = zeros( 4, opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 4 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=float64, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'float64',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=float64, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'float64',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=float32, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'float32',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=float32, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'float32',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=int32, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Int32Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'int32',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=int32, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Int32Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'int32',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=int16, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Int16Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'int16',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=int16, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Int16Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'int16',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=int8, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Int8Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'int8',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=int8, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Int8Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'int8',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint32, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint32Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint32',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint32, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint32Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint32',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint16, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint16Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint16',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint16, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint16Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint16',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint8, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint8',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint8, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint8',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint8c, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint8ClampedArray( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint8c',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=uint8c, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Uint8ClampedArray( [ 0, 0, 0, 0 ] );

	opts = {
		'dtype': 'uint8c',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=complex128, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'complex128',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=complex128, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'complex128',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=complex64, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'complex64',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=complex64, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	opts = {
		'dtype': 'complex64',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( arr.data, 0 ), expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=generic, order=row-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0, 0, 0, 0 ];

	opts = {
		'dtype': 'generic',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=generic, order=column-major)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0, 0, 0, 0 ];

	opts = {
		'dtype': 'generic',
		'order': 'column-major'
	};
	arr = zeros( [ 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function supports zero-dimensional arrays', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 0.0 ] );

	arr = zeros( [] );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports zero-dimensional arrays (options)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0.0 ];

	opts = {
		'dtype': 'generic',
		'order': 'row-major'
	};
	arr = zeros( [], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function supports empty arrays', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( 0 );

	arr = zeros( [ 2, 0, 2 ] );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 0, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports empty arrays (options)', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [];

	opts = {
		'dtype': 'generic',
		'order': 'row-major'
	};
	arr = zeros( [ 2, 0, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 0, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only arrays', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

	opts = {
		'dtype': 'generic',
		'order': 'row-major',
		'readonly': true
	};
	arr = zeros( [ 2, 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );
	t.strictEqual( arr.flags.READONLY, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable arrays', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

	opts = {
		'dtype': 'generic',
		'order': 'row-major',
		'readonly': false
	};
	arr = zeros( [ 2, 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );
	t.strictEqual( arr.flags.READONLY, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying array index modes and submodes', function test( t ) {
	var expected;
	var opts;
	var arr;

	expected = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

	opts = {
		'dtype': 'generic',
		'order': 'row-major',
		'mode': 'clamp',
		'submode': [ 'wrap' ]
	};
	arr = zeros( [ 2, 2, 2 ], opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, opts.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, opts.order, 'returns expected value' );

	t.strictEqual( arr.iget( arr.length+10 ), 0, 'returns expected value' );
	arr.iset( arr.length+10, 1 );
	t.strictEqual( arr.iget( arr.length+10 ), 1, 'returns expected value' );

	t.strictEqual( arr.get( 2, 2, 2 ), 0, 'returns expected value' );
	arr.set( 2, 2, 2, 3 );
	t.strictEqual( arr.get( 0, 0, 0 ), 3, 'returns expected value' );
	t.strictEqual( arr.get( 2, 2, 2 ), 3, 'returns expected value' );

	t.end();
});
