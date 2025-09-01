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

/* eslint-disable max-len */

'use strict';

// MODULES //

var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Performs a reduction over a list of specified dimensions in two input ndarrays and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {IntegerArray} stridesX - loop dimension strides for the first input ndarray
* @param {IntegerArray} stridesY - loop dimension strides for the second input ndarray
* @param {boolean} isRowMajor - boolean indicating if provided arrays are in row-major order
* @param {Function} strategyX - first input ndarray reshape strategy
* @param {Function} strategyY - second input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
*
* // Create data buffers:
* var xbuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var ybuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var zbuf = toAccessorArray( new Float64Array( [ 0.0, 0.0, 0.0 ] ) );
*
* // Define the array shapes:
* var xsh = [ 1, 1, 1, 3, 2, 2 ];
* var ysh = [ 1, 1, 1, 3, 2, 2 ];
* var zsh = [ 1, 1, 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 12, 4, 2, 1 ];
* var sy = [ 12, 12, 12, 4, 2, 1 ];
* var sz = [ 3, 3, 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
*
* // Create input ndarray-like objects:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': accessors( ybuf ).accessors
* };
*
* // Create an output ndarray-like object:
* var z = {
*     'dtype': 'float64',
*     'data': zbuf,
*     'shape': zsh,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major',
*     'accessors': accessors( zbuf ).accessors
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
* binary4d( gdot, [ x, y, z ], views, [ 12, 12, 12, 4 ], [ 12, 12, 12, 4 ], true, strategy, strategy, {} );
*
* var arr = ndarray2array( z.data, z.shape, z.strides, z.offset, z.order );
* // returns [ [ [ [ 30.0, 174.0, 446.0 ] ] ] ]
*/
function binary4d( fcn, arrays, views, stridesX, stridesY, isRowMajor, strategyX, strategyY, opts ) {
	var zbuf;
	var set;
	var dv0;
	var dv1;
	var dv2;
	var dv3;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var sv;
	var iv;
	var i0;
	var i1;
	var i2;
	var i3;
	var z;
	var v;
	var i;

	// Note on variable naming convention: S#, dv#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the output ndarray and associated shape:
	z = arrays[ 2 ];
	sh = z.shape;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	if ( isRowMajor ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 3 ];
		S1 = sh[ 2 ];
		S2 = sh[ 1 ];
		S3 = sh[ 0 ];
		dv0 = [                                   // offset increment for innermost loop
			stridesX[3],
			stridesY[3]
		];
		dv1 = [
			stridesX[2] - ( S0*stridesX[3] ),
			stridesY[2] - ( S0*stridesY[3] )
		];
		dv2 = [
			stridesX[1] - ( S1*stridesX[2] ),
			stridesY[1] - ( S1*stridesY[2] )
		];
		dv3 = [                                   // offset increment for outermost loop
			stridesX[0] - ( S2*stridesX[1] ),
			stridesY[0] - ( S2*stridesY[1] )
		];
		for ( i = 2; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[3] );
			dv1.push( sv[2] - ( S0*sv[3] ) );
			dv2.push( sv[1] - ( S1*sv[2] ) );
			dv3.push( sv[0] - ( S2*sv[1] ) );
		}
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		dv0 = [                                   // offset increment for innermost loop
			stridesX[0],
			stridesY[0]
		];
		dv1 = [
			stridesX[1] - ( S0*stridesX[0] ),
			stridesY[1] - ( S0*stridesY[0] )
		];
		dv2 = [
			stridesX[2] - ( S1*stridesX[1] ),
			stridesY[2] - ( S1*stridesY[1] )
		];
		dv3 = [                                   // offset increment for outermost loop
			stridesX[3] - ( S2*stridesX[2] ),
			stridesY[3] - ( S2*stridesY[2] )
		];
		for ( i = 1; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[0] );
			dv1.push( sv[1] - ( S0*sv[0] ) );
			dv2.push( sv[2] - ( S1*sv[1] ) );
			dv3.push( sv[3] - ( S2*sv[2] ) );
		}
	}
	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Cache a reference to the output ndarray buffer:
	zbuf = z.data;

	// Cache accessors:
	set = z.accessors[ 1 ];

	// Iterate over the non-reduced ndarray dimensions...
	for ( i3 = 0; i3 < S3; i3++ ) {
		for ( i2 = 0; i2 < S2; i2++ ) {
			for ( i1 = 0; i1 < S1; i1++ ) {
				for ( i0 = 0; i0 < S0; i0++ ) {
					setViewOffsets( views, iv );
					v[ 0 ] = strategyX( views[ 0 ] );
					v[ 1 ] = strategyY( views[ 1 ] );
					set( zbuf, iv[ 2 ], fcn( v, opts ) );
					incrementOffsets( iv, dv0 );
				}
				incrementOffsets( iv, dv1 );
			}
			incrementOffsets( iv, dv2 );
		}
		incrementOffsets( iv, dv3 );
	}
}


// EXPORTS //

module.exports = binary4d;
