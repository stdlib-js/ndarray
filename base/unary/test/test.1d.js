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
var Complex128Array = require( '@stdlib/array/complex128' );
var Float64Array = require( '@stdlib/array/float64' );
var zeros = require( '@stdlib/array/zeros' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var ndarray = require( './../../../ctor' );
var unary = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unary, 'function', 'main export is a function');
	t.end();
});

tape( 'the function applies a unary callback to each indexed element of a 1-dimensional ndarray', function test( t ) {
	var expected;
	var x;
	var y;

	x = ndarray( 'float64', new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = ndarray( 'float64', zeros( 4, 'float64' ), [ 4 ], [ 1 ], 0, 'row-major' );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		20.0,
		30.0,
		40.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( x ) {
		return x * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 1-dimensional ndarray (empty array)', function test( t ) {
	var expected;
	var x;
	var y;

	x = ndarray( 'float64', new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), [ 0 ], [ 1 ], 0, 'row-major' );
	y = ndarray( 'float64', zeros( 4, 'float64' ), [ 0 ], [ 1 ], 0, 'row-major' );

	unary( [ x, y ], scale );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( x ) {
		return x * 10.0;
	}
});

tape( 'the function applies a unary callback to each indexed element of a 1-dimensional ndarray (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = ndarray( 'complex128', new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	y = ndarray( 'complex128', zeros( 4, 'complex128' ), [ 4 ], [ 1 ], 0, 'row-major' );

	unary( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		20.0,
		30.0,
		40.0,
		50.0,
		60.0,
		70.0,
		80.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );
	t.end();

	function scale( z ) {
		return new Complex128( real(z)*10.0, imag(z)*10.0 );
	}
});
