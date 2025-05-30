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
import strides = require( './index' );


// TESTS //

// The function returns ndarray strides...
{
	strides( zeros( [ 3, 2, 1 ] ) ); // $ExpectType Strides
}

// The compiler throws an error if the function is provided a value other than an ndarray...
{
	strides( '5' ); // $ExpectError
	strides( 5 ); // $ExpectError
	strides( true ); // $ExpectError
	strides( false ); // $ExpectError
	strides( null ); // $ExpectError
	strides( undefined ); // $ExpectError
	strides( [ '1', '2' ] ); // $ExpectError
	strides( {} ); // $ExpectError
	strides( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	strides(); // $ExpectError
	strides( zeros( [ 2, 2 ] ), {} ); // $ExpectError
}
