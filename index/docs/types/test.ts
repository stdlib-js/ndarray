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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import empty = require( './../../../empty' );
import ndindex = require( './index' );


// TESTS //

// The function returns an array index...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );
	const y = empty( [ 2 ], { 'dtype': 'generic' } );
	const z = empty( [ 2 ], { 'dtype': 'uint8' } );
	const w = empty( [ 2 ], { 'dtype': 'int32' } );
	const v = empty( [ 2 ], { 'dtype': 'bool' } );

	new ndindex( x ); // $ExpectType GenericIntegerArrayIndex
	new ndindex( y ); // $ExpectType GenericIntegerArrayIndex
	new ndindex( z ); // $ExpectType MaskArrayIndex
	new ndindex( w ); // $ExpectType Int32ArrayIndex
	new ndindex( v ); // $ExpectType BooleanArrayIndex

	new ndindex( x, { 'persist': true } ); // $ExpectType GenericIntegerArrayIndex
	new ndindex( y, { 'persist': true, 'kind': 'cartesian' } ); // $ExpectType CartesianGenericArrayIndex
	new ndindex( y, { 'persist': true, 'kind': 'linear' } ); // $ExpectType LinearGenericArrayIndex
	new ndindex( z, { 'persist': true } ); // $ExpectType MaskArrayIndex
	new ndindex( w, { 'persist': true } ); // $ExpectType Int32ArrayIndex
	new ndindex( w, { 'persist': true, 'kind': 'cartesian' } ); // $ExpectType CartesianInt32ArrayIndex
	new ndindex( w, { 'persist': true, 'kind': 'linear' } ); // $ExpectType LinearInt32ArrayIndex
	new ndindex( v, { 'persist': true } ); // $ExpectType BooleanArrayIndex

	ndindex( x ); // $ExpectType GenericIntegerArrayIndex
	ndindex( y ); // $ExpectType GenericIntegerArrayIndex
	ndindex( z ); // $ExpectType MaskArrayIndex
	ndindex( w ); // $ExpectType Int32ArrayIndex
	ndindex( v ); // $ExpectType BooleanArrayIndex

	ndindex( x, { 'persist': true } ); // $ExpectType GenericIntegerArrayIndex
	ndindex( y, { 'persist': true, 'kind': 'cartesian' } ); // $ExpectType CartesianGenericArrayIndex
	ndindex( y, { 'persist': true, 'kind': 'linear' } ); // $ExpectType LinearGenericArrayIndex
	ndindex( z, { 'persist': true } ); // $ExpectType MaskArrayIndex
	ndindex( w, { 'persist': true } ); // $ExpectType Int32ArrayIndex
	ndindex( w, { 'persist': true, 'kind': 'cartesian' } ); // $ExpectType CartesianInt32ArrayIndex
	ndindex( w, { 'persist': true, 'kind': 'linear' } ); // $ExpectType LinearInt32ArrayIndex
	ndindex( v, { 'persist': true } ); // $ExpectType BooleanArrayIndex
}

// The compiler throws an error if the function is provided first argument which is not a valid ndarray...
{
	ndindex( 'abc' ); // $ExpectError
	ndindex( 1 ); // $ExpectError
	ndindex( null ); // $ExpectError
	ndindex( void 0 ); // $ExpectError
	ndindex( true ); // $ExpectError
	ndindex( false ); // $ExpectError
	ndindex( [] ); // $ExpectError
	ndindex( {} ); // $ExpectError
	ndindex( [ {} ] ); // $ExpectError
	ndindex( ( x: number ): number => x ); // $ExpectError

	ndindex( 'abc', {} ); // $ExpectError
	ndindex( 1, {} ); // $ExpectError
	ndindex( null, {} ); // $ExpectError
	ndindex( void 0, {} ); // $ExpectError
	ndindex( true, {} ); // $ExpectError
	ndindex( false, {} ); // $ExpectError
	ndindex( [], {} ); // $ExpectError
	ndindex( {}, {} ); // $ExpectError
	ndindex( [ {} ], {} ); // $ExpectError
	ndindex( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided second argument which is not an object...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex( x, 'abc' ); // $ExpectError
	ndindex( x, 1 ); // $ExpectError
	ndindex( x, null ); // $ExpectError
	ndindex( x, true ); // $ExpectError
	ndindex( x, false ); // $ExpectError
	ndindex( x, [ {} ] ); // $ExpectError
	ndindex( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided `persist` option which is not a boolean...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex( x, { 'persist': 'abc' } ); // $ExpectError
	ndindex( x, { 'persist': 1 } ); // $ExpectError
	ndindex( x, { 'persist': null } ); // $ExpectError
	ndindex( x, { 'persist': {} } ); // $ExpectError
	ndindex( x, { 'persist': [] } ); // $ExpectError
	ndindex( x, { 'persist': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `kind` option...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex( x, { 'kind': 'abc' } ); // $ExpectError
	ndindex( x, { 'kind': 1 } ); // $ExpectError
	ndindex( x, { 'kind': null } ); // $ExpectError
	ndindex( x, { 'kind': {} } ); // $ExpectError
	ndindex( x, { 'kind': [] } ); // $ExpectError
	ndindex( x, { 'kind': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex(); // $ExpectError
	ndindex( x, {}, {} ); // $ExpectError
}

// Attached to the main export is a `free` function which returns a boolean...
{
	ndindex.free( '0' ); // $ExpectType boolean
}

// The compiler throws an error if the `free` method is provided first argument which is not a string...
{
	ndindex.free( 1 ); // $ExpectError
	ndindex.free( null ); // $ExpectError
	ndindex.free( void 0 ); // $ExpectError
	ndindex.free( true ); // $ExpectError
	ndindex.free( false ); // $ExpectError
	ndindex.free( {} ); // $ExpectError
	ndindex.free( [] ); // $ExpectError
	ndindex.free( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `free` method is provided an unsupported number of arguments...
{
	ndindex.free(); // $ExpectError
	ndindex.free( '0', {} ); // $ExpectError
}

// Attached to the main export is a `get` function which returns array object data...
{
	ndindex.get( '0' ); // $ExpectType ndindexObject | null
}

// The compiler throws an error if the `get` method is provided first argument which is not a string...
{
	ndindex.get( 1 ); // $ExpectError
	ndindex.get( null ); // $ExpectError
	ndindex.get( void 0 ); // $ExpectError
	ndindex.get( true ); // $ExpectError
	ndindex.get( false ); // $ExpectError
	ndindex.get( {} ); // $ExpectError
	ndindex.get( [] ); // $ExpectError
	ndindex.get( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `get` method is provided an unsupported number of arguments...
{
	ndindex.get(); // $ExpectError
	ndindex.get( '0', {} ); // $ExpectError
}

// An array index has a `dtype` property which returns a string...
{
	const x = new ndindex( empty( [ 2 ], { 'dtype': 'generic' } ) );

	x.dtype; // $ExpectType "generic"
}

// An array index has an `id` property which returns a string...
{
	const x = new ndindex( empty( [ 2 ], { 'dtype': 'generic' } ) );

	x.id; // $ExpectType string
}

// An array index has a `type` property which returns a string...
{
	const x = new ndindex( empty( [ 2 ], { 'dtype': 'generic' } ) );

	x.type; // $ExpectType "int"
}

// An array index has a `data` property which returns a ndarray...
{
	const x = new ndindex( empty( [ 2 ], { 'dtype': 'uint8' } ) );

	x.data; // $ExpectType uint8ndarray
}

// An array index has an `isCached` property which returns a boolean...
{
	const x = new ndindex( empty( [ 2 ], { 'dtype': 'generic' } ) );

	x.isCached; // $ExpectType boolean
}

// Attached to the main export is a `cartesianIndex` function which returns an array index...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );
	const w = empty( [ 2 ], { 'dtype': 'int32' } );

	ndindex.cartesianIndex( x ); // $ExpectType CartesianGenericArrayIndex
	ndindex.cartesianIndex( w ); // $ExpectType CartesianInt32ArrayIndex

	ndindex.cartesianIndex( x, { 'persist': true } ); // $ExpectType CartesianGenericArrayIndex
	ndindex.cartesianIndex( w, { 'persist': true } ); // $ExpectType CartesianInt32ArrayIndex
}

// The compiler throws an error if the `cartesianIndex` method is provided first argument which is not a valid ndarray...
{
	ndindex.cartesianIndex( 1 ); // $ExpectError
	ndindex.cartesianIndex( null ); // $ExpectError
	ndindex.cartesianIndex( void 0 ); // $ExpectError
	ndindex.cartesianIndex( true ); // $ExpectError
	ndindex.cartesianIndex( false ); // $ExpectError
	ndindex.cartesianIndex( {} ); // $ExpectError
	ndindex.cartesianIndex( [] ); // $ExpectError
	ndindex.cartesianIndex( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `cartesianIndex` method is provided `persist` option which is not a boolean...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex.cartesianIndex( x, { 'persist': 'abc' } ); // $ExpectError
	ndindex.cartesianIndex( x, { 'persist': 1 } ); // $ExpectError
	ndindex.cartesianIndex( x, { 'persist': null } ); // $ExpectError
	ndindex.cartesianIndex( x, { 'persist': {} } ); // $ExpectError
	ndindex.cartesianIndex( x, { 'persist': [] } ); // $ExpectError
	ndindex.cartesianIndex( x, { 'persist': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `cartesianIndex` method is provided an unsupported number of arguments...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex.cartesianIndex(); // $ExpectError
	ndindex.cartesianIndex( x, {}, {} ); // $ExpectError
}

// Attached to the main export is a `linearIndex` function which returns an array index...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );
	const w = empty( [ 2 ], { 'dtype': 'int32' } );

	ndindex.linearIndex( x ); // $ExpectType LinearGenericArrayIndex
	ndindex.linearIndex( w ); // $ExpectType LinearInt32ArrayIndex

	ndindex.linearIndex( x, { 'persist': true } ); // $ExpectType LinearGenericArrayIndex
	ndindex.linearIndex( w, { 'persist': true } ); // $ExpectType LinearInt32ArrayIndex
}

// The compiler throws an error if the `linearIndex` method is provided first argument which is not a valid ndarray...
{
	ndindex.linearIndex( 1 ); // $ExpectError
	ndindex.linearIndex( null ); // $ExpectError
	ndindex.linearIndex( void 0 ); // $ExpectError
	ndindex.linearIndex( true ); // $ExpectError
	ndindex.linearIndex( false ); // $ExpectError
	ndindex.linearIndex( {} ); // $ExpectError
	ndindex.linearIndex( [] ); // $ExpectError
	ndindex.linearIndex( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `linearIndex` method is provided `persist` option which is not a boolean...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex.linearIndex( x, { 'persist': 'abc' } ); // $ExpectError
	ndindex.linearIndex( x, { 'persist': 1 } ); // $ExpectError
	ndindex.linearIndex( x, { 'persist': null } ); // $ExpectError
	ndindex.linearIndex( x, { 'persist': {} } ); // $ExpectError
	ndindex.linearIndex( x, { 'persist': [] } ); // $ExpectError
	ndindex.linearIndex( x, { 'persist': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `linearIndex` method is provided an unsupported number of arguments...
{
	const x = empty( [ 2 ], { 'dtype': 'generic' } );

	ndindex.linearIndex(); // $ExpectError
	ndindex.linearIndex( x, {}, {} ); // $ExpectError
}
