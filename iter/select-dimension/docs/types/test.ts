/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import nditerSelectDimension = require( './index' );


// TESTS //

// The function returns an iterator...
{
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0 ); // $ExpectType Iterator<typedndarray<number>>
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, {} ); // $ExpectType Iterator<typedndarray<number>>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerSelectDimension( 123, 0 );  // $ExpectError
	nditerSelectDimension( true, 0 ); // $ExpectError
	nditerSelectDimension( false, 0 ); // $ExpectError
	nditerSelectDimension( null, 0 ); // $ExpectError
	nditerSelectDimension( undefined, 0 ); // $ExpectError
	nditerSelectDimension( {}, 0 ); // $ExpectError
	nditerSelectDimension( [], 0 ); // $ExpectError
	nditerSelectDimension( ( x: number ): number => x, 0 ); // $ExpectError

	nditerSelectDimension( 123, 0, {} );  // $ExpectError
	nditerSelectDimension( true, 0, {} ); // $ExpectError
	nditerSelectDimension( false, 0, {} ); // $ExpectError
	nditerSelectDimension( null, 0, {} ); // $ExpectError
	nditerSelectDimension( undefined, 0, {} ); // $ExpectError
	nditerSelectDimension( {}, 0, {} ); // $ExpectError
	nditerSelectDimension( [], 0, {} ); // $ExpectError
	nditerSelectDimension( ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), '123' );  // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), true ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), false ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), null ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), undefined ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), [] ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), ( x: number ): number => x ); // $ExpectError

	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), '123', {} );  // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), true, {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), false, {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), null, {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), undefined, {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), {}, {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), [], {} ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, 'abc' ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, 123 ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, true ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, false ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, null ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, [] ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, { 'readonly': 'abc' } ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, { 'readonly': 123 } ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, { 'readonly': null } ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, { 'readonly': [] } ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, { 'readonly': {} } ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nditerSelectDimension(); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ) ); // $ExpectError
	nditerSelectDimension( zeros( [ 2, 2, 2 ] ), 0, {}, {} ); // $ExpectError
}
