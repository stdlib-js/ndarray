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
var defaults = require( './../../../defaults' );
var resolve = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolve, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unsupported/unrecognized data type policy', function test( t ) {
	var values;
	var i;

	values = [
		'float',
		'cmplx',
		'beep',
		'boop',
		'5',
		5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolve( [ 'float64', 'float64' ], value );
		};
	}
});

tape( 'the function throw an error if the data type policy is "same" and the input data types differ', function test( t ) {
	var values;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ], values[ (i+1)%values.length ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( v1, v2 ) {
		return function badValue() {
			resolve( [ v1, v2 ], 'same' );
		};
	}
});

tape( 'the function throw an error if the data type policy requires type promotion and the input data types do not promote to a common data type (policy=promoted)', function test( t ) {
	var values1;
	var values2;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'uint8',
		'int8',
		'complex64',
		'foo'
	];
	values2 = [
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bar'
	];
	for ( i = 0; i < values1.length; i++ ) {
		t.throws( badValue( values1[ i ], values2[ i ] ), Error, 'throws an error when provided '+values1[ i ]+' and '+values2[ i ] );
	}
	t.end();

	function badValue( v1, v2 ) {
		return function badValue() {
			resolve( [ v1, v2 ], 'promoted' );
		};
	}
});

tape( 'the function throw an error if the data type policy requires type promotion and the input data types do not promote to a common data type (policy=floating_point)', function test( t ) {
	var values1;
	var values2;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'uint8',
		'int8',
		'complex64'
	];
	values2 = [
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bool'
	];
	for ( i = 0; i < values1.length; i++ ) {
		t.throws( badValue( values1[ i ], values2[ i ] ), Error, 'throws an error when provided '+values1[ i ]+' and '+values2[ i ] );
	}
	t.end();

	function badValue( v1, v2 ) {
		return function badValue() {
			resolve( [ v1, v2 ], 'floating_point' );
		};
	}
});

tape( 'the function throw an error if the data type policy requires type promotion and the input data types do not promote to a common data type (policy=accumulation)', function test( t ) {
	var values1;
	var values2;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'uint8',
		'int8',
		'complex64'
	];
	values2 = [
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bool',
		'bool'
	];
	for ( i = 0; i < values1.length; i++ ) {
		t.throws( badValue( values1[ i ], values2[ i ] ), Error, 'throws an error when provided '+values1[ i ]+' and '+values2[ i ] );
	}
	t.end();

	function badValue( v1, v2 ) {
		return function badValue() {
			resolve( [ v1, v2 ], 'accumulation' );
		};
	}
});

tape( 'the function resolves an output data type (policy=boolean)', function test( t ) {
	var expected;
	var values;
	var dt;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64',
		'bool'
	];

	dt = defaults.get( 'dtypes.boolean' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( [ values[ i ], values[ i ] ], 'boolean' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=default)', function test( t ) {
	var expected;
	var values;
	var dt;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];

	dt = defaults.get( 'dtypes.default' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( [ values[ i ], values[ i ] ], 'default' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=default_index)', function test( t ) {
	var expected;
	var values;
	var dt;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];

	dt = defaults.get( 'dtypes.default_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( [ values[ i ], values[ i ] ], 'default_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=same)', function test( t ) {
	var expected;
	var values;
	var dt;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];

	expected = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( [ values[ i ], values[ i ] ], 'same' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=promoted)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	expected = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex128'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'promoted' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=<dtype>)', function test( t ) {
	var expected;
	var values;
	var dt;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];

	expected = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( [ values[ i ], values[ (i+1)%values.length ] ], values[ i ] );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=floating_point)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.floating_point' );
	expected = [
		'float64',
		'float32',
		dt,
		dt,
		dt,
		dt,
		'complex128'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'floating_point' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=floating_point_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64',
		'float32'
	];

	dt = defaults.get( 'dtypes.floating_point' );
	expected = [
		'float64',
		'float32',
		dt,
		dt,
		'generic',
		dt,
		'complex128',
		'complex64'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'floating_point_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=real_floating_point)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.real_floating_point' );
	expected = [
		'float64',
		'float32',
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'real_floating_point' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=real_floating_point_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.real_floating_point' );
	expected = [
		'float64',
		'float32',
		dt,
		dt,
		'generic',
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'real_floating_point_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=complex_floating_point)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.complex_floating_point' );
	expected = [
		dt,
		'complex64',
		dt,
		dt,
		dt,
		dt,
		'complex128'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'complex_floating_point' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=complex_floating_point_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.complex_floating_point' );
	expected = [
		dt,
		'complex64',
		dt,
		dt,
		'generic',
		dt,
		'complex128'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'complex_floating_point_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=numeric)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.numeric' );
	expected = [
		'float64',
		'float32',
		'int32',
		'uint16',
		dt,
		'int8',
		'complex128'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'numeric' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=numeric_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.numeric' );
	expected = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex128'
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'numeric_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.integer' );
	expected = [
		dt,
		dt,
		'int32',
		'uint16',
		dt,
		'int8',
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'integer' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.integer' );
	expected = [
		dt,
		dt,
		'int32',
		'uint16',
		'generic',
		'int8',
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'integer_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=signed_integer)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.signed_integer' );
	expected = [
		dt,
		dt,
		'int32',
		dt,
		dt,
		'int8',
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'signed_integer' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=signed_integer_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.signed_integer' );
	expected = [
		dt,
		dt,
		'int32',
		dt,
		'generic',
		'int8',
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'signed_integer_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=unsigned_integer)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.unsigned_integer' );
	expected = [
		dt,
		dt,
		dt,
		'uint16',
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'unsigned_integer' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=unsigned_integer_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.unsigned_integer' );
	expected = [
		dt,
		dt,
		dt,
		'uint16',
		'generic',
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'unsigned_integer_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer_index)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.integer_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'integer_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer_index_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.integer_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		'generic',
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'integer_index_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=boolean_index)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.boolean_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'boolean_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=boolean_index_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.boolean_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		'generic',
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'boolean_index_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=mask_index)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.mask_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'mask_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=mask_index_and_generic)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64'
	];

	dt = defaults.get( 'dtypes.mask_index' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		'generic',
		dt,
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'mask_index_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=accumulation)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var dt;
	var i;

	values1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64',
		'bool'
	];
	values2 = [
		'float32',
		'float32',
		'int8',
		'uint8',
		'float64',
		'int8',
		'float64',
		'bool'
	];

	dt = defaults.get( 'dtypes.real_floating_point' );
	expected = [
		'float64',
		'float32',
		'int32',
		'uint32',
		'generic',
		'int32',
		'complex128',
		dt
	];
	for ( i = 0; i < values1.length; i++ ) {
		dt = resolve( [ values1[ i ], values2[ i ] ], 'accumulation' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});
