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
import nditerColumnEntries = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerColumnEntries( x ); // $ExpectType Iterator<[(number | null)[], typedndarray<number>]>
	nditerColumnEntries( x, {} ); // $ExpectType Iterator<[(number | null)[], typedndarray<number>]>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerColumnEntries( '123' ); // $ExpectError
	nditerColumnEntries( 123 );  // $ExpectError
	nditerColumnEntries( true ); // $ExpectError
	nditerColumnEntries( false ); // $ExpectError
	nditerColumnEntries( null ); // $ExpectError
	nditerColumnEntries( undefined ); // $ExpectError
	nditerColumnEntries( {} ); // $ExpectError
	nditerColumnEntries( ( x: number ): number => x ); // $ExpectError

	nditerColumnEntries( '123', {} ); // $ExpectError
	nditerColumnEntries( 123, {} );  // $ExpectError
	nditerColumnEntries( true, {} ); // $ExpectError
	nditerColumnEntries( false, {} ); // $ExpectError
	nditerColumnEntries( null, {} ); // $ExpectError
	nditerColumnEntries( undefined, {} ); // $ExpectError
	nditerColumnEntries( {}, {} ); // $ExpectError
	nditerColumnEntries( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerColumnEntries( x, 'abc' ); // $ExpectError
	nditerColumnEntries( x, 123 ); // $ExpectError
	nditerColumnEntries( x, true ); // $ExpectError
	nditerColumnEntries( x, false ); // $ExpectError
	nditerColumnEntries( x, null ); // $ExpectError
	nditerColumnEntries( x, [] ); // $ExpectError
	nditerColumnEntries( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is boolean...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerColumnEntries( x, { 'readonly': 'abc' } ); // $ExpectError
	nditerColumnEntries( x, { 'readonly': 123 } ); // $ExpectError
	nditerColumnEntries( x, { 'readonly': null } ); // $ExpectError
	nditerColumnEntries( x, { 'readonly': [] } ); // $ExpectError
	nditerColumnEntries( x, { 'readonly': {} } ); // $ExpectError
	nditerColumnEntries( x, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerColumnEntries(); // $ExpectError
	nditerColumnEntries( x, {}, {} ); // $ExpectError
}
