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

// MODULES //

var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
var getOffset = require( './../../../base/offset' );
var getData = require( './../../../base/data-buffer' );


// MAIN //

/**
* Converts an ndarray-like object to a scalar value.
*
* @param {ndarrayLike} x - ndarray-like object
* @param {*} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @returns {*} scalar value
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = scalar2ndarray( 1.0 );
* // returns <ndarray>
*
* var out = ndarraylike2scalar( x );
* // returns 1.0
*/
function ndarraylike2scalar( x ) {
	var buf = getData( x );
	var get = resolveGetter( buf );
	return get( buf, getOffset( x ) );
}


// EXPORTS //

module.exports = ndarraylike2scalar;
