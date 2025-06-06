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

import zeros = require( './../../../zeros' );
import empty = require( './../../../empty' );
import countFalsy = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	countFalsy( x ); // $ExpectType int32ndarray
	countFalsy( x, {} ); // $ExpectType int32ndarray
	countFalsy( x, { 'keepdims': true } ); // $ExpectType int32ndarray
	countFalsy( x, { 'dims': [ 0 ] } ); // $ExpectType int32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	countFalsy( 5 ); // $ExpectError
	countFalsy( true ); // $ExpectError
	countFalsy( false ); // $ExpectError
	countFalsy( null ); // $ExpectError
	countFalsy( undefined ); // $ExpectError
	countFalsy( {} ); // $ExpectError
	countFalsy( [ 1 ] ); // $ExpectError
	countFalsy( ( x: number ): number => x ); // $ExpectError

	countFalsy( 5, {} ); // $ExpectError
	countFalsy( true, {} ); // $ExpectError
	countFalsy( false, {} ); // $ExpectError
	countFalsy( null, {} ); // $ExpectError
	countFalsy( undefined, {} ); // $ExpectError
	countFalsy( {}, {} ); // $ExpectError
	countFalsy( [ 1 ], {} ); // $ExpectError
	countFalsy( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	countFalsy( x, '5' ); // $ExpectError
	countFalsy( x, 5 ); // $ExpectError
	countFalsy( x, true ); // $ExpectError
	countFalsy( x, false ); // $ExpectError
	countFalsy( x, null ); // $ExpectError
	countFalsy( x, [ 1 ] ); // $ExpectError
	countFalsy( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	countFalsy( x, { 'keepdims': '5' } ); // $ExpectError
	countFalsy( x, { 'keepdims': 5 } ); // $ExpectError
	countFalsy( x, { 'keepdims': null } ); // $ExpectError
	countFalsy( x, { 'keepdims': [ 1 ] } ); // $ExpectError
	countFalsy( x, { 'keepdims': {} } ); // $ExpectError
	countFalsy( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	countFalsy( x, { 'dims': '5' } ); // $ExpectError
	countFalsy( x, { 'dims': 5 } ); // $ExpectError
	countFalsy( x, { 'dims': null } ); // $ExpectError
	countFalsy( x, { 'dims': true } ); // $ExpectError
	countFalsy( x, { 'dims': false } ); // $ExpectError
	countFalsy( x, { 'dims': {} } ); // $ExpectError
	countFalsy( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	countFalsy(); // $ExpectError
	countFalsy( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countFalsy.assign( x, y ); // $ExpectType int32ndarray
	countFalsy.assign( x, y, {} ); // $ExpectType int32ndarray
	countFalsy.assign( x, y, { 'dims': [ 0 ] } ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], { 'dtype': 'int32' } );

	countFalsy.assign( 5, y ); // $ExpectError
	countFalsy.assign( true, y ); // $ExpectError
	countFalsy.assign( false, y ); // $ExpectError
	countFalsy.assign( null, y ); // $ExpectError
	countFalsy.assign( undefined, y ); // $ExpectError
	countFalsy.assign( {}, y ); // $ExpectError
	countFalsy.assign( [ 1 ], y ); // $ExpectError
	countFalsy.assign( ( x: number ): number => x, y ); // $ExpectError

	countFalsy.assign( 5, y, {} ); // $ExpectError
	countFalsy.assign( true, y, {} ); // $ExpectError
	countFalsy.assign( false, y, {} ); // $ExpectError
	countFalsy.assign( null, y, {} ); // $ExpectError
	countFalsy.assign( undefined, y, {} ); // $ExpectError
	countFalsy.assign( {}, y, {} ); // $ExpectError
	countFalsy.assign( [ 1 ], y, {} ); // $ExpectError
	countFalsy.assign( ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	countFalsy.assign( x, 5 ); // $ExpectError
	countFalsy.assign( x, true ); // $ExpectError
	countFalsy.assign( x, false ); // $ExpectError
	countFalsy.assign( x, null ); // $ExpectError
	countFalsy.assign( x, undefined ); // $ExpectError
	countFalsy.assign( x, {} ); // $ExpectError
	countFalsy.assign( x, [ 1 ] ); // $ExpectError
	countFalsy.assign( x, ( x: number ): number => x ); // $ExpectError

	countFalsy.assign( x, 5, {} ); // $ExpectError
	countFalsy.assign( x, true, {} ); // $ExpectError
	countFalsy.assign( x, false, {} ); // $ExpectError
	countFalsy.assign( x, null, {} ); // $ExpectError
	countFalsy.assign( x, undefined, {} ); // $ExpectError
	countFalsy.assign( x, {}, {} ); // $ExpectError
	countFalsy.assign( x, [ 1 ], {} ); // $ExpectError
	countFalsy.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countFalsy.assign( x, y, '5' ); // $ExpectError
	countFalsy.assign( x, y, 5 ); // $ExpectError
	countFalsy.assign( x, y, true ); // $ExpectError
	countFalsy.assign( x, y, false ); // $ExpectError
	countFalsy.assign( x, y, null ); // $ExpectError
	countFalsy.assign( x, y, [ 1 ] ); // $ExpectError
	countFalsy.assign( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countFalsy.assign( x, y, { 'dims': '5' } ); // $ExpectError
	countFalsy.assign( x, y, { 'dims': 5 } ); // $ExpectError
	countFalsy.assign( x, y, { 'dims': null } ); // $ExpectError
	countFalsy.assign( x, y, { 'dims': true } ); // $ExpectError
	countFalsy.assign( x, y, { 'dims': false } ); // $ExpectError
	countFalsy.assign( x, y, { 'dims': {} } ); // $ExpectError
	countFalsy.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countFalsy.assign(); // $ExpectError
	countFalsy.assign( x ); // $ExpectError
	countFalsy.assign( x, y, {}, {} ); // $ExpectError
}
