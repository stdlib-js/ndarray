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

import zeros = require( './../../../zeros' );
import maybeBroadcastArrays = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2, 2 ] );

	maybeBroadcastArrays( [ x ] ); // $ExpectType typedndarray<number>[]
	maybeBroadcastArrays( [ x, y ] ); // $ExpectType typedndarray<number>[]
	maybeBroadcastArrays( [ x, y, x ] ); // $ExpectType typedndarray<number>[]

	maybeBroadcastArrays( x ); // $ExpectType typedndarray<number>[]
	maybeBroadcastArrays( x, y ); // $ExpectType typedndarray<number>[]
	maybeBroadcastArrays( x, y, x ); // $ExpectType typedndarray<number>[]
}

// The compiler throws an error if the function is not provided a first argument which is an array of ndarrays or an ndarray...
{
	maybeBroadcastArrays( '5' ); // $ExpectError
	maybeBroadcastArrays( 5 ); // $ExpectError
	maybeBroadcastArrays( true ); // $ExpectError
	maybeBroadcastArrays( false ); // $ExpectError
	maybeBroadcastArrays( null ); // $ExpectError
	maybeBroadcastArrays( {} ); // $ExpectError
	maybeBroadcastArrays( [ '5' ] ); // $ExpectError
	maybeBroadcastArrays( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	maybeBroadcastArrays( x, '5' ); // $ExpectError
	maybeBroadcastArrays( x, 5 ); // $ExpectError
	maybeBroadcastArrays( x, true ); // $ExpectError
	maybeBroadcastArrays( x, false ); // $ExpectError
	maybeBroadcastArrays( x, null ); // $ExpectError
	maybeBroadcastArrays( x, {} ); // $ExpectError
	maybeBroadcastArrays( x, [ '5' ] ); // $ExpectError
	maybeBroadcastArrays( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a third argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	maybeBroadcastArrays( x, x, '5' ); // $ExpectError
	maybeBroadcastArrays( x, x, 5 ); // $ExpectError
	maybeBroadcastArrays( x, x, true ); // $ExpectError
	maybeBroadcastArrays( x, x, false ); // $ExpectError
	maybeBroadcastArrays( x, x, null ); // $ExpectError
	maybeBroadcastArrays( x, x, {} ); // $ExpectError
	maybeBroadcastArrays( x, x, [ '5' ] ); // $ExpectError
	maybeBroadcastArrays( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a fourth argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	maybeBroadcastArrays( x, x, x, '5' ); // $ExpectError
	maybeBroadcastArrays( x, x, x, 5 ); // $ExpectError
	maybeBroadcastArrays( x, x, x, true ); // $ExpectError
	maybeBroadcastArrays( x, x, x, false ); // $ExpectError
	maybeBroadcastArrays( x, x, x, null ); // $ExpectError
	maybeBroadcastArrays( x, x, x, {} ); // $ExpectError
	maybeBroadcastArrays( x, x, x, [ '5' ] ); // $ExpectError
	maybeBroadcastArrays( x, x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a fifth argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	maybeBroadcastArrays( x, x, x, x, '5' ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, 5 ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, true ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, false ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, null ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, {} ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, [ '5' ] ); // $ExpectError
	maybeBroadcastArrays( x, x, x, x, ( x: number ): number => x ); // $ExpectError
}
