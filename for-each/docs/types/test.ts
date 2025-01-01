/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import empty = require( './../../../base/empty' );
import zeros = require( './../../../base/zeros' );
import forEach = require( './index' );

/**
* Callback function.
*
* @param v - ndarray element
* @throws unexpected error
*/
function clbk( v: any ): void {
	if ( v !== v ) {
		throw new Error( 'unexpected error' );
	}
}

// The function returns `undefined`...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	forEach( zeros( 'float64', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'float64', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'float32', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'float32', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'complex64', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'complex64', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'complex128', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'complex128', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'int32', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'int32', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'int16', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'int16', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'int8', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'int8', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'uint32', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'uint32', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'uint16', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'uint16', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'uint8', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'uint8', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'uint8c', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'uint8c', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( empty( 'bool', sh, ord ), clbk ); // $ExpectType void
	forEach( empty( 'bool', sh, ord ), clbk, {} ); // $ExpectType void
	forEach( zeros( 'generic', sh, ord ), clbk ); // $ExpectType void
	forEach( zeros( 'generic', sh, ord ), clbk, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	forEach( 5, clbk ); // $ExpectError
	forEach( true, clbk ); // $ExpectError
	forEach( false, clbk ); // $ExpectError
	forEach( null, clbk ); // $ExpectError
	forEach( undefined, clbk ); // $ExpectError
	forEach( {}, clbk ); // $ExpectError
	forEach( [ 1 ], clbk ); // $ExpectError
	forEach( ( x: number ): number => x, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback which is not a function...
{
	const x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	forEach( x, '5' ); // $ExpectError
	forEach( x, true ); // $ExpectError
	forEach( x, false ); // $ExpectError
	forEach( x, null ); // $ExpectError
	forEach( x, undefined ); // $ExpectError
	forEach( x, {} ); // $ExpectError
	forEach( x, [ 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	forEach(); // $ExpectError
	forEach( zeros( 'float64', [ 2, 2 ], 'row-major' ) ); // $ExpectError
	forEach( zeros( 'float64', [ 2, 2 ], 'row-major' ), {}, ( x: number ): number => x, {}, {} ); // $ExpectError
}
