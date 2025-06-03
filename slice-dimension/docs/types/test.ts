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
import Slice = require( '@stdlib/slice/ctor' );
import sliceDimension = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = new Slice( null );

	sliceDimension( empty( 'float64', sh, order ), 1, s ); // $ExpectType float64ndarray
	sliceDimension( empty( 'float32', sh, order ), 1, s ); // $ExpectType float32ndarray
	sliceDimension( empty( 'complex128', sh, order ), 1, s ); // $ExpectType complex128ndarray
	sliceDimension( empty( 'complex64', sh, order ), 1, s ); // $ExpectType complex64ndarray
	sliceDimension( empty( 'int32', sh, order ), 1, s ); // $ExpectType int32ndarray
	sliceDimension( empty( 'int16', sh, order ), 1, s ); // $ExpectType int16ndarray
	sliceDimension( empty( 'int8', sh, order ), 1, s ); // $ExpectType int8ndarray
	sliceDimension( empty( 'uint32', sh, order ), 1, s ); // $ExpectType uint32ndarray
	sliceDimension( empty( 'uint16', sh, order ), 1, s ); // $ExpectType uint16ndarray
	sliceDimension( empty( 'uint8', sh, order ), 1, s ); // $ExpectType uint8ndarray
	sliceDimension( empty( 'uint8c', sh, order ), 1, s ); // $ExpectType uint8cndarray

	sliceDimension( empty( 'float64', sh, order ), 1, s, { 'strict': false } ); // $ExpectType float64ndarray
	sliceDimension( empty( 'float32', sh, order ), 1, s, { 'strict': false } ); // $ExpectType float32ndarray
	sliceDimension( empty( 'complex128', sh, order ), 1, s, { 'strict': false } ); // $ExpectType complex128ndarray
	sliceDimension( empty( 'complex64', sh, order ), 1, s, { 'strict': false } ); // $ExpectType complex64ndarray
	sliceDimension( empty( 'int32', sh, order ), 1, s, { 'strict': false } ); // $ExpectType int32ndarray
	sliceDimension( empty( 'int16', sh, order ), 1, s, { 'strict': false } ); // $ExpectType int16ndarray
	sliceDimension( empty( 'int8', sh, order ), 1, s, { 'strict': false } ); // $ExpectType int8ndarray
	sliceDimension( empty( 'uint32', sh, order ), 1, s, { 'strict': false } ); // $ExpectType uint32ndarray
	sliceDimension( empty( 'uint16', sh, order ), 1, s, { 'strict': false } ); // $ExpectType uint16ndarray
	sliceDimension( empty( 'uint8', sh, order ), 1, s, { 'strict': false } ); // $ExpectType uint8ndarray
	sliceDimension( empty( 'uint8c', sh, order ), 1, s, { 'strict': false } ); // $ExpectType uint8cndarray

	sliceDimension( empty( 'float64', sh, order ), 1, s, { 'strict': true } ); // $ExpectType float64ndarray
	sliceDimension( empty( 'float32', sh, order ), 1, s, { 'strict': true } ); // $ExpectType float32ndarray
	sliceDimension( empty( 'complex128', sh, order ), 1, s, { 'strict': true } ); // $ExpectType complex128ndarray
	sliceDimension( empty( 'complex64', sh, order ), 1, s, { 'strict': true } ); // $ExpectType complex64ndarray
	sliceDimension( empty( 'int32', sh, order ), 1, s, { 'strict': true } ); // $ExpectType int32ndarray
	sliceDimension( empty( 'int16', sh, order ), 1, s, { 'strict': true } ); // $ExpectType int16ndarray
	sliceDimension( empty( 'int8', sh, order ), 1, s, { 'strict': true } ); // $ExpectType int8ndarray
	sliceDimension( empty( 'uint32', sh, order ), 1, s, { 'strict': true } ); // $ExpectType uint32ndarray
	sliceDimension( empty( 'uint16', sh, order ), 1, s, { 'strict': true } ); // $ExpectType uint16ndarray
	sliceDimension( empty( 'uint8', sh, order ), 1, s, { 'strict': true } ); // $ExpectType uint8ndarray
	sliceDimension( empty( 'uint8c', sh, order ), 1, s, { 'strict': true } ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = new Slice( null );

	sliceDimension( '10', 1, s ); // $ExpectError
	sliceDimension( 10, 1, s ); // $ExpectError
	sliceDimension( false, 1, s ); // $ExpectError
	sliceDimension( true, 1, s ); // $ExpectError
	sliceDimension( null, 1, s ); // $ExpectError
	sliceDimension( [], 1, s ); // $ExpectError
	sliceDimension( {}, 1, s ); // $ExpectError
	sliceDimension( ( x: number ): number => x, 1, s ); // $ExpectError

	sliceDimension( '10', 1, s, {} ); // $ExpectError
	sliceDimension( 10, 1, s, {} ); // $ExpectError
	sliceDimension( false, 1, s, {} ); // $ExpectError
	sliceDimension( true, 1, s, {} ); // $ExpectError
	sliceDimension( null, 1, s, {} ); // $ExpectError
	sliceDimension( [], 1, s, {} ); // $ExpectError
	sliceDimension( {}, 1, s, {} ); // $ExpectError
	sliceDimension( ( x: number ): number => x, 1, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x, '5', s ); // $ExpectError
	sliceDimension( x, false, s ); // $ExpectError
	sliceDimension( x, true, s ); // $ExpectError
	sliceDimension( x, null, s ); // $ExpectError
	sliceDimension( x, undefined, s ); // $ExpectError
	sliceDimension( x, [ '5' ], s ); // $ExpectError
	sliceDimension( x, {}, s ); // $ExpectError
	sliceDimension( x, ( x: number ): number => x, s ); // $ExpectError

	sliceDimension( x, '5', s, {} ); // $ExpectError
	sliceDimension( x, false, s, {} ); // $ExpectError
	sliceDimension( x, true, s, {} ); // $ExpectError
	sliceDimension( x, null, s, {} ); // $ExpectError
	sliceDimension( x, undefined, s, {} ); // $ExpectError
	sliceDimension( x, [ '5' ], s, {} ); // $ExpectError
	sliceDimension( x, {}, s, {} ); // $ExpectError
	sliceDimension( x, ( x: number ): number => x, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid slice argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceDimension( x, 1, '5' ); // $ExpectError
	sliceDimension( x, 1, false ); // $ExpectError
	sliceDimension( x, 1, true ); // $ExpectError
	sliceDimension( x, 1, [ '5' ] ); // $ExpectError
	sliceDimension( x, 1, {} ); // $ExpectError
	sliceDimension( x, 1, ( x: number ): number => x ); // $ExpectError

	sliceDimension( x, 1, '5', {} ); // $ExpectError
	sliceDimension( x, 1, false, {} ); // $ExpectError
	sliceDimension( x, 1, true, {} ); // $ExpectError
	sliceDimension( x, 1, [ '5' ], {} ); // $ExpectError
	sliceDimension( x, 1, {}, {} ); // $ExpectError
	sliceDimension( x, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x, 1, s, '5' ); // $ExpectError
	sliceDimension( x, 1, s, 5 ); // $ExpectError
	sliceDimension( x, 1, s, true ); // $ExpectError
	sliceDimension( x, 1, s, false ); // $ExpectError
	sliceDimension( x, 1, s, null ); // $ExpectError
	sliceDimension( x, 1, s, [ '5' ] ); // $ExpectError
	sliceDimension( x, 1, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x, 1, s, { 'strict': '5' } ); // $ExpectError
	sliceDimension( x, 1, s, { 'strict': 5 } ); // $ExpectError
	sliceDimension( x, 1, s, { 'strict': null } ); // $ExpectError
	sliceDimension( x, 1, s, { 'strict': [ '5' ] } ); // $ExpectError
	sliceDimension( x, 1, s, { 'strict': {} } ); // $ExpectError
	sliceDimension( x, 1, s, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x ); // $ExpectError
	sliceDimension( x, 1 ); // $ExpectError
	sliceDimension( x, 1, s, {}, {} ); // $ExpectError
}
