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
import reject = require( './index' );

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

	reject( zeros( 'float64', sh, ord ), predicate ); // $ExpectType float64ndarray
	reject( zeros( 'float64', sh, ord ), predicate, {} ); // $ExpectType float64ndarray
	reject( zeros( 'float32', sh, ord ), predicate ); // $ExpectType float32ndarray
	reject( zeros( 'float32', sh, ord ), predicate, {} ); // $ExpectType float32ndarray
	reject( zeros( 'complex64', sh, ord ), predicate ); // $ExpectType complex64ndarray
	reject( zeros( 'complex64', sh, ord ), predicate, {} ); // $ExpectType complex64ndarray
	reject( zeros( 'complex128', sh, ord ), predicate ); // $ExpectType complex128ndarray
	reject( zeros( 'complex128', sh, ord ), predicate, {} ); // $ExpectType complex128ndarray
	reject( zeros( 'int32', sh, ord ), predicate ); // $ExpectType int32ndarray
	reject( zeros( 'int32', sh, ord ), predicate, {} ); // $ExpectType int32ndarray
	reject( zeros( 'int16', sh, ord ), predicate ); // $ExpectType int16ndarray
	reject( zeros( 'int16', sh, ord ), predicate, {} ); // $ExpectType int16ndarray
	reject( zeros( 'int8', sh, ord ), predicate ); // $ExpectType int8ndarray
	reject( zeros( 'int8', sh, ord ), predicate, {} ); // $ExpectType int8ndarray
	reject( zeros( 'uint32', sh, ord ), predicate ); // $ExpectType uint32ndarray
	reject( zeros( 'uint32', sh, ord ), predicate, {} ); // $ExpectType uint32ndarray
	reject( zeros( 'uint16', sh, ord ), predicate ); // $ExpectType uint16ndarray
	reject( zeros( 'uint16', sh, ord ), predicate, {} ); // $ExpectType uint16ndarray
	reject( zeros( 'uint8', sh, ord ), predicate ); // $ExpectType uint8ndarray
	reject( zeros( 'uint8', sh, ord ), predicate, {} ); // $ExpectType uint8ndarray
	reject( zeros( 'uint8c', sh, ord ), predicate ); // $ExpectType uint8cndarray
	reject( zeros( 'uint8c', sh, ord ), predicate, {} ); // $ExpectType uint8cndarray
	reject( empty( 'bool', sh, ord ), predicate ); // $ExpectType boolndarray
	reject( empty( 'bool', sh, ord ), predicate, {} ); // $ExpectType boolndarray
	reject( zeros( 'generic', sh, ord ), predicate ); // $ExpectType genericndarray<number>
	reject( zeros( 'generic', sh, ord ), predicate, {} ); // $ExpectType genericndarray<number>


	reject( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, predicate ); // $ExpectType float64ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, predicate, {} ); // $ExpectType float64ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, predicate ); // $ExpectType float32ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, predicate, {} ); // $ExpectType float32ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, predicate ); // $ExpectType complex64ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, predicate, {} ); // $ExpectType complex64ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, predicate ); // $ExpectType complex128ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, predicate, {} ); // $ExpectType complex128ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, predicate ); // $ExpectType int32ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, predicate, {} ); // $ExpectType int32ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, predicate ); // $ExpectType int16ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, predicate, {} ); // $ExpectType int16ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, predicate ); // $ExpectType int8ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, predicate, {} ); // $ExpectType int8ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, predicate ); // $ExpectType uint32ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, predicate, {} ); // $ExpectType uint32ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, predicate ); // $ExpectType uint16ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, predicate, {} ); // $ExpectType uint16ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, predicate ); // $ExpectType uint8ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, predicate, {} ); // $ExpectType uint8ndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, predicate ); // $ExpectType uint8cndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, predicate, {} ); // $ExpectType uint8cndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, predicate ); // $ExpectType boolndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, predicate, {} ); // $ExpectType boolndarray
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, predicate ); // $ExpectType genericndarray<number>
	reject( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, predicate, {} ); // $ExpectType genericndarray<number>


	reject( zeros( 'float64', sh, ord ), { 'order': ord }, predicate ); // $ExpectType float64ndarray
	reject( zeros( 'float64', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType float64ndarray
	reject( zeros( 'float32', sh, ord ), { 'order': ord }, predicate ); // $ExpectType float32ndarray
	reject( zeros( 'float32', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType float32ndarray
	reject( zeros( 'complex64', sh, ord ), { 'order': ord }, predicate ); // $ExpectType complex64ndarray
	reject( zeros( 'complex64', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType complex64ndarray
	reject( zeros( 'complex128', sh, ord ), { 'order': ord }, predicate ); // $ExpectType complex128ndarray
	reject( zeros( 'complex128', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType complex128ndarray
	reject( zeros( 'int32', sh, ord ), { 'order': ord }, predicate ); // $ExpectType int32ndarray
	reject( zeros( 'int32', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType int32ndarray
	reject( zeros( 'int16', sh, ord ), { 'order': ord }, predicate ); // $ExpectType int16ndarray
	reject( zeros( 'int16', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType int16ndarray
	reject( zeros( 'int8', sh, ord ), { 'order': ord }, predicate ); // $ExpectType int8ndarray
	reject( zeros( 'int8', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType int8ndarray
	reject( zeros( 'uint32', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint32ndarray
	reject( zeros( 'uint32', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint32ndarray
	reject( zeros( 'uint16', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint16ndarray
	reject( zeros( 'uint16', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint16ndarray
	reject( zeros( 'uint8', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint8ndarray
	reject( zeros( 'uint8', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint8ndarray
	reject( zeros( 'uint8c', sh, ord ), { 'order': ord }, predicate ); // $ExpectType uint8cndarray
	reject( zeros( 'uint8c', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType uint8cndarray
	reject( empty( 'bool', sh, ord ), { 'order': ord }, predicate ); // $ExpectType boolndarray
	reject( empty( 'bool', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType boolndarray
	reject( zeros( 'generic', sh, ord ), { 'order': ord }, predicate ); // $ExpectType genericndarray<number>
	reject( zeros( 'generic', sh, ord ), { 'order': ord }, predicate, {} ); // $ExpectType genericndarray<number>

}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	reject( 5, predicate ); // $ExpectError
	reject( true, predicate ); // $ExpectError
	reject( false, predicate ); // $ExpectError
	reject( null, predicate ); // $ExpectError
	reject( undefined, predicate ); // $ExpectError
	reject( {}, predicate ); // $ExpectError
	reject( [ 1 ], predicate ); // $ExpectError
	reject( ( x: number ): number => x, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback which is not a function...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	reject( x, '5' ); // $ExpectError
	reject( x, true ); // $ExpectError
	reject( x, false ); // $ExpectError
	reject( x, null ); // $ExpectError
	reject( x, undefined ); // $ExpectError
	reject( x, {} ); // $ExpectError
	reject( x, [ 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	reject( x, '10', predicate, {} ); // $ExpectError
	reject( x, 10, predicate, {} ); // $ExpectError
	reject( x, false, predicate, {} ); // $ExpectError
	reject( x, true, predicate, {} ); // $ExpectError
	reject( x, [], predicate, {} ); // $ExpectError
	reject( x, ( x: number ): number => x, predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	reject( x, { 'dtype': '10' }, predicate ); // $ExpectError
	reject( x, { 'dtype': 10 }, predicate ); // $ExpectError
	reject( x, { 'dtype': null }, predicate ); // $ExpectError
	reject( x, { 'dtype': false }, predicate ); // $ExpectError
	reject( x, { 'dtype': true }, predicate ); // $ExpectError
	reject( x, { 'dtype': [] }, predicate ); // $ExpectError
	reject( x, { 'dtype': {} }, predicate ); // $ExpectError
	reject( x, { 'dtype': ( x: number ): number => x }, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	reject( x, { 'order': '10' }, predicate ); // $ExpectError
	reject( x, { 'order': 10 }, predicate ); // $ExpectError
	reject( x, { 'order': null }, predicate ); // $ExpectError
	reject( x, { 'order': false }, predicate ); // $ExpectError
	reject( x, { 'order': true }, predicate ); // $ExpectError
	reject( x, { 'order': [] }, predicate ); // $ExpectError
	reject( x, { 'order': {} }, predicate ); // $ExpectError
	reject( x, { 'order': ( x: number ): number => x }, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reject(); // $ExpectError
	reject( zeros( 'float64', [ 2, 2 ], 'row-major' ) ); // $ExpectError
	reject( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, ( x: number ): number => x, {}, {} ); // $ExpectError
}
