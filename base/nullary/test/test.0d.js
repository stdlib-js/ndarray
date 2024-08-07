/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var scalar2ndarray = require( './../../../from-scalar' );
var nullary = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nullary, 'function', 'main export is a function');
	t.end();
});

tape( 'the function applies a nullary callback to each indexed element of a 0-dimensional ndarray', function test( t ) {
	var expected;
	var x;

	x = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});

	nullary( [ x ], constantFunction( 10.0 ) );

	expected = new Float64Array( [ 10.0 ] );
	t.strictEqual( isSameFloat64Array( x.data, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function applies a nullary callback to each indexed element of a 0-dimensional ndarray (accessors)', function test( t ) {
	var expected;
	var x;

	x = scalar2ndarray( new Complex128( 0.0, 0.0 ), {
		'dtype': 'complex128'
	});

	nullary( [ x ], constantFunction( new Complex128( 10.0, 10.0 ) ) );

	expected = new Complex128Array( [ 10.0, 10.0 ] );
	t.strictEqual( isSameComplex128Array( x.data, expected ), true, 'returns expected value' );

	t.end();
});
