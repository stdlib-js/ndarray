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
import pop = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	pop( empty( 'float64', sh, order ), 1, false ); // $ExpectType [float64ndarray, float64ndarray]
	pop( empty( 'complex64', sh, order ), 1, false ); // $ExpectType [complex64ndarray, complex64ndarray]
	pop( empty( 'uint8', sh, order ), 1, false ); // $ExpectType [uint8ndarray, uint8ndarray]
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	pop( '10', 1, false ); // $ExpectError
	pop( 10, 1, false ); // $ExpectError
	pop( false, 1, false ); // $ExpectError
	pop( true, 1, false ); // $ExpectError
	pop( null, 1, false ); // $ExpectError
	pop( [], 1, false ); // $ExpectError
	pop( {}, 1, false ); // $ExpectError
	pop( ( x: number ): number => x, 1, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an integer...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	pop( x, '5', false ); // $ExpectError
	pop( x, false, false ); // $ExpectError
	pop( x, true, false ); // $ExpectError
	pop( x, null, false ); // $ExpectError
	pop( x, undefined, false ); // $ExpectError
	pop( x, [ '5' ], false ); // $ExpectError
	pop( x, {}, false ); // $ExpectError
	pop( x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	pop( x, 1, '5' ); // $ExpectError
	pop( x, 1, 5 ); // $ExpectError
	pop( x, 1, null ); // $ExpectError
	pop( x, 1, undefined ); // $ExpectError
	pop( x, 1, [ '5' ] ); // $ExpectError
	pop( x, 1, {} ); // $ExpectError
	pop( x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	pop( x ); // $ExpectError
	pop( x, 1 ); // $ExpectError
	pop( x, 1, false, {} ); // $ExpectError
}
