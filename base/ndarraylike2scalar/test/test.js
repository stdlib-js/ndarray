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
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( './../../../from-scalar' );
var ndarraylike2scalar = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarraylike2scalar, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts an ndarray-like object to a scalar (ndarray)', function test( t ) {
	var x = scalar2ndarray( 1.0 );
	t.strictEqual( ndarraylike2scalar( x ), 1.0, 'returns expected value' );
	t.end();
});

tape( 'the function converts an ndarray-like object to a scalar (ndarray-like)', function test( t ) {
	var x = {
		'data': new Float64Array( [ 1.0, 2.0, 3.0 ] ),
		'dtype': 'float64',
		'shape': [],
		'strides': [ 0 ],
		'offset': 1,
		'order': 'row-major'
	};
	t.strictEqual( ndarraylike2scalar( x ), 2.0, 'returns expected value' );
	t.end();
});
