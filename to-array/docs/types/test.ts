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

import array = require( './../../../array' );
import ndarray2array = require( './index' );


// TESTS //

// The function returns an array...
{
	ndarray2array( array( [ [ 1, 2 ], [ 3, 4 ] ] ) ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	ndarray2array( 123 ); // $ExpectError
	ndarray2array( true ); // $ExpectError
	ndarray2array( false ); // $ExpectError
	ndarray2array( null ); // $ExpectError
	ndarray2array( undefined ); // $ExpectError
	ndarray2array( [ 1, 2 ] ); // $ExpectError
	ndarray2array( {} ); // $ExpectError
	ndarray2array( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	ndarray2array(); // $ExpectError
	ndarray2array( arr, {} ); // $ExpectError
}
