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
import map = require( './index' );

/**
* Evaluates the identity function.
*
* @param x - input value
* @returns input value
*/
function identity( x: any ): any {
	return x;
}

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	map( zeros( 'float64', sh, ord ), identity ); // $ExpectType float64ndarray
	map( zeros( 'float64', sh, ord ), identity, {} ); // $ExpectType float64ndarray
	map( zeros( 'float32', sh, ord ), identity ); // $ExpectType float32ndarray
	map( zeros( 'float32', sh, ord ), identity, {} ); // $ExpectType float32ndarray
	map( zeros( 'complex64', sh, ord ), identity ); // $ExpectType complex64ndarray
	map( zeros( 'complex64', sh, ord ), identity, {} ); // $ExpectType complex64ndarray
	map( zeros( 'complex128', sh, ord ), identity ); // $ExpectType complex128ndarray
	map( zeros( 'complex128', sh, ord ), identity, {} ); // $ExpectType complex128ndarray
	map( zeros( 'int32', sh, ord ), identity ); // $ExpectType int32ndarray
	map( zeros( 'int32', sh, ord ), identity, {} ); // $ExpectType int32ndarray
	map( zeros( 'int16', sh, ord ), identity ); // $ExpectType int16ndarray
	map( zeros( 'int16', sh, ord ), identity, {} ); // $ExpectType int16ndarray
	map( zeros( 'int8', sh, ord ), identity ); // $ExpectType int8ndarray
	map( zeros( 'int8', sh, ord ), identity, {} ); // $ExpectType int8ndarray
	map( zeros( 'uint32', sh, ord ), identity ); // $ExpectType uint32ndarray
	map( zeros( 'uint32', sh, ord ), identity, {} ); // $ExpectType uint32ndarray
	map( zeros( 'uint16', sh, ord ), identity ); // $ExpectType uint16ndarray
	map( zeros( 'uint16', sh, ord ), identity, {} ); // $ExpectType uint16ndarray
	map( zeros( 'uint8', sh, ord ), identity ); // $ExpectType uint8ndarray
	map( zeros( 'uint8', sh, ord ), identity, {} ); // $ExpectType uint8ndarray
	map( zeros( 'uint8c', sh, ord ), identity ); // $ExpectType uint8cndarray
	map( zeros( 'uint8c', sh, ord ), identity, {} ); // $ExpectType uint8cndarray
	map( empty( 'bool', sh, ord ), identity ); // $ExpectType boolndarray
	map( empty( 'bool', sh, ord ), identity, {} ); // $ExpectType boolndarray
	map( zeros( 'generic', sh, ord ), identity ); // $ExpectType genericndarray<any>
	map( zeros( 'generic', sh, ord ), identity, {} ); // $ExpectType genericndarray<any>


	map( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, identity ); // $ExpectType float64ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, identity, {} ); // $ExpectType float64ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, identity ); // $ExpectType float32ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'float32' }, identity, {} ); // $ExpectType float32ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, identity ); // $ExpectType complex64ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' }, identity, {} ); // $ExpectType complex64ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, identity ); // $ExpectType complex128ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' }, identity, {} ); // $ExpectType complex128ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, identity ); // $ExpectType int32ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'int32' }, identity, {} ); // $ExpectType int32ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, identity ); // $ExpectType int16ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'int16' }, identity, {} ); // $ExpectType int16ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, identity ); // $ExpectType int8ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'int8' }, identity, {} ); // $ExpectType int8ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, identity ); // $ExpectType uint32ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' }, identity, {} ); // $ExpectType uint32ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, identity ); // $ExpectType uint16ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' }, identity, {} ); // $ExpectType uint16ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, identity ); // $ExpectType uint8ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' }, identity, {} ); // $ExpectType uint8ndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, identity ); // $ExpectType uint8cndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' }, identity, {} ); // $ExpectType uint8cndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, identity ); // $ExpectType boolndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'bool' }, identity, {} ); // $ExpectType boolndarray
	map( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, identity ); // $ExpectType genericndarray<any>
	map( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, identity, {} ); // $ExpectType genericndarray<any>

}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	map( 5, identity ); // $ExpectError
	map( true, identity ); // $ExpectError
	map( false, identity ); // $ExpectError
	map( null, identity ); // $ExpectError
	map( undefined, identity ); // $ExpectError
	map( {}, identity ); // $ExpectError
	map( [ 1 ], identity ); // $ExpectError
	map( ( x: number ): number => x, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback which is not a function...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	map( x, '5' ); // $ExpectError
	map( x, true ); // $ExpectError
	map( x, false ); // $ExpectError
	map( x, null ); // $ExpectError
	map( x, undefined ); // $ExpectError
	map( x, {} ); // $ExpectError
	map( x, [ 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	map( x, '10', identity, {} ); // $ExpectError
	map( x, 10, identity, {} ); // $ExpectError
	map( x, false, identity, {} ); // $ExpectError
	map( x, true, identity, {} ); // $ExpectError
	map( x, [], identity, {} ); // $ExpectError
	map( x, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	map( x, { 'dtype': '10' }, identity ); // $ExpectError
	map( x, { 'dtype': 10 }, identity ); // $ExpectError
	map( x, { 'dtype': null }, identity ); // $ExpectError
	map( x, { 'dtype': false }, identity ); // $ExpectError
	map( x, { 'dtype': true }, identity ); // $ExpectError
	map( x, { 'dtype': [] }, identity ); // $ExpectError
	map( x, { 'dtype': {} }, identity ); // $ExpectError
	map( x, { 'dtype': ( x: number ): number => x }, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	map(); // $ExpectError
	map( zeros( 'float64', [ 2, 2 ], 'row-major' ) ); // $ExpectError
	map( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, ( x: number ): number => x, {}, {} ); // $ExpectError
}
