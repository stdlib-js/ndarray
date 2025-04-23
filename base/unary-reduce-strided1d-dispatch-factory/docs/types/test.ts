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
import max = require( '@stdlib/stats/base/ndarray/max' );
import zeros = require( './../../../../zeros' );
import factory = require( './index' );


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	factory<number, number>( table, [ dtypes ], dtypes, 'same' ); // $ExpectType UnaryFunction<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory( '5', [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( 5, [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( true, [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( false, [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( null, [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( void 0, [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( 'abc', [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( {}, [ dtypes ], dtypes, 'same' ); // $ExpectError
	factory( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	factory<number, number>( table, '5', dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, 5, dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, true, dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, false, dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, null, dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, void 0, dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, 'abc', dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, {}, dtypes, 'same' ); // $ExpectError
	factory<number, number>( table, ( x: number ): number => x, dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	factory<number, number>( table, [ dtypes ], '5', 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], 5, 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], true, 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], false, 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], null, 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], void 0, 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], 'abc', 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], {}, 'same' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], ( x: number ): number => x, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a recognized policy...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	factory<number, number>( table, [ dtypes ], dtypes, '5' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, 5 ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, true ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, false ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, null ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, void 0 ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, 'abc' ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, {} ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	factory(); // $ExpectError
	factory<number, number>( abs ); // $ExpectError
	factory<number, number>( table, [ dtypes ] ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, 'same', {} ); // $ExpectError
}

// The function returns a function which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f( x ); // $ExpectType OutputArray<number>
	f( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
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

// The compiler throws an error if the returned function is provided an invalid second argument...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f( x, '5' ); // $ExpectError
	f( x, true ); // $ExpectError
	f( x, false ); // $ExpectError
	f( x, null ); // $ExpectError
	f( x, [] ); // $ExpectError
	f( x, ( x: number ): number => x ); // $ExpectError

	f( x, '5', {} ); // $ExpectError
	f( x, true, {} ); // $ExpectError
	f( x, false, {} ); // $ExpectError
	f( x, null, {} ); // $ExpectError
	f( x, [], {} ); // $ExpectError
	f( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f( x, { 'dtype': '5' } ); // $ExpectError
	f( x, { 'dtype': 5 } ); // $ExpectError
	f( x, { 'dtype': true } ); // $ExpectError
	f( x, { 'dtype': false } ); // $ExpectError
	f( x, { 'dtype': null } ); // $ExpectError
	f( x, { 'dtype': [] } ); // $ExpectError
	f( x, { 'dtype': {} } ); // $ExpectError
	f( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `keepdims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f( x, { 'keepdims': '5' } ); // $ExpectError
	f( x, { 'keepdims': 5 } ); // $ExpectError
	f( x, { 'keepdims': null } ); // $ExpectError
	f( x, { 'keepdims': [] } ); // $ExpectError
	f( x, { 'keepdims': {} } ); // $ExpectError
	f( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f( x, { 'dims': '5' } ); // $ExpectError
	f( x, { 'dims': 5 } ); // $ExpectError
	f( x, { 'dims': true } ); // $ExpectError
	f( x, { 'dims': false } ); // $ExpectError
	f( x, { 'dims': null } ); // $ExpectError
	f( x, { 'dims': {} } ); // $ExpectError
	f( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f(); // $ExpectError
}

// The function returns a function having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f.assign( x, x ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f.assign( '5', x ); // $ExpectError
	f.assign( 5, x ); // $ExpectError
	f.assign( true, x ); // $ExpectError
	f.assign( false, x ); // $ExpectError
	f.assign( null, x ); // $ExpectError
	f.assign( void 0, x ); // $ExpectError
	f.assign( {}, x ); // $ExpectError
	f.assign( ( x: number ): number => x, x ); // $ExpectError

	f.assign( '5', x, {} ); // $ExpectError
	f.assign( 5, x, {} ); // $ExpectError
	f.assign( true, x, {} ); // $ExpectError
	f.assign( false, x, {} ); // $ExpectError
	f.assign( null, x, {} ); // $ExpectError
	f.assign( void 0, x, {} ); // $ExpectError
	f.assign( {}, x, {} ); // $ExpectError
	f.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f.assign( x, '5' ); // $ExpectError
	f.assign( x, 5 ); // $ExpectError
	f.assign( x, true ); // $ExpectError
	f.assign( x, false ); // $ExpectError
	f.assign( x, null ); // $ExpectError
	f.assign( x, void 0 ); // $ExpectError
	f.assign( x, ( x: number ): number => x ); // $ExpectError

	f.assign( x, '5', {} ); // $ExpectError
	f.assign( x, 5, {} ); // $ExpectError
	f.assign( x, true, {} ); // $ExpectError
	f.assign( x, false, {} ); // $ExpectError
	f.assign( x, null, {} ); // $ExpectError
	f.assign( x, void 0, {} ); // $ExpectError
	f.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f.assign( x, x, { 'dims': '5' } ); // $ExpectError
	f.assign( x, x, { 'dims': 5 } ); // $ExpectError
	f.assign( x, x, { 'dims': true } ); // $ExpectError
	f.assign( x, x, { 'dims': false } ); // $ExpectError
	f.assign( x, x, { 'dims': null } ); // $ExpectError
	f.assign( x, x, { 'dims': {} } ); // $ExpectError
	f.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, 'same' );
	f.assign(); // $ExpectError
	f.assign( x ); // $ExpectError
}
