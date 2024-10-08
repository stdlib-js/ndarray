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
import nditerColumns = require( './index' );


// TESTS //

// The function returns an iterator...
{
	nditerColumns( zeros( [ 2, 2 ] ) ); // $ExpectType Iterator<typedndarray<number>>
	nditerColumns( zeros( [ 2, 2 ] ), {} ); // $ExpectType Iterator<typedndarray<number>>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerColumns( 123 );  // $ExpectError
	nditerColumns( true ); // $ExpectError
	nditerColumns( false ); // $ExpectError
	nditerColumns( null ); // $ExpectError
	nditerColumns( undefined ); // $ExpectError
	nditerColumns( {} ); // $ExpectError
	nditerColumns( [] ); // $ExpectError
	nditerColumns( ( x: number ): number => x ); // $ExpectError

	nditerColumns( 123, {} );  // $ExpectError
	nditerColumns( true, {} ); // $ExpectError
	nditerColumns( false, {} ); // $ExpectError
	nditerColumns( null, {} ); // $ExpectError
	nditerColumns( undefined, {} ); // $ExpectError
	nditerColumns( {}, {} ); // $ExpectError
	nditerColumns( [], {} ); // $ExpectError
	nditerColumns( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	nditerColumns( zeros( [ 2, 2 ] ), 'abc' ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), 123 ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), true ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), false ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), null ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), [] ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	nditerColumns( zeros( [ 2, 2 ] ), { 'readonly': 'abc' } ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), { 'readonly': 123 } ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), { 'readonly': null } ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), { 'readonly': [] } ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), { 'readonly': {} } ); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nditerColumns(); // $ExpectError
	nditerColumns( zeros( [ 2, 2 ] ), {}, {} ); // $ExpectError
}
