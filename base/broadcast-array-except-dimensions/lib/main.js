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

var copy = require( '@stdlib/array/base/copy' );
var ndarray = require( './../../../base/ctor' );
var getShape = require( './../../../base/shape' );
var getStrides = require( './../../../base/strides' );
var getOffset = require( './../../../base/offset' );
var getOrder = require( './../../../base/order' );
var getDType = require( './../../../base/dtype' );
var getData = require( './../../../base/data-buffer' );
var normalizeIndices = require( './../../../base/normalize-indices' );
var join = require( '@stdlib/array/base/join' );
var zeros = require( '@stdlib/array/base/zeros' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Broadcasts an input ndarray to a target shape while keeping a list of specified dimensions unchanged.
*
* ## Notes
*
* -   The function expects that each index in the list of dimensions is negative in order to ensure that indices correspond to the same relative position in the output ndarray shape. For example, given an input ndarray shape `[2,X1,X2]` and a desired shape `[6,7,2,Y1,Y2]`, a list of negative dimensions `[-2,-1]` correctly maps the unchanged dimensions `X` in the input ndarray to ignored dimensions `Y` in the provided target shape. Nonnegative indices, however, afford no such mapping. For example, the list of dimensions `[1,2]` corresponds to `[X1,X2]` in the input ndarray shape, but to `[7,2]` in the target shape, which is not desired. By expecting negative indices, we avoid confusion and ensure that users always refer to dimensions relative to the last broadcasted dimension.
*
* @param {ndarray} arr - input array
* @param {NonNegativeIntegerArray} shape - desired shape
* @param {NegativeIntegerArray} dims - list of dimensions to exclude from broadcasting
* @throws {Error} input array cannot have more dimensions than the desired shape
* @throws {Error} broadcasted dimensions in the input array and desired shape must be broadcast compatible
* @throws {RangeError} dimension indices must not exceed desired shape bounds
* @throws {Error} must provide unique dimension indices
* @returns {ndarray} broadcasted array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var getShape = require( '@stdlib/ndarray/shape' );
*
* var x = array( [ [ 1, 2, 3 ] ] );
* // returns <ndarray>
*
* var shx = getShape( x );
* // returns [ 1, 3 ]
*
* var y = broadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
* // returns <ndarray>
*
* var shy = getShape( y );
* // returns [ 2, 1, 3 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 0, 0, 2 );
* // returns 3
*
* v = y.get( 1, 0, 0 );
* // returns 1
*
* v = y.get( 1, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 2 );
* // returns 3
*/
function broadcastArrayExceptDimensions( arr, shape, dims ) { // eslint-disable-line id-length
	var strides;
	var idx;
	var dim;
	var sh;
	var st;
	var dl;
	var N;
	var M;
	var d;
	var i;
	var j;
	var k;

	// Copy input arguments to avoid unintended mutation:
	shape = copy( shape );
	idx = copy( dims );

	// Resolve the shape of the input array:
	sh = getShape( arr, false );

	N = shape.length;
	M = sh.length;
	if ( N < M ) {
		throw new Error( 'invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.' );
	}
	// Initialize a strides array:
	strides = zeros( N );

	// Verify that we've been provided a list of unique dimension indices...
	dl = idx.length;
	idx = normalizeIndices( idx, M-1 );
	if ( idx === null ) {
		throw new RangeError( format( 'invalid argument. Third argument contains an out-of-bounds dimension index. Value: [%s].', join( dims, ',' ) ) );
	}
	idx.sort(); // sort in ascending order
	if ( idx.length !== dl ) {
		throw new Error( format( 'invalid argument. Third argument must contain a list of unique dimension indices. Value: [%s].', join( dims, ',' ) ) );
	}
	k = idx.length - 1;

	// Determine the output array strides...
	st = getStrides( arr, false );
	for ( i = N-1; i >= 0; i-- ) {
		// Moving from right-to-left, resolve an index into the input array shape:
		j = M - N + i; // M-1, M-2, M-3, ..., M-M, ..., M-N with N >= M

		// For prepended singleton dimensions, the stride is zero...
		if ( j < 0 ) {
			continue;
		}
		// Check for a dimension being held constant...
		if ( k >= 0 && idx[ k ] === j ) {
			shape[ i ] = sh[ j ];
			strides[ i ] = st[ j ];
			k -= 1;
			continue;
		}
		// Broadcast the current dimension...
		d = sh[ j ];
		dim = shape[ i ];
		if ( dim !== 0 && dim < d ) {
			throw new Error( format( 'invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.', copy( sh ).join( ', ' ), copy( shape ).join( ', ' ), i ) );
		}
		if ( d === dim ) {
			strides[ i ] = st[ j ];
		} else if ( d === 1 ) {
			// In order to broadcast dimensions, we set the stride for that dimension to zero...
			strides[ i ] = 0;
		} else {
			// At this point, we know that `dim > d` and that `d` does not equal `1` (e.g., `dim=3` and `d=2`); in which case, the shapes are considered incompatible (even for desired shapes which are multiples of array dimensions, as might be desired when "tiling" an array; e.g., `dim=4` and `d=2`)...
			throw new Error( format( 'invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.', copy( sh ).join( ', ' ), copy( shape ).join( ', ' ), i ) );
		}
	}
	return ndarray( getDType( arr ), getData( arr ), shape, strides, getOffset( arr ), getOrder( arr ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = broadcastArrayExceptDimensions;
