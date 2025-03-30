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

import empty = require( './../../../../base/empty' );
import zeros = require( './../../../../zeros' );
import MultiSlice = require( '@stdlib/slice/multi' );
import sliceAssign = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = new MultiSlice( null, null );

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s, false ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s, false ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s, false ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s, false ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s, false ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s, false ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s, false ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s, false ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s, false ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s, false ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s, false ); // $ExpectType uint8cndarray

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s, true ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s, true ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s, true ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s, true ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s, true ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s, true ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s, true ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s, true ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s, true ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s, true ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign( '10', y, s, false ); // $ExpectError
	sliceAssign( 10, y, s, false ); // $ExpectError
	sliceAssign( false, y, s, false ); // $ExpectError
	sliceAssign( true, y, s, false ); // $ExpectError
	sliceAssign( null, y, s, false ); // $ExpectError
	sliceAssign( [], y, s, false ); // $ExpectError
	sliceAssign( {}, y, s, false ); // $ExpectError
	sliceAssign( ( x: number ): number => y, y, s, false ); // $ExpectError

	sliceAssign( '10', y, s, true ); // $ExpectError
	sliceAssign( 10, y, s, true ); // $ExpectError
	sliceAssign( false, y, s, true ); // $ExpectError
	sliceAssign( true, y, s, true ); // $ExpectError
	sliceAssign( null, y, s, true ); // $ExpectError
	sliceAssign( [], y, s, true ); // $ExpectError
	sliceAssign( {}, y, s, true ); // $ExpectError
	sliceAssign( ( x: number ): number => x, y, s, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const s = new MultiSlice( null, null );

	sliceAssign( x, '10', s, false ); // $ExpectError
	sliceAssign( x, 10, s, false ); // $ExpectError
	sliceAssign( x, false, s, false ); // $ExpectError
	sliceAssign( x, true, s, false ); // $ExpectError
	sliceAssign( x, null, s, false ); // $ExpectError
	sliceAssign( x, [], s, false ); // $ExpectError
	sliceAssign( x, {}, s, false ); // $ExpectError
	sliceAssign( x, ( x: number ): number => x, s, false ); // $ExpectError

	sliceAssign( x, '10', s, true ); // $ExpectError
	sliceAssign( x, 10, s, true ); // $ExpectError
	sliceAssign( x, false, s, true ); // $ExpectError
	sliceAssign( x, true, s, true ); // $ExpectError
	sliceAssign( x, null, s, true ); // $ExpectError
	sliceAssign( x, [], s, true ); // $ExpectError
	sliceAssign( x, {}, s, true ); // $ExpectError
	sliceAssign( x, ( x: number ): number => x, s, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a multi-slice object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceAssign( x, y, '5', false ); // $ExpectError
	sliceAssign( x, y, 5, false ); // $ExpectError
	sliceAssign( x, y, false, false ); // $ExpectError
	sliceAssign( x, y, true, false ); // $ExpectError
	sliceAssign( x, y, null, false ); // $ExpectError
	sliceAssign( x, y, undefined, false ); // $ExpectError
	sliceAssign( x, y, [ '5' ], false ); // $ExpectError
	sliceAssign( x, y, {}, false ); // $ExpectError
	sliceAssign( x, y, ( x: number ): number => x, false ); // $ExpectError

	sliceAssign( x, y, '5', true ); // $ExpectError
	sliceAssign( x, y, 5, true ); // $ExpectError
	sliceAssign( x, y, false, true ); // $ExpectError
	sliceAssign( x, y, true, true ); // $ExpectError
	sliceAssign( x, y, null, true ); // $ExpectError
	sliceAssign( x, y, undefined, true ); // $ExpectError
	sliceAssign( x, y, [ '5' ], true ); // $ExpectError
	sliceAssign( x, y, {}, true ); // $ExpectError
	sliceAssign( x, y, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign( x, y, s, '5' ); // $ExpectError
	sliceAssign( x, y, s, 5 ); // $ExpectError
	sliceAssign( x, y, s, null ); // $ExpectError
	sliceAssign( x, y, s, undefined ); // $ExpectError
	sliceAssign( x, y, s, [ '5' ] ); // $ExpectError
	sliceAssign( x, y, s, {} ); // $ExpectError
	sliceAssign( x, y, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign(); // $ExpectError
	sliceAssign( x ); // $ExpectError
	sliceAssign( x, y ); // $ExpectError
	sliceAssign( x, y, s ); // $ExpectError
	sliceAssign( x, y, s, false, {} ); // $ExpectError
}
