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
* Flattens a shape to a specified depth.
*
* @param shape - array shape
* @param depth - maximum depth to flatten
* @returns flattened shape
*
* @example
* var sh = flattenShape( [ 3, 2 ], 1 );
* // returns [ 6 ]
*
* sh = flattenShape( [ 3, 2, 1 ], 1 );
* // returns [ 6, 1 ]
*
* sh = flattenShape( [ 3 ], 0 );
* // returns [ 3 ]
*
* sh = flattenShape( [ 3, 2 ], 0 );
* // returns [ 3, 2 ]
*
* sh = flattenShape( [ 3 ], 1 );
* // returns [ 3 ]
*
* sh = flattenShape( [], 1 );
* // returns []
*/
declare function flattenShape( shape: Collection<number>, depth: number ): Array<number>;


// EXPORTS //

export = flattenShape;
