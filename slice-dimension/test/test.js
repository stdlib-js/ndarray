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
var Slice = require( '@stdlib/slice/ctor' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var typedarray = require( '@stdlib/array/typed' );
var array = require( './../../array' );
var zeros = require( './../../zeros' );
var numel = require( './../../base/numel' );
var ndarray2array = require( './../../to-array' );
var ctor = require( './../../ctor' );
var sliceDimension = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceDimension, 'function', 'main export is a function' );
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
			sliceDimension( value, 0, 0 );
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
			sliceDimension( value, 0, 0, {} );
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
			sliceDimension( x, value, 0 );
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
			sliceDimension( x, value, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a valid slice argument', function test( t ) {
	var values;
	var x;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
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
			sliceDimension( x, 0, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a valid slice argument (options)', function test( t ) {
	var values;
	var x;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
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
			sliceDimension( x, 0, value, {} );
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
			sliceDimension( x, 0, 0, value );
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
			sliceDimension( x, 0, 0, {
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
			sliceDimension( x, 0, 0 );
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
			sliceDimension( x, 0, 0, {
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
			sliceDimension( x, 0, 0, {
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
			sliceDimension( x, dim, 0 );
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
			sliceDimension( x, dim, 0, {
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
			sliceDimension( x, dim, 0, {
				'strict': true
			});
		};
	}
});

tape( 'by default, the function throws an error when a slice exceeds array bounds', function test( t ) {
	var values;
	var slices;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];

	slices = [
		new Slice( 5, 20, 1 ),
		10,
		new Slice( 7, 8, 1 ),
		20
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceDimension( x, 0, s );
		};
	}
});

tape( 'in strict mode, the function throws an error when a slice exceeds array bounds', function test( t ) {
	var values;
	var slices;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];

	slices = [
		new Slice( 5, 20, 1 ),
		10,
		new Slice( 7, 8, 1 ),
		20
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceDimension( x, 0, s, {
				'strict': true
			});
		};
	}
});

tape( 'in non-strict mode, the function returns an empty array when a slice exceeds array bounds', function test( t ) {
	var actual;
	var values;
	var slices;
	var i;

	values = [
		zeros( [ 1 ], { 'dtype': 'float64' } ),
		zeros( [ 1, 1 ], { 'dtype': 'float32' } ),
		zeros( [ 1, 1, 1 ], { 'dtype': 'int32' } ),
		zeros( [ 1, 1, 1, 1 ], { 'dtype': 'uint32' } ),
		zeros( [ 1, 1, 1, 1, 1 ], { 'dtype': 'complex128' } )
	];

	slices = [
		new Slice( 5, 20, 1 ),
		10,
		new Slice( 7, 8, 1 ),
		20,
		new Slice( -25, -50, -1 )
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = sliceDimension( values[ i ], 0, slices[ i ], {
			'strict': false
		});
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( numel( actual.shape ), 0, 'returns expected value' );
		t.strictEqual( actual.dtype, values[ i ].dtype, 'returns expected value' );
	}
	t.end();
});

tape( 'if all dimensions are reduced, the function returns a zero-dimensional array view (non-base)', function test( t ) {
	var expected;
	var actual;
	var values;
	var slices;
	var x;
	var s;
	var i;

	values = [
		array( typedarray( zeroTo( 4 ), 'float64' ), {
			'shape': [ 4 ],
			'dtype': 'float64'
		}),
		array( typedarray( zeroTo( 8 ), 'float32' ), {
			'shape': [ 8 ],
			'dtype': 'float32'
		}),
		array( typedarray( zeroTo( 2 ), 'int32' ), {
			'shape': [ 2 ],
			'dtype': 'int32'
		}),
		array( typedarray( zeroTo( 16 ), 'uint32' ), {
			'shape': [ 16 ],
			'dtype': 'uint32'
		})
	];
	slices = [
		2,
		3,
		1,
		8
	];
	expected = [
		2,
		3,
		1,
		8
	];
	for ( i = 0; i < values.length; i++ ) {
		x = values[ i ];
		s = slices[ i ];
		actual = sliceDimension( x, 0, s );
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
		t.strictEqual( actual.ndims, 0, 'returns expected value' );
		t.strictEqual( actual.get(), expected[ i ], 'returns expected value' );
		t.strictEqual( actual.data, x.data, 'returns expected value' );
		t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if all dimensions are reduced, the function returns a zero-dimensional array view (non-base, offset)', function test( t ) {
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var s;

	ord = 'row-major';
	dt = 'float64';
	buf = typedarray( zeroTo( 30 ), dt );

	sh = [ 6 ];
	st = [ 2 ];
	o = 5;
	x = new ctor( dt, buf, sh, st, o, ord );
	s = 1;

	actual = sliceDimension( x, 0, s );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.get(), 7, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a view of a provided input array (ndims=1)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var s;
	var i;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 6 ];
	st = [ 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	s = null;
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 4, 6, 8, 10, 12, 14 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	s = null;
	actual = sliceDimension( x, -1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 4, 6, 8, 10, 12, 14 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	s = void 0;
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 4, 6, 8, 10, 12, 14 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	s = new Slice( null );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 4, 6, 8, 10, 12, 14 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	// Reverse order and skip every other element:
	s = new Slice( null, null, -2 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 3, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 14, 10, 6 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	// Reverse order and skip every other element, starting from second-to-last element:
	s = new Slice( 4, null, -2 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 3, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 12, 8, 4 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	// Skip every three elements, starting from second element:
	s = new Slice( 1, null, 3 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 6, 12 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	// Get a sub-array:
	s = new Slice( 4, 1, -1 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.length, 3, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 12, 10, 8 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a view of a provided input array (ndims=2)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var s;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 4, 3 ];
	st = [ 6, 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	s = null;
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = null;
	actual = sliceDimension( x, -2, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = void 0;
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = void 0;
	actual = sliceDimension( x, -1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( null );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( null );
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 4, 6, 8 ],
		[ 10, 12, 14 ],
		[ 16, 18, 20 ],
		[ 22, 24, 26 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Reverse order and skip every other element:
	s = new Slice( null, null, -2 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 22, 24, 26 ],
		[ 10, 12, 14 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( null, null, -2 );
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 2 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 8, 4 ],
		[ 14, 10 ],
		[ 20, 16 ],
		[ 26, 22 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Reverse order and skip every other element, starting from second-to-last element:
	s = new Slice( -2, null, -2 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 16, 18, 20 ],
		[ 4, 6, 8 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a view of a provided input array (ndims=2, partial reduction)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var s;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 4, 3 ];
	st = [ 6, 2 ];
	o = 5;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	s = 1;
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.deepEqual( actual.shape, [ 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 11, 13, 15 ];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = 1;
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 7, 13, 19, 25 ];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a view of a provided input array (ndims=3)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var s;

	buf = typedarray( zeroTo( 100 ), 'float64' );
	sh = [ 2, 4, 3 ];
	st = [ 24, 6, 2 ];
	o = 10;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	s = null;
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

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

	s = null;
	actual = sliceDimension( x, -3, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

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
	t.deepEqual( actual, expected, 'returns expected value' );

	s = void 0;
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

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

	s = new Slice( null );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

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

	s = new Slice( null );
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

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

	s = new Slice( null );
	actual = sliceDimension( x, 2, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

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

	// Reverse order:
	s = new Slice( null, null, -1 );
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[
			[ 34, 36, 38 ],
			[ 40, 42, 44 ],
			[ 46, 48, 50 ],
			[ 52, 54, 56 ]
		],
		[
			[ 10, 12, 14 ],
			[ 16, 18, 20 ],
			[ 22, 24, 26 ],
			[ 28, 30, 32 ]
		]

	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( null, null, -1 );
	actual = sliceDimension( x, 2, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[
			[ 14, 12, 10 ],
			[ 20, 18, 16 ],
			[ 26, 24, 22 ],
			[ 32, 30, 28 ]
		],
		[
			[ 38, 36, 34 ],
			[ 44, 42, 40 ],
			[ 50, 48, 46 ],
			[ 56, 54, 52 ]
		]

	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Skip elements:
	s = new Slice( null, null, 2 );
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 2, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[
			[ 10, 12, 14 ],
			[ 22, 24, 26 ]
		],
		[
			[ 34, 36, 38 ],
			[ 46, 48, 50 ]
		]

	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a view of a provided input array (ndims=3, partial reduction)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var s;

	buf = typedarray( zeroTo( 100 ), 'float64' );
	sh = [ 2, 4, 3 ];
	st = [ -24, -6, -2 ];
	o = 99;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	s = 1;
	actual = sliceDimension( x, 0, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 4, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 75, 73, 71 ],
		[ 69, 67, 65 ],
		[ 63, 61, 59 ],
		[ 57, 55, 53 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = 2;
	actual = sliceDimension( x, 1, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 87, 85, 83 ],
		[ 63, 61, 59 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = 0;
	actual = sliceDimension( x, 2, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 4 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [
		[ 99, 93, 87, 81 ],
		[ 75, 69, 63, 57 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
