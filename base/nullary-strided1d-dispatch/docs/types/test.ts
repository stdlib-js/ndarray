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
import NullaryStrided1dDispatch = require( './index' );


// TESTS //

// The function returns an instance for applying a nullary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};

	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes ); // $ExpectType NullaryStrided1dDispatch<number, unknown>

	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, {} ); // $ExpectType NullaryStrided1dDispatch<number, unknown>

	const nullary = NullaryStrided1dDispatch;
	nullary<number>( table, [ dtypes ], dtypes ); // $ExpectType NullaryStrided1dDispatch<number, unknown>
	nullary<number>( table, [ dtypes ], dtypes, {} ); // $ExpectType NullaryStrided1dDispatch<number, unknown>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];

	new NullaryStrided1dDispatch( '5', [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( 5, [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( true, [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( false, [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( null, [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( void 0, [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( 'abc', [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( [], [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( {}, [ dtypes ], dtypes ); // $ExpectError
	new NullaryStrided1dDispatch( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes ); // $ExpectError

	new NullaryStrided1dDispatch( '5', [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( 5, [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( true, [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( false, [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( null, [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( void 0, [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( 'abc', [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( [], [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( {}, [ dtypes ], dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, {} ); // $ExpectError

	const nullary = NullaryStrided1dDispatch;
	nullary( '5', [ dtypes ], dtypes ); // $ExpectError
	nullary( 5, [ dtypes ], dtypes ); // $ExpectError
	nullary( true, [ dtypes ], dtypes ); // $ExpectError
	nullary( false, [ dtypes ], dtypes ); // $ExpectError
	nullary( null, [ dtypes ], dtypes ); // $ExpectError
	nullary( void 0, [ dtypes ], dtypes ); // $ExpectError
	nullary( 'abc', [ dtypes ], dtypes ); // $ExpectError
	nullary( [], [ dtypes ], dtypes ); // $ExpectError
	nullary( {}, [ dtypes ], dtypes ); // $ExpectError
	nullary( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes ); // $ExpectError

	nullary( '5', [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( 5, [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( true, [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( false, [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( null, [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( void 0, [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( 'abc', [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( [], [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( {}, [ dtypes ], dtypes, {} ); // $ExpectError
	nullary( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};

	new NullaryStrided1dDispatch<number>( table, '5', dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, 5, dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, true, dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, false, dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, null, dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, void 0, dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, 'abc', dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, {}, dtypes ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, ( x: number ): number => x, dtypes ); // $ExpectError

	new NullaryStrided1dDispatch<number>( table, '5', dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, 5, dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, true, dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, false, dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, null, dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, void 0, dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, 'abc', dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, {}, dtypes, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, ( x: number ): number => x, dtypes, {} ); // $ExpectError

	const nullary = NullaryStrided1dDispatch;
	nullary<number>( table, '5', dtypes ); // $ExpectError
	nullary<number>( table, 5, dtypes ); // $ExpectError
	nullary<number>( table, true, dtypes ); // $ExpectError
	nullary<number>( table, false, dtypes ); // $ExpectError
	nullary<number>( table, null, dtypes ); // $ExpectError
	nullary<number>( table, void 0, dtypes ); // $ExpectError
	nullary<number>( table, 'abc', dtypes ); // $ExpectError
	nullary<number>( table, {}, dtypes ); // $ExpectError
	nullary<number>( table, ( x: number ): number => x, dtypes ); // $ExpectError

	nullary<number>( table, '5', dtypes, {} ); // $ExpectError
	nullary<number>( table, 5, dtypes, {} ); // $ExpectError
	nullary<number>( table, true, dtypes, {} ); // $ExpectError
	nullary<number>( table, false, dtypes, {} ); // $ExpectError
	nullary<number>( table, null, dtypes, {} ); // $ExpectError
	nullary<number>( table, void 0, dtypes, {} ); // $ExpectError
	nullary<number>( table, 'abc', dtypes, {} ); // $ExpectError
	nullary<number>( table, {}, dtypes, {} ); // $ExpectError
	nullary<number>( table, ( x: number ): number => x, dtypes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};

	new NullaryStrided1dDispatch<number>( table, [ dtypes ], '5' ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], 5 ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], true ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], false ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], null ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], void 0 ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], 'abc' ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], ( x: number ): number => x ); // $ExpectError

	new NullaryStrided1dDispatch<number>( table, [ dtypes ], '5', {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], 5, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], true, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], false, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], null, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], void 0, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], 'abc', {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], {}, {} ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], ( x: number ): number => x, {} ); // $ExpectError

	const nullary = NullaryStrided1dDispatch;
	nullary<number>( table, [ dtypes ], '5' ); // $ExpectError
	nullary<number>( table, [ dtypes ], 5 ); // $ExpectError
	nullary<number>( table, [ dtypes ], true ); // $ExpectError
	nullary<number>( table, [ dtypes ], false ); // $ExpectError
	nullary<number>( table, [ dtypes ], null ); // $ExpectError
	nullary<number>( table, [ dtypes ], void 0 ); // $ExpectError
	nullary<number>( table, [ dtypes ], 'abc' ); // $ExpectError
	nullary<number>( table, [ dtypes ], {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], ( x: number ): number => x ); // $ExpectError

	nullary<number>( table, [ dtypes ], '5', {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], 5, {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], true, {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], false, {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], null, {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], void 0, {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], 'abc', {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], {}, {} ); // $ExpectError
	nullary<number>( table, [ dtypes ], ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};

	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, '5' ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, 5 ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, true ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, false ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, null ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, 'abc' ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError

	const nullary = NullaryStrided1dDispatch;
	nullary<number>( table, [ dtypes ], dtypes, '5' ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, 5 ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, true ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, false ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, null ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, 'abc' ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};

	new NullaryStrided1dDispatch(); // $ExpectError
	new NullaryStrided1dDispatch<number>( table ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ] ); // $ExpectError
	new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes, {}, {} ); // $ExpectError

	const nullary = NullaryStrided1dDispatch;
	nullary(); // $ExpectError
	nullary<number>( table ); // $ExpectError
	nullary<number>( table, [ dtypes ] ); // $ExpectError
	nullary<number>( table, [ dtypes ], dtypes, {}, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes );
	f1.assign( '5', x ); // $ExpectError
	f1.assign( 5, x ); // $ExpectError
	f1.assign( true, x ); // $ExpectError
	f1.assign( false, x ); // $ExpectError
	f1.assign( null, x ); // $ExpectError
	f1.assign( void 0, x ); // $ExpectError
	f1.assign( {}, x ); // $ExpectError
	f1.assign( ( x: number ): number => x, x ); // $ExpectError

	f1.assign( '5', x, {} ); // $ExpectError
	f1.assign( 5, x, {} ); // $ExpectError
	f1.assign( true, x, {} ); // $ExpectError
	f1.assign( false, x, {} ); // $ExpectError
	f1.assign( null, x, {} ); // $ExpectError
	f1.assign( void 0, x, {} ); // $ExpectError
	f1.assign( {}, x, {} ); // $ExpectError
	f1.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid second argument...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes );
	f1.assign( x, '5' ); // $ExpectError
	f1.assign( x, 5 ); // $ExpectError
	f1.assign( x, true ); // $ExpectError
	f1.assign( x, false ); // $ExpectError
	f1.assign( x, null ); // $ExpectError
	f1.assign( x, [] ); // $ExpectError
	f1.assign( x, ( x: number ): number => x ); // $ExpectError

	f1.assign( x, '5', {} ); // $ExpectError
	f1.assign( x, 5, {} ); // $ExpectError
	f1.assign( x, true, {} ); // $ExpectError
	f1.assign( x, false, {} ); // $ExpectError
	f1.assign( x, null, {} ); // $ExpectError
	f1.assign( x, [], {} ); // $ExpectError
	f1.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes );
	f1.assign( x, { 'dims': '5' } ); // $ExpectError
	f1.assign( x, { 'dims': 5 } ); // $ExpectError
	f1.assign( x, { 'dims': true } ); // $ExpectError
	f1.assign( x, { 'dims': false } ); // $ExpectError
	f1.assign( x, { 'dims': null } ); // $ExpectError
	f1.assign( x, { 'dims': {} } ); // $ExpectError
	f1.assign( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32', 'generic' ];
	const table = {
		'default': gsorthp
	};

	const f1 = new NullaryStrided1dDispatch<number>( table, [ dtypes ], dtypes );
	f1.assign(); // $ExpectError
}
