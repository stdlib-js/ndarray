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
import every = require( './index' );


// TESTS //

// The function returns a boolean ndarray...
{
	const x = zeros( [ 2, 2 ] );

	every( x ); // $ExpectType boolndarray
	every( x, {} ); // $ExpectType boolndarray
	every( x, { 'keepdims': true } ); // $ExpectType boolndarray
	every( x, { 'dims': [ 0 ] } ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	every( 5 ); // $ExpectError
	every( true ); // $ExpectError
	every( false ); // $ExpectError
	every( null ); // $ExpectError
	every( undefined ); // $ExpectError
	every( {} ); // $ExpectError
	every( [ 1 ] ); // $ExpectError
	every( ( x: number ): number => x ); // $ExpectError

	every( 5, {} ); // $ExpectError
	every( true, {} ); // $ExpectError
	every( false, {} ); // $ExpectError
	every( null, {} ); // $ExpectError
	every( undefined, {} ); // $ExpectError
	every( {}, {} ); // $ExpectError
	every( [ 1 ], {} ); // $ExpectError
	every( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	every( x, '5' ); // $ExpectError
	every( x, 5 ); // $ExpectError
	every( x, true ); // $ExpectError
	every( x, false ); // $ExpectError
	every( x, null ); // $ExpectError
	every( x, [ 1 ] ); // $ExpectError
	every( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	every( x, { 'keepdims': '5' } ); // $ExpectError
	every( x, { 'keepdims': 5 } ); // $ExpectError
	every( x, { 'keepdims': null } ); // $ExpectError
	every( x, { 'keepdims': [ 1 ] } ); // $ExpectError
	every( x, { 'keepdims': {} } ); // $ExpectError
	every( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	every( x, { 'dims': '5' } ); // $ExpectError
	every( x, { 'dims': 5 } ); // $ExpectError
	every( x, { 'dims': null } ); // $ExpectError
	every( x, { 'dims': true } ); // $ExpectError
	every( x, { 'dims': false } ); // $ExpectError
	every( x, { 'dims': {} } ); // $ExpectError
	every( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	every(); // $ExpectError
	every( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	every.assign( x, y ); // $ExpectType boolndarray
	every.assign( x, y, {} ); // $ExpectType boolndarray
	every.assign( x, y, { 'dims': [ 0 ] } ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], { 'dtype': 'bool' } );

	every.assign( 5, y ); // $ExpectError
	every.assign( true, y ); // $ExpectError
	every.assign( false, y ); // $ExpectError
	every.assign( null, y ); // $ExpectError
	every.assign( undefined, y ); // $ExpectError
	every.assign( {}, y ); // $ExpectError
	every.assign( [ 1 ], y ); // $ExpectError
	every.assign( ( x: number ): number => x, y ); // $ExpectError

	every.assign( 5, y, {} ); // $ExpectError
	every.assign( true, y, {} ); // $ExpectError
	every.assign( false, y, {} ); // $ExpectError
	every.assign( null, y, {} ); // $ExpectError
	every.assign( undefined, y, {} ); // $ExpectError
	every.assign( {}, y, {} ); // $ExpectError
	every.assign( [ 1 ], y, {} ); // $ExpectError
	every.assign( ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	every.assign( x, 5 ); // $ExpectError
	every.assign( x, true ); // $ExpectError
	every.assign( x, false ); // $ExpectError
	every.assign( x, null ); // $ExpectError
	every.assign( x, undefined ); // $ExpectError
	every.assign( x, {} ); // $ExpectError
	every.assign( x, [ 1 ] ); // $ExpectError
	every.assign( x, ( x: number ): number => x ); // $ExpectError

	every.assign( x, 5, {} ); // $ExpectError
	every.assign( x, true, {} ); // $ExpectError
	every.assign( x, false, {} ); // $ExpectError
	every.assign( x, null, {} ); // $ExpectError
	every.assign( x, undefined, {} ); // $ExpectError
	every.assign( x, {}, {} ); // $ExpectError
	every.assign( x, [ 1 ], {} ); // $ExpectError
	every.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	every.assign( x, y, '5' ); // $ExpectError
	every.assign( x, y, 5 ); // $ExpectError
	every.assign( x, y, true ); // $ExpectError
	every.assign( x, y, false ); // $ExpectError
	every.assign( x, y, null ); // $ExpectError
	every.assign( x, y, [ 1 ] ); // $ExpectError
	every.assign( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	every.assign( x, y, { 'dims': '5' } ); // $ExpectError
	every.assign( x, y, { 'dims': 5 } ); // $ExpectError
	every.assign( x, y, { 'dims': null } ); // $ExpectError
	every.assign( x, y, { 'dims': true } ); // $ExpectError
	every.assign( x, y, { 'dims': false } ); // $ExpectError
	every.assign( x, y, { 'dims': {} } ); // $ExpectError
	every.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	every.assign(); // $ExpectError
	every.assign( x ); // $ExpectError
	every.assign( x, y, {}, {} ); // $ExpectError
}
