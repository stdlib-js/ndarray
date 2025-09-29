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

import empty = require( './../../../base/empty' );
import pop = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	pop( empty( 'float64', sh, order ) ); // $ExpectType [float64ndarray, float64ndarray]
	pop( empty( 'complex64', sh, order ) ); // $ExpectType [complex64ndarray, complex64ndarray]
	pop( empty( 'uint8', sh, order ) ); // $ExpectType [uint8ndarray, uint8ndarray]

	pop( empty( 'float64', sh, order ), {} ); // $ExpectType [float64ndarray, float64ndarray]
	pop( empty( 'complex64', sh, order ), {} ); // $ExpectType [complex64ndarray, complex64ndarray]
	pop( empty( 'uint8', sh, order ), {} ); // $ExpectType [uint8ndarray, uint8ndarray]
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	pop( '10' ); // $ExpectError
	pop( 10 ); // $ExpectError
	pop( false ); // $ExpectError
	pop( true ); // $ExpectError
	pop( null ); // $ExpectError
	pop( [] ); // $ExpectError
	pop( {} ); // $ExpectError
	pop( ( x: number ): number => x ); // $ExpectError

	pop( '10', {} ); // $ExpectError
	pop( 10, {} ); // $ExpectError
	pop( false, {} ); // $ExpectError
	pop( true, {} ); // $ExpectError
	pop( null, {} ); // $ExpectError
	pop( [], {} ); // $ExpectError
	pop( {}, {} ); // $ExpectError
	pop( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	pop( x, '5' ); // $ExpectError
	pop( x, 5 ); // $ExpectError
	pop( x, false ); // $ExpectError
	pop( x, true ); // $ExpectError
	pop( x, null ); // $ExpectError
	pop( x, [ '5' ] ); // $ExpectError
	pop( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with an invalid `dim` option...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	pop( x, { 'dim': '5' } ); // $ExpectError
	pop( x, { 'dim': false } ); // $ExpectError
	pop( x, { 'dim': true } ); // $ExpectError
	pop( x, { 'dim': null } ); // $ExpectError
	pop( x, { 'dim': [ '5' ] } ); // $ExpectError
	pop( x, { 'dim': {} } ); // $ExpectError
	pop( x, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	pop(); // $ExpectError
	pop( x, {}, {} ); // $ExpectError
}
