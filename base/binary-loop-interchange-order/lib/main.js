/**
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

'use strict';

// MODULES //

var loopOrder = require( './../../../base/loop-interchange-order' );


// MAIN //

/**
* Reorders ndarray dimensions and associated strides for loop interchange.
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **sh**: dimensions sorted in loop order.
*     -   **sx**: first input ndarray strides sorted in loop order.
*     -   **sy**: second input ndarray strides sorted in loop order.
*     -   **sz**: output ndarray strides sorted in loop order.
*
* @param {NonNegativeIntegerArray} sh - array dimensions
* @param {IntegerArray} sx - first input array stride lengths
* @param {IntegerArray} sy - second input array stride lengths
* @param {IntegerArray} sz - output array stride lengths
* @returns {Object} loop interchange data
*
* @example
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
* var sy = [ 24, 8, 1 ]; // row-major
* var sz = [ 1, -2, 6 ]; // column-major
*
* var o = binaryLoopOrder( sh, sx, sy, sz );
* // returns {...}
*
* var ssh = o.sh;
* // returns [ 4, 3, 2 ]
*
* var ssx = o.sx;
* // returns [ 1, 4, 12 ]
*
* var ssy = o.sy;
* // returns [ 1, 8, 24 ]
*
* var ssz = o.sz;
* // returns [ 6, -2, 1 ]
*/
function binaryLoopOrder( sh, sx, sy, sz ) {
	var tmp = loopOrder( sh, [ sx, sy, sz ] );
	return {
		'sh': tmp[ 0 ],
		'sx': tmp[ 1 ],
		'sy': tmp[ 2 ],
		'sz': tmp[ 3 ]
	};
}


// EXPORTS //

module.exports = binaryLoopOrder;
