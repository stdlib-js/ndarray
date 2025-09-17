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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var zeros = require( './../../zeros' );
var ndarray = require( './../../ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var identity = require( '@stdlib/number/float64/base/identity' );
var getDType = require( './../../dtype' );
var getShape = require( './../../shape' );
var getOrder = require( './../../order' );
var getData = require( './../../data-buffer' );
var shape2strides = require( './../../base/shape2strides' );
var scalar2ndarray = require( './../../from-scalar' );
var strides2offset = require( './../../base/strides2offset' );
var ndarray2array = require( './../../to-array' );
var flattenBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flattenBy, 'function', 'main export is a function' );
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
			flattenBy( value, identity );
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
			flattenBy( value, {}, identity );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (thisArg)', function test( t ) {
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
			flattenBy( value, identity, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (options, thisArg)', function test( t ) {
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
			flattenBy( value, {}, identity, {} );
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
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenBy( zeros( [ 2, 2, 2 ] ), value, identity );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenBy( zeros( [ 2, 2, 2 ] ), value, identity, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid `depth` option', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'5',
		-5,
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
			opts = {
				'depth': value
			};
			flattenBy( zeros( [ 2 ] ), opts, identity );
		};
	}
});

tape( 'the function throws an error if provided an invalid `order` option', function test( t ) {
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
				'order': value
			};
			flattenBy( zeros( [ 2 ] ), opts, identity );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenBy( zeros( [ 2, 2, 2 ] ), {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenBy( zeros( [ 2, 2, 2 ] ), {}, value, {} );
		};
	}
});

tape( 'by default, the function flattens all dimensions of a provided input ndarray in lexicographic order (row-major, contiguous)', function test( t ) {
	var expected;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'by default, the function flattens all dimensions of a provided input ndarray in lexicographic order (row-major, non-contiguous)', function test( t ) {
	var expected;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = [ 8, 4, 2 ];
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, NaN, 2.0, NaN, 3.0, NaN, 4.0, NaN, 5.0, NaN, 6.0, NaN, 7.0, NaN, 8.0, NaN ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'by default, the function flattens all dimensions of a provided input ndarray in lexicographic order (column-major, contiguous)', function test( t ) {
	var expected;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'by default, the function flattens all dimensions of a provided input ndarray in lexicographic order (column-major, non-contiguous)', function test( t ) {
	var expected;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = [ 2, 4, 8 ];
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, NaN, 5.0, NaN, 3.0, NaN, 7.0, NaN, 2.0, NaN, 6.0, NaN, 4.0, NaN, 8.0, NaN ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the maximum number of dimensions to flatten (row-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'depth': 0
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		],
		[
			[ 5.0, 6.0 ],
			[ 7.0, 8.0 ]
		]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 2, 2, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 1
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 2
	};
	y = flattenBy( x, opts, identity );
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the maximum number of dimensions to flatten (column-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'depth': 0
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		],
		[
			[ 5.0, 6.0 ],
			[ 7.0, 8.0 ]
		]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 2, 2, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 1
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 2
	};
	y = flattenBy( x, opts, identity );
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray in lexicographic order (row-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'row-major'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'row-major'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray in lexicographic order (column-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'row-major'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'row-major'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray in colexicographic order (row-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'column-major'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'column-major'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 5.0, 6.0 ],
		[ 3.0, 4.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray in colexicographic order (column-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'column-major'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'column-major'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 5.0, 6.0 ],
		[ 3.0, 4.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray in same order as the input ndarray (row-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray in same order as the input ndarray (column-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 1.0, 2.0 ],
		[ 5.0, 6.0 ],
		[ 3.0, 4.0 ],
		[ 7.0, 8.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray according to the physical layout of the input ndarray (row-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = [ -1, -2, -4 ]; // reversing and negating the strides simulates a flipped and reversed view
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 8.0, 4.0 ],
	*     [ 6.0, 2.0 ]
	*   ],
	*   [
	*     [ 7.0, 3.0 ],
	*     [ 5.0, 1.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 8.0, 4.0 ],
		[ 7.0, 3.0 ],
		[ 6.0, 2.0 ],
		[ 5.0, 1.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a provided input ndarray according to the physical layout of the input ndarray (column-major)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = [ -4, -2, -1 ]; // reversing and negating the strides simulates a flipped and reversed view
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 8.0, 7.0 ],
	*     [ 6.0, 5.0 ]
	*   ],
	*   [
	*     [ 4.0, 3.0 ],
	*     [ 2.0, 1.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	opts = {
		'depth': 1,
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = [
		[ 8.0, 7.0 ],
		[ 6.0, 5.0 ],
		[ 4.0, 3.0 ],
		[ 2.0, 1.0 ]
	];

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.deepEqual( ndarray2array( y ), expected, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 4, 2 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a zero-dimensional input ndarray', function test( t ) {
	var expected;
	var xbuf;
	var dt;
	var x;
	var y;

	dt = 'float64';
	x = scalar2ndarray( 3.0, {
		'dtype': dt,
		'order': 'row-major'
	});

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 3.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	dt = 'float64';
	x = scalar2ndarray( 3.0, {
		'dtype': dt,
		'order': 'column-major'
	});

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 3.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a zero-dimensional input ndarray (order=same)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var dt;
	var x;
	var y;

	dt = 'float64';
	x = scalar2ndarray( 3.0, {
		'dtype': dt,
		'order': 'row-major'
	});

	opts = {
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 3.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	dt = 'float64';
	x = scalar2ndarray( 3.0, {
		'dtype': dt,
		'order': 'column-major'
	});

	opts = {
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 3.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a zero-dimensional input ndarray (order=any)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var dt;
	var x;
	var y;

	dt = 'float64';
	x = scalar2ndarray( 3.0, {
		'dtype': dt,
		'order': 'row-major'
	});

	opts = {
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 3.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	dt = 'float64';
	x = scalar2ndarray( 3.0, {
		'dtype': dt,
		'order': 'column-major'
	});

	opts = {
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 3.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a one-dimensional input ndarray', function test( t ) {
	var expected;
	var xbuf;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 8 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	dt = 'float64';
	ord = 'column-major';
	sh = [ 8 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	y = flattenBy( x, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a one-dimensional input ndarray (order=same)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 8 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	dt = 'float64';
	ord = 'column-major';
	sh = [ 8 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'same'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports flattening a one-dimensional input ndarray (order=any)', function test( t ) {
	var expected;
	var xbuf;
	var opts;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 8 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	dt = 'float64';
	ord = 'column-major';
	sh = [ 8 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );

	opts = {
		'order': 'any'
	};
	y = flattenBy( x, opts, identity );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the callback execution context (row-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var xbuf;
	var ord;
	var ctx;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );
	ctx = {
		'count': 1
	};

	values = [];
	indices = [];
	arrays = [];
	y = flattenBy( x, clbk, ctx );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );
	t.strictEqual( ctx.count, 9, 'returns expected value' );

	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 0 ],
		[ 1, 1, 1 ]
	];
	indices.sort( ascending ); // index order is not guaranteed
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x,
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v;
	}

	function ascending( a, b ) {
		if ( a[ 0 ] > b[ 0 ] ) {
			return 1;
		}
		if ( a[ 0 ] < b[ 0 ] ) {
			return -1;
		}
		if ( a[ 1 ] > b[ 1 ] ) {
			return 1;
		}
		if ( a[ 1 ] < b[ 1 ] ) {
			return -1;
		}
		if ( a[ 2 ] > b[ 2 ] ) {
			return 1;
		}
		if ( a[ 2 ] < b[ 2 ] ) {
			return -1;
		}
		return 0;
	}
});

tape( 'the function supports specifying the callback execution context (row-major, options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var xbuf;
	var ord;
	var ctx;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );
	ctx = {
		'count': 1
	};

	values = [];
	indices = [];
	arrays = [];
	y = flattenBy( x, {}, clbk, ctx );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );
	t.strictEqual( ctx.count, 9, 'returns expected value' );

	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 0 ],
		[ 1, 1, 1 ]
	];
	indices.sort( ascending ); // index order is not guaranteed
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x,
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v;
	}

	function ascending( a, b ) {
		if ( a[ 0 ] > b[ 0 ] ) {
			return 1;
		}
		if ( a[ 0 ] < b[ 0 ] ) {
			return -1;
		}
		if ( a[ 1 ] > b[ 1 ] ) {
			return 1;
		}
		if ( a[ 1 ] < b[ 1 ] ) {
			return -1;
		}
		if ( a[ 2 ] > b[ 2 ] ) {
			return 1;
		}
		if ( a[ 2 ] < b[ 2 ] ) {
			return -1;
		}
		return 0;
	}
});

tape( 'the function supports specifying the callback execution context (column-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var xbuf;
	var ord;
	var ctx;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );
	ctx = {
		'count': 1
	};

	values = [];
	indices = [];
	arrays = [];
	y = flattenBy( x, clbk, ctx );
	expected = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );
	t.strictEqual( ctx.count, 9, 'returns expected value' );

	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 0 ],
		[ 1, 1, 1 ]
	];
	indices.sort( ascending ); // index order is not guaranteed
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x,
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v;
	}

	function ascending( a, b ) {
		if ( a[ 0 ] > b[ 0 ] ) {
			return 1;
		}
		if ( a[ 0 ] < b[ 0 ] ) {
			return -1;
		}
		if ( a[ 1 ] > b[ 1 ] ) {
			return 1;
		}
		if ( a[ 1 ] < b[ 1 ] ) {
			return -1;
		}
		if ( a[ 2 ] > b[ 2 ] ) {
			return 1;
		}
		if ( a[ 2 ] < b[ 2 ] ) {
			return -1;
		}
		return 0;
	}
});

tape( 'the function supports specifying the callback execution context (column-major, options)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var xbuf;
	var ord;
	var ctx;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	/*
	* [
	*   [
	*     [ 1.0, 2.0 ],
	*     [ 3.0, 4.0 ]
	*   ],
	*   [
	*     [ 5.0, 6.0 ],
	*     [ 7.0, 8.0 ]
	*   ]
	* ]
	*/
	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( dt, xbuf, sh, st, o, ord );
	ctx = {
		'count': 1
	};

	values = [];
	indices = [];
	arrays = [];
	y = flattenBy( x, {}, clbk, ctx );
	expected = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 2.0, 6.0, 4.0, 8.0 ] );

	t.notEqual( y, x, 'returns expected value' );
	t.notEqual( getData( y ), xbuf, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( y ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( y ), [ 8 ], 'returns expected value' );
	t.strictEqual( getDType( y ), dt, 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );
	t.strictEqual( ctx.count, 9, 'returns expected value' );

	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 1, 0, 0 ],
		[ 1, 0, 1 ],
		[ 1, 1, 0 ],
		[ 1, 1, 1 ]
	];
	indices.sort( ascending ); // index order is not guaranteed
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x,
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v;
	}

	function ascending( a, b ) {
		if ( a[ 0 ] > b[ 0 ] ) {
			return 1;
		}
		if ( a[ 0 ] < b[ 0 ] ) {
			return -1;
		}
		if ( a[ 1 ] > b[ 1 ] ) {
			return 1;
		}
		if ( a[ 1 ] < b[ 1 ] ) {
			return -1;
		}
		if ( a[ 2 ] > b[ 2 ] ) {
			return 1;
		}
		if ( a[ 2 ] < b[ 2 ] ) {
			return -1;
		}
		return 0;
	}
});
