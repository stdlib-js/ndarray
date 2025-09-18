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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var normalizeIndices = require( './../../base/to-unique-normalized-indices' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {NonNegativeInteger} ndims - number of input ndarray dimensions
* @param {Options} options - function options
* @param {boolean} [options.keepdims] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'keepdims': true
* };
* var err = validate( opts, 3, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, ndims, options ) {
	var tmp;
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'keepdims' ) ) {
		opts.keepdims = options.keepdims;
		if ( !isBoolean( opts.keepdims ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'keepdims', opts.keepdims ) );
		}
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
		if ( tmp.length > ndims ) {
			return new RangeError( format( 'invalid option. `%s` option specifies more dimensions than exists in the input array. Number of dimensions: %d. Option: [%s].', 'dims', ndims, join( opts.dims, ',' ) ) );
		}
		opts.dims = tmp;
	}
	return null;
}


// EXPORTS //

module.exports = validate;
