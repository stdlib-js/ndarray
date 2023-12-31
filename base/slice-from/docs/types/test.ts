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
import sliceFrom = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = [ 1, null ];

	sliceFrom( empty( 'float64', sh, order ), s, false, false ); // $ExpectType float64ndarray
	sliceFrom( empty( 'float32', sh, order ), s, false, false ); // $ExpectType float32ndarray
	sliceFrom( empty( 'complex128', sh, order ), s, false, false ); // $ExpectType complex128ndarray
	sliceFrom( empty( 'complex64', sh, order ), s, false, false ); // $ExpectType complex64ndarray
	sliceFrom( empty( 'int32', sh, order ), s, false, false ); // $ExpectType int32ndarray
	sliceFrom( empty( 'int16', sh, order ), s, false, false ); // $ExpectType int16ndarray
	sliceFrom( empty( 'int8', sh, order ), s, false, false ); // $ExpectType int8ndarray
	sliceFrom( empty( 'uint32', sh, order ), s, false, false ); // $ExpectType uint32ndarray
	sliceFrom( empty( 'uint16', sh, order ), s, false, false ); // $ExpectType uint16ndarray
	sliceFrom( empty( 'uint8', sh, order ), s, false, false ); // $ExpectType uint8ndarray
	sliceFrom( empty( 'uint8c', sh, order ), s, false, false ); // $ExpectType uint8cndarray

	sliceFrom( empty( 'float64', sh, order ), s, true, true ); // $ExpectType float64ndarray
	sliceFrom( empty( 'float32', sh, order ), s, true, true ); // $ExpectType float32ndarray
	sliceFrom( empty( 'complex128', sh, order ), s, true, true ); // $ExpectType complex128ndarray
	sliceFrom( empty( 'complex64', sh, order ), s, true, true ); // $ExpectType complex64ndarray
	sliceFrom( empty( 'int32', sh, order ), s, true, true ); // $ExpectType int32ndarray
	sliceFrom( empty( 'int16', sh, order ), s, true, true ); // $ExpectType int16ndarray
	sliceFrom( empty( 'int8', sh, order ), s, true, true ); // $ExpectType int8ndarray
	sliceFrom( empty( 'uint32', sh, order ), s, true, true ); // $ExpectType uint32ndarray
	sliceFrom( empty( 'uint16', sh, order ), s, true, true ); // $ExpectType uint16ndarray
	sliceFrom( empty( 'uint8', sh, order ), s, true, true ); // $ExpectType uint8ndarray
	sliceFrom( empty( 'uint8c', sh, order ), s, true, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = [ 1, null ];

	sliceFrom( '10', s, false, false ); // $ExpectError
	sliceFrom( 10, s, false, false ); // $ExpectError
	sliceFrom( false, s, false, false ); // $ExpectError
	sliceFrom( true, s, false, false ); // $ExpectError
	sliceFrom( null, s, false, false ); // $ExpectError
	sliceFrom( [], s, false, false ); // $ExpectError
	sliceFrom( {}, s, false, false ); // $ExpectError
	sliceFrom( ( x: number ): number => x, s, false, false ); // $ExpectError

	sliceFrom( '10', s, true, true ); // $ExpectError
	sliceFrom( 10, s, true, true ); // $ExpectError
	sliceFrom( false, s, true, true ); // $ExpectError
	sliceFrom( true, s, true, true ); // $ExpectError
	sliceFrom( null, s, true, true ); // $ExpectError
	sliceFrom( [], s, true, true ); // $ExpectError
	sliceFrom( {}, s, true, true ); // $ExpectError
	sliceFrom( ( x: number ): number => x, s, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of stop arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	sliceFrom( x, '5', false, false ); // $ExpectError
	sliceFrom( x, 5, false, false ); // $ExpectError
	sliceFrom( x, false, false, false ); // $ExpectError
	sliceFrom( x, true, false, false ); // $ExpectError
	sliceFrom( x, null, false, false ); // $ExpectError
	sliceFrom( x, undefined, false, false ); // $ExpectError
	sliceFrom( x, [ '5' ], false, false ); // $ExpectError
	sliceFrom( x, {}, false, false ); // $ExpectError
	sliceFrom( x, ( x: number ): number => x, false, false ); // $ExpectError

	sliceFrom( x, '5', true, true ); // $ExpectError
	sliceFrom( x, 5, true, true ); // $ExpectError
	sliceFrom( x, false, true, true ); // $ExpectError
	sliceFrom( x, true, true, true ); // $ExpectError
	sliceFrom( x, null, true, true ); // $ExpectError
	sliceFrom( x, undefined, true, true ); // $ExpectError
	sliceFrom( x, [ '5' ], true, true ); // $ExpectError
	sliceFrom( x, {}, true, true ); // $ExpectError
	sliceFrom( x, ( x: number ): number => x, true, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceFrom( x, s, '5', false ); // $ExpectError
	sliceFrom( x, s, 5, false ); // $ExpectError
	sliceFrom( x, s, null, false ); // $ExpectError
	sliceFrom( x, s, undefined, false ); // $ExpectError
	sliceFrom( x, s, [ '5' ], false ); // $ExpectError
	sliceFrom( x, s, {}, false ); // $ExpectError
	sliceFrom( x, s, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceFrom( x, s, false, '5' ); // $ExpectError
	sliceFrom( x, s, false, 5 ); // $ExpectError
	sliceFrom( x, s, false, null ); // $ExpectError
	sliceFrom( x, s, false, undefined ); // $ExpectError
	sliceFrom( x, s, false, [ '5' ] ); // $ExpectError
	sliceFrom( x, s, false, {} ); // $ExpectError
	sliceFrom( x, s, false, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = [ 1, null ];

	sliceFrom( x ); // $ExpectError
	sliceFrom( x, s ); // $ExpectError
	sliceFrom( x, s, false ); // $ExpectError
	sliceFrom( x, s, false, false, {} ); // $ExpectError
}
