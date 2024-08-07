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

import zeros = require( './../../../base/zeros' );
import empty = require( './../../../base/empty' );
import emptyLike = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	emptyLike( zeros( 'float64', sh, ord ) ); // $ExpectType float64ndarray
	emptyLike( zeros( 'float32', sh, ord ) ); // $ExpectType float32ndarray
	emptyLike( zeros( 'complex128', sh, ord ) ); // $ExpectType complex128ndarray
	emptyLike( zeros( 'complex64', sh, ord ) ); // $ExpectType complex64ndarray
	emptyLike( zeros( 'int32', sh, ord ) ); // $ExpectType int32ndarray
	emptyLike( zeros( 'int16', sh, ord ) ); // $ExpectType int16ndarray
	emptyLike( zeros( 'int8', sh, ord ) ); // $ExpectType int8ndarray
	emptyLike( zeros( 'uint32', sh, ord ) ); // $ExpectType uint32ndarray
	emptyLike( zeros( 'uint16', sh, ord ) ); // $ExpectType uint16ndarray
	emptyLike( zeros( 'uint8', sh, ord ) ); // $ExpectType uint8ndarray
	emptyLike( zeros( 'uint8c', sh, ord ) ); // $ExpectType uint8cndarray
	emptyLike( empty( 'bool', sh, ord ) ); // $ExpectType boolndarray
	emptyLike( zeros( 'generic', sh, ord ) ); // $ExpectType genericndarray<number>


	emptyLike( zeros( 'float64', sh, ord ), {} ); // $ExpectType float64ndarray
	emptyLike( zeros( 'float32', sh, ord ), {} ); // $ExpectType float32ndarray
	emptyLike( zeros( 'complex128', sh, ord ), {} ); // $ExpectType complex128ndarray
	emptyLike( zeros( 'complex64', sh, ord ), {} ); // $ExpectType complex64ndarray
	emptyLike( zeros( 'int32', sh, ord ), {} ); // $ExpectType int32ndarray
	emptyLike( zeros( 'int16', sh, ord ), {} ); // $ExpectType int16ndarray
	emptyLike( zeros( 'int8', sh, ord ), {} ); // $ExpectType int8ndarray
	emptyLike( zeros( 'uint32', sh, ord ), {} ); // $ExpectType uint32ndarray
	emptyLike( zeros( 'uint16', sh, ord ), {} ); // $ExpectType uint16ndarray
	emptyLike( zeros( 'uint8', sh, ord ), {} ); // $ExpectType uint8ndarray
	emptyLike( zeros( 'uint8c', sh, ord ), {} ); // $ExpectType uint8cndarray
	emptyLike( empty( 'bool', sh, ord ), {} ); // $ExpectType boolndarray
	emptyLike( zeros( 'generic', sh, ord ), {} ); // $ExpectType genericndarray<number>


	emptyLike( zeros( 'float64', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType float64ndarray
	emptyLike( zeros( 'float32', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType float32ndarray
	emptyLike( zeros( 'complex128', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType complex128ndarray
	emptyLike( zeros( 'complex64', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType complex64ndarray
	emptyLike( zeros( 'int32', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType int32ndarray
	emptyLike( zeros( 'int16', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType int16ndarray
	emptyLike( zeros( 'int8', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType int8ndarray
	emptyLike( zeros( 'uint32', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint32ndarray
	emptyLike( zeros( 'uint16', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint16ndarray
	emptyLike( zeros( 'uint8', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint8ndarray
	emptyLike( zeros( 'uint8c', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType uint8cndarray
	emptyLike( empty( 'bool', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType boolndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'shape': [ 2, 2, 2 ] } ); // $ExpectType genericndarray<number>


	emptyLike( zeros( 'float64', sh, ord ), { 'order': 'column-major' } ); // $ExpectType float64ndarray
	emptyLike( zeros( 'float32', sh, ord ), { 'order': 'column-major' } ); // $ExpectType float32ndarray
	emptyLike( zeros( 'complex128', sh, ord ), { 'order': 'column-major' } ); // $ExpectType complex128ndarray
	emptyLike( zeros( 'complex64', sh, ord ), { 'order': 'column-major' } ); // $ExpectType complex64ndarray
	emptyLike( zeros( 'int32', sh, ord ), { 'order': 'column-major' } ); // $ExpectType int32ndarray
	emptyLike( zeros( 'int16', sh, ord ), { 'order': 'column-major' } ); // $ExpectType int16ndarray
	emptyLike( zeros( 'int8', sh, ord ), { 'order': 'column-major' } ); // $ExpectType int8ndarray
	emptyLike( zeros( 'uint32', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint32ndarray
	emptyLike( zeros( 'uint16', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint16ndarray
	emptyLike( zeros( 'uint8', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint8ndarray
	emptyLike( zeros( 'uint8c', sh, ord ), { 'order': 'column-major' } ); // $ExpectType uint8cndarray
	emptyLike( empty( 'bool', sh, ord ), { 'order': 'column-major' } ); // $ExpectType boolndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'order': 'column-major' } ); // $ExpectType genericndarray<number>


	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'int32' } ); // $ExpectType int32ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'int16' } ); // $ExpectType int16ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'int8' } ); // $ExpectType int8ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint32' } ); // $ExpectType uint32ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint16' } ); // $ExpectType uint16ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint8' } ); // $ExpectType uint8ndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'uint8c' } ); // $ExpectType uint8cndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'bool' } ); // $ExpectType boolndarray
	emptyLike( zeros( 'generic', sh, ord ), { 'dtype': 'generic' } ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument is not an ndarray which has a recognized/supported data type...
{
	emptyLike( '10' ); // $ExpectError
	emptyLike( 10 ); // $ExpectError
	emptyLike( false ); // $ExpectError
	emptyLike( true ); // $ExpectError
	emptyLike( null ); // $ExpectError
	emptyLike( [] ); // $ExpectError
	emptyLike( {} ); // $ExpectError
	emptyLike( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument is not an options object...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	emptyLike( x, '10' ); // $ExpectError
	emptyLike( x, 10 ); // $ExpectError
	emptyLike( x, false ); // $ExpectError
	emptyLike( x, true ); // $ExpectError
	emptyLike( x, [] ); // $ExpectError
	emptyLike( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	emptyLike( x, { 'dtype': '10' } ); // $ExpectError
	emptyLike( x, { 'dtype': 10 } ); // $ExpectError
	emptyLike( x, { 'dtype': null } ); // $ExpectError
	emptyLike( x, { 'dtype': false } ); // $ExpectError
	emptyLike( x, { 'dtype': true } ); // $ExpectError
	emptyLike( x, { 'dtype': [] } ); // $ExpectError
	emptyLike( x, { 'dtype': {} } ); // $ExpectError
	emptyLike( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	emptyLike( x, { 'order': '10' } ); // $ExpectError
	emptyLike( x, { 'order': 10 } ); // $ExpectError
	emptyLike( x, { 'order': false } ); // $ExpectError
	emptyLike( x, { 'order': true } ); // $ExpectError
	emptyLike( x, { 'order': [] } ); // $ExpectError
	emptyLike( x, { 'order': {} } ); // $ExpectError
	emptyLike( x, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `shape` option which is not a valid shape...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	emptyLike( x, { 'shape': '10' } ); // $ExpectError
	emptyLike( x, { 'shape': false } ); // $ExpectError
	emptyLike( x, { 'shape': true } ); // $ExpectError
	emptyLike( x, { 'shape': [ '5' ] } ); // $ExpectError
	emptyLike( x, { 'shape': {} } ); // $ExpectError
	emptyLike( x, { 'shape': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	emptyLike( x, { 'mode': '5' } ); // $ExpectError
	emptyLike( x, { 'mode': 5 } ); // $ExpectError
	emptyLike( x, { 'mode': false } ); // $ExpectError
	emptyLike( x, { 'mode': true } ); // $ExpectError
	emptyLike( x, { 'mode': [ '5' ] } ); // $ExpectError
	emptyLike( x, { 'mode': {} } ); // $ExpectError
	emptyLike( x, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	emptyLike( x, { 'submode': '5' } ); // $ExpectError
	emptyLike( x, { 'submode': 5 } ); // $ExpectError
	emptyLike( x, { 'submode': false } ); // $ExpectError
	emptyLike( x, { 'submode': true } ); // $ExpectError
	emptyLike( x, { 'submode': [ '5' ] } ); // $ExpectError
	emptyLike( x, { 'submode': {} } ); // $ExpectError
	emptyLike( x, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	emptyLike(); // $ExpectError
	emptyLike( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, 1 ); // $ExpectError
}
