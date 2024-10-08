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
import nditerMatrices = require( './index' );


// TESTS //

// The function returns an iterator...
{
	nditerMatrices( zeros( [ 2, 2, 2 ] ) ); // $ExpectType Iterator<typedndarray<number>>
	nditerMatrices( zeros( [ 2, 2, 2 ] ), {} ); // $ExpectType Iterator<typedndarray<number>>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerMatrices( 123 );  // $ExpectError
	nditerMatrices( true ); // $ExpectError
	nditerMatrices( false ); // $ExpectError
	nditerMatrices( null ); // $ExpectError
	nditerMatrices( undefined ); // $ExpectError
	nditerMatrices( {} ); // $ExpectError
	nditerMatrices( [] ); // $ExpectError
	nditerMatrices( ( x: number ): number => x ); // $ExpectError

	nditerMatrices( 123, {} );  // $ExpectError
	nditerMatrices( true, {} ); // $ExpectError
	nditerMatrices( false, {} ); // $ExpectError
	nditerMatrices( null, {} ); // $ExpectError
	nditerMatrices( undefined, {} ); // $ExpectError
	nditerMatrices( {}, {} ); // $ExpectError
	nditerMatrices( [], {} ); // $ExpectError
	nditerMatrices( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	nditerMatrices( zeros( [ 2, 2, 2 ] ), 'abc' ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), 123 ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), true ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), false ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), null ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), [] ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	nditerMatrices( zeros( [ 2, 2, 2 ] ), { 'readonly': 'abc' } ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), { 'readonly': 123 } ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), { 'readonly': null } ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), { 'readonly': [] } ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), { 'readonly': {} } ); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nditerMatrices(); // $ExpectError
	nditerMatrices( zeros( [ 2, 2, 2 ] ), {}, {} ); // $ExpectError
}
