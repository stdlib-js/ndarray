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
import countIf = require( './index' );


/**
* Predicate function.
*
* @param v - ndarray element
* @returns result
*/
function clbk( v: any ): boolean {
	return v > 0.0;
}


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	countIf( x, clbk ); // $ExpectType int32ndarray
	countIf( x, {}, clbk ); // $ExpectType int32ndarray
	countIf( x, { 'keepdims': true }, clbk ); // $ExpectType int32ndarray
	countIf( x, { 'dims': [ 0 ] }, clbk ); // $ExpectType int32ndarray

	countIf( x, clbk, {} ); // $ExpectType int32ndarray
	countIf( x, {}, clbk, {} ); // $ExpectType int32ndarray
	countIf( x, { 'keepdims': true }, clbk, {} ); // $ExpectType int32ndarray
	countIf( x, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	countIf( 5, clbk ); // $ExpectError
	countIf( true, clbk ); // $ExpectError
	countIf( false, clbk ); // $ExpectError
	countIf( null, clbk ); // $ExpectError
	countIf( undefined, clbk ); // $ExpectError
	countIf( {}, clbk ); // $ExpectError
	countIf( [ 1 ], clbk ); // $ExpectError
	countIf( ( x: number ): number => x, clbk ); // $ExpectError

	countIf( 5, {}, clbk ); // $ExpectError
	countIf( true, {}, clbk ); // $ExpectError
	countIf( false, {}, clbk ); // $ExpectError
	countIf( null, {}, clbk ); // $ExpectError
	countIf( undefined, {}, clbk ); // $ExpectError
	countIf( {}, {}, clbk ); // $ExpectError
	countIf( [ 1 ], {}, clbk ); // $ExpectError
	countIf( ( x: number ): number => x, {}, clbk ); // $ExpectError

	countIf( 5, clbk, {} ); // $ExpectError
	countIf( true, clbk, {} ); // $ExpectError
	countIf( false, clbk, {} ); // $ExpectError
	countIf( null, clbk, {} ); // $ExpectError
	countIf( undefined, clbk, {} ); // $ExpectError
	countIf( {}, clbk, {} ); // $ExpectError
	countIf( [ 1 ], clbk, {} ); // $ExpectError
	countIf( ( x: number ): number => x, clbk, {} ); // $ExpectError

	countIf( 5, {}, clbk, {} ); // $ExpectError
	countIf( true, {}, clbk, {} ); // $ExpectError
	countIf( false, {}, clbk, {} ); // $ExpectError
	countIf( null, {}, clbk, {} ); // $ExpectError
	countIf( undefined, {}, clbk, {} ); // $ExpectError
	countIf( {}, {}, clbk, {} ); // $ExpectError
	countIf( [ 1 ], {}, clbk, {} ); // $ExpectError
	countIf( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	countIf( x, '5', clbk ); // $ExpectError
	countIf( x, 5, clbk ); // $ExpectError
	countIf( x, true, clbk ); // $ExpectError
	countIf( x, false, clbk ); // $ExpectError
	countIf( x, null, clbk ); // $ExpectError
	countIf( x, [ 1 ], clbk ); // $ExpectError
	countIf( x, ( x: number ): number => x, clbk ); // $ExpectError

	countIf( x, '5', clbk, {} ); // $ExpectError
	countIf( x, 5, clbk, {} ); // $ExpectError
	countIf( x, true, clbk, {} ); // $ExpectError
	countIf( x, false, clbk, {} ); // $ExpectError
	countIf( x, null, clbk, {} ); // $ExpectError
	countIf( x, [ 1 ], clbk, {} ); // $ExpectError
	countIf( x, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ] );

	countIf( x, '5' ); // $ExpectError
	countIf( x, 5 ); // $ExpectError
	countIf( x, true ); // $ExpectError
	countIf( x, false ); // $ExpectError
	countIf( x, null ); // $ExpectError
	countIf( x, [ 1 ] ); // $ExpectError
	countIf( x, {} ); // $ExpectError

	countIf( x, '5', {} ); // $ExpectError
	countIf( x, 5, {} ); // $ExpectError
	countIf( x, true, {} ); // $ExpectError
	countIf( x, false, {} ); // $ExpectError
	countIf( x, null, {} ); // $ExpectError
	countIf( x, [ 1 ], {} ); // $ExpectError
	countIf( x, {}, {} ); // $ExpectError

	countIf( x, {}, '5' ); // $ExpectError
	countIf( x, {}, 5 ); // $ExpectError
	countIf( x, {}, true ); // $ExpectError
	countIf( x, {}, false ); // $ExpectError
	countIf( x, {}, null ); // $ExpectError
	countIf( x, {}, [ 1 ] ); // $ExpectError
	countIf( x, {}, {} ); // $ExpectError

	countIf( x, {}, '5', {} ); // $ExpectError
	countIf( x, {}, 5, {} ); // $ExpectError
	countIf( x, {}, true, {} ); // $ExpectError
	countIf( x, {}, false, {} ); // $ExpectError
	countIf( x, {}, null, {} ); // $ExpectError
	countIf( x, {}, [ 1 ], {} ); // $ExpectError
	countIf( x, {}, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	countIf( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	countIf( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	countIf( x, { 'keepdims': null }, clbk ); // $ExpectError
	countIf( x, { 'keepdims': [ 1 ] }, clbk ); // $ExpectError
	countIf( x, { 'keepdims': {} }, clbk ); // $ExpectError
	countIf( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	countIf( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	countIf( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	countIf( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	countIf( x, { 'keepdims': [ 1 ] }, clbk, {} ); // $ExpectError
	countIf( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	countIf( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	countIf( x, { 'dims': '5' }, clbk ); // $ExpectError
	countIf( x, { 'dims': 5 }, clbk ); // $ExpectError
	countIf( x, { 'dims': null }, clbk ); // $ExpectError
	countIf( x, { 'dims': true }, clbk ); // $ExpectError
	countIf( x, { 'dims': false }, clbk ); // $ExpectError
	countIf( x, { 'dims': {} }, clbk ); // $ExpectError
	countIf( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	countIf( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	countIf( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	countIf( x, { 'dims': null }, clbk, {} ); // $ExpectError
	countIf( x, { 'dims': true }, clbk, {} ); // $ExpectError
	countIf( x, { 'dims': false }, clbk, {} ); // $ExpectError
	countIf( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	countIf( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	countIf(); // $ExpectError
	countIf( x ); // $ExpectError
	countIf( x, {} ); // $ExpectError
	countIf( x, clbk, {}, {} ); // $ExpectError
	countIf( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countIf.assign( x, y, clbk ); // $ExpectType int32ndarray
	countIf.assign( x, y, {}, clbk ); // $ExpectType int32ndarray
	countIf.assign( x, y, { 'dims': [ 0 ] }, clbk ); // $ExpectType int32ndarray

	countIf.assign( x, y, clbk, {} ); // $ExpectType int32ndarray
	countIf.assign( x, y, {}, clbk, {} ); // $ExpectType int32ndarray
	countIf.assign( x, y, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], { 'dtype': 'int32' } );

	countIf.assign( 5, y, clbk ); // $ExpectError
	countIf.assign( true, y, clbk ); // $ExpectError
	countIf.assign( false, y, clbk ); // $ExpectError
	countIf.assign( null, y, clbk ); // $ExpectError
	countIf.assign( undefined, y, clbk ); // $ExpectError
	countIf.assign( {}, y, clbk ); // $ExpectError
	countIf.assign( [ 1 ], y, clbk ); // $ExpectError
	countIf.assign( ( x: number ): number => x, y, clbk ); // $ExpectError

	countIf.assign( 5, y, {}, clbk ); // $ExpectError
	countIf.assign( true, y, {}, clbk ); // $ExpectError
	countIf.assign( false, y, {}, clbk ); // $ExpectError
	countIf.assign( null, y, {}, clbk ); // $ExpectError
	countIf.assign( undefined, y, {}, clbk ); // $ExpectError
	countIf.assign( {}, y, {}, clbk ); // $ExpectError
	countIf.assign( [ 1 ], y, {}, clbk ); // $ExpectError
	countIf.assign( ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	countIf.assign( 5, y, clbk, {} ); // $ExpectError
	countIf.assign( true, y, clbk, {} ); // $ExpectError
	countIf.assign( false, y, clbk, {} ); // $ExpectError
	countIf.assign( null, y, clbk, {} ); // $ExpectError
	countIf.assign( undefined, y, clbk, {} ); // $ExpectError
	countIf.assign( {}, y, clbk, {} ); // $ExpectError
	countIf.assign( [ 1 ], y, clbk, {} ); // $ExpectError
	countIf.assign( ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	countIf.assign( 5, y, {}, clbk, {} ); // $ExpectError
	countIf.assign( true, y, {}, clbk, {} ); // $ExpectError
	countIf.assign( false, y, {}, clbk, {} ); // $ExpectError
	countIf.assign( null, y, {}, clbk, {} ); // $ExpectError
	countIf.assign( undefined, y, {}, clbk, {} ); // $ExpectError
	countIf.assign( {}, y, {}, clbk, {} ); // $ExpectError
	countIf.assign( [ 1 ], y, {}, clbk, {} ); // $ExpectError
	countIf.assign( ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	countIf.assign( x, 5, clbk ); // $ExpectError
	countIf.assign( x, true, clbk ); // $ExpectError
	countIf.assign( x, false, clbk ); // $ExpectError
	countIf.assign( x, null, clbk ); // $ExpectError
	countIf.assign( x, undefined, clbk ); // $ExpectError
	countIf.assign( x, {}, clbk ); // $ExpectError
	countIf.assign( x, [ 1 ], clbk ); // $ExpectError
	countIf.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	countIf.assign( x, 5, {}, clbk ); // $ExpectError
	countIf.assign( x, true, {}, clbk ); // $ExpectError
	countIf.assign( x, false, {}, clbk ); // $ExpectError
	countIf.assign( x, null, {}, clbk ); // $ExpectError
	countIf.assign( x, undefined, {}, clbk ); // $ExpectError
	countIf.assign( x, {}, {}, clbk ); // $ExpectError
	countIf.assign( x, [ 1 ], {}, clbk ); // $ExpectError
	countIf.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	countIf.assign( x, 5, clbk, {} ); // $ExpectError
	countIf.assign( x, true, clbk, {} ); // $ExpectError
	countIf.assign( x, false, clbk, {} ); // $ExpectError
	countIf.assign( x, null, clbk, {} ); // $ExpectError
	countIf.assign( x, undefined, clbk, {} ); // $ExpectError
	countIf.assign( x, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, [ 1 ], clbk, {} ); // $ExpectError
	countIf.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	countIf.assign( x, 5, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, true, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, false, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, null, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, undefined, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, {}, {}, clbk, {} ); // $ExpectError
	countIf.assign( x, [ 1 ], {}, clbk, {} ); // $ExpectError
	countIf.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countIf.assign( x, y, '5', clbk ); // $ExpectError
	countIf.assign( x, y, 5, clbk ); // $ExpectError
	countIf.assign( x, y, true, clbk ); // $ExpectError
	countIf.assign( x, y, false, clbk ); // $ExpectError
	countIf.assign( x, y, null, clbk ); // $ExpectError
	countIf.assign( x, y, [ 1 ], clbk ); // $ExpectError
	countIf.assign( x, y, ( x: number ): number => x, clbk ); // $ExpectError

	countIf.assign( x, y, '5', clbk, {} ); // $ExpectError
	countIf.assign( x, y, 5, clbk, {} ); // $ExpectError
	countIf.assign( x, y, true, clbk, {} ); // $ExpectError
	countIf.assign( x, y, false, clbk, {} ); // $ExpectError
	countIf.assign( x, y, null, clbk, {} ); // $ExpectError
	countIf.assign( x, y, [ 1 ], clbk, {} ); // $ExpectError
	countIf.assign( x, y, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countIf.assign( x, y, '5' ); // $ExpectError
	countIf.assign( x, y, 5 ); // $ExpectError
	countIf.assign( x, y, true ); // $ExpectError
	countIf.assign( x, y, false ); // $ExpectError
	countIf.assign( x, y, null ); // $ExpectError
	countIf.assign( x, y, [ 1 ] ); // $ExpectError
	countIf.assign( x, y, {} ); // $ExpectError

	countIf.assign( x, y, '5', {} ); // $ExpectError
	countIf.assign( x, y, 5, {} ); // $ExpectError
	countIf.assign( x, y, true, {} ); // $ExpectError
	countIf.assign( x, y, false, {} ); // $ExpectError
	countIf.assign( x, y, null, {} ); // $ExpectError
	countIf.assign( x, y, [ 1 ], {} ); // $ExpectError
	countIf.assign( x, y, {}, {} ); // $ExpectError

	countIf.assign( x, y, {}, '5' ); // $ExpectError
	countIf.assign( x, y, {}, 5 ); // $ExpectError
	countIf.assign( x, y, {}, true ); // $ExpectError
	countIf.assign( x, y, {}, false ); // $ExpectError
	countIf.assign( x, y, {}, null ); // $ExpectError
	countIf.assign( x, y, {}, [ 1 ] ); // $ExpectError
	countIf.assign( x, y, {}, {} ); // $ExpectError

	countIf.assign( x, y, {}, '5', {} ); // $ExpectError
	countIf.assign( x, y, {}, 5, {} ); // $ExpectError
	countIf.assign( x, y, {}, true, {} ); // $ExpectError
	countIf.assign( x, y, {}, false, {} ); // $ExpectError
	countIf.assign( x, y, {}, null, {} ); // $ExpectError
	countIf.assign( x, y, {}, [ 1 ], {} ); // $ExpectError
	countIf.assign( x, y, {}, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countIf.assign( x, y, { 'dims': '5' }, clbk ); // $ExpectError
	countIf.assign( x, y, { 'dims': 5 }, clbk ); // $ExpectError
	countIf.assign( x, y, { 'dims': null }, clbk ); // $ExpectError
	countIf.assign( x, y, { 'dims': true }, clbk ); // $ExpectError
	countIf.assign( x, y, { 'dims': false }, clbk ); // $ExpectError
	countIf.assign( x, y, { 'dims': {} }, clbk ); // $ExpectError
	countIf.assign( x, y, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	countIf.assign( x, y, { 'dims': '5' }, clbk, {} ); // $ExpectError
	countIf.assign( x, y, { 'dims': 5 }, clbk, {} ); // $ExpectError
	countIf.assign( x, y, { 'dims': null }, clbk, {} ); // $ExpectError
	countIf.assign( x, y, { 'dims': true }, clbk, {} ); // $ExpectError
	countIf.assign( x, y, { 'dims': false }, clbk, {} ); // $ExpectError
	countIf.assign( x, y, { 'dims': {} }, clbk, {} ); // $ExpectError
	countIf.assign( x, y, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], { 'dtype': 'int32' } );

	countIf.assign(); // $ExpectError
	countIf.assign( x ); // $ExpectError
	countIf.assign( x, y ); // $ExpectError
	countIf.assign( x, y, {}, clbk, {}, {} ); // $ExpectError
}
