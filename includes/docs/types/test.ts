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
import includes = require( './index' );


// TESTS //

// The function returns an boolean ndarray...
{
	const x = zeros( [ 2, 2 ] );

	includes( x, 0.0 ); // $ExpectType boolndarray
	includes( x, 0.0, {} ); // $ExpectType boolndarray
	includes( x, 0.0, { 'keepdims': true } ); // $ExpectType boolndarray
	includes( x, 0.0, { 'dims': [ 0 ] } ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	includes( 5, 0.0 ); // $ExpectError
	includes( true, 0.0 ); // $ExpectError
	includes( false, 0.0 ); // $ExpectError
	includes( null, 0.0 ); // $ExpectError
	includes( undefined, 0.0 ); // $ExpectError
	includes( {}, 0.0 ); // $ExpectError
	includes( [ 1 ], 0.0 ); // $ExpectError
	includes( ( x: number ): number => x, 0.0 ); // $ExpectError

	includes( 5, 0.0, {} ); // $ExpectError
	includes( true, 0.0, {} ); // $ExpectError
	includes( false, 0.0, {} ); // $ExpectError
	includes( null, 0.0, {} ); // $ExpectError
	includes( undefined, 0.0, {} ); // $ExpectError
	includes( {}, 0.0, {} ); // $ExpectError
	includes( [ 1 ], 0.0, {} ); // $ExpectError
	includes( ( x: number ): number => x, 0.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	includes( x, 0.0, '5' ); // $ExpectError
	includes( x, 0.0, 5 ); // $ExpectError
	includes( x, 0.0, true ); // $ExpectError
	includes( x, 0.0, false ); // $ExpectError
	includes( x, 0.0, null ); // $ExpectError
	includes( x, 0.0, [ 1 ] ); // $ExpectError
	includes( x, 0.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	includes( x, 0.0, { 'keepdims': '5' } ); // $ExpectError
	includes( x, 0.0, { 'keepdims': 5 } ); // $ExpectError
	includes( x, 0.0, { 'keepdims': null } ); // $ExpectError
	includes( x, 0.0, { 'keepdims': [ 1 ] } ); // $ExpectError
	includes( x, 0.0, { 'keepdims': {} } ); // $ExpectError
	includes( x, 0.0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	includes( x, 0.0, { 'dims': '5' } ); // $ExpectError
	includes( x, 0.0, { 'dims': 5 } ); // $ExpectError
	includes( x, 0.0, { 'dims': null } ); // $ExpectError
	includes( x, 0.0, { 'dims': true } ); // $ExpectError
	includes( x, 0.0, { 'dims': false } ); // $ExpectError
	includes( x, 0.0, { 'dims': {} } ); // $ExpectError
	includes( x, 0.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	includes(); // $ExpectError
	includes( x ); // $ExpectError
	includes( x, 0.0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	includes.assign( x, 0.0, y ); // $ExpectType boolndarray
	includes.assign( x, 0.0, y, {} ); // $ExpectType boolndarray
	includes.assign( x, 0.0, y, { 'dims': [ 0 ] } ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], { 'dtype': 'bool' } );

	includes.assign( 5, 0.0, y ); // $ExpectError
	includes.assign( true, 0.0, y ); // $ExpectError
	includes.assign( false, 0.0, y ); // $ExpectError
	includes.assign( null, 0.0, y ); // $ExpectError
	includes.assign( undefined, 0.0, y ); // $ExpectError
	includes.assign( {}, 0.0, y ); // $ExpectError
	includes.assign( [ 1 ], 0.0, y ); // $ExpectError
	includes.assign( ( x: number ): number => x, 0.0, y ); // $ExpectError

	includes.assign( 5, 0.0, y, {} ); // $ExpectError
	includes.assign( true, 0.0, y, {} ); // $ExpectError
	includes.assign( false, 0.0, y, {} ); // $ExpectError
	includes.assign( null, 0.0, y, {} ); // $ExpectError
	includes.assign( undefined, 0.0, y, {} ); // $ExpectError
	includes.assign( {}, 0.0, y, {} ); // $ExpectError
	includes.assign( [ 1 ], 0.0, y, {} ); // $ExpectError
	includes.assign( ( x: number ): number => x, 0.0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	includes.assign( x, 0.0, 5 ); // $ExpectError
	includes.assign( x, 0.0, true ); // $ExpectError
	includes.assign( x, 0.0, false ); // $ExpectError
	includes.assign( x, 0.0, null ); // $ExpectError
	includes.assign( x, 0.0, undefined ); // $ExpectError
	includes.assign( x, 0.0, {} ); // $ExpectError
	includes.assign( x, 0.0, [ 1 ] ); // $ExpectError
	includes.assign( x, 0.0, ( x: number ): number => x ); // $ExpectError

	includes.assign( x, 0.0, 5, {} ); // $ExpectError
	includes.assign( x, 0.0, true, {} ); // $ExpectError
	includes.assign( x, 0.0, false, {} ); // $ExpectError
	includes.assign( x, 0.0, null, {} ); // $ExpectError
	includes.assign( x, 0.0, undefined, {} ); // $ExpectError
	includes.assign( x, 0.0, {}, {} ); // $ExpectError
	includes.assign( x, 0.0, [ 1 ], {} ); // $ExpectError
	includes.assign( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	includes.assign( x, 0.0, y, '5' ); // $ExpectError
	includes.assign( x, 0.0, y, 5 ); // $ExpectError
	includes.assign( x, 0.0, y, true ); // $ExpectError
	includes.assign( x, 0.0, y, false ); // $ExpectError
	includes.assign( x, 0.0, y, null ); // $ExpectError
	includes.assign( x, 0.0, y, [ 1 ] ); // $ExpectError
	includes.assign( x, 0.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	includes.assign( x, 0.0, y, { 'dims': '5' } ); // $ExpectError
	includes.assign( x, 0.0, y, { 'dims': 5 } ); // $ExpectError
	includes.assign( x, 0.0, y, { 'dims': null } ); // $ExpectError
	includes.assign( x, 0.0, y, { 'dims': true } ); // $ExpectError
	includes.assign( x, 0.0, y, { 'dims': false } ); // $ExpectError
	includes.assign( x, 0.0, y, { 'dims': {} } ); // $ExpectError
	includes.assign( x, 0.0, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'bool' } );

	includes.assign(); // $ExpectError
	includes.assign( x ); // $ExpectError
	includes.assign( x, 0.0 ); // $ExpectError
	includes.assign( x, 0.0, y, {}, {} ); // $ExpectError
}
