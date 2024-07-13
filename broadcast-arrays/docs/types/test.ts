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
import broadcastArrays = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2, 2 ] );

	broadcastArrays( [ x ] ); // $ExpectType typedndarray<number>[]
	broadcastArrays( [ x, y ] ); // $ExpectType typedndarray<number>[]
	broadcastArrays( [ x, y, x ] ); // $ExpectType typedndarray<number>[]

	broadcastArrays( x ); // $ExpectType typedndarray<number>[]
	broadcastArrays( x, y ); // $ExpectType typedndarray<number>[]
	broadcastArrays( x, y, x ); // $ExpectType typedndarray<number>[]
}

// The compiler throws an error if the function is not provided a first argument which is an array of ndarrays or an ndarray...
{
	broadcastArrays( '5' ); // $ExpectError
	broadcastArrays( 5 ); // $ExpectError
	broadcastArrays( true ); // $ExpectError
	broadcastArrays( false ); // $ExpectError
	broadcastArrays( null ); // $ExpectError
	broadcastArrays( {} ); // $ExpectError
	broadcastArrays( [ '5' ] ); // $ExpectError
	broadcastArrays( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrays( x, '5' ); // $ExpectError
	broadcastArrays( x, 5 ); // $ExpectError
	broadcastArrays( x, true ); // $ExpectError
	broadcastArrays( x, false ); // $ExpectError
	broadcastArrays( x, null ); // $ExpectError
	broadcastArrays( x, {} ); // $ExpectError
	broadcastArrays( x, [ '5' ] ); // $ExpectError
	broadcastArrays( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a third argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrays( x, x, '5' ); // $ExpectError
	broadcastArrays( x, x, 5 ); // $ExpectError
	broadcastArrays( x, x, true ); // $ExpectError
	broadcastArrays( x, x, false ); // $ExpectError
	broadcastArrays( x, x, null ); // $ExpectError
	broadcastArrays( x, x, {} ); // $ExpectError
	broadcastArrays( x, x, [ '5' ] ); // $ExpectError
	broadcastArrays( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a fourth argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrays( x, x, x, '5' ); // $ExpectError
	broadcastArrays( x, x, x, 5 ); // $ExpectError
	broadcastArrays( x, x, x, true ); // $ExpectError
	broadcastArrays( x, x, x, false ); // $ExpectError
	broadcastArrays( x, x, x, null ); // $ExpectError
	broadcastArrays( x, x, x, {} ); // $ExpectError
	broadcastArrays( x, x, x, [ '5' ] ); // $ExpectError
	broadcastArrays( x, x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a fifth argument which is an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrays( x, x, x, x, '5' ); // $ExpectError
	broadcastArrays( x, x, x, x, 5 ); // $ExpectError
	broadcastArrays( x, x, x, x, true ); // $ExpectError
	broadcastArrays( x, x, x, x, false ); // $ExpectError
	broadcastArrays( x, x, x, x, null ); // $ExpectError
	broadcastArrays( x, x, x, x, {} ); // $ExpectError
	broadcastArrays( x, x, x, x, [ '5' ] ); // $ExpectError
	broadcastArrays( x, x, x, x, ( x: number ): number => x ); // $ExpectError
}
