/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isArrayLike = require( '@stdlib/assert/is-array-like' );
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var buffer = require( './../../base/buffer' );
var numel = require( './../../base/numel' );
var ndarray = require( './../../ctor' );
var defaults = require( './../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DTYPE = defaults.get( 'dtypes.default' );
var ORDER = defaults.get( 'order' );


// MAIN //

/**
* Creates a zero-filled ndarray having a specified shape and data type.
*
* @param {(NonNegativeIntegerArray|NonNegativeInteger)} shape - array shape
* @param {Options} [options] - options
* @param {string} [options.dtype='float64'] - data type
* @param {string} [options.order='row-major'] - array order
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param {boolean} [options.readonly=false] - boolean indicating whether an array should be read-only
* @throws {TypeError} first argument must be either a nonnegative integer or an array of nonnegative integers
* @throws {TypeError} options argument must be an object
* @throws {TypeError} `dtype` option must be a recognized data type
* @throws {TypeError} `order` option must be a recognized array order
* @throws {TypeError} must provide valid options
* @returns {ndarray} ndarray
*
* @example
* var arr = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float64'
*/
function zeros( shape ) {
	var options;
	var dtype;
	var order;
	var ndims;
	var opts;
	var buf;
	var len;
	var st;
	var sh;

	opts = {};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'dtype' ) ) {
			dtype = options.dtype;
		} else {
			dtype = DTYPE;
		}
		if ( hasOwnProp( options, 'order' ) ) {
			order = options.order;
		} else {
			order = ORDER;
		}
		if ( hasOwnProp( options, 'mode' ) ) {
			opts.mode = options.mode;
		}
		if ( hasOwnProp( options, 'submode' ) ) {
			opts.submode = options.submode;
		}
		if ( hasOwnProp( options, 'readonly' ) ) {
			opts.readonly = options.readonly;
		}
	} else {
		dtype = DTYPE;
		order = ORDER;
	}
	if ( isNumber( shape ) ) {
		sh = [ shape ];
	} else if ( isArrayLike( shape ) ) {
		sh = shape;
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.', shape ) );
	}
	ndims = sh.length;
	if ( ndims > 0 ) {
		len = numel( sh );
		if ( len !== len || len < 0 ) {
			// We should only get here if we've been provided an invalid shape (e.g., an array containing negative integers, etc)...
			throw new TypeError( format( 'invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.', shape ) );
		}
		st = shape2strides( sh, order );
	} else {
		// For 0-dimensional arrays, the buffer should contain a single element...
		len = 1;
		st = [ 0 ];
	}
	buf = buffer( dtype, len );
	if ( buf === null ) {
		throw new TypeError( format( 'invalid option. `%s` option must be a recognized data type. Option: `%s`.', 'dtype', dtype ) );
	}
	return new ndarray( dtype, buf, sh, st, strides2offset( sh, st ), order, opts ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zeros;
