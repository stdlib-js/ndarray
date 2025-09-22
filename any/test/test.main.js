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
var any = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof any, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			any( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			any( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			any( x, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument with invalid `dims` property', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
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
			any( x, opts );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains out-of-bounds dimensions', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 1, 3 ],
		[ 3, 0 ],
		[ 0, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			any( x, opts );
		};
	}
});

tape( 'the function throws an error if provided an options argument with `dims` property which contains duplicate dimensions', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 0, 0 ],
		[ 1, 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			any( x, opts );
		};
	}
});

tape( 'the function throws an error if provided an options argument with `dims` property which contains more dimensions than are present in the input ndarray', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ],
		[ 0, 1, 2, 3, 4 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			any( x, opts );
		};
	}
});

tape( 'the function throws an error if provided an options argument with invalid `keepdims` property', function test( t ) {
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
			var opts = {
				'keepdims': value
			};
			any( x, opts );
		};
	}
});

tape( 'the function tests whether at least one element along one or more ndarray dimensions is truthy (row-major)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

	actual = any( x );
	expected = true;

	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function tests whether at least one element along one or more ndarray dimensions is truthy (column-major)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );

	actual = any( x );
	expected = true;

	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, -5.0, 0.0, -7.0, 0.0 ] ), [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	opts = {
		'dims': [ 0 ]
	};
	actual = any( x, opts );
	expected = [ true, false, true, false ];
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0 ],
		'keepdims': true
	};
	actual = any( x, opts );
	expected = [ [ true, false, true, false ] ];

	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts = {
		'dims': [ 1 ]
	};
	actual = any( x, opts );
	expected = [ true, false ];

	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ],
		'keepdims': true
	};
	actual = any( x, opts );
	expected = [ [ true ], [ false ] ];

	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
