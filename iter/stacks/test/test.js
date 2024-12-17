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
var proxyquire = require( 'proxyquire' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var slice = require( './../../../slice' );
var ndarray2array = require( './../../../to-array' );
var nditerStacks = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nditerStacks, 'function', 'main export is a function' );
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( value, [ 1, 2 ] );
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( value, [ 1, 2 ], {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[ '5' ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of integers (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[ '5' ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of unique integers', function test( t ) {
	var values;
	var i;

	values = [
		[ 2, 2 ],
		[ 1, 1 ],
		[ 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of unique integers (options)', function test( t ) {
	var values;
	var i;

	values = [
		[ 2, 2 ],
		[ 1, 1 ],
		[ 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of integers which resolve to ascending sort order', function test( t ) {
	var values;
	var i;

	values = [
		[ 2, 1 ],
		[ 1, 0 ],
		[ 2, -2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array of integers which resolve to ascending sort order (options)', function test( t ) {
	var values;
	var i;

	values = [
		[ 2, 1 ],
		[ 1, 0 ],
		[ 2, -2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument containing a dimension index which is out-of-bounds', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 3 ],
		[ -5, 2 ],
		[ -5, 3 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided a second argument containing a dimension index which is out-of-bounds (options)', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 3 ],
		[ -5, 2 ],
		[ -5, 3 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an object', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( zeros( [ 2, 2, 2 ] ), [ 1, 2 ], value );
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
			nditerStacks( zeros( [ 2, 2, 2 ] ), [ 1, 2 ], {
				'readonly': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `readonly` option which equal to `false` when the input array is read-only', function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var x = zeros( [ 2, 2, 2 ], {
			'readonly': true
		});
		nditerStacks( x, [ 1, 2 ], {
			'readonly': false
		});
	}
});

tape( 'the function throws an error if provided an ndarray having fewer than `dims.length+1` dimensions', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 2 ] ),
		zeros( [ 2, 2 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( value, [ 1, 2 ] );
		};
	}
});

tape( 'the function throws an error if provided an ndarray having fewer than `dims.length+1` dimensions (options)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 2 ] ),
		zeros( [ 2, 2 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nditerStacks( value, [ 1, 2 ], {} );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(1,2))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	expected = [
		{
			'value': slice( x, 0, null, null ),
			'done': false
		},
		{
			'value': slice( x, 1, null, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 1, 2 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(-2,-1))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	expected = [
		{
			'value': slice( x, 0, null, null ),
			'done': false
		},
		{
			'value': slice( x, 1, null, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ -2, -1 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(0,2))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	expected = [
		{
			'value': slice( x, null, 0, null ),
			'done': false
		},
		{
			'value': slice( x, null, 1, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 0, 2 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(0,1))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	expected = [
		{
			'value': slice( x, null, null, 0 ),
			'done': false
		},
		{
			'value': slice( x, null, null, 1 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 0, 1 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(2))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array([
		[
			[ 1, 2 ],
			[ 3, 4 ] ],
		[
			[ 5, 6 ],
			[ 7, 8 ]
		]
	]);
	expected = [
		{
			'value': slice( x, 0, 0, null ),
			'done': false
		},
		{
			'value': slice( x, 0, 1, null ),
			'done': false
		},
		{
			'value': slice( x, 1, 0, null ),
			'done': false
		},
		{
			'value': slice( x, 1, 1, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 2 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(1))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array([
		[
			[ 1, 2 ],
			[ 3, 4 ] ],
		[
			[ 5, 6 ],
			[ 7, 8 ]
		]
	]);
	expected = [
		{
			'value': slice( x, 0, null, 0 ),
			'done': false
		},
		{
			'value': slice( x, 0, null, 1 ),
			'done': false
		},
		{
			'value': slice( x, 1, null, 0 ),
			'done': false
		},
		{
			'value': slice( x, 1, null, 1 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 1 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=3, dims=(0))', function test( t ) {
	var expected;
	var it;
	var e;
	var x;
	var r;
	var i;

	x = array([
		[
			[ 1, 2 ],
			[ 3, 4 ] ],
		[
			[ 5, 6 ],
			[ 7, 8 ]
		]
	]);
	expected = [
		{
			'value': slice( x, null, 0, 0 ),
			'done': false
		},
		{
			'value': slice( x, null, 0, 1 ),
			'done': false
		},
		{
			'value': slice( x, null, 1, 0 ),
			'done': false
		},
		{
			'value': slice( x, null, 1, 1 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 0 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=4, dims=(2,3))', function test( t ) {
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
			'value': slice( x, 0, 0, null, null ),
			'done': false
		},
		{
			'value': slice( x, 0, 1, null, null ),
			'done': false
		},
		{
			'value': slice( x, 1, 0, null, null ),
			'done': false
		},
		{
			'value': slice( x, 1, 1, null, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 2, 3 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (ndims=4, dims=(1,3))', function test( t ) {
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
			'value': slice( x, 0, null, 0, null ),
			'done': false
		},
		{
			'value': slice( x, 0, null, 1, null ),
			'done': false
		},
		{
			'value': slice( x, 1, null, 0, null ),
			'done': false
		},
		{
			'value': slice( x, 1, null, 1, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 1, 3 ] );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), true, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function supports returning writable views (ndims=4, dims=(2,3)', function test( t ) {
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
			'value': slice( x, 0, 0, null, null ),
			'done': false
		},
		{
			'value': slice( x, 0, 1, null, null ),
			'done': false
		},
		{
			'value': slice( x, 1, 0, null, null ),
			'done': false
		},
		{
			'value': slice( x, 1, 1, null, null ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = nditerStacks( x, [ 2, 3 ], {
		'readonly': false
	});
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
			t.deepEqual( ndarray2array( r.value ), ndarray2array( e.value ), 'returns expected value' );
			t.strictEqual( isReadOnly( r.value ), false, 'returns expected value' );
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

	it = nditerStacks( x, [ 1, 2 ] );
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

	it = nditerStacks( zeros( [ 2, 2, 2 ] ), [ 1, 2 ] );

	r = it.next();
	t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
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

	it = nditerStacks( zeros( [ 2, 2, 2 ] ), [ 1, 2 ] );

	r = it.next();
	t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( isndarrayLike( r.value ), true, 'returns expected value' );
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
	var nditerStacks;
	var it1;
	var it2;
	var x;
	var i;

	nditerStacks = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	x = array( [ [ [ 1, 2 ], [ 3, 4 ] ] ] );

	it1 = nditerStacks( x, [ 1, 2 ] );
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns an object' );
	t.strictEqual( typeof it2.next, 'function', 'has method' );
	t.strictEqual( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < x.shape[ 0 ]; i++ ) {
		t.deepEqual( ndarray2array( it2.next().value ), ndarray2array( it1.next().value ), 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var nditerStacks;
	var it;

	nditerStacks = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = nditerStacks( zeros( [ 2, 2, 2 ] ), [ 1, 2 ] );
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});