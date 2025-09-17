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
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var scalar2ndarray = require( './../../../from-scalar' );
var ndarray = require( './../../../ctor' );
var someBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof someBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided an empty input ndarray', function test( t ) {
	var actual;
	var x;
	var n;

	x = ndarray( 'float64', ones( 8, 'float64' ), [ 0 ], [ 1 ], 0, 'row-major' );
	n = scalar2ndarray( 1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0.0;
	}
});

tape( 'the function returns `false` if a provided `n` parameter is less than zero', function test( t ) {
	var actual;
	var x;
	var n;

	x = ndarray( 'float64', zeros( 2, 'float64' ), [ 2 ], [ 1 ], 0, 'row-major' );
	n = scalar2ndarray( -1, {
		'dtype': 'generic'
	});

	actual = someBy( [ x, n ], clbk );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0.0;
	}
});
