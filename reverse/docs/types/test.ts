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

import empty = require( './../../../base/empty' );
import reverse = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	reverse( empty( 'float64', sh, order ) ); // $ExpectType float64ndarray
	reverse( empty( 'complex64', sh, order ) ); // $ExpectType complex64ndarray
	reverse( empty( 'int32', sh, order ) ); // $ExpectType int32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	reverse( '10' ); // $ExpectError
	reverse( 10 ); // $ExpectError
	reverse( false ); // $ExpectError
	reverse( true ); // $ExpectError
	reverse( null ); // $ExpectError
	reverse( [] ); // $ExpectError
	reverse( {} ); // $ExpectError
	reverse( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	reverse(); // $ExpectError
	reverse( x, {} ); // $ExpectError
}
