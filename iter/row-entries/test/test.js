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
var proxyquire = require( 'proxyquire' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var isArray = require( '@stdlib/assert/is-array' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var slice = require( './../../../slice' );
var ndarray2array = require( './../../../to-array' );
var nditerRowEntries = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nditerRowEntries, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray', function test( t ) {
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
		[ 1, '1' ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRowEntries( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (options)', function test( t ) {
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
		[ 1, '1' ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRowEntries( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ] );

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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRowEntries( x, value );
		};
	}
});

tape( 'the function throws an error if provided a `readonly` option which is not a boolean', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRowEntries( zeros( [ 2, 2 ] ), {
				'readonly': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `readonly` option which equal to `false` when the input array is read-only', function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var x = zeros( [ 2, 2 ], {
			'readonly': true
		});
		nditerRowEntries( x, {
			'readonly': false
		});
	}
});

tape( 'the function throws an error if provided an ndarray having fewer than two dimensions', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 2 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRowEntries( value );
		};
	}
});

tape( 'the function throws an error if provided an ndarray having fewer than two dimensions (options)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 2 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRowEntries( value, {} );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (ndims=2)', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ] );
	expected = [
		{
			'value': [ [ 0, null ], slice( x, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, null ], slice( x, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 2, null ], slice( x, 2, null ) ],
			'done': false
		},
		{
			'value': [ [ 3, null ], slice( x, 3, null ) ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerRowEntries( x );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( r.value.length, 2, 'returns expected value' );
			t.deepEqual( r.value[ 0 ], e.value[ 0 ], 'returns expected value' );
			t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value[ 1 ] ), ndarray2array( e.value[ 1 ] ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value[ 1 ] ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3)', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	expected = [
		{
			'value': [ [ 0, 0, null ], slice( x, 0, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 1, null ], slice( x, 0, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 0, null ], slice( x, 1, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 1, null ], slice( x, 1, 1, null ) ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerRowEntries( x );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( r.value.length, 2, 'returns expected value' );
			t.deepEqual( r.value[ 0 ], e.value[ 0 ], 'returns expected value' );
			t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value[ 1 ] ), ndarray2array( e.value[ 1 ] ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value[ 1 ] ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=4)', function test( t ) {
	var expected;
	var buf;
	var it;
	var e;
	var x;
	var r;
	var i;

	buf = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		],
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		]
	];
	x = array( buf );
	expected = [
		{
			'value': [ [ 0, 0, 0, null ], slice( x, 0, 0, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 0, 1, null ], slice( x, 0, 0, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 1, 0, null ], slice( x, 0, 1, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 1, 1, null ], slice( x, 0, 1, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 0, 0, null ], slice( x, 1, 0, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 0, 1, null ], slice( x, 1, 0, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 1, 0, null ], slice( x, 1, 1, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 1, 1, null ], slice( x, 1, 1, 1, null ) ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerRowEntries( x );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( r.value.length, 2, 'returns expected value' );
			t.deepEqual( r.value[ 0 ], e.value[ 0 ], 'returns expected value' );
			t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value[ 1 ] ), ndarray2array( e.value[ 1 ] ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value[ 1 ] ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function supports returning writable views (ndims=4)', function test( t ) {
	var expected;
	var buf;
	var it;
	var e;
	var x;
	var r;
	var i;

	buf = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		],
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		]
	];
	x = array( buf );
	expected = [
		{
			'value': [ [ 0, 0, 0, null ], slice( x, 0, 0, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 0, 1, null ], slice( x, 0, 0, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 1, 0, null ], slice( x, 0, 1, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 0, 1, 1, null ], slice( x, 0, 1, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 0, 0, null ], slice( x, 1, 0, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 0, 1, null ], slice( x, 1, 0, 1, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 1, 0, null ], slice( x, 1, 1, 0, null ) ],
			'done': false
		},
		{
			'value': [ [ 1, 1, 1, null ], slice( x, 1, 1, 1, null ) ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerRowEntries( x, {
		'readonly': false
	});
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( r.value.length, 2, 'returns expected value' );
			t.deepEqual( r.value[ 0 ], e.value[ 0 ], 'returns expected value' );
			t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value[ 1 ] ), ndarray2array( e.value[ 1 ] ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value[ 1 ] ), false, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator which does not iterate over empty arrays', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = zeros( [ 2, 0, 2, 2, 2 ] );
	expected = [
		{
			'done': true
		},
		{
			'done': true
		},
		{
			'done': true
		}
	];

	it = nditerRowEntries( x );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		t.deepEqual( r, e, 'returns expected value' );
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = nditerRowEntries( zeros( [ 2, 2 ] ) );

	r = it.next();
	t.strictEqual( isArray( r.value[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isArray( r.value[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.return();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	r = it.next();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = nditerRowEntries( zeros( [ 2, 2 ] ) );

	r = it.next();
	t.strictEqual( isArray( r.value[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isArray( r.value[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( r.value[ 1 ] ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.strictEqual( r.value, 'finished', 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	r = it.next();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var nditerRowEntries;
	var it1;
	var it2;
	var v1;
	var v2;
	var x;
	var i;

	nditerRowEntries = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	it1 = nditerRowEntries( x );
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns an object' );
	t.strictEqual( typeof it2.next, 'function', 'has method' );
	t.strictEqual( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < x[ 0 ]; i++ ) {
		v1 = it1.next().value;
		v2 = it2.next().value;
		t.deepEqual( [ v1[ 0 ], ndarray2array( v1[ 1 ] ) ], [ v2[ 0 ], ndarray2array( v2[ 1 ] ) ], 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var nditerRowEntries;
	var it;

	nditerRowEntries = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = nditerRowEntries( zeros( [ 2, 2 ] ) );
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
