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
var numel = require( './../../../base/numel' );
var nextCartesianIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nextCartesianIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=0, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [];
	actual = nextCartesianIndex( shape, 'row-major', [], -1 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=0, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [];
	actual = nextCartesianIndex( shape, 'column-major', [], 0 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=1, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 5 ];
	order = 'row-major';

	actual = [];
	idx = [ 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, -1 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 1 ],
		[ 2 ],
		[ 3 ],
		[ 4 ],
		[ 0 ]  // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=1, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 5 ];
	order = 'column-major';

	actual = [];
	idx = [ 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, 0 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 1 ],
		[ 2 ],
		[ 3 ],
		[ 4 ],
		[ 0 ]  // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=1, row-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 5 ];
	actual = nextCartesianIndex( shape, 'row-major', [ 0 ], -10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );

	shape = [ 5 ];
	actual = nextCartesianIndex( shape, 'row-major', [ 0 ], 10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=1, column-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 5 ];
	actual = nextCartesianIndex( shape, 'column-major', [ 0 ], -10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );

	shape = [ 5 ];
	actual = nextCartesianIndex( shape, 'column-major', [ 0 ], 10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=2, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 2, 2 ];
	order = 'row-major';

	actual = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, -1 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 0, 1 ],
		[ 1, 0 ],
		[ 1, 1 ],
		[ 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=2, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 2, 2 ];
	order = 'column-major';

	actual = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, 0 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 1, 0 ],
		[ 0, 1 ],
		[ 1, 1 ],
		[ 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=2, row-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 2, 2 ];
	actual = nextCartesianIndex( shape, 'row-major', [ 0, 0 ], -10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 2 ];
	actual = nextCartesianIndex( shape, 'row-major', [ 0, 0 ], 10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=2, column-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 2, 2 ];
	actual = nextCartesianIndex( shape, 'column-major', [ 0, 0 ], -10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 2 ];
	actual = nextCartesianIndex( shape, 'column-major', [ 0, 0 ], 10 );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=3, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'row-major';

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, -1 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 0, 0, 1 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 0, 2, 0 ],
		[ 0, 2, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 0 ],
		[ 1, 1, 1 ],
		[ 1, 2, 0 ],
		[ 1, 2, 1 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the next Cartesian index (ndims=3, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'column-major';

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, 0 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 1, 0, 0 ],
		[ 0, 1, 0 ],
		[ 1, 1, 0 ],
		[ 0, 2, 0 ],
		[ 1, 2, 0 ],
		[ 0, 0, 1 ],
		[ 1, 0, 1 ],
		[ 0, 1, 1 ],
		[ 1, 1, 1 ],
		[ 0, 2, 1 ],
		[ 1, 2, 1 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the starting dimension index (ndims=3, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'row-major';

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape.slice( 0, 2 ) ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, -2 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 0, 1, 0 ],
		[ 0, 2, 0 ],
		[ 1, 0, 0 ],
		[ 1, 1, 0 ],
		[ 1, 2, 0 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape.slice( 0, 1 ) ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, 0 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 1, 0, 0 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the starting dimension index (ndims=3, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'column-major';

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape.slice( 1 ) ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, 1 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 0, 1, 0 ],
		[ 0, 2, 0 ],
		[ 0, 0, 1 ],
		[ 0, 1, 1 ],
		[ 0, 2, 1 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape.slice( 2 ) ); i++ ) {
		out = nextCartesianIndex( shape, order, idx, 2 );
		t.notEqual( out, idx, 'returns expected value' );
		actual.push( out );
		idx = out;
	}
	expected = [
		[ 0, 0, 1 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=0, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [];
	out = [];
	actual = nextCartesianIndex.assign( shape, 'row-major', [], -1, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [], 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=0, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [];
	out = [];
	actual = nextCartesianIndex.assign( shape, 'column-major', [], -1, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [], 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=1, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 5 ];
	order = 'row-major';

	actual = [];
	idx = [ 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = [ 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, -1, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1 ],
		[ 2 ],
		[ 3 ],
		[ 4 ],
		[ 0 ]  // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=1, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 5 ];
	order = 'column-major';

	actual = [];
	idx = [ 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = [ 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, 0, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1 ],
		[ 2 ],
		[ 3 ],
		[ 4 ],
		[ 0 ]  // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=1, row-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 5 ];
	out = [ 0 ];
	actual = nextCartesianIndex.assign( shape, 'row-major', [ 0 ], -10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0 ], 'returns expected value' );

	shape = [ 5 ];
	out = [ 0 ];
	actual = nextCartesianIndex.assign( shape, 'row-major', [ 0 ], 10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0 ], 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=1, column-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 5 ];
	out = [ 0 ];
	actual = nextCartesianIndex.assign( shape, 'column-major', [ 0 ], -10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0 ], 'returns expected value' );

	shape = [ 5 ];
	out = [ 0 ];
	actual = nextCartesianIndex.assign( shape, 'column-major', [ 0 ], 10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0 ], 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=2, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 2, 2 ];
	order = 'row-major';

	actual = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = [ 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, -1, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 0, 1 ],
		[ 1, 0 ],
		[ 1, 1 ],
		[ 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=2, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 2, 2 ];
	order = 'column-major';

	actual = [];
	idx = [ 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = [ 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, 0, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1, 0 ],
		[ 0, 1 ],
		[ 1, 1 ],
		[ 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=2, row-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 2, 2 ];
	out = [ 0, 0 ];
	actual = nextCartesianIndex.assign( shape, 'row-major', [ 0, 0 ], -10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	shape = [ 2, 2 ];
	out = [ 0, 0 ];
	actual = nextCartesianIndex.assign( shape, 'row-major', [ 0, 0 ], 10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=2, column-major, out-of-bounds)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 2, 2 ];
	out = [ 0, 0 ];
	actual = nextCartesianIndex.assign( shape, 'column-major', [ 0, 0 ], -10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	shape = [ 2, 2 ];
	out = [ 0, 0 ];
	actual = nextCartesianIndex.assign( shape, 'column-major', [ 0, 0 ], 10, out );
	expected = null;

	t.strictEqual( actual, expected, 'returns expected value' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=3, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'row-major';

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = [ 0, 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, -1, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 0, 0, 1 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 0, 2, 0 ],
		[ 0, 2, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 0 ],
		[ 1, 1, 1 ],
		[ 1, 2, 0 ],
		[ 1, 2, 1 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `assign` method which assigns results to an output array (ndims=3, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'column-major';

	actual = [];
	idx = [ 0, 0, 0 ];
	for ( i = 0; i < numel( shape ); i++ ) {
		out = [ 0, 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, 0, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1, 0, 0 ],
		[ 0, 1, 0 ],
		[ 1, 1, 0 ],
		[ 0, 2, 0 ],
		[ 1, 2, 0 ],
		[ 0, 0, 1 ],
		[ 1, 0, 1 ],
		[ 0, 1, 1 ],
		[ 1, 1, 1 ],
		[ 0, 2, 1 ],
		[ 1, 2, 1 ],
		[ 0, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the starting dimension index (ndims=3, row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'row-major';

	actual = [];
	idx = [ 0, 0, 1 ];
	for ( i = 0; i < numel( shape.slice( 0, 2 ) ); i++ ) {
		out = [ 0, 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, -2, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 0, 1, 1 ],
		[ 0, 2, 1 ],
		[ 1, 0, 1 ],
		[ 1, 1, 1 ],
		[ 1, 2, 1 ],
		[ 0, 0, 1 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );

	actual = [];
	idx = [ 0, 0, 1 ];
	for ( i = 0; i < numel( shape.slice( 0, 1 ) ); i++ ) {
		out = [ 0, 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, 0, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1, 0, 1 ],
		[ 0, 0, 1 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the starting dimension index (ndims=3, column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var order;
	var idx;
	var out;
	var tmp;
	var i;

	shape = [ 2, 3, 2 ];
	order = 'column-major';

	actual = [];
	idx = [ 1, 0, 0 ];
	for ( i = 0; i < numel( shape.slice( 1 ) ); i++ ) {
		out = [ 0, 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, 1, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1, 1, 0 ],
		[ 1, 2, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 1 ],
		[ 1, 2, 1 ],
		[ 1, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );

	actual = [];
	idx = [ 1, 0, 0 ];
	for ( i = 0; i < numel( shape.slice( 2 ) ); i++ ) {
		out = [ 0, 0, 0 ];
		tmp = nextCartesianIndex.assign( shape, order, idx, 2, out );
		t.strictEqual( tmp, out, 'returns expected value' );
		actual.push( out.slice() );
		idx = tmp;
	}
	expected = [
		[ 1, 0, 1 ],
		[ 1, 0, 0 ] // cycles back to beginning
	];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
