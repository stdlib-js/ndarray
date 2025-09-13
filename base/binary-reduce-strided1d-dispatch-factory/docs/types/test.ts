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
import factory = require( './index' );


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies ); // $ExpectType BinaryFunction<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a dispatch table...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	factory( '5', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( 5, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( true, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( false, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( null, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( void 0, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( 'abc', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( {}, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	factory( ( x: number, y: number ): number => x + y, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
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
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	factory<number, number>( table, [ dtypes, dtypes ], '5', policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], 5, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], true, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], false, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], null, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], void 0, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], 'abc', policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], {}, policies ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], ( x: number ): number => x, policies ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid policies object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};

	factory<number, number>( table, [ dtypes, dtypes ], dtypes, '5' ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, 5 ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, true ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, false ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, null ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, void 0 ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, 'abc' ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, {} ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
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

	factory(); // $ExpectError
	factory<number, number>( abs ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ] ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes ); // $ExpectError
	factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
}

// The function returns a function which returns an ndarray...
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

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( x, x ); // $ExpectType OutputArray<number>
	f( x, x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray...
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

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( '5', x ); // $ExpectError
	f( 5, x ); // $ExpectError
	f( true, x ); // $ExpectError
	f( false, x ); // $ExpectError
	f( null, x ); // $ExpectError
	f( void 0, x ); // $ExpectError
	f( {}, x ); // $ExpectError
	f( ( x: number ): number => x, x ); // $ExpectError

	f( '5', x, {} ); // $ExpectError
	f( 5, x, {} ); // $ExpectError
	f( true, x, {} ); // $ExpectError
	f( false, x, {} ); // $ExpectError
	f( null, x, {} ); // $ExpectError
	f( void 0, x, {} ); // $ExpectError
	f( {}, x, {} ); // $ExpectError
	f( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an ndarray...
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

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( x, '5' ); // $ExpectError
	f( x, 5 ); // $ExpectError
	f( x, true ); // $ExpectError
	f( x, false ); // $ExpectError
	f( x, null ); // $ExpectError
	f( x, void 0 ); // $ExpectError
	f( x, {} ); // $ExpectError
	f( x, ( x: number ): number => x ); // $ExpectError

	f( x, '5', {} ); // $ExpectError
	f( x, 5, {} ); // $ExpectError
	f( x, true, {} ); // $ExpectError
	f( x, false, {} ); // $ExpectError
	f( x, null, {} ); // $ExpectError
	f( x, void 0, {} ); // $ExpectError
	f( x, {}, {} ); // $ExpectError
	f( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid third argument...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( x, x, '5' ); // $ExpectError
	f( x, x, true ); // $ExpectError
	f( x, x, false ); // $ExpectError
	f( x, x, null ); // $ExpectError
	f( x, x, [] ); // $ExpectError
	f( x, x, ( x: number ): number => x ); // $ExpectError

	f( x, x, '5', {} ); // $ExpectError
	f( x, x, true, {} ); // $ExpectError
	f( x, x, false, {} ); // $ExpectError
	f( x, x, null, {} ); // $ExpectError
	f( x, x, [], {} ); // $ExpectError
	f( x, x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( x, x, { 'dtype': '5' } ); // $ExpectError
	f( x, x, { 'dtype': 5 } ); // $ExpectError
	f( x, x, { 'dtype': true } ); // $ExpectError
	f( x, x, { 'dtype': false } ); // $ExpectError
	f( x, x, { 'dtype': null } ); // $ExpectError
	f( x, x, { 'dtype': [] } ); // $ExpectError
	f( x, x, { 'dtype': {} } ); // $ExpectError
	f( x, x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `keepdims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( x, x, { 'keepdims': '5' } ); // $ExpectError
	f( x, x, { 'keepdims': 5 } ); // $ExpectError
	f( x, x, { 'keepdims': null } ); // $ExpectError
	f( x, x, { 'keepdims': [] } ); // $ExpectError
	f( x, x, { 'keepdims': {} } ); // $ExpectError
	f( x, x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f( x, x, { 'dims': '5' } ); // $ExpectError
	f( x, x, { 'dims': 5 } ); // $ExpectError
	f( x, x, { 'dims': true } ); // $ExpectError
	f( x, x, { 'dims': false } ); // $ExpectError
	f( x, x, { 'dims': null } ); // $ExpectError
	f( x, x, { 'dims': {} } ); // $ExpectError
	f( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f(); // $ExpectError
}

// The function returns a function having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f.assign( x, x, x ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f.assign( '5', x, x ); // $ExpectError
	f.assign( 5, x, x ); // $ExpectError
	f.assign( true, x, x ); // $ExpectError
	f.assign( false, x, x ); // $ExpectError
	f.assign( null, x, x ); // $ExpectError
	f.assign( void 0, x, x ); // $ExpectError
	f.assign( {}, x, x ); // $ExpectError
	f.assign( ( x: number ): number => x, x, x ); // $ExpectError

	f.assign( '5', x, x, {} ); // $ExpectError
	f.assign( 5, x, x, {} ); // $ExpectError
	f.assign( true, x, x, {} ); // $ExpectError
	f.assign( false, x, x, {} ); // $ExpectError
	f.assign( null, x, x, {} ); // $ExpectError
	f.assign( void 0, x, x, {} ); // $ExpectError
	f.assign( {}, x, x, {} ); // $ExpectError
	f.assign( ( x: number ): number => x, x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f.assign( x, '5', x ); // $ExpectError
	f.assign( x, 5, x ); // $ExpectError
	f.assign( x, true, x ); // $ExpectError
	f.assign( x, false, x ); // $ExpectError
	f.assign( x, null, x ); // $ExpectError
	f.assign( x, void 0, x ); // $ExpectError
	f.assign( x, ( x: number ): number => x, x ); // $ExpectError

	f.assign( x, '5', x, {} ); // $ExpectError
	f.assign( x, 5, x, {} ); // $ExpectError
	f.assign( x, true, x, {} ); // $ExpectError
	f.assign( x, false, x, {} ); // $ExpectError
	f.assign( x, null, x, {} ); // $ExpectError
	f.assign( x, void 0, x, {} ); // $ExpectError
	f.assign( x, ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f.assign( x, x, '5' ); // $ExpectError
	f.assign( x, x, 5 ); // $ExpectError
	f.assign( x, x, true ); // $ExpectError
	f.assign( x, x, false ); // $ExpectError
	f.assign( x, x, null ); // $ExpectError
	f.assign( x, x, void 0 ); // $ExpectError
	f.assign( x, x, ( x: number ): number => x ); // $ExpectError

	f.assign( x, x, '5', {} ); // $ExpectError
	f.assign( x, x, 5, {} ); // $ExpectError
	f.assign( x, x, true, {} ); // $ExpectError
	f.assign( x, x, false, {} ); // $ExpectError
	f.assign( x, x, null, {} ); // $ExpectError
	f.assign( x, x, void 0, {} ); // $ExpectError
	f.assign( x, x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f.assign( x, x, x, { 'dims': '5' } ); // $ExpectError
	f.assign( x, x, x, { 'dims': 5 } ); // $ExpectError
	f.assign( x, x, x, { 'dims': true } ); // $ExpectError
	f.assign( x, x, x, { 'dims': false } ); // $ExpectError
	f.assign( x, x, x, { 'dims': null } ); // $ExpectError
	f.assign( x, x, x, { 'dims': {} } ); // $ExpectError
	f.assign( x, x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const table = {
		'default': gdot
	};
	const policies = {
		'output': 'promoted' as OutputPolicy,
		'casting': 'promoted' as InputCastingPolicy
	};
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	const f = factory<number, number>( table, [ dtypes, dtypes ], dtypes, policies );
	f.assign(); // $ExpectError
	f.assign( x ); // $ExpectError
	f.assign( x, x ); // $ExpectError
}
