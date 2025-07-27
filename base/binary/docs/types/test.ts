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
import binary = require( './index' );

/**
* Callback function.
*
* @param x - first input value
* @param y - second input value
* @returns result
*/
function fcn( x: number, y: number ): number {
	return x + y;
}


// TESTS //

// The function returns `undefined`...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );
	const z = zeros( [ 2, 2 ] );
	const arrays = [ x, y, z ];

	binary( arrays, fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	binary( 5, fcn ); // $ExpectError
	binary( true, fcn ); // $ExpectError
	binary( false, fcn ); // $ExpectError
	binary( null, fcn ); // $ExpectError
	binary( undefined, fcn ); // $ExpectError
	binary( {}, fcn ); // $ExpectError
	binary( [ 1 ], fcn ); // $ExpectError
	binary( ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a binary function...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );
	const z = zeros( [ 2, 2 ] );
	const arrays = [ x, y, z ];

	binary( arrays, '10' ); // $ExpectError
	binary( arrays, 5 ); // $ExpectError
	binary( arrays, true ); // $ExpectError
	binary( arrays, false ); // $ExpectError
	binary( arrays, null ); // $ExpectError
	binary( arrays, undefined ); // $ExpectError
	binary( arrays, [] ); // $ExpectError
	binary( arrays, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );
	const z = zeros( [ 2, 2 ] );
	const arrays = [ x, y, z ];

	binary(); // $ExpectError
	binary( arrays ); // $ExpectError
	binary( arrays, fcn, 10 ); // $ExpectError
}
