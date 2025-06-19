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
import maxBy = require( '@stdlib/stats/base/ndarray/max-by' );
import zeros = require( './../../../../zeros' );
import factory = require( './index' );

/**
* Callback function.
*
* @param v - input value
* @returns input value
*/
function clbk( v: number ): number {
	return v;
}


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory<number, number>( table, [ dtypes ], dtypes, policies ); // $ExpectType UnaryFunction<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory( '5', [ dtypes ], dtypes, policies ); // $ExpectError
	factory( 5, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( true, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( false, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( null, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( void 0, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( 'abc', [ dtypes ], dtypes, policies ); // $ExpectError
	factory( {}, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( ( x: number, y: number ): number => x + y, [ dtypes ], dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory<number, number>( table, '5', dtypes, policies ); // $ExpectError
	factory<number, number>( table, 5, dtypes, policies ); // $ExpectError
	factory<number, number>( table, true, dtypes, policies ); // $ExpectError
	factory<number, number>( table, false, dtypes, policies ); // $ExpectError
	factory<number, number>( table, null, dtypes, policies ); // $ExpectError
	factory<number, number>( table, void 0, dtypes, policies ); // $ExpectError
	factory<number, number>( table, 'abc', dtypes, policies ); // $ExpectError
	factory<number, number>( table, {}, dtypes, policies ); // $ExpectError
	factory<number, number>( table, ( x: number ): number => x, dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory<number, number>( table, [ dtypes ], '5', policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], 5, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], true, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], false, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], null, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], void 0, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], 'abc', policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], {}, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes ], ( x: number ): number => x, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid policies object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
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
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory(); // $ExpectError
	factory<number, number>( abs ); // $ExpectError
	factory<number, number>( table, [ dtypes ] ); // $ExpectError
	factory<number, number>( table, [ dtypes ], dtypes, policies, {} ); // $ExpectError
}

// The function returns a function which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f( x, clbk ); // $ExpectType OutputArray<number>
	f( x, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f( '5', clbk ); // $ExpectError
	f( 5, clbk ); // $ExpectError
	f( true, clbk ); // $ExpectError
	f( false, clbk ); // $ExpectError
	f( null, clbk ); // $ExpectError
	f( void 0, clbk ); // $ExpectError
	f( {}, clbk ); // $ExpectError
	f( ( x: number ): number => x, clbk ); // $ExpectError

	f( '5', clbk, {} ); // $ExpectError
	f( 5, clbk, {} ); // $ExpectError
	f( true, clbk, {} ); // $ExpectError
	f( false, clbk, {} ); // $ExpectError
	f( null, clbk, {} ); // $ExpectError
	f( void 0, clbk, {} ); // $ExpectError
	f( {}, clbk, {} ); // $ExpectError
	f( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f(); // $ExpectError
}

// The function returns a function having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f.assign( x, x, clbk ); // $ExpectType float64ndarray
	f.assign( x, x, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f.assign( '5', x, clbk ); // $ExpectError
	f.assign( 5, x, clbk ); // $ExpectError
	f.assign( true, x, clbk ); // $ExpectError
	f.assign( false, x, clbk ); // $ExpectError
	f.assign( null, x, clbk ); // $ExpectError
	f.assign( void 0, x, clbk ); // $ExpectError
	f.assign( {}, x, clbk ); // $ExpectError
	f.assign( ( x: number ): number => x, x, clbk ); // $ExpectError

	f.assign( '5', x, clbk, {} ); // $ExpectError
	f.assign( 5, x, clbk, {} ); // $ExpectError
	f.assign( true, x, clbk, {} ); // $ExpectError
	f.assign( false, x, clbk, {} ); // $ExpectError
	f.assign( null, x, clbk, {} ); // $ExpectError
	f.assign( void 0, x, clbk, {} ); // $ExpectError
	f.assign( {}, x, clbk, {} ); // $ExpectError
	f.assign( ( x: number ): number => x, x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f.assign( x, '5', clbk ); // $ExpectError
	f.assign( x, 5, clbk ); // $ExpectError
	f.assign( x, true, clbk ); // $ExpectError
	f.assign( x, false, clbk ); // $ExpectError
	f.assign( x, null, clbk ); // $ExpectError
	f.assign( x, void 0, clbk ); // $ExpectError
	f.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	f.assign( x, '5', clbk, {} ); // $ExpectError
	f.assign( x, 5, clbk, {} ); // $ExpectError
	f.assign( x, true, clbk, {} ); // $ExpectError
	f.assign( x, false, clbk, {} ); // $ExpectError
	f.assign( x, null, clbk, {} ); // $ExpectError
	f.assign( x, void 0, clbk, {} ); // $ExpectError
	f.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': maxBy
	};
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes ], dtypes, policies );
	f.assign(); // $ExpectError
	f.assign( x ); // $ExpectError
}
