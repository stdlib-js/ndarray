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
var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var nditerRows = require( './../../../iter/rows' );
var nditer2arrayEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nditer2arrayEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an iterator protocol-compliant object', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerRows( value );
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
			'value': [ 1, 2, 3 ],
			'done': false
		},
		{
			'value': [ 4, 5, 6 ],
			'done': false
		},
		{
			'value': [ 7, 8, 9 ],
			'done': false
		},
		{
			'value': [ 10, 11, 12 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditer2arrayEach( nditerRows( x ) );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
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
			'value': [ 1, 2 ],
			'done': false
		},
		{
			'value': [ 3, 4 ],
			'done': false
		},
		{
			'value': [ 5, 6 ],
			'done': false
		},
		{
			'value': [ 7, 8 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditer2arrayEach( nditerRows( x ) );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
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
			'value': [ 1, 2 ],
			'done': false
		},
		{
			'value': [ 3, 4 ],
			'done': false
		},
		{
			'value': [ 5, 6 ],
			'done': false
		},
		{
			'value': [ 7, 8 ],
			'done': false
		},
		{
			'value': [ 1, 2 ],
			'done': false
		},
		{
			'value': [ 3, 4 ],
			'done': false
		},
		{
			'value': [ 5, 6 ],
			'done': false
		},
		{
			'value': [ 7, 8 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditer2arrayEach( nditerRows( x ) );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = nditer2arrayEach( nditerRows( zeros( [ 2, 2 ] ) ) );

	r = it.next();
	t.strictEqual( isArray( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isArray( r.value ), true, 'returns expected value' );
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

	it = nditer2arrayEach( nditerRows( zeros( [ 2, 2 ] ) ) );

	r = it.next();
	t.strictEqual( isArray( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isArray( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.strictEqual( r.value, 'finished', 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	r = it.next();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var nditer2arrayEach;
	var it1;
	var it2;
	var arr;
	var x;
	var i;

	nditer2arrayEach = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	x = nditerRows( arr );
	x[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = nditer2arrayEach( x );
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns an object' );
	t.strictEqual( typeof it2.next, 'function', 'has method' );
	t.strictEqual( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < arr.shape[ 0 ]; i++ ) {
		t.deepEqual( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return nditerRows( arr );
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var nditer2arrayEach;
	var it;

	nditer2arrayEach = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = nditer2arrayEach( nditerRows( zeros( [ 2, 2 ] ) ) );
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var nditer2arrayEach;
	var it;
	var x;

	nditer2arrayEach = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	x = nditerRows( zeros( [ 2, 2 ] ) );
	x[ '__ITERATOR_SYMBOL__' ] = null;

	it = nditer2arrayEach( x );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
