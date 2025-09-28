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

import flattenShapeFrom = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	flattenShapeFrom( [ 3, 2, 1 ], 1 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument that is not an array-like object containing numbers...
{
	flattenShapeFrom( true, 1 ); // $ExpectError
	flattenShapeFrom( false, 1 ); // $ExpectError
	flattenShapeFrom( null, 1 ); // $ExpectError
	flattenShapeFrom( undefined, 1 ); // $ExpectError
	flattenShapeFrom( '5', 1 ); // $ExpectError
	flattenShapeFrom( [ '1', '2' ], 1 ); // $ExpectError
	flattenShapeFrom( {}, 1 ); // $ExpectError
	flattenShapeFrom( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	flattenShapeFrom( [ 2, 3 ], true ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], false ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], null ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], undefined ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], '5' ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], [ '1', '2' ] ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], {} ); // $ExpectError
	flattenShapeFrom( [ 2, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	flattenShapeFrom(); // $ExpectError
	flattenShapeFrom( [ 3, 2 ] ); // $ExpectError
	flattenShapeFrom( [ 3, 2 ], 1, 0 ); // $ExpectError
}
