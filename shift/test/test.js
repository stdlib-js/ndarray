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
var isReadOnly = require( './../../base/assert/is-read-only' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var zeros = require( './../../zeros' );
var getShape = require( './../../shape' );
var ndarray2array = require( './../../to-array' );
var ndarray = require( './../../ctor' );
var shift = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof shift, 'function', 'main export is a function' );
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
			shift( value );
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
			shift( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			shift( zeros( [ 2, 2 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided an options argument with an invalid `dim` option', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'5',
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
				'dim': value
			};
			shift( zeros( [ 2, 2 ] ), opts );
		};
	}
});

tape( 'the function throws an error if the dimension index exceeds the number of dimensions', function test( t ) {
	var values;
	var opts;
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
			opts = {
				'dim': dim
			};
			shift( x, opts );
		};
	}
});

tape( 'the function returns an array containing ndarrays (ndims=1)', function test( t ) {
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 6, 'float64' );
	sh = [ 6 ];
	st = [ 1 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = shift( x );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 5 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ 1, 2, 3, 4, 5 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns an array containing ndarrays (ndims=1, options)', function test( t ) {
	var actual;
	var opts;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 6, 'float64' );
	sh = [ 6 ];
	st = [ 1 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );
	opts = {
		'dim': 0
	};

	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 5 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ 1, 2, 3, 4, 5 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ 0 ], 'returns expected value' );

	opts = {
		'dim': -1
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 5 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ 1, 2, 3, 4, 5 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns an array containing ndarrays (ndims=2)', function test( t ) {
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 8, 'float64' );
	sh = [ 2, 4 ];
	st = [ 4, 1 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = shift( x );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 3 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ 1, 2, 3 ], [ 5, 6, 7 ] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ 0 ], [ 4 ] ], 'returns expected value' );

	t.end();
});

tape( 'the function returns an array containing ndarrays (ndims=2, options)', function test( t ) {
	var actual;
	var opts;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 8, 'float64' );
	sh = [ 2, 4 ];
	st = [ 4, 1 ];
	o = 0;
	ord = 'row-major';

	x = new ndarray( 'float64', buf, sh, st, o, ord );
	opts = {
		'dim': 0
	};

	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 1, 4 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 1, 4 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ 4, 5, 6, 7] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ 0, 1, 2, 3 ] ], 'returns expected value' );

	opts = {
		'dim': -1
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 3 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ 1, 2, 3 ], [ 5, 6, 7 ] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ 0 ], [ 4 ] ], 'returns expected value' );

	t.end();
});

tape( 'the function returns an array containing ndarrays (ndims=3)', function test( t ) {
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 8, 'float64' );
	sh = [ 2, 2, 2 ];
	st = [ 4, 2, 1 ];
	o = 0;
	ord = 'row-major';

	/*
	* [
	*   [
	*     [ 0, 1 ],
	*     [ 2, 3 ]
	*   ],
	*   [
	*     [ 4, 5 ],
	*     [ 6, 7 ]
	*   ]
	*];
	*/
	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = shift( x );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ [ 1 ], [ 3 ] ], [ [ 5 ], [ 7 ] ] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ [ 0 ], [ 2 ] ], [ [ 4 ], [ 6 ] ] ], 'returns expected value' );

	t.end();
});

tape( 'the function returns an array containing ndarrays (ndims=3, options)', function test( t ) {
	var actual;
	var opts;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 8, 'float64' );
	sh = [ 2, 2, 2 ];
	st = [ 4, 2, 1 ];
	o = 0;
	ord = 'row-major';

	/*
	* [
	*   [
	*     [ 0, 1 ],
	*     [ 2, 3 ]
	*   ],
	*   [
	*     [ 4, 5 ],
	*     [ 6, 7 ]
	*   ]
	*];
	*/
	x = new ndarray( 'float64', buf, sh, st, o, ord );

	opts = {
		'dim': 0
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 1, 2, 2 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 1, 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ [ 4, 5 ], [ 6, 7 ] ] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ [ 0, 1 ], [ 2, 3 ] ] ], 'returns expected value' );

	opts = {
		'dim': -2
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 1, 2 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 1, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ [ 2, 3 ] ], [ [ 6, 7 ] ] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ [ 0, 1 ] ], [ [ 4, 5 ] ] ], 'returns expected value' );

	opts = {
		'dim': 2
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [ [ [ 1 ], [ 3 ] ], [ [ 5 ], [ 7 ] ] ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [ [ [ 0 ], [ 2 ] ], [ [ 4 ], [ 6 ] ] ], 'returns expected value' );

	t.end();
});

tape( 'the function returns empty views if provided an empty array (ndims=2)', function test( t ) {
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 8, 'float64' );
	st = [ 4, 1 ];
	o = 0;
	ord = 'row-major';

	sh = [ 2, 0 ];
	x = new ndarray( 'float64', buf, sh, st, o, ord );

	actual = shift( x );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 0 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 0 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [], 'returns expected value' );

	t.end();
});

tape( 'the function returns empty views if provided an empty array (ndims=2, options)', function test( t ) {
	var actual;
	var opts;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;

	buf = zeroTo( 8, 'float64' );
	st = [ 4, 1 ];
	o = 0;
	ord = 'row-major';

	sh = [ 2, 0 ];
	x = new ndarray( 'float64', buf, sh, st, o, ord );
	opts = {
		'dim': 0
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 1, 0 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 1, 0 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [], 'returns expected value' );

	opts = {
		'dim': -1
	};
	actual = shift( x, opts );

	t.strictEqual( isndarrayLike( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isndarrayLike( actual[1] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[0] ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual[1] ), true, 'returns expected value' );
	t.deepEqual( getShape( actual[0] ), [ 2, 0 ], 'returns expected value' );
	t.deepEqual( getShape( actual[1] ), [ 2, 0 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[0] ), [], 'returns expected value' );
	t.deepEqual( ndarray2array( actual[1] ), [], 'returns expected value' );

	t.end();
});
