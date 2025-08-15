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

import zeros = require( './../../../../zeros' );
import countIf = require( './index' );

/**
* Predicate function.
*
* @param v - ndarray element
* @returns result
*/
function clbk( v: any ): boolean {
	return v > 0.0;
}


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	countIf( arrays, clbk ); // $ExpectType number
	countIf( arrays, clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	countIf( 5, clbk ); // $ExpectError
	countIf( true, clbk ); // $ExpectError
	countIf( false, clbk ); // $ExpectError
	countIf( null, clbk ); // $ExpectError
	countIf( undefined, clbk ); // $ExpectError
	countIf( {}, clbk ); // $ExpectError
	countIf( [ 1 ], clbk ); // $ExpectError
	countIf( ( x: number ): number => x, clbk ); // $ExpectError

	countIf( 5, clbk, {} ); // $ExpectError
	countIf( true, clbk, {} ); // $ExpectError
	countIf( false, clbk, {} ); // $ExpectError
	countIf( null, clbk, {} ); // $ExpectError
	countIf( undefined, clbk, {} ); // $ExpectError
	countIf( {}, clbk, {} ); // $ExpectError
	countIf( [ 1 ], clbk, {} ); // $ExpectError
	countIf( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	countIf( arrays, '10' ); // $ExpectError
	countIf( arrays, 5 ); // $ExpectError
	countIf( arrays, true ); // $ExpectError
	countIf( arrays, false ); // $ExpectError
	countIf( arrays, null ); // $ExpectError
	countIf( arrays, undefined ); // $ExpectError
	countIf( arrays, [] ); // $ExpectError
	countIf( arrays, {} ); // $ExpectError

	countIf( arrays, '10', {} ); // $ExpectError
	countIf( arrays, 5, {} ); // $ExpectError
	countIf( arrays, true, {} ); // $ExpectError
	countIf( arrays, false, {} ); // $ExpectError
	countIf( arrays, null, {} ); // $ExpectError
	countIf( arrays, undefined, {} ); // $ExpectError
	countIf( arrays, [], {} ); // $ExpectError
	countIf( arrays, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	countIf(); // $ExpectError
	countIf( arrays ); // $ExpectError
	countIf( arrays, clbk, {}, {} ); // $ExpectError
}
