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
import shape = require( './index' );


// TESTS //

// The function returns an ndarray shape...
{
	shape( zeros( [ 3, 2, 1 ] ), false ); // $ExpectType Shape
	shape( zeros( [ 3, 2, 1 ] ), true ); // $ExpectType Shape
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	shape( '5', false ); // $ExpectError
	shape( 5, false ); // $ExpectError
	shape( true, false ); // $ExpectError
	shape( false, false ); // $ExpectError
	shape( null, false ); // $ExpectError
	shape( undefined, false ); // $ExpectError
	shape( [ '1', '2' ], false ); // $ExpectError
	shape( {}, false ); // $ExpectError
	shape( ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a boolean...
{
	shape( zeros( [ 3, 2, 1 ] ), '5' ); // $ExpectError
	shape( zeros( [ 3, 2, 1 ] ), 5 ); // $ExpectError
	shape( zeros( [ 3, 2, 1 ] ), null ); // $ExpectError
	shape( zeros( [ 3, 2, 1 ] ), undefined ); // $ExpectError
	shape( zeros( [ 3, 2, 1 ] ), [ '1', '2' ] ); // $ExpectError
	shape( zeros( [ 3, 2, 1 ] ), {} ); // $ExpectError
	shape( zeros( [ 3, 2, 1 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	shape(); // $ExpectError
	shape( zeros( [ 2, 2 ] ) ); // $ExpectError
	shape( zeros( [ 2, 2 ] ), false, {} ); // $ExpectError
}
