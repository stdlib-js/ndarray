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
var proxyquire = require( 'proxyquire' );
var isndarrayLikeWithDataType = require( '@stdlib/assert/is-ndarray-like-with-data-type' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameArray = require( '@stdlib/assert/is-same-array' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex128Array = require( '@stdlib/array/complex128' );
var getData = require( './../../../data-buffer' );
var array2buffer = require( '@stdlib/buffer/from-array' );
var arraybuffer2buffer = require( '@stdlib/buffer/from-arraybuffer' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var vector = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof vector, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( value, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (dtype, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( value, 'float64', {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0 );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, dtype, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, 'float64', {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, 1 );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, length, dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, 1, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, 1, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byte offset, length, dtype, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( value, 0, 1, 'float64', {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (dtype, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, 'float64', {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, 1 );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (length, dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, 1, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, 1, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (length, dtype, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), value, 1, 'float64', {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid length argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid length argument (dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), 0, value, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid length argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid length argument (dtype, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
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
			vector( new ArrayBuffer( 8 ), 0, value, 'float64', {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (only argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( 10, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( 10, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new Float64Array( 10 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( [ 1, 2, 3 ], value, {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, 1, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, 1, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a "generic" data type (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'generic'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), value );
		};
	}
});

tape( 'the function throws an error if provided a "generic" data type (ArrayBuffer, options)', function test( t ) {
	var values;
	var i;

	values = [
		'generic'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided a "generic" data type (ArrayBuffer, byteOffset)', function test( t ) {
	var values;
	var i;

	values = [
		'generic'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided a "generic" data type (ArrayBuffer, byteOffset, options)', function test( t ) {
	var values;
	var i;

	values = [
		'generic'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a "generic" data type (ArrayBuffer, byteOffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'generic'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, 1, value );
		};
	}
});

tape( 'the function throws an error if provided a "generic" data type (ArrayBuffer, byteOffset, length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'generic'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 16 ), 0, 1, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (dtype)', function test( t ) {
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
			vector( 'float64', value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (array)', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( [], value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (array, dtype)', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( [], 'float64', value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ArrayBuffer, dtype)', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), 'float64', value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ArrayBuffer, byte offset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ArrayBuffer, byte offset, dtype)', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), 0, 'float64', value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ArrayBuffer, byte offset, length)', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), 0, 1, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (ArrayBuffer, byte offset, length, dtype)', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			vector( new ArrayBuffer( 8 ), 0, 1, 'float64', value );
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
			vector({
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
			vector({
				'mode': value
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
			vector({
				'readonly': value
			});
		};
	}
});

tape( 'the function returns a one-dimensional ndarray (default)', function test( t ) {
	var arr = vector();
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, options)', function test( t ) {
	var arr = vector( {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64)', function test( t ) {
	var arr = vector( 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, options)', function test( t ) {
	var arr = vector( 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32)', function test( t ) {
	var arr = vector( 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, options)', function test( t ) {
	var arr = vector( 'float32', {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128)', function test( t ) {
	var arr = vector( 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary)', function test( t ) {
	var arr = vector( 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'binary' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic)', function test( t ) {
	var arr = vector( 'generic' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'generic' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, length)', function test( t ) {
	var arr = vector( 10 );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, length, options)', function test( t ) {
	var arr = vector( 10, {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, length)', function test( t ) {
	var arr = vector( 10, 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, length, options)', function test( t ) {
	var arr = vector( 10, 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, length)', function test( t ) {
	var arr = vector( 10, 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, length, options)', function test( t ) {
	var arr = vector( 10, 'float32', {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, length)', function test( t ) {
	var arr = vector( 10, 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, length)', function test( t ) {
	var arr = vector( 10, 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'binary' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, length)', function test( t ) {
	var arr = vector( 10, 'generic' );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'generic' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, array, options)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, array, options)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, array, options)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, 'complex128', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1, 2, 3, 4 ];
	out = vector( arr, 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.deepEqual( getData( out ), array2buffer( arr ), 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, array, options)', function test( t ) {
	var arr;
	var out;

	arr = [ 1, 2, 3, 4 ];
	out = vector( arr, 'binary', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.deepEqual( getData( out ), array2buffer( arr ), 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, 'generic' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'generic' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameArray( getData( out ), arr ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, array, options)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( arr, 'generic', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'generic' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameArray( getData( out ), arr ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, typed array, options)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr, 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, typed array, options)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr, 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr, 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, typed array, options)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr, 'float32', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = vector( arr, 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, complex typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = vector( arr, 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, iterable)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ) );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (default, iterable, options)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, iterable)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, iterable, options)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, iterable)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, iterable, options)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), 'complex128', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, iterable)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1, 2, 3, 4 ];
	out = vector( createIterable( arr ), 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.deepEqual( getData( out ), array2buffer( arr ), 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, iterable, options)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1, 2, 3, 4 ];
	out = vector( createIterable( arr ), 'binary', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.deepEqual( getData( out ), array2buffer( arr ), 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, iterable)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), 'generic' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'generic' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameArray( getData( out ), arr ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, iterable, options)', function test( t ) {
	var vector;
	var arr;
	var out;

	vector = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-iterable-like': mock,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = vector( createIterable( arr ), 'generic', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'generic' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameArray( getData( out ), arr ), true, 'returns expected value' );
	t.end();

	function createIterable( arr ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return array2iterator( arr );
		}
	}

	function mock() {
		return true;
	}
});

tape( 'the function returns a one-dimensional ndarray (default, buffer)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, buffer, options)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, buffer)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, buffer, options)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, buffer)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, buffer, options)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'complex128', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( arr ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, buffer)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.deepEqual( getData( out ), array2buffer( arr ), 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, buffer, options)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'binary', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.deepEqual( getData( out ), array2buffer( arr ), 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, buffer)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'generic' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'generic' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameArray( getData( out ), arr ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=generic, buffer, options)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );
	out = vector( buf, 'generic', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'generic' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isSameArray( getData( out ), arr ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, arraybuffer, options)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 'float64' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float64, arraybuffer, options)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 'float64', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, arraybuffer, options)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 'float32', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=complex128, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = vector( buf, 'complex128' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'complex128' ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( out ), new Complex128Array( buf ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 8, 'returns expected value' );
	t.deepEqual( getData( out ), arraybuffer2buffer( buf ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8 );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf, 8 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, arraybuffer, byteoffset, options)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf, 8 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 6, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( buf, 8 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 2, 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 6, 'returns expected value' );
	t.deepEqual( getData( out ), arraybuffer2buffer( buf, 2 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, arraybuffer, byteoffset, options)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, 'float32', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 6, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( buf, 8 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, 2 );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf, 8, 2 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (default, arraybuffer, byteoffset, length, options)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, 2, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float64' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( out ), new Float64Array( buf, 8, 2 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, 2, 'float32' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( buf, 8, 2 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=float32, arraybuffer, byteoffset, length, options)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = vector( buf, 8, 2, 'float32', {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'float32' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( out ), new Float32Array( buf, 8, 2 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a one-dimensional ndarray (dtype=binary, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = vector( buf, 2, 2, 'binary' );
	t.strictEqual( isndarrayLikeWithDataType( out, 'binary' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.deepEqual( getData( out ), arraybuffer2buffer( buf, 2, 2 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the memory layout', function test( t ) {
	var arr;

	arr = vector({
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector({
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (dtype)', function test( t ) {
	var arr;

	arr = vector( 'float32', {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( 'float32', {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (length)', function test( t ) {
	var arr;

	arr = vector( 10, {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( 10, {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (length, dtype)', function test( t ) {
	var arr;

	arr = vector( 10, 'float32', {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( 10, 'float32', {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (array)', function test( t ) {
	var arr;

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (array, dtype)', function test( t ) {
	var arr;

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], 'float32', {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], 'float32', {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( new ArrayBuffer( 32 ), {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 'float32', {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 8, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( new ArrayBuffer( 32 ), 'float32', {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 8, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, byteoffset)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 3, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( new ArrayBuffer( 32 ), 8, {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 3, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, byteoffset, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 'float32', {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 6, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( new ArrayBuffer( 32 ), 8, 'float32', {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 6, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, byteoffset, length)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 2, {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( new ArrayBuffer( 32 ), 8, 2, {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, byteoffset, length, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 2, 'float32', {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = vector( new ArrayBuffer( 32 ), 8, 2, 'float32', {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays', function test( t ) {
	var arr;

	arr = vector({
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (dtype)', function test( t ) {
	var arr;

	arr = vector( 'float32', {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (length)', function test( t ) {
	var arr;

	arr = vector( 10, {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (length, dtype)', function test( t ) {
	var arr;

	arr = vector( 10, 'float32', {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (array)', function test( t ) {
	var arr;

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (array, dtype)', function test( t ) {
	var arr;

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], 'float32', {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 'float32', {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 8, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, byteoffset)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 3, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, byteoffset, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 'float32', {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 6, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, byteoffset, length)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 2, {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, byteoffset, length, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 2, 'float32', {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays', function test( t ) {
	var arr;

	arr = vector({
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (dtype)', function test( t ) {
	var arr;

	arr = vector( 'float32', {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (length)', function test( t ) {
	var arr;

	arr = vector( 10, {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (length, dtype)', function test( t ) {
	var arr;

	arr = vector( 10, 'float32', {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (array)', function test( t ) {
	var arr;

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (array, dtype)', function test( t ) {
	var arr;

	arr = vector( [ 1.0, 2.0, 3.0, 4.0 ], 'float32', {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 'float32', {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 8, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, byteoffset)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 3, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, byteoffset, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 'float32', {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 6, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, byteoffset, length)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 2, {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float64' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, byteoffset, length, dtype)', function test( t ) {
	var arr;

	arr = vector( new ArrayBuffer( 32 ), 8, 2, 'float32', {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'float32' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});
