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
import nditerRowEntries = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerRowEntries( x ); // $ExpectType Iterator<[(number | null)[], typedndarray<number>]>
	nditerRowEntries( x, {} ); // $ExpectType Iterator<[(number | null)[], typedndarray<number>]>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerRowEntries( '123' ); // $ExpectError
	nditerRowEntries( 123 );  // $ExpectError
	nditerRowEntries( true ); // $ExpectError
	nditerRowEntries( false ); // $ExpectError
	nditerRowEntries( null ); // $ExpectError
	nditerRowEntries( undefined ); // $ExpectError
	nditerRowEntries( {} ); // $ExpectError
	nditerRowEntries( ( x: number ): number => x ); // $ExpectError

	nditerRowEntries( '123', {} ); // $ExpectError
	nditerRowEntries( 123, {} );  // $ExpectError
	nditerRowEntries( true, {} ); // $ExpectError
	nditerRowEntries( false, {} ); // $ExpectError
	nditerRowEntries( null, {} ); // $ExpectError
	nditerRowEntries( undefined, {} ); // $ExpectError
	nditerRowEntries( {}, {} ); // $ExpectError
	nditerRowEntries( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerRowEntries( x, 'abc' ); // $ExpectError
	nditerRowEntries( x, 123 ); // $ExpectError
	nditerRowEntries( x, true ); // $ExpectError
	nditerRowEntries( x, false ); // $ExpectError
	nditerRowEntries( x, null ); // $ExpectError
	nditerRowEntries( x, [] ); // $ExpectError
	nditerRowEntries( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is boolean...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerRowEntries( x, { 'readonly': 'abc' } ); // $ExpectError
	nditerRowEntries( x, { 'readonly': 123 } ); // $ExpectError
	nditerRowEntries( x, { 'readonly': null } ); // $ExpectError
	nditerRowEntries( x, { 'readonly': [] } ); // $ExpectError
	nditerRowEntries( x, { 'readonly': {} } ); // $ExpectError
	nditerRowEntries( x, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2, 2 ] );

	nditerRowEntries(); // $ExpectError
	nditerRowEntries( x, {}, {} ); // $ExpectError
}
