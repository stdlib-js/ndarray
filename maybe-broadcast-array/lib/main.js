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

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var broadcast = require( './../../broadcast-array' );
var getShape = require( './../../shape' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Broadcasts an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.
*
* ## Notes
*
* -   If a provided ndarray has the same shape as the specified shape, the function returns the provided ndarray.
* -   If a provided ndarray has a different (broadcast compatible) shape than the specified shape, the function returns a new **read-only** ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the input ndarray may affect multiple elements. If you need to write to the input ndarray, copy the input ndarray before broadcasting.
*
* @param {ndarray} x - input array
* @param {NonNegativeIntegerArray} shape - desired shape
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} second argument must be an array of nonnegative integers
* @throws {Error} input array cannot have more dimensions than the desired shape
* @throws {Error} input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
* @throws {Error} input array and desired shape must be broadcast compatible
* @returns {ndarray} broadcasted array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y = maybeBroadcastArray( x, [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 3, 2, 2 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 0 );
* // returns 1
*
* v = y.get( 1, 1, 0 );
* // returns 3
*
* v = y.get( 2, 0, 0 );
* // returns 1
*
* v = y.get( 2, 1, 1 );
* // returns 4
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var y = maybeBroadcastArray( x, [ 3, 2 ] );
* // throws <Error>
*/
function maybeBroadcastArray( x, shape ) {
	var sh;
	var N;
	var d;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isCollection( shape ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.', shape ) );
	}
	N = shape.length;
	sh = getShape( x );

	// Check whether we need to broadcast the input array...
	if ( sh.length === N ) {
		for ( i = 0; i < N; i++ ) {
			d = shape[ i ];
			if ( !isNonNegativeInteger( d ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.', '[' + shape.join( ',' ) + ']' ) );
			}
			// Check whether dimensions match...
			if ( sh[ i ] !== d ) {
				// We found a mismatched dimension; delegate to `broadcast` to ensure that the input array is broadcast compatible with the desired array shape...
				return broadcast( x, shape );
			}
		}
		return x;
	}
	// If we are provided an array having a different rank (i.e., number of dimensions) than the desired shape, assume we need to broadcast, delegating to `broadcast` to ensure that the input array is broadcast compatible with the desired array shape...
	return broadcast( x, shape );
}


// EXPORTS //

module.exports = maybeBroadcastArray;
