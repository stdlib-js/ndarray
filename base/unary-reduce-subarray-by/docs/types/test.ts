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

import empty = require( './../../../../empty' );
import everyBy = require( './../../../../base/every-by' );
import unaryReduceSubarrayBy = require( './index' );

/**
* Callback function.
*
* @param v - ndarray element
* @returns result
*/
function clbk( v: number ): boolean {
	return v > 0.0;
}


// TESTS //

// The function returns `undefined`...
{
	const x = empty( [ 2, 2 ], { 'dtype': 'float64' } );
	const y = empty( [ 2 ], { 'dtype': 'bool' } );

	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], clbk ); // $ExpectType void
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], clbk, {} ); // $ExpectType void
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, clbk ); // $ExpectType void
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	const x = empty( [ 2, 2 ], { 'dtype': 'float64' } );
	const y = empty( [ 2 ], { 'dtype': 'bool' } );

	unaryReduceSubarrayBy( '5', [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( 5, [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( true, [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( false, [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( null, [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( void 0, [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( {}, [ x, y ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( [ 1 ], [ x, y ], [ 1 ], clbk ); // $ExpectError

	unaryReduceSubarrayBy( '5', [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( 5, [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( true, [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( false, [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( null, [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( void 0, [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( {}, [ x, y ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( [ 1 ], [ x, y ], [ 1 ], clbk, {} ); // $ExpectError

	unaryReduceSubarrayBy( '5', [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( 5, [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( true, [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( false, [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( null, [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( void 0, [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( {}, [ x, y ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( [ 1 ], [ x, y ], [ 1 ], {}, clbk ); // $ExpectError

	unaryReduceSubarrayBy( '5', [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( 5, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( true, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( false, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( null, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( void 0, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( {}, [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( [ 1 ], [ x, y ], [ 1 ], {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing ndarray-like objects...
{
	unaryReduceSubarrayBy( everyBy, '5', [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, 5, [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, true, [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, false, [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, null, [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, void 0, [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, {}, [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ 1 ], [ 1 ], clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, ( x: number ): number => x, [ 1 ], clbk ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, '5', [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, 5, [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, true, [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, false, [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, null, [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, void 0, [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, {}, [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ 1 ], [ 1 ], clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, ( x: number ): number => x, [ 1 ], clbk, {} ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, '5', [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, 5, [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, true, [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, false, [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, null, [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, void 0, [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, {}, [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ 1 ], [ 1 ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, ( x: number ): number => x, [ 1 ], {}, clbk ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, '5', [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, 5, [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, true, [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, false, [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, null, [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, void 0, [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, {}, [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ 1 ], [ 1 ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, ( x: number ): number => x, [ 1 ], {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array of integers...
{
	const x = empty( [ 2, 2 ], { 'dtype': 'float64' } );
	const y = empty( [ 2 ], { 'dtype': 'bool' } );

	unaryReduceSubarrayBy( everyBy, [ x, y ], '5', clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], 5, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], true, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], false, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], null, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], void 0, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], ( x: number ): number => x, clbk ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, [ x, y ], '5', clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], 5, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], true, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], false, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], null, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], void 0, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], ( x: number ): number => x, clbk, {} ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, [ x, y ], '5', {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], 5, {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], true, {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], false, {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], null, {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], void 0, {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], {}, {}, clbk ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], ( x: number ): number => x, {}, clbk ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, [ x, y ], '5', {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], 5, {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], true, {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], false, {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], null, {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], void 0, {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], {}, {}, clbk, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid fourth argument...
{
	const x = empty( [ 2, 2 ], { 'dtype': 'float64' } );
	const y = empty( [ 2 ], { 'dtype': 'bool' } );

	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], '5' ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], 5 ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], true ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], false ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], null ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], void 0 ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], [] ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], '5', {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], 5, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], true, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], false, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], null, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], void 0, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid fifth argument...
{
	const x = empty( [ 2, 2 ], { 'dtype': 'float64' } );
	const y = empty( [ 2 ], { 'dtype': 'bool' } );

	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, '5' ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, 5 ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, true ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, false ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, null ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, void 0 ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, [] ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, {} ); // $ExpectError

	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, '5', {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, 5, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, true, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, false, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, null, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, void 0, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, {}, {} ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], { 'dtype': 'float64' } );
	const y = empty( [ 2 ], { 'dtype': 'bool' } );

	unaryReduceSubarrayBy(); // $ExpectError
	unaryReduceSubarrayBy( everyBy ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ] ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ] ); // $ExpectError
	unaryReduceSubarrayBy( everyBy, [ x, y ], [ 1 ], {}, clbk, {}, {} ); // $ExpectError
}
