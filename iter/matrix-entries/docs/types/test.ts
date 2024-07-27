/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import zeros = require( './../../../../zeros' );
import nditerMatrixEntries = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerMatrixEntries( x ); // $ExpectType Iterator<[(number | null)[], typedndarray<number>]>
	nditerMatrixEntries( x, {} ); // $ExpectType Iterator<[(number | null)[], typedndarray<number>]>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerMatrixEntries( '123' ); // $ExpectError
	nditerMatrixEntries( 123 );  // $ExpectError
	nditerMatrixEntries( true ); // $ExpectError
	nditerMatrixEntries( false ); // $ExpectError
	nditerMatrixEntries( null ); // $ExpectError
	nditerMatrixEntries( undefined ); // $ExpectError
	nditerMatrixEntries( {} ); // $ExpectError
	nditerMatrixEntries( ( x: number ): number => x ); // $ExpectError

	nditerMatrixEntries( '123', {} ); // $ExpectError
	nditerMatrixEntries( 123, {} );  // $ExpectError
	nditerMatrixEntries( true, {} ); // $ExpectError
	nditerMatrixEntries( false, {} ); // $ExpectError
	nditerMatrixEntries( null, {} ); // $ExpectError
	nditerMatrixEntries( undefined, {} ); // $ExpectError
	nditerMatrixEntries( {}, {} ); // $ExpectError
	nditerMatrixEntries( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerMatrixEntries( x, 'abc' ); // $ExpectError
	nditerMatrixEntries( x, 123 ); // $ExpectError
	nditerMatrixEntries( x, true ); // $ExpectError
	nditerMatrixEntries( x, false ); // $ExpectError
	nditerMatrixEntries( x, null ); // $ExpectError
	nditerMatrixEntries( x, [] ); // $ExpectError
	nditerMatrixEntries( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is boolean...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerMatrixEntries( x, { 'readonly': 'abc' } ); // $ExpectError
	nditerMatrixEntries( x, { 'readonly': 123 } ); // $ExpectError
	nditerMatrixEntries( x, { 'readonly': null } ); // $ExpectError
	nditerMatrixEntries( x, { 'readonly': [] } ); // $ExpectError
	nditerMatrixEntries( x, { 'readonly': {} } ); // $ExpectError
	nditerMatrixEntries( x, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerMatrixEntries(); // $ExpectError
	nditerMatrixEntries( x, {}, {} ); // $ExpectError
}
