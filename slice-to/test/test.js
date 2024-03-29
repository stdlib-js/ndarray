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
var scalar2ndarray = require( './../../base/from-scalar' );
var ndarray2array = require( './../../to-array' );
var baseCtor = require( './../../base/ctor' );
var ctor = require( './../../ctor' );
var sliceTo = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceTo, 'function', 'main export is a function' );
	t.end();
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
			sliceTo( value, [] );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (index arguments)', function test( t ) {
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
			sliceTo( value, null, null );
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
	x = zeros( [ 1 ] );
	s = [ null ];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (index argument, ndims=1)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		[],
		function noop() {}
	];
	x = zeros( [ 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (index argument, ndims=2)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		[],
		function noop() {}
	];
	x = zeros( [ 1, 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, s, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (index argument, ndims=3)', function test( t ) {
	var values;
	var x;
	var s;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		[],
		function noop() {}
	];
	x = zeros( [ 1, 1, 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, s, s, value );
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
	x = zeros( [ 1 ] );
	s = [ null ];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean (index argument, ndims=1)', function test( t ) {
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
	x = zeros( [ 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean (index argument, ndims=2)', function test( t ) {
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
	x = zeros( [ 1, 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `strict` option which is not a boolean (index argument, ndims=3)', function test( t ) {
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
	x = zeros( [ 1, 1, 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, s, s, {
				'strict': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid index argument (ndims=2)', function test( t ) {
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
	x = zeros( [ 1, 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid index argument (ndims=3)', function test( t ) {
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
	x = zeros( [ 1, 1, 1 ] );
	s = null;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceTo( x, s, s, value );
		};
	}
});

tape( 'the function throws an error if the number of index arguments does not match the number of array dimensions (array)', function test( t ) {
	var values;
	var stop;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	stop = [
		[ null ],
		[ null, null, null ],
		[ null ],
		[ null, null ],
		[ null, null, null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceTo( x, s );
		};
	}
});

tape( 'the function throws an error if the number of index arguments does not match the number of array dimensions (array, options)', function test( t ) {
	var values;
	var stop;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	stop = [
		[ null ],
		[ null, null, null ],
		[ null ],
		[ null, null ],
		[ null, null, null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceTo( x, s, {} );
		};
	}
});

tape( 'the function throws an error if the number of index arguments does not match the number of array dimensions (index arguments)', function test( t ) {
	var values;
	var stop;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	stop = [
		[ null ],
		[ null, null, null ],
		[ null ],
		[ null, null ],
		[ null, null, null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			if ( s.length === 1 ) {
				return sliceTo( x, s[ 0 ] );
			}
			if ( s.length === 2 ) {
				return sliceTo( x, s[ 0 ], s[ 1 ] );
			}
			if ( s.length === 3 ) {
				return sliceTo( x, s[ 0 ], s[ 1 ], s[ 2 ] );
			}
		};
	}
});

tape( 'the function throws an error if the number of index arguments does not match the number of array dimensions (index arguments, options)', function test( t ) {
	var values;
	var stop;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	stop = [
		[ null ],
		[ null, null, null ],
		[ null ],
		[ null, null ],
		[ null, null, null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			if ( s.length === 1 ) {
				return sliceTo( x, s[ 0 ], {} );
			}
			if ( s.length === 2 ) {
				return sliceTo( x, s[ 0 ], s[ 1 ], {} );
			}
			if ( s.length === 3 ) {
				return sliceTo( x, s[ 0 ], s[ 1 ], s[ 2 ], {} );
			}
		};
	}
});

tape( 'the function throws an error if the number of index arguments does not match the number of array dimensions (no index arguments, options)', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided shape (' + values[ i ].shape.join( ',' ) + ')' );
	}
	t.end();

	function badValue( x ) {
		return function badValue() {
			sliceTo( x, {} );
		};
	}
});

tape( 'by default, the function throws an error when a stopping index exceeds array bounds', function test( t ) {
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
		[ 10 ],
		[ null, 20 ],
		[ 20, null, null ],
		[ 20, 20, null, null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceTo( x, s );
		};
	}
});

tape( 'in strict mode, the function throws an error when a stopping index exceeds array bounds', function test( t ) {
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
		[ 10 ],
		[ null, 20 ],
		[ 20, null, null ],
		[ 20, 20, null, null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], stop[ i ] ), RangeError, 'throws an error when provided ' + stop[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			sliceTo( x, s, {
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
		[ -10 ],
		[ null, -20 ],
		[ -20, null, null ],
		[ -20, -20, null, null ],
		[ null, null, null, null, -10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = sliceTo( values[ i ], stop[ i ], {
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
	var i;

	values = [
		zeros( [ 1 ], { 'dtype': 'float64' } ),
		zeros( [ 1, 1 ], { 'dtype': 'float32' } ),
		zeros( [ 1, 1, 1 ], { 'dtype': 'int32' } ),
		zeros( [ 1, 1, 1, 1 ], { 'dtype': 'uint32' } ),
		zeros( [ 1, 1, 1, 1, 1 ], { 'dtype': 'complex128' } )
	];

	stop = [
		[ 0 ],
		[ null, 0 ],
		[ 0, null, null ],
		[ 0, 0, null, null ],
		[ null, null, null, null, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = sliceTo( values[ i ], stop[ i ] );
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( numel( actual.shape ), 0, 'returns expected value' );
		t.strictEqual( actual.dtype, values[ i ].dtype, 'returns expected value' );
	}
	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (base)', function test( t ) {
	var actual;
	var x;
	var s;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );
	s = [];

	actual = sliceTo( x, s );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), x.get(), 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (base; no index arguments)', function test( t ) {
	var actual;
	var x;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );

	actual = sliceTo( x );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), x.get(), 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (base, offset)', function test( t ) {
	var actual;
	var x;
	var s;

	x = new baseCtor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );
	s = [];

	actual = sliceTo( x, s );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (non-base, offset)', function test( t ) {
	var actual;
	var x;
	var s;

	x = new ctor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );
	s = [];

	actual = sliceTo( x, s );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=1, array)', function test( t ) {
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

	s = [ null ];
	actual = sliceTo( x, s );

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

	s = [ void 0 ];
	actual = sliceTo( x, s );

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

	s = [ 4 ];
	actual = sliceTo( x, s );

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

tape( 'the function returns a truncated view of a provided input array (ndims=1, index arguments)', function test( t ) {
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

	actual = sliceTo( x, null );

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

	actual = sliceTo( x, void 0 );

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

	actual = sliceTo( x, 4 );

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

tape( 'the function returns a truncated view of a provided input array (ndims=2, array)', function test( t ) {
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

	s = [ null, null ];
	actual = sliceTo( x, s );

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

	s = [ void 0, void 0 ];
	actual = sliceTo( x, s );

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

	s = [ 2, null ];
	actual = sliceTo( x, s );

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

	s = [ null, 2 ];
	actual = sliceTo( x, s );

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

	s = [ 3, 2 ];
	actual = sliceTo( x, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6 ],
		[ 10, 12 ],
		[ 16, 18 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=2, index arguments)', function test( t ) {
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

	actual = sliceTo( x, null, null );

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

	actual = sliceTo( x, void 0, void 0 );

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

	actual = sliceTo( x, 2, null );

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

	actual = sliceTo( x, null, 2 );

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

	actual = sliceTo( x, 3, 2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 2, 'returns expected value' );
	t.deepEqual( actual.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[ 4, 6 ],
		[ 10, 12 ],
		[ 16, 18 ]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=3, array)', function test( t ) {
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

	s = [ null, null, null ];
	actual = sliceTo( x, s );

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

	s = [ 1, null, null ];
	actual = sliceTo( x, s );

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

	s = [ null, 3, null ];
	actual = sliceTo( x, s );

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

	s = [ null, null, 1 ];
	actual = sliceTo( x, s );

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

	s = [ 1, 2, 1 ];
	actual = sliceTo( x, s );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 1, 2, 1 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10 ],
			[ 16 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a truncated view of a provided input array (ndims=3, index arguments)', function test( t ) {
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

	actual = sliceTo( x, null, null, null );

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

	actual = sliceTo( x, 1, null, null );

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

	actual = sliceTo( x, null, 3, null );

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

	actual = sliceTo( x, null, null, 1 );

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

	actual = sliceTo( x, 1, 2, 1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 3, 'returns expected value' );
	t.deepEqual( actual.shape, [ 1, 2, 1 ], 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	expected = [
		[
			[ 10 ],
			[ 16 ]
		]
	];
	actual = ndarray2array( actual );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
