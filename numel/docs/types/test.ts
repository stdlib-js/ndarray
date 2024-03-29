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
import numel = require( './index' );


// TESTS //

// The function returns a number...
{
	numel( zeros( [ 3, 2, 1 ] ) ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than an ndarray...
{
	numel( '5' ); // $ExpectError
	numel( 5 ); // $ExpectError
	numel( true ); // $ExpectError
	numel( false ); // $ExpectError
	numel( null ); // $ExpectError
	numel( undefined ); // $ExpectError
	numel( [ '1', '2' ] ); // $ExpectError
	numel( {} ); // $ExpectError
	numel( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	numel(); // $ExpectError
	numel( zeros( [ 2, 2 ] ), {} ); // $ExpectError
}
