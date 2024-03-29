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

var bytesPerElement = require( './../../../base/bytes-per-element' );
var defaults = require( './defaults.js' );


// MAIN //

/**
* Returns a loop block size for multi-dimensional array tiled loops.
*
* @param {string} dtypeX - array data type
* @returns {integer} block size (in units of elements)
*
* @example
* var bsize = nullaryBlockSize( 'float64' );
* // returns <number>
*/
function nullaryBlockSize( dtypeX ) {
	var nbx = bytesPerElement( dtypeX );
	if ( nbx === null ) { // e.g., "generic" arrays
		return defaults.BLOCK_SIZE_IN_ELEMENTS;
	}
	return ( defaults.BLOCK_SIZE_IN_BYTES/nbx )|0; // asm type annotation
}


// EXPORTS //

module.exports = nullaryBlockSize;
