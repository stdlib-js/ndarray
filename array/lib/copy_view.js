/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isEqualDataType = require( './../../base/assert/is-equal-data-type' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var bufferCtors = require( './../../base/buffer-ctors' );
var getShape = require( './../../shape' );
var getOrder = require( './../../order' );
var numel = require( './../../base/numel' );
var shape2strides = require( './../../base/shape2strides' );
var assign = require( './../../base/assign' );
var zeros = require( '@stdlib/array/base/zeros' );


// MAIN //

/**
* Copies an ndarray view to a data buffer.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {*} dtype - data type
* @returns {(Array|TypedArray|Buffer)} output data buffer
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1.0, 2.0, 3.0 ];
* var shape = [ 3 ];
* var strides = [ -1 ];
* var vec = ndarray( 'generic', buffer, shape, strides, 2, 'row-major' );
*
* var b = copyView( vec, 'float64' );
* // returns <Float64Array>[ 3.0, 2.0, 1.0 ]
*/
function copyView( arr, dtype ) { // TODO: consider replacing with `@stdlib/ndarray[/base]/copy` once created
	var obuf;
	var ctor;
	var out;
	var len;
	var ord;
	var sh;

	sh = getShape( arr );
	ord = getOrder( arr );
	len = numel( sh );
	if ( isEqualDataType( dtype, 'generic' ) ) {
		obuf = zeros( len );
	} else if ( isEqualDataType( dtype, 'binary' ) ) {
		obuf = allocUnsafe( len );
	} else {
		ctor = bufferCtors( dtype );
		obuf = new ctor( len );
	}
	out = {
		'dtype': dtype,
		'data': obuf,
		'shape': sh,
		'strides': shape2strides( sh, ord ),
		'offset': 0,
		'order': ord
	};
	assign( [ arr, out ] );
	return obuf;
}


// EXPORTS //

module.exports = copyView;
