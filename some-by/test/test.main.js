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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( './../../ctor' );
var empty = require( './../../empty' );
var ndarray2array = require( './../../to-array' );
var scalar2ndarray = require( './../../from-scalar' );
var someBy = require( './../lib' );


// FUNCTIONS //

/**
* Callback function.
*
* @private
* @param {*} value - input value
* @returns {boolean} result
*/
function clbk( value ) {
	return value > 0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof someBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=scalar)', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( value, 1, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=scalar, thisArg)', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( value, 1, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=ndarray)', function test( t ) {
	var values;
	var opts;
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( value, scalar2ndarray( 1, opts ), clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=ndarray, thisArg)', function test( t ) {
	var values;
	var opts;
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( value, scalar2ndarray( 1, opts ), clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=scalar, options)', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( value, 1, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=scalar, options, thisArg)', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( value, 1, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=ndarray, options)', function test( t ) {
	var values;
	var opts;
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( value, scalar2ndarray( 1, opts ), {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (n=ndarray, options, thisArg)', function test( t ) {
	var values;
	var opts;
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( value, scalar2ndarray( 1, opts ), {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		3.14,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object (thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		3.14,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		3.14,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an integer or ndarray-like object (options, thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		3.14,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type (thiArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is an ndarray with a non-integer data type (options, thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		new ndarray( 'float64', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' ),
		new ndarray( 'float32', new Float64Array( [ 1 ] ), [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, 1, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar, thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, 1, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar, options)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, 1, {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=scalar, options, thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, 1, {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts ), value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray, thisArg)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray, options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts ), {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (n=ndarray, options, thisArg)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts ), {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, 1, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=scalar, thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, 1, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts ), value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (n=ndarray, thisArg)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts ), value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument with an invalid `dims` property (n=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dims': value
			};
			someBy( x, 1, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with an invalid `dims` property (n=ndarray)', function test( t ) {
	var values;
	var opts1;
	var opts2;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts1 = {
				'dims': value
			};
			opts2 = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains out-of-bounds dimensions (n=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 1, 3 ],
		[ 3, 0 ],
		[ 0, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dims': value
			};
			someBy( x, 1, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains out-of-bounds dimensions (n=ndarray)', function test( t ) {
	var values;
	var opts1;
	var opts2;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 1, 3 ],
		[ 3, 0 ],
		[ 0, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts1 = {
				'dims': value
			};
			opts2 = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains duplicate dimensions (n=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 0, 0 ],
		[ 1, 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dims': value
			};
			someBy( x, 1, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains duplicate dimensions (n=ndarray)', function test( t ) {
	var values;
	var opts1;
	var opts2;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 0, 0 ],
		[ 1, 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts1 = {
				'dims': value
			};
			opts2 = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains more dimensions than are present in the input ndarray (n=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ],
		[ 0, 1, 2, 3, 4 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'dims': value
			};
			someBy( x, 1, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with a `dims` property which contains more dimensions than are present in the input ndarray (n=ndarray)', function test( t ) {
	var values;
	var opts1;
	var opts2;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ],
		[ 0, 1, 2, 3, 4 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts1 = {
				'dims': value
			};
			opts2 = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with an invalid `keepdims` property (n=scalar)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts = {
				'keepdims': value
			};
			someBy( x, 1, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument with an invalid `keepdims` property (n=ndarray)', function test( t ) {
	var values;
	var opts1;
	var opts2;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			opts1 = {
				'keepdims': value
			};
			opts2 = {
				'dtype': 'int32'
			};
			someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not broadcast-compatible with the non-reduced dimensions of the input array', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	opts = {
		'dtype': 'int32'
	};

	values = [
		empty( [ 2, 2 ], opts ),
		empty( [ 2, 2, 2 ], opts ),
		empty( [ 1, 1, 1, 4 ], opts ),
		empty( [ 3, 3, 3, 3, 3 ], opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not broadcast-compatible with the non-reduced dimensions of the input array (thisArg)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	opts = {
		'dtype': 'int32'
	};

	values = [
		empty( [ 2, 2 ], opts ),
		empty( [ 2, 2, 2 ], opts ),
		empty( [ 1, 1, 1, 4 ], opts ),
		empty( [ 3, 3, 3, 3, 3 ], opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not broadcast-compatible with the non-reduced dimensions of the input array (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	opts = {
		'dtype': 'int32'
	};

	values = [
		empty( [ 2, 2 ], opts ),
		empty( [ 2, 2, 2 ], opts ),
		empty( [ 1, 1, 1, 4 ], opts ),
		empty( [ 3, 3, 3, 3, 3 ], opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not broadcast-compatible with the non-reduced dimensions of the input array (options, thisArg)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	opts = {
		'dtype': 'int32'
	};

	values = [
		empty( [ 2, 2 ], opts ),
		empty( [ 2, 2, 2 ], opts ),
		empty( [ 1, 1, 1, 4 ], opts ),
		empty( [ 3, 3, 3, 3, 3 ], opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			someBy( x, value, {}, clbk, {} );
		};
	}
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (row-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

	actual = someBy( x, 2, clbk );
	expected = true;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	actual = someBy( x, 3, clbk );
	expected = false;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (row-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	opts = {
		'dtype': 'int32'
	};

	actual = someBy( x, scalar2ndarray( 2, opts ), clbk );
	expected = true;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	actual = someBy( x, scalar2ndarray( 3, opts ), clbk );
	expected = false;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (column-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );

	actual = someBy( x, 2, clbk );
	expected = true;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	actual = someBy( x, 3, clbk );
	expected = false;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function (column-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0 ] ), [ 4 ], [ 1 ], 0, 'column-major' );

	opts = {
		'dtype': 'int32'
	};
	actual = someBy( x, scalar2ndarray( 2, opts ), clbk );
	expected = true;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	actual = someBy( x, scalar2ndarray( 3, opts ), clbk );
	expected = false;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, -5.0, 0.0, -7.0, 0.0 ] ), [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	opts = {
		'dims': [ 0 ]
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ true, false, true, false ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0 ],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true, false, true, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ]
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ true, false ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true ], [ false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ]
	};
	actual = someBy( x, 1, opts, clbk );
	expected = true;
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': []
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts1;
	var opts2;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, 0.0, 3.0, 0.0, -5.0, 0.0, -7.0, 0.0 ] ), [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	opts1 = {
		'dims': [ 0 ]
	};
	opts2 = {
		'dtype': 'int32'
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ true, false, true, false ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0 ],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true, false, true, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 1 ]
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ true, false ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 1 ],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true ], [ false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0, 1 ]
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = true;
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0, 1 ],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': []
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true, false, true, false ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major, n=scalar)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts = {
		'dims': [ 0 ]
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ true, true, true, true ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0 ],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true, true, true, true ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ]
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ true, false ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 1 ],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true ], [ false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ]
	};
	actual = someBy( x, 1, opts, clbk );
	expected = true;
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts = {
		'dims': [ 0, 1 ],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': []
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true, true, true, true ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts = {
		'dims': [],
		'keepdims': true
	};
	actual = someBy( x, 1, opts, clbk );
	expected = [ [ true, true, true, true ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major, n=ndarray)', function test( t ) {
	var expected;
	var actual;
	var opts1;
	var opts2;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 ] ), [ 2, 4 ], [ 1, 2 ], 0, 'column-major' );

	opts1 = {
		'dims': [ 0 ]
	};
	opts2 = {
		'dtype': 'int32'
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ true, true, true, true ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0 ],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true, true, true, true ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 1 ]
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ true, false ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 1 ],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true ], [ false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0, 1 ]
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = true;
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( actual.get(), expected, 'returns expected value' );

	opts1 = {
		'dims': [ 0, 1 ],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': []
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true, true, true, true ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	opts1 = {
		'dims': [],
		'keepdims': true
	};
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, clbk );
	expected = [ [ true, true, true, true ], [ false, false, false, false ] ];
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a callback execution context (n=scalar)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

	ctx = {
		'count': 0
	};
	indices = [];
	values = [];
	arrays = [];
	actual = someBy( x, 1, predicate, ctx );
	expected = true;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0 ],
		[ 1 ],
		[ 2 ],
		[ 3 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function predicate( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value > 0.0;
	}
});

tape( 'the function supports providing a callback execution context (n=ndarray)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts;
	var ctx;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

	ctx = {
		'count': 0
	};
	opts = {
		'dtype': 'int32'
	};
	indices = [];
	values = [];
	arrays = [];
	actual = someBy( x, scalar2ndarray( 1, opts ), predicate, ctx );
	expected = true;

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0 ],
		[ 1 ],
		[ 2 ],
		[ 3 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function predicate( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value > 0.0;
	}
});

tape( 'the function supports providing a callback execution context (n=scalar, options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts;
	var ctx;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	ctx = {
		'count': 0
	};
	opts = {
		'dims': [ 0 ]
	};
	indices = [];
	values = [];
	arrays = [];
	actual = someBy( x, 1, opts, predicate, ctx );
	expected = [ false, true ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
		[ 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function predicate( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value > 0.0;
	}
});

tape( 'the function supports providing a callback execution context (n=ndarray, options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var opts1;
	var opts2;
	var ctx;
	var x;

	x = new ndarray( 'float64', new Float64Array( [ -1.0, -2.0, -3.0, 4.0 ] ), [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	ctx = {
		'count': 0
	};
	opts1 = {
		'dims': [ 0 ]
	};
	opts2 = {
		'dtype': 'int32'
	};
	indices = [];
	values = [];
	arrays = [];
	actual = someBy( x, scalar2ndarray( 1, opts2 ), opts1, predicate, ctx );
	expected = [ false, true ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ -1.0, -2.0, -3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
		[ 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function predicate( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value > 0.0;
	}
});
