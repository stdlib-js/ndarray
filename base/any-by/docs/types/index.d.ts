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
import { typedndarray } from '@stdlib/types/ndarray';

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
* Tests whether at least one element in an ndarray passes a test implemented by a predicate function.
*
* @param arrays - array-like object containing an input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns boolean indicating whether at least one element passes a test
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function predicate( value ) {
*    return value > 0.0;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the input ndarray:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
*
* // Test elements:
* var out = anyBy( [ x ], predicate );
* // returns true
*/
declare function anyBy<T = unknown, U extends typedndarray<T> = typedndarray<T>, ThisArg = unknown>( arrays: ArrayLike<U>, predicate: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): boolean;


// EXPORTS //

export = anyBy;
