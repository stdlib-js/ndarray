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

import zeros = require( './../../../../zeros' );
import accumulateUnary = require( './index' );

/**
* Accumulator callback.
*
* @param acc - accumulated result
* @param x - input value
* @returns accumulated result
*/
function accumulator( acc: number, x: number ): number {
	return acc + x;
}


// TESTS //

// The function returns an accumulated result...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	accumulateUnary( arrays, 0.0, accumulator ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	accumulateUnary( 5, 0.0, accumulator ); // $ExpectError
	accumulateUnary( true, 0.0, accumulator ); // $ExpectError
	accumulateUnary( false, 0.0, accumulator ); // $ExpectError
	accumulateUnary( null, 0.0, accumulator ); // $ExpectError
	accumulateUnary( undefined, 0.0, accumulator ); // $ExpectError
	accumulateUnary( {}, 0.0, accumulator ); // $ExpectError
	accumulateUnary( [ 1 ], 0.0, accumulator ); // $ExpectError
	accumulateUnary( ( x: number ): number => x, 0.0, accumulator ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an accumulator function...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	accumulateUnary( arrays, 0.0, '10' ); // $ExpectError
	accumulateUnary( arrays, 0.0, 5 ); // $ExpectError
	accumulateUnary( arrays, 0.0, true ); // $ExpectError
	accumulateUnary( arrays, 0.0, false ); // $ExpectError
	accumulateUnary( arrays, 0.0, null ); // $ExpectError
	accumulateUnary( arrays, 0.0, undefined ); // $ExpectError
	accumulateUnary( arrays, 0.0, [] ); // $ExpectError
	accumulateUnary( arrays, 0.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const arrays = [ x ];

	accumulateUnary(); // $ExpectError
	accumulateUnary( arrays ); // $ExpectError
	accumulateUnary( arrays, 0.0, accumulator, {} ); // $ExpectError
}
