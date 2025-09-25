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

import empty = require( './../../../../base/empty' );
import shift = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	shift( empty( 'float64', sh, order ), 1, false ); // $ExpectType [float64ndarray, float64ndarray]
	shift( empty( 'complex64', sh, order ), 1, false ); // $ExpectType [complex64ndarray, complex64ndarray]
	shift( empty( 'uint8', sh, order ), 1, false ); // $ExpectType [uint8ndarray, uint8ndarray]
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	shift( '10', 1, false ); // $ExpectError
	shift( 10, 1, false ); // $ExpectError
	shift( false, 1, false ); // $ExpectError
	shift( true, 1, false ); // $ExpectError
	shift( null, 1, false ); // $ExpectError
	shift( [], 1, false ); // $ExpectError
	shift( {}, 1, false ); // $ExpectError
	shift( ( x: number ): number => x, 1, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an integer...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	shift( x, '5', false ); // $ExpectError
	shift( x, false, false ); // $ExpectError
	shift( x, true, false ); // $ExpectError
	shift( x, null, false ); // $ExpectError
	shift( x, undefined, false ); // $ExpectError
	shift( x, [ '5' ], false ); // $ExpectError
	shift( x, {}, false ); // $ExpectError
	shift( x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	shift( x, 1, '5' ); // $ExpectError
	shift( x, 1, 5 ); // $ExpectError
	shift( x, 1, null ); // $ExpectError
	shift( x, 1, undefined ); // $ExpectError
	shift( x, 1, [ '5' ] ); // $ExpectError
	shift( x, 1, {} ); // $ExpectError
	shift( x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	shift( x ); // $ExpectError
	shift( x, 1 ); // $ExpectError
	shift( x, 1, false, {} ); // $ExpectError
}
