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
var zeros = require( './../../zeros' );
var strides = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strides, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a minimal ndarray-like object', function test( t ) {
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
		{},
		function noop() {},
		{
			'strides': 3.14
		},
		{
			'strides': -1
		},
		{
			'strides': null
		},
		{
			'strides': {}
		},
		{
			'strides': [ 3.14 ]
		},
		{
			'strides': [ -1.5 ]
		},
		{
			'shape': null
		},
		{
			'shape': {}
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strides( value );
		};
	}
});

tape( 'if provided a zero-dimensional ndarray, the function returns a single-element strides array', function test( t ) {
	t.deepEqual( strides( zeros( [] ) ), [ 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided a zero-dimensional minimal ndarray-like object, the function returns a single-element strides array', function test( t ) {
	var x = {
		'shape': []
	};
	t.deepEqual( strides( x ), [ 0 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns the strides of an ndarray (row-major)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ], {
			'order': 'row-major'
		}),
		zeros( [ 1, 1 ], {
			'order': 'row-major'
		}),
		zeros( [ 3, 3, 0, 3 ], {
			'order': 'row-major'
		}),
		zeros( [ 1, 2, 3, 4 ], {
			'order': 'row-major'
		}),
		zeros( [ 5 ], {
			'order': 'row-major'
		})
	];

	expected = [
		values[ 0 ].strides,
		values[ 1 ].strides,
		values[ 2 ].strides,
		values[ 3 ].strides,
		values[ 4 ].strides
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});

tape( 'the function returns the strides of an ndarray (column-major)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ], {
			'order': 'column-major'
		}),
		zeros( [ 1, 1 ], {
			'order': 'column-major'
		}),
		zeros( [ 3, 3, 0, 3 ], {
			'order': 'column-major'
		}),
		zeros( [ 1, 2, 3, 4 ], {
			'order': 'column-major'
		}),
		zeros( [ 5 ], {
			'order': 'column-major'
		})
	];

	expected = [
		values[ 0 ].strides,
		values[ 1 ].strides,
		values[ 2 ].strides,
		values[ 3 ].strides,
		values[ 4 ].strides
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (strides)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'strides': [ 9, 3, 1 ]
		},
		{
			'strides': [ 1, 1 ]
		},
		{
			'strides': [ 27, 9, 0, 3 ]
		},
		{
			'strides': [ 48, 24, 12, 4 ]
		},
		{
			'strides': [ 5 ]
		}
	];

	expected = [
		values[ 0 ].strides,
		values[ 1 ].strides,
		values[ 2 ].strides,
		values[ 3 ].strides,
		values[ 4 ].strides
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ]
		},
		{
			'shape': [ 1, 1 ]
		},
		{
			'shape': [ 3, 3, 0, 3 ]
		},
		{
			'shape': [ 1, 2, 3, 4 ]
		},
		{
			'shape': [ 5 ]
		}
	];

	expected = [
		[ 9, 3, 1 ],
		[ 1, 1 ],
		[ 0, 0, 3, 1 ],
		[ 24, 12, 4, 1 ],
		[ 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, order=row-major)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ],
			'order': 'row-major'
		},
		{
			'shape': [ 1, 1 ],
			'order': 'row-major'
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'order': 'row-major'
		},
		{
			'shape': [ 1, 2, 3, 4 ],
			'order': 'row-major'
		},
		{
			'shape': [ 5 ],
			'order': 'row-major'
		}
	];

	expected = [
		[ 9, 3, 1 ],
		[ 1, 1 ],
		[ 0, 0, 3, 1 ],
		[ 24, 12, 4, 1 ],
		[ 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (shape, order=column-major)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'shape': [ 3, 3, 3 ],
			'order': 'column-major'
		},
		{
			'shape': [ 1, 1 ],
			'order': 'column-major'
		},
		{
			'shape': [ 3, 3, 0, 3 ],
			'order': 'column-major'
		},
		{
			'shape': [ 1, 2, 3, 4 ],
			'order': 'column-major'
		},
		{
			'shape': [ 5 ],
			'order': 'column-major'
		}
	];

	expected = [
		[ 1, 3, 9 ],
		[ 1, 1 ],
		[ 1, 3, 9, 0 ],
		[ 1, 1, 2, 6 ],
		[ 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for shape '+values[ i ].shape.join( 'x' ) );
	}
	t.end();
});
