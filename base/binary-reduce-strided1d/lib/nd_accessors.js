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

var numel = require( './../../../base/numel' );
var vind2bind = require( './../../../base/vind2bind' );
var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var zeros = require( '@stdlib/array/base/zeros' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Performs a reduction over two input ndarrays and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
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
* var xsh = [ 3, 2, 2 ];
* var ysh = [ 3, 2, 2 ];
* var zsh = [ 3 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
* var sy = [ 4, 2, 1 ];
* var sz = [ 1 ];
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
* binarynd( gdot, [ x, y, z ], views, strategy, strategy, {} );
*
* var arr = ndarray2array( z.data, z.shape, z.strides, z.offset, z.order );
* // returns [ 30.0, 174.0, 446.0 ]
*/
function binarynd( fcn, arrays, views, strategyX, strategyY, opts ) {
	var zbuf;
	var len;
	var arr;
	var set;
	var sh;
	var iv;
	var io;
	var N;
	var z;
	var v;
	var i;
	var j;

	N = arrays.length;

	// Resolve the output ndarray and associated shape:
	z = arrays[ 2 ];
	sh = z.shape;

	// Compute the total number of elements over which to iterate:
	len = numel( sh );

	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Cache a reference to the output ndarray buffer:
	zbuf = z.data;

	// Cache accessors:
	set = z.accessors[ 1 ];

	// Iterate based on the linear **view** index, regardless as to how the data is stored in memory...
	io = zeros( N );
	for ( i = 0; i < len; i++ ) {
		for ( j = 0; j < N; j++ ) {
			arr = arrays[ j ];
			io[ j ] = vind2bind( sh, arr.strides, iv[ j ], arr.order, i, MODE );
		}
		setViewOffsets( views, io );
		v[ 0 ] = strategyX( views[ 0 ] );
		v[ 1 ] = strategyY( views[ 1 ] );
		set( zbuf, io[2], fcn( v, opts ) );
	}
}


// EXPORTS //

module.exports = binarynd;
