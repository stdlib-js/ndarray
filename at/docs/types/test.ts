/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import at = require( './index' );


// TESTS //

// The function returns an ndarray element...
{
	const order = 'row-major';

	let sh: Array<number> = [];
	at( empty( 'float64', sh, order ) ); // $ExpectType number | void
	at( empty( 'float32', sh, order ) ); // $ExpectType number | void
	at( empty( 'complex128', sh, order ) ); // $ExpectType void | Complex128
	at( empty( 'complex64', sh, order ) ); // $ExpectType void | Complex64
	at( empty( 'int32', sh, order ) ); // $ExpectType number | void
	at( empty( 'int16', sh, order ) ); // $ExpectType number | void
	at( empty( 'int8', sh, order ) ); // $ExpectType number | void
	at( empty( 'uint32', sh, order ) ); // $ExpectType number | void
	at( empty( 'uint16', sh, order ) ); // $ExpectType number | void
	at( empty( 'uint8', sh, order ) ); // $ExpectType number | void
	at( empty( 'uint8c', sh, order ) ); // $ExpectType number | void

	sh = [ 2 ];
	at( empty( 'float64', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'float32', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'complex128', sh, order ), 0 ); // $ExpectType void | Complex128
	at( empty( 'complex64', sh, order ), 0 ); // $ExpectType void | Complex64
	at( empty( 'int32', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'int16', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'int8', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'uint32', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'uint16', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'uint8', sh, order ), 0 ); // $ExpectType number | void
	at( empty( 'uint8c', sh, order ), 0 ); // $ExpectType number | void

	sh = [ 2, 2 ];
	at( empty( 'float64', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'float32', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'complex128', sh, order ), 0, 0 ); // $ExpectType void | Complex128
	at( empty( 'complex64', sh, order ), 0, 0 ); // $ExpectType void | Complex64
	at( empty( 'int32', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'int16', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'int8', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'uint32', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'uint16', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'uint8', sh, order ), 0, 0 ); // $ExpectType number | void
	at( empty( 'uint8c', sh, order ), 0, 0 ); // $ExpectType number | void

	sh = [ 2, 2, 2 ];
	at( empty( 'float64', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'float32', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'complex128', sh, order ), 0, 0, 0 ); // $ExpectType void | Complex128
	at( empty( 'complex64', sh, order ), 0, 0, 0 ); // $ExpectType void | Complex64
	at( empty( 'int32', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'int16', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'int8', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'uint32', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'uint16', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'uint8', sh, order ), 0, 0, 0 ); // $ExpectType number | void
	at( empty( 'uint8c', sh, order ), 0, 0, 0 ); // $ExpectType number | void
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	at( '10' ); // $ExpectError
	at( 10 ); // $ExpectError
	at( false ); // $ExpectError
	at( true ); // $ExpectError
	at( null ); // $ExpectError
	at( [] ); // $ExpectError
	at( {} ); // $ExpectError
	at( ( x: number ): number => x ); // $ExpectError

	at( '10', 0 ); // $ExpectError
	at( 10, 0 ); // $ExpectError
	at( false, 0 ); // $ExpectError
	at( true, 0 ); // $ExpectError
	at( null, 0 ); // $ExpectError
	at( [], 0 ); // $ExpectError
	at( {}, 0 ); // $ExpectError
	at( ( x: number ): number => x, 0 ); // $ExpectError

	at( '10', 0, 0 ); // $ExpectError
	at( 10, 0, 0 ); // $ExpectError
	at( false, 0, 0 ); // $ExpectError
	at( true, 0, 0 ); // $ExpectError
	at( null, 0, 0 ); // $ExpectError
	at( [], 0, 0 ); // $ExpectError
	at( {}, 0, 0 ); // $ExpectError
	at( ( x: number ): number => x, 0, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid index argument...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	at( x, '5' ); // $ExpectError
	at( x, true ); // $ExpectError
	at( x, [ '5' ] ); // $ExpectError
	at( x, ( x: number ): number => x ); // $ExpectError

	at( x, 0, '5' ); // $ExpectError
	at( x, 0, true ); // $ExpectError
	at( x, 0, [ '5' ] ); // $ExpectError
	at( x, 0, ( x: number ): number => x ); // $ExpectError

	at( x, 0, 0, '5' ); // $ExpectError
	at( x, 0, 0, true ); // $ExpectError
	at( x, 0, 0, [ '5' ] ); // $ExpectError
	at( x, 0, 0, ( x: number ): number => x ); // $ExpectError

	at( x, 0, 0, 0, '5' ); // $ExpectError
	at( x, 0, 0, 0, true ); // $ExpectError
	at( x, 0, 0, 0, [ '5' ] ); // $ExpectError
	at( x, 0, 0, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	at(); // $ExpectError
}
