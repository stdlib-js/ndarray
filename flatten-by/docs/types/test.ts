/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
import zeros = require( './../../../base/zeros' );
import flattenBy = require( './index' );

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

	flattenBy( zeros( 'float64', sh, ord ), identity ); // $ExpectType float64ndarray
	flattenBy( zeros( 'float64', sh, ord ), {}, identity ); // $ExpectType float64ndarray
	flattenBy( zeros( 'float64', sh, ord ), identity, {} ); // $ExpectType float64ndarray
	flattenBy( zeros( 'float64', sh, ord ), {}, identity, {} ); // $ExpectType float64ndarray
	flattenBy( zeros( 'float32', sh, ord ), identity ); // $ExpectType float32ndarray
	flattenBy( zeros( 'float32', sh, ord ), {}, identity ); // $ExpectType float32ndarray
	flattenBy( zeros( 'float32', sh, ord ), identity, {} ); // $ExpectType float32ndarray
	flattenBy( zeros( 'float32', sh, ord ), {}, identity, {} ); // $ExpectType float32ndarray
	flattenBy( zeros( 'complex64', sh, ord ), identity ); // $ExpectType complex64ndarray
	flattenBy( zeros( 'complex64', sh, ord ), {}, identity ); // $ExpectType complex64ndarray
	flattenBy( zeros( 'complex64', sh, ord ), identity, {} ); // $ExpectType complex64ndarray
	flattenBy( zeros( 'complex64', sh, ord ), {}, identity, {} ); // $ExpectType complex64ndarray
	flattenBy( zeros( 'complex128', sh, ord ), identity ); // $ExpectType complex128ndarray
	flattenBy( zeros( 'complex128', sh, ord ), {}, identity ); // $ExpectType complex128ndarray
	flattenBy( zeros( 'complex128', sh, ord ), identity, {} ); // $ExpectType complex128ndarray
	flattenBy( zeros( 'complex128', sh, ord ), {}, identity, {} ); // $ExpectType complex128ndarray
	flattenBy( zeros( 'int32', sh, ord ), identity ); // $ExpectType int32ndarray
	flattenBy( zeros( 'int32', sh, ord ), {}, identity ); // $ExpectType int32ndarray
	flattenBy( zeros( 'int32', sh, ord ), identity, {} ); // $ExpectType int32ndarray
	flattenBy( zeros( 'int32', sh, ord ), {}, identity, {} ); // $ExpectType int32ndarray
	flattenBy( zeros( 'int16', sh, ord ), identity ); // $ExpectType int16ndarray
	flattenBy( zeros( 'int16', sh, ord ), {}, identity ); // $ExpectType int16ndarray
	flattenBy( zeros( 'int16', sh, ord ), identity, {} ); // $ExpectType int16ndarray
	flattenBy( zeros( 'int16', sh, ord ), {}, identity, {} ); // $ExpectType int16ndarray
	flattenBy( zeros( 'int8', sh, ord ), identity ); // $ExpectType int8ndarray
	flattenBy( zeros( 'int8', sh, ord ), {}, identity ); // $ExpectType int8ndarray
	flattenBy( zeros( 'int8', sh, ord ), identity, {} ); // $ExpectType int8ndarray
	flattenBy( zeros( 'int8', sh, ord ), {}, identity, {} ); // $ExpectType int8ndarray
	flattenBy( zeros( 'uint32', sh, ord ), identity ); // $ExpectType uint32ndarray
	flattenBy( zeros( 'uint32', sh, ord ), {}, identity ); // $ExpectType uint32ndarray
	flattenBy( zeros( 'uint32', sh, ord ), identity, {} ); // $ExpectType uint32ndarray
	flattenBy( zeros( 'uint16', sh, ord ), identity ); // $ExpectType uint16ndarray
	flattenBy( zeros( 'uint16', sh, ord ), {}, identity ); // $ExpectType uint16ndarray
	flattenBy( zeros( 'uint16', sh, ord ), identity, {} ); // $ExpectType uint16ndarray
	flattenBy( zeros( 'uint16', sh, ord ), {}, identity, {} ); // $ExpectType uint16ndarray
	flattenBy( zeros( 'uint8', sh, ord ), identity ); // $ExpectType uint8ndarray
	flattenBy( zeros( 'uint8', sh, ord ), {}, identity ); // $ExpectType uint8ndarray
	flattenBy( zeros( 'uint8', sh, ord ), identity, {} ); // $ExpectType uint8ndarray
	flattenBy( zeros( 'uint8', sh, ord ), {}, identity, {} ); // $ExpectType uint8ndarray
	flattenBy( zeros( 'uint8c', sh, ord ), identity ); // $ExpectType uint8cndarray
	flattenBy( zeros( 'uint8c', sh, ord ), {}, identity ); // $ExpectType uint8cndarray
	flattenBy( zeros( 'uint8c', sh, ord ), identity, {} ); // $ExpectType uint8cndarray
	flattenBy( zeros( 'uint8c', sh, ord ), {}, identity, {} ); // $ExpectType uint8cndarray
	flattenBy( empty( 'bool', sh, ord ), identity ); // $ExpectType boolndarray
	flattenBy( empty( 'bool', sh, ord ), {}, identity ); // $ExpectType boolndarray
	flattenBy( empty( 'bool', sh, ord ), identity, {} ); // $ExpectType boolndarray
	flattenBy( empty( 'bool', sh, ord ), {}, identity, {} ); // $ExpectType boolndarray
	flattenBy( zeros( 'generic', sh, ord ), identity ); // $ExpectType genericndarray<number>
	flattenBy( zeros( 'generic', sh, ord ), {}, identity ); // $ExpectType genericndarray<number>
	flattenBy( zeros( 'generic', sh, ord ), identity, {} ); // $ExpectType genericndarray<number>
	flattenBy( zeros( 'generic', sh, ord ), {}, identity, {} ); // $ExpectType genericndarray<number>

	flattenBy( zeros( 'float64', sh, ord ), { 'dtype': 'float32' }, identity ); // $ExpectType float32ndarray
	flattenBy( zeros( 'float64', sh, ord ), { 'dtype': 'generic' }, identity ); // $ExpectType genericndarray<any>
	flattenBy( zeros( 'generic', sh, ord ), { 'dtype': 'float64' }, identity ); // $ExpectType float64ndarray
	flattenBy( zeros( 'generic', sh, ord ), { 'dtype': 'generic' }, identity ); // $ExpectType genericndarray<any>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	flattenBy( 5, identity ); // $ExpectError
	flattenBy( true, identity ); // $ExpectError
	flattenBy( false, identity ); // $ExpectError
	flattenBy( null, identity ); // $ExpectError
	flattenBy( undefined, identity ); // $ExpectError
	flattenBy( {}, identity ); // $ExpectError
	flattenBy( [ 1 ], identity ); // $ExpectError
	flattenBy( ( x: number ): number => x, identity ); // $ExpectError

	flattenBy( 5, {}, identity ); // $ExpectError
	flattenBy( true, {}, identity ); // $ExpectError
	flattenBy( false, {}, identity ); // $ExpectError
	flattenBy( null, {}, identity ); // $ExpectError
	flattenBy( undefined, {}, identity ); // $ExpectError
	flattenBy( {}, {}, identity ); // $ExpectError
	flattenBy( [ 1 ], {}, identity ); // $ExpectError
	flattenBy( ( x: number ): number => x, {}, identity ); // $ExpectError

	flattenBy( 5, identity, {} ); // $ExpectError
	flattenBy( true, identity, {} ); // $ExpectError
	flattenBy( false, identity, {} ); // $ExpectError
	flattenBy( null, identity, {} ); // $ExpectError
	flattenBy( undefined, identity, {} ); // $ExpectError
	flattenBy( {}, identity, {} ); // $ExpectError
	flattenBy( [ 1 ], identity, {} ); // $ExpectError
	flattenBy( ( x: number ): number => x, identity, {} ); // $ExpectError

	flattenBy( 5, {}, identity, {} ); // $ExpectError
	flattenBy( true, {}, identity, {} ); // $ExpectError
	flattenBy( false, {}, identity, {} ); // $ExpectError
	flattenBy( null, {}, identity, {} ); // $ExpectError
	flattenBy( undefined, {}, identity, {} ); // $ExpectError
	flattenBy( {}, {}, identity, {} ); // $ExpectError
	flattenBy( [ 1 ], {}, identity, {} ); // $ExpectError
	flattenBy( ( x: number ): number => x, {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( 'generic', [ 2, 2, 2 ], 'row-major' );

	flattenBy( x, '5', identity ); // $ExpectError
	flattenBy( x, true, identity ); // $ExpectError
	flattenBy( x, false, identity ); // $ExpectError
	flattenBy( x, null, identity ); // $ExpectError
	flattenBy( x, [ 1 ], identity ); // $ExpectError

	flattenBy( x, '5', identity, {} ); // $ExpectError
	flattenBy( x, true, identity, {} ); // $ExpectError
	flattenBy( x, false, identity, {} ); // $ExpectError
	flattenBy( x, null, identity, {} ); // $ExpectError
	flattenBy( x, [ 1 ], identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with invalid `depth` option...
{
	const x = zeros( 'generic', [ 2, 2, 2 ], 'row-major' );

	flattenBy( x, { 'depth': '5' }, identity ); // $ExpectError
	flattenBy( x, { 'depth': true }, identity ); // $ExpectError
	flattenBy( x, { 'depth': false }, identity ); // $ExpectError
	flattenBy( x, { 'depth': null }, identity ); // $ExpectError
	flattenBy( x, { 'depth': [ 1 ] }, identity ); // $ExpectError

	flattenBy( x, { 'depth': '5' }, identity, {} ); // $ExpectError
	flattenBy( x, { 'depth': true }, identity, {} ); // $ExpectError
	flattenBy( x, { 'depth': false }, identity, {} ); // $ExpectError
	flattenBy( x, { 'depth': null }, identity, {} ); // $ExpectError
	flattenBy( x, { 'depth': [ 1 ] }, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with invalid `order` option...
{
	const x = zeros( 'generic', [ 2, 2, 2 ], 'row-major' );

	flattenBy( x, { 'order': '5' }, identity ); // $ExpectError
	flattenBy( x, { 'order': true }, identity ); // $ExpectError
	flattenBy( x, { 'order': false }, identity ); // $ExpectError
	flattenBy( x, { 'order': null }, identity ); // $ExpectError
	flattenBy( x, { 'order': [ 1 ] }, identity ); // $ExpectError

	flattenBy( x, { 'order': '5' }, identity, {} ); // $ExpectError
	flattenBy( x, { 'order': true }, identity, {} ); // $ExpectError
	flattenBy( x, { 'order': false }, identity, {} ); // $ExpectError
	flattenBy( x, { 'order': null }, identity, {} ); // $ExpectError
	flattenBy( x, { 'order': [ 1 ] }, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument with invalid `dtype` option...
{
	const x = zeros( 'generic', [ 2, 2, 2 ], 'row-major' );

	flattenBy( x, { 'dtype': '5' }, identity ); // $ExpectError
	flattenBy( x, { 'dtype': true }, identity ); // $ExpectError
	flattenBy( x, { 'dtype': false }, identity ); // $ExpectError
	flattenBy( x, { 'dtype': null }, identity ); // $ExpectError
	flattenBy( x, { 'dtype': [ 1 ] }, identity ); // $ExpectError

	flattenBy( x, { 'dtype': '5' }, identity, {} ); // $ExpectError
	flattenBy( x, { 'dtype': true }, identity, {} ); // $ExpectError
	flattenBy( x, { 'dtype': false }, identity, {} ); // $ExpectError
	flattenBy( x, { 'dtype': null }, identity, {} ); // $ExpectError
	flattenBy( x, { 'dtype': [ 1 ] }, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback which is not a function...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	flattenBy( x, {}, '5' ); // $ExpectError
	flattenBy( x, {}, true ); // $ExpectError
	flattenBy( x, {}, false ); // $ExpectError
	flattenBy( x, {}, null ); // $ExpectError
	flattenBy( x, {}, undefined ); // $ExpectError
	flattenBy( x, {}, {} ); // $ExpectError
	flattenBy( x, {}, [ 1 ] ); // $ExpectError

	flattenBy( x, {}, '5', {} ); // $ExpectError
	flattenBy( x, {}, true, {} ); // $ExpectError
	flattenBy( x, {}, false, {} ); // $ExpectError
	flattenBy( x, {}, null, {} ); // $ExpectError
	flattenBy( x, {}, undefined, {} ); // $ExpectError
	flattenBy( x, {}, {}, {} ); // $ExpectError
	flattenBy( x, {}, [ 1 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( 'generic', [ 2, 2, 2 ], 'row-major' );

	flattenBy(); // $ExpectError
	flattenBy( x ); // $ExpectError
	flattenBy( x, {}, ( x: number ): number => x, {}, {} ); // $ExpectError
}
