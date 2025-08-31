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
import offset = require( './index' );


// TESTS //

// The function returns a number...
{
	offset( zeros( [ 3, 2, 1 ] ) ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than an ndarray...
{
	offset( '5' ); // $ExpectError
	offset( 5 ); // $ExpectError
	offset( true ); // $ExpectError
	offset( false ); // $ExpectError
	offset( null ); // $ExpectError
	offset( undefined ); // $ExpectError
	offset( [ '1', '2' ] ); // $ExpectError
	offset( {} ); // $ExpectError
	offset( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	offset(); // $ExpectError
	offset( zeros( [ 2, 2 ] ), {} ); // $ExpectError
}
