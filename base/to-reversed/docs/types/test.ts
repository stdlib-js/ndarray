/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import empty = require( './../../../../base/empty' );
import toReversed = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	toReversed( empty( 'float64', sh, order ) ); // $ExpectType float64ndarray
	toReversed( empty( 'float32', sh, order ) ); // $ExpectType float32ndarray
	toReversed( empty( 'complex128', sh, order ) ); // $ExpectType complex128ndarray
	toReversed( empty( 'complex64', sh, order ) ); // $ExpectType complex64ndarray
	toReversed( empty( 'int32', sh, order ) ); // $ExpectType int32ndarray
	toReversed( empty( 'int16', sh, order ) ); // $ExpectType int16ndarray
	toReversed( empty( 'int8', sh, order ) ); // $ExpectType int8ndarray
	toReversed( empty( 'uint32', sh, order ) ); // $ExpectType uint32ndarray
	toReversed( empty( 'uint16', sh, order ) ); // $ExpectType uint16ndarray
	toReversed( empty( 'uint8', sh, order ) ); // $ExpectType uint8ndarray
	toReversed( empty( 'uint8c', sh, order ) ); // $ExpectType uint8cndarray
	toReversed( empty( 'generic', sh, order ) ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided an argument which is not an ndarray...
{
	toReversed( '10' ); // $ExpectError
	toReversed( 10 ); // $ExpectError
	toReversed( false ); // $ExpectError
	toReversed( true ); // $ExpectError
	toReversed( null ); // $ExpectError
	toReversed( [] ); // $ExpectError
	toReversed( {} ); // $ExpectError
	toReversed( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	toReversed( x, false ); // $ExpectError
	toReversed( x, {} ); // $ExpectError
	toReversed( x, 1, '10', {} ); // $ExpectError
}
