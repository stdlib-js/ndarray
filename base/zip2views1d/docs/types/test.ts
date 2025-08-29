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

import array2ndarray = require( './../../../../base/from-array' );
import zip2views1d = require( './index' );


// TESTS //

// The function returns an array of objects...
{
	const x = array2ndarray( [ 1, 2 ], 'row-major' );
	const y = array2ndarray( [ 3, 4 ], 'row-major' );
	zip2views1d( [ x, y ], [ 'x', 'y' ] ); // $ExpectType Record<"x" | "y", number>[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	zip2views1d( 1, [ 'x', 'y' ] ); // $ExpectError
	zip2views1d( true, [ 'x', 'y' ] ); // $ExpectError
	zip2views1d( false, [ 'x', 'y' ] ); // $ExpectError
	zip2views1d( null, [ 'x', 'y' ] ); // $ExpectError
	zip2views1d( void 0, [ 'x', 'y' ] ); // $ExpectError
	zip2views1d( {}, [ 'x', 'y' ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	zip2views1d( [], 1 ); // $ExpectError
	zip2views1d( [], true ); // $ExpectError
	zip2views1d( [], false ); // $ExpectError
	zip2views1d( [], null ); // $ExpectError
	zip2views1d( [], void 0 ); // $ExpectError
	zip2views1d( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zip2views1d(); // $ExpectError
	zip2views1d( [] ); // $ExpectError
	zip2views1d( [], [], [] ); // $ExpectError
}
