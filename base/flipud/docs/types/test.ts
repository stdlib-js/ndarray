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
import flipud = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	flipud( empty( 'float64', sh, order ), false ); // $ExpectType float64ndarray
	flipud( empty( 'float32', sh, order ), false ); // $ExpectType float32ndarray
	flipud( empty( 'complex128', sh, order ), false ); // $ExpectType complex128ndarray
	flipud( empty( 'complex64', sh, order ), false ); // $ExpectType complex64ndarray
	flipud( empty( 'int32', sh, order ), false ); // $ExpectType int32ndarray
	flipud( empty( 'int16', sh, order ), false ); // $ExpectType int16ndarray
	flipud( empty( 'int8', sh, order ), false ); // $ExpectType int8ndarray
	flipud( empty( 'uint32', sh, order ), false ); // $ExpectType uint32ndarray
	flipud( empty( 'uint16', sh, order ), false ); // $ExpectType uint16ndarray
	flipud( empty( 'uint8', sh, order ), false ); // $ExpectType uint8ndarray
	flipud( empty( 'uint8c', sh, order ), false ); // $ExpectType uint8cndarray

	flipud( empty( 'float64', sh, order ), true ); // $ExpectType float64ndarray
	flipud( empty( 'float32', sh, order ), true ); // $ExpectType float32ndarray
	flipud( empty( 'complex128', sh, order ), true ); // $ExpectType complex128ndarray
	flipud( empty( 'complex64', sh, order ), true ); // $ExpectType complex64ndarray
	flipud( empty( 'int32', sh, order ), true ); // $ExpectType int32ndarray
	flipud( empty( 'int16', sh, order ), true ); // $ExpectType int16ndarray
	flipud( empty( 'int8', sh, order ), true ); // $ExpectType int8ndarray
	flipud( empty( 'uint32', sh, order ), true ); // $ExpectType uint32ndarray
	flipud( empty( 'uint16', sh, order ), true ); // $ExpectType uint16ndarray
	flipud( empty( 'uint8', sh, order ), true ); // $ExpectType uint8ndarray
	flipud( empty( 'uint8c', sh, order ), true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	flipud( '10', false ); // $ExpectError
	flipud( 10, false ); // $ExpectError
	flipud( false, false ); // $ExpectError
	flipud( true, false ); // $ExpectError
	flipud( null, false ); // $ExpectError
	flipud( [], false ); // $ExpectError
	flipud( {}, false ); // $ExpectError
	flipud( ( x: number ): number => x, false ); // $ExpectError

	flipud( '10', true ); // $ExpectError
	flipud( 10, true ); // $ExpectError
	flipud( false, true ); // $ExpectError
	flipud( true, true ); // $ExpectError
	flipud( null, true ); // $ExpectError
	flipud( [], true ); // $ExpectError
	flipud( {}, true ); // $ExpectError
	flipud( ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	flipud( x, '5' ); // $ExpectError
	flipud( x, 5 ); // $ExpectError
	flipud( x, null ); // $ExpectError
	flipud( x, undefined ); // $ExpectError
	flipud( x, [ '5' ] ); // $ExpectError
	flipud( x, {} ); // $ExpectError
	flipud( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	flipud( x ); // $ExpectError
	flipud( x, false, {} ); // $ExpectError
}
