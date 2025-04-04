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

import zeros = require( './../../../../base/zeros' );
import empty = require( './../../../../base/empty' );
import scalar2ndarrayLike = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	scalar2ndarrayLike( zeros( 'float64', sh, ord ), 1.0 ); // $ExpectType float64ndarray
	scalar2ndarrayLike( zeros( 'float32', sh, ord ), 1.0 ); // $ExpectType float32ndarray
	scalar2ndarrayLike( zeros( 'complex128', sh, ord ), 1.0 ); // $ExpectType complex128ndarray
	scalar2ndarrayLike( zeros( 'complex64', sh, ord ), 1.0 ); // $ExpectType complex64ndarray
	scalar2ndarrayLike( zeros( 'int32', sh, ord ), 1.0 ); // $ExpectType int32ndarray
	scalar2ndarrayLike( zeros( 'int16', sh, ord ), 1.0 ); // $ExpectType int16ndarray
	scalar2ndarrayLike( zeros( 'int8', sh, ord ), 1.0 ); // $ExpectType int8ndarray
	scalar2ndarrayLike( zeros( 'uint32', sh, ord ), 1.0 ); // $ExpectType uint32ndarray
	scalar2ndarrayLike( zeros( 'uint16', sh, ord ), 1.0 ); // $ExpectType uint16ndarray
	scalar2ndarrayLike( zeros( 'uint8', sh, ord ), 1.0 ); // $ExpectType uint8ndarray
	scalar2ndarrayLike( zeros( 'uint8c', sh, ord ), 1.0 ); // $ExpectType uint8cndarray
	scalar2ndarrayLike( empty( 'bool', sh, ord ), true ); // $ExpectType boolndarray
	scalar2ndarrayLike( zeros( 'generic', sh, ord ), 1.0 ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray which has a recognized/supported data type...
{
	scalar2ndarrayLike( '10', 1.0 ); // $ExpectError
	scalar2ndarrayLike( 5, 1.0 ); // $ExpectError
	scalar2ndarrayLike( false, 1.0 ); // $ExpectError
	scalar2ndarrayLike( true, 1.0 ); // $ExpectError
	scalar2ndarrayLike( null, 1.0 ); // $ExpectError
	scalar2ndarrayLike( [], 1.0 ); // $ExpectError
	scalar2ndarrayLike( {}, 1.0 ); // $ExpectError
	scalar2ndarrayLike( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( 'float64', [ 2, 2 ], 'row-major' );

	scalar2ndarrayLike(); // $ExpectError
	scalar2ndarrayLike( x ); // $ExpectError
	scalar2ndarrayLike( x, 1.0, 1.0 ); // $ExpectError
}
