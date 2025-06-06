/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
			resolve( 'float64', value );
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
		dt = resolve( values[ i ], 'boolean' );
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
		dt = resolve( values[ i ], 'default' );
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
		dt = resolve( values[ i ], 'default_index' );
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
		dt = resolve( values[ i ], 'same' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=promoted)', function test( t ) {
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
		dt = resolve( values[ i ], 'promoted' );
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
		dt = resolve( values[ i ], values[ i ] );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=floating_point)', function test( t ) {
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

	dt = defaults.get( 'dtypes.floating_point' );
	expected = [
		'float64',
		'float32',
		dt,
		dt,
		dt,
		dt,
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'floating_point' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=floating_point_and_generic)', function test( t ) {
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

	dt = defaults.get( 'dtypes.floating_point' );
	expected = [
		'float64',
		'float32',
		dt,
		dt,
		'generic',
		dt,
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'floating_point_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=real_floating_point)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'real_floating_point' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=real_floating_point_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'real_floating_point_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=complex_floating_point)', function test( t ) {
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

	dt = defaults.get( 'dtypes.complex_floating_point' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		dt,
		dt,
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'complex_floating_point' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=complex_floating_point_and_generic)', function test( t ) {
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

	dt = defaults.get( 'dtypes.complex_floating_point' );
	expected = [
		dt,
		dt,
		dt,
		dt,
		'generic',
		dt,
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'complex_floating_point_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=numeric)', function test( t ) {
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

	dt = defaults.get( 'dtypes.numeric' );
	expected = [
		'float64',
		'float32',
		'int32',
		'uint16',
		dt,
		'int8',
		'complex64'
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'numeric' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=numeric_and_generic)', function test( t ) {
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

	dt = defaults.get( 'dtypes.numeric' );
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
		dt = resolve( values[ i ], 'numeric_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'integer' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'integer_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=signed_integer)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'signed_integer' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=signed_integer_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'signed_integer_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=unsigned_integer)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'unsigned_integer' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=unsigned_integer_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'unsigned_integer_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer_index)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'integer_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=integer_index_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'integer_index_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=boolean_index)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'boolean_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=boolean_index_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'boolean_index_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=mask_index)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'mask_index' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=mask_index_and_generic)', function test( t ) {
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
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'mask_index_and_generic' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves an output data type (policy=accumulation)', function test( t ) {
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

	dt = defaults.get( 'dtypes.real_floating_point' );
	expected = [
		'float64',
		'float32',
		'int32',
		'uint32',
		'generic',
		'int32',
		'complex64',
		dt
	];
	for ( i = 0; i < values.length; i++ ) {
		dt = resolve( values[ i ], 'accumulation' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});
