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
var isOrder = require( './../../base/assert/is-order' );
var shape2strides = require( './../../base/shape2strides' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the strides of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
* @returns {IntegerArray} strides
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = strides( zeros( [ 3, 3, 3 ] ) );
* // returns [ 9, 3, 1 ]
*/
function strides( x ) {
	var out;
	var ord;
	var sh;
	var st;
	var d;
	var i;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	st = x.strides; // TODO: consider whether we want to support ecosystem libraries, such as scijs/ndarray, which name this property `stride`
	if ( !isCollection( st ) ) {
		// WARNING: if no strides array, try to derive the strides from the shape. Note, however, that there is a lot that can go wrong here, as the only thing we are requiring is that the shape is a collection. The main point of going through the effort to compute strides is to support minimal ndarray-esque objects, where the only essential attributes are `shape` and `dtype` and where other attributes can be computed (e.g., `strides`, `offset`, `ndims`, `order`, etc), assuming single-segment contiguous data stored in row-major order...
		sh = x.shape;
		if ( !isCollection( sh ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
		}
		if ( sh.length === 0 ) {
			return [ 0 ];
		}
		ord = x.order;
		if ( !isOrder( ord ) ) {
			ord = 'row-major';
		}
		return shape2strides( sh, ord );
	}
	// Copy the strides in order to avoid unintended mutation...
	out = [];
	for ( i = 0; i < st.length; i++ ) {
		d = st[ i ];
		if ( !isInteger( d ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
		}
		out.push( d );
	}
	return out;
}


// EXPORTS //

module.exports = strides;
