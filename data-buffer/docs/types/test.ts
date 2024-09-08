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

import zeros = require( './../../../zeros' );
import data = require( './index' );


// TESTS //

// The function returns an ndarray buffer...
{
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'float64' } ) ); // $ExpectType Float64Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'float32' } ) ); // $ExpectType Float32Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'int32' } ) ); // $ExpectType Int32Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'int16' } ) ); // $ExpectType Int16Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'int8' } ) ); // $ExpectType Int8Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'uint32' } ) ); // $ExpectType Uint32Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'uint16' } ) ); // $ExpectType Uint16Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'uint8' } ) ); // $ExpectType Uint8Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'uint8c' } ) ); // $ExpectType Uint8ClampedArray
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'complex128' } ) ); // $ExpectType Complex128Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'complex64' } ) ); // $ExpectType Complex64Array
	data( zeros( [ 3, 2, 1 ], { 'dtype': 'generic' } ) ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a value other than an ndarray...
{
	data( '5' ); // $ExpectError
	data( 5 ); // $ExpectError
	data( true ); // $ExpectError
	data( false ); // $ExpectError
	data( null ); // $ExpectError
	data( undefined ); // $ExpectError
	data( [ '1', '2' ] ); // $ExpectError
	data( {} ); // $ExpectError
	data( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	data(); // $ExpectError
	data( zeros( [ 2, 2 ] ), {} ); // $ExpectError
}
