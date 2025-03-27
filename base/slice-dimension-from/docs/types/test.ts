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
import sliceDimensionFrom = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = 0;

	sliceDimensionFrom( empty( 'float64', sh, order ), 1, s, false, false ); // $ExpectType float64ndarray
	sliceDimensionFrom( empty( 'float32', sh, order ), 1, s, false, false ); // $ExpectType float32ndarray
	sliceDimensionFrom( empty( 'complex128', sh, order ), 1, s, false, false ); // $ExpectType complex128ndarray
	sliceDimensionFrom( empty( 'complex64', sh, order ), 1, s, false, false ); // $ExpectType complex64ndarray
	sliceDimensionFrom( empty( 'int32', sh, order ), 1, s, false, false ); // $ExpectType int32ndarray
	sliceDimensionFrom( empty( 'int16', sh, order ), 1, s, false, false ); // $ExpectType int16ndarray
	sliceDimensionFrom( empty( 'int8', sh, order ), 1, s, false, false ); // $ExpectType int8ndarray
	sliceDimensionFrom( empty( 'uint32', sh, order ), 1, s, false, false ); // $ExpectType uint32ndarray
	sliceDimensionFrom( empty( 'uint16', sh, order ), 1, s, false, false ); // $ExpectType uint16ndarray
	sliceDimensionFrom( empty( 'uint8', sh, order ), 1, s, false, false ); // $ExpectType uint8ndarray
	sliceDimensionFrom( empty( 'uint8c', sh, order ), 1, s, false, false ); // $ExpectType uint8cndarray

	sliceDimensionFrom( empty( 'float64', sh, order ), 1, s, true, true ); // $ExpectType float64ndarray
	sliceDimensionFrom( empty( 'float32', sh, order ), 1, s, true, true ); // $ExpectType float32ndarray
	sliceDimensionFrom( empty( 'complex128', sh, order ), 1, s, true, true ); // $ExpectType complex128ndarray
	sliceDimensionFrom( empty( 'complex64', sh, order ), 1, s, true, true ); // $ExpectType complex64ndarray
	sliceDimensionFrom( empty( 'int32', sh, order ), 1, s, true, true ); // $ExpectType int32ndarray
	sliceDimensionFrom( empty( 'int16', sh, order ), 1, s, true, true ); // $ExpectType int16ndarray
	sliceDimensionFrom( empty( 'int8', sh, order ), 1, s, true, true ); // $ExpectType int8ndarray
	sliceDimensionFrom( empty( 'uint32', sh, order ), 1, s, true, true ); // $ExpectType uint32ndarray
	sliceDimensionFrom( empty( 'uint16', sh, order ), 1, s, true, true ); // $ExpectType uint16ndarray
	sliceDimensionFrom( empty( 'uint8', sh, order ), 1, s, true, true ); // $ExpectType uint8ndarray
	sliceDimensionFrom( empty( 'uint8c', sh, order ), 1, s, true, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = 0;

	sliceDimensionFrom( '10', 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( 10, 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( false, 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( true, 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( null, 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( [], 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( {}, 1, s, false, false ); // $ExpectError
	sliceDimensionFrom( ( x: number ): number => x, 1, s, false, false ); // $ExpectError

	sliceDimensionFrom( '10', 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( 10, 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( false, 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( true, 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( null, 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( [], 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( {}, 1, s, true, true ); // $ExpectError
	sliceDimensionFrom( ( x: number ): number => x, 1, s, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = 1;

	sliceDimensionFrom( x, '5', s, false, false ); // $ExpectError
	sliceDimensionFrom( x, false, s, false, false ); // $ExpectError
	sliceDimensionFrom( x, true, s, false, false ); // $ExpectError
	sliceDimensionFrom( x, null, s, false, false ); // $ExpectError
	sliceDimensionFrom( x, undefined, s, false, false ); // $ExpectError
	sliceDimensionFrom( x, [ '5' ], s, false, false ); // $ExpectError
	sliceDimensionFrom( x, {}, s, false, false ); // $ExpectError
	sliceDimensionFrom( x, ( x: number ): number => x, s, false, false ); // $ExpectError

	sliceDimensionFrom( x, '5', s, true, true ); // $ExpectError
	sliceDimensionFrom( x, false, s, true, true ); // $ExpectError
	sliceDimensionFrom( x, true, s, true, true ); // $ExpectError
	sliceDimensionFrom( x, null, s, true, true ); // $ExpectError
	sliceDimensionFrom( x, undefined, s, true, true ); // $ExpectError
	sliceDimensionFrom( x, [ '5' ], s, true, true ); // $ExpectError
	sliceDimensionFrom( x, {}, s, true, true ); // $ExpectError
	sliceDimensionFrom( x, ( x: number ): number => x, s, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceDimensionFrom( x, 1, '5', false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, false, false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, true, false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, null, false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, undefined, false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, [ '5' ], false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, {}, false, false ); // $ExpectError
	sliceDimensionFrom( x, 1, ( x: number ): number => x, 1, false, false ); // $ExpectError

	sliceDimensionFrom( x, 1, '5', true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, false, true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, true, true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, null, true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, undefined, true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, [ '5' ], true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, {}, true, true ); // $ExpectError
	sliceDimensionFrom( x, 1, ( x: number ): number => x, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = 0;

	sliceDimensionFrom( x, 1, s, '5', false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, 5, false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, null, false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, undefined, false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, [ '5' ], false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, {}, false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = 0;

	sliceDimensionFrom( x, 1, s, false, '5' ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, 5 ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, null ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, undefined ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, [ '5' ] ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, {} ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = 0;

	sliceDimensionFrom( x ); // $ExpectError
	sliceDimensionFrom( x, 1 ); // $ExpectError
	sliceDimensionFrom( x, 1, s ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false ); // $ExpectError
	sliceDimensionFrom( x, 1, s, false, false, {} ); // $ExpectError
}
