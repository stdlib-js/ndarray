/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import map = require( './index' );

/**
* Evaluates the identity function.
*
* @param x - input value
* @returns input value
*/
function identity( x: number ): number {
	return x;
}

// TESTS //

// The function returns `undefined`...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );

	map( [ x, y ], identity ); // $ExpectType void
	map( [ x, y ], identity, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	map( 5, identity ); // $ExpectError
	map( true, identity ); // $ExpectError
	map( false, identity ); // $ExpectError
	map( null, identity ); // $ExpectError
	map( undefined, identity ); // $ExpectError
	map( {}, identity ); // $ExpectError
	map( [ 1 ], identity ); // $ExpectError
	map( ( x: number ): number => x, identity ); // $ExpectError

	map( 5, identity, {} ); // $ExpectError
	map( true, identity, {} ); // $ExpectError
	map( false, identity, {} ); // $ExpectError
	map( null, identity, {} ); // $ExpectError
	map( undefined, identity, {} ); // $ExpectError
	map( {}, identity, {} ); // $ExpectError
	map( [ 1 ], identity, {} ); // $ExpectError
	map( ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );

	map( [ x, y ], '10' ); // $ExpectError
	map( [ x, y ], 5 ); // $ExpectError
	map( [ x, y ], true ); // $ExpectError
	map( [ x, y ], false ); // $ExpectError
	map( [ x, y ], null ); // $ExpectError
	map( [ x, y ], undefined ); // $ExpectError
	map( [ x, y ], [] ); // $ExpectError
	map( [ x, y ], {} ); // $ExpectError

	map( [ x, y ], '10', {} ); // $ExpectError
	map( [ x, y ], 5, {} ); // $ExpectError
	map( [ x, y ], true, {} ); // $ExpectError
	map( [ x, y ], false, {} ); // $ExpectError
	map( [ x, y ], null, {} ); // $ExpectError
	map( [ x, y ], undefined, {} ); // $ExpectError
	map( [ x, y ], [], {} ); // $ExpectError
	map( [ x, y ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2 ] );

	map(); // $ExpectError
	map( [ x, y ] ); // $ExpectError{
	map( [ x, y ], identity, {}, {} ); // $ExpectError
}
