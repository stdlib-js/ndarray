/*
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

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/complex';
import zeros = require( './../../../base/zeros' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import fillBy = require( './index' );

/**
* Real-valued callback function.
*
* @returns fill value
*/
function fcn1(): number {
	return 10.0;
}

/**
* Complex-valued callback function.
*
* @returns fill value
*/
function fcn2(): ComplexLike {
	return new Complex128( 10.0, 10.0 );
}


// TESTS //

// The function returns `undefined`...
{
	fillBy( zeros( 'float64', [ 2, 2 ], 'row-major' ), fcn1 ); // $ExpectType float64ndarray
	fillBy( zeros( 'complex128', [ 2, 2 ], 'row-major' ), fcn2 ); // $ExpectType complex128ndarray
	fillBy( zeros( 'generic', [ 2, 2 ], 'row-major' ), fcn1 ); // $ExpectType genericndarray<number>

	fillBy( zeros( 'float64', [ 2, 2 ], 'row-major' ), fcn1, {} ); // $ExpectType float64ndarray
	fillBy( zeros( 'complex128', [ 2, 2 ], 'row-major' ), fcn2, {} ); // $ExpectType complex128ndarray
	fillBy( zeros( 'generic', [ 2, 2 ], 'row-major' ), fcn1, {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray-like object...
{
	fillBy( '5', fcn1 ); // $ExpectError
	fillBy( 5, fcn1 ); // $ExpectError
	fillBy( true, fcn1 ); // $ExpectError
	fillBy( false, fcn1 ); // $ExpectError
	fillBy( null, fcn1 ); // $ExpectError
	fillBy( undefined, fcn1 ); // $ExpectError
	fillBy( {}, fcn1 ); // $ExpectError
	fillBy( [ 1 ], fcn1 ); // $ExpectError
	fillBy( ( x: number ): number => x, fcn1 ); // $ExpectError

	fillBy( '5', fcn1, {} ); // $ExpectError
	fillBy( 5, fcn1, {} ); // $ExpectError
	fillBy( true, fcn1, {} ); // $ExpectError
	fillBy( false, fcn1, {} ); // $ExpectError
	fillBy( null, fcn1, {} ); // $ExpectError
	fillBy( undefined, fcn1, {} ); // $ExpectError
	fillBy( {}, fcn1, {} ); // $ExpectError
	fillBy( [ 1 ], fcn1, {} ); // $ExpectError
	fillBy( ( x: number ): number => x, fcn1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	const x = zeros( 'float64', [ 2, 2 ], 'row-major' );

	fillBy( x, '5' ); // $ExpectError
	fillBy( x, 5 ); // $ExpectError
	fillBy( x, true ); // $ExpectError
	fillBy( x, false ); // $ExpectError
	fillBy( x, null ); // $ExpectError
	fillBy( x, undefined ); // $ExpectError
	fillBy( x, {} ); // $ExpectError
	fillBy( x, [ 1 ] ); // $ExpectError

	fillBy( x, '5', {} ); // $ExpectError
	fillBy( x, 5, {} ); // $ExpectError
	fillBy( x, true, {} ); // $ExpectError
	fillBy( x, false, {} ); // $ExpectError
	fillBy( x, null, {} ); // $ExpectError
	fillBy( x, undefined, {} ); // $ExpectError
	fillBy( x, {}, {} ); // $ExpectError
	fillBy( x, [ 1 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( 'float64', [ 2, 2 ], 'row-major' );

	fillBy(); // $ExpectError
	fillBy( x );
	fillBy( x, fcn1, {}, {} ); // $ExpectError
}
