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
import { ndarray, boolndarray, integerndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an ndarray element passes a test
*/
type Nullary<ThisArg> = ( this: ThisArg ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an ndarray element passes a test
*/
type Unary<T, ThisArg> = ( this: ThisArg, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @returns boolean indicating whether an ndarray element passes a test
*/
type Binary<T, ThisArg> = ( this: ThisArg, value: T, indices: Array<number> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns boolean indicating whether an ndarray element passes a test
*/
type Ternary<T, U, ThisArg> = ( this: ThisArg, value: T, indices: Array<number>, arr: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns boolean indicating whether an ndarray element passes a test
*/
type Predicate<T, U, ThisArg> = Nullary<ThisArg> | Unary<T, ThisArg> | Binary<T, ThisArg> | Ternary<T, U, ThisArg>;

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
* Interface describing `someBy`.
*/
interface SomeBy {
	/**
	* Tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function.
	*
	* @param x - input ndarray
	* @param n - number of elements which must pass a test
	* @param predicate - predicate function
	* @param thisArg - predicate execution context
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
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
	* var out = someBy( x, 3, isEven );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns true
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, n: integerndarray | number, predicate: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): boolndarray;

	/**
	* Tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function.
	*
	* @param x - input ndarray
	* @param n - number of elements which must pass a test
	* @param options - function options
	* @param options.dims - list of dimensions over which to perform a reduction
	* @param options.keepdims - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions (default: false)
	* @param predicate - predicate function
	* @param thisArg - predicate execution context
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
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
	* var out = someBy( x, 3, {}, isEven );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns true
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, n: integerndarray | number, options: Options, predicate: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): boolndarray;

	/**
	* Tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function.
	*
	* @param x - input ndarray
	* @param n - number of elements which must pass a test
	* @param y - output ndarray
	* @param predicate - predicate function
	* @param thisArg - predicate execution context
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
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
	* var out = someBy.assign( x, 3, y, isEven );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns true
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V extends ndarray = ndarray, ThisArg = unknown>( x: ndarray, n: integerndarray | number, y: V, predicate: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): V;

	/**
	* Tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function.
	*
	* @param x - input ndarray
	* @param n - number of elements which must pass a test
	* @param y - output ndarray
	* @param options - function options
	* @param options.dims - list of dimensions over which to perform a reduction
	* @param predicate - predicate function
	* @param thisArg - predicate execution context
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
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
	* var out = someBy.assign( x, 3, y, {}, isEven );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns true
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V extends ndarray = ndarray, ThisArg = unknown>( x: ndarray, n: integerndarray | number, y: V, options: BaseOptions, predicate: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): V;
}

/**
* Tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function.
*
* @param x - input ndarray
* @param n - number of elements which must pass a test
* @param options - function options
* @param options.dims - list of dimensions over which to perform a reduction
* @param options.keepdims - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions (default: false)
* @param predicate - predicate function
* @param thisArg - predicate execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
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
* var out = someBy( x, 3, isEven );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
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
* var out = someBy.assign( x, 3, y, isEven );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*/
declare var someBy: SomeBy;


// EXPORTS //

export = someBy;

