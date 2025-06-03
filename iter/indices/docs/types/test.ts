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
import nditerIndices = require( './index' );


// TESTS //

// The function returns an iterator...
{
	const x = zeros( [ 2, 2 ] );

	nditerIndices( x.shape ); // $ExpectType Iterator<number[]>
	nditerIndices( x.shape, {} ); // $ExpectType Iterator<number[]>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray shape...
{
	nditerIndices( '123' ); // $ExpectError
	nditerIndices( 123 );  // $ExpectError
	nditerIndices( true ); // $ExpectError
	nditerIndices( false ); // $ExpectError
	nditerIndices( null ); // $ExpectError
	nditerIndices( undefined ); // $ExpectError
	nditerIndices( {} ); // $ExpectError
	nditerIndices( ( x: number ): number => x ); // $ExpectError

	nditerIndices( '123', {} ); // $ExpectError
	nditerIndices( 123, {} );  // $ExpectError
	nditerIndices( true, {} ); // $ExpectError
	nditerIndices( false, {} ); // $ExpectError
	nditerIndices( null, {} ); // $ExpectError
	nditerIndices( undefined, {} ); // $ExpectError
	nditerIndices( {}, {} ); // $ExpectError
	nditerIndices( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );

	nditerIndices( x.shape, 'abc' ); // $ExpectError
	nditerIndices( x.shape, 123 ); // $ExpectError
	nditerIndices( x.shape, true ); // $ExpectError
	nditerIndices( x.shape, false ); // $ExpectError
	nditerIndices( x.shape, null ); // $ExpectError
	nditerIndices( x.shape, [] ); // $ExpectError
	nditerIndices( x.shape, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `order` option which is valid order...
{
	const x = zeros( [ 2, 2 ] );

	nditerIndices( x.shape, { 'order': 'abc' } ); // $ExpectError
	nditerIndices( x.shape, { 'order': 123 } ); // $ExpectError
	nditerIndices( x.shape, { 'order': null } ); // $ExpectError
	nditerIndices( x.shape, { 'order': true } ); // $ExpectError
	nditerIndices( x.shape, { 'order': false } ); // $ExpectError
	nditerIndices( x.shape, { 'order': [] } ); // $ExpectError
	nditerIndices( x.shape, { 'order': {} } ); // $ExpectError
	nditerIndices( x.shape, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );

	nditerIndices(); // $ExpectError
	nditerIndices( x.shape, {}, {} ); // $ExpectError
}
