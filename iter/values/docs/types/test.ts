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
import nditerValues = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = zeros( [ 2, 2 ] );

	nditerValues( x ); // $ExpectType Iterator<number>
	nditerValues( x, {} ); // $ExpectType Iterator<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerValues( '123' ); // $ExpectError
	nditerValues( 123 );  // $ExpectError
	nditerValues( true ); // $ExpectError
	nditerValues( false ); // $ExpectError
	nditerValues( null ); // $ExpectError
	nditerValues( undefined ); // $ExpectError
	nditerValues( {} ); // $ExpectError
	nditerValues( ( x: number ): number => x ); // $ExpectError

	nditerValues( '123', {} ); // $ExpectError
	nditerValues( 123, {} );  // $ExpectError
	nditerValues( true, {} ); // $ExpectError
	nditerValues( false, {} ); // $ExpectError
	nditerValues( null, {} ); // $ExpectError
	nditerValues( undefined, {} ); // $ExpectError
	nditerValues( {}, {} ); // $ExpectError
	nditerValues( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	nditerValues( x, 'abc' ); // $ExpectError
	nditerValues( x, 123 ); // $ExpectError
	nditerValues( x, true ); // $ExpectError
	nditerValues( x, false ); // $ExpectError
	nditerValues( x, null ); // $ExpectError
	nditerValues( x, [] ); // $ExpectError
	nditerValues( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `order` option which is valid order...
{
	const x = zeros( [ 2, 2 ] );

	nditerValues( x, { 'order': 'abc' } ); // $ExpectError
	nditerValues( x, { 'order': 123 } ); // $ExpectError
	nditerValues( x, { 'order': null } ); // $ExpectError
	nditerValues( x, { 'order': true } ); // $ExpectError
	nditerValues( x, { 'order': false } ); // $ExpectError
	nditerValues( x, { 'order': [] } ); // $ExpectError
	nditerValues( x, { 'order': {} } ); // $ExpectError
	nditerValues( x, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	nditerValues(); // $ExpectError
	nditerValues( x, {}, {} ); // $ExpectError
}
