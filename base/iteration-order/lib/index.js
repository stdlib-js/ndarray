/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Given a stride array, determine array iteration order.
*
* @module @stdlib/ndarray/base/iteration-order
*
* @example
* var iterationOrder = require( '@stdlib/ndarray/base/iteration-order' );
*
* var o = iterationOrder( [ 2, 1 ] );
* // returns 1
*
* o = iterationOrder( [ -2, 1 ] );
* // returns 0
*
* o = iterationOrder( [ -2, -1 ] );
* // returns -1
*/

// MODULES //

var iterationOrder = require( './main.js' );


// EXPORTS //

module.exports = iterationOrder;
