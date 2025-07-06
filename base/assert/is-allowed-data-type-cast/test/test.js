/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var dtypes = require( './../../../../dtypes' );
var isSafeCast = require( './../../../../base/assert/is-safe-data-type-cast' );
var isMostlySafeCast = require( './../../../../base/assert/is-mostly-safe-data-type-cast' );
var isSameKindCast = require( './../../../../base/assert/is-same-kind-data-type-cast' );
var isAllowedCast = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAllowedCast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=unsafe)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	expected = true;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			actual = isAllowedCast( dt1, dt2, 'unsafe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=safe)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSafeCast( dt1, dt2 );
			actual = isAllowedCast( dt1, dt2, 'safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=mostly-safe)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isMostlySafeCast( dt1, dt2 );
			actual = isAllowedCast( dt1, dt2, 'mostly-safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=same-kind)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSameKindCast( dt1, dt2 );
			actual = isAllowedCast( dt1, dt2, 'same-kind' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=none)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( dt1, dt2, 'none' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=equiv)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( dt1, dt2, 'equiv' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});
