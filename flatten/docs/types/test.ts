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

import zeros = require( './../../../base/zeros' );
import flatten = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ) ); // $ExpectType float64ndarray
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ) ); // $ExpectType complex128ndarray
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ) ); // $ExpectType genericndarray<number>

	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), {} ); // $ExpectType float64ndarray
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), {} ); // $ExpectType complex128ndarray
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray-like object...
{
	flatten( '5' ); // $ExpectError
	flatten( 5 ); // $ExpectError
	flatten( true ); // $ExpectError
	flatten( false ); // $ExpectError
	flatten( null ); // $ExpectError
	flatten( undefined ); // $ExpectError
	flatten( {} ); // $ExpectError
	flatten( [ 1 ] ); // $ExpectError
	flatten( ( x: number ): number => x ); // $ExpectError

	flatten( '5', {} ); // $ExpectError
	flatten( 5, {} ); // $ExpectError
	flatten( true, {} ); // $ExpectError
	flatten( false, {} ); // $ExpectError
	flatten( null, {} ); // $ExpectError
	flatten( undefined, {} ); // $ExpectError
	flatten( {}, {} ); // $ExpectError
	flatten( [ 1 ], {} ); // $ExpectError
	flatten( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), '5' ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), true ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), false ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), null ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), [ 1 ] ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x ); // $ExpectError

	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), '5' ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), true ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), false ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), null ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), [ 1 ] ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x ); // $ExpectError

	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), '5' ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), true ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), false ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), null ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), [ 1 ] ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with invalid `depth` option...
{
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'depth': '5' } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'depth': true } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'depth': false } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'depth': null } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'depth': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'depth': ( x: number ): number => x } ); // $ExpectError

	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'depth': '5' } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'depth': true } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'depth': false } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'depth': null } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'depth': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'depth': ( x: number ): number => x } ); // $ExpectError

	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'depth': '5' } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'depth': true } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'depth': false } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'depth': null } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'depth': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'depth': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with invalid `order` option...
{
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'order': '5' } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'order': true } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'order': false } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'order': null } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'order': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'order': ( x: number ): number => x } ); // $ExpectError

	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'order': '5' } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'order': true } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'order': false } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'order': null } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'order': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'order': ( x: number ): number => x } ); // $ExpectError

	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'order': '5' } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'order': true } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'order': false } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'order': null } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'order': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with invalid `dtype` option...
{
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'dtype': '5' } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'dtype': true } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'dtype': false } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'dtype': null } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'dtype': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), { 'dtype': ( x: number ): number => x } ); // $ExpectError

	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'dtype': '5' } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'dtype': true } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'dtype': false } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'dtype': null } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'dtype': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), { 'dtype': ( x: number ): number => x } ); // $ExpectError

	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'dtype': '5' } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'dtype': true } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'dtype': false } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'dtype': null } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'dtype': [ 1 ] } ); // $ExpectError
	flatten( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( 'float64', [ 2, 2, 2 ], 'row-major' );

	flatten(); // $ExpectError
	flatten( x, {}, {} ); // $ExpectError
}
