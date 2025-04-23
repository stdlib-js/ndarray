/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var getDType = require( './../../../dtype' );
var getShape = require( './../../../shape' );
var getStrides = require( './../../../strides' );
var getOffset = require( './../../../offset' );
var getOrder = require( './../../../order' );
var getData = require( './../../../data-buffer' );
var ndarray = require( './../../../base/ctor' );
var defaults = require( './../../../defaults' );


// VARIABLES //

var DEFAULT_ORDER = defaults( 'order' );


// MAIN //

/**
* Converts an ndarray-like object to an ndarray.
*
* @param {ndarrayLike} x - ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @returns {ndarray} ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
*
* var out = ndarraylike2ndarray( x );
* // returns <ndarray>
*/
function ndarraylike2ndarray( x ) {
	return new ndarray( getDType( x ), getData( x ), getShape( x ), getStrides( x ), getOffset( x ), getOrder( x ) || DEFAULT_ORDER ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = ndarraylike2ndarray;
