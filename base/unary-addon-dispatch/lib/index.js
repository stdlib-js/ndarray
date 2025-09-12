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
* Dispatch to a native add-on applying a unary function to an input ndarray.
*
* @module @stdlib/ndarray/base/unary-addon-dispatch
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
* var dispatch = require( '@stdlib/ndarray/base/unary-addon-dispatch' );
*
* function addon( x, metaX, y, metaY ) {
*     // Call into native add-on...
* }
*
* function fallback( x, y ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with ndarray arguments:
* var x = array( [ [ 1, 2], [ 3, 4 ] ] );
* var y = zeros( [ 2, 2 ] );
* f( x, y );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
