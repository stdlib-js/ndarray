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
import nditerEntries = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = zeros( [ 2, 2 ] );

	nditerEntries( x ); // $ExpectType Iterator<[number[], number]>
	nditerEntries( x, {} ); // $ExpectType Iterator<[number[], number]>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerEntries( '123' ); // $ExpectError
	nditerEntries( 123 );  // $ExpectError
	nditerEntries( true ); // $ExpectError
	nditerEntries( false ); // $ExpectError
	nditerEntries( null ); // $ExpectError
	nditerEntries( undefined ); // $ExpectError
	nditerEntries( {} ); // $ExpectError
	nditerEntries( ( x: number ): number => x ); // $ExpectError

	nditerEntries( '123', {} ); // $ExpectError
	nditerEntries( 123, {} );  // $ExpectError
	nditerEntries( true, {} ); // $ExpectError
	nditerEntries( false, {} ); // $ExpectError
	nditerEntries( null, {} ); // $ExpectError
	nditerEntries( undefined, {} ); // $ExpectError
	nditerEntries( {}, {} ); // $ExpectError
	nditerEntries( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	nditerEntries( x, 'abc' ); // $ExpectError
	nditerEntries( x, 123 ); // $ExpectError
	nditerEntries( x, true ); // $ExpectError
	nditerEntries( x, false ); // $ExpectError
	nditerEntries( x, null ); // $ExpectError
	nditerEntries( x, [] ); // $ExpectError
	nditerEntries( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `order` option which is valid order...
{
	const x = zeros( [ 2, 2 ] );

	nditerEntries( x, { 'order': 'abc' } ); // $ExpectError
	nditerEntries( x, { 'order': 123 } ); // $ExpectError
	nditerEntries( x, { 'order': null } ); // $ExpectError
	nditerEntries( x, { 'order': true } ); // $ExpectError
	nditerEntries( x, { 'order': false } ); // $ExpectError
	nditerEntries( x, { 'order': [] } ); // $ExpectError
	nditerEntries( x, { 'order': {} } ); // $ExpectError
	nditerEntries( x, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	nditerEntries(); // $ExpectError
	nditerEntries( x, {}, {} ); // $ExpectError
}
