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

/* eslint-disable space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( './../../../zeros' );
import empty = require( './../../../empty' );
import someBy = require( './index' );

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
	const n = zeros( [], {
		'dtype': 'int32'
	});

	someBy( x, 2, clbk ); // $ExpectType boolndarray
	someBy( x, 2, { 'keepdims': true }, clbk ); // $ExpectType boolndarray
	someBy( x, 2, { 'dims': [ 0 ] }, clbk ); // $ExpectType boolndarray

	someBy( x, 2, clbk, {} ); // $ExpectType boolndarray
	someBy( x, 2, {}, clbk, {} ); // $ExpectType boolndarray
	someBy( x, 2, { 'keepdims': true }, clbk, {} ); // $ExpectType boolndarray
	someBy( x, 2, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType boolndarray

	someBy( x, n, clbk ); // $ExpectType boolndarray
	someBy( x, n, { 'keepdims': true }, clbk ); // $ExpectType boolndarray
	someBy( x, n, { 'dims': [ 0 ] }, clbk ); // $ExpectType boolndarray

	someBy( x, n, clbk, {} ); // $ExpectType boolndarray
	someBy( x, n, {}, clbk, {} ); // $ExpectType boolndarray
	someBy( x, n, { 'keepdims': true }, clbk, {} ); // $ExpectType boolndarray
	someBy( x, n, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	someBy( 5, 2, clbk ); // $ExpectError
	someBy( true, 2, clbk ); // $ExpectError
	someBy( false, 2, clbk ); // $ExpectError
	someBy( null, 2, clbk ); // $ExpectError
	someBy( undefined, 2, clbk ); // $ExpectError
	someBy( {}, 2, clbk ); // $ExpectError
	someBy( [ 1 ], 2, clbk ); // $ExpectError
	someBy( ( x: number ): number => x, 2, clbk ); // $ExpectError

	someBy( 5, 2, {}, clbk ); // $ExpectError
	someBy( true, 2, {}, clbk ); // $ExpectError
	someBy( false, 2, {}, clbk ); // $ExpectError
	someBy( null, 2, {}, clbk ); // $ExpectError
	someBy( undefined, 2, {}, clbk ); // $ExpectError
	someBy( {}, 2, {}, clbk ); // $ExpectError
	someBy( [ 1 ], 2, {}, clbk ); // $ExpectError
	someBy( ( x: number ): number => x, 2, {}, clbk ); // $ExpectError

	someBy( 5, 2, clbk, {} ); // $ExpectError
	someBy( true, 2, clbk, {} ); // $ExpectError
	someBy( false, 2, clbk, {} ); // $ExpectError
	someBy( null, 2, clbk, {} ); // $ExpectError
	someBy( undefined, 2, clbk, {} ); // $ExpectError
	someBy( {}, 2, clbk, {} ); // $ExpectError
	someBy( [ 1 ], 2, clbk, {} ); // $ExpectError
	someBy( ( x: number ): number => x, 2, clbk, {} ); // $ExpectError

	someBy( 5, 2, {}, clbk, {} ); // $ExpectError
	someBy( true, 2, {}, clbk, {} ); // $ExpectError
	someBy( false, 2, {}, clbk, {} ); // $ExpectError
	someBy( null, 2, {}, clbk, {} ); // $ExpectError
	someBy( undefined, 2, {}, clbk, {} ); // $ExpectError
	someBy( {}, 2, {}, clbk, {} ); // $ExpectError
	someBy( [ 1 ], 2, {}, clbk, {} ); // $ExpectError
	someBy( ( x: number ): number => x, 2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an integer ndarray or a number...
{
	const x = zeros( [ 2, 2 ] );

	someBy( x, '5', clbk ); // $ExpectError
	someBy( x, true, clbk ); // $ExpectError
	someBy( x, false, clbk ); // $ExpectError
	someBy( x, null, clbk ); // $ExpectError
	someBy( x, undefined, clbk ); // $ExpectError
	someBy( x, {}, clbk ); // $ExpectError
	someBy( x, [ 1 ], clbk ); // $ExpectError
	someBy( x, ( x: number ): number => x, clbk ); // $ExpectError

	someBy( x, '5', {}, clbk ); // $ExpectError
	someBy( x, true, {}, clbk ); // $ExpectError
	someBy( x, false, {}, clbk ); // $ExpectError
	someBy( x, null, {}, clbk ); // $ExpectError
	someBy( x, undefined, {}, clbk ); // $ExpectError
	someBy( x, {}, {}, clbk ); // $ExpectError
	someBy( x, [ 1 ], {}, clbk ); // $ExpectError
	someBy( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	someBy( x, '5', clbk, {} ); // $ExpectError
	someBy( x, true, clbk, {} ); // $ExpectError
	someBy( x, false, clbk, {} ); // $ExpectError
	someBy( x, null, clbk, {} ); // $ExpectError
	someBy( x, undefined, clbk, {} ); // $ExpectError
	someBy( x, {}, clbk, {} ); // $ExpectError
	someBy( x, [ 1 ], clbk, {} ); // $ExpectError
	someBy( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	someBy( x, '5', {}, clbk, {} ); // $ExpectError
	someBy( x, true, {}, clbk, {} ); // $ExpectError
	someBy( x, false, {}, clbk, {} ); // $ExpectError
	someBy( x, null, {}, clbk, {} ); // $ExpectError
	someBy( x, undefined, {}, clbk, {} ); // $ExpectError
	someBy( x, {}, {}, clbk, {} ); // $ExpectError
	someBy( x, [ 1 ], {}, clbk, {} ); // $ExpectError
	someBy( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	someBy( x, 2, '5', clbk ); // $ExpectError
	someBy( x, 2, 5, clbk ); // $ExpectError
	someBy( x, 2, true, clbk ); // $ExpectError
	someBy( x, 2, false, clbk ); // $ExpectError
	someBy( x, 2, null, clbk ); // $ExpectError
	someBy( x, 2, [ 1 ], clbk ); // $ExpectError
	someBy( x, 2, ( x: number ): number => x, clbk ); // $ExpectError

	someBy( x, 2, '5', clbk, {} ); // $ExpectError
	someBy( x, 2, 5, clbk, {} ); // $ExpectError
	someBy( x, 2, true, clbk, {} ); // $ExpectError
	someBy( x, 2, false, clbk, {} ); // $ExpectError
	someBy( x, 2, null, clbk, {} ); // $ExpectError
	someBy( x, 2, [ 1 ], clbk, {} ); // $ExpectError
	someBy( x, 2, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ] );

	someBy( x, 2, '5' ); // $ExpectError
	someBy( x, 2, 5 ); // $ExpectError
	someBy( x, 2, true ); // $ExpectError
	someBy( x, 2, false ); // $ExpectError
	someBy( x, 2, null ); // $ExpectError
	someBy( x, 2, [ 1 ] ); // $ExpectError
	someBy( x, 2, {} ); // $ExpectError

	someBy( x, 2, '5', {} ); // $ExpectError
	someBy( x, 2, 5, {} ); // $ExpectError
	someBy( x, 2, true, {} ); // $ExpectError
	someBy( x, 2, false, {} ); // $ExpectError
	someBy( x, 2, null, {} ); // $ExpectError
	someBy( x, 2, [ 1 ], {} ); // $ExpectError
	someBy( x, 2, {}, {} ); // $ExpectError

	someBy( x, 2, {}, '5' ); // $ExpectError
	someBy( x, 2, {}, 5 ); // $ExpectError
	someBy( x, 2, {}, true ); // $ExpectError
	someBy( x, 2, {}, false ); // $ExpectError
	someBy( x, 2, {}, null ); // $ExpectError
	someBy( x, 2, {}, [ 1 ] ); // $ExpectError
	someBy( x, 2, {}, {} ); // $ExpectError

	someBy( x, 2, {}, '5', {} ); // $ExpectError
	someBy( x, 2, {}, 5, {} ); // $ExpectError
	someBy( x, 2, {}, true, {} ); // $ExpectError
	someBy( x, 2, {}, false, {} ); // $ExpectError
	someBy( x, 2, {}, null, {} ); // $ExpectError
	someBy( x, 2, {}, [ 1 ], {} ); // $ExpectError
	someBy( x, 2, {}, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	someBy( x, 2, { 'keepdims': '5' }, clbk ); // $ExpectError
	someBy( x, 2, { 'keepdims': 5 }, clbk ); // $ExpectError
	someBy( x, 2, { 'keepdims': null }, clbk ); // $ExpectError
	someBy( x, 2, { 'keepdims': [ 1 ] }, clbk ); // $ExpectError
	someBy( x, 2, { 'keepdims': {} }, clbk ); // $ExpectError
	someBy( x, 2, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	someBy( x, 2, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'keepdims': null }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'keepdims': [ 1 ] }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	someBy( x, 2, { 'dims': '5' }, clbk ); // $ExpectError
	someBy( x, 2, { 'dims': 5 }, clbk ); // $ExpectError
	someBy( x, 2, { 'dims': null }, clbk ); // $ExpectError
	someBy( x, 2, { 'dims': true }, clbk ); // $ExpectError
	someBy( x, 2, { 'dims': false }, clbk ); // $ExpectError
	someBy( x, 2, { 'dims': {} }, clbk ); // $ExpectError
	someBy( x, 2, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	someBy( x, 2, { 'dims': '5' }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'dims': 5 }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'dims': null }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'dims': true }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'dims': false }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'dims': {} }, clbk, {} ); // $ExpectError
	someBy( x, 2, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	someBy(); // $ExpectError
	someBy( x ); // $ExpectError
	someBy( x, 2 ); // $ExpectError
	someBy( x, 2, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const n = zeros( [], {
		'dtype': 'int32'
	});
	const y = empty( [], {
		'dtype': 'bool'
	});

	someBy.assign( x, 2, y, clbk ); // $ExpectType boolndarray
	someBy.assign( x, 2, y, {}, clbk ); // $ExpectType boolndarray
	someBy.assign( x, 2, y, { 'dims': [ 0 ] }, clbk ); // $ExpectType boolndarray

	someBy.assign( x, 2, y, clbk, {} ); // $ExpectType boolndarray
	someBy.assign( x, 2, y, {}, clbk, {} ); // $ExpectType boolndarray
	someBy.assign( x, 2, y, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType boolndarray

	someBy.assign( x, n, y, clbk ); // $ExpectType boolndarray
	someBy.assign( x, n, y, {}, clbk ); // $ExpectType boolndarray
	someBy.assign( x, n, y, { 'dims': [ 0 ] }, clbk ); // $ExpectType boolndarray

	someBy.assign( x, n, y, clbk, {} ); // $ExpectType boolndarray
	someBy.assign( x, n, y, {}, clbk, {} ); // $ExpectType boolndarray
	someBy.assign( x, n, y, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], {
		'dtype': 'bool'
	});

	someBy.assign( 5, 2, y, clbk ); // $ExpectError
	someBy.assign( true, 2, y, clbk ); // $ExpectError
	someBy.assign( false, 2, y, clbk ); // $ExpectError
	someBy.assign( null, 2, y, clbk ); // $ExpectError
	someBy.assign( undefined, 2, y, clbk ); // $ExpectError
	someBy.assign( {}, 2, y, clbk ); // $ExpectError
	someBy.assign( [ 1 ], 2, y, clbk ); // $ExpectError
	someBy.assign( ( x: number ): number => x, 2, y, clbk ); // $ExpectError

	someBy.assign( 5, 2, y, {}, clbk ); // $ExpectError
	someBy.assign( true, 2, y, {}, clbk ); // $ExpectError
	someBy.assign( false, 2, y, {}, clbk ); // $ExpectError
	someBy.assign( null, 2, y, {}, clbk ); // $ExpectError
	someBy.assign( undefined, 2, y, {}, clbk ); // $ExpectError
	someBy.assign( {}, 2, y, {}, clbk ); // $ExpectError
	someBy.assign( [ 1 ], 2, y, {}, clbk ); // $ExpectError
	someBy.assign( ( x: number ): number => x, 2, y, {}, clbk ); // $ExpectError

	someBy.assign( 5, 2, y, clbk, {} ); // $ExpectError
	someBy.assign( true, 2, y, clbk, {} ); // $ExpectError
	someBy.assign( false, 2, y, clbk, {} ); // $ExpectError
	someBy.assign( null, 2, y, clbk, {} ); // $ExpectError
	someBy.assign( undefined, 2, y, clbk, {} ); // $ExpectError
	someBy.assign( {}, 2, y, clbk, {} ); // $ExpectError
	someBy.assign( [ 1 ], 2, y, clbk, {} ); // $ExpectError
	someBy.assign( ( x: number ): number => x, 2, y, clbk, {} ); // $ExpectError

	someBy.assign( 5, 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( true, 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( false, 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( null, 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( undefined, 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( {}, 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( [ 1 ], 2, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( ( x: number ): number => x, 2, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an integer ndarray or a number...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	someBy.assign( x, '5', y, clbk ); // $ExpectError
	someBy.assign( x, true, y, clbk ); // $ExpectError
	someBy.assign( x, false, y, clbk ); // $ExpectError
	someBy.assign( x, null, y, clbk ); // $ExpectError
	someBy.assign( x, undefined, y, clbk ); // $ExpectError
	someBy.assign( x, {}, y, clbk ); // $ExpectError
	someBy.assign( x, [ 1 ], y, clbk ); // $ExpectError
	someBy.assign( x, ( x: number ): number => x, y, clbk ); // $ExpectError

	someBy.assign( x, '5', y, {}, clbk ); // $ExpectError
	someBy.assign( x, true, y, {}, clbk ); // $ExpectError
	someBy.assign( x, false, y, {}, clbk ); // $ExpectError
	someBy.assign( x, null, y, {}, clbk ); // $ExpectError
	someBy.assign( x, undefined, y, {}, clbk ); // $ExpectError
	someBy.assign( x, {}, y, {}, clbk ); // $ExpectError
	someBy.assign( x, [ 1 ], y, {}, clbk ); // $ExpectError
	someBy.assign( x, ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	someBy.assign( x, '5', y, clbk, {} ); // $ExpectError
	someBy.assign( x, true, y, clbk, {} ); // $ExpectError
	someBy.assign( x, false, y, clbk, {} ); // $ExpectError
	someBy.assign( x, null, y, clbk, {} ); // $ExpectError
	someBy.assign( x, undefined, y, clbk, {} ); // $ExpectError
	someBy.assign( x, {}, y, clbk, {} ); // $ExpectError
	someBy.assign( x, [ 1 ], y, clbk, {} ); // $ExpectError
	someBy.assign( x, ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	someBy.assign( x, '5', y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, true, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, false, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, null, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, undefined, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, {}, y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, [ 1 ], y, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	someBy.assign( x, 2, 5, clbk ); // $ExpectError
	someBy.assign( x, 2, true, clbk ); // $ExpectError
	someBy.assign( x, 2, false, clbk ); // $ExpectError
	someBy.assign( x, 2, null, clbk ); // $ExpectError
	someBy.assign( x, 2, undefined, clbk ); // $ExpectError
	someBy.assign( x, 2, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, [ 1 ], clbk ); // $ExpectError
	someBy.assign( x, 2, ( x: number ): number => x, clbk ); // $ExpectError

	someBy.assign( x, 2, 5, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, true, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, false, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, null, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, undefined, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, {}, {}, clbk ); // $ExpectError
	someBy.assign( x, 2, [ 1 ], {}, clbk ); // $ExpectError
	someBy.assign( x, 2, ( x: number ): number => x, {}, clbk ); // $ExpectError

	someBy.assign( x, 2, 5, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, true, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, false, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, null, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, undefined, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, [ 1 ], clbk, {} ); // $ExpectError
	someBy.assign( x, 2, ( x: number ): number => x, clbk, {} ); // $ExpectError

	someBy.assign( x, 2, 5, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, true, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, false, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, null, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, undefined, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, {}, {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, [ 1 ], {}, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	someBy.assign( x, 2, y, '5', clbk ); // $ExpectError
	someBy.assign( x, 2, y, 5, clbk ); // $ExpectError
	someBy.assign( x, 2, y, true, clbk ); // $ExpectError
	someBy.assign( x, 2, y, false, clbk ); // $ExpectError
	someBy.assign( x, 2, y, null, clbk ); // $ExpectError
	someBy.assign( x, 2, y, [ 1 ], clbk ); // $ExpectError
	someBy.assign( x, 2, y, ( x: number ): number => x, clbk ); // $ExpectError

	someBy.assign( x, 2, y, '5', clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, 5, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, true, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, false, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, null, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, [ 1 ], clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'int32'
	});

	someBy.assign( x, 2, y, '5' ); // $ExpectError
	someBy.assign( x, 2, y, 5 ); // $ExpectError
	someBy.assign( x, 2, y, true ); // $ExpectError
	someBy.assign( x, 2, y, false ); // $ExpectError
	someBy.assign( x, 2, y, null ); // $ExpectError
	someBy.assign( x, 2, y, [ 1 ] ); // $ExpectError
	someBy.assign( x, 2, y, {} ); // $ExpectError

	someBy.assign( x, 2, y, '5', {} ); // $ExpectError
	someBy.assign( x, 2, y, 5, {} ); // $ExpectError
	someBy.assign( x, 2, y, true, {} ); // $ExpectError
	someBy.assign( x, 2, y, false, {} ); // $ExpectError
	someBy.assign( x, 2, y, null, {} ); // $ExpectError
	someBy.assign( x, 2, y, [ 1 ], {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, {} ); // $ExpectError

	someBy.assign( x, 2, y, {}, '5' ); // $ExpectError
	someBy.assign( x, 2, y, {}, 5 ); // $ExpectError
	someBy.assign( x, 2, y, {}, true ); // $ExpectError
	someBy.assign( x, 2, y, {}, false ); // $ExpectError
	someBy.assign( x, 2, y, {}, null ); // $ExpectError
	someBy.assign( x, 2, y, {}, [ 1 ] ); // $ExpectError
	someBy.assign( x, 2, y, {}, {} ); // $ExpectError

	someBy.assign( x, 2, y, {}, '5', {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, 5, {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, true, {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, false, {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, null, {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, [ 1 ], {} ); // $ExpectError
	someBy.assign( x, 2, y, {}, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	someBy.assign( x, 2, y, { 'dims': '5' }, clbk ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': 5 }, clbk ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': null }, clbk ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': true }, clbk ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': false }, clbk ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': {} }, clbk ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	someBy.assign( x, 2, y, { 'dims': '5' }, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': 5 }, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': null }, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': true }, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': false }, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': {} }, clbk, {} ); // $ExpectError
	someBy.assign( x, 2, y, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	someBy.assign(); // $ExpectError
	someBy.assign( x ); // $ExpectError
	someBy.assign( x, 2, y ); // $ExpectError
	someBy.assign( x, 2, y, {}, clbk, {}, {} ); // $ExpectError
}
