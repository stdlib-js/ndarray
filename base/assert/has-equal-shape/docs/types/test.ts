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

import array = require( './../../../../../array' );
import hasEqualShape = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	hasEqualShape( x, x ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	hasEqualShape( '5', x ); // $ExpectError
	hasEqualShape( 5, x ); // $ExpectError
	hasEqualShape( true, x ); // $ExpectError
	hasEqualShape( false, x ); // $ExpectError
	hasEqualShape( null, x ); // $ExpectError
	hasEqualShape( [], x ); // $ExpectError
	hasEqualShape( {}, x ); // $ExpectError
	hasEqualShape( ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	hasEqualShape( x, '5' ); // $ExpectError
	hasEqualShape( x, 5 ); // $ExpectError
	hasEqualShape( x, true ); // $ExpectError
	hasEqualShape( x, false ); // $ExpectError
	hasEqualShape( x, null ); // $ExpectError
	hasEqualShape( x, [] ); // $ExpectError
	hasEqualShape( x, {} ); // $ExpectError
	hasEqualShape( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	hasEqualShape(); // $ExpectError
	hasEqualShape( x ); // $ExpectError
	hasEqualShape( x, x, {} ); // $ExpectError
}
