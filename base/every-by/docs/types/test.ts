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
import everyBy = require( './index' );

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

// The function returns a boolean...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	everyBy( arrays, clbk ); // $ExpectType boolean
	everyBy( arrays, clbk, {} ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	everyBy( 5, clbk ); // $ExpectError
	everyBy( true, clbk ); // $ExpectError
	everyBy( false, clbk ); // $ExpectError
	everyBy( null, clbk ); // $ExpectError
	everyBy( undefined, clbk ); // $ExpectError
	everyBy( {}, clbk ); // $ExpectError
	everyBy( [ 1 ], clbk ); // $ExpectError
	everyBy( ( x: number ): number => x, clbk ); // $ExpectError

	everyBy( 5, clbk, {} ); // $ExpectError
	everyBy( true, clbk, {} ); // $ExpectError
	everyBy( false, clbk, {} ); // $ExpectError
	everyBy( null, clbk, {} ); // $ExpectError
	everyBy( undefined, clbk, {} ); // $ExpectError
	everyBy( {}, clbk, {} ); // $ExpectError
	everyBy( [ 1 ], clbk, {} ); // $ExpectError
	everyBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	everyBy( arrays, '10' ); // $ExpectError
	everyBy( arrays, 5 ); // $ExpectError
	everyBy( arrays, true ); // $ExpectError
	everyBy( arrays, false ); // $ExpectError
	everyBy( arrays, null ); // $ExpectError
	everyBy( arrays, undefined ); // $ExpectError
	everyBy( arrays, [] ); // $ExpectError
	everyBy( arrays, {} ); // $ExpectError

	everyBy( arrays, '10', {} ); // $ExpectError
	everyBy( arrays, 5, {} ); // $ExpectError
	everyBy( arrays, true, {} ); // $ExpectError
	everyBy( arrays, false, {} ); // $ExpectError
	everyBy( arrays, null, {} ); // $ExpectError
	everyBy( arrays, undefined, {} ); // $ExpectError
	everyBy( arrays, [], {} ); // $ExpectError
	everyBy( arrays, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	everyBy(); // $ExpectError
	everyBy( arrays ); // $ExpectError
	everyBy( arrays, clbk, {}, {} ); // $ExpectError
}
