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
import any = require( './index' );


// TESTS //

// The function returns a boolean ndarray...
{
	const x = zeros( [ 2, 2 ] );

	any( x ); // $ExpectType boolndarray
	any( x, {} ); // $ExpectType boolndarray
	any( x, { 'keepdims': true } ); // $ExpectType boolndarray
	any( x, { 'dims': [ 0 ] } ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	any( 5 ); // $ExpectError
	any( true ); // $ExpectError
	any( false ); // $ExpectError
	any( null ); // $ExpectError
	any( undefined ); // $ExpectError
	any( {} ); // $ExpectError
	any( [ 1 ] ); // $ExpectError
	any( ( x: number ): number => x ); // $ExpectError

	any( 5, {} ); // $ExpectError
	any( true, {} ); // $ExpectError
	any( false, {} ); // $ExpectError
	any( null, {} ); // $ExpectError
	any( undefined, {} ); // $ExpectError
	any( {}, {} ); // $ExpectError
	any( [ 1 ], {} ); // $ExpectError
	any( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	any( x, '5' ); // $ExpectError
	any( x, 5 ); // $ExpectError
	any( x, true ); // $ExpectError
	any( x, false ); // $ExpectError
	any( x, null ); // $ExpectError
	any( x, [ 1 ] ); // $ExpectError
	any( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	any( x, { 'keepdims': '5' } ); // $ExpectError
	any( x, { 'keepdims': 5 } ); // $ExpectError
	any( x, { 'keepdims': null } ); // $ExpectError
	any( x, { 'keepdims': [ 1 ] } ); // $ExpectError
	any( x, { 'keepdims': {} } ); // $ExpectError
	any( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	any( x, { 'dims': '5' } ); // $ExpectError
	any( x, { 'dims': 5 } ); // $ExpectError
	any( x, { 'dims': null } ); // $ExpectError
	any( x, { 'dims': true } ); // $ExpectError
	any( x, { 'dims': false } ); // $ExpectError
	any( x, { 'dims': {} } ); // $ExpectError
	any( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	any(); // $ExpectError
	any( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	any.assign( x, y ); // $ExpectType boolndarray
	any.assign( x, y, {} ); // $ExpectType boolndarray
	any.assign( x, y, { 'dims': [ 0 ] } ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], { 'dtype': 'bool' } );

	any.assign( 5, y ); // $ExpectError
	any.assign( true, y ); // $ExpectError
	any.assign( false, y ); // $ExpectError
	any.assign( null, y ); // $ExpectError
	any.assign( undefined, y ); // $ExpectError
	any.assign( {}, y ); // $ExpectError
	any.assign( [ 1 ], y ); // $ExpectError
	any.assign( ( x: number ): number => x, y ); // $ExpectError

	any.assign( 5, y, {} ); // $ExpectError
	any.assign( true, y, {} ); // $ExpectError
	any.assign( false, y, {} ); // $ExpectError
	any.assign( null, y, {} ); // $ExpectError
	any.assign( undefined, y, {} ); // $ExpectError
	any.assign( {}, y, {} ); // $ExpectError
	any.assign( [ 1 ], y, {} ); // $ExpectError
	any.assign( ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	any.assign( x, 5 ); // $ExpectError
	any.assign( x, true ); // $ExpectError
	any.assign( x, false ); // $ExpectError
	any.assign( x, null ); // $ExpectError
	any.assign( x, undefined ); // $ExpectError
	any.assign( x, {} ); // $ExpectError
	any.assign( x, [ 1 ] ); // $ExpectError
	any.assign( x, ( x: number ): number => x ); // $ExpectError

	any.assign( x, 5, {} ); // $ExpectError
	any.assign( x, true, {} ); // $ExpectError
	any.assign( x, false, {} ); // $ExpectError
	any.assign( x, null, {} ); // $ExpectError
	any.assign( x, undefined, {} ); // $ExpectError
	any.assign( x, {}, {} ); // $ExpectError
	any.assign( x, [ 1 ], {} ); // $ExpectError
	any.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	any.assign( x, y, '5' ); // $ExpectError
	any.assign( x, y, 5 ); // $ExpectError
	any.assign( x, y, true ); // $ExpectError
	any.assign( x, y, false ); // $ExpectError
	any.assign( x, y, null ); // $ExpectError
	any.assign( x, y, [ 1 ] ); // $ExpectError
	any.assign( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	any.assign( x, y, { 'dims': '5' } ); // $ExpectError
	any.assign( x, y, { 'dims': 5 } ); // $ExpectError
	any.assign( x, y, { 'dims': null } ); // $ExpectError
	any.assign( x, y, { 'dims': true } ); // $ExpectError
	any.assign( x, y, { 'dims': false } ); // $ExpectError
	any.assign( x, y, { 'dims': {} } ); // $ExpectError
	any.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	any.assign(); // $ExpectError
	any.assign( x ); // $ExpectError
	any.assign( x, y, {}, {} ); // $ExpectError
}
