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
var scalar2ndarray = require( './../../../from-scalar' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var find = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof find, 'function', 'main export is a function');
	t.end();
});

tape( 'the function returns the first element in a 0-dimensional ndarray which passes a test implemented by a predicate function', function test( t ) {
	var actual;
	var sv;
	var x;

	sv = scalar2ndarray( -1.0, {
		'dtype': 'float64'
	});

	x = scalar2ndarray( 4.0, {
		'dtype': 'float64'
	});
	actual = find( [ x, sv ], clbk );
	t.strictEqual( actual, 4.0, 'returns expected value' );

	x = scalar2ndarray( 3.0, {
		'dtype': 'float64'
	});
	actual = find( [ x, sv ], clbk );
	t.strictEqual( actual, -1.0, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns the first element in a 0-dimensional ndarray which passes a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var sv;
	var x;

	sv = scalar2ndarray( new Complex128( NaN, NaN ), {
		'dtype': 'complex128'
	});

	x = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	actual = find( [ x, sv ], clbk );
	t.strictEqual( isSameValue( actual, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );

	x = scalar2ndarray( new Complex128( 3.0, 0.0 ), {
		'dtype': 'complex128'
	});
	actual = find( [ x, sv ], clbk );
	t.strictEqual( isSameValue( actual, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return real( v ) % 2.0 === 0;
	}
});
