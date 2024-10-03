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

import zeros = require( './../../../../zeros' );
import maybeBroadcastArrays = require( './index' );


// TESTS //

// The function returns an array of ndarrays...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2, 2 ] );

	maybeBroadcastArrays( [ x ] ); // $ExpectType ndarray[]
	maybeBroadcastArrays( [ x, y ] ); // $ExpectType ndarray[]
	maybeBroadcastArrays( [ x, y, x ] ); // $ExpectType ndarray[]
}

// The compiler throws an error if the function is not provided a first argument which is an array of ndarrays...
{
	maybeBroadcastArrays( '5', [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( 5, [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( true, [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( false, [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( null, [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( {}, [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( [ '5' ], [ 2, 2, 2 ] ); // $ExpectError
	maybeBroadcastArrays( ( x: number ): number => x, [ 2, 2, 2 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = zeros( [ 2, 2, 2 ] );

	maybeBroadcastArrays(); // $ExpectError
	maybeBroadcastArrays( [ x, y ], {} ); // $ExpectError
}
