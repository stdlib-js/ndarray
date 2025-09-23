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

import zeros = require( './../../../zeros' );
import empty = require( './../../../empty' );
import anyBy = require( './index' );


// FUNCTIONS //

/**
* Callback function.
*
* @param value - current array element
* @returns result
*/
function clbk( value: number ): boolean {
	return value > 0.0;
}

// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	anyBy( x, clbk ); // $ExpectType boolndarray
	anyBy( x, {}, clbk ); // $ExpectType boolndarray
	anyBy( x, { 'dims': [ 0 ] }, clbk ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	anyBy( '10', clbk ); // $ExpectError
	anyBy( 10, clbk ); // $ExpectError
	anyBy( true, clbk ); // $ExpectError
	anyBy( false, clbk ); // $ExpectError
	anyBy( null, clbk ); // $ExpectError
	anyBy( {}, clbk ); // $ExpectError
	anyBy( [], clbk ); // $ExpectError
	anyBy( ( x: number ): number => x, clbk ); // $ExpectError

	anyBy( '10', {}, clbk ); // $ExpectError
	anyBy( 10, {}, clbk ); // $ExpectError
	anyBy( true, {}, clbk ); // $ExpectError
	anyBy( false, {}, clbk ); // $ExpectError
	anyBy( null, {}, clbk ); // $ExpectError
	anyBy( {}, {}, clbk ); // $ExpectError
	anyBy( [], {}, clbk ); // $ExpectError
	anyBy( ( x: number ): number => x, {}, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	anyBy( x, '5', clbk ); // $ExpectError
	anyBy( x, 5, clbk ); // $ExpectError
	anyBy( x, true, clbk ); // $ExpectError
	anyBy( x, false, clbk ); // $ExpectError
	anyBy( x, null, clbk ); // $ExpectError
	anyBy( x, [ 1 ], clbk ); // $ExpectError
	anyBy( x, ( x: number ): number => x, clbk ); // $ExpectError

	anyBy( x, '5', clbk, {} ); // $ExpectError
	anyBy( x, 5, clbk, {} ); // $ExpectError
	anyBy( x, true, clbk, {} ); // $ExpectError
	anyBy( x, false, clbk, {} ); // $ExpectError
	anyBy( x, null, clbk, {} ); // $ExpectError
	anyBy( x, [ 1 ], clbk, {} ); // $ExpectError
	anyBy( x, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ] );

	anyBy( x, '10' ); // $ExpectError
	anyBy( x, 10 ); // $ExpectError
	anyBy( x, true ); // $ExpectError
	anyBy( x, false ); // $ExpectError
	anyBy( x, null ); // $ExpectError
	anyBy( x, {} ); // $ExpectError
	anyBy( x, [] ); // $ExpectError

	anyBy( x, {}, '10' ); // $ExpectError
	anyBy( x, {}, 10 ); // $ExpectError
	anyBy( x, {}, true ); // $ExpectError
	anyBy( x, {}, false ); // $ExpectError
	anyBy( x, {}, null ); // $ExpectError
	anyBy( x, {}, {} ); // $ExpectError
	anyBy( x, {}, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keepdims` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );

	anyBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	anyBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	anyBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	anyBy( x, { 'keepdims': [ 1 ] }, clbk ); // $ExpectError
	anyBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	anyBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	anyBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	anyBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	anyBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	anyBy( x, { 'keepdims': [ 1 ] }, clbk, {} ); // $ExpectError
	anyBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	anyBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );

	anyBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	anyBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	anyBy( x, { 'dims': null }, clbk ); // $ExpectError
	anyBy( x, { 'dims': true }, clbk ); // $ExpectError
	anyBy( x, { 'dims': false }, clbk ); // $ExpectError
	anyBy( x, { 'dims': {} }, clbk ); // $ExpectError
	anyBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	anyBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	anyBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	anyBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	anyBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	anyBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	anyBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	anyBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	anyBy(); // $ExpectError
	anyBy( x ); // $ExpectError
	anyBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	anyBy.assign( x, y, clbk ); // $ExpectType boolndarray
	anyBy.assign( x, y, {}, clbk ); // $ExpectType boolndarray
	anyBy.assign( x, y, { 'dims': [ 0 ] }, clbk ); // $ExpectType boolndarray

	anyBy.assign( x, y, clbk, {} ); // $ExpectType boolndarray
	anyBy.assign( x, y, {}, clbk, {} ); // $ExpectType boolndarray
	anyBy.assign( x, y, { 'dims': [ 0 ] }, clbk, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = empty( [], {
		'dtype': 'bool'
	});

	anyBy.assign( 5, y, clbk ); // $ExpectError
	anyBy.assign( true, y, clbk ); // $ExpectError
	anyBy.assign( false, y, clbk ); // $ExpectError
	anyBy.assign( null, y, clbk ); // $ExpectError
	anyBy.assign( undefined, y, clbk ); // $ExpectError
	anyBy.assign( {}, y, clbk ); // $ExpectError
	anyBy.assign( [ 1 ], y, clbk ); // $ExpectError
	anyBy.assign( ( x: number ): number => x, y, clbk ); // $ExpectError

	anyBy.assign( 5, y, {}, clbk ); // $ExpectError
	anyBy.assign( true, y, {}, clbk ); // $ExpectError
	anyBy.assign( false, y, {}, clbk ); // $ExpectError
	anyBy.assign( null, y, {}, clbk ); // $ExpectError
	anyBy.assign( undefined, y, {}, clbk ); // $ExpectError
	anyBy.assign( {}, y, {}, clbk ); // $ExpectError
	anyBy.assign( [ 1 ], y, {}, clbk ); // $ExpectError
	anyBy.assign( ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	anyBy.assign( 5, y, clbk, {} ); // $ExpectError
	anyBy.assign( true, y, clbk, {} ); // $ExpectError
	anyBy.assign( false, y, clbk, {} ); // $ExpectError
	anyBy.assign( null, y, clbk, {} ); // $ExpectError
	anyBy.assign( undefined, y, clbk, {} ); // $ExpectError
	anyBy.assign( {}, y, clbk, {} ); // $ExpectError
	anyBy.assign( [ 1 ], y, clbk, {} ); // $ExpectError
	anyBy.assign( ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	anyBy.assign( 5, y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( true, y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( false, y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( null, y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( undefined, y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( {}, y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( [ 1 ], y, {}, clbk, {} ); // $ExpectError
	anyBy.assign( ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	anyBy.assign( x, 5, clbk ); // $ExpectError
	anyBy.assign( x, true, clbk ); // $ExpectError
	anyBy.assign( x, false, clbk ); // $ExpectError
	anyBy.assign( x, null, clbk ); // $ExpectError
	anyBy.assign( x, undefined, clbk ); // $ExpectError
	anyBy.assign( x, {}, clbk ); // $ExpectError
	anyBy.assign( x, [ 1 ], clbk ); // $ExpectError
	anyBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	anyBy.assign( x, 5, {}, clbk ); // $ExpectError
	anyBy.assign( x, true, {}, clbk ); // $ExpectError
	anyBy.assign( x, false, {}, clbk ); // $ExpectError
	anyBy.assign( x, null, {}, clbk ); // $ExpectError
	anyBy.assign( x, undefined, {}, clbk ); // $ExpectError
	anyBy.assign( x, {}, {}, clbk ); // $ExpectError
	anyBy.assign( x, [ 1 ], {}, clbk ); // $ExpectError
	anyBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	anyBy.assign( x, 5, clbk, {} ); // $ExpectError
	anyBy.assign( x, true, clbk, {} ); // $ExpectError
	anyBy.assign( x, false, clbk, {} ); // $ExpectError
	anyBy.assign( x, null, clbk, {} ); // $ExpectError
	anyBy.assign( x, undefined, clbk, {} ); // $ExpectError
	anyBy.assign( x, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, [ 1 ], clbk, {} ); // $ExpectError
	anyBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	anyBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, undefined, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, {}, {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, [ 1 ], {}, clbk, {} ); // $ExpectError
	anyBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	anyBy.assign( x, y, '5', clbk ); // $ExpectError
	anyBy.assign( x, y, 5, clbk ); // $ExpectError
	anyBy.assign( x, y, true, clbk ); // $ExpectError
	anyBy.assign( x, y, false, clbk ); // $ExpectError
	anyBy.assign( x, y, null, clbk ); // $ExpectError
	anyBy.assign( x, y, [ 1 ], clbk ); // $ExpectError
	anyBy.assign( x, y, ( x: number ): number => x, clbk ); // $ExpectError

	anyBy.assign( x, y, '5', clbk, {} ); // $ExpectError
	anyBy.assign( x, y, 5, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, true, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, false, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, null, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, [ 1 ], clbk, {} ); // $ExpectError
	anyBy.assign( x, y, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'int32'
	});

	anyBy.assign( x, y, '5' ); // $ExpectError
	anyBy.assign( x, y, 5 ); // $ExpectError
	anyBy.assign( x, y, true ); // $ExpectError
	anyBy.assign( x, y, false ); // $ExpectError
	anyBy.assign( x, y, null ); // $ExpectError
	anyBy.assign( x, y, [ 1 ] ); // $ExpectError
	anyBy.assign( x, y, {} ); // $ExpectError

	anyBy.assign( x, y, '5', {} ); // $ExpectError
	anyBy.assign( x, y, 5, {} ); // $ExpectError
	anyBy.assign( x, y, true, {} ); // $ExpectError
	anyBy.assign( x, y, false, {} ); // $ExpectError
	anyBy.assign( x, y, null, {} ); // $ExpectError
	anyBy.assign( x, y, [ 1 ], {} ); // $ExpectError
	anyBy.assign( x, y, {}, {} ); // $ExpectError

	anyBy.assign( x, y, {}, '5' ); // $ExpectError
	anyBy.assign( x, y, {}, 5 ); // $ExpectError
	anyBy.assign( x, y, {}, true ); // $ExpectError
	anyBy.assign( x, y, {}, false ); // $ExpectError
	anyBy.assign( x, y, {}, null ); // $ExpectError
	anyBy.assign( x, y, {}, [ 1 ] ); // $ExpectError
	anyBy.assign( x, y, {}, {} ); // $ExpectError

	anyBy.assign( x, y, {}, '5', {} ); // $ExpectError
	anyBy.assign( x, y, {}, 5, {} ); // $ExpectError
	anyBy.assign( x, y, {}, true, {} ); // $ExpectError
	anyBy.assign( x, y, {}, false, {} ); // $ExpectError
	anyBy.assign( x, y, {}, null, {} ); // $ExpectError
	anyBy.assign( x, y, {}, [ 1 ], {} ); // $ExpectError
	anyBy.assign( x, y, {}, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dims` option which is not an array of numbers...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	anyBy.assign( x, y, { 'dims': '5' }, clbk ); // $ExpectError
	anyBy.assign( x, y, { 'dims': 5 }, clbk ); // $ExpectError
	anyBy.assign( x, y, { 'dims': null }, clbk ); // $ExpectError
	anyBy.assign( x, y, { 'dims': true }, clbk ); // $ExpectError
	anyBy.assign( x, y, { 'dims': false }, clbk ); // $ExpectError
	anyBy.assign( x, y, { 'dims': {} }, clbk ); // $ExpectError
	anyBy.assign( x, y, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	anyBy.assign( x, y, { 'dims': '5' }, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, { 'dims': 5 }, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, { 'dims': null }, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, { 'dims': true }, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, { 'dims': false }, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, { 'dims': {} }, clbk, {} ); // $ExpectError
	anyBy.assign( x, y, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( [], {
		'dtype': 'bool'
	});

	anyBy.assign(); // $ExpectError
	anyBy.assign( x ); // $ExpectError
	anyBy.assign( x, y ); // $ExpectError
	anyBy.assign( x, y, {}, clbk, {}, {} ); // $ExpectError
}
