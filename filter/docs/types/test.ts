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

/// <reference types="@stdlib/types"/>

import empty = require( './../../../base/empty' );
import zeros = require( './../../../base/zeros' );
import filter = require( './index' );

/**
* Predicate function.
*
* @param x - input value
* @returns result
*/
function predicate( x: any ): boolean {
	return Boolean( x );
}

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	filter( zeros( 'float64', sh, ord ), predicate ); // $ExpectType float64ndarray
	filter( zeros( 'float64', sh, ord ), predicate, {} ); // $ExpectType float64ndarray
	filter( zeros( 'float32', sh, ord ), predicate ); // $ExpectType float32ndarray
	filter( zeros( 'float32', sh, ord ), predicate, {} ); // $ExpectType float32ndarray
	filter( zeros( 'complex64', sh, ord ), predicate ); // $ExpectType complex64ndarray
	filter( zeros( 'complex64', sh, ord ), predicate, {} ); // $ExpectType complex64ndarray
	filter( zeros( 'complex128', sh, ord ), predicate ); // $ExpectType complex128ndarray
	filter( zeros( 'complex128', sh, ord ), predicate, {} ); // $ExpectType complex128ndarray
	filter( zeros( 'int32', sh, ord ), predicate ); // $ExpectType int32ndarray
	filter( zeros( 'int32', sh, ord ), predicate, {} ); // $ExpectType int32ndarray
	filter( zeros( 'int16', sh, ord ), predicate ); // $ExpectType int16ndarray
	filter( zeros( 'int16', sh, ord ), predicate, {} ); // $ExpectType int16ndarray
	filter( zeros( 'int8', sh, ord ), predicate ); // $ExpectType int8ndarray
	filter( zeros( 'int8', sh, ord ), predicate, {} ); // $ExpectType int8ndarray
	filter( zeros( 'uint32', sh, ord ), predicate ); // $ExpectType uint32ndarray
	filter( zeros( 'uint32', sh, ord ), predicate, {} ); // $ExpectType uint32ndarray
	filter( zeros( 'uint16', sh, ord ), predicate ); // $ExpectType uint16ndarray
	filter( zeros( 'uint16', sh, ord ), predicate, {} ); // $ExpectType uint16ndarray
	filter( zeros( 'uint8', sh, ord ), predicate ); // $ExpectType uint8ndarray
	filter( zeros( 'uint8', sh, ord ), predicate, {} ); // $ExpectType uint8ndarray
	filter( zeros( 'uint8c', sh, ord ), predicate ); // $ExpectType uint8cndarray
	filter( zeros( 'uint8c', sh, ord ), predicate, {} ); // $ExpectType uint8cndarray
	filter( empty( 'bool', sh, ord ), predicate ); // $ExpectType boolndarray
	filter( empty( 'bool', sh, ord ), predicate, {} ); // $ExpectType boolndarray
	filter( zeros( 'generic', sh, ord ), predicate ); // $ExpectType genericndarray<number>
	filter( zeros( 'generic', sh, ord ), predicate, {} ); // $ExpectType genericndarray<number>


	filter( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, predicate ); // $ExpectType float64ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, predicate, {} ); // $ExpectType float64ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, predicate ); // $ExpectType float32ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, predicate, {} ); // $ExpectType float32ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, predicate ); // $ExpectType complex64ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, predicate, {} ); // $ExpectType complex64ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, predicate ); // $ExpectType complex128ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, predicate, {} ); // $ExpectType complex128ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, predicate ); // $ExpectType int32ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, predicate, {} ); // $ExpectType int32ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, predicate ); // $ExpectType int16ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, predicate, {} ); // $ExpectType int16ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, predicate ); // $ExpectType int8ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, predicate, {} ); // $ExpectType int8ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, predicate ); // $ExpectType uint32ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, predicate, {} ); // $ExpectType uint32ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, predicate ); // $ExpectType uint16ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, predicate, {} ); // $ExpectType uint16ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, predicate ); // $ExpectType uint8ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, predicate, {} ); // $ExpectType uint8ndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, predicate ); // $ExpectType uint8cndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, predicate, {} ); // $ExpectType uint8cndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, predicate ); // $ExpectType boolndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, predicate, {} ); // $ExpectType boolndarray
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, predicate ); // $ExpectType genericndarray<number>
	filter( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, predicate, {} ); // $ExpectType genericndarray<number>


	filter( zeros( 'float64', sh, ord ), { 'order': ord }, predicate ); // $ExpectType float64ndarray
	filter( zeros( 'float64', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType float64ndarray
	filter( zeros( 'float32', sh, ord ), { 'order': ord }, predicate ); // $ExpectType float32ndarray
	filter( zeros( 'float32', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType float32ndarray
	filter( zeros( 'complex64', sh, ord ), { 'order': ord }, predicate ); // $ExpectType complex64ndarray
	filter( zeros( 'complex64', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType complex64ndarray
	filter( zeros( 'complex128', sh, ord ), { 'order': ord }, predicate ); // $ExpectType complex128ndarray
	filter( zeros( 'complex128', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType complex128ndarray
	filter( zeros( 'int32', sh, ord ), { 'order': ord }, predicate ); // $ExpectType int32ndarray
	filter( zeros( 'int32', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType int32ndarray
	filter( zeros( 'int16', sh, ord ), { 'order': ord }, predicate ); // $ExpectType int16ndarray
	filter( zeros( 'int16', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType int16ndarray
	filter( zeros( 'int8', sh, ord ), { 'order': ord }, predicate ); // $ExpectType int8ndarray
	filter( zeros( 'int8', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType int8ndarray
	filter( zeros( 'uint32', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint32ndarray
	filter( zeros( 'uint32', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint32ndarray
	filter( zeros( 'uint16', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint16ndarray
	filter( zeros( 'uint16', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint16ndarray
	filter( zeros( 'uint8', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint8ndarray
	filter( zeros( 'uint8', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint8ndarray
	filter( zeros( 'uint8c', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint8cndarray
	filter( zeros( 'uint8c', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint8cndarray
	filter( empty( 'bool', sh, ord ), { 'order': ord }, predicate ); // $ExpectType boolndarray
	filter( empty( 'bool', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType boolndarray
	filter( zeros( 'generic', sh, ord ), { 'order': ord }, predicate ); // $ExpectType genericndarray<number>
	filter( zeros( 'generic', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType genericndarray<number>

}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	filter( 5, predicate ); // $ExpectError
	filter( true, predicate ); // $ExpectError
	filter( false, predicate ); // $ExpectError
	filter( null, predicate ); // $ExpectError
	filter( undefined, predicate ); // $ExpectError
	filter( {}, predicate ); // $ExpectError
	filter( [ 1 ], predicate ); // $ExpectError
	filter( ( x: number ): number => x, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback which is not a function...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filter( x, '5' ); // $ExpectError
	filter( x, true ); // $ExpectError
	filter( x, false ); // $ExpectError
	filter( x, null ); // $ExpectError
	filter( x, undefined ); // $ExpectError
	filter( x, {} ); // $ExpectError
	filter( x, [ 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filter( x, '10', predicate, {} ); // $ExpectError
	filter( x, 10, predicate, {} ); // $ExpectError
	filter( x, false, predicate, {} ); // $ExpectError
	filter( x, true, predicate, {} ); // $ExpectError
	filter( x, [], predicate, {} ); // $ExpectError
	filter( x, ( x: number ): number => x, predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filter( x, { 'dtype': '10' }, predicate ); // $ExpectError
	filter( x, { 'dtype': 10 }, predicate ); // $ExpectError
	filter( x, { 'dtype': null }, predicate ); // $ExpectError
	filter( x, { 'dtype': false }, predicate ); // $ExpectError
	filter( x, { 'dtype': true }, predicate ); // $ExpectError
	filter( x, { 'dtype': [] }, predicate ); // $ExpectError
	filter( x, { 'dtype': {} }, predicate ); // $ExpectError
	filter( x, { 'dtype': ( x: number ): number => x }, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filter( x, { 'order': '10' }, predicate ); // $ExpectError
	filter( x, { 'order': 10 }, predicate ); // $ExpectError
	filter( x, { 'order': null }, predicate ); // $ExpectError
	filter( x, { 'order': false }, predicate ); // $ExpectError
	filter( x, { 'order': true }, predicate ); // $ExpectError
	filter( x, { 'order': [] }, predicate ); // $ExpectError
	filter( x, { 'order': {} }, predicate ); // $ExpectError
	filter( x, { 'order': ( x: number ): number => x }, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filter(); // $ExpectError
	filter( zeros( 'float64', [ 2, 2 ], 'row-major' ) ); // $ExpectError
	filter( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, ( x: number ): number => x, {}, {} ); // $ExpectError
}
