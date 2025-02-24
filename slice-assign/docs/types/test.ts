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
import zeros = require( './../../../zeros' );
import MultiSlice = require( '@stdlib/slice/multi' );
import sliceAssign = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = new MultiSlice( null, null );

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s ); // $ExpectType uint8cndarray

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s ); // $ExpectType uint8cndarray

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s, { 'strict': false } ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s, { 'strict': false } ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s, { 'strict': false } ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s, { 'strict': false } ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s, { 'strict': false } ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s, { 'strict': false } ); // $ExpectType uint8cndarray

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s, { 'strict': false } ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s, { 'strict': false } ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s, { 'strict': false } ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s, { 'strict': false } ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s, { 'strict': false } ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s, { 'strict': false } ); // $ExpectType uint8cndarray

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s, { 'strict': true } ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s, { 'strict': true } ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s, { 'strict': true } ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s, { 'strict': true } ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s, { 'strict': true } ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s, { 'strict': true } ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s, { 'strict': true } ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s, { 'strict': true } ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s, { 'strict': true } ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s, { 'strict': true } ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s, { 'strict': true } ); // $ExpectType uint8cndarray

	sliceAssign( zeros( sh ), empty( 'float64', sh, order ), s, { 'strict': true } ); // $ExpectType float64ndarray
	sliceAssign( zeros( sh ), empty( 'float32', sh, order ), s, { 'strict': true } ); // $ExpectType float32ndarray
	sliceAssign( zeros( sh ), empty( 'complex128', sh, order ), s, { 'strict': true } ); // $ExpectType complex128ndarray
	sliceAssign( zeros( sh ), empty( 'complex64', sh, order ), s, { 'strict': true } ); // $ExpectType complex64ndarray
	sliceAssign( zeros( sh ), empty( 'int32', sh, order ), s, { 'strict': true } ); // $ExpectType int32ndarray
	sliceAssign( zeros( sh ), empty( 'int16', sh, order ), s, { 'strict': true } ); // $ExpectType int16ndarray
	sliceAssign( zeros( sh ), empty( 'int8', sh, order ), s, { 'strict': true } ); // $ExpectType int8ndarray
	sliceAssign( zeros( sh ), empty( 'uint32', sh, order ), s, { 'strict': true } ); // $ExpectType uint32ndarray
	sliceAssign( zeros( sh ), empty( 'uint16', sh, order ), s, { 'strict': true } ); // $ExpectType uint16ndarray
	sliceAssign( zeros( sh ), empty( 'uint8', sh, order ), s, { 'strict': true } ); // $ExpectType uint8ndarray
	sliceAssign( zeros( sh ), empty( 'uint8c', sh, order ), s, { 'strict': true } ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign( '10', y, s ); // $ExpectError
	sliceAssign( 10, y, s ); // $ExpectError
	sliceAssign( false, y, s ); // $ExpectError
	sliceAssign( true, y, s ); // $ExpectError
	sliceAssign( null, y, s ); // $ExpectError
	sliceAssign( [], y, s ); // $ExpectError
	sliceAssign( {}, y, s ); // $ExpectError
	sliceAssign( ( x: number ): number => y, y, s ); // $ExpectError

	sliceAssign( '10', y, s, {} ); // $ExpectError
	sliceAssign( 10, y, s, {} ); // $ExpectError
	sliceAssign( false, y, s, {} ); // $ExpectError
	sliceAssign( true, y, s, {} ); // $ExpectError
	sliceAssign( null, y, s, {} ); // $ExpectError
	sliceAssign( [], y, s, {} ); // $ExpectError
	sliceAssign( {}, y, s, {} ); // $ExpectError
	sliceAssign( ( x: number ): number => x, y, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ] );
	const s = new MultiSlice( null, null );

	sliceAssign( x, '10', s ); // $ExpectError
	sliceAssign( x, 10, s ); // $ExpectError
	sliceAssign( x, false, s ); // $ExpectError
	sliceAssign( x, true, s ); // $ExpectError
	sliceAssign( x, null, s ); // $ExpectError
	sliceAssign( x, [], s ); // $ExpectError
	sliceAssign( x, {}, s ); // $ExpectError
	sliceAssign( x, ( x: number ): number => x, s ); // $ExpectError

	sliceAssign( x, '10', s, {} ); // $ExpectError
	sliceAssign( x, 10, s, {} ); // $ExpectError
	sliceAssign( x, false, s, {} ); // $ExpectError
	sliceAssign( x, true, s, {} ); // $ExpectError
	sliceAssign( x, null, s, {} ); // $ExpectError
	sliceAssign( x, [], s, {} ); // $ExpectError
	sliceAssign( x, {}, s, {} ); // $ExpectError
	sliceAssign( x, ( x: number ): number => x, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid slice argument...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceAssign( x, y, null, '5' ); // $ExpectError
	sliceAssign( x, y, null, false ); // $ExpectError
	sliceAssign( x, y, null, true ); // $ExpectError
	sliceAssign( x, y, null, [ '5' ] ); // $ExpectError
	sliceAssign( x, y, null, ( x: number ): number => x ); // $ExpectError

	sliceAssign( x, y, null, 1, '5' ); // $ExpectError
	sliceAssign( x, y, null, 1, false ); // $ExpectError
	sliceAssign( x, y, null, 1, true ); // $ExpectError
	sliceAssign( x, y, null, 1, [ '5' ] ); // $ExpectError
	sliceAssign( x, y, null, 1, ( x: number ): number => x ); // $ExpectError

	sliceAssign( x, y, null, 1, undefined, '5' ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, false ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, true ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, [ '5' ] ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, ( x: number ): number => x ); // $ExpectError

	sliceAssign( x, y, null, '5', {} ); // $ExpectError
	sliceAssign( x, y, null, false, {} ); // $ExpectError
	sliceAssign( x, y, null, true, {} ); // $ExpectError
	sliceAssign( x, y, null, [ '5' ], {} ); // $ExpectError
	sliceAssign( x, y, null, ( x: number ): number => x, {} ); // $ExpectError

	sliceAssign( x, y, null, 1, '5', {} ); // $ExpectError
	sliceAssign( x, y, null, 1, false, {} ); // $ExpectError
	sliceAssign( x, y, null, 1, true, {} ); // $ExpectError
	sliceAssign( x, y, null, 1, [ '5' ], {} ); // $ExpectError
	sliceAssign( x, y, null, 1, ( x: number ): number => x, {} ); // $ExpectError

	sliceAssign( x, y, null, 1, undefined, '5', {} ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, false, {} ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, true, {} ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, [ '5' ], {} ); // $ExpectError
	sliceAssign( x, y, null, 1, undefined, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign( x, y, s, '5' ); // $ExpectError
	sliceAssign( x, y, s, 5 ); // $ExpectError
	sliceAssign( x, y, s, null ); // $ExpectError
	sliceAssign( x, y, s, true ); // $ExpectError
	sliceAssign( x, y, s, false ); // $ExpectError
	sliceAssign( x, y, s, [ '5' ] ); // $ExpectError
	sliceAssign( x, y, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign( x, y, s, { 'strict': '5' } ); // $ExpectError
	sliceAssign( x, y, s, { 'strict': 5 } ); // $ExpectError
	sliceAssign( x, y, s, { 'strict': null } ); // $ExpectError
	sliceAssign( x, y, s, { 'strict': [ '5' ] } ); // $ExpectError
	sliceAssign( x, y, s, { 'strict': {} } ); // $ExpectError
	sliceAssign( x, y, s, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const y = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	sliceAssign(); // $ExpectError
	sliceAssign( x ); // $ExpectError
	sliceAssign( x, y, s, {}, {} ); // $ExpectError
}
