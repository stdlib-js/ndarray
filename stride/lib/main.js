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

var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var getStride = require( './../../base/stride' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the stride along a specified dimension for a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {integer} dim - dimension index
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {TypeError} second argument must be an integer
* @throws {RangeError} dimension index exceeds the number of dimensions
* @returns {integer} stride
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = stride( zeros( [ 3, 3, 3 ] ), 0 );
* // returns 9
*/
function stride( x, dim ) {
	var st;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null || !isCollection( x.shape ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isInteger( dim ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', dim ) );
	}
	st = getStride( x, dim );
	if ( isInteger( st ) ) {
		return st;
	}
	// As ndarrays must have integer-valued strides, if the returned "stride" value is not integer-valued, assume we haven't been provided an ndarray:
	throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = stride;
