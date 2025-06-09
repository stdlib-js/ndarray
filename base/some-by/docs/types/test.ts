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

import zeros = require( './../../../../zeros' );
import scalar2ndarray = require( './../../../../from-scalar' );
import someBy = require( './index' );

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

// The function returns a boolean...
{
	const x = zeros( [ 2, 2 ] );
	const n = scalar2ndarray( 2, { 'dtype': 'generic' } );

	someBy( [ x, n ], clbk ); // $ExpectType boolean
	someBy( [ x, n ], clbk, {} ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	someBy( 5, clbk ); // $ExpectError
	someBy( true, clbk ); // $ExpectError
	someBy( false, clbk ); // $ExpectError
	someBy( null, clbk ); // $ExpectError
	someBy( undefined, clbk ); // $ExpectError
	someBy( {}, clbk ); // $ExpectError
	someBy( [ 1 ], clbk ); // $ExpectError
	someBy( ( x: number ): number => x, clbk ); // $ExpectError

	someBy( 5, clbk, {} ); // $ExpectError
	someBy( true, clbk, {} ); // $ExpectError
	someBy( false, clbk, {} ); // $ExpectError
	someBy( null, clbk, {} ); // $ExpectError
	someBy( undefined, clbk, {} ); // $ExpectError
	someBy( {}, clbk, {} ); // $ExpectError
	someBy( [ 1 ], clbk, {} ); // $ExpectError
	someBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 2, 2 ] );
	const n = scalar2ndarray( 2, { 'dtype': 'generic' } );

	someBy( [ x, n ], '10' ); // $ExpectError
	someBy( [ x, n ], 5 ); // $ExpectError
	someBy( [ x, n ], true ); // $ExpectError
	someBy( [ x, n ], false ); // $ExpectError
	someBy( [ x, n ], null ); // $ExpectError
	someBy( [ x, n ], undefined ); // $ExpectError
	someBy( [ x, n ], [] ); // $ExpectError
	someBy( [ x, n ], {} ); // $ExpectError

	someBy( [ x, n ], '10', {} ); // $ExpectError
	someBy( [ x, n ], 5, {} ); // $ExpectError
	someBy( [ x, n ], true, {} ); // $ExpectError
	someBy( [ x, n ], false, {} ); // $ExpectError
	someBy( [ x, n ], null, {} ); // $ExpectError
	someBy( [ x, n ], undefined, {} ); // $ExpectError
	someBy( [ x, n ], [], {} ); // $ExpectError
	someBy( [ x, n ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ] );
	const n = scalar2ndarray( 2, { 'dtype': 'generic' } );

	someBy(); // $ExpectError
	someBy( [ x, n ] ); // $ExpectError
	someBy( [ x, n ], clbk, {}, {} ); // $ExpectError
}
