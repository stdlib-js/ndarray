/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var dtypes = require( './../../../dtypes' );
var cartesianSquare = require( '@stdlib/array/base/cartesian-square' );
var promotionRules = require( './../../../promotion-rules' );
var binaryBlockSize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binaryBlockSize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a block size', function test( t ) {
	var dt;
	var pt;
	var v;
	var i;

	// NOTE: we don't test for exact block size values, as we shouldn't need to make guarantees regarding the block size for any particular set of dtypes. This function is meant to be opaque, and we want to reserve the right to silently update/change return values in the future.

	// Generate dtype pairs:
	dt = cartesianSquare( dtypes() );

	for ( i = 0; i < dt.length; i++ ) {
		pt = promotionRules.apply( null, dt[ i ] );
		dt[ i ].push( ( pt === -1 ) ? 'generic' : pt );
		v = binaryBlockSize( dt[ i ][ 0 ], dt[ i ][ 1 ], dt[ i ][ 2 ] );
		t.strictEqual( isPositiveInteger( v ), true, 'returns a positive integer when provided ('+dt[ i ].join( ', ' )+')' );
	}

	// Sanity check that the block size for dtypes with wider bit widths is smaller than for dtypes with shorter bit widths...
	t.strictEqual( binaryBlockSize( 'complex128', 'complex128', 'complex128' ) < binaryBlockSize( 'int8', 'int8', 'int8' ), true, 'returns expected value' );
	t.strictEqual( binaryBlockSize( 'float64', 'float64', 'float64' ) < binaryBlockSize( 'uint8', 'uint8', 'uint8' ), true, 'returns expected value' );
	t.end();
});
