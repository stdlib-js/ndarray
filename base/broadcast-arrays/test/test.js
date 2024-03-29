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
var isArray = require( '@stdlib/assert/is-array' );
var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var ndarray = require( './../../../base/ctor' );
var broadcastArrays = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof broadcastArrays, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided broadcast-incompatible ndarrays', function test( t ) {
	var values;
	var x;
	var i;

	x = array({
		'shape': [ 10, 10 ]
	});

	values = [
		[ 10, 20, 10 ],
		[ 10, 10, 100 ],
		[ 10, 10, 2 ],
		[ 10, 10, 9 ],
		[ 10, 2, 10 ],
		[ 10, 9, 10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided shape ('+values[ i ].join( ',')+')' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			broadcastArrays( [ x, zeros( value ) ] );
		};
	}
});

tape( 'the function returns an empty array if provided an empty array', function test( t ) {
	var out = broadcastArrays( [] );
	t.strictEqual( isArray( out ), true, 'returns expected value' );
	t.deepEqual( out, [], 'returns expected value' );
	t.end();
});

tape( 'the function returns "base" ndarray instances (1 array)', function test( t ) {
	var out;
	var x;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	out = broadcastArrays( [ x ] );

	t.strictEqual( isArray( out ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );

	t.notEqual( out[ 0 ], x, 'returns new instance' );
	t.strictEqual( out[ 0 ] instanceof ndarray, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns "base" ndarray instances (2 arrays)', function test( t ) {
	var out;
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	y = zeros( [ 2, 2, 2 ] );
	out = broadcastArrays( [ x, y ] );

	t.strictEqual( isArray( out ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	t.notEqual( out[ 0 ], x, 'returns new instance' );
	t.strictEqual( out[ 0 ] instanceof ndarray, true, 'returns expected value' );

	t.notEqual( out[ 1 ], y, 'returns new instance' );
	t.strictEqual( out[ 1 ] instanceof ndarray, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns "base" ndarray instances (>2 arrays)', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	y = zeros( [ 2, 2, 2 ] );
	z = zeros( [ 1 ] );
	out = broadcastArrays( [ x, y, z ] );

	t.strictEqual( isArray( out ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );

	t.notEqual( out[ 0 ], x, 'returns new instance' );
	t.strictEqual( out[ 0 ] instanceof ndarray, true, 'returns expected value' );

	t.notEqual( out[ 1 ], y, 'returns new instance' );
	t.strictEqual( out[ 1 ] instanceof ndarray, true, 'returns expected value' );

	t.notEqual( out[ 2 ], z, 'returns new instance' );
	t.strictEqual( out[ 2 ] instanceof ndarray, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns views over underlying array data buffers', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	y = zeros( [ 2, 2, 2 ] );
	z = zeros( [ 1 ] );
	out = broadcastArrays( [ x, y, z ] );

	t.strictEqual( out[ 0 ].data, x.data, 'returns expected value' );
	t.strictEqual( out[ 1 ].data, y.data, 'returns expected value' );
	t.strictEqual( out[ 2 ].data, z.data, 'returns expected value' );

	t.end();
});

tape( 'the function broadcasts input arrays (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
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
	y = zeros( [ 5, 1, 2 ], {
		'order': 'row-major',
		'dtype': 'generic'
	});

	expected = [ 5, 2, 2 ];
	out = broadcastArrays( [ x, y ] );

	t.deepEqual( out[ 0 ].shape, expected, 'returns expected shape' );
	t.deepEqual( out[ 1 ].shape, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = out[ 0 ].get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = out[ 0 ].get( i, 0, 1 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',0,1)' );

		v = out[ 0 ].get( i, 1, 0 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',1,0)' );

		v = out[ 0 ].get( i, 1, 1 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts input arrays (row-major; strides)', function test( t ) {
	var expected;
	var data;
	var out;
	var x;
	var y;
	var v;
	var i;

	data = [ 1, 2, 3, 4 ];
	x = ndarray( 'generic', data, [ 2, 2 ], [ -2, -1 ], 3, 'row-major' );
	y = ndarray( 'generic', [ 0, 0, 0, 0, 0 ], [ 5, 1, 1 ], [ -1, -1, -1 ], 4, 'row-major' );

	expected = [ 5, 2, 2 ];
	out = broadcastArrays( [ x, y ] );

	t.deepEqual( out[ 0 ].shape, expected, 'returns expected shape' );
	t.deepEqual( out[ 1 ].shape, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = out[ 0 ].get( i, 0, 0 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',0,0)' );

		v = out[ 0 ].get( i, 0, 1 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',0,1)' );

		v = out[ 0 ].get( i, 1, 0 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,0)' );

		v = out[ 0 ].get( i, 1, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts input arrays (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
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
	y = zeros( [ 5, 1, 2 ], {
		'order': 'row-major',
		'dtype': 'generic'
	});

	expected = [ 5, 2, 2 ];
	out = broadcastArrays( [ x, y ] );

	t.deepEqual( out[ 0 ].shape, expected, 'returns expected shape' );
	t.deepEqual( out[ 1 ].shape, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = out[ 0 ].get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = out[ 0 ].get( i, 0, 1 );
		t.strictEqual( v, data[ 2 ], 'returns expected value for element ('+i+',0,1)' );

		v = out[ 0 ].get( i, 1, 0 );
		t.strictEqual( v, data[ 1 ], 'returns expected value for element ('+i+',1,0)' );

		v = out[ 0 ].get( i, 1, 1 );
		t.strictEqual( v, data[ 3 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts input arrays (same shape)', function test( t ) {
	var expected;
	var data;
	var out;
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
	y = zeros( [ 2, 2, 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	expected = [ 2, 2, 2 ];
	out = broadcastArrays( [ x, y ] );

	// Should return a new instance:
	t.notEqual( out[ 0 ], x, 'returns expected value' );
	t.notEqual( out[ 1 ], y, 'returns expected value' );

	t.deepEqual( out[ 0 ].shape, expected, 'returns expected shape' );
	t.deepEqual( out[ 1 ].shape, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = out[ 0 ].get( i, 0, 0 );
		t.strictEqual( v, x.get( i, 0, 0 ), 'returns expected value for element ('+i+',0,0)' );

		v = out[ 0 ].get( i, 0, 1 );
		t.strictEqual( v, x.get( i, 0, 1 ), 'returns expected value for element ('+i+',0,1)' );

		v = out[ 0 ].get( i, 1, 0 );
		t.strictEqual( v, x.get( i, 1, 0 ), 'returns expected value for element ('+i+',1,0)' );

		v = out[ 0 ].get( i, 1, 1 );
		t.strictEqual( v, x.get( i, 1, 1 ), 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts input arrays (same number of dimensions)', function test( t ) {
	var expected;
	var data;
	var out;
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
	y = zeros( [ 1, 2, 1 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	expected = [ 2, 2, 2 ];
	out = broadcastArrays( [ x, y ] );

	t.deepEqual( out[ 0 ].shape, expected, 'returns expected shape' );
	t.deepEqual( out[ 1 ].shape, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = out[ 0 ].get( i, 0, 0 );
		t.strictEqual( v, x.get( i, 0, 0 ), 'returns expected value for element ('+i+',0,0)' );

		v = out[ 0 ].get( i, 0, 1 );
		t.strictEqual( v, x.get( i, 0, 1 ), 'returns expected value for element ('+i+',0,1)' );

		v = out[ 0 ].get( i, 1, 0 );
		t.strictEqual( v, x.get( i, 0, 0 ), 'returns expected value for element ('+i+',1,0)' );

		v = out[ 0 ].get( i, 1, 1 );
		t.strictEqual( v, x.get( i, 0, 1 ), 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});

tape( 'the function broadcasts input arrays (0-dimensional array)', function test( t ) {
	var expected;
	var data;
	var out;
	var x;
	var y;
	var v;
	var i;

	data = [ 1 ];
	x = ndarray( 'generic', data, [], [ 0 ], 0, 'row-major' );

	y = zeros( [ 5, 2, 2 ], {
		'dtype': 'generic',
		'order': 'row-major'
	});

	expected = [ 5, 2, 2 ];
	out = broadcastArrays( [ x, y ] );

	t.deepEqual( out[ 0 ].shape, expected, 'returns expected shape' );
	t.deepEqual( out[ 1 ].shape, expected, 'returns expected shape' );

	for ( i = 0; i < expected[ 0 ]; i++ ) {
		v = out[ 0 ].get( i, 0, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,0)' );

		v = out[ 0 ].get( i, 0, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',0,1)' );

		v = out[ 0 ].get( i, 1, 0 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,0)' );

		v = out[ 0 ].get( i, 1, 1 );
		t.strictEqual( v, data[ 0 ], 'returns expected value for element ('+i+',1,1)' );
	}
	t.end();
});
