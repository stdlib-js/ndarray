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
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var nditerIndices = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nditerIndices, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an array of nonnegative integers', function test( t ) {
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
			nditerIndices( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an array of nonnegative integers (options)', function test( t ) {
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
			nditerIndices( value, {} );
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
			nditerIndices( x.shape, value );
		};
	}
});

tape( 'the function throws an error if provided an `order` option which is not a valid order', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ] );

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		false,
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
			nditerIndices( x.shape, {
				'order': value
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (ndims=0)', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = zeros( [] );
	expected = [
		{
			'done': true
		}
	];

	it = nditerIndices( x.shape );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=1)', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
	expected = [
		{
			'value': [ 0 ],
			'done': false
		},
		{
			'value': [ 1 ],
			'done': false
		},
		{
			'value': [ 2 ],
			'done': false
		},
		{
			'value': [ 3 ],
			'done': false
		},
		{
			'value': [ 4 ],
			'done': false
		},
		{
			'value': [ 5 ],
			'done': false
		},
		{
			'value': [ 6 ],
			'done': false
		},
		{
			'value': [ 7 ],
			'done': false
		},
		{
			'value': [ 8 ],
			'done': false
		},
		{
			'value': [ 9 ],
			'done': false
		},
		{
			'value': [ 10 ],
			'done': false
		},
		{
			'value': [ 11 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerIndices( x.shape );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
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
			'value': [ 0, 0 ],
			'done': false
		},
		{
			'value': [ 0, 1 ],
			'done': false
		},
		{
			'value': [ 0, 2 ],
			'done': false
		},
		{
			'value': [ 1, 0 ],
			'done': false
		},
		{
			'value': [ 1, 1 ],
			'done': false
		},
		{
			'value': [ 1, 2 ],
			'done': false
		},
		{
			'value': [ 2, 0 ],
			'done': false
		},
		{
			'value': [ 2, 1 ],
			'done': false
		},
		{
			'value': [ 2, 2 ],
			'done': false
		},
		{
			'value': [ 3, 0 ],
			'done': false
		},
		{
			'value': [ 3, 1 ],
			'done': false
		},
		{
			'value': [ 3, 2 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerIndices( x.shape );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
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
			'value': [ 0, 0, 0 ],
			'done': false
		},
		{
			'value': [ 0, 0, 1 ],
			'done': false
		},
		{
			'value': [ 0, 1, 0 ],
			'done': false
		},
		{
			'value': [ 0, 1, 1 ],
			'done': false
		},
		{
			'value': [ 1, 0, 0 ],
			'done': false
		},
		{
			'value': [ 1, 0, 1 ],
			'done': false
		},
		{
			'value': [ 1, 1, 0 ],
			'done': false
		},
		{
			'value': [ 1, 1, 1 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerIndices( x.shape );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
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
			'value': [ 0, 0, 0, 0 ],
			'done': false
		},
		{
			'value': [ 0, 0, 0, 1 ],
			'done': false
		},
		{
			'value': [ 0, 0, 1, 0 ],
			'done': false
		},
		{
			'value': [ 0, 0, 1, 1 ],
			'done': false
		},
		{
			'value': [ 0, 1, 0, 0 ],
			'done': false
		},
		{
			'value': [ 0, 1, 0, 1 ],
			'done': false
		},
		{
			'value': [ 0, 1, 1, 0 ],
			'done': false
		},
		{
			'value': [ 0, 1, 1, 1 ],
			'done': false
		},
		{
			'value': [ 1, 0, 0, 0 ],
			'done': false
		},
		{
			'value': [ 1, 0, 0, 1 ],
			'done': false
		},
		{
			'value': [ 1, 0, 1, 0 ],
			'done': false
		},
		{
			'value': [ 1, 0, 1, 1 ],
			'done': false
		},
		{
			'value': [ 1, 1, 0, 0 ],
			'done': false
		},
		{
			'value': [ 1, 1, 0, 1 ],
			'done': false
		},
		{
			'value': [ 1, 1, 1, 0 ],
			'done': false
		},
		{
			'value': [ 1, 1, 1, 1 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerIndices( x.shape );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function supports returning indices in column-major order (ndims=4)', function test( t ) {
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
			'value': [ 0, 0, 0, 0 ],
			'done': false
		},
		{
			'value': [ 1, 0, 0, 0 ],
			'done': false
		},
		{
			'value': [ 0, 1, 0, 0 ],
			'done': false
		},
		{
			'value': [ 1, 1, 0, 0 ],
			'done': false
		},
		{
			'value': [ 0, 0, 1, 0 ],
			'done': false
		},
		{
			'value': [ 1, 0, 1, 0 ],
			'done': false
		},
		{
			'value': [ 0, 1, 1, 0 ],
			'done': false
		},
		{
			'value': [ 1, 1, 1, 0 ],
			'done': false
		},
		{
			'value': [ 0, 0, 0, 1 ],
			'done': false
		},
		{
			'value': [ 1, 0, 0, 1 ],
			'done': false
		},
		{
			'value': [ 0, 1, 0, 1 ],
			'done': false
		},
		{
			'value': [ 1, 1, 0, 1 ],
			'done': false
		},
		{
			'value': [ 0, 0, 1, 1 ],
			'done': false
		},
		{
			'value': [ 1, 0, 1, 1 ],
			'done': false
		},
		{
			'value': [ 0, 1, 1, 1 ],
			'done': false
		},
		{
			'value': [ 1, 1, 1, 1 ],
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerIndices( x.shape, {
		'order': 'column-major'
	});
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
			t.deepEqual( r.value, e.value, 'returns expected value' );
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

	it = nditerIndices( x.shape );
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

	it = nditerIndices( zeros( [ 2, 2 ] ).shape );

	r = it.next();
	t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
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

	it = nditerIndices( zeros( [ 2, 2 ] ).shape );

	r = it.next();
	t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isNonNegativeIntegerArray( r.value ), true, 'returns expected value' );
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
	var nditerIndices;
	var it1;
	var it2;
	var x;
	var i;

	nditerIndices = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	it1 = nditerIndices( x.shape );
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns an object' );
	t.strictEqual( typeof it2.next, 'function', 'has method' );
	t.strictEqual( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < x.shape[ 0 ]; i++ ) {
		t.deepEqual( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var nditerIndices;
	var it;

	nditerIndices = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = nditerIndices( zeros( [ 2, 2 ] ).shape );
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
