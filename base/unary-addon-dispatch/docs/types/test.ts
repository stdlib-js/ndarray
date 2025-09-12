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

import { Collection } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';
import zeros = require( './../../../../zeros' );
import dispatch = require( './index' );


// FUNCTIONS //

/**
* Add-on function.
*
* @param xbuf - input ndarray data buffer
* @param metaX - input ndarray meta data
* @param ybuf - output ndarray data buffer
* @param metaY - output ndarray meta data
*/
function addon( xbuf: Collection<number>, metaX: DataView, ybuf: Collection<number>, metaY: DataView ): void {
	if ( typeof metaX !== 'object' || typeof metaY !== 'object' ) {
		throw new Error( 'beep' );
	}
	ybuf[ 0 ] = xbuf[ 0 ];
}

/**
* Fallback function.
*
* @param x - input ndarray
* @param y - output ndarray
*/
function fallback( x: typedndarray<number>, y: typedndarray<number> ): void {
	y.set( 0, x.get( 0 ) );
}


// TESTS //

// The function returns a dispatch function...
{
	dispatch( addon, fallback ); // $ExpectType Dispatcher<typedndarray<number>, typedndarray<number>>
}

// The compiler throws an error if not provided a first argument which is an add-on function...
{
	dispatch( '10', fallback ); // $ExpectError
	dispatch( 10, fallback ); // $ExpectError
	dispatch( true, fallback ); // $ExpectError
	dispatch( false, fallback ); // $ExpectError
	dispatch( null, fallback ); // $ExpectError
	dispatch( undefined, fallback ); // $ExpectError
	dispatch( [], fallback ); // $ExpectError
	dispatch( {}, fallback ); // $ExpectError
	dispatch( ( x: string ): string => x, fallback ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a fallback function...
{
	dispatch( addon, '10' ); // $ExpectError
	dispatch( addon, 10 ); // $ExpectError
	dispatch( addon, true ); // $ExpectError
	dispatch( addon, false ); // $ExpectError
	dispatch( addon, null ); // $ExpectError
	dispatch( addon, undefined ); // $ExpectError
	dispatch( addon, [] ); // $ExpectError
	dispatch( addon, {} ); // $ExpectError
	dispatch( addon, ( x: string ): string => x ); // $ExpectError
}

// The returned function returns an ndarray...
{
	const f = dispatch( addon, fallback );

	f( zeros( [ 2, 2 ] ), zeros( [ 2, 2 ] ) ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the returned function is not provided a first argument which is an ndarray...
{
	const f = dispatch( addon, fallback );

	f( '10', zeros( [ 2, 2 ] ) ); // $ExpectError
	f( true, zeros( [ 2, 2 ] ) ); // $ExpectError
	f( false, zeros( [ 2, 2 ] ) ); // $ExpectError
	f( null, zeros( [ 2, 2 ] ) ); // $ExpectError
	f( void 0, zeros( [ 2, 2 ] ) ); // $ExpectError
	f( [], zeros( [ 2, 2 ] ) ); // $ExpectError
	f( {}, zeros( [ 2, 2 ] ) ); // $ExpectError
	f( ( x: number ): number => x, zeros( [ 2, 2 ] ) ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a second argument which is an ndarray...
{
	const f = dispatch( addon, fallback );

	f( zeros( [ 2, 2 ] ), '10' ); // $ExpectError
	f( zeros( [ 2, 2 ] ), true ); // $ExpectError
	f( zeros( [ 2, 2 ] ), false ); // $ExpectError
	f( zeros( [ 2, 2 ] ), null ); // $ExpectError
	f( zeros( [ 2, 2 ] ), void 0 ); // $ExpectError
	f( zeros( [ 2, 2 ] ), [] ); // $ExpectError
	f( zeros( [ 2, 2 ] ), {} ); // $ExpectError
	f( zeros( [ 2, 2 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const f = dispatch( addon, fallback );

	f(); // $ExpectError
	f( zeros( [ 2, 2 ] ) ); // $ExpectError
	f( zeros( [ 2, 2 ] ), zeros( [ 2, 2 ] ), {} ); // $ExpectError
}
