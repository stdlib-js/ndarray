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
import includes = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = zeros( [ 2, 2 ] );
	const v = zeros( [] );

	const arrays = [ x, v ];

	includes( arrays ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	includes( 5 ); // $ExpectError
	includes( true ); // $ExpectError
	includes( false ); // $ExpectError
	includes( null ); // $ExpectError
	includes( undefined ); // $ExpectError
	includes( {} ); // $ExpectError
	includes( [ 1 ] ); // $ExpectError
	includes( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const v = zeros( [] );

	const arrays = [ x, v ];

	includes(); // $ExpectError
	includes( arrays, 10 ); // $ExpectError
}
