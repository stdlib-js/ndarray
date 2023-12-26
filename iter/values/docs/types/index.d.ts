/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { TypedIterator, TypedIterableIterator } from '@stdlib/types/iter';
import { typedndarray, Order } from '@stdlib/types/ndarray';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Index iteration order.
	*
	* ## Notes
	*
	* -   By default, the returned iterator returns values according to the layout order of the provided array. Accordingly, for row-major input arrays, the last dimension indices increment fastest. For column-major input arrays, the first dimension indices increment fastest. To override the inferred order and ensure that indices increment in a specific manor, regardless of the input array's layout order, explicitly set the iteration order. Note, however, that iterating according to an order which does not match that of the input array may, in some circumstances, result in performance degradation due to cache misses.
	*/
	order?: Order;
}

/**
* Returns an iterator which returns individual elements of a provided ndarray.
*
* @param x - input array
* @param options - function options
* @param options.order - index iteration order
* @returns iterator
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var iter = nditerValues( x );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
declare function nditerValues<T = unknown>( x: typedndarray<T>, options?: Options ): Iterator<T>;


// EXPORTS //

export = nditerValues;
