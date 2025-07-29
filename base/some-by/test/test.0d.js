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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var scalar2ndarray = require( './../../../from-scalar' );
var someBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof someBy, 'function', 'main export is a function');
	t.end();
});

tape( 'the function tests whether at least `n` elements in a 0-dimensional ndarray pass a test implemented by a predicate function', function test( t ) {
	var actual;
	var x;
	var n;

	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	x = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});
	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0.0;
	}
});

tape( 'the function tests whether at least `n` elements in a 0-dimensional ndarray pass a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;
	var n;

	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	x = scalar2ndarray( new Complex128( 0.0, 0.0 ), {
		'dtype': 'complex128'
	});
	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	x = scalar2ndarray( new Complex128( 1.0, 1.0 ), {
		'dtype': 'complex128'
	});
	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return ( real( v ) !== 0.0 && imag( v ) !== 0.0 );
	}
});
