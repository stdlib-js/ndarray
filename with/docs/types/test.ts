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

import array = require( './../../../array' );
import ndarrayWith = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	ndarrayWith( array<number>( [ [ 1, 2 ], [ 3, 4 ] ] ), [ 0, 0 ], 5 ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	ndarrayWith( 123, [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( true, [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( false, [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( null, [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( undefined, [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( [ 1, 2 ], [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( {}, [ 0, 0 ], 5 ); // $ExpectError
	ndarrayWith( ( x: number ): number => x, [ 0, 0 ], 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of integers...
{
	var x = array<number>( [ [ 1, 2 ], [ 3, 4 ] ] );

	ndarrayWith( x, [ '1' ], 5 );
	ndarrayWith( x, 1, 5 ); // $ExpectError
	ndarrayWith( x, true, 5 ); // $ExpectError
	ndarrayWith( x, false, 5 ); // $ExpectError
	ndarrayWith( x, null, 5 ); // $ExpectError
	ndarrayWith( x, undefined, 5 ); // $ExpectError
	ndarrayWith( x, {}, 5 ); // $ExpectError
	ndarrayWith( x, ( y: number ): number => y, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array<number>( [ [ 1, 2 ], [ 3, 4 ] ] );

	ndarrayWith(); // $ExpectError
	ndarrayWith( x, [ 0, 0 ] ); // $ExpectError
	ndarrayWith( x, [ 0, 0 ], 5, {} ); // $ExpectError
}
