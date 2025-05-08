/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
import zeros = require( './../../../../zeros' );
import spreadDimensions = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	spreadDimensions( 5, x, [ 1, 3 ] ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is not provided a first argument which is a number...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	spreadDimensions( '5', x, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( true, x, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( false, x, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( null, x, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( {}, x, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( [ '5' ], x, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( ( x: number ): number => x, x, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is an ndarray...
{
	spreadDimensions( 5, '5', [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, 5, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, true, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, false, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, null, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, {}, [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, [ '5' ], [ 1, 3 ] ); // $ExpectError
	spreadDimensions( 5, ( x: number ): number => x, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is not provided a third argument which is an array of numbers...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	spreadDimensions( 5, x, '5' ); // $ExpectError
	spreadDimensions( 5, x, true ); // $ExpectError
	spreadDimensions( 5, x, false ); // $ExpectError
	spreadDimensions( 5, x, null ); // $ExpectError
	spreadDimensions( 5, x, {} ); // $ExpectError
	spreadDimensions( 5, x, [ '5' ] ); // $ExpectError
	spreadDimensions( 5, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	spreadDimensions(); // $ExpectError
	spreadDimensions( 5, x ); // $ExpectError
	spreadDimensions( 5, x, [ 1, 3 ], {} ); // $ExpectError
}
