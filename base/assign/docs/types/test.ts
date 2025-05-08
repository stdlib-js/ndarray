/*
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

import zeros = require( './../../../../zeros' );
import assign = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );
	const arrays = [ x, y ];

	assign( arrays ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	assign( '5' ); // $ExpectError
	assign( 5 ); // $ExpectError
	assign( true ); // $ExpectError
	assign( false ); // $ExpectError
	assign( null ); // $ExpectError
	assign( undefined ); // $ExpectError
	assign( {} ); // $ExpectError
	assign( [ 1 ] ); // $ExpectError
	assign( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );
	const arrays = [ x, y ];

	assign(); // $ExpectError
	assign( arrays, 10 ); // $ExpectError
}
