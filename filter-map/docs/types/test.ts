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

import { ComplexLike } from '@stdlib/types/complex';
import empty = require( './../../../base/empty' );
import zeros = require( './../../../base/zeros' );
import filterMap = require( './index' );

/**
* Callback function.
*
* @param x - input value
* @returns result
*/
function fcn( x: any ): any {
	return x;
}

/**
* Callback function.
*
* @param x - input value
* @returns result
*/
function identity1( x: number ): number {
	return x;
}

/**
* Callback function.
*
* @param x - input value
* @returns result
*/
function identity2( x: boolean ): boolean {
	return x;
}

/**
* Callback function.
*
* @param x - input value
* @returns result
*/
function identity3( x: ComplexLike ): ComplexLike {
	return x;
}

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	filterMap( zeros( 'float64', sh, ord ), identity1 ); // $ExpectType float64ndarray
	filterMap( zeros( 'float64', sh, ord ), identity1, {} ); // $ExpectType float64ndarray
	filterMap( zeros( 'float32', sh, ord ), identity1 ); // $ExpectType float32ndarray
	filterMap( zeros( 'float32', sh, ord ), identity1, {} ); // $ExpectType float32ndarray
	filterMap( zeros( 'complex64', sh, ord ), identity3 ); // $ExpectType complex64ndarray
	filterMap( zeros( 'complex64', sh, ord ), identity3, {} ); // $ExpectType complex64ndarray
	filterMap( zeros( 'complex128', sh, ord ), identity3 ); // $ExpectType complex128ndarray
	filterMap( zeros( 'complex128', sh, ord ), identity3, {} ); // $ExpectType complex128ndarray
	filterMap( zeros( 'int32', sh, ord ), identity1 ); // $ExpectType int32ndarray
	filterMap( zeros( 'int32', sh, ord ), identity1, {} ); // $ExpectType int32ndarray
	filterMap( zeros( 'int16', sh, ord ), identity1 ); // $ExpectType int16ndarray
	filterMap( zeros( 'int16', sh, ord ), identity1, {} ); // $ExpectType int16ndarray
	filterMap( zeros( 'int8', sh, ord ), identity1 ); // $ExpectType int8ndarray
	filterMap( zeros( 'int8', sh, ord ), identity1, {} ); // $ExpectType int8ndarray
	filterMap( zeros( 'uint32', sh, ord ), identity1 ); // $ExpectType uint32ndarray
	filterMap( zeros( 'uint32', sh, ord ), identity1, {} ); // $ExpectType uint32ndarray
	filterMap( zeros( 'uint16', sh, ord ), identity1 ); // $ExpectType uint16ndarray
	filterMap( zeros( 'uint16', sh, ord ), identity1, {} ); // $ExpectType uint16ndarray
	filterMap( zeros( 'uint8', sh, ord ), identity1 ); // $ExpectType uint8ndarray
	filterMap( zeros( 'uint8', sh, ord ), identity1, {} ); // $ExpectType uint8ndarray
	filterMap( zeros( 'uint8c', sh, ord ), identity1 ); // $ExpectType uint8cndarray
	filterMap( zeros( 'uint8c', sh, ord ), identity1, {} ); // $ExpectType uint8cndarray
	filterMap( empty( 'bool', sh, ord ), identity2 ); // $ExpectType boolndarray
	filterMap( empty( 'bool', sh, ord ), identity2, {} ); // $ExpectType boolndarray
	filterMap( zeros( 'generic', sh, ord ), identity1 ); // $ExpectType genericndarray<number>
	filterMap( zeros( 'generic', sh, ord ), identity1, {} ); // $ExpectType genericndarray<number>


	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, fcn ); // $ExpectType float64ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, fcn, {} ); // $ExpectType float64ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, fcn ); // $ExpectType float32ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, fcn, {} ); // $ExpectType float32ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, fcn ); // $ExpectType complex64ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, fcn, {} ); // $ExpectType complex64ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, fcn ); // $ExpectType complex128ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, fcn, {} ); // $ExpectType complex128ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, fcn ); // $ExpectType int32ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, fcn, {} ); // $ExpectType int32ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, fcn ); // $ExpectType int16ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, fcn, {} ); // $ExpectType int16ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, fcn ); // $ExpectType int8ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, fcn, {} ); // $ExpectType int8ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, fcn ); // $ExpectType uint32ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, fcn, {} ); // $ExpectType uint32ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, fcn ); // $ExpectType uint16ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, fcn, {} ); // $ExpectType uint16ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, fcn ); // $ExpectType uint8ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, fcn, {} ); // $ExpectType uint8ndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, fcn ); // $ExpectType uint8cndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, fcn, {} ); // $ExpectType uint8cndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, fcn ); // $ExpectType boolndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, fcn, {} ); // $ExpectType boolndarray
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, fcn ); // $ExpectType genericndarray<any>
	filterMap( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, fcn, {} ); // $ExpectType genericndarray<any>


	filterMap( zeros( 'float64', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType float64ndarray
	filterMap( zeros( 'float64', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType float64ndarray
	filterMap( zeros( 'float32', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType float32ndarray
	filterMap( zeros( 'float32', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType float32ndarray
	filterMap( zeros( 'complex64', sh, ord ), { 'order': ord }, identity3 ); // $ExpectType complex64ndarray
	filterMap( zeros( 'complex64', sh, ord ), { 'order': ord }, identity3, {} ); // $ExpectType complex64ndarray
	filterMap( zeros( 'complex128', sh, ord ), { 'order': ord }, identity3 ); // $ExpectType complex128ndarray
	filterMap( zeros( 'complex128', sh, ord ), { 'order': ord }, identity3, {} ); // $ExpectType complex128ndarray
	filterMap( zeros( 'int32', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType int32ndarray
	filterMap( zeros( 'int32', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType int32ndarray
	filterMap( zeros( 'int16', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType int16ndarray
	filterMap( zeros( 'int16', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType int16ndarray
	filterMap( zeros( 'int8', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType int8ndarray
	filterMap( zeros( 'int8', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType int8ndarray
	filterMap( zeros( 'uint32', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType uint32ndarray
	filterMap( zeros( 'uint32', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType uint32ndarray
	filterMap( zeros( 'uint16', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType uint16ndarray
	filterMap( zeros( 'uint16', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType uint16ndarray
	filterMap( zeros( 'uint8', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType uint8ndarray
	filterMap( zeros( 'uint8', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType uint8ndarray
	filterMap( zeros( 'uint8c', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType uint8cndarray
	filterMap( zeros( 'uint8c', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType uint8cndarray
	filterMap( empty( 'bool', sh, ord ), { 'order': ord }, identity2 ); // $ExpectType boolndarray
	filterMap( empty( 'bool', sh, ord ), { 'order': ord }, identity2, {} ); // $ExpectType boolndarray
	filterMap( zeros( 'generic', sh, ord ), { 'order': ord }, identity1 ); // $ExpectType genericndarray<number>
	filterMap( zeros( 'generic', sh, ord ), { 'order': ord }, identity1, {} ); // $ExpectType genericndarray<number>

}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	filterMap( 5, fcn ); // $ExpectError
	filterMap( true, fcn ); // $ExpectError
	filterMap( false, fcn ); // $ExpectError
	filterMap( null, fcn ); // $ExpectError
	filterMap( undefined, fcn ); // $ExpectError
	filterMap( {}, fcn ); // $ExpectError
	filterMap( [ 1 ], fcn ); // $ExpectError
	filterMap( ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback which is not a function...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filterMap( x, '5' ); // $ExpectError
	filterMap( x, true ); // $ExpectError
	filterMap( x, false ); // $ExpectError
	filterMap( x, null ); // $ExpectError
	filterMap( x, undefined ); // $ExpectError
	filterMap( x, {} ); // $ExpectError
	filterMap( x, [ 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filterMap( x, '10', fcn, {} ); // $ExpectError
	filterMap( x, 10, fcn, {} ); // $ExpectError
	filterMap( x, false, fcn, {} ); // $ExpectError
	filterMap( x, true, fcn, {} ); // $ExpectError
	filterMap( x, [], fcn, {} ); // $ExpectError
	filterMap( x, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filterMap( x, { 'dtype': '10' }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': 10 }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': null }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': false }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': true }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': [] }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': {} }, fcn ); // $ExpectError
	filterMap( x, { 'dtype': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	filterMap( x, { 'order': '10' }, fcn ); // $ExpectError
	filterMap( x, { 'order': 10 }, fcn ); // $ExpectError
	filterMap( x, { 'order': null }, fcn ); // $ExpectError
	filterMap( x, { 'order': false }, fcn ); // $ExpectError
	filterMap( x, { 'order': true }, fcn ); // $ExpectError
	filterMap( x, { 'order': [] }, fcn ); // $ExpectError
	filterMap( x, { 'order': {} }, fcn ); // $ExpectError
	filterMap( x, { 'order': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filterMap(); // $ExpectError
	filterMap( zeros( 'float64', [ 2, 2 ], 'row-major' ) ); // $ExpectError
	filterMap( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, ( x: number ): number => x, {}, {} ); // $ExpectError
}
