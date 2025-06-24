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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray, boolndarray } from '@stdlib/types/ndarray';

/**
* Base options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform the reduction.
	*/
	dims?: ArrayLike<number>;
}

/**
* Options.
*/
interface Options extends BaseOptions {
	/**
	* Boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions. Default: `false`.
	*/
	keepdims?: boolean;
}

/**
* Interface describing `every`.
*/
interface Every {
	/**
	* Tests whether every element along one or more ndarray dimensions is truthy.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.dims - list of dimensions over which to perform a reduction
	* @param options.keepdims - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions (default: false)
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	*
	* // Create a data buffer:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* // Define the shape of the input array:
	* var sh = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	*
	* // Define the index offset:
	* var ox = 1;
	*
	* // Create an input ndarray:
	* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
	*
	* // Perform reduction:
	* var out = every( x );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns true
	*/
	( x: ndarray, options?: Options ): boolndarray;

	/**
	* Tests whether every element along one or more ndarray dimensions is truthy and assigns the results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param y - output ndarray
	* @param options - function options
	* @param options.dims - list of dimensions over which to perform a reduction
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	* var empty = require( './../../../empty' );
	*
	* // Create a data buffer:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* // Define the shape of the input array:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	*
	* // Define the index offset:
	* var ox = 1;
	*
	* // Create an input ndarray:
	* var x = new ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	*
	* // Create an output ndarray:
	* var y = empty( [], {
	*     'dtype': 'bool'
	* });
	*
	* // Perform reduction:
	* var out = every.assign( x, y );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns true
	*/
	assign<T extends ndarray>( x: ndarray, y: T, options?: BaseOptions ): T;
}

/**
* Tests whether every element along one or more ndarray dimensions is truthy.
*
* @param x - input ndarray
* @param options - function options
* @param options.dims - list of dimensions over which to perform a reduction
* @param options.keepdims - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions (default: false)
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform reduction:
* var out = every( x );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
*
* // Create an output ndarray:
* var y = empty( [], {
*     'dtype': 'bool'
* });
*
* // Perform reduction:
* var out = every.assign( x, y );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*/
declare var every: Every;


// EXPORTS //

export = every;
