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
import sliceTo = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = [ 1, null ];

	sliceTo( empty( 'float64', sh, order ), s, false, false ); // $ExpectType float64ndarray
	sliceTo( empty( 'float32', sh, order ), s, false, false ); // $ExpectType float32ndarray
	sliceTo( empty( 'complex128', sh, order ), s, false, false ); // $ExpectType complex128ndarray
	sliceTo( empty( 'complex64', sh, order ), s, false, false ); // $ExpectType complex64ndarray
	sliceTo( empty( 'int32', sh, order ), s, false, false ); // $ExpectType int32ndarray
	sliceTo( empty( 'int16', sh, order ), s, false, false ); // $ExpectType int16ndarray
	sliceTo( empty( 'int8', sh, order ), s, false, false ); // $ExpectType int8ndarray
	sliceTo( empty( 'uint32', sh, order ), s, false, false ); // $ExpectType uint32ndarray
	sliceTo( empty( 'uint16', sh, order ), s, false, false ); // $ExpectType uint16ndarray
	sliceTo( empty( 'uint8', sh, order ), s, false, false ); // $ExpectType uint8ndarray
	sliceTo( empty( 'uint8c', sh, order ), s, false, false ); // $ExpectType uint8cndarray

	sliceTo( empty( 'float64', sh, order ), s, true, true ); // $ExpectType float64ndarray
	sliceTo( empty( 'float32', sh, order ), s, true, true ); // $ExpectType float32ndarray
	sliceTo( empty( 'complex128', sh, order ), s, true, true ); // $ExpectType complex128ndarray
	sliceTo( empty( 'complex64', sh, order ), s, true, true ); // $ExpectType complex64ndarray
	sliceTo( empty( 'int32', sh, order ), s, true, true ); // $ExpectType int32ndarray
	sliceTo( empty( 'int16', sh, order ), s, true, true ); // $ExpectType int16ndarray
	sliceTo( empty( 'int8', sh, order ), s, true, true ); // $ExpectType int8ndarray
	sliceTo( empty( 'uint32', sh, order ), s, true, true ); // $ExpectType uint32ndarray
	sliceTo( empty( 'uint16', sh, order ), s, true, true ); // $ExpectType uint16ndarray
	sliceTo( empty( 'uint8', sh, order ), s, true, true ); // $ExpectType uint8ndarray
	sliceTo( empty( 'uint8c', sh, order ), s, true, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = [ 1, null ];

	sliceTo( '10', s, false, false ); // $ExpectError
	sliceTo( 10, s, false, false ); // $ExpectError
	sliceTo( false, s, false, false ); // $ExpectError
	sliceTo( true, s, false, false ); // $ExpectError
	sliceTo( null, s, false, false ); // $ExpectError
	sliceTo( [], s, false, false ); // $ExpectError
	sliceTo( {}, s, false, false ); // $ExpectError
	sliceTo( ( x: number ): number => x, s, false, false ); // $ExpectError

	sliceTo( '10', s, true, true ); // $ExpectError
	sliceTo( 10, s, true, true ); // $ExpectError
	sliceTo( false, s, true, true ); // $ExpectError
	sliceTo( true, s, true, true ); // $ExpectError
	sliceTo( null, s, true, true ); // $ExpectError
	sliceTo( [], s, true, true ); // $ExpectError
	sliceTo( {}, s, true, true ); // $ExpectError
	sliceTo( ( x: number ): number => x, s, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of stop arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceTo( x, '5', false, false ); // $ExpectError
	sliceTo( x, 5, false, false ); // $ExpectError
	sliceTo( x, false, false, false ); // $ExpectError
	sliceTo( x, true, false, false ); // $ExpectError
	sliceTo( x, null, false, false ); // $ExpectError
	sliceTo( x, undefined, false, false ); // $ExpectError
	sliceTo( x, [ '5' ], false, false ); // $ExpectError
	sliceTo( x, {}, false, false ); // $ExpectError
	sliceTo( x, ( x: number ): number => x, false, false ); // $ExpectError

	sliceTo( x, '5', true, true ); // $ExpectError
	sliceTo( x, 5, true, true ); // $ExpectError
	sliceTo( x, false, true, true ); // $ExpectError
	sliceTo( x, true, true, true ); // $ExpectError
	sliceTo( x, null, true, true ); // $ExpectError
	sliceTo( x, undefined, true, true ); // $ExpectError
	sliceTo( x, [ '5' ], true, true ); // $ExpectError
	sliceTo( x, {}, true, true ); // $ExpectError
	sliceTo( x, ( x: number ): number => x, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceTo( x, s, '5', false ); // $ExpectError
	sliceTo( x, s, 5, false ); // $ExpectError
	sliceTo( x, s, null, false ); // $ExpectError
	sliceTo( x, s, undefined, false ); // $ExpectError
	sliceTo( x, s, [ '5' ], false ); // $ExpectError
	sliceTo( x, s, {}, false ); // $ExpectError
	sliceTo( x, s, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceTo( x, s, false, '5' ); // $ExpectError
	sliceTo( x, s, false, 5 ); // $ExpectError
	sliceTo( x, s, false, null ); // $ExpectError
	sliceTo( x, s, false, undefined ); // $ExpectError
	sliceTo( x, s, false, [ '5' ] ); // $ExpectError
	sliceTo( x, s, false, {} ); // $ExpectError
	sliceTo( x, s, false, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceTo( x ); // $ExpectError
	sliceTo( x, s ); // $ExpectError
	sliceTo( x, s, false ); // $ExpectError
	sliceTo( x, s, false, false, {} ); // $ExpectError
}
