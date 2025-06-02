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

var isReadOnly = require( './../../base/assert/is-read-only' );
var getDType = require( './../../dtype' );
var getShape = require( './../../shape' );
var getStrides = require( './../../strides' );
var getOffset = require( './../../offset' );
var getOrder = require( './../../order' );
var getData = require( './../../data-buffer' );
var ndarray = require( './../../ctor' );
var defaults = require( './../../defaults' );


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
* @param {Options} [options] - function options
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param {boolean} [options.readonly=false] - boolean indicating whether an array should be read-only
* @throws {Error} cannot write to a read-only array
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
	var strides;
	var offset;
	var order;
	var shape;
	var data;
	var opts;
	var dt;

	dt = getDType( x );
	data = getData( x );
	shape = getShape( x );
	strides = getStrides( x );
	offset = getOffset( x );
	order = getOrder( x ) || DEFAULT_ORDER;
	if ( arguments.length > 1 ) {
		opts = arguments[ 1 ];
	} else {
		opts = {};
	}
	if ( isReadOnly( x ) ) {
		if ( opts.readonly === void 0 ) {
			// Preserve read-only behavior...
			opts.readonly = true;
		} else if ( opts.readonly === false ) {
			throw new Error( 'invalid argument. Cannot write to a read-only array.' );
		}
	}
	return new ndarray( dt, data, shape, strides, offset, order, opts );
}


// EXPORTS //

module.exports = ndarraylike2ndarray;
