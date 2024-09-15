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
import fliplr = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	fliplr( empty( 'float64', sh, order ), false ); // $ExpectType float64ndarray
	fliplr( empty( 'float32', sh, order ), false ); // $ExpectType float32ndarray
	fliplr( empty( 'complex128', sh, order ), false ); // $ExpectType complex128ndarray
	fliplr( empty( 'complex64', sh, order ), false ); // $ExpectType complex64ndarray
	fliplr( empty( 'int32', sh, order ), false ); // $ExpectType int32ndarray
	fliplr( empty( 'int16', sh, order ), false ); // $ExpectType int16ndarray
	fliplr( empty( 'int8', sh, order ), false ); // $ExpectType int8ndarray
	fliplr( empty( 'uint32', sh, order ), false ); // $ExpectType uint32ndarray
	fliplr( empty( 'uint16', sh, order ), false ); // $ExpectType uint16ndarray
	fliplr( empty( 'uint8', sh, order ), false ); // $ExpectType uint8ndarray
	fliplr( empty( 'uint8c', sh, order ), false ); // $ExpectType uint8cndarray

	fliplr( empty( 'float64', sh, order ), true ); // $ExpectType float64ndarray
	fliplr( empty( 'float32', sh, order ), true ); // $ExpectType float32ndarray
	fliplr( empty( 'complex128', sh, order ), true ); // $ExpectType complex128ndarray
	fliplr( empty( 'complex64', sh, order ), true ); // $ExpectType complex64ndarray
	fliplr( empty( 'int32', sh, order ), true ); // $ExpectType int32ndarray
	fliplr( empty( 'int16', sh, order ), true ); // $ExpectType int16ndarray
	fliplr( empty( 'int8', sh, order ), true ); // $ExpectType int8ndarray
	fliplr( empty( 'uint32', sh, order ), true ); // $ExpectType uint32ndarray
	fliplr( empty( 'uint16', sh, order ), true ); // $ExpectType uint16ndarray
	fliplr( empty( 'uint8', sh, order ), true ); // $ExpectType uint8ndarray
	fliplr( empty( 'uint8c', sh, order ), true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	fliplr( '10', false ); // $ExpectError
	fliplr( 10, false ); // $ExpectError
	fliplr( false, false ); // $ExpectError
	fliplr( true, false ); // $ExpectError
	fliplr( null, false ); // $ExpectError
	fliplr( [], false ); // $ExpectError
	fliplr( {}, false ); // $ExpectError
	fliplr( ( x: number ): number => x, false ); // $ExpectError

	fliplr( '10', true ); // $ExpectError
	fliplr( 10, true ); // $ExpectError
	fliplr( false, true ); // $ExpectError
	fliplr( true, true ); // $ExpectError
	fliplr( null, true ); // $ExpectError
	fliplr( [], true ); // $ExpectError
	fliplr( {}, true ); // $ExpectError
	fliplr( ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	fliplr( x, '5' ); // $ExpectError
	fliplr( x, 5 ); // $ExpectError
	fliplr( x, null ); // $ExpectError
	fliplr( x, undefined ); // $ExpectError
	fliplr( x, [ '5' ] ); // $ExpectError
	fliplr( x, {} ); // $ExpectError
	fliplr( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	fliplr( x ); // $ExpectError
	fliplr( x, false, {} ); // $ExpectError
}
