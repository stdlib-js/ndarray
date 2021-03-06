/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import array = require( './../../../../array' );
import removeSingletonDimensions = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	removeSingletonDimensions( x ); // $ExpectType ndarray
}

// The compiler throws an error if the function is not provided a first argument which is an ndarray...
{
	removeSingletonDimensions( '5' ); // $ExpectError
	removeSingletonDimensions( 5 ); // $ExpectError
	removeSingletonDimensions( true ); // $ExpectError
	removeSingletonDimensions( false ); // $ExpectError
	removeSingletonDimensions( null ); // $ExpectError
	removeSingletonDimensions( {} ); // $ExpectError
	removeSingletonDimensions( [ '5' ] ); // $ExpectError
	removeSingletonDimensions( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	removeSingletonDimensions(); // $ExpectError
	removeSingletonDimensions( x, [ 1, 2, 3 ], [ 2, 3 ] ); // $ExpectError
}
