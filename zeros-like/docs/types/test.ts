/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import zeros = require( './../../../base/zeros' );
import zerosLike = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	zerosLike( zeros( 'float64', sh, ord ) ); // $ExpectType float64ndarray
	zerosLike( zeros( 'float32', sh, ord ) ); // $ExpectType float32ndarray
	zerosLike( zeros( 'complex128', sh, ord ) ); // $ExpectType complex128ndarray
	zerosLike( zeros( 'complex64', sh, ord ) ); // $ExpectType complex64ndarray
	zerosLike( zeros( 'int32', sh, ord ) ); // $ExpectType int32ndarray
	zerosLike( zeros( 'int16', sh, ord ) ); // $ExpectType int16ndarray
	zerosLike( zeros( 'int8', sh, ord ) ); // $ExpectType int8ndarray
	zerosLike( zeros( 'uint32', sh, ord ) ); // $ExpectType uint32ndarray
	zerosLike( zeros( 'uint16', sh, ord ) ); // $ExpectType uint16ndarray
	zerosLike( zeros( 'uint8', sh, ord ) ); // $ExpectType uint8ndarray
	zerosLike( zeros( 'uint8c', sh, ord ) ); // $ExpectType uint8cndarray
	zerosLike( zeros( 'generic', sh, ord ) ); // $ExpectType genericndarray<number>


	zerosLike( zeros( 'float64', sh, ord ), {} ); // $ExpectType float64ndarray
	zerosLike( zeros( 'float32', sh, ord ), {} ); // $ExpectType float32ndarray
	zerosLike( zeros( 'complex128', sh, ord ), {} ); // $ExpectType complex128ndarray
	zerosLike( zeros( 'complex64', sh, ord ), {} ); // $ExpectType complex64ndarray
	zerosLike( zeros( 'int32', sh, ord ), {} ); // $ExpectType int32ndarray
	zerosLike( zeros( 'int16', sh, ord ), {} ); // $ExpectType int16ndarray
	zerosLike( zeros( 'int8', sh, ord ), {} ); // $ExpectType int8ndarray
	zerosLike( zeros( 'uint32', sh, ord ), {} ); // $ExpectType uint32ndarray
	zerosLike( zeros( 'uint16', sh, ord ), {} ); // $ExpectType uint16ndarray
	zerosLike( zeros( 'uint8', sh, ord ), {} ); // $ExpectType uint8ndarray
	zerosLike( zeros( 'uint8c', sh, ord ), {} ); // $ExpectType uint8cndarray
	zerosLike( zeros( 'generic', sh, ord ), {} ); // $ExpectType genericndarray<number>


	zerosLike( zeros( 'float64', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType float64ndarray
	zerosLike( zeros( 'float32', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType float32ndarray
	zerosLike( zeros( 'complex128', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType complex128ndarray
	zerosLike( zeros( 'complex64', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType complex64ndarray
	zerosLike( zeros( 'int32', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType int32ndarray
	zerosLike( zeros( 'int16', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType int16ndarray
	zerosLike( zeros( 'int8', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType int8ndarray
	zerosLike( zeros( 'uint32', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint32ndarray
	zerosLike( zeros( 'uint16', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint16ndarray
	zerosLike( zeros( 'uint8', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint8ndarray
	zerosLike( zeros( 'uint8c', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint8cndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType genericndarray<number>


	zerosLike( zeros( 'float64', sh, ord ), { 'order': 'column-major' } ); // $ExpectType float64ndarray
	zerosLike( zeros( 'float32', sh, ord ), { 'order': 'column-major' } ); // $ExpectType float32ndarray
	zerosLike( zeros( 'complex128', sh, ord ), { 'order': 'column-major' } ); // $ExpectType complex128ndarray
	zerosLike( zeros( 'complex64', sh, ord ), { 'order': 'column-major' } ); // $ExpectType complex64ndarray
	zerosLike( zeros( 'int32', sh, ord ), { 'order': 'column-major' } ); // $ExpectType int32ndarray
	zerosLike( zeros( 'int16', sh, ord ), { 'order': 'column-major' } ); // $ExpectType int16ndarray
	zerosLike( zeros( 'int8', sh, ord ), { 'order': 'column-major' } ); // $ExpectType int8ndarray
	zerosLike( zeros( 'uint32', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint32ndarray
	zerosLike( zeros( 'uint16', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint16ndarray
	zerosLike( zeros( 'uint8', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint8ndarray
	zerosLike( zeros( 'uint8c', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint8cndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'order': 'column-major' } ); // $ExpectType genericndarray<number>


	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'int32' } ); // $ExpectType int32ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'int16' } ); // $ExpectType int16ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'int8' } ); // $ExpectType int8ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' } ); // $ExpectType uint32ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' } ); // $ExpectType uint16ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' } ); // $ExpectType uint8ndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' } ); // $ExpectType uint8cndarray
	zerosLike( zeros( 'generic', sh, ord ), { 'dtype': 'generic' } ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument is not an ndarray which has a recognized/supported data type...
{
	zerosLike( '10' ); // $ExpectError
	zerosLike( 10 ); // $ExpectError
	zerosLike( false ); // $ExpectError
	zerosLike( true ); // $ExpectError
	zerosLike( null ); // $ExpectError
	zerosLike( [] ); // $ExpectError
	zerosLike( {} ); // $ExpectError
	zerosLike( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument is not an options object...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, '10' ); // $ExpectError
	zerosLike( x, 10 ); // $ExpectError
	zerosLike( x, false ); // $ExpectError
	zerosLike( x, true ); // $ExpectError
	zerosLike( x, [] ); // $ExpectError
	zerosLike( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, { 'dtype': '10' } ); // $ExpectError
	zerosLike( x, { 'dtype': 10 } ); // $ExpectError
	zerosLike( x, { 'dtype': null } ); // $ExpectError
	zerosLike( x, { 'dtype': false } ); // $ExpectError
	zerosLike( x, { 'dtype': true } ); // $ExpectError
	zerosLike( x, { 'dtype': [] } ); // $ExpectError
	zerosLike( x, { 'dtype': {} } ); // $ExpectError
	zerosLike( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, { 'order': '10' } ); // $ExpectError
	zerosLike( x, { 'order': 10 } ); // $ExpectError
	zerosLike( x, { 'order': false } ); // $ExpectError
	zerosLike( x, { 'order': true } ); // $ExpectError
	zerosLike( x, { 'order': [] } ); // $ExpectError
	zerosLike( x, { 'order': {} } ); // $ExpectError
	zerosLike( x, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `shape` option which is not a valid shape...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, { 'shape': '10' } ); // $ExpectError
	zerosLike( x, { 'shape': false } ); // $ExpectError
	zerosLike( x, { 'shape': true } ); // $ExpectError
	zerosLike( x, { 'shape': [ '5' ] } ); // $ExpectError
	zerosLike( x, { 'shape': {} } ); // $ExpectError
	zerosLike( x, { 'shape': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, { 'mode': '5' } ); // $ExpectError
	zerosLike( x, { 'mode': 5 } ); // $ExpectError
	zerosLike( x, { 'mode': false } ); // $ExpectError
	zerosLike( x, { 'mode': true } ); // $ExpectError
	zerosLike( x, { 'mode': [ '5' ] } ); // $ExpectError
	zerosLike( x, { 'mode': {} } ); // $ExpectError
	zerosLike( x, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, { 'submode': '5' } ); // $ExpectError
	zerosLike( x, { 'submode': 5 } ); // $ExpectError
	zerosLike( x, { 'submode': false } ); // $ExpectError
	zerosLike( x, { 'submode': true } ); // $ExpectError
	zerosLike( x, { 'submode': [ '5' ] } ); // $ExpectError
	zerosLike( x, { 'submode': {} } ); // $ExpectError
	zerosLike( x, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	zerosLike( x, { 'readonly': '5' } ); // $ExpectError
	zerosLike( x, { 'readonly': 5 } ); // $ExpectError
	zerosLike( x, { 'readonly': [ '5' ] } ); // $ExpectError
	zerosLike( x, { 'readonly': {} } ); // $ExpectError
	zerosLike( x, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zerosLike(); // $ExpectError
	zerosLike( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, 1 ); // $ExpectError
}
