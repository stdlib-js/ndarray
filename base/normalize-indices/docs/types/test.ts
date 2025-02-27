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

import normalizeIndices = require( './index' );


// TESTS //

// The function returns a collection of numbers or `null`...
{
	normalizeIndices( [ 0, 15 ], 10 ); // $ExpectType Collection<number> | null
}

// The compiler throws an error if the function is provided invalid values...
{
	normalizeIndices( true, 3 ); // $ExpectError
	normalizeIndices( false, 2 ); // $ExpectError
	normalizeIndices( '5', 1 ); // $ExpectError
	normalizeIndices( [ '5' ], 1 ); // $ExpectError
	normalizeIndices( {}, 2 ); // $ExpectError
	normalizeIndices( ( x: number ): number => x, 2 ); // $ExpectError

	normalizeIndices( [ 9 ], true ); // $ExpectError
	normalizeIndices( [ 9 ], false ); // $ExpectError
	normalizeIndices( [ 5 ], '5' ); // $ExpectError
	normalizeIndices( [ 8 ], [] ); // $ExpectError
	normalizeIndices( [ 9 ], {} ); // $ExpectError
	normalizeIndices( [ 8 ], ( x: number ): number => x ); // $ExpectError

	normalizeIndices( [], true ); // $ExpectError
	normalizeIndices( {}, false ); // $ExpectError
	normalizeIndices( false, '5' ); // $ExpectError
	normalizeIndices( {}, [] ); // $ExpectError
	normalizeIndices( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	normalizeIndices(); // $ExpectError
	normalizeIndices( [ 3 ] ); // $ExpectError
}
