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

/* eslint-disable max-depth */

'use strict';

// MODULES //

var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Performs a reduction over an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {IntegerArray} strides - loop dimension strides for the input ndarray
* @param {boolean} isRowMajor - boolean indicating if provided arrays are in row-major order
* @param {Function} strategy - input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
*
* var ResultsArray = structFactory( Float64Results );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new ResultsArray( 3 );
*
* // Define the array shapes:
* var xsh = [ 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2 ];
* var ysh = [ 1, 1, 1, 1, 1, 1, 1, 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 12, 12, 12, 12, 12, 12, 4, 2, 1 ];
* var sy = [ 3, 3, 3, 3, 3, 3, 3, 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': Float64Results,
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create additional parameter ndarray-like objects:
* var alternative = {
*     'dtype': 'generic',
*     'data': [ 'two-sided' ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Initialize ndarray-like objects representing sub-array views:
* var views = [
*     {
*         'dtype': x.dtype,
*         'data': x.data,
*         'shape': [ 2, 2 ],
*         'strides': [ 2, 1 ],
*         'offset': x.offset,
*         'order': x.order
*     },
*     {
*         'dtype': y.dtype,
*         'data': y.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': y.offset,
*         'order': y.order
*     },
*     {
*         'dtype': alternative.dtype,
*         'data': alternative.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': alternative.offset,
*         'order': alternative.order
*     },
*     {
*         'dtype': alpha.dtype,
*         'data': alpha.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': alpha.offset,
*         'order': alpha.order
*     },
*     {
*         'dtype': mu.dtype,
*         'data': mu.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': mu.offset,
*         'order': mu.order
*     },
*     {
*         'dtype': sigma.dtype,
*         'data': sigma.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': sigma.offset,
*         'order': sigma.order
*     }
* ];
*
* // Define a reshape strategy:
* function strategy( x ) {
*     return {
*         'dtype': x.dtype,
*         'data': x.data,
*         'shape': [ 4 ],
*         'strides': [ 1 ],
*         'offset': x.offset,
*         'order': x.order
*     };
* }
*
* // Perform a reduction:
* unary9d( ztest, [ x, y, alternative, alpha, mu, sigma ], views, [ 12, 12, 12, 12, 12, 12, 12, 12, 4 ], true, strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ [ [ [ [ [ <Float64Results>, <Float64Results>, <Float64Results> ] ] ] ] ] ] ] ] ]
*/
function unary9d( fcn, arrays, views, strides, isRowMajor, strategy, opts ) { // eslint-disable-line max-statements
	var dv0;
	var dv1;
	var dv2;
	var dv3;
	var dv4;
	var dv5;
	var dv6;
	var dv7;
	var dv8;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var S5;
	var S6;
	var S7;
	var S8;
	var sv;
	var iv;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var i6;
	var i7;
	var i8;
	var v;
	var i;

	// Note on variable naming convention: S#, dv#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the output shape:
	sh = arrays[ 1 ].shape;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	if ( isRowMajor ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 8 ];
		S1 = sh[ 7 ];
		S2 = sh[ 6 ];
		S3 = sh[ 5 ];
		S4 = sh[ 4 ];
		S5 = sh[ 3 ];
		S6 = sh[ 2 ];
		S7 = sh[ 1 ];
		S8 = sh[ 0 ];
		dv0 = [ strides[8] ];                     // offset increment for innermost loop
		dv1 = [ strides[7] - ( S0*strides[8] ) ];
		dv2 = [ strides[6] - ( S1*strides[7] ) ];
		dv3 = [ strides[5] - ( S2*strides[6] ) ];
		dv4 = [ strides[4] - ( S3*strides[5] ) ];
		dv5 = [ strides[3] - ( S4*strides[4] ) ];
		dv6 = [ strides[2] - ( S5*strides[3] ) ];
		dv7 = [ strides[1] - ( S6*strides[2] ) ];
		dv8 = [ strides[0] - ( S7*strides[1] ) ]; // offset increment for outermost loop
		for ( i = 1; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[8] );
			dv1.push( sv[7] - ( S0*sv[8] ) );
			dv2.push( sv[6] - ( S1*sv[7] ) );
			dv3.push( sv[5] - ( S2*sv[6] ) );
			dv4.push( sv[4] - ( S3*sv[5] ) );
			dv5.push( sv[3] - ( S4*sv[4] ) );
			dv6.push( sv[2] - ( S5*sv[3] ) );
			dv7.push( sv[1] - ( S6*sv[2] ) );
			dv8.push( sv[0] - ( S7*sv[1] ) );
		}
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		S4 = sh[ 4 ];
		S5 = sh[ 5 ];
		S6 = sh[ 6 ];
		S7 = sh[ 7 ];
		S8 = sh[ 8 ];
		dv0 = [ strides[0] ];                     // offset increment for innermost loop
		dv1 = [ strides[1] - ( S0*strides[0] ) ];
		dv2 = [ strides[2] - ( S1*strides[1] ) ];
		dv3 = [ strides[3] - ( S2*strides[2] ) ];
		dv4 = [ strides[4] - ( S3*strides[3] ) ];
		dv5 = [ strides[5] - ( S4*strides[4] ) ];
		dv6 = [ strides[6] - ( S5*strides[5] ) ];
		dv7 = [ strides[7] - ( S6*strides[6] ) ];
		dv8 = [ strides[8] - ( S7*strides[7] ) ]; // offset increment for outermost loop
		for ( i = 1; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[0] );
			dv1.push( sv[1] - ( S0*sv[0] ) );
			dv2.push( sv[2] - ( S1*sv[1] ) );
			dv3.push( sv[3] - ( S2*sv[2] ) );
			dv4.push( sv[4] - ( S3*sv[3] ) );
			dv5.push( sv[5] - ( S4*sv[4] ) );
			dv6.push( sv[6] - ( S5*sv[5] ) );
			dv7.push( sv[7] - ( S6*sv[6] ) );
			dv8.push( sv[8] - ( S7*sv[7] ) );
		}
	}
	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Iterate over the non-reduced ndarray dimensions...
	for ( i8 = 0; i8 < S8; i8++ ) {
		for ( i7 = 0; i7 < S7; i7++ ) {
			for ( i6 = 0; i6 < S6; i6++ ) {
				for ( i5 = 0; i5 < S5; i5++ ) {
					for ( i4 = 0; i4 < S4; i4++ ) {
						for ( i3 = 0; i3 < S3; i3++ ) {
							for ( i2 = 0; i2 < S2; i2++ ) {
								for ( i1 = 0; i1 < S1; i1++ ) {
									for ( i0 = 0; i0 < S0; i0++ ) {
										setViewOffsets( views, iv );
										v[ 0 ] = strategy( views[ 0 ] );
										fcn( v, opts );
										incrementOffsets( iv, dv0 );
									}
									incrementOffsets( iv, dv1 );
								}
								incrementOffsets( iv, dv2 );
							}
							incrementOffsets( iv, dv3 );
						}
						incrementOffsets( iv, dv4 );
					}
					incrementOffsets( iv, dv5 );
				}
				incrementOffsets( iv, dv6 );
			}
			incrementOffsets( iv, dv7 );
		}
		incrementOffsets( iv, dv8 );
	}
}


// EXPORTS //

module.exports = unary9d;
