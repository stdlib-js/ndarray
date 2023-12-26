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
import { ndarray } from '@stdlib/types/ndarray';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Returns an iterator which converts each iterated ndarray to a generic array.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @returns iterator
*
* @example
* var array = require( `@stdlib/ndarray/array` );
* var ndarray2array = require( `@stdlib/ndarray/to-array` );
* var nditerRows = require( `@stdlib/ndarray/iter/rows` );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditer2arrayEach( nditerRows( x ) );
*
* var v = iter.next().value;
* // returns [ 1, 2 ]
*
* v = iter.next().value;
* // returns [ 3, 4 ]
*
* v = iter.next().value;
* // returns [ 5, 6 ]
*
* // ...
*/
declare function nditer2arrayEach<T = unknown>( iterator: Iterator<ndarray> ): Iterator<Array<T>>;


// EXPORTS //

export = nditer2arrayEach;
