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

var isDataType = require( './../../base/assert/is-data-type' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the data type of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray having a supported data type
* @returns {string} data type
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'float64'
* });
*
* var dt = dtype( x );
* // returns 'float64'
*/
function dtype( x ) {
	var dt;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	dt = x.dtype;
	if ( isDataType( dt ) ) {
		return dt;
	}
	// A data type is essential for interpreting the memory associated with an ndarray object, so no fallbacks or workarounds for data type resolution...
	throw new TypeError( format( 'invalid argument. Must provide an ndarray having a supported data type. Value: `%s`.', dt ) );
}


// EXPORTS //

module.exports = dtype;
