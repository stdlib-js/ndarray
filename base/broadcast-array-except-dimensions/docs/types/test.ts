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

import zeros = require( './../../../../zeros' );
import broadcastArrayExceptDimensions = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], [ -2 ] ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is not provided a first argument which is an ndarray...
{
	broadcastArrayExceptDimensions( '5', [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( 5, [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( true, [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( false, [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( null, [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( {}, [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( [ '5' ], [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( ( x: number ): number => x, [ 2, 2, 2 ], [ -2 ] ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is an array-like object containing numbers...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrayExceptDimensions( x, '5', [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, 5, [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, true, [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, false, [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, null, [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, {}, [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ '5' ], [ -2 ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, ( x: number ): number => x, [ -2 ] ); // $ExpectError
}

// The compiler throws an error if the function is not provided a third argument which is not an array-like object containing numbers...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], '5' ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], 5 ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], true ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], false ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], null ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], [ '5' ] ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 2, 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	broadcastArrayExceptDimensions(); // $ExpectError
	broadcastArrayExceptDimensions( x ); // $ExpectError
	broadcastArrayExceptDimensions( x, [ 1, 2, 3 ], [ -2 ], {} ); // $ExpectError
}
