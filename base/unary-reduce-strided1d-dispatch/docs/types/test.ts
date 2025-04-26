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
import UnaryStrided1dDispatch = require( './index' );


// TESTS //

// The function returns an instance for applying a unary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' ); // $ExpectType UnaryStrided1dDispatch<number, number>

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, [ dtypes ], dtypes, 'same' ); // $ExpectType UnaryStrided1dDispatch<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new UnaryStrided1dDispatch( '5', [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( 5, [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( true, [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( false, [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( null, [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( void 0, [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( 'abc', [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( [], [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( {}, [ dtypes ], dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, 'same' ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary( '5', [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( 5, [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( true, [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( false, [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( null, [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( void 0, [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( 'abc', [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( [], [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( {}, [ dtypes ], dtypes, 'same' ); // $ExpectError
	unary( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	new UnaryStrided1dDispatch<number, number>( table, '5', dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, 5, dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, true, dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, false, dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, null, dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, void 0, dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, 'abc', dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, {}, dtypes, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, ( x: number ): number => x, dtypes, 'same' ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, '5', dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, 5, dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, true, dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, false, dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, null, dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, void 0, dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, 'abc', dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, {}, dtypes, 'same' ); // $ExpectError
	unary<number, number>( table, ( x: number ): number => x, dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], '5', 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], 5, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], true, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], false, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], null, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], void 0, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], 'abc', 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], {}, 'same' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], ( x: number ): number => x, 'same' ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, [ dtypes ], '5', 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], 5, 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], true, 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], false, 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], null, 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], void 0, 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], 'abc', 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], {}, 'same' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], ( x: number ): number => x, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a recognized policy...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, '5' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 5 ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, true ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, false ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, null ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, void 0 ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'abc' ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, {} ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, [ dtypes ], dtypes, '5' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, 5 ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, true ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, false ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, null ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, void 0 ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, 'abc' ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, {} ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	new UnaryStrided1dDispatch(); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ] ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same', {} ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary(); // $ExpectError
	unary<number, number>( table ); // $ExpectError
	unary<number, number>( table, [ dtypes ] ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, 'same', {} ); // $ExpectError
}

// The function returns an instance having an `apply` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply( x ); // $ExpectType OutputArray<number>
	f1.apply( x, {} ); // $ExpectType OutputArray<number>

	const unary = UnaryStrided1dDispatch;
	const f2 = unary<number, number>( table, [ dtypes ], dtypes, 'same' );
	f2.apply( x ); // $ExpectType OutputArray<number>
	f2.apply( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `apply` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply( '5' ); // $ExpectError
	f1.apply( 5 ); // $ExpectError
	f1.apply( true ); // $ExpectError
	f1.apply( false ); // $ExpectError
	f1.apply( null ); // $ExpectError
	f1.apply( void 0 ); // $ExpectError
	f1.apply( {} ); // $ExpectError
	f1.apply( ( x: number ): number => x ); // $ExpectError

	f1.apply( '5', {} ); // $ExpectError
	f1.apply( 5, {} ); // $ExpectError
	f1.apply( true, {} ); // $ExpectError
	f1.apply( false, {} ); // $ExpectError
	f1.apply( null, {} ); // $ExpectError
	f1.apply( void 0, {} ); // $ExpectError
	f1.apply( {}, {} ); // $ExpectError
	f1.apply( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid second argument...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply( x, '5' ); // $ExpectError
	f1.apply( x, true ); // $ExpectError
	f1.apply( x, false ); // $ExpectError
	f1.apply( x, null ); // $ExpectError
	f1.apply( x, [] ); // $ExpectError
	f1.apply( x, ( x: number ): number => x ); // $ExpectError

	f1.apply( x, '5', {} ); // $ExpectError
	f1.apply( x, true, {} ); // $ExpectError
	f1.apply( x, false, {} ); // $ExpectError
	f1.apply( x, null, {} ); // $ExpectError
	f1.apply( x, [], {} ); // $ExpectError
	f1.apply( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply( x, { 'dtype': '5' } ); // $ExpectError
	f1.apply( x, { 'dtype': 5 } ); // $ExpectError
	f1.apply( x, { 'dtype': true } ); // $ExpectError
	f1.apply( x, { 'dtype': false } ); // $ExpectError
	f1.apply( x, { 'dtype': null } ); // $ExpectError
	f1.apply( x, { 'dtype': [] } ); // $ExpectError
	f1.apply( x, { 'dtype': {} } ); // $ExpectError
	f1.apply( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `keepdims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply( x, { 'keepdims': '5' } ); // $ExpectError
	f1.apply( x, { 'keepdims': 5 } ); // $ExpectError
	f1.apply( x, { 'keepdims': null } ); // $ExpectError
	f1.apply( x, { 'keepdims': [] } ); // $ExpectError
	f1.apply( x, { 'keepdims': {} } ); // $ExpectError
	f1.apply( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply( x, { 'dims': '5' } ); // $ExpectError
	f1.apply( x, { 'dims': 5 } ); // $ExpectError
	f1.apply( x, { 'dims': true } ); // $ExpectError
	f1.apply( x, { 'dims': false } ); // $ExpectError
	f1.apply( x, { 'dims': null } ); // $ExpectError
	f1.apply( x, { 'dims': {} } ); // $ExpectError
	f1.apply( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.apply(); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.assign( x, x ); // $ExpectType float64ndarray

	const unary = UnaryStrided1dDispatch;
	const f2 = unary<number, number>( table, [ dtypes ], dtypes, 'same' );
	f2.assign( x, x ); // $ExpectType float64ndarray
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

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
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

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': max
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.assign( x, '5' ); // $ExpectError
	f1.assign( x, 5 ); // $ExpectError
	f1.assign( x, true ); // $ExpectError
	f1.assign( x, false ); // $ExpectError
	f1.assign( x, null ); // $ExpectError
	f1.assign( x, void 0 ); // $ExpectError
	f1.assign( x, ( x: number ): number => x ); // $ExpectError

	f1.assign( x, '5', {} ); // $ExpectError
	f1.assign( x, 5, {} ); // $ExpectError
	f1.assign( x, true, {} ); // $ExpectError
	f1.assign( x, false, {} ); // $ExpectError
	f1.assign( x, null, {} ); // $ExpectError
	f1.assign( x, void 0, {} ); // $ExpectError
	f1.assign( x, ( x: number ): number => x, {} ); // $ExpectError
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

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.assign( x, x, { 'dims': '5' } ); // $ExpectError
	f1.assign( x, x, { 'dims': 5 } ); // $ExpectError
	f1.assign( x, x, { 'dims': true } ); // $ExpectError
	f1.assign( x, x, { 'dims': false } ); // $ExpectError
	f1.assign( x, x, { 'dims': null } ); // $ExpectError
	f1.assign( x, x, { 'dims': {} } ); // $ExpectError
	f1.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
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

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, 'same' );
	f1.assign(); // $ExpectError
	f1.assign( x ); // $ExpectError
}
