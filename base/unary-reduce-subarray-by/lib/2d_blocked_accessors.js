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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var loopOrder = require( './../../../base/unary-loop-interchange-order' );
var blockSize = require( './../../../base/unary-tiling-block-size' );
var take = require( '@stdlib/array/base/take-indexed' );
var reverse = require( '@stdlib/array/base/reverse' );
var zeros = require( '@stdlib/array/base/zeros' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );
var wrap = require( './callback_wrapper.js' );


// MAIN //

/**
* Performs a reduction over an input ndarray according to a callback function and assigns results to a provided output ndarray via loop blocking.
*
* @private
* @param {Function} fcn - reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {NonNegativeIntegerArray} ibuf - workspace for storing iteration indices
* @param {NonNegativeIntegerArray} ldims - list of loop dimensions
* @param {NonNegativeIntegerArray} cdims - list of "core" dimensions
* @param {IntegerArray} strides - loop dimension strides for the input ndarray
* @param {Options} opts - reduction function options
* @param {boolean} hasOpts - boolean indicating whether to pass an options argument to a reduction function
* @param {Function} clbk - callback function
* @param {thisArg} thisArg - callback execution context
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var Float64Array = require( '@stdlib/array/float64' );
* var filled = require( '@stdlib/array/base/filled' );
* var zeros = require( '@stdlib/array/base/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var base = require( '@stdlib/ndarray/base/every-by' );
*
* function clbk( value ) {
*     return value > 0.0;
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var ybuf = toAccessorArray( filled( false, 3 ) );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 3, 1 ];
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
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': accessors( ybuf ).accessors
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
*     }
* ];
*
* // Create a workspace array for storing iteration indices:
* var ibuf = zeros( xsh.length );
*
* // Define the loop and core dimensions:
* var ldims = [ 0, 1 ];
* var cdims = [ 2, 3 ];
*
* // Resolve the loop dimension strides for the input array:
* var slx = [ 12, 4 ];
*
* // Perform a reduction:
* blockedunary2d( base, [ x, y ], views, ibuf, ldims, cdims, slx, null, false, clbk, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ true, false, true ] ]
*/
function blockedunary2d( fcn, arrays, views, ibuf, ldims, cdims, strides, opts, hasOpts, clbk, thisArg ) {
	var bsize;
	var ybuf;
	var idx;
	var set;
	var dv0;
	var dv1;
	var ov1;
	var sh;
	var s0;
	var s1;
	var sv;
	var ov;
	var iv;
	var i0;
	var i1;
	var j0;
	var j1;
	var N;
	var x;
	var y;
	var f;
	var o;
	var k;

	// Note on variable naming convention: S#, dv#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	N = arrays.length;
	x = arrays[ 0 ];
	y = arrays[ 1 ];

	// Resolve the loop interchange order:
	o = loopOrder( y.shape, strides, y.strides );
	sh = o.sh;
	sv = [ o.sx, o.sy ];
	idx = reverse( o.idx );
	for ( k = 2; k < N; k++ ) {
		sv.push( take( arrays[k].strides, o.idx ) );
	}
	// Determine the block size:
	bsize = blockSize( x.dtype, y.dtype );

	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	ov = offsets( arrays );

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Cache accessors:
	set = y.accessors[1];

	// Cache offset increments for the innermost loop...
	dv0 = [];
	for ( k = 0; k < N; k++ ) {
		dv0.push( sv[k][0] );
	}
	// Initialize loop variables...
	ov1 = zeros( N );
	dv1 = zeros( N );
	iv = zeros( N );

	// Iterate over blocks...
	for ( j1 = sh[1]; j1 > 0; ) {
		if ( j1 < bsize ) {
			s1 = j1;
			j1 = 0;
		} else {
			s1 = bsize;
			j1 -= bsize;
		}
		for ( k = 0; k < N; k++ ) {
			ov1[ k ] = ov[k] + ( j1*sv[k][1] );
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
			// Iterate over the non-reduced ndarray dimensions...
			for ( i1 = 0; i1 < s1; i1++ ) {
				for ( i0 = 0; i0 < s0; i0++ ) {
					setViewOffsets( views, iv );
					f = wrap( x.ref, ibuf, ldims, take( [ j1+i1, j0+i0 ], idx ), cdims, clbk, thisArg );
					set( ybuf, iv[1], ( hasOpts ) ? fcn( views, opts, f ) : fcn( views, f ) );
					incrementOffsets( iv, dv0 );
				}
				incrementOffsets( iv, dv1 );
			}
		}
	}
}


// EXPORTS //

module.exports = blockedunary2d;
