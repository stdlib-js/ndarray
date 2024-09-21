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
import nditerRows = require( './../../../../iter/rows' );
import nditer2arrayEach = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = nditerRows( zeros( [ 2, 2 ] ) );

	nditer2arrayEach( x ); // $ExpectType Iterator<unknown[]>
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	nditer2arrayEach( 123 );  // $ExpectError
	nditer2arrayEach( true ); // $ExpectError
	nditer2arrayEach( false ); // $ExpectError
	nditer2arrayEach( null ); // $ExpectError
	nditer2arrayEach( undefined ); // $ExpectError
	nditer2arrayEach( {} ); // $ExpectError
	nditer2arrayEach( [] ); // $ExpectError
	nditer2arrayEach( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nditer2arrayEach(); // $ExpectError
	nditer2arrayEach( nditerRows( zeros( [ 2, 2 ] ) ), {} ); // $ExpectError
}
