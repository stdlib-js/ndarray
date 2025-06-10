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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( './../../../from-scalar' );
var ndarray = require( './../../../ctor' );
var includes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof includes, 'function', 'main export is a function');
	t.end();
});

tape( 'the function tests whether a 0-dimensional ndarray contains a specified value', function test( t ) {
	var actual;
	var x;
	var v;

	x = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	v = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});

	actual = includes( [ x, v ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});
	v = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});

	actual = includes( [ x, v ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether a 0-dimensional ndarray contains a specified value (accessors)', function test( t ) {
	var actual;
	var x;
	var v;

	x = ndarray( 'float64', toAccessorArray( new Float64Array( [ 0.0 ] ) ), [], [ 0 ], 0, 'row-major' );
	v = ndarray( 'float64', toAccessorArray( new Float64Array( [ 1.0 ] ) ), [], [ 0 ], 0, 'row-major' );

	actual = includes( [ x, v ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( 'float64', toAccessorArray( new Float64Array( [ 1.0 ] ) ), [], [ 0 ], 0, 'row-major' );
	v = ndarray( 'float64', toAccessorArray( new Float64Array( [ 1.0 ] ) ), [], [ 0 ], 0, 'row-major' );

	actual = includes( [ x, v ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether a 0-dimensional ndarray contains a specified value (complex)', function test( t ) {
	var actual;
	var x;
	var v;

	x = scalar2ndarray( new Complex128( 0.0, 0.0 ), {
		'dtype': 'complex128'
	});
	v = scalar2ndarray( new Complex128( 1.0, 2.0 ), {
		'dtype': 'complex128'
	});

	actual = includes( [ x, v ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = scalar2ndarray( new Complex128( 1.0, 2.0 ), {
		'dtype': 'complex128'
	});
	v = scalar2ndarray( new Complex128( 1.0, 2.0 ), {
		'dtype': 'complex128'
	});

	actual = includes( [ x, v ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});
