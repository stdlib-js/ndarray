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
import prependSingletonDimensions = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	prependSingletonDimensions( x, 3 ); // $ExpectType ndarray
}

// The compiler throws an error if the function is not provided a first argument which is an ndarray...
{
	prependSingletonDimensions( '5', 3 ); // $ExpectError
	prependSingletonDimensions( 5, 3 ); // $ExpectError
	prependSingletonDimensions( true, 3 ); // $ExpectError
	prependSingletonDimensions( false, 3 ); // $ExpectError
	prependSingletonDimensions( null, 3 ); // $ExpectError
	prependSingletonDimensions( {}, 3 ); // $ExpectError
	prependSingletonDimensions( [ '5' ], 3 ); // $ExpectError
	prependSingletonDimensions( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is a number...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	prependSingletonDimensions( x, '5' ); // $ExpectError
	prependSingletonDimensions( x, true ); // $ExpectError
	prependSingletonDimensions( x, false ); // $ExpectError
	prependSingletonDimensions( x, null ); // $ExpectError
	prependSingletonDimensions( x, {} ); // $ExpectError
	prependSingletonDimensions( x, [ '5' ] ); // $ExpectError
	prependSingletonDimensions( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	prependSingletonDimensions(); // $ExpectError
	prependSingletonDimensions( x ); // $ExpectError
	prependSingletonDimensions( x, 3, [ 1, 2, 3 ], [ 2, 3 ] ); // $ExpectError
}
