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
var scalar2ndarray = require( './../../from-scalar' );
var assign = require( './../lib/assign.js' );


// FUNCTIONS //

/**
* Callback function.
*
* @private
* @param {*} value - input value
* @returns {boolean} result
*/
function clbk( value ) {
	return value > 0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof assign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object(n=scalar)', function test( t ) {
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
			assign( value, 1, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object(n=scalar, thisArg)', function test( t ) {
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
			assign( value, 1, y, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object(n=ndarray)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( value, scalar2ndarray( 1, opts ), y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object(n=ndarray, thisArg)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( value, scalar2ndarray( 1, opts ), y, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=scalar, options)', function test( t ) {
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
			assign( value, 1, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=scalar, options, thisArg)', function test( t ) {
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
			assign( value, 1, y, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object(n=ndarray, options)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( value, scalar2ndarray( 1, opts ), y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object(n=ndarray, options, thisArg)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( value, scalar2ndarray( 1, opts ), y, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object', function test( t ) {
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
			assign( x, value, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object (thisArg)', function test( t ) {
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
		3.14,
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
			assign( x, value, y, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object (options)', function test( t ) {
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
		3.14,
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
			assign( x, value, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object (options, thisArg)', function test( t ) {
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
			assign( x, value, y, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type', function test( t ) {
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
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type (thisArg)', function test( t ) {
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
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, y, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type (options)', function test( t ) {
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
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, y, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type (options, thisArg)', function test( t ) {
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
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, y, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an ndarray-like object (n=scalar)', function test( t ) {
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
			assign( x, 1, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an ndarray-like object (n=scalar, thisArg)', function test( t ) {
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
			assign( x, 1, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an ndarray-like object (n=ndarray)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an ndarray-like object (n=scalar, options)', function test( t ) {
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
			assign( x, 1, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an ndarray-like object(n=ndarray, options)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar)', function test( t ) {
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
			assign( x, 1, y, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar, options)', function test( t ) {
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
			assign( x, 1, y, {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar, options, thisArg)', function test( t ) {
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
			assign( x, 1, y, {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), y, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray, options)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), y, {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray, options, thisArg)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), y, {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=scalar)', function test( t ) {
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
			assign( x, 1, y, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=scalar, thisArg)', function test( t ) {
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
			assign( x, 1, y, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=ndarray)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), y, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=ndarray, thisArg)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts ), y, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided an options with an invalid `dims` property (n=scalar)', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dims': value
			};
			assign( x, 1, y, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options with an invalid `dims` property (n=ndarray)', function test( t ) {
	var values;
	var opts1;
	var opts2;
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
			opts1 = {
				'dims': value
			};
			opts2 = {
				'dtype': 'int32'
			};
			assign( x, scalar2ndarray( 1, opts2 ), y, opts1, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not broadcast-compatible with the output array', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	y = empty( [], {
		'dtype': 'bool'
	});
	opts = {
		'dtype': 'int32'
	};

	values = [
		empty( [ 2, 2 ], opts ),
		empty( [ 2, 2, 2 ], opts ),
		empty( [ 1, 1, 1, 4 ], opts ),
		empty( [ 3, 3, 3, 3, 3 ], opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, y, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not broadcast-compatible with the output array (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var y;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	y = empty( [], {
		'dtype': 'bool'
	});
	opts = {
		'dtype': 'int32'
	};

	values = [
		empty( [ 2, 2 ], opts ),
		empty( [ 2, 2, 2 ], opts ),
		empty( [ 1, 1, 1, 4 ], opts ),
		empty( [ 3, 3, 3, 3, 3 ], opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, y, {}, clbk );
		};
	}
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (row-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, 2, y, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, 3, y, clbk );
	expected = false;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (row-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = empty( [], {
		'dtype': 'bool'
	});
	opts = {
		'dtype': 'int32'
	};

	actual = assign( x, scalar2ndarray( 2, opts ), y, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, scalar2ndarray( 3, opts ), y, clbk );
	expected = false;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (column-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );
	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, 2, y, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, 3, y, clbk );
	expected = false;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (column-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );
	y = empty( [], {
		'dtype': 'bool'
	});
	opts = {
		'dtype': 'int32'
	};

	actual = assign( x, scalar2ndarray( 2, opts ), y, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	y = empty( [], {
		'dtype': 'bool'
	});

	actual = assign( x, scalar2ndarray( 3, opts ), y, clbk );
	expected = false;

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major, n=scalar)', function test( t ) {
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
	actual = assign( x, 1, y, opts, clbk );
	expected = [ true, false, true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, 1, y, opts, clbk );
	expected = [ true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ]
	};
	y = empty( [], {
		'dtype': 'bool'
	});
	actual = assign( x, 1, y, opts, clbk );
	expected = true;
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts = {
		'dims': []
	};
	y = empty( [ 2, 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, 1, y, opts, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts1;
	var opts2;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, -5.0, 0.0, -7.0, 0.0 ] ), [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	opts2 = {
		'dtype': 'int32'
	};

	opts1 = {
		'dims': [ 0 ]
	};
	y = empty( [ 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 1, opts2 ), y, opts1, clbk );
	expected = [ true, false, true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 1, opts2 ), y, opts1, clbk );
	expected = [ true, false ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0, 1 ]
	};
	y = empty( [], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 1, opts2 ), y, opts1, clbk );
	expected = true;
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts1 = {
		'dims': []
	};
	y = empty( [ 2, 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 1, opts2 ), y, opts1, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts = {
		'dims': [ 0 ]
	};
	y = empty( [ 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, 2, y, opts, clbk );
	expected = [ false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, 2, y, opts, clbk );
	expected = [ true, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ]
	};
	y = empty( [], {
		'dtype': 'bool'
	});
	actual = assign( x, 2, y, opts, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts = {
		'dims': []
	};
	y = empty( [ 2, 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, 2, y, opts, clbk );
	expected = [ [ false, false, false, false ], [ false, false, false, false ] ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts1;
	var opts2;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts2 = {
		'dtype': 'int32'
	};

	opts1 = {
		'dims': [ 0 ]
	};
	y = empty( [ 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 2, opts2 ), y, opts1, clbk );
	expected = [ false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 1 ]
	};
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 2, opts2 ), y, opts1, clbk );
	expected = [ true, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0, 1 ]
	};
	y = empty( [], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 2, opts2 ), y, opts1, clbk );
	expected = true;

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts1 = {
		'dims': []
	};
	y = empty( [ 2, 4 ], {
		'dtype': 'bool'
	});
	actual = assign( x, scalar2ndarray( 2, opts2 ), y, opts1, clbk );
	expected = [ [ false, false, false, false ], [ false, false, false, false ] ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a callback execution context (n=scalar)', function test( t ) {
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
	actual = assign( x, 1, y, predicate, ctx );
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

tape( 'the function supports providing a callback execution context (n=ndarray)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts;
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
	opts = {
		'dtype': 'int32'
	};
	indices = [];
	values = [];
	arrays = [];
	actual = assign( x, scalar2ndarray( 1, opts ), y, predicate, ctx );
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

tape( 'the function supports providing a callback execution context (n=scalar, options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts;
	var ctx;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});

	ctx = {
		'count': 0
	};
	opts = {
		'dims': [ 0 ]
	};
	indices = [];
	values = [];
	arrays = [];
	actual = assign( x, 1, y, opts, predicate, ctx );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
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

tape( 'the function supports providing a callback execution context (n=ndarray, options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts1;
	var opts2;
	var ctx;
	var x;
	var y;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = empty( [ 2 ], {
		'dtype': 'bool'
	});

	ctx = {
		'count': 0
	};
	opts1 = {
		'dims': [ 0 ]
	};
	opts2 = {
		'dtype': 'int32'
	};
	indices = [];
	values = [];
	arrays = [];
	actual = assign( x, scalar2ndarray( 1, opts2 ), y, opts1, predicate, ctx );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
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
