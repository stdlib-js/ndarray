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

import { DataType, OutputPolicy, InputCastingPolicy } from '@stdlib/types/ndarray';
import cumax = require( '@stdlib/stats/base/ndarray/cumax' );
import zeros = require( './../../../../zeros' );
import UnaryStrided1dDispatch = require( './index' );


// TESTS //

// The function returns an instance for applying a unary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies ); // $ExpectType UnaryStrided1dDispatch<number, number>

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, [ dtypes ], dtypes, policies ); // $ExpectType UnaryStrided1dDispatch<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	new UnaryStrided1dDispatch( '5', [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( 5, [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( true, [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( false, [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( null, [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( void 0, [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( 'abc', [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( [], [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( {}, [ dtypes ], dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, policies ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary( '5', [ dtypes ], dtypes, policies ); // $ExpectError
	unary( 5, [ dtypes ], dtypes, policies ); // $ExpectError
	unary( true, [ dtypes ], dtypes, policies ); // $ExpectError
	unary( false, [ dtypes ], dtypes, policies ); // $ExpectError
	unary( null, [ dtypes ], dtypes, policies ); // $ExpectError
	unary( void 0, [ dtypes ], dtypes, policies ); // $ExpectError
	unary( 'abc', [ dtypes ], dtypes, policies ); // $ExpectError
	unary( [], [ dtypes ], dtypes, policies ); // $ExpectError
	unary( {}, [ dtypes ], dtypes, policies ); // $ExpectError
	unary( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	new UnaryStrided1dDispatch<number, number>( table, '5', dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, 5, dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, true, dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, false, dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, null, dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, void 0, dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, 'abc', dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, {}, dtypes, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, ( x: number ): number => x, dtypes, policies ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, '5', dtypes, policies ); // $ExpectError
	unary<number, number>( table, 5, dtypes, policies ); // $ExpectError
	unary<number, number>( table, true, dtypes, policies ); // $ExpectError
	unary<number, number>( table, false, dtypes, policies ); // $ExpectError
	unary<number, number>( table, null, dtypes, policies ); // $ExpectError
	unary<number, number>( table, void 0, dtypes, policies ); // $ExpectError
	unary<number, number>( table, 'abc', dtypes, policies ); // $ExpectError
	unary<number, number>( table, {}, dtypes, policies ); // $ExpectError
	unary<number, number>( table, ( x: number ): number => x, dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], '5', policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], 5, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], true, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], false, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], null, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], void 0, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], 'abc', policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], {}, policies ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], ( x: number ): number => x, policies ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary<number, number>( table, [ dtypes ], '5', policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], 5, policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], true, policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], false, policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], null, policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], void 0, policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], 'abc', policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], {}, policies ); // $ExpectError
	unary<number, number>( table, [ dtypes ], ( x: number ): number => x, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not valid policy object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	new UnaryStrided1dDispatch(); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ] ); // $ExpectError
	new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies, {} ); // $ExpectError

	const unary = UnaryStrided1dDispatch;
	unary(); // $ExpectError
	unary<number, number>( table ); // $ExpectError
	unary<number, number>( table, [ dtypes ] ); // $ExpectError
	unary<number, number>( table, [ dtypes ], dtypes, policies, {} ); // $ExpectError
}

// The function returns an instance having an `apply` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
	f1.apply( x ); // $ExpectType OutputArray<number>
	f1.apply( x, {} ); // $ExpectType OutputArray<number>

	const unary = UnaryStrided1dDispatch;
	const f2 = unary<number, number>( table, [ dtypes ], dtypes, policies );
	f2.apply( x ); // $ExpectType OutputArray<number>
	f2.apply( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `apply` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
	f1.apply( x, { 'dtype': '5' } ); // $ExpectError
	f1.apply( x, { 'dtype': 5 } ); // $ExpectError
	f1.apply( x, { 'dtype': true } ); // $ExpectError
	f1.apply( x, { 'dtype': false } ); // $ExpectError
	f1.apply( x, { 'dtype': null } ); // $ExpectError
	f1.apply( x, { 'dtype': [] } ); // $ExpectError
	f1.apply( x, { 'dtype': {} } ); // $ExpectError
	f1.apply( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
	f1.apply(); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
	f1.assign( x, x ); // $ExpectType float64ndarray

	const unary = UnaryStrided1dDispatch;
	const f2 = unary<number, number>( table, [ dtypes ], dtypes, policies );
	f2.assign( x, x ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
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
		'default': cumax
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f1 = new UnaryStrided1dDispatch<number, number>( table, [ dtypes ], dtypes, policies );
	f1.assign(); // $ExpectError
	f1.assign( x ); // $ExpectError
}
