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
import reverse = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];

	reverse( empty( 'float64', sh, order ), false ); // $ExpectType float64ndarray
	reverse( empty( 'float32', sh, order ), false ); // $ExpectType float32ndarray
	reverse( empty( 'complex128', sh, order ), false ); // $ExpectType complex128ndarray
	reverse( empty( 'complex64', sh, order ), false ); // $ExpectType complex64ndarray
	reverse( empty( 'int32', sh, order ), false ); // $ExpectType int32ndarray
	reverse( empty( 'int16', sh, order ), false ); // $ExpectType int16ndarray
	reverse( empty( 'int8', sh, order ), false ); // $ExpectType int8ndarray
	reverse( empty( 'uint32', sh, order ), false ); // $ExpectType uint32ndarray
	reverse( empty( 'uint16', sh, order ), false ); // $ExpectType uint16ndarray
	reverse( empty( 'uint8', sh, order ), false ); // $ExpectType uint8ndarray
	reverse( empty( 'uint8c', sh, order ), false ); // $ExpectType uint8cndarray
	reverse( empty( 'generic', sh, order ), false ); // $ExpectType genericndarray<number>

	reverse( empty( 'float64', sh, order ), true ); // $ExpectType float64ndarray
	reverse( empty( 'float32', sh, order ), true ); // $ExpectType float32ndarray
	reverse( empty( 'complex128', sh, order ), true ); // $ExpectType complex128ndarray
	reverse( empty( 'complex64', sh, order ), true ); // $ExpectType complex64ndarray
	reverse( empty( 'int32', sh, order ), true ); // $ExpectType int32ndarray
	reverse( empty( 'int16', sh, order ), true ); // $ExpectType int16ndarray
	reverse( empty( 'int8', sh, order ), true ); // $ExpectType int8ndarray
	reverse( empty( 'uint32', sh, order ), true ); // $ExpectType uint32ndarray
	reverse( empty( 'uint16', sh, order ), true ); // $ExpectType uint16ndarray
	reverse( empty( 'uint8', sh, order ), true ); // $ExpectType uint8ndarray
	reverse( empty( 'uint8c', sh, order ), true ); // $ExpectType uint8cndarray
	reverse( empty( 'generic', sh, order ), false ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	reverse( '10', false ); // $ExpectError
	reverse( 10, false ); // $ExpectError
	reverse( false, false ); // $ExpectError
	reverse( true, false ); // $ExpectError
	reverse( null, false ); // $ExpectError
	reverse( [], false ); // $ExpectError
	reverse( {}, false ); // $ExpectError
	reverse( ( x: number ): number => x, false ); // $ExpectError

	reverse( '10', true ); // $ExpectError
	reverse( 10, true ); // $ExpectError
	reverse( false, true ); // $ExpectError
	reverse( true, true ); // $ExpectError
	reverse( null, true ); // $ExpectError
	reverse( [], true ); // $ExpectError
	reverse( {}, true ); // $ExpectError
	reverse( ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	reverse( x, '5' ); // $ExpectError
	reverse( x, 5 ); // $ExpectError
	reverse( x, null ); // $ExpectError
	reverse( x, undefined ); // $ExpectError
	reverse( x, [ '5' ] ); // $ExpectError
	reverse( x, {} ); // $ExpectError
	reverse( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	reverse( x ); // $ExpectError
	reverse( x, false, {} ); // $ExpectError
}
