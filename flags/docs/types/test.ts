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
import flags = require( './index' );


// TESTS //

// The function returns ndarray flags...
{
	flags( zeros( [ 3, 2, 1 ] ) ); // $ExpectType Flags<unknown>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	flags( '5' ); // $ExpectError
	flags( 5 ); // $ExpectError
	flags( true ); // $ExpectError
	flags( false ); // $ExpectError
	flags( null ); // $ExpectError
	flags( undefined ); // $ExpectError
	flags( [ '1', '2' ] ); // $ExpectError
	flags( {} ); // $ExpectError
	flags( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	flags(); // $ExpectError
	flags( zeros( [ 2, 2 ] ), {} ); // $ExpectError
}
