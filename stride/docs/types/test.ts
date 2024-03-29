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

import zeros = require( './../../../zeros' );
import stride = require( './index' );


// TESTS //

// The function returns a number...
{
	stride( zeros( [ 3, 2, 1 ] ), 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	stride( '5', 0 ); // $ExpectError
	stride( 5, 0 ); // $ExpectError
	stride( true, 0 ); // $ExpectError
	stride( false, 0 ); // $ExpectError
	stride( null, 0 ); // $ExpectError
	stride( undefined, 0 ); // $ExpectError
	stride( [ '1', '2' ], 0 ); // $ExpectError
	stride( {}, 0 ); // $ExpectError
	stride( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	stride( zeros( [ 3, 2, 1 ] ), '5' ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), true ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), false ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), null ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), undefined ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), [ '1', '2' ] ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), {} ); // $ExpectError
	stride( zeros( [ 3, 2, 1 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	stride(); // $ExpectError
	stride( zeros( [ 2, 2 ] ) ); // $ExpectError
	stride( zeros( [ 2, 2 ] ), 0, {} ); // $ExpectError
}
