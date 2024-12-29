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
import numelDimension = require( './index' );


// TESTS //

// The function returns a number...
{
	numelDimension( zeros( [ 3, 2, 1 ] ), 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	numelDimension( '5', 0 ); // $ExpectError
	numelDimension( 5, 0 ); // $ExpectError
	numelDimension( true, 0 ); // $ExpectError
	numelDimension( false, 0 ); // $ExpectError
	numelDimension( null, 0 ); // $ExpectError
	numelDimension( undefined, 0 ); // $ExpectError
	numelDimension( [ '1', '2' ], 0 ); // $ExpectError
	numelDimension( {}, 0 ); // $ExpectError
	numelDimension( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	numelDimension( zeros( [ 3, 2, 1 ] ), '5' ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), true ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), false ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), null ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), undefined ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), [ '1', '2' ] ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), {} ); // $ExpectError
	numelDimension( zeros( [ 3, 2, 1 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	numelDimension(); // $ExpectError
	numelDimension( zeros( [ 2, 2 ] ) ); // $ExpectError
	numelDimension( zeros( [ 2, 2 ] ), 0, {} ); // $ExpectError
}
