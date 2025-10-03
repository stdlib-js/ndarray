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
import flattenFrom = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0 ); // $ExpectType float64ndarray
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0 ); // $ExpectType complex128ndarray
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0 ); // $ExpectType genericndarray<number>

	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, {} ); // $ExpectType float64ndarray
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, {} ); // $ExpectType complex128ndarray
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, {} ); // $ExpectType genericndarray<number>

	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	flattenFrom( zeros( 'int32', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	flattenFrom( zeros( 'int32', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': 'generic' } ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray-like object...
{
	flattenFrom( '5', 0 ); // $ExpectError
	flattenFrom( 5, 0 ); // $ExpectError
	flattenFrom( true, 0 ); // $ExpectError
	flattenFrom( false, 0 ); // $ExpectError
	flattenFrom( null, 0 ); // $ExpectError
	flattenFrom( undefined, 0 ); // $ExpectError
	flattenFrom( {}, 0 ); // $ExpectError
	flattenFrom( [ 1 ], 0 ); // $ExpectError
	flattenFrom( ( x: number ): number => x, 0 ); // $ExpectError

	flattenFrom( '5', 0, {} ); // $ExpectError
	flattenFrom( 5, 0, {} ); // $ExpectError
	flattenFrom( true, 0, {} ); // $ExpectError
	flattenFrom( false, 0, {} ); // $ExpectError
	flattenFrom( null, 0, {} ); // $ExpectError
	flattenFrom( undefined, 0, {} ); // $ExpectError
	flattenFrom( {}, 0, {} ); // $ExpectError
	flattenFrom( [ 1 ], 0, {} ); // $ExpectError
	flattenFrom( ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an integer...
{
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), '5' ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), true ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), false ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), null ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), [ 1 ] ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x ); // $ExpectError

	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), '5' ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), true ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), false ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), null ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), [ 1 ] ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x ); // $ExpectError

	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), '5' ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), true ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), false ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), null ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), [ 1 ] ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x ); // $ExpectError

	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), '5', {} ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), true, {} ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), false, {} ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), null, {} ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), [ 1 ], {} ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x, {} ); // $ExpectError

	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), '5', {} ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), true, {} ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), false, {} ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), null, {} ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), [ 1 ], {} ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x, {} ); // $ExpectError

	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), '5', {} ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), true, {} ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), false, {} ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), null, {} ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), [ 1 ], {} ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), ( x: number ): number => x, {} ); // $ExpectError
}


// The compiler throws an error if the function is provided an options argument which is not an object...
{
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, '5' ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, true ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, false ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, null ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, [ 1 ] ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, ( x: number ): number => x ); // $ExpectError

	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, '5' ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, true ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, false ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, null ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, [ 1 ] ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, ( x: number ): number => x ); // $ExpectError

	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, '5' ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, true ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, false ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, null ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, [ 1 ] ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with an invalid `order` option...
{
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': '5' } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': true } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': false } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': null } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': [ 1 ] } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': ( x: number ): number => x } ); // $ExpectError

	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': '5' } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': true } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': false } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': null } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': [ 1 ] } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': ( x: number ): number => x } ); // $ExpectError

	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': '5' } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': true } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': false } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': null } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': [ 1 ] } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with an invalid `dtype` option...
{
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': '5' } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': true } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': false } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': null } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': [ 1 ] } ); // $ExpectError
	flattenFrom( zeros( 'float64', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': '5' } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': true } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': false } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': null } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': [ 1 ] } ); // $ExpectError
	flattenFrom( zeros( 'complex128', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': '5' } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': true } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': false } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': null } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': [ 1 ] } ); // $ExpectError
	flattenFrom( zeros( 'generic', [ 2, 2, 2 ], 'row-major' ), 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( 'float64', [ 2, 2, 2 ], 'row-major' );

	flattenFrom( x ); // $ExpectError
	flattenFrom( x, 0, {}, {} ); // $ExpectError
}
