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
import shift = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	shift( empty( 'float64', sh, order ) ); // $ExpectType [float64ndarray, float64ndarray]
	shift( empty( 'complex64', sh, order ) ); // $ExpectType [complex64ndarray, complex64ndarray]
	shift( empty( 'uint8', sh, order ) ); // $ExpectType [uint8ndarray, uint8ndarray]

	shift( empty( 'float64', sh, order ), {} ); // $ExpectType [float64ndarray, float64ndarray]
	shift( empty( 'complex64', sh, order ), {} ); // $ExpectType [complex64ndarray, complex64ndarray]
	shift( empty( 'uint8', sh, order ), {} ); // $ExpectType [uint8ndarray, uint8ndarray]
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	shift( '10' ); // $ExpectError
	shift( 10 ); // $ExpectError
	shift( false ); // $ExpectError
	shift( true ); // $ExpectError
	shift( null ); // $ExpectError
	shift( [] ); // $ExpectError
	shift( {} ); // $ExpectError
	shift( ( x: number ): number => x ); // $ExpectError

	shift( '10', {} ); // $ExpectError
	shift( 10, {} ); // $ExpectError
	shift( false, {} ); // $ExpectError
	shift( true, {} ); // $ExpectError
	shift( null, {} ); // $ExpectError
	shift( [], {} ); // $ExpectError
	shift( {}, {} ); // $ExpectError
	shift( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	shift( x, '5' ); // $ExpectError
	shift( x, false ); // $ExpectError
	shift( x, true ); // $ExpectError
	shift( x, null ); // $ExpectError
	shift( x, [ '5' ] ); // $ExpectError
	shift( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument with an invalid `dim` option...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	shift( x, { 'dim': '5' } ); // $ExpectError
	shift( x, { 'dim': false } ); // $ExpectError
	shift( x, { 'dim': true } ); // $ExpectError
	shift( x, { 'dim': null } ); // $ExpectError
	shift( x, { 'dim': [ '5' ] } ); // $ExpectError
	shift( x, { 'dim': {} } ); // $ExpectError
	shift( x, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	shift();
	shift( x, {}, {} ); // $ExpectError
}
