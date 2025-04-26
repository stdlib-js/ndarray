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
import reverseDimension = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	reverseDimension( empty( 'float64', sh, order ), 0, false ); // $ExpectType float64ndarray
	reverseDimension( empty( 'float32', sh, order ), 0, false ); // $ExpectType float32ndarray
	reverseDimension( empty( 'complex128', sh, order ), 0, false ); // $ExpectType complex128ndarray
	reverseDimension( empty( 'complex64', sh, order ), 0, false ); // $ExpectType complex64ndarray
	reverseDimension( empty( 'int32', sh, order ), 0, false ); // $ExpectType int32ndarray
	reverseDimension( empty( 'int16', sh, order ), 0, false ); // $ExpectType int16ndarray
	reverseDimension( empty( 'int8', sh, order ), 0, false ); // $ExpectType int8ndarray
	reverseDimension( empty( 'uint32', sh, order ), 0, false ); // $ExpectType uint32ndarray
	reverseDimension( empty( 'uint16', sh, order ), 0, false ); // $ExpectType uint16ndarray
	reverseDimension( empty( 'uint8', sh, order ), 0, false ); // $ExpectType uint8ndarray
	reverseDimension( empty( 'uint8c', sh, order ), 0, false ); // $ExpectType uint8cndarray

	reverseDimension( empty( 'float64', sh, order ), 0, true ); // $ExpectType float64ndarray
	reverseDimension( empty( 'float32', sh, order ), 0, true ); // $ExpectType float32ndarray
	reverseDimension( empty( 'complex128', sh, order ), 0, true ); // $ExpectType complex128ndarray
	reverseDimension( empty( 'complex64', sh, order ), 0, true ); // $ExpectType complex64ndarray
	reverseDimension( empty( 'int32', sh, order ), 0, true ); // $ExpectType int32ndarray
	reverseDimension( empty( 'int16', sh, order ), 0, true ); // $ExpectType int16ndarray
	reverseDimension( empty( 'int8', sh, order ), 0, true ); // $ExpectType int8ndarray
	reverseDimension( empty( 'uint32', sh, order ), 0, true ); // $ExpectType uint32ndarray
	reverseDimension( empty( 'uint16', sh, order ), 0, true ); // $ExpectType uint16ndarray
	reverseDimension( empty( 'uint8', sh, order ), 0, true ); // $ExpectType uint8ndarray
	reverseDimension( empty( 'uint8c', sh, order ), 0, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	reverseDimension( '10', 0, false ); // $ExpectError
	reverseDimension( 10, 0, false ); // $ExpectError
	reverseDimension( false, 0, false ); // $ExpectError
	reverseDimension( true, 0, false ); // $ExpectError
	reverseDimension( null, 0, false ); // $ExpectError
	reverseDimension( [], 0, false ); // $ExpectError
	reverseDimension( {}, 0, false ); // $ExpectError
	reverseDimension( ( x: number ): number => x, 0, false ); // $ExpectError

	reverseDimension( '10', 0, true ); // $ExpectError
	reverseDimension( 10, 0, true ); // $ExpectError
	reverseDimension( false, 0, true ); // $ExpectError
	reverseDimension( true, 0, true ); // $ExpectError
	reverseDimension( null, 0, true ); // $ExpectError
	reverseDimension( [], 0, true ); // $ExpectError
	reverseDimension( {}, 0, true ); // $ExpectError
	reverseDimension( ( x: number ): number => x, 0, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	reverseDimension( x, '5', false ); // $ExpectError
	reverseDimension( x, true, false ); // $ExpectError
	reverseDimension( x, false, false ); // $ExpectError
	reverseDimension( x, null, false ); // $ExpectError
	reverseDimension( x, undefined, false ); // $ExpectError
	reverseDimension( x, [ '5' ], false ); // $ExpectError
	reverseDimension( x, {}, false ); // $ExpectError
	reverseDimension( x, ( x: number ): number => x, false ); // $ExpectError

	reverseDimension( x, '5', true ); // $ExpectError
	reverseDimension( x, true, true ); // $ExpectError
	reverseDimension( x, false, true ); // $ExpectError
	reverseDimension( x, null, true ); // $ExpectError
	reverseDimension( x, undefined, true ); // $ExpectError
	reverseDimension( x, [ '5' ], true ); // $ExpectError
	reverseDimension( x, {}, true ); // $ExpectError
	reverseDimension( x, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	reverseDimension( x, 0, '5' ); // $ExpectError
	reverseDimension( x, 0, 5 ); // $ExpectError
	reverseDimension( x, 0, null ); // $ExpectError
	reverseDimension( x, 0, undefined ); // $ExpectError
	reverseDimension( x, 0, [ '5' ] ); // $ExpectError
	reverseDimension( x, 0, {} ); // $ExpectError
	reverseDimension( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	reverseDimension( x ); // $ExpectError
	reverseDimension( x, 0 ); // $ExpectError
	reverseDimension( x, 0, false, {} ); // $ExpectError
}
