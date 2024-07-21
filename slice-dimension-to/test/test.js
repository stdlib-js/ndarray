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

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../base/assert/is-read-only' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var typedarray = require( '@stdlib/array/typed' );
var zeros = require( './../../zeros' );
var numel = require( './../../base/numel' );
var ndarray2array = require( './../../to-array' );
var baseCtor = require( './../../base/ctor' );
var ctor = require( './../../ctor' );
var sliceDimensionTo = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceDimensionTo, 'function', 'main export is a function' );
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
			sliceDimensionTo( value, 0, 1 );
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
			sliceDimensionTo( value, 0, 1, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var x;
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
	x = zeros( [ 2, 2 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceDimensionTo( x, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer (options)', function test( t ) {
	var values;
	var x;
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
	x = zeros( [ 2, 2 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceDimensionTo( x, value, 1, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an integer', function test( t ) {
	var values;
	var x;
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
	x = zeros( [ 2, 2 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceDimensionTo( x, 0, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an integer (options)', function test( t ) {
	var values;
	var x;
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
	x = zeros( [ 2, 2 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceDimensionTo( x, 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var x;
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
	x = zeros( [ 2, 2 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceDimensionTo( x, 0, 1, value );
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean', function test( t ) {
	var values;
	var x;
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
	x = zeros( [ 2, 2 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceDimensionTo( x, 0, 1, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided a zero-dimensional array (default)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error' );
	}
	t.end();

	function badValue( x ) {
		return function badValue() {
			sliceDimensionTo( x, 0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a zero-dimensional array (strict=false)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error' );
	}
	t.end();

	function badValue( x ) {
		return function badValue() {
			sliceDimensionTo( x, 0, 0, {
				'strict': false
			});
		};
	}
});

tape( 'the function throws an error if provided a zero-dimensional array (strict=true)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error' );
	}
	t.end();

	function badValue( x ) {
		return function badValue() {
			sliceDimensionTo( x, 0, 0, {
				'strict': true
			});
		};
	}
});

tape( 'the function throws an error if the dimension index exceeds the number of dimensions (default)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ], 10 ), RangeError, 'throws an error when provided ' + values[ i ].shape.join( 'x' ) );
		t.throws( badValue( values[ i ], -10 ), RangeError, 'throws an error when provided ' + values[ i ].shape.join( 'x' ) );
	}
	t.end();

	function badValue( x, dim ) {
		return function badValue() {
			sliceDimensionTo( x, dim, 0 );
		};
	}
});

tape( 'the function throws an error if the dimension index exceeds the number of dimensions (strict=false)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ], 10 ), RangeError, 'throws an error when provided ' + values[ i ].shape.join( 'x' ) );
		t.throws( badValue( values[ i ], -10 ), RangeError, 'throws an error when provided ' + values[ i ].shape.join( 'x' ) );
	}
	t.end();

	function badValue( x, dim ) {
		return function badValue() {
			sliceDimensionTo( x, dim, 0, {
				'strict': false
			});
		};
	}
});

tape( 'the function throws an error if the dimension index exceeds the number of dimensions (strict=true)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ], 10 ), RangeError, 'throws an error when provided ' + values[ i ].shape.join( 'x' ) );
		t.throws( badValue( values[ i ], -10 ), RangeError, 'throws an error when provided ' + values[ i ].shape.join( 'x' ) );
	}
	t.end();

	function badValue( x, dim ) {
		return function badValue() {
			sliceDimensionTo( x, dim, 0, {
				'strict': true
			});
		};
	}
});

tape( 'by default, the function throws an error when an ending index exceeds array bounds', function test( t ) {
	var values;
	var stop;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];

	stop = [
		10,
		20,
		20,
		20
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceDimensionTo( x, 0, s );
		};
	}
});

tape( 'in strict mode, the function throws an error when an ending index exceeds array bounds', function test( t ) {
	var values;
	var stop;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];

	stop = [
		10,
		20,
		20,
		20
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceDimensionTo( x, 0, s, {
				'strict': true
			});
		};
	}
});

tape( 'in non-strict mode, the function returns an empty array when an ending index exceeds array bounds', function test( t ) {
	var actual;
	var values;
	var stop;
	var i;

	values = [
		zeros( [ 1 ], { 'dtype': 'float64' } ),
		zeros( [ 1, 1 ], { 'dtype': 'float32' } ),
		zeros( [ 1, 1, 1 ], { 'dtype': 'int32' } ),
		zeros( [ 1, 1, 1, 1 ], { 'dtype': 'uint32' } ),
		zeros( [ 1, 1, 1, 1, 1 ], { 'dtype': 'complex128' } )
	];

	stop = [
		-10,
		-20,
		-20,
		-20,
		-10
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = sliceDimensionTo( values[ i ], 0, stop[ i ], {
			'strict': false
		});
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( numel( actual.shape ), 0, 'returns expected value' );
		t.strictEqual( actual.dtype, values[ i ].dtype, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an empty array when an ending index is the first element along a dimension', function test( t ) {
	var actual;
	var values;
	var stop;
	var dim;
	var i;

	values = [
		zeros( [ 1 ], { 'dtype': 'float64' } ),
		zeros( [ 1, 1 ], { 'dtype': 'float32' } ),
		zeros( [ 1, 1, 1 ], { 'dtype': 'int32' } ),
		zeros( [ 1, 1, 1, 1 ], { 'dtype': 'uint32' } ),
		zeros( [ 1, 1, 1, 1, 1 ], { 'dtype': 'complex128' } )
	];

	dim = [
		0,
		1,
		0,
		1,
		4
	];

	stop = [
		0,
		0,
		0,
		0,
		0
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = sliceDimensionTo( values[ i ], dim[ i ], stop[ i ] );
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( numel( actual.shape ), 0, 'returns expected value' );
		t.strictEqual( actual.dtype, values[ i ].dtype, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=1)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var i;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 6 ];
	st = [ 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = sliceDimensionTo( x, 0, 6 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [ 4, 6, 8, 10, 12, 14 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	actual = sliceDimensionTo( x, 0, 4 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 4, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [ 4, 6, 8, 10 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	actual = sliceDimensionTo( x, 0, -2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 4, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [ 4, 6, 8, 10 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=2)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 4, 3 ];
	st = [ 6, 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = sliceDimensionTo( x, 0, 4 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 1, 3 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 0, 2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 0, -2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 1, 2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 2 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6 ],
		[ 10, 12 ],
		[ 16, 18 ],
		[ 22, 24 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 1, -1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 2 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6 ],
		[ 10, 12 ],
		[ 16, 18 ],
		[ 22, 24 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=3)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = typedarray( zeroTo( 100 ), 'float64' );
	sh = [ 2, 4, 3 ];
	st = [ 24, 6, 2 ];
	o = 10;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = sliceDimensionTo( x, 0, 2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10, 12, 14 ],
			[ 16, 18, 20 ],
			[ 22, 24, 26 ],
			[ 28, 30, 32 ]
		],
		[
			[ 34, 36, 38 ],
			[ 40, 42, 44 ],
			[ 46, 48, 50 ],
			[ 52, 54, 56 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 0, 1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 1, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10, 12, 14 ],
			[ 16, 18, 20 ],
			[ 22, 24, 26 ],
			[ 28, 30, 32 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 1, 3 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10, 12, 14 ],
			[ 16, 18, 20 ],
			[ 22, 24, 26 ]
		],
		[
			[ 34, 36, 38 ],
			[ 40, 42, 44 ],
			[ 46, 48, 50 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 2, 1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 1 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10 ],
			[ 16 ],
			[ 22 ],
			[ 28 ]
		],
		[
			[ 34 ],
			[ 40 ],
			[ 46 ],
			[ 52 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = sliceDimensionTo( x, 2, -2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 1 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10 ],
			[ 16 ],
			[ 22 ],
			[ 28 ]
		],
		[
			[ 34 ],
			[ 40 ],
			[ 46 ],
			[ 52 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if a provided ndarray has a constructor supporting read-only instances, the function returns a read-only instance', function test( t ) {
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 6 ];
	st = [ 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	actual = sliceDimensionTo( x, 0, 6 );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	x = new baseCtor( 'float64', buf, sh, st, o, ord );

	actual = sliceDimensionTo( x, 0, 6 );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), false, 'returns expected value' );

	t.end();
});
