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
* @param {string} dtypeX - first input array data type
* @param {string} dtypeY - second input array data type
* @param {string} dtypeZ - output array data type
* @returns {integer} block size (in units of elements)
*
* @example
* var bsize = binaryBlockSize( 'float64', 'float64', 'float64' );
* // returns <number>
*/
function binaryBlockSize( dtypeX, dtypeY, dtypeZ ) {
	var nbx;
	var nby;
	var nbz;

	nbx = bytesPerElement( dtypeX );
	nby = bytesPerElement( dtypeY );
	nbz = bytesPerElement( dtypeZ );
	if ( nbx === null || nby === null || nbz === null ) { // e.g., "generic" arrays
		return defaults.BLOCK_SIZE_IN_ELEMENTS;
	}
	if ( nbx > nby && nbx > nbz ) {
		return ( defaults.BLOCK_SIZE_IN_BYTES/nbx )|0; // asm type annotation
	}
	if ( nby > nbz ) {
		return ( defaults.BLOCK_SIZE_IN_BYTES/nby )|0; // asm type annotation
	}
	return ( defaults.BLOCK_SIZE_IN_BYTES/nbz )|0; // asm type annotation
}


// EXPORTS //

module.exports = binaryBlockSize;
