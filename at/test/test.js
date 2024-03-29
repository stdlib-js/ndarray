/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var array = require( './../../array' );
var zeros = require( './../../zeros' );
var scalar2ndarray = require( './../../from-scalar' );
var at = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof at, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (nargs=1)', function test( t ) {
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
			at( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (nargs=2)', function test( t ) {
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
			at( value, 0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (nargs=3)', function test( t ) {
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
			at( value, 0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (nargs=4)', function test( t ) {
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
			at( value, 0, 0, 0 );
		};
	}
});

tape( 'the function throws an error if provided an index argument which is not an integer (nargs=2)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			at( zeros( [ 2 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided an index argument which is not an integer (nargs=3)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
		t.throws( badValue1( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
		t.throws( badValue2( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue1( value ) {
		return function badValue() {
			at( zeros( [ 2, 2 ] ), value, 0 );
		};
	}

	function badValue2( value ) {
		return function badValue() {
			at( zeros( [ 2, 2 ] ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an index argument which is not an integer (nargs=4)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
		t.throws( badValue1( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
		t.throws( badValue2( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
		t.throws( badValue3( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue1( value ) {
		return function badValue() {
			at( zeros( [ 2, 2, 2 ] ), value, 0, 0 );
		};
	}

	function badValue2( value ) {
		return function badValue() {
			at( zeros( [ 2, 2, 2 ] ), 0, value, 0 );
		};
	}

	function badValue3( value ) {
		return function badValue() {
			at( zeros( [ 2, 2, 2 ] ), 0, 0, value );
		};
	}
});

tape( 'the function throws an error if the number of index arguments does not match the number of dimensions', function test( t ) {
	var indices;
	var values;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	indices = [
		[ 0 ],
		[ 0, 0, 0 ],
		[ 0 ],
		[ 0, 0 ],
		[ 0, 0, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], indices[ i ] ), RangeError, 'throws an error when provided ' + indices[ i ].toString() );
	}
	t.end();

	function badValues( x, idx ) {
		return function badValues() {
			if ( idx.length === 1 ) {
				return at( x, idx[ 0 ] );
			}
			if ( idx.length === 2 ) {
				return at( x, idx[ 0 ], idx[ 1 ] );
			}
			if ( idx.length === 3 ) {
				return at( x, idx[ 0 ], idx[ 1 ], idx[ 2 ] );
			}
		};
	}
});

tape( 'the function returns `undefined` when an index exceeds array bounds', function test( t ) {
	var indices;
	var values;
	var actual;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];

	indices = [
		[ 10 ],
		[ 0, -20 ],
		[ 20, 0, 0 ],
		[ 10, 20, 0, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = at.apply( null, [ values[ i ] ].concat( indices[ i ] ) );
		t.strictEqual( actual, void 0, 'returns expected value when provided ' + indices[ i ].toString() );
	}
	t.end();
});

tape( 'the function returns an ndarray element (ndims=0)', function test( t ) {
	var x;

	x = zeros( [] );
	t.strictEqual( at( x ), 0.0, 'returns expected value' );

	x = scalar2ndarray( 3.0 );
	t.strictEqual( at( x ), 3.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray element (ndims=1)', function test( t ) {
	var x;

	x = zeros( [ 2 ] );
	t.strictEqual( at( x, 0 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, 1 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, -2 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, -1 ), 0.0, 'returns expected value' );

	x = array( [ 1, 2 ] );
	t.strictEqual( at( x, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( at( x, 1 ), 2.0, 'returns expected value' );
	t.strictEqual( at( x, -2 ), 1.0, 'returns expected value' );
	t.strictEqual( at( x, -1 ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray element (ndims=2)', function test( t ) {
	var x;

	x = zeros( [ 2, 2 ] );
	t.strictEqual( at( x, 0, 0 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, 0, 1 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, 1, 0 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, 1, 1 ), 0.0, 'returns expected value' );

	t.strictEqual( at( x, -2, -2 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, -2, -1 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, -1, -2 ), 0.0, 'returns expected value' );
	t.strictEqual( at( x, -1, -1 ), 0.0, 'returns expected value' );

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	t.strictEqual( at( x, 0, 0 ), 1.0, 'returns expected value' );
	t.strictEqual( at( x, 0, 1 ), 2.0, 'returns expected value' );
	t.strictEqual( at( x, 1, 0 ), 3.0, 'returns expected value' );
	t.strictEqual( at( x, 1, 1 ), 4.0, 'returns expected value' );

	t.strictEqual( at( x, -2, -2 ), 1.0, 'returns expected value' );
	t.strictEqual( at( x, -2, -1 ), 2.0, 'returns expected value' );
	t.strictEqual( at( x, -1, -2 ), 3.0, 'returns expected value' );
	t.strictEqual( at( x, -1, -1 ), 4.0, 'returns expected value' );

	t.end();
});
