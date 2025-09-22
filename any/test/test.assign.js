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
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( './../../ctor' );
var empty = require( './../../empty' );
var ndarray2array = require( './../../to-array' );
var assign = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof assign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
	var values;
	var y;
	var i;

	y = empty( [], {
		'dtype': 'bool'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var y;
	var i;

	y = empty( [], {
		'dtype': 'bool'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, y, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, y, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument with an invalid `dims` property', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			assign( x, y, opts );
		};
	}
});

tape( 'the function tests whether at least one element along one or more ndarray dimensions is truthy (row-major)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, y );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function tests whether at least one element along one or more ndarray dimensions is truthy (column-major)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, y );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, -5.0, 0.0, -7.0, 0.0 ] ), [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	opts = {
		'dims': [ 0 ]
	};
	y = empty( [ 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts );
	expected = [ true, false, true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts );
	expected = [ true, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.end();
});
