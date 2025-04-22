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

var loopOrder = require( './../../../base/unary-loop-interchange-order' );
var blockSize = require( './../../../base/unary-tiling-block-size' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
var zeros = require( '@stdlib/array/base/zeros' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Applies a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray via loop blocking.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {NonNegativeIntegerArray} shape - loop dimensions
* @param {IntegerArray} stridesX - loop dimension strides for the input ndarray
* @param {IntegerArray} stridesY - loop dimension strides for the output ndarray
* @param {Object} strategyX - strategy for marshaling data to and from an input ndarray view
* @param {Object} strategyY - strategy for marshaling data to and from an output ndarray view
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var gcusum = require( '@stdlib/blas/ext/base/gcusum' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     var y = arrays[ 1 ];
*     var s = arrays[ 2 ];
*     return gcusum( numelDimension( x, 0 ), getData( s )[ getOffset( s ) ], getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) );
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 1, 1, 3, 2, 2 ];
* var ysh = [ 1, 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 4, 2, 1 ];
* var sy = [ 12, 12, 4, 2, 1 ];
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
* // Create an ndarray-like object for the initial sum:
* var initial = {
*     'dtype': 'float64',
*     'data': new Float64Array( [ 0.0 ] ),
*     'shape': [ 1, 1, 3 ],
*     'strides': [ 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
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
*         'shape': [ 2, 2 ],
*         'strides': [ 2, 1 ],
*         'offset': y.offset,
*         'order': y.order
*     },
*     {
*         'dtype': initial.dtype,
*         'data': initial.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': initial.offset,
*         'order': initial.order
*     }
* ];
*
* // Define an input strategy:
* function inputStrategy( x ) {
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
* // Define an output strategy:
* function outputStrategy( x ) {
*     return x;
* }
*
* var strategy = {
*     'input': inputStrategy,
*     'output': outputStrategy
* };
*
* // Apply strided function:
* blockedunary3d( wrapper, [ x, y, initial ], views, [ 1, 1, 3 ], [ 12, 12, 4 ], [ 12, 12, 4 ], strategy, strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ [ 1.0, 3.0 ], [ 6.0, 10.0 ] ], [ [ 5.0, 11.0 ], [ 18.0, 26.0 ] ], [ [ 9.0, 19.0 ], [ 30.0, 42.0 ] ] ] ] ]
*/
function blockedunary3d( fcn, arrays, views, shape, stridesX, stridesY, strategyX, strategyY, opts ) { // eslint-disable-line max-len
	var bsize;
	var dv0;
	var dv1;
	var dv2;
	var ov1;
	var ov2;
	var sh;
	var s0;
	var s1;
	var s2;
	var sv;
	var ov;
	var iv;
	var i0;
	var i1;
	var i2;
	var j0;
	var j1;
	var j2;
	var N;
	var x;
	var y;
	var o;
	var k;

	// Note on variable naming convention: S#, dv#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	N = arrays.length;
	x = arrays[ 0 ];
	y = arrays[ 1 ];

	// Resolve the loop interchange order:
	o = loopOrder( shape, stridesX, stridesY );
	sh = o.sh;
	sv = [ o.sx, o.sy ];
	for ( k = 2; k < N; k++ ) {
		sv.push( takeIndexed( arrays[k].strides, o.idx ) );
	}
	// Determine the block size:
	bsize = blockSize( x.dtype, y.dtype );

	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	ov = offsets( arrays );

	// Cache offset increments for the innermost loop...
	dv0 = [];
	for ( k = 0; k < N; k++ ) {
		dv0.push( sv[k][0] );
	}
	// Initialize loop variables...
	ov1 = zeros( N );
	ov2 = zeros( N );
	dv1 = zeros( N );
	dv2 = zeros( N );
	iv = zeros( N );

	// Iterate over blocks...
	for ( j2 = sh[2]; j2 > 0; ) {
		if ( j2 < bsize ) {
			s2 = j2;
			j2 = 0;
		} else {
			s2 = bsize;
			j2 -= bsize;
		}
		for ( k = 0; k < N; k++ ) {
			ov2[ k ] = ov[k] + ( j2*sv[k][2] );
		}
		for ( j1 = sh[1]; j1 > 0; ) {
			if ( j1 < bsize ) {
				s1 = j1;
				j1 = 0;
			} else {
				s1 = bsize;
				j1 -= bsize;
			}
			for ( k = 0; k < N; k++ ) {
				ov1[ k ] = ov2[k] + ( j1*sv[k][1] );
				dv2[ k ] = sv[k][2] - ( s1*sv[k][1] );
			}
			for ( j0 = sh[0]; j0 > 0; ) {
				if ( j0 < bsize ) {
					s0 = j0;
					j0 = 0;
				} else {
					s0 = bsize;
					j0 -= bsize;
				}
				// Compute index offsets and loop offset increments for the first ndarray elements in the current block...
				for ( k = 0; k < N; k++ ) {
					iv[ k ] = ov1[k] + ( j0*sv[k][0] );
					dv1[ k ] = sv[k][1] - ( s0*sv[k][0] );
				}
				// Iterate over the loop dimensions...
				for ( i2 = 0; i2 < s2; i2++ ) {
					for ( i1 = 0; i1 < s1; i1++ ) {
						for ( i0 = 0; i0 < s0; i0++ ) {
							setViewOffsets( views, iv );
							views[ 0 ] = strategyX.input( views[ 0 ] );
							views[ 1 ] = strategyY.input( views[ 1 ] );
							fcn( views, opts );
							strategyY.output( y );
							incrementOffsets( iv, dv0 );
						}
						incrementOffsets( iv, dv1 );
					}
					incrementOffsets( iv, dv2 );
				}
			}
		}
	}
}


// EXPORTS //

module.exports = blockedunary3d;
