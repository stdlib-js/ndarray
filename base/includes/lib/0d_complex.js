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

// MAIN //

/**
* Tests whether a reinterpreted complex number ndarray contains a specified value.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {ComplexLike} value - search element
* @returns {boolean} result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0 ] );
*
* // Define the shape of the input array:
* var shape = [];
*
* // Define the array strides:
* var sx = [ 0 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'complex128',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Perform reduction:
* var v = {
*     're': 1.0,
*     'im': 2.0
* };
* var out = includes0d( x, v );
* // returns true
*
* v = {
*     're': -3.0,
*     'im': -4.0
* };
* out = includes0d( x, v );
* // returns false
*/
function includes0d( x, value ) {
	return ( x.data[ x.offset ] === value.re && x.data[ x.offset+1 ] === value.im ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = includes0d;
