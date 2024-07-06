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

var buffer = require( './../../../base/buffer' );
var zeros = require( '@stdlib/array/base/zeros' );


// MAIN //

/**
* Returns an empty n-dimensional ndarray.
*
* @private
* @param {Function} ctor - ndarray constructor
* @param {string} dtype - array data type
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - layout order
* @param {boolean} readonly - boolean indicating whether a returned array should be read-only
* @returns {ndarray} empty ndarray
*/
function empty( ctor, dtype, shape, order, readonly ) {
	var strides;
	var ndims;

	ndims = shape.length;
	if ( ndims === 0 ) {
		strides = [ 0 ];
	} else {
		strides = zeros( ndims );
	}
	return new ctor( dtype, buffer( dtype, 0 ), shape, strides, 0, order, {
		'readonly': readonly
	});
}


// EXPORTS //

module.exports = empty;
