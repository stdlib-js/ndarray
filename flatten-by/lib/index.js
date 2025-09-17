/**
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

'use strict';

/**
* Flatten an ndarray according to a callback function.
*
* @module @stdlib/ndarray/flatten-by
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var flattenBy = require( '@stdlib/ndarray/flatten-by' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
* // return <ndarray>
*
* var y = flattenBy( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
