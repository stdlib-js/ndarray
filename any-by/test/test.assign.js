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


// FUNCTIONS //

/**
* Callback function.
*
* @private
* @param {number} value - input value
* @returns {boolean} result
*/
function clbk( value ) {
	return value > 0.0;
}


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
			assign( value, y, clbk );
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
			assign( value, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (thisArg)', function test( t ) {
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
			assign( value, y, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options, thisArg)', function test( t ) {
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
			assign( value, y, {}, clbk, {} );
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
			assign( x, value, clbk );
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
			assign( x, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (thisArg)', function test( t ) {
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
			assign( x, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (options, thisArg)', function test( t ) {
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
			assign( x, value, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
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
		[]
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

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
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
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, y, {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (thisArg)', function test( t ) {
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
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, y, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options, thisArg)', function test( t ) {
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
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, y, {}, value, {} );
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, y, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (thisArg)', function test( t ) {
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
			assign( x, y, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided an options with an invalid `dims` property', function test( t ) {
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
			assign( x, y, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options with a `dims` property containing out-of-bounds dimension indices', function test( t ) {
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
			assign( x, y, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options with a `dims` property which contains duplicate dimensions', function test( t ) {
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
			assign( x, y, opts, clbk );
		};
	}
});

tape( 'the function tests whether at least one element along one or more ndarray dimensions passes a test implemented by a predicate function (row-major)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, y, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, y, clbk );
	expected = false;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function tests whether at least one element along one or more ndarray dimensions passes a test implemented by a predicate function (column-major)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, y, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, y, clbk );
	expected = false;

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

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0, -5.0, -6.0, -7.0, -8.0 ] ), [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	opts = {
		'dims': [ 0 ]
	};
	y = empty( [ 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = [ true, false, true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = [ true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ]
	};
	y = empty( [], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = true;
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts = {
		'dims': []
	};
	y = empty( [ 2, 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
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

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts = {
		'dims': [ 0 ]
	};
	y = empty( [ 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = [ true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = [ true, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ]
	};
	y = empty( [], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts = {
		'dims': []
	};
	y = empty( [ 2, 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, y, opts, clbk );
	expected = [ [ true, true, true, true ], [ false, false, false, false ] ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	ctx = {
		'count': 0
	};

	indices = [];
	values = [];
	arrays = [];
	actual = assign( x, y, predicate, ctx );

	expected = true;
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0 ],
		[ 1 ],
		[ 2 ],
		[ 3 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function predicate( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value > 0.0;
	}
});

tape( 'the function supports providing an execution context (options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts;
	var ctx;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});

	ctx = {
		'count': 0
	};
	opts = {
		'dims': [ 1 ]
	};
	indices = [];
	values = [];
	arrays = [];
	actual = assign( x, y, opts, predicate, ctx );

	expected = [ false, true ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 0, 1 ],
		[ 1, 0 ],
		[ 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function predicate( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value > 0.0;
	}
});
