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
import countTruthy = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	countTruthy( x ); // $ExpectType int32ndarray
	countTruthy( x, {} ); // $ExpectType int32ndarray
	countTruthy( x, { 'keepdims': true } ); // $ExpectType int32ndarray
	countTruthy( x, { 'dims': [ 0 ] } ); // $ExpectType int32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	countTruthy( 5 ); // $ExpectError
	countTruthy( true ); // $ExpectError
	countTruthy( false ); // $ExpectError
	countTruthy( null ); // $ExpectError
	countTruthy( undefined ); // $ExpectError
	countTruthy( {} ); // $ExpectError
	countTruthy( [ 1 ] ); // $ExpectError
	countTruthy( ( x: number ): number => x ); // $ExpectError

	countTruthy( 5, {} ); // $ExpectError
	countTruthy( true, {} ); // $ExpectError
	countTruthy( false, {} ); // $ExpectError
	countTruthy( null, {} ); // $ExpectError
	countTruthy( undefined, {} ); // $ExpectError
	countTruthy( {}, {} ); // $ExpectError
	countTruthy( [ 1 ], {} ); // $ExpectError
	countTruthy( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	countTruthy( x, '5' ); // $ExpectError
	countTruthy( x, 5 ); // $ExpectError
	countTruthy( x, true ); // $ExpectError
	countTruthy( x, false ); // $ExpectError
	countTruthy( x, null ); // $ExpectError
	countTruthy( x, [ 1 ] ); // $ExpectError
	countTruthy( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	countTruthy( x, { 'keepdims': '5' } ); // $ExpectError
	countTruthy( x, { 'keepdims': 5 } ); // $ExpectError
	countTruthy( x, { 'keepdims': null } ); // $ExpectError
	countTruthy( x, { 'keepdims': [ 1 ] } ); // $ExpectError
	countTruthy( x, { 'keepdims': {} } ); // $ExpectError
	countTruthy( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	countTruthy( x, { 'dims': '5' } ); // $ExpectError
	countTruthy( x, { 'dims': 5 } ); // $ExpectError
	countTruthy( x, { 'dims': null } ); // $ExpectError
	countTruthy( x, { 'dims': true } ); // $ExpectError
	countTruthy( x, { 'dims': false } ); // $ExpectError
	countTruthy( x, { 'dims': {} } ); // $ExpectError
	countTruthy( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	countTruthy(); // $ExpectError
	countTruthy( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countTruthy.assign( x, y ); // $ExpectType int32ndarray
	countTruthy.assign( x, y, {} ); // $ExpectType int32ndarray
	countTruthy.assign( x, y, { 'dims': [ 0 ] } ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], { 'dtype': 'int32' } );

	countTruthy.assign( 5, y ); // $ExpectError
	countTruthy.assign( true, y ); // $ExpectError
	countTruthy.assign( false, y ); // $ExpectError
	countTruthy.assign( null, y ); // $ExpectError
	countTruthy.assign( undefined, y ); // $ExpectError
	countTruthy.assign( {}, y ); // $ExpectError
	countTruthy.assign( [ 1 ], y ); // $ExpectError
	countTruthy.assign( ( x: number ): number => x, y ); // $ExpectError

	countTruthy.assign( 5, y, {} ); // $ExpectError
	countTruthy.assign( true, y, {} ); // $ExpectError
	countTruthy.assign( false, y, {} ); // $ExpectError
	countTruthy.assign( null, y, {} ); // $ExpectError
	countTruthy.assign( undefined, y, {} ); // $ExpectError
	countTruthy.assign( {}, y, {} ); // $ExpectError
	countTruthy.assign( [ 1 ], y, {} ); // $ExpectError
	countTruthy.assign( ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	countTruthy.assign( x, 5 ); // $ExpectError
	countTruthy.assign( x, true ); // $ExpectError
	countTruthy.assign( x, false ); // $ExpectError
	countTruthy.assign( x, null ); // $ExpectError
	countTruthy.assign( x, undefined ); // $ExpectError
	countTruthy.assign( x, {} ); // $ExpectError
	countTruthy.assign( x, [ 1 ] ); // $ExpectError
	countTruthy.assign( x, ( x: number ): number => x ); // $ExpectError

	countTruthy.assign( x, 5, {} ); // $ExpectError
	countTruthy.assign( x, true, {} ); // $ExpectError
	countTruthy.assign( x, false, {} ); // $ExpectError
	countTruthy.assign( x, null, {} ); // $ExpectError
	countTruthy.assign( x, undefined, {} ); // $ExpectError
	countTruthy.assign( x, {}, {} ); // $ExpectError
	countTruthy.assign( x, [ 1 ], {} ); // $ExpectError
	countTruthy.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countTruthy.assign( x, y, '5' ); // $ExpectError
	countTruthy.assign( x, y, 5 ); // $ExpectError
	countTruthy.assign( x, y, true ); // $ExpectError
	countTruthy.assign( x, y, false ); // $ExpectError
	countTruthy.assign( x, y, null ); // $ExpectError
	countTruthy.assign( x, y, [ 1 ] ); // $ExpectError
	countTruthy.assign( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countTruthy.assign( x, y, { 'dims': '5' } ); // $ExpectError
	countTruthy.assign( x, y, { 'dims': 5 } ); // $ExpectError
	countTruthy.assign( x, y, { 'dims': null } ); // $ExpectError
	countTruthy.assign( x, y, { 'dims': true } ); // $ExpectError
	countTruthy.assign( x, y, { 'dims': false } ); // $ExpectError
	countTruthy.assign( x, y, { 'dims': {} } ); // $ExpectError
	countTruthy.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countTruthy.assign(); // $ExpectError
	countTruthy.assign( x ); // $ExpectError
	countTruthy.assign( x, y, {}, {} ); // $ExpectError
}
