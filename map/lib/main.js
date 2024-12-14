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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var emptyLike = require( './../../empty-like' );
var base = require( './../../base/map' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {string} [options.dtype] - output array data type
* @param {Callback} fcn - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
*/
function map( x, options, fcn, thisArg ) {
	var hasOpts;
	var clbk;
	var opts;
	var ctx;
	var y;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( arguments.length < 3 ) {
		clbk = options;
	} else if ( arguments.length === 3 ) {
		if ( isFunction( options ) ) {
			clbk = options;
			ctx = fcn;
		} else {
			hasOpts = true;
			opts = options;
			clbk = fcn;
		}
	} else {
		hasOpts = true;
		opts = options;
		clbk = fcn;
		ctx = thisArg;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
	}
	if ( hasOpts ) {
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'dtype' ) ) {
			// Delegate `dtype` validation to `emptyLike` during output array creation:
			y = emptyLike( x, {
				'dtype': opts.dtype
			});
		} else {
			// We only support a `dtype` option, so avoid passing along any other options:
			y = emptyLike( x );
		}
	} else {
		y = emptyLike( x );
	}
	base( [ x, y ], clbk, ctx );
	return y;
}


// EXPORTS //

module.exports = map;
