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
import Slice = require( '@stdlib/slice/ctor' );
import sliceDimension = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = new Slice( null );

	sliceDimension( empty( 'float64', sh, order ), 1, s, false, false ); // $ExpectType float64ndarray
	sliceDimension( empty( 'float32', sh, order ), 1, s, false, false ); // $ExpectType float32ndarray
	sliceDimension( empty( 'complex128', sh, order ), 1, s, false, false ); // $ExpectType complex128ndarray
	sliceDimension( empty( 'complex64', sh, order ), 1, s, false, false ); // $ExpectType complex64ndarray
	sliceDimension( empty( 'int32', sh, order ), 1, s, false, false ); // $ExpectType int32ndarray
	sliceDimension( empty( 'int16', sh, order ), 1, s, false, false ); // $ExpectType int16ndarray
	sliceDimension( empty( 'int8', sh, order ), 1, s, false, false ); // $ExpectType int8ndarray
	sliceDimension( empty( 'uint32', sh, order ), 1, s, false, false ); // $ExpectType uint32ndarray
	sliceDimension( empty( 'uint16', sh, order ), 1, s, false, false ); // $ExpectType uint16ndarray
	sliceDimension( empty( 'uint8', sh, order ), 1, s, false, false ); // $ExpectType uint8ndarray
	sliceDimension( empty( 'uint8c', sh, order ), 1, s, false, false ); // $ExpectType uint8cndarray

	sliceDimension( empty( 'float64', sh, order ), 1, s, true, true ); // $ExpectType float64ndarray
	sliceDimension( empty( 'float32', sh, order ), 1, s, true, true ); // $ExpectType float32ndarray
	sliceDimension( empty( 'complex128', sh, order ), 1, s, true, true ); // $ExpectType complex128ndarray
	sliceDimension( empty( 'complex64', sh, order ), 1, s, true, true ); // $ExpectType complex64ndarray
	sliceDimension( empty( 'int32', sh, order ), 1, s, true, true ); // $ExpectType int32ndarray
	sliceDimension( empty( 'int16', sh, order ), 1, s, true, true ); // $ExpectType int16ndarray
	sliceDimension( empty( 'int8', sh, order ), 1, s, true, true ); // $ExpectType int8ndarray
	sliceDimension( empty( 'uint32', sh, order ), 1, s, true, true ); // $ExpectType uint32ndarray
	sliceDimension( empty( 'uint16', sh, order ), 1, s, true, true ); // $ExpectType uint16ndarray
	sliceDimension( empty( 'uint8', sh, order ), 1, s, true, true ); // $ExpectType uint8ndarray
	sliceDimension( empty( 'uint8c', sh, order ), 1, s, true, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = new Slice( null );

	sliceDimension( '10', 1, s, false, false ); // $ExpectError
	sliceDimension( 10, 1, s, false, false ); // $ExpectError
	sliceDimension( false, 1, s, false, false ); // $ExpectError
	sliceDimension( true, 1, s, false, false ); // $ExpectError
	sliceDimension( null, 1, s, false, false ); // $ExpectError
	sliceDimension( [], 1, s, false, false ); // $ExpectError
	sliceDimension( {}, 1, s, false, false ); // $ExpectError
	sliceDimension( ( x: number ): number => x, 1, s, false, false ); // $ExpectError

	sliceDimension( '10', 1, s, true, true ); // $ExpectError
	sliceDimension( 10, 1, s, true, true ); // $ExpectError
	sliceDimension( false, 1, s, true, true ); // $ExpectError
	sliceDimension( true, 1, s, true, true ); // $ExpectError
	sliceDimension( null, 1, s, true, true ); // $ExpectError
	sliceDimension( [], 1, s, true, true ); // $ExpectError
	sliceDimension( {}, 1, s, true, true ); // $ExpectError
	sliceDimension( ( x: number ): number => x, 1, s, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x, '5', s, false, false ); // $ExpectError
	sliceDimension( x, false, s, false, false ); // $ExpectError
	sliceDimension( x, true, s, false, false ); // $ExpectError
	sliceDimension( x, null, s, false, false ); // $ExpectError
	sliceDimension( x, undefined, s, false, false ); // $ExpectError
	sliceDimension( x, [ '5' ], s, false, false ); // $ExpectError
	sliceDimension( x, {}, s, false, false ); // $ExpectError
	sliceDimension( x, ( x: number ): number => x, s, false, false ); // $ExpectError

	sliceDimension( x, '5', s, true, true ); // $ExpectError
	sliceDimension( x, false, s, true, true ); // $ExpectError
	sliceDimension( x, true, s, true, true ); // $ExpectError
	sliceDimension( x, null, s, true, true ); // $ExpectError
	sliceDimension( x, undefined, s, true, true ); // $ExpectError
	sliceDimension( x, [ '5' ], s, true, true ); // $ExpectError
	sliceDimension( x, {}, s, true, true ); // $ExpectError
	sliceDimension( x, ( x: number ): number => x, s, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid slice argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceDimension( x, 1, '5', false, false ); // $ExpectError
	sliceDimension( x, 1, false, false, false ); // $ExpectError
	sliceDimension( x, 1, true, false, false ); // $ExpectError
	sliceDimension( x, 1, null, false, false ); // $ExpectError
	sliceDimension( x, 1, undefined, false, false ); // $ExpectError
	sliceDimension( x, 1, [ '5' ], false, false ); // $ExpectError
	sliceDimension( x, 1, {}, false, false ); // $ExpectError
	sliceDimension( x, 1, ( x: number ): number => x, false, false ); // $ExpectError

	sliceDimension( x, 1, '5', true, true ); // $ExpectError
	sliceDimension( x, 1, false, true, true ); // $ExpectError
	sliceDimension( x, 1, true, true, true ); // $ExpectError
	sliceDimension( x, 1, null, true, true ); // $ExpectError
	sliceDimension( x, 1, undefined, true, true ); // $ExpectError
	sliceDimension( x, 1, [ '5' ], true, true ); // $ExpectError
	sliceDimension( x, 1, {}, true, true ); // $ExpectError
	sliceDimension( x, 1, ( x: number ): number => x, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x, 1, s, '5', false ); // $ExpectError
	sliceDimension( x, 1, s, 5, false ); // $ExpectError
	sliceDimension( x, 1, s, null, false ); // $ExpectError
	sliceDimension( x, 1, s, undefined, false ); // $ExpectError
	sliceDimension( x, 1, s, [ '5' ], false ); // $ExpectError
	sliceDimension( x, 1, s, {}, false ); // $ExpectError
	sliceDimension( x, 1, s, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x, 1, s, false, '5' ); // $ExpectError
	sliceDimension( x, 1, s, false, 5 ); // $ExpectError
	sliceDimension( x, 1, s, false, null ); // $ExpectError
	sliceDimension( x, 1, s, false, undefined ); // $ExpectError
	sliceDimension( x, 1, s, false, [ '5' ] ); // $ExpectError
	sliceDimension( x, 1, s, false, {} ); // $ExpectError
	sliceDimension( x, 1, s, false, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new Slice( null );

	sliceDimension( x ); // $ExpectError
	sliceDimension( x, 1 ); // $ExpectError
	sliceDimension( x, 1, s ); // $ExpectError
	sliceDimension( x, 1, s, false ); // $ExpectError
	sliceDimension( x, 1, s, false, false, {} ); // $ExpectError
}
