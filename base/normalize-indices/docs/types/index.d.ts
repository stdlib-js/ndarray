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

import { Collection } from '@stdlib/types/array';

/**
* Normalizes a list of indices to the interval `[0,max]`.
*
* ## Notes
*
* -   If provided an out-of-bounds index, the function returns `null`.
* -   The function mutates the input array, even when provided an out-of-bounds index.
*
* @param indices - indices
* @param max - maximum index
* @returns normalized indices or null
*
* @example
* var indices = normalizeIndices( [ -2, 5 ], 10 );
* // returns [ 9, 5 ]
*
* indices = normalizeIndices( [ -2, 15 ], 10 );
* // returns null
*/
declare function normalizeIndices( indices: Collection<number>, max: number ): Collection<number> | null;


// EXPORTS //

export = normalizeIndices;
