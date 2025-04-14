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
import flag = require( './index' );


// TESTS //

// The function returns an ndarray flag...
{
	flag( zeros( [ 3, 2, 1 ] ), 'READONLY' ); // $ExpectType boolean | undefined
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	flag( '5', 'READONLY' ); // $ExpectError
	flag( 5, 'READONLY' ); // $ExpectError
	flag( true, 'READONLY' ); // $ExpectError
	flag( false, 'READONLY' ); // $ExpectError
	flag( null, 'READONLY' ); // $ExpectError
	flag( undefined, 'READONLY' ); // $ExpectError
	flag( [ '1', '2' ], 'READONLY' ); // $ExpectError
	flag( {}, 'READONLY' ); // $ExpectError
	flag( ( x: number ): number => x, 'READONLY' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid flag name...
{
	flag( zeros( [ 3, 2, 1 ] ), null ); // $ExpectError
	flag( zeros( [ 3, 2, 1 ] ), undefined ); // $ExpectError
	flag( zeros( [ 3, 2, 1 ] ), [ '1', '2' ] ); // $ExpectError
	flag( zeros( [ 3, 2, 1 ] ), {} ); // $ExpectError
	flag( zeros( [ 3, 2, 1 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	flag(); // $ExpectError
	flag( zeros( [ 2, 2 ] ) ); // $ExpectError
	flag( zeros( [ 2, 2 ] ), 'READONLY', {} ); // $ExpectError
}
