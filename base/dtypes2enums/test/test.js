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
var resolveEnum = require( './../../../base/dtype-resolve-enum' );
var dtypes2enums = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes2enums, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a list of data types to a list of enumeration constants', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[ 'float32', 'float64' ],
		[ 'float64', 'generic' ],
		[ 'int8', 'uint16' ],
		[ 'float32', 'complex64', 'float64' ],
		[ 'generic', 'complex128' ],
		[ 'float64' ]
	];

	expected = [
		[ resolveEnum( 'float32' ), resolveEnum( 'float64' ) ],
		[ resolveEnum( 'float64' ), resolveEnum( 'generic' ) ],
		[ resolveEnum( 'int8' ), resolveEnum( 'uint16' ) ],
		[ resolveEnum( 'float32' ), resolveEnum( 'complex64' ), resolveEnum( 'float64' ) ],
		[ resolveEnum( 'generic' ), resolveEnum( 'complex128' ) ],
		[ resolveEnum( 'float64' ) ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = dtypes2enums( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if unable to resolve an enumeration constant for a provided data type, the function returns `null` for the corresponding enumeration constant', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[ 'foo', 'bar' ]
	];
	expected = [
		[ null, null ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = dtypes2enums( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
