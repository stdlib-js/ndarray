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
import nditerSubarrays = require( './index' );


// TESTS //

// The function returns an iterator...
{
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2 ); // $ExpectType Iterator<typedndarray<number>>
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, {} ); // $ExpectType Iterator<typedndarray<number>>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerSubarrays( 123, 2 );  // $ExpectError
	nditerSubarrays( true, 2 ); // $ExpectError
	nditerSubarrays( false, 2 ); // $ExpectError
	nditerSubarrays( null, 2 ); // $ExpectError
	nditerSubarrays( undefined, 2 ); // $ExpectError
	nditerSubarrays( {}, 2 ); // $ExpectError
	nditerSubarrays( [], 2 ); // $ExpectError
	nditerSubarrays( ( x: number ): number => x, 2 ); // $ExpectError

	nditerSubarrays( 123, 2, {} );  // $ExpectError
	nditerSubarrays( true, 2, {} ); // $ExpectError
	nditerSubarrays( false, 2, {} ); // $ExpectError
	nditerSubarrays( null, 2, {} ); // $ExpectError
	nditerSubarrays( undefined, 2, {} ); // $ExpectError
	nditerSubarrays( {}, 2, {} ); // $ExpectError
	nditerSubarrays( [], 2, {} ); // $ExpectError
	nditerSubarrays( ( x: number ): number => x, 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), '123' );  // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), true ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), false ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), null ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), undefined ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), [] ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), ( x: number ): number => x ); // $ExpectError

	nditerSubarrays( zeros( [ 2, 2, 2 ] ), '123', {} );  // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), true, {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), false, {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), null, {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), undefined, {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), {}, {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), [], {} ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, 'abc' ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, 123 ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, true ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, false ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, null ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, [] ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, { 'readonly': 'abc' } ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, { 'readonly': 123 } ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, { 'readonly': null } ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, { 'readonly': [] } ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, { 'readonly': {} } ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nditerSubarrays(); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ) ); // $ExpectError
	nditerSubarrays( zeros( [ 2, 2, 2 ] ), 2, {}, {} ); // $ExpectError
}
