/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var array = require( './../../../array' );
var ndarray = require( './../../../ctor' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var ndarraylike2object = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarraylike2object, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts an ndarray to a standardized object', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array( 10 );
	x = array( xbuf );

	expected = {
		'ref': x,
		'data': x.data,
		'dtype': x.dtype,
		'length': x.length,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order,
		'accessorProtocol': false
	};
	actual = ndarraylike2object( x );

	t.strictEqual( actual.ref, expected.ref, 'returns expected value' );
	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );
	t.strictEqual( actual.accessorProtocol, expected.accessorProtocol, 'returns expected value' );
	t.strictEqual( typeof actual.accessors[ 0 ], 'function', 'returns expected value' );
	t.strictEqual( actual.accessors[ 0 ].length, 2, 'returns expected value' );
	t.strictEqual( typeof actual.accessors[ 1 ], 'function', 'returns expected value' );
	t.strictEqual( actual.accessors[ 1 ].length, 3, 'returns expected value' );

	actual.accessors[ 1 ]( actual.data, 0, 1.0 );
	v = actual.accessors[ 0 ]( actual.data, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function converts an ndarray-like object to a standardized object', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array( 10 );
	x = {
		'data': xbuf,
		'dtype': 'float64',
		'length': 10,
		'shape': [ 2, 5 ],
		'strides': [ 5, 1 ],
		'offset': 0,
		'order': 'row-major'
	};

	expected = {
		'ref': x,
		'data': x.data,
		'dtype': x.dtype,
		'length': x.length,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order,
		'accessorProtocol': false
	};
	actual = ndarraylike2object( x );

	t.strictEqual( actual.ref, expected.ref, 'returns expected value' );
	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );
	t.strictEqual( actual.accessorProtocol, expected.accessorProtocol, 'returns expected value' );
	t.strictEqual( typeof actual.accessors[ 0 ], 'function', 'returns expected value' );
	t.strictEqual( actual.accessors[ 0 ].length, 2, 'returns expected value' );
	t.strictEqual( typeof actual.accessors[ 1 ], 'function', 'returns expected value' );
	t.strictEqual( actual.accessors[ 1 ].length, 3, 'returns expected value' );

	actual.accessors[ 1 ]( actual.data, 0, 1.0 );
	v = actual.accessors[ 0 ]( actual.data, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function converts an ndarray to a standardized object (data buffer accessors)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex64Array( 10 );
	x = ndarray( 'complex64', xbuf, [ 2, 5 ], [ 5, 1 ], 0, 'row-major' );

	expected = {
		'ref': x,
		'data': x.data,
		'dtype': x.dtype,
		'length': x.length,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order,
		'accessorProtocol': true
	};
	actual = ndarraylike2object( x );

	t.strictEqual( actual.ref, expected.ref, 'returns expected value' );
	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );
	t.strictEqual( actual.accessorProtocol, expected.accessorProtocol, 'returns expected value' );
	t.strictEqual( typeof actual.accessors[ 0 ], 'function', 'returns expected value' );
	t.strictEqual( actual.accessors[ 0 ].length, 2, 'returns expected value' );
	t.strictEqual( typeof actual.accessors[ 1 ], 'function', 'returns expected value' );
	t.strictEqual( actual.accessors[ 1 ].length, 3, 'returns expected value' );

	actual.accessors[ 1 ]( actual.data, 0, new Complex64( 1.0, 2.0 ) );
	v = actual.accessors[ 0 ]( actual.data, 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});
