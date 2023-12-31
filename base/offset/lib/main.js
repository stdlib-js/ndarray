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

var strides2offset = require( './../../../base/strides2offset' );


// MAIN //

/**
* Returns the index offset specifying the underlying buffer index of the first iterated ndarray element.
*
* @param {ndarrayLike} x - input ndarray
* @returns {NonNegativeInteger} index offset
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var n = offset( zeros( [ 3, 3, 3 ] ) );
* // returns 0
*/
function offset( x ) {
	var st;
	var sh;
	var o;

	o = x.offset;
	if ( typeof o === 'number' ) {
		return o;
	}
	sh = x.shape;
	if ( sh.length === 0 ) {
		return 0;
	}
	st = x.strides;
	if ( typeof st !== 'object' || st === null ) {
		return 0;
	}
	return strides2offset( sh, st );
}


// EXPORTS //

module.exports = offset;
