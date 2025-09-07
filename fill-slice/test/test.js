/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isComplexDataType = require( './../../base/assert/is-complex-floating-point-data-type' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var zeros = require( '@stdlib/array/zeros' );
var ndzeros = require( './../../zeros' );
var ndarray = require( './../../ctor' );
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var scalar2ndarray = require( './../../base/from-scalar' );
var getData = require( './../../data-buffer' );
var getDType = require( './../../dtype' );
var numel = require( './../../base/numel' );
var fillSlice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fillSlice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (multislice)', function test( t ) {
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
			fillSlice( value, 10.0, new MultiSlice( null, null ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (array)', function test( t ) {
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
			fillSlice( value, 10.0, [] );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (slice arguments)', function test( t ) {
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
			fillSlice( value, 10.0, null, null );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is a read-only ndarray (multislice)', function test( t ) {
	var x = ndzeros( [ 2, 2 ], {
		'dtype': 'float64',
		'readonly': true
	});
	t.throws( badValue( x ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( value, 10.0, new MultiSlice( null, null ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is a read-only ndarray (array)', function test( t ) {
	var x = ndzeros( [ 2, 2 ], {
		'dtype': 'float64',
		'readonly': true
	});
	t.throws( badValue( x ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( value, 10.0, [] );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is a read-only ndarray (slice arguments)', function test( t ) {
	var x = ndzeros( [ 2, 2 ], {
		'dtype': 'float64',
		'readonly': true
	});
	t.throws( badValue( x ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( value, 10.0, null, null );
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to the input ndarray data type (multislice)', function test( t ) {
	var values;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ], {
		'dtype': 'int32'
	});

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
			fillSlice( x, value, new MultiSlice( null, null ) );
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to the input ndarray data type (array)', function test( t ) {
	var values;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ], {
		'dtype': 'int32'
	});

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
			fillSlice( x, value, [ null, null ] );
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to the input ndarray data type (slice arguments)', function test( t ) {
	var values;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ], {
		'dtype': 'int32'
	});

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
			fillSlice( x, value, null, null );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (multislice)', function test( t ) {
	var values;
	var x;
	var s;
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
	x = ndzeros( [ 2 ], {
		'dtype': 'float64'
	});
	s = new MultiSlice( null );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (array)', function test( t ) {
	var values;
	var x;
	var s;
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
	x = ndzeros( [ 2 ], {
		'dtype': 'float64'
	});
	s = [ null ];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (slice arguments)', function test( t ) {
	var values;
	var x;
	var s;
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
	x = ndzeros( [ 2 ], {
		'dtype': 'float64'
	});
	s = new Slice();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, value );
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean (multislice)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
	];
	x = ndzeros( [ 2 ], {
		'dtype': 'float64'
	});
	s = new MultiSlice( null );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean (array)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
	];
	x = ndzeros( [ 2 ], {
		'dtype': 'float64'
	});
	s = [ null ];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean (slice arguments)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
	];
	x = ndzeros( [ 2 ], {
		'dtype': 'float64'
	});
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid slice argument (ndims=2)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		NaN,
		[],
		function noop() {}
	];
	x = ndzeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid slice argument (ndims=3)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		NaN,
		[],
		function noop() {}
	];
	x = ndzeros( [ 2, 2, 2 ], {
		'dtype': 'float64'
	});
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillSlice( x, 10.0, s, s, value );
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (multislice)', function test( t ) {
	var slices;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ] );

	slices = [
		new MultiSlice( null ),
		new MultiSlice( null, null, null ),
		new MultiSlice( null, null, null, null )
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			fillSlice( x, 10.0, s );
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (multislice, options)', function test( t ) {
	var slices;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ] );

	slices = [
		new MultiSlice( null ),
		new MultiSlice( null, null, null ),
		new MultiSlice( null, null, null, null )
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			fillSlice( x, 10.0, s, {} );
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (array)', function test( t ) {
	var slices;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ] );

	slices = [
		[ null ],
		[ null, null, null ],
		[ null, null, null, null ]
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			fillSlice( x, 10.0, s );
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (array, options)', function test( t ) {
	var slices;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ] );

	slices = [
		[ null ],
		[ null, null, null ],
		[ null, null, null, null ]
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			fillSlice( x, 10.0, s, {} );
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (slice arguments)', function test( t ) {
	var slices;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ] );

	slices = [
		[ null ],
		[ null, null, null ],
		[ null, null, null, null ]
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			if ( s.length === 1 ) {
				return fillSlice( x, 10.0, s[ 0 ] );
			}
			if ( s.length === 2 ) {
				return fillSlice( x, 10.0, s[ 0 ], s[ 1 ] );
			}
			if ( s.length === 3 ) {
				return fillSlice( x, 10.0, s[ 0 ], s[ 1 ], s[ 2 ] );
			}
			if ( s.length === 4 ) {
				return fillSlice( x, 10.0, s[ 0 ], s[ 1 ], s[ 2 ], s[ 3 ] );
			}
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (slice arguments, options)', function test( t ) {
	var slices;
	var x;
	var i;

	x = ndzeros( [ 2, 2 ] );

	slices = [
		[ null ],
		[ null, null, null ],
		[ null, null, null, null ]
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			if ( s.length === 1 ) {
				return fillSlice( x, 10.0, s[ 0 ], {} );
			}
			if ( s.length === 2 ) {
				return fillSlice( x, 10.0, s[ 0 ], s[ 1 ], {} );
			}
			if ( s.length === 3 ) {
				return fillSlice( x, 10.0, s[ 0 ], s[ 1 ], s[ 2 ], {} );
			}
			if ( s.length === 4 ) {
				return fillSlice( x, 10.0, s[ 0 ], s[ 1 ], s[ 2 ], s[ 3 ], {} );
			}
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of input array dimensions (no slice arguments, options)', function test( t ) {
	var x = ndzeros( [ 2, 2 ] );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		fillSlice( x, 10.0, {} );
	}
});

tape( 'by default, the function throws an error when a slice exceeds output array bounds', function test( t ) {
	var slices;
	var x;
	var s;
	var i;

	x = ndzeros( [ 2, 2 ] );

	s = new Slice( 10, 20, 1 );
	slices = [
		new MultiSlice( 10, 0 ),
		new MultiSlice( null, s ),
		new MultiSlice( s, null ),
		new MultiSlice( s, s )
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			fillSlice( x, 10.0, s );
		};
	}
});

tape( 'in strict mode, the function throws an error when a slice exceeds output array bounds', function test( t ) {
	var slices;
	var x;
	var s;
	var i;

	x = ndzeros( [ 2, 2 ] );

	s = new Slice( 10, 20, 1 );
	slices = [
		new MultiSlice( 10, 0 ),
		new MultiSlice( null, s ),
		new MultiSlice( s, null ),
		new MultiSlice( s, s )
	];
	for ( i = 0; i < slices.length; i++ ) {
		t.throws( badValues( slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( s ) {
		return function badValues() {
			fillSlice( x, 10.0, s, {
				'strict': true
			});
		};
	}
});

tape( 'in non-strict mode, the function does not set element values when a slice exceeds output array bounds', function test( t ) {
	var actual;
	var slices;
	var x;
	var s;
	var i;

	x = ndzeros( [ 2, 2 ] );

	s = new Slice( 10, 20, 1 );
	slices = [
		new MultiSlice( 10, 0 ),
		new MultiSlice( null, s ),
		new MultiSlice( s, null ),
		new MultiSlice( s, s )
	];
	for ( i = 0; i < slices.length; i++ ) {
		actual = fillSlice( x, 10.0, slices[ i ], {
			'strict': false
		});
		t.strictEqual( x, actual, 'returns expected value' );
		t.strictEqual( isSameFloat64Array( getData( x ), new Float64Array( 4 ) ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports filling a zero-dimensional array view (base, multislice)', function test( t ) {
	var actual;
	var x;
	var s;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );
	s = new MultiSlice();

	actual = fillSlice( x, 10.0, s );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.get(), 10.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports filling a zero-dimensional array view (base, array)', function test( t ) {
	var actual;
	var x;
	var s;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );
	s = [];

	actual = fillSlice( x, 10.0, s );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.get(), 10.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports filling a zero-dimensional array view (base, slice arguments)', function test( t ) {
	var actual;
	var x;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );

	actual = fillSlice( x, 10.0 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.get(), 10.0, 'returns expected value' );

	t.end();
});

tape( 'if all input array dimensions are reduced, the function supports filling a zero-dimensional array view (multislice)', function test( t ) {
	var expected;
	var actual;
	var x;
	var s;

	x = ndzeros( [ 2, 2 ], {
		'order': 'row-major'
	});
	s = new MultiSlice( 0, 1 );

	actual = fillSlice( x, 10.0, s );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array([
		0.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if all input array dimensions are reduced, the function supports filling a zero-dimensional array view (array)', function test( t ) {
	var expected;
	var actual;
	var x;
	var s;

	x = ndzeros( [ 2, 2 ], {
		'order': 'row-major'
	});
	s = [ 0, 1 ];

	actual = fillSlice( x, 10.0, s );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array([
		0.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if all input array dimensions are reduced, the function supports filling a zero-dimensional array view (slice arguments)', function test( t ) {
	var expected;
	var actual;
	var x;
	var s;

	x = ndzeros( [ 2, 2 ], {
		'order': 'row-major'
	});
	s = [ 0, 1 ];

	actual = fillSlice( x, 10.0, s[ 0 ], s[ 1 ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array([
		0.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, [ s0, s1, s2 ] );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, s0, s1, s2 );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s, {
		'strict': false
	});

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, accessors, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), s );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, accessors, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, [ s0, s1, s2 ] );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), [ s0, s1, s2 ] );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, accessors, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, s0, s1, s2 );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), [ s0, s1, s2 ] );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, contiguous, accessors, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s, {
		'strict': false
	});

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), s, {
		'strict': false
	});

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		10.0,
		10.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, [ s0, s1, s2 ] );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		10.0,
		10.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, s0, s1, s2 );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		10.0,
		10.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s, {
		'strict': false
	});

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		10.0,
		10.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, accessors, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s );

	expected = new Complex128Array([
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), s );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, accessors, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, new Complex128( 10.0, 20.0 ), [ s0, s1, s2 ] );

	expected = new Complex128Array([
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), [ s0, s1, s2 ] );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, accessors, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s0, s1, s2 );

	expected = new Complex128Array([
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), s0, s1, s2 );

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, contiguous, accessors, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s, {
		'strict': false
	});

	expected = new Complex128Array([
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );

	fillSlice( x, new Complex128( -10.0, -20.0 ), s, {
		'strict': false
	});

	expected = new Complex128Array([
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0,
		-10.0,
		-20.0,
		-10.0,
		-20.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, [ s0, s1, s2 ] );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, s0, s1, s2 );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s, {
		'strict': false
	});

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, accessors, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, accessors, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, new Complex128( 10.0, 20.0 ), [ s0, s1, s2 ] );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, accessors, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s0, s1, s2 );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (row-major, non-contiguous, accessors, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 3, 1, 2 ];
	st = [ 4, 4, 1 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s, {
		'strict': false
	});

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, [ s0, s1, s2 ] );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, 10.0, s0, s1, s2 );

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, 10.0, s, {
		'strict': false
	});

	expected = new Float64Array([
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameFloat64Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, accessors, multislice)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var s;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, accessors, array)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, new Complex128( 10.0, 20.0 ), [ s0, s1, s2 ] );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, accessors, slice arguments)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s0, s1, s2 );

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function fills an input ndarray view with a specified value (column-major, non-contiguous, accessors, multislice, options)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var s0;
	var s1;
	var s2;
	var s;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 3, 1, 2 ];
	st = [ 1, 6, 6 ];
	o = 1;

	x = ndarray( dt, zeros( 12, dt ), sh, st, o, ord );
	s0 = new Slice( 0, 2 );
	s1 = new Slice( null, null );
	s2 = new Slice( null, null );
	s = new MultiSlice( s0, s1, s2 );

	fillSlice( x, new Complex128( 10.0, 20.0 ), s, {
		'strict': false
	});

	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		20.0,
		10.0,
		20.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( getData( x ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports safely casting fill values to the data type of the input array', function test( t ) {
	var expected;
	var values;
	var actual;
	var x;
	var s;
	var v;
	var e;
	var i;
	var j;

	s = new MultiSlice( null, null );

	x = [
		ndzeros( [ 2, 2 ], {
			'dtype': 'float32'
		}),
		ndzeros( [ 2, 2 ], {
			'dtype': 'int8'
		}),
		ndzeros( [ 2, 2 ], {
			'dtype': 'uint16'
		}),
		ndzeros( [ 2, 2 ], {
			'dtype': 'complex128'
		}),
		ndzeros( [ 2, 2 ], {
			'dtype': 'complex128'
		}),
		ndzeros( [ 2, 2 ], {
			'dtype': 'complex64'
		})
	];
	values = [
		3.0,
		3,
		1,
		2.0,
		new Complex64( 3.0, 4.0 ),
		new Complex128( 5.0, 6.0 )
	];
	expected = [
		[ 3, 3, 3, 3 ],
		[ 3, 3, 3, 3 ],
		[ 1, 1, 1, 1 ],
		[ 2.0, 0.0, 2.0, 0.0, 2.0, 0.0, 2.0, 0.0 ],
		[ 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0 ],
		[ 5.0, 6.0, 5.0, 6.0, 5.0, 6.0, 5.0, 6.0 ]
	];
	for ( i = 0; i < expected.length; i++ ) {
		actual = fillSlice( x[ i ], values[ i ], s );
		t.strictEqual( actual, x[ i ], 'returns expected value' );

		v = getData( actual );
		e = expected[ i ];
		if ( isComplexDataType( getDType( actual ) ) ) {
			for ( j = 0; j < v.length; j++ ) {
				t.strictEqual( real( v.get( j ) ), e[ j*2 ], 'returns expected value' );
				t.strictEqual( imag( v.get( j ) ), e[ (j*2)+1 ], 'returns expected value' );
			}
		} else {
			for ( j = 0; j < v.length; j++ ) {
				t.strictEqual( v[ j ], e[ j ], 'returns expected value' );
			}
		}
	}
	t.end();
});

tape( 'the function supports downcasting floating-point fill values to an input array data type of the same kind', function test( t ) {
	var expected;
	var values;
	var actual;
	var x;
	var s;
	var v;
	var e;
	var i;
	var j;

	s = new MultiSlice( null, null );

	x = [
		ndzeros( [ 2, 2 ], {
			'dtype': 'complex64'
		})
	];
	values = [
		new Complex128( 3.0, 4.0 )
	];
	expected = [
		[ 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0 ]
	];
	for ( i = 0; i < expected.length; i++ ) {
		actual = fillSlice( x[ i ], values[ i ], s );
		t.strictEqual( actual, x[ i ], 'returns expected value' );

		v = getData( actual );
		e = expected[ i ];
		if ( isComplexDataType( getDType( actual ) ) ) {
			for ( j = 0; j < v.length; j++ ) {
				t.strictEqual( real( v.get( j ) ), e[ j*2 ], 'returns expected value' );
				t.strictEqual( imag( v.get( j ) ), e[ (j*2)+1 ], 'returns expected value' );
			}
		} else {
			for ( j = 0; j < v.length; j++ ) {
				t.strictEqual( v[ j ], e[ j ], 'returns expected value' );
			}
		}
	}
	t.end();
});
