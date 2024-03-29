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
import sliceTo = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = [ 1, null ];

	sliceTo( empty( 'float64', sh, order ), s ); // $ExpectType float64ndarray
	sliceTo( empty( 'float32', sh, order ), s ); // $ExpectType float32ndarray
	sliceTo( empty( 'complex128', sh, order ), s ); // $ExpectType complex128ndarray
	sliceTo( empty( 'complex64', sh, order ), s ); // $ExpectType complex64ndarray
	sliceTo( empty( 'int32', sh, order ), s ); // $ExpectType int32ndarray
	sliceTo( empty( 'int16', sh, order ), s ); // $ExpectType int16ndarray
	sliceTo( empty( 'int8', sh, order ), s ); // $ExpectType int8ndarray
	sliceTo( empty( 'uint32', sh, order ), s ); // $ExpectType uint32ndarray
	sliceTo( empty( 'uint16', sh, order ), s ); // $ExpectType uint16ndarray
	sliceTo( empty( 'uint8', sh, order ), s ); // $ExpectType uint8ndarray
	sliceTo( empty( 'uint8c', sh, order ), s ); // $ExpectType uint8cndarray

	sliceTo( empty( 'float64', sh, order ), 1, null ); // $ExpectType float64ndarray
	sliceTo( empty( 'float32', sh, order ), 1, null ); // $ExpectType float32ndarray
	sliceTo( empty( 'complex128', sh, order ), 1, null ); // $ExpectType complex128ndarray
	sliceTo( empty( 'complex64', sh, order ), 1, null ); // $ExpectType complex64ndarray
	sliceTo( empty( 'int32', sh, order ), 1, null ); // $ExpectType int32ndarray
	sliceTo( empty( 'int16', sh, order ), 1, null ); // $ExpectType int16ndarray
	sliceTo( empty( 'int8', sh, order ), 1, null ); // $ExpectType int8ndarray
	sliceTo( empty( 'uint32', sh, order ), 1, null ); // $ExpectType uint32ndarray
	sliceTo( empty( 'uint16', sh, order ), 1, null ); // $ExpectType uint16ndarray
	sliceTo( empty( 'uint8', sh, order ), 1, null ); // $ExpectType uint8ndarray
	sliceTo( empty( 'uint8c', sh, order ), 1, null ); // $ExpectType uint8cndarray

	sliceTo( empty( 'float64', sh, order ), s, { 'strict': false } ); // $ExpectType float64ndarray
	sliceTo( empty( 'float32', sh, order ), s, { 'strict': false } ); // $ExpectType float32ndarray
	sliceTo( empty( 'complex128', sh, order ), s, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceTo( empty( 'complex64', sh, order ), s, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceTo( empty( 'int32', sh, order ), s, { 'strict': false } ); // $ExpectType int32ndarray
	sliceTo( empty( 'int16', sh, order ), s, { 'strict': false } ); // $ExpectType int16ndarray
	sliceTo( empty( 'int8', sh, order ), s, { 'strict': false } ); // $ExpectType int8ndarray
	sliceTo( empty( 'uint32', sh, order ), s, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceTo( empty( 'uint16', sh, order ), s, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceTo( empty( 'uint8', sh, order ), s, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceTo( empty( 'uint8c', sh, order ), s, { 'strict': false } ); // $ExpectType uint8cndarray

	sliceTo( empty( 'float64', sh, order ), 1, null, { 'strict': false } ); // $ExpectType float64ndarray
	sliceTo( empty( 'float32', sh, order ), 1, null, { 'strict': false } ); // $ExpectType float32ndarray
	sliceTo( empty( 'complex128', sh, order ), 1, null, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceTo( empty( 'complex64', sh, order ), 1, null, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceTo( empty( 'int32', sh, order ), 1, null, { 'strict': false } ); // $ExpectType int32ndarray
	sliceTo( empty( 'int16', sh, order ), 1, null, { 'strict': false } ); // $ExpectType int16ndarray
	sliceTo( empty( 'int8', sh, order ), 1, null, { 'strict': false } ); // $ExpectType int8ndarray
	sliceTo( empty( 'uint32', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceTo( empty( 'uint16', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceTo( empty( 'uint8', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceTo( empty( 'uint8c', sh, order ), 1, null, { 'strict': false } ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = [ 1, null ];

	sliceTo( '10', s ); // $ExpectError
	sliceTo( 10, s ); // $ExpectError
	sliceTo( false, s ); // $ExpectError
	sliceTo( true, s ); // $ExpectError
	sliceTo( null, s ); // $ExpectError
	sliceTo( [], s ); // $ExpectError
	sliceTo( {}, s ); // $ExpectError
	sliceTo( ( x: number ): number => x, s ); // $ExpectError

	sliceTo( '10', s, { 'strict': false } ); // $ExpectError
	sliceTo( 10, s, { 'strict': false } ); // $ExpectError
	sliceTo( false, s, { 'strict': false } ); // $ExpectError
	sliceTo( true, s, { 'strict': false } ); // $ExpectError
	sliceTo( null, s, { 'strict': false } ); // $ExpectError
	sliceTo( [], s, { 'strict': false } ); // $ExpectError
	sliceTo( {}, s, { 'strict': false } ); // $ExpectError
	sliceTo( ( x: number ): number => x, s, { 'strict': false } ); // $ExpectError

	sliceTo( '10', 1, null ); // $ExpectError
	sliceTo( 10, 1, null ); // $ExpectError
	sliceTo( false, 1, null ); // $ExpectError
	sliceTo( true, 1, null ); // $ExpectError
	sliceTo( null, 1, null ); // $ExpectError
	sliceTo( [], 1, null ); // $ExpectError
	sliceTo( {}, 1, null ); // $ExpectError
	sliceTo( ( x: number ): number => x, 1, null ); // $ExpectError

	sliceTo( '10', 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( 10, 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( false, 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( true, 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( null, 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( [], 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( {}, 1, null, { 'strict': false } ); // $ExpectError
	sliceTo( ( x: number ): number => x, 1, null, { 'strict': false } ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid stop argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceTo( x, '5' ); // $ExpectError
	sliceTo( x, false ); // $ExpectError
	sliceTo( x, true ); // $ExpectError
	sliceTo( x, [ '5' ] ); // $ExpectError
	sliceTo( x, ( x: number ): number => x ); // $ExpectError

	sliceTo( x, '5', { 'strict': false } ); // $ExpectError
	sliceTo( x, false, { 'strict': false } ); // $ExpectError
	sliceTo( x, true, { 'strict': false } ); // $ExpectError
	sliceTo( x, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceTo( x, ( x: number ): number => x, { 'strict': false } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid stop argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceTo( x, 1, '5' ); // $ExpectError
	sliceTo( x, 1, false ); // $ExpectError
	sliceTo( x, 1, true ); // $ExpectError
	sliceTo( x, 1, [ '5' ] ); // $ExpectError
	sliceTo( x, 1, ( x: number ): number => x ); // $ExpectError

	sliceTo( x, 1, '5', { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, false, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, true, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceTo( x, 1, null, '5' ); // $ExpectError
	sliceTo( x, 1, null, false ); // $ExpectError
	sliceTo( x, 1, null, true ); // $ExpectError
	sliceTo( x, 1, null, [ '5' ] ); // $ExpectError
	sliceTo( x, 1, null, ( x: number ): number => x ); // $ExpectError

	sliceTo( x, 1, null, '5', { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, false, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, true, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceTo( x, 1, null, undefined, '5' ); // $ExpectError
	sliceTo( x, 1, null, undefined, false ); // $ExpectError
	sliceTo( x, 1, null, undefined, true ); // $ExpectError
	sliceTo( x, 1, null, undefined, [ '5' ] ); // $ExpectError
	sliceTo( x, 1, null, undefined, ( x: number ): number => x ); // $ExpectError

	sliceTo( x, 1, null, undefined, '5', { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, false, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, true, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceTo( x, 1, null, undefined, -2, '5' ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, false ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, true ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, [ '5' ] ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, ( x: number ): number => x ); // $ExpectError

	sliceTo( x, 1, null, undefined, -2, '5', { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, false, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, true, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, ( x: number ): number => x, { 'strict': false } ); // $ExpectError

	sliceTo( x, 1, null, undefined, -2, 0, '5' ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, false ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, true ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, [ '5' ] ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, ( x: number ): number => x ); // $ExpectError

	sliceTo( x, 1, null, undefined, -2, 0, '5', { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, false, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, true, { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, [ '5' ], { 'strict': false } ); // $ExpectError
	sliceTo( x, 1, null, undefined, -2, 0, ( x: number ): number => x, { 'strict': false } ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceTo( x, s, '5' ); // $ExpectError
	sliceTo( x, s, 5 ); // $ExpectError
	sliceTo( x, s, true ); // $ExpectError
	sliceTo( x, s, false ); // $ExpectError
	sliceTo( x, s, null ); // $ExpectError
	sliceTo( x, s, [ '5' ] ); // $ExpectError
	sliceTo( x, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceTo( x, s, { 'strict': '5' } ); // $ExpectError
	sliceTo( x, s, { 'strict': 5 } ); // $ExpectError
	sliceTo( x, s, { 'strict': null } ); // $ExpectError
	sliceTo( x, s, { 'strict': [ '5' ] } ); // $ExpectError
	sliceTo( x, s, { 'strict': {} } ); // $ExpectError
	sliceTo( x, s, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceTo(); // $ExpectError
	sliceTo( x, s, {}, {} ); // $ExpectError
}
