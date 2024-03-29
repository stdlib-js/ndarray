/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var unaryBy = require( './../../base/unary-by' );
var abs = require( '@stdlib/math/base/special/abs' );
var isFunction = require( '@stdlib/assert/is-function' );
var dispatchBy = require( './../lib' );


// FIXTURES //

var fill = require( './fixtures/fill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatchBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided either a function or an array of functions as a first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			var data = [ abs ];
			dispatchBy( value, types, data, 3, 1, 1 );
		};
	}
});

tape( 'the function throws an error if not provided an array-like object as a second argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var data = [ abs ];
			dispatchBy( unaryBy, value, data, 3, 1, 1 );
		};
	}
});

tape( 'the function throws an error if not provided either an array-like object or `null` as a third argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			dispatchBy( unaryBy, types, value, 3, 1, 1 );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer for a fourth argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		0,
		-1,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			var data = [ abs ];
			dispatchBy( unaryBy, types, data, value, 1, 1 );
		};
	}
});

tape( 'the function throws an error if not provided a nonnegative integer for a fifth argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			var data = [ abs ];
			dispatchBy( unaryBy, types, data, 3, value, 1 );
		};
	}
});

tape( 'the function throws an error if not provided a nonnegative integer for a sixth argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			var data = [ abs ];
			dispatchBy( unaryBy, types, data, 3, 1, value );
		};
	}
});

tape( 'the function throws an error if the number of types is incompatible with the number of types indicated by other function parameters (function array)', function test( t ) {
	var values;
	var i;

	values = [
		[ 'float64' ],
		[ 'float64', 'float64', 'float64' ],
		[ 'float64', 'float32', 'float32' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var fcns = [ unaryBy, unaryBy, unaryBy ];
			var data = [ abs, abs, abs ];
			dispatchBy( fcns, value, data, 3, 1, 1 );
		};
	}
});

tape( 'the function throws an error if the number of types is incompatible with the number of types indicated by other function parameters (function argument)', function test( t ) {
	var values;
	var i;

	values = [
		[ 'float64' ],
		[ 'float64', 'float64', 'float64' ],
		[ 'float64', 'float32', 'float32' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var data = [ abs, abs, abs ];
			dispatchBy( unaryBy, value, data, 3, 1, 1 );
		};
	}
});

tape( 'the function throws an error if the length of `data` argument does not match the number of ndarray functions', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ abs, abs ],
		[ abs, abs, abs ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			var fcns = [ unaryBy ];
			dispatchBy( fcns, types, value, 3, 1, 1 );
		};
	}
});

tape( 'the function throws an error if the fourth argument is incompatible with the number of input and output ndarrays', function test( t ) {
	var values;
	var i;

	values = [
		0,
		1,
		2,
		4,
		5,
		6,
		7,
		8,
		9,
		10
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var types = [ 'float64', 'float64' ];
			var data = [ abs ];
			dispatchBy( unaryBy, types, data, value, 1, 1 );
		};
	}
});

tape( 'the function throws an error if the number of specified input and output ndarrays is zero', function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var types = [ 'float64' ];
		dispatchBy( fill( 3 ), types, null, 2, 0, 0 );
	}
});

tape( 'the function returns an ndarray function interface', function test( t ) {
	var types;
	var data;
	var f;

	types = [ 'float64', 'float64' ];
	data = [ abs ];

	f = dispatchBy( unaryBy, types, data, 3, 1, 1 );
	t.strictEqual( isFunction( f ), true, 'returns expected value' );

	f = dispatchBy( [ unaryBy ], types, data, 3, 1, 1 );
	t.strictEqual( isFunction( f ), true, 'returns expected value' );

	f = dispatchBy( fill( 3 ), types, null, 3, 1, 1 );
	t.strictEqual( isFunction( f ), true, 'returns expected value' );

	f = dispatchBy( [ fill( 3 ) ], types, null, 3, 1, 1 );
	t.strictEqual( isFunction( f ), true, 'returns expected value' );

	t.end();
});
