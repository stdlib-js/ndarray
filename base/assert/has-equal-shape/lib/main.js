/**
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

'use strict';

// MODULES //

var shape = require( './../../../../base/shape' );
var hasEqualValuesIndexed = require( '@stdlib/array/base/assert/has-equal-values-indexed' );


// MAIN //

/**
* Tests whether two ndarrays have the same shape.
*
* @param {ndarray} x - first input ndarray
* @param {ndarray} y - second input ndarray
* @returns {boolean} boolean indicating whether two ndarrays have the same shape
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1, 2, 3, 4 ] );
* var y = array( [ 5, 6, 7, 8 ] );
*
* var bool = hasEqualShape( x, y );
* // returns true
*/
function hasEqualShape( x, y ) {
	return hasEqualValuesIndexed( shape( x, false ), shape( y, false ) );
}


// EXPORTS //

module.exports = hasEqualShape;
