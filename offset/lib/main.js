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
var isCollection = require( '@stdlib/assert/is-collection' );
var strides2offset = require( './../../base/strides2offset' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the index offset specifying the underlying buffer index of the first iterated ndarray element.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
* @returns {NonNegativeInteger} index offset
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var n = offset( zeros( [ 3, 3, 3 ] ) );
* // returns 0
*/
function offset( x ) {
	var st;
	var sh;
	var n;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	n = x.offset;
	if ( isNonNegativeInteger( n ) ) {
		return n;
	}
	sh = x.shape;
	if ( !isCollection( sh ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	st = x.strides;
	if ( sh.length === 0 || !isCollection( st ) ) {
		return 0;
	}
	n = strides2offset( sh, st );
	if ( isNonNegativeInteger( n ) ) {
		return n;
	}
	throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = offset;
