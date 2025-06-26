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

var isRowMajor = require( './../../../base/assert/is-row-major-string' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var isSortedAscending = require( '@stdlib/array/base/assert/is-sorted-ascending' );
var toNormalizedIndices = require( './../../../base/to-unique-normalized-indices' );
var getDType = require( './../../../base/dtype' );
var getShape = require( './../../../base/shape' );
var getStrides = require( './../../../base/strides' );
var getOffset = require( './../../../base/offset' );
var getOrder = require( './../../../base/order' );
var getData = require( './../../../base/data-buffer' );
var ones = require( '@stdlib/array/base/ones' );
var zeros = require( '@stdlib/array/base/zeros' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Expands the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.
*
* ## Notes
*
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`. If provided a negative dimension index, the position at which to place a respective dimension is computed as `ndims + index`.
* -   Provided dimension indices must resolve to normalized dimension indices arranged in ascending order.
*
* @param {NonNegativeInteger} ndims - number of dimensions in the output array
* @param {ndarray} x - input array
* @param {IntegerArray} dims - dimension indices at which to spread array dimensions
* @throws {RangeError} first argument must be greater than or equal to the number of dimensions in the input array
* @throws {RangeError} must provide the same number of dimension indices as the number of dimensions in the input array
* @throws {RangeError} must provide valid dimension indices
* @throws {Error} must provide unique dimension indices
* @throws {Error} dimension indices must resolve to normalized dimension indices arranged in ascending order
* @returns {ndarray} output array
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
* var y = spreadDimensions( 5, x, [ 1, 3 ] );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 1, 2, 1, 2, 1 ]
*
* var v = y.get( 0, 0, 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 0, 1, 0 );
* // returns 2
*
* v = y.get( 0, 1, 0, 0, 0 );
* // returns 3
*
* v = y.get( 0, 1, 0, 1, 0 );
* // returns 4
*/
function spreadDimensions( ndims, x, dims ) {
	var strides;
	var shape;
	var isrm;
	var ord;
	var sh;
	var st;
	var d;
	var S;
	var s;
	var i;
	var j;

	sh = getShape( x, false );
	st = getStrides( x, false );
	ord = getOrder( x );
	isrm = isRowMajor( ord );

	if ( sh.length > ndims ) {
		throw new RangeError( format( 'invalid argument. First argument must be greater than or equal to the number of dimensions in the input ndarray. Number of dimensions: %d. Value: `%d`.', sh.length, ndims ) );
	}
	// Resolve dimension indices...
	d = toNormalizedIndices( dims, ndims-1 );
	if ( d === null ) {
		throw new RangeError( format( 'invalid argument. Specified dimension index is out-of-bounds. Must be on the interval: [-%u, %u]. Value: `[%s]`.', ndims, ndims-1, dims.join( ', ' ) ) );
	}
	if ( d.length !== dims.length ) {
		throw new Error( format( 'invalid argument. Must provide unique dimension indices. Value: `[%s]`.', dims.join( ', ' ) ) );
	}
	if ( d.length !== sh.length ) {
		throw new RangeError( format( 'invalid argument. Must provide the same number of dimension indices as the number of dimensions in the input ndarray. Number of dimensions: %d. Value: `[%s]`.', sh.length, dims.join( ', ' ) ) );
	}
	if ( d.length && !isSortedAscending( d ) ) {
		throw new Error( format( 'invalid argument. Must provide dimension indices which resolve to nonnegative indices arranged in ascending order. Value: `[%s]`.', dims.join( ', ' ) ) );
	}
	// When provided a zero-dimensional array, every expanded dimension is a singleton dimension having zero stride...
	if ( sh.length === 0 ) {
		shape = ones( ndims );
		strides = zeros( ndims );
	} else {
		// Interweave singleton dimensions...
		strides = [];
		shape = [];
		j = 0;
		for ( i = 0; i < ndims; i++ ) {
			if ( i === d[ j ] ) {
				// If we have a match, we can move on to inserting singleton dimensions before the next dimension index...
				S = sh[ j ];
				s = st[ j ];
				j += 1;
			} else if ( j === sh.length ) { // append
				// We should only get here after exhausting all the dimension indices...
				S = 1;
				s = st[ j-1 ];
				if ( !isrm ) {
					s *= sh[ j-1 ];
				}
			} else { // insert before
				// We have yet to reach the next specified dimension index so we insert a singleton dimension...
				S = 1;
				s = st[ j ];
				if ( isrm ) {
					s *= sh[ j ];
				}
			}
			shape.push( S );
			strides.push( s );
		}
	}
	if ( isReadOnly( x ) ) {
		// If provided a read-only view, the returned array should also be read-only...
		return new x.constructor( getDType( x ), getData( x ), shape, strides, getOffset( x ), ord, { // eslint-disable-line max-len
			'readonly': true
		});
	}
	return new x.constructor( getDType( x ), getData( x ), shape, strides, getOffset( x ), ord ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = spreadDimensions;
