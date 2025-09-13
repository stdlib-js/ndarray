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
import gdot = require( '@stdlib/blas/base/ndarray/gdot' );
import zeros = require( './../../../../zeros' );
import BinaryStrided1dDispatch = require( './index' );


// TESTS //

// The function returns an instance for applying a binary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies ); // $ExpectType BinaryStrided1dDispatch<number, number>

	const binary = BinaryStrided1dDispatch;
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, policies ); // $ExpectType BinaryStrided1dDispatch<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	new BinaryStrided1dDispatch( '5', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( 5, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( true, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( false, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( null, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( void 0, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( 'abc', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( [], [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( {}, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch( ( x: number, y: number ): number => x + y, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError

	const binary = BinaryStrided1dDispatch;
	binary( '5', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( 5, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( true, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( false, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( null, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( void 0, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( 'abc', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( [], [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( {}, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	binary( ( x: number, y: number ): number => x + y, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	new BinaryStrided1dDispatch<number, number>( table, '5', dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, 5, dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, true, dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, false, dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, null, dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, void 0, dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, 'abc', dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, {}, dtypes, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, ( x: number ): number => x, dtypes, policies ); // $ExpectError

	const binary = BinaryStrided1dDispatch;
	binary<number, number>( table, '5', dtypes, policies ); // $ExpectError
	binary<number, number>( table, 5, dtypes, policies ); // $ExpectError
	binary<number, number>( table, true, dtypes, policies ); // $ExpectError
	binary<number, number>( table, false, dtypes, policies ); // $ExpectError
	binary<number, number>( table, null, dtypes, policies ); // $ExpectError
	binary<number, number>( table, void 0, dtypes, policies ); // $ExpectError
	binary<number, number>( table, 'abc', dtypes, policies ); // $ExpectError
	binary<number, number>( table, {}, dtypes, policies ); // $ExpectError
	binary<number, number>( table, ( x: number ): number => x, dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], '5', policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], 5, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], true, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], false, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], null, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], void 0, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], 'abc', policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], {}, policies ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], ( x: number ): number => x, policies ); // $ExpectError

	const binary = BinaryStrided1dDispatch;
	binary<number, number>( table, [ dtypes, dtypes ], '5', policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], 5, policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], true, policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], false, policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], null, policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], void 0, policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], 'abc', policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], {}, policies ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], ( x: number ): number => x, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is an invalid policies object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};

	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, '5' ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, 5 ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, true ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, false ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, null ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, void 0 ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, 'abc' ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, {} ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError

	const binary = BinaryStrided1dDispatch;
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, '5' ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, 5 ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, true ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, false ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, null ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, void 0 ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, 'abc' ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, {} ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	new BinaryStrided1dDispatch(); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ] ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes ); // $ExpectError
	new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError

	const binary = BinaryStrided1dDispatch;
	binary(); // $ExpectError
	binary<number, number>( table ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ] ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes ); // $ExpectError
	binary<number, number>( table, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
}

// The function returns an instance having an `apply` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( x, x ); // $ExpectType OutputArray<number>
	f1.apply( x, x, {} ); // $ExpectType OutputArray<number>

	const binary = BinaryStrided1dDispatch;
	const f2 = binary<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f2.apply( x, x ); // $ExpectType OutputArray<number>
	f2.apply( x, x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `apply` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( '5', x ); // $ExpectError
	f1.apply( 5, x ); // $ExpectError
	f1.apply( true, x ); // $ExpectError
	f1.apply( false, x ); // $ExpectError
	f1.apply( null, x ); // $ExpectError
	f1.apply( void 0, x ); // $ExpectError
	f1.apply( {}, x ); // $ExpectError
	f1.apply( ( x: number ): number => x, x ); // $ExpectError

	f1.apply( '5', x, {} ); // $ExpectError
	f1.apply( 5, x, {} ); // $ExpectError
	f1.apply( true, x, {} ); // $ExpectError
	f1.apply( false, x, {} ); // $ExpectError
	f1.apply( null, x, {} ); // $ExpectError
	f1.apply( void 0, x, {} ); // $ExpectError
	f1.apply( {}, x, {} ); // $ExpectError
	f1.apply( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( x, '5' ); // $ExpectError
	f1.apply( x, 5 ); // $ExpectError
	f1.apply( x, true ); // $ExpectError
	f1.apply( x, false ); // $ExpectError
	f1.apply( x, null ); // $ExpectError
	f1.apply( x, void 0 ); // $ExpectError
	f1.apply( x, {} ); // $ExpectError
	f1.apply( x, ( x: number ): number => x ); // $ExpectError

	f1.apply( x, '5', {} ); // $ExpectError
	f1.apply( x, 5, {} ); // $ExpectError
	f1.apply( x, true, {} ); // $ExpectError
	f1.apply( x, false, {} ); // $ExpectError
	f1.apply( x, null, {} ); // $ExpectError
	f1.apply( x, void 0, {} ); // $ExpectError
	f1.apply( x, {}, {} ); // $ExpectError
	f1.apply( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid third argument...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( x, x, '5' ); // $ExpectError
	f1.apply( x, x, true ); // $ExpectError
	f1.apply( x, x, false ); // $ExpectError
	f1.apply( x, x, null ); // $ExpectError
	f1.apply( x, x, [] ); // $ExpectError
	f1.apply( x, x, ( x: number ): number => x ); // $ExpectError

	f1.apply( x, x, '5', {} ); // $ExpectError
	f1.apply( x, x, true, {} ); // $ExpectError
	f1.apply( x, x, false, {} ); // $ExpectError
	f1.apply( x, x, null, {} ); // $ExpectError
	f1.apply( x, x, [], {} ); // $ExpectError
	f1.apply( x, x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( x, x, { 'dtype': '5' } ); // $ExpectError
	f1.apply( x, x, { 'dtype': 5 } ); // $ExpectError
	f1.apply( x, x, { 'dtype': true } ); // $ExpectError
	f1.apply( x, x, { 'dtype': false } ); // $ExpectError
	f1.apply( x, x, { 'dtype': null } ); // $ExpectError
	f1.apply( x, x, { 'dtype': [] } ); // $ExpectError
	f1.apply( x, x, { 'dtype': {} } ); // $ExpectError
	f1.apply( x, x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `keepdims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( x, x, { 'keepdims': '5' } ); // $ExpectError
	f1.apply( x, x, { 'keepdims': 5 } ); // $ExpectError
	f1.apply( x, x, { 'keepdims': null } ); // $ExpectError
	f1.apply( x, x, { 'keepdims': [] } ); // $ExpectError
	f1.apply( x, x, { 'keepdims': {} } ); // $ExpectError
	f1.apply( x, x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply( x, x, { 'dims': '5' } ); // $ExpectError
	f1.apply( x, x, { 'dims': 5 } ); // $ExpectError
	f1.apply( x, x, { 'dims': true } ); // $ExpectError
	f1.apply( x, x, { 'dims': false } ); // $ExpectError
	f1.apply( x, x, { 'dims': null } ); // $ExpectError
	f1.apply( x, x, { 'dims': {} } ); // $ExpectError
	f1.apply( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.apply(); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.assign( x, x, x ); // $ExpectType float64ndarray

	const binary = BinaryStrided1dDispatch;
	const f2 = binary<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f2.assign( x, x, x ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.assign( '5', x, x ); // $ExpectError
	f1.assign( 5, x, x ); // $ExpectError
	f1.assign( true, x, x ); // $ExpectError
	f1.assign( false, x, x ); // $ExpectError
	f1.assign( null, x, x ); // $ExpectError
	f1.assign( void 0, x, x ); // $ExpectError
	f1.assign( {}, x, x ); // $ExpectError
	f1.assign( ( x: number ): number => x, x, x ); // $ExpectError

	f1.assign( '5', x, x, {} ); // $ExpectError
	f1.assign( 5, x, x, {} ); // $ExpectError
	f1.assign( true, x, x, {} ); // $ExpectError
	f1.assign( false, x, x, {} ); // $ExpectError
	f1.assign( null, x, x, {} ); // $ExpectError
	f1.assign( void 0, x, x, {} ); // $ExpectError
	f1.assign( {}, x, x, {} ); // $ExpectError
	f1.assign( ( x: number ): number => x, x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.assign( x, '5', x ); // $ExpectError
	f1.assign( x, 5, x ); // $ExpectError
	f1.assign( x, true, x ); // $ExpectError
	f1.assign( x, false, x ); // $ExpectError
	f1.assign( x, null, x ); // $ExpectError
	f1.assign( x, void 0, x ); // $ExpectError
	f1.assign( x, ( x: number ): number => x, x ); // $ExpectError

	f1.assign( x, '5', x, {} ); // $ExpectError
	f1.assign( x, 5, x, {} ); // $ExpectError
	f1.assign( x, true, x, {} ); // $ExpectError
	f1.assign( x, false, x, {} ); // $ExpectError
	f1.assign( x, null, x, {} ); // $ExpectError
	f1.assign( x, void 0, x, {} ); // $ExpectError
	f1.assign( x, ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.assign( x, x, '5' ); // $ExpectError
	f1.assign( x, x, 5 ); // $ExpectError
	f1.assign( x, x, true ); // $ExpectError
	f1.assign( x, x, false ); // $ExpectError
	f1.assign( x, x, null ); // $ExpectError
	f1.assign( x, x, void 0 ); // $ExpectError
	f1.assign( x, x, ( x: number ): number => x ); // $ExpectError

	f1.assign( x, x, '5', {} ); // $ExpectError
	f1.assign( x, x, 5, {} ); // $ExpectError
	f1.assign( x, x, true, {} ); // $ExpectError
	f1.assign( x, x, false, {} ); // $ExpectError
	f1.assign( x, x, null, {} ); // $ExpectError
	f1.assign( x, x, void 0, {} ); // $ExpectError
	f1.assign( x, x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.assign( x, x, x, { 'dims': '5' } ); // $ExpectError
	f1.assign( x, x, x, { 'dims': 5 } ); // $ExpectError
	f1.assign( x, x, x, { 'dims': true } ); // $ExpectError
	f1.assign( x, x, x, { 'dims': false } ); // $ExpectError
	f1.assign( x, x, x, { 'dims': null } ); // $ExpectError
	f1.assign( x, x, x, { 'dims': {} } ); // $ExpectError
	f1.assign( x, x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f1 = new BinaryStrided1dDispatch<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f1.assign(); // $ExpectError
	f1.assign( x ); // $ExpectError
	f1.assign( x, x ); // $ExpectError
}
