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

import zeros = require( './../../../zeros' );
import MultiSlice = require( '@stdlib/slice/multi' );
import fillSlice = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const s = new MultiSlice( null, null );

	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, s ); // $ExpectType float64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0, s ); // $ExpectType float32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), { 're': 10.0, 'im': 0.0 }, s ); // $ExpectType complex128ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), 10.0, s ); // $ExpectType complex128ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), { 're': 10.0, 'im': 0.0 }, s ); // $ExpectType complex64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), 10.0, s ); // $ExpectType complex64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10.0, s ); // $ExpectType int32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int16' } ), 10.0, s ); // $ExpectType int16ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int8' } ), 10.0, s ); // $ExpectType int8ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint32' } ), 10.0, s ); // $ExpectType uint32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint16' } ), 10.0, s ); // $ExpectType uint16ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint8' } ), 10.0, s ); // $ExpectType uint8ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint8c' } ), 10.0, s ); // $ExpectType uint8cndarray

	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, s, { 'strict': false } ); // $ExpectType float64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0, s, { 'strict': false } ); // $ExpectType float32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), { 're': 10.0, 'im': 0.0 }, s, { 'strict': false } ); // $ExpectType complex128ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), { 're': 10.0, 'im': 0.0 }, s, { 'strict': false } ); // $ExpectType complex64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10.0, s, { 'strict': false } ); // $ExpectType int32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int16' } ), 10.0, s, { 'strict': false } ); // $ExpectType int16ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int8' } ), 10.0, s, { 'strict': false } ); // $ExpectType int8ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint32' } ), 10.0, s, { 'strict': false } ); // $ExpectType uint32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint16' } ), 10.0, s, { 'strict': false } ); // $ExpectType uint16ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint8' } ), 10.0, s, { 'strict': false } ); // $ExpectType uint8ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint8c' } ), 10.0, s, { 'strict': false } ); // $ExpectType uint8cndarray

	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, s, { 'strict': true } ); // $ExpectType float64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0, s, { 'strict': true } ); // $ExpectType float32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), { 're': 10.0, 'im': 0.0 }, s, { 'strict': true } ); // $ExpectType complex128ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), { 're': 10.0, 'im': 0.0 }, s, { 'strict': true } ); // $ExpectType complex64ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10.0, s, { 'strict': true } ); // $ExpectType int32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int16' } ), 10.0, s, { 'strict': true } ); // $ExpectType int16ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'int8' } ), 10.0, s, { 'strict': true } ); // $ExpectType int8ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint32' } ), 10.0, s, { 'strict': true } ); // $ExpectType uint32ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint16' } ), 10.0, s, { 'strict': true } ); // $ExpectType uint16ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint8' } ), 10.0, s, { 'strict': true } ); // $ExpectType uint8ndarray
	fillSlice( zeros( [ 2, 2 ], { 'dtype': 'uint8c' } ), 10.0, s, { 'strict': true } ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = new MultiSlice( null, null );

	fillSlice( '10', 10.0, s ); // $ExpectError
	fillSlice( 10, 10.0, s ); // $ExpectError
	fillSlice( false, 10.0, s ); // $ExpectError
	fillSlice( true, 10.0, s ); // $ExpectError
	fillSlice( null, 10.0, s ); // $ExpectError
	fillSlice( [], 10.0, s ); // $ExpectError
	fillSlice( {}, 10.0, s ); // $ExpectError
	fillSlice( ( x: number ): number => x, 10.0, s ); // $ExpectError

	fillSlice( '10', 10.0, s, {} ); // $ExpectError
	fillSlice( 10, 10.0, s, {} ); // $ExpectError
	fillSlice( false, 10.0, s, {} ); // $ExpectError
	fillSlice( true, 10.0, s, {} ); // $ExpectError
	fillSlice( null, 10.0, s, {} ); // $ExpectError
	fillSlice( [], 10.0, s, {} ); // $ExpectError
	fillSlice( {}, 10.0, s, {} ); // $ExpectError
	fillSlice( ( x: number ): number => x, 10.0, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	const x = zeros( [ 2, 2 ] );
	const s = new MultiSlice( null, null );

	fillSlice( x, '10', s ); // $ExpectError
	fillSlice( x, false, s ); // $ExpectError
	fillSlice( x, true, s ); // $ExpectError
	fillSlice( x, null, s ); // $ExpectError
	fillSlice( x, [], s ); // $ExpectError
	fillSlice( x, {}, s ); // $ExpectError
	fillSlice( x, ( x: number ): number => x, s ); // $ExpectError

	fillSlice( x, '10', s, {} ); // $ExpectError
	fillSlice( x, false, s, {} ); // $ExpectError
	fillSlice( x, true, s, {} ); // $ExpectError
	fillSlice( x, null, s, {} ); // $ExpectError
	fillSlice( x, [], s, {} ); // $ExpectError
	fillSlice( x, {}, s, {} ); // $ExpectError
	fillSlice( x, ( x: number ): number => x, s, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid slice argument...
{
	const x = zeros( [ 2, 2 ] );

	fillSlice( x, 10.0, '5' ); // $ExpectError
	fillSlice( x, 10.0, false ); // $ExpectError
	fillSlice( x, 10.0, true ); // $ExpectError
	fillSlice( x, 10.0, [ '5' ] ); // $ExpectError
	fillSlice( x, 10.0, ( x: number ): number => x ); // $ExpectError

	fillSlice( x, 10.0, null, '5' ); // $ExpectError
	fillSlice( x, 10.0, null, false ); // $ExpectError
	fillSlice( x, 10.0, null, true ); // $ExpectError
	fillSlice( x, 10.0, null, [ '5' ] ); // $ExpectError
	fillSlice( x, 10.0, null, ( x: number ): number => x ); // $ExpectError

	fillSlice( x, 10.0, '5', {} ); // $ExpectError
	fillSlice( x, 10.0, false, {} ); // $ExpectError
	fillSlice( x, 10.0, true, {} ); // $ExpectError
	fillSlice( x, 10.0, [ '5' ], {} ); // $ExpectError
	fillSlice( x, 10.0, ( x: number ): number => x, {} ); // $ExpectError

	fillSlice( x, 10.0, null, '5', {} ); // $ExpectError
	fillSlice( x, 10.0, null, false, {} ); // $ExpectError
	fillSlice( x, 10.0, null, true, {} ); // $ExpectError
	fillSlice( x, 10.0, null, [ '5' ], {} ); // $ExpectError
	fillSlice( x, 10.0, null, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ] );
	const s = new MultiSlice( null, null );

	fillSlice( x, 10.0, s, '5' ); // $ExpectError
	fillSlice( x, 10.0, s, 5 ); // $ExpectError
	fillSlice( x, 10.0, s, null ); // $ExpectError
	fillSlice( x, 10.0, s, true ); // $ExpectError
	fillSlice( x, 10.0, s, false ); // $ExpectError
	fillSlice( x, 10.0, s, [ '5' ] ); // $ExpectError
	fillSlice( x, 10.0, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = zeros( [ 2, 2 ] );
	const s = new MultiSlice( null, null );

	fillSlice( x, 10.0, s, { 'strict': '5' } ); // $ExpectError
	fillSlice( x, 10.0, s, { 'strict': 5 } ); // $ExpectError
	fillSlice( x, 10.0, s, { 'strict': null } ); // $ExpectError
	fillSlice( x, 10.0, s, { 'strict': [ '5' ] } ); // $ExpectError
	fillSlice( x, 10.0, s, { 'strict': {} } ); // $ExpectError
	fillSlice( x, 10.0, s, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const s = new MultiSlice( null, null );

	fillSlice(); // $ExpectError
	fillSlice( x ); // $ExpectError
	fillSlice( x, 10.0, s, {}, {} ); // $ExpectError
}
