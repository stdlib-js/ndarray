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
var zeros = require( './../../zeros' );
var ndarrayWith = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarrayWith, 'function', 'main export is a function' );
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
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ndarrayWith( value, [ 0, 0, 0 ], 5 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of integers', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 3, 3, 3 ], {
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
		[ 0, '1', 0 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ndarrayWith( x, value, 5 );
		};
	}
});

tape( 'the function throws an error if provided a second argument with out-of-bound indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 3, 3, 3 ], {
		'dtype': 'float64'
	});
	values = [
		[ 3, 0, 0 ],
		[ 1, 3, 0 ],
		[ 1, 1, 3 ],
		[ 3 ],
		[ 1, 3 ],
		[ 1, 1, 3, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ndarrayWith( x, value, 5 );
		};
	}
});

tape( 'the function throws an error if provided a second argument whose length does not match the number of dimensions', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 3, 3, 3 ], {
		'dtype': 'float64'
	});
	values = [
		[],
		[ 0 ],
		[ 0, 0 ],
		[ 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ndarrayWith( x, value, 5 );
		};
	}
});

tape( 'the function returns a new ndarray with the element at a specified index replaced by a provided value', function test( t ) {
	var out;
	var x;

	x = zeros( [ 3, 3, 3 ], {
		'dtype': 'float64'
	});

	out = ndarrayWith( x, [ 0, 0, 0 ], 1.0 );
	t.notEqual( out, x, 'returns expected value' );
	t.strictEqual( out.get( 0, 0, 0 ), 1.0, 'returns expected value' );

	out = ndarrayWith( x, [ 1, 1, 1 ], 1.0 );
	t.notEqual( out, x, 'returns expected value' );
	t.strictEqual( out.get( 1, 1, 1 ), 1.0, 'returns expected value' );

	out = ndarrayWith( x, [ 2, 2, 2 ], 1.0 );
	t.notEqual( out, x, 'returns expected value' );
	t.strictEqual( out.get( 2, 2, 2 ), 1.0, 'returns expected value' );

	t.end();
});
