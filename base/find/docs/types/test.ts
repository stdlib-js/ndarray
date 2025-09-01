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

/* eslint-disable space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( './../../../../zeros' );
import scalar2ndarray = require( './../../../../from-scalar' );
import find = require( './index' );

/**
* Predicate function.
*
* @param v - ndarray element
* @returns result
*/
function clbk( v: any ): boolean {
	return v > 0.0;
}


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	find( [ x, sv ], clbk ); // $ExpectType number
	find( [ x, sv ], clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	find( 5, clbk ); // $ExpectError
	find( true, clbk ); // $ExpectError
	find( false, clbk ); // $ExpectError
	find( null, clbk ); // $ExpectError
	find( undefined, clbk ); // $ExpectError
	find( {}, clbk ); // $ExpectError
	find( [ 1 ], clbk ); // $ExpectError
	find( ( x: number ): number => x, clbk ); // $ExpectError

	find( 5, clbk, {} ); // $ExpectError
	find( true, clbk, {} ); // $ExpectError
	find( false, clbk, {} ); // $ExpectError
	find( null, clbk, {} ); // $ExpectError
	find( undefined, clbk, {} ); // $ExpectError
	find( {}, clbk, {} ); // $ExpectError
	find( [ 1 ], clbk, {} ); // $ExpectError
	find( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	find( [ x, sv ], '10' ); // $ExpectError
	find( [ x, sv ], 5 ); // $ExpectError
	find( [ x, sv ], true ); // $ExpectError
	find( [ x, sv ], false ); // $ExpectError
	find( [ x, sv ], null ); // $ExpectError
	find( [ x, sv ], undefined ); // $ExpectError
	find( [ x, sv ], [] ); // $ExpectError
	find( [ x, sv ], {} ); // $ExpectError

	find( [ x, sv ], '10', {} ); // $ExpectError
	find( [ x, sv ], 5, {} ); // $ExpectError
	find( [ x, sv ], true, {} ); // $ExpectError
	find( [ x, sv ], false, {} ); // $ExpectError
	find( [ x, sv ], null, {} ); // $ExpectError
	find( [ x, sv ], undefined, {} ); // $ExpectError
	find( [ x, sv ], [], {} ); // $ExpectError
	find( [ x, sv ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const sv = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});

	find(); // $ExpectError
	find( [ x, sv ] ); // $ExpectError
	find( [ x, sv ], clbk, {}, {} ); // $ExpectError
}
