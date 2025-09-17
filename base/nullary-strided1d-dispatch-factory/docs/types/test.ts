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

/* eslint-disable @typescript-eslint/no-unused-expressions, space-in-parens */

/// <reference types="@stdlib/types"/>

import { DataType } from '@stdlib/types/ndarray';
import gsorthp = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
import zeros = require( './../../../../zeros' );
import scalar2ndarray = require( './../../../../from-scalar' );
import factory = require( './index' );


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	factory<number>( table, [ dtypes ], dtypes ); // $ExpectType NullaryFunction<number>
	factory<number>( table, [ dtypes ], dtypes, {} ); // $ExpectType NullaryFunction<number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory( '5', [ dtypes ], dtypes ); // $ExpectError
	factory( 5, [ dtypes ], dtypes ); // $ExpectError
	factory( true, [ dtypes ], dtypes ); // $ExpectError
	factory( false, [ dtypes ], dtypes ); // $ExpectError
	factory( null, [ dtypes ], dtypes ); // $ExpectError
	factory( void 0, [ dtypes ], dtypes ); // $ExpectError
	factory( 'abc', [ dtypes ], dtypes ); // $ExpectError
	factory( {}, [ dtypes ], dtypes ); // $ExpectError
	factory( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes ); // $ExpectError

	factory( '5', [ dtypes ], dtypes, {} ); // $ExpectError
	factory( 5, [ dtypes ], dtypes, {} ); // $ExpectError
	factory( true, [ dtypes ], dtypes, {} ); // $ExpectError
	factory( false, [ dtypes ], dtypes, {} ); // $ExpectError
	factory( null, [ dtypes ], dtypes, {} ); // $ExpectError
	factory( void 0, [ dtypes ], dtypes, {} ); // $ExpectError
	factory( 'abc', [ dtypes ], dtypes, {} ); // $ExpectError
	factory( {}, [ dtypes ], dtypes, {} ); // $ExpectError
	factory( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	factory<number>( table, '5', dtypes ); // $ExpectError
	factory<number>( table, 5, dtypes ); // $ExpectError
	factory<number>( table, true, dtypes ); // $ExpectError
	factory<number>( table, false, dtypes ); // $ExpectError
	factory<number>( table, null, dtypes ); // $ExpectError
	factory<number>( table, void 0, dtypes ); // $ExpectError
	factory<number>( table, 'abc', dtypes ); // $ExpectError
	factory<number>( table, {}, dtypes ); // $ExpectError
	factory<number>( table, ( x: number ): number => x, dtypes ); // $ExpectError

	factory<number>( table, '5', dtypes, {} ); // $ExpectError
	factory<number>( table, 5, dtypes, {} ); // $ExpectError
	factory<number>( table, true, dtypes, {} ); // $ExpectError
	factory<number>( table, false, dtypes, {} ); // $ExpectError
	factory<number>( table, null, dtypes, {} ); // $ExpectError
	factory<number>( table, void 0, dtypes, {} ); // $ExpectError
	factory<number>( table, 'abc', dtypes, {} ); // $ExpectError
	factory<number>( table, {}, dtypes, {} ); // $ExpectError
	factory<number>( table, ( x: number ): number => x, dtypes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	factory<number>( table, [ dtypes ], '5' ); // $ExpectError
	factory<number>( table, [ dtypes ], 5 ); // $ExpectError
	factory<number>( table, [ dtypes ], true ); // $ExpectError
	factory<number>( table, [ dtypes ], false ); // $ExpectError
	factory<number>( table, [ dtypes ], null ); // $ExpectError
	factory<number>( table, [ dtypes ], void 0 ); // $ExpectError
	factory<number>( table, [ dtypes ], 'abc' ); // $ExpectError
	factory<number>( table, [ dtypes ], {} ); // $ExpectError
	factory<number>( table, [ dtypes ], ( x: number ): number => x ); // $ExpectError

	factory<number>( table, [ dtypes ], '5', {} ); // $ExpectError
	factory<number>( table, [ dtypes ], 5, {} ); // $ExpectError
	factory<number>( table, [ dtypes ], true, {} ); // $ExpectError
	factory<number>( table, [ dtypes ], false, {} ); // $ExpectError
	factory<number>( table, [ dtypes ], null, {} ); // $ExpectError
	factory<number>( table, [ dtypes ], void 0, {} ); // $ExpectError
	factory<number>( table, [ dtypes ], 'abc', {} ); // $ExpectError
	factory<number>( table, [ dtypes ], {}, {} ); // $ExpectError
	factory<number>( table, [ dtypes ], ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	factory<number>( table, [ dtypes ], dtypes, '5' ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, 5 ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, true ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, false ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, null ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, 'abc' ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	factory(); // $ExpectError
	factory<number>( table ); // $ExpectError
	factory<number>( table, [ dtypes ] ); // $ExpectError
	factory<number>( table, [ dtypes ], dtypes, {}, {} ); // $ExpectError
}

// The function returns a function which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const o = scalar2ndarray( 1.0, {
		'dtype': 'generic'
	});

	const f = factory<number>( table, [ dtypes ], dtypes );
	f( x ); // $ExpectType float64ndarray
	f( x, o ); // $ExpectType float64ndarray
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	const f = factory<number>( table, [ dtypes ], dtypes );
	f( '5' ); // $ExpectError
	f( 5 ); // $ExpectError
	f( true ); // $ExpectError
	f( false ); // $ExpectError
	f( null ); // $ExpectError
	f( void 0 ); // $ExpectError
	f( {} ); // $ExpectError
	f( ( x: number ): number => x ); // $ExpectError

	f( '5', {} ); // $ExpectError
	f( 5, {} ); // $ExpectError
	f( true, {} ); // $ExpectError
	f( false, {} ); // $ExpectError
	f( null, {} ); // $ExpectError
	f( void 0, {} ); // $ExpectError
	f( {}, {} ); // $ExpectError
	f( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const o = scalar2ndarray( 1.0, {
		'dtype': 'generic'
	});

	const f = factory<number>( table, [ dtypes ], dtypes );
	f( x, { 'dims': '5' } ); // $ExpectError
	f( x, { 'dims': 5 } ); // $ExpectError
	f( x, { 'dims': true } ); // $ExpectError
	f( x, { 'dims': false } ); // $ExpectError
	f( x, { 'dims': null } ); // $ExpectError
	f( x, { 'dims': {} } ); // $ExpectError
	f( x, { 'dims': ( x: number ): number => x } ); // $ExpectError

	f( x, o, { 'dims': '5' } ); // $ExpectError
	f( x, o, { 'dims': 5 } ); // $ExpectError
	f( x, o, { 'dims': true } ); // $ExpectError
	f( x, o, { 'dims': false } ); // $ExpectError
	f( x, o, { 'dims': null } ); // $ExpectError
	f( x, o, { 'dims': {} } ); // $ExpectError
	f( x, o, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gsorthp
	};

	const f = factory<number>( table, [ dtypes ], dtypes );
	f(); // $ExpectError
}
