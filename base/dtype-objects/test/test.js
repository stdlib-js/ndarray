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
var isDataTypeObject = require( './../../../base/assert/is-data-type-object' );
var dtypeStrings = require( './../../../base/dtype-strings' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var dtypeObjects = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeObjects, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object mapping dtypes to data type objects', function test( t ) {
	var obj;
	var dt;
	var o;
	var i;

	dt = dtypeStrings();
	obj = dtypeObjects();
	t.strictEqual( typeof obj, 'object', 'returns expected value' );

	for ( i = 0; i < dt.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, dt[ i ] ), true, 'returns expected value for ' + dt[ i ] );

		o = obj[ dt[ i ] ];
		t.strictEqual( isDataTypeObject( o ), true, 'returns expected value' );
		t.strictEqual( o.value, dt[ i ], 'returns expected value' );
		t.strictEqual( String( o ), dt[ i ], 'returns expected value' );
	}
	t.end();
});
