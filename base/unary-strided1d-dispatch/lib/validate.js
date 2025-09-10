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

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var normalizeIndices = require( './../../../base/to-unique-normalized-indices' );
var join = require( '@stdlib/array/base/join' );
var contains = require( '@stdlib/array/base/assert/contains' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {NonNegativeInteger} ndims - number of input ndarray dimensions
* @param {Array} dtypes - list of supported output data types
* @param {Options} options - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform an operation
* @param {string} [options.dtype] - output ndarray data type
* @returns {(Error|null)} null or an error object
*
* @example
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var opts = {};
* var options = {
*     'dims': [ 0 ]
* };
* var err = validate( opts, 3, dtypes, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, ndims, dtypes, options ) {
	var tmp;
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'dims' ) ) {
		opts.dims = options.dims;
		if ( !isIntegerArray( opts.dims ) && !isEmptyCollection( opts.dims ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be an array of integers. Option: `%s`.', 'dims', opts.dims ) );
		}
		tmp = normalizeIndices( opts.dims, ndims-1 );
		if ( tmp === null ) {
			return new RangeError( format( 'invalid option. `%s` option contains an out-of-bounds dimension index. Option: [%s].', 'dims', join( opts.dims, ',' ) ) );
		}
		if ( tmp.length !== opts.dims.length ) {
			return new Error( format( 'invalid option. `%s` option contains duplicate indices. Option: [%s].', 'dims', join( opts.dims, ',' ) ) );
		}
		opts.dims = tmp;
	}
	if ( hasOwnProp( options, 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !contains( dtypes, opts.dtype ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', join( dtypes, '", "' ), opts.dtype ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
