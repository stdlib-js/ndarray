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
var array = require( './../../array' );
var ndarray = require( './../../ctor' );
var isReadOnly = require( './../../base/assert/is-read-only' );
var maybeBroadcastArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof maybeBroadcastArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if a first argument which is not an ndarray', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			maybeBroadcastArray( value, [ 2, 2 ] );
		};
	}
});

tape( 'the function throws an error if a second argument which is not an array of nonnegative integers', function test( t ) {
	var values;
	var x;
	var i;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 2, -1 ],
		[ 2, 3.14 ],
		[ 2, -1 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			maybeBroadcastArray( x, value );
		};
	}
});

tape( 'the function throws an error if provided a desired shape which has fewer dimensions than the input array', function test( t ) {
	var values;
	var x;
	var i;

	x = array({
		'shape': [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
	});

	values = [
		[],
		[ 2 ],
		[ 2, 2 ],
		[ 2, 2, 2 ],
		[ 2, 2, 2, 2 ],
		[ 2, 2, 2, 2, 2 ],
		[ 2, 2, 2, 2, 2, 2 ],
		[ 2, 2, 2, 2, 2, 2, 2 ],
		[ 2, 2, 2, 2, 2, 2, 2, 2 ],
		[ 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided a shape with '+values[ i ].length+' dimension' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			maybeBroadcastArray( x, value );
		};
	}
});

tape( 'the function throws an error if provided a desired shape having a dimension whose size is less than the corresponding dimension in the input array', function test( t ) {
	var values;
	var x;
	var i;

	x = array({
		'shape': [ 10, 10 ]
	});

	values = [
		[ 10, 10, 1 ],
		[ 10, 10, 2 ],
		[ 10, 10, 9 ],
		[ 10, 1, 10 ],
		[ 10, 2, 10 ],
		[ 10, 9, 10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided shape ('+values[ i ].join( ',')+')' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			maybeBroadcastArray( x, value );
		};
	}
});

tape( 'the function throws an error if provided a desired shape and an input array shape which are broadcast-incompatible', function test( t ) {
	var values;
	var x;
	var i;

	x = array({
		'shape': [ 10, 10 ]
	});

	values = [
		[ 10, 20, 10 ],
		[ 10, 10, 100 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided shape ('+values[ i ].join( ',')+')' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			maybeBroadcastArray( x, value );
		};
	}
});

tape( 'if an input ndarray requires broadcasting, the function returns a read-only ndarray', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	y = maybeBroadcastArray( x, [ 2, 2, 2 ] );

	t.notEqual( y, x, 'returns new instance' );
	t.strictEqual( isReadOnly( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a view over the input array data buffer', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	y = maybeBroadcastArray( x, [ 2, 2, 2 ] );

	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function broadcasts an input array (row-major)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4 ];
	x = array( data, {
		'dtype': 'generic',
		'shape': [ 2, 2 ],
		'order': 'row-major'
	});

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (row-major; strides)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4 ];
	x = ndarray( 'generic', data, [ 2, 2 ], [ -2, -1 ], 3, 'row-major' );

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (row-major; strides)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4 ];
	x = ndarray( 'generic', data, [ 2, 2 ], [ -2, 1 ], 2, 'row-major' );

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (row-major; non-contiguous)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	x = ndarray( 'generic', data, [ 2, 2 ], [ 4, 2 ], 1, 'row-major' );

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 5 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 7 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (column-major)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4 ];
	x = array( data, {
		'dtype': 'generic',
		'shape': [ 2, 2 ],
		'order': 'column-major'
	});

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (same shape)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	x = array( data, {
		'dtype': 'generic',
		'shape': [ 2, 2, 2 ],
		'order': 'row-major'
	});

	expected = [ 2, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	// Should return the same instance:
	t.strictEqual( y, x, 'returns expected value' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, x.get( i, 0, 0 ), 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, x.get( i, 0, 1 ), 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, x.get( i, 1, 0 ), 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, x.get( i, 1, 1 ), 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (same number of dimensions)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4 ];
	x = array( data, {
		'dtype': 'generic',
		'shape': [ 2, 1, 2 ],
		'order': 'row-major'
	});

	expected = [ 2, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, x.get( i, 0, 0 ), 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, x.get( i, 0, 1 ), 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, x.get( i, 0, 0 ), 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, x.get( i, 0, 1 ), 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (singleton dimension)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2 ];
	x = array( data, {
		'dtype': 'generic',
		'shape': [ 2, 1 ],
		'order': 'row-major'
	});

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (singleton dimension)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2 ];
	x = array( data, {
		'dtype': 'generic',
		'shape': [ 1, 2 ],
		'order': 'row-major'
	});

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts an input array (0-dimensional array)', function test( t ) {
	var expected;
	var actual;
	var data;
	var x;
	var y;
	var v;
	var i;

	data = [ 1 ];
	x = ndarray( 'generic', data, [], [ 0 ], 0, 'row-major' );

	expected = [ 5, 2, 2 ];
	y = maybeBroadcastArray( x, expected );

	actual = y.shape;
	t.deepEqual( actual, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = y.get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = y.get( i, 0, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,1)' );

		v = y.get( i, 1, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,0)' );

		v = y.get( i, 1, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});
