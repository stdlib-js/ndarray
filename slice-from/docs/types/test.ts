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

import empty = require( './../../../base/empty' );
import sliceFrom = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = [ 1, null ];

	sliceFrom( empty( 'float64', sh, order ), s ); // $ExpectType float64ndarray
	sliceFrom( empty( 'float32', sh, order ), s ); // $ExpectType float32ndarray
	sliceFrom( empty( 'complex128', sh, order ), s ); // $ExpectType complex128ndarray
	sliceFrom( empty( 'complex64', sh, order ), s ); // $ExpectType complex64ndarray
	sliceFrom( empty( 'int32', sh, order ), s ); // $ExpectType int32ndarray
	sliceFrom( empty( 'int16', sh, order ), s ); // $ExpectType int16ndarray
	sliceFrom( empty( 'int8', sh, order ), s ); // $ExpectType int8ndarray
	sliceFrom( empty( 'uint32', sh, order ), s ); // $ExpectType uint32ndarray
	sliceFrom( empty( 'uint16', sh, order ), s ); // $ExpectType uint16ndarray
	sliceFrom( empty( 'uint8', sh, order ), s ); // $ExpectType uint8ndarray
	sliceFrom( empty( 'uint8c', sh, order ), s ); // $ExpectType uint8cndarray

	sliceFrom( empty( 'float64', sh, order ), 1, null ); // $ExpectType float64ndarray
	sliceFrom( empty( 'float32', sh, order ), 1, null ); // $ExpectType float32ndarray
	sliceFrom( empty( 'complex128', sh, order ), 1, null ); // $ExpectType complex128ndarray
	sliceFrom( empty( 'complex64', sh, order ), 1, null ); // $ExpectType complex64ndarray
	sliceFrom( empty( 'int32', sh, order ), 1, null ); // $ExpectType int32ndarray
	sliceFrom( empty( 'int16', sh, order ), 1, null ); // $ExpectType int16ndarray
	sliceFrom( empty( 'int8', sh, order ), 1, null ); // $ExpectType int8ndarray
	sliceFrom( empty( 'uint32', sh, order ), 1, null ); // $ExpectType uint32ndarray
	sliceFrom( empty( 'uint16', sh, order ), 1, null ); // $ExpectType uint16ndarray
	sliceFrom( empty( 'uint8', sh, order ), 1, null ); // $ExpectType uint8ndarray
	sliceFrom( empty( 'uint8c', sh, order ), 1, null ); // $ExpectType uint8cndarray

	sliceFrom( empty( 'float64', sh, order ), s, { 'strict': false } ); // $ExpectType float64ndarray
	sliceFrom( empty( 'float32', sh, order ), s, { 'strict': false } ); // $ExpectType float32ndarray
	sliceFrom( empty( 'complex128', sh, order ), s, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceFrom( empty( 'complex64', sh, order ), s, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceFrom( empty( 'int32', sh, order ), s, { 'strict': false } ); // $ExpectType int32ndarray
	sliceFrom( empty( 'int16', sh, order ), s, { 'strict': false } ); // $ExpectType int16ndarray
	sliceFrom( empty( 'int8', sh, order ), s, { 'strict': false } ); // $ExpectType int8ndarray
	sliceFrom( empty( 'uint32', sh, order ), s, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceFrom( empty( 'uint16', sh, order ), s, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceFrom( empty( 'uint8', sh, order ), s, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceFrom( empty( 'uint8c', sh, order ), s, { 'strict': false } ); // $ExpectType uint8cndarray

	sliceFrom( empty( 'float64', sh, order ), 1, null, { 'strict': false } ); // $ExpectType float64ndarray
	sliceFrom( empty( 'float32', sh, order ), 1, null, { 'strict': false } ); // $ExpectType float32ndarray
	sliceFrom( empty( 'complex128', sh, order ), 1, null, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceFrom( empty( 'complex64', sh, order ), 1, null, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceFrom( empty( 'int32', sh, order ), 1, null, { 'strict': false } ); // $ExpectType int32ndarray
	sliceFrom( empty( 'int16', sh, order ), 1, null, { 'strict': false } ); // $ExpectType int16ndarray
	sliceFrom( empty( 'int8', sh, order ), 1, null, { 'strict': false } ); // $ExpectType int8ndarray
	sliceFrom( empty( 'uint32', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceFrom( empty( 'uint16', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceFrom( empty( 'uint8', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceFrom( empty( 'uint8c', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = [ 1, null ];

	sliceFrom( '10', s ); // $ExpectError
	sliceFrom( 10, s ); // $ExpectError
	sliceFrom( false, s ); // $ExpectError
	sliceFrom( true, s ); // $ExpectError
	sliceFrom( null, s ); // $ExpectError
	sliceFrom( [], s ); // $ExpectError
	sliceFrom( {}, s ); // $ExpectError
	sliceFrom( ( x: number ): number => x, s ); // $ExpectError

	sliceFrom( '10', 1, null ); // $ExpectError
	sliceFrom( 10, 1, null ); // $ExpectError
	sliceFrom( false, 1, null ); // $ExpectError
	sliceFrom( true, 1, null ); // $ExpectError
	sliceFrom( null, 1, null ); // $ExpectError
	sliceFrom( [], 1, null ); // $ExpectError
	sliceFrom( {}, 1, null ); // $ExpectError
	sliceFrom( ( x: number ): number => x, 1, null ); // $ExpectError

	sliceFrom( '10', s, { 'strict': false } ); // $ExpectError
	sliceFrom( 10, s, { 'strict': false } ); // $ExpectError
	sliceFrom( false, s, { 'strict': false } ); // $ExpectError
	sliceFrom( true, s, { 'strict': false } ); // $ExpectError
	sliceFrom( null, s, { 'strict': false } ); // $ExpectError
	sliceFrom( [], s, { 'strict': false } ); // $ExpectError
	sliceFrom( {}, s, { 'strict': false } ); // $ExpectError
	sliceFrom( ( x: number ): number => x, s, { 'strict': false } ); // $ExpectError

	sliceFrom( '10', 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( 10, 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( false, 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( true, 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( null, 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( [], 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( {}, 1, null, { 'strict': false } ); // $ExpectError
	sliceFrom( ( x: number ): number => x, 1, null, { 'strict': false } ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid start argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceFrom( x, '5' ); // $ExpectError
	sliceFrom( x, false ); // $ExpectError
	sliceFrom( x, true ); // $ExpectError
	sliceFrom( x, [ '5' ] ); // $ExpectError
	sliceFrom( x, ( x: number ): number => x ); // $ExpectError

	sliceFrom( x, '5', { 'strict': false } ); // $ExpectError
	sliceFrom( x, false, { 'strict': false } ); // $ExpectError
	sliceFrom( x, true, { 'strict': false } ); // $ExpectError
	sliceFrom( x, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceFrom( x, ( x: number ): number => x, { 'strict': false } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid start argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceFrom( x, 1, '5' ); // $ExpectError
	sliceFrom( x, 1, false ); // $ExpectError
	sliceFrom( x, 1, true ); // $ExpectError
	sliceFrom( x, 1, [ '5' ] ); // $ExpectError
	sliceFrom( x, 1, ( x: number ): number => x ); // $ExpectError

	sliceFrom( x, 1, '5', { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, false, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, true, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceFrom( x, 1, null, '5' ); // $ExpectError
	sliceFrom( x, 1, null, false ); // $ExpectError
	sliceFrom( x, 1, null, true ); // $ExpectError
	sliceFrom( x, 1, null, [ '5' ] ); // $ExpectError
	sliceFrom( x, 1, null, ( x: number ): number => x ); // $ExpectError

	sliceFrom( x, 1, null, '5', { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, false, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, true, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceFrom( x, 1, null, undefined, '5' ); // $ExpectError
	sliceFrom( x, 1, null, undefined, false ); // $ExpectError
	sliceFrom( x, 1, null, undefined, true ); // $ExpectError
	sliceFrom( x, 1, null, undefined, [ '5' ] ); // $ExpectError
	sliceFrom( x, 1, null, undefined, ( x: number ): number => x ); // $ExpectError

	sliceFrom( x, 1, null, undefined, '5', { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, false, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, true, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceFrom( x, 1, null, undefined, -2, '5' ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, false ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, true ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, [ '5' ] ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, ( x: number ): number => x ); // $ExpectError

	sliceFrom( x, 1, null, undefined, -2, '5', { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, false, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, true, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceFrom( x, 1, null, undefined, -2, 0, '5' ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, false ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, true ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, [ '5' ] ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, ( x: number ): number => x ); // $ExpectError

	sliceFrom( x, 1, null, undefined, -2, 0, '5', { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, false, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, true, { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceFrom( x, 1, null, undefined, -2, 0, ( x: number ): number => x, { 'strict': false } ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceFrom( x, s, '5' ); // $ExpectError
	sliceFrom( x, s, 5 ); // $ExpectError
	sliceFrom( x, s, true ); // $ExpectError
	sliceFrom( x, s, false ); // $ExpectError
	sliceFrom( x, s, null ); // $ExpectError
	sliceFrom( x, s, [ '5' ] ); // $ExpectError
	sliceFrom( x, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceFrom( x, s, { 'strict': '5' } ); // $ExpectError
	sliceFrom( x, s, { 'strict': 5 } ); // $ExpectError
	sliceFrom( x, s, { 'strict': null } ); // $ExpectError
	sliceFrom( x, s, { 'strict': [ '5' ] } ); // $ExpectError
	sliceFrom( x, s, { 'strict': {} } ); // $ExpectError
	sliceFrom( x, s, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceFrom(); // $ExpectError
	sliceFrom( x, s, {}, {} ); // $ExpectError
}
