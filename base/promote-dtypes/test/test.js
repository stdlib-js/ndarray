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
var promotionRules = require( './../../../promotion-rules' );
var promoteDataTypes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof promoteDataTypes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the result of applying promotion rules to a list of data types', function test( t ) {
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
		promotionRules( 'float32', 'float64' ),
		promotionRules( 'float64', 'generic' ),
		promotionRules( 'int8', 'uint16' ),
		promotionRules( 'complex64', 'float64' ),
		promotionRules( 'generic', 'complex128' ),
		'float64'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = promoteDataTypes( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `null` if provided data types which cannot be safely cast to a common data type', function test( t ) {
	var actual;
	var values;
	var i;

	values = [
		[],
		[ 'binary', 'complex128' ],
		[ 'foo', 'bar' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = promoteDataTypes( values[ i ] );
		t.strictEqual( actual, null, 'returns expected value' );
	}
	t.end();
});
