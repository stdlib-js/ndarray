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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var dimensionSize = require( './../../base/numel-dimension' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the size (i.e., number of elements) of a specified dimension for a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {integer} dim - dimension index
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {TypeError} second argument must be an integer
* @throws {RangeError} dimension index exceeds the number of dimensions
* @returns {NonNegativeInteger} dimension size
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = numelDimension( zeros( [ 4, 2, 3 ] ), 0 );
* // returns 4
*/
function numelDimension( x, dim ) {
	var d;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isInteger( dim ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', dim ) );
	}
	d = dimensionSize( x, dim );
	if ( isNonNegativeInteger( d ) ) {
		return d;
	}
	// As ndarrays must have nonnegative-integer-valued dimension sizes, if the returned "dimension size" is not a nonnegative integer, assume we haven't been provided an ndarray:
	throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = numelDimension;
