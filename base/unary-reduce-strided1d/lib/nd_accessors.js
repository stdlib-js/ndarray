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
* Performs a reduction over an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {IntegerArray} strides - loop dimension strides for the input ndarray
* @param {Function} strategy - input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var gsum = require( '@stdlib/blas/ext/base/gsum' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     return gsum( numelDimension( x, 0 ), getData( x ), getStride( x, 0 ), getOffset( x ) );
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var ybuf = toAccessorArray( new Float64Array( [ 0.0, 0.0, 0.0 ] ) );
*
* // Define the array shapes:
* var xsh = [ 3, 2, 2 ];
* var ysh = [ 3 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
* var sy = [ 1 ];
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
*     'dtype': 'float64',
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
* unarynd( wrapper, [ x, y ], views, [ 4 ], strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ 10.0, 26.0, 42.0 ]
*/
function unarynd( fcn, arrays, views, strides, strategy, opts ) {
	var ybuf;
	var len;
	var arr;
	var set;
	var sh;
	var iv;
	var io;
	var N;
	var y;
	var v;
	var i;
	var j;

	N = arrays.length;

	// Resolve the output ndarray and associated shape:
	y = arrays[ 1 ];
	sh = y.shape;

	// Compute the total number of elements over which to iterate:
	len = numel( sh );

	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Cache accessors:
	set = y.accessors[ 1 ];

	// Iterate based on the linear **view** index, regardless as to how the data is stored in memory...
	io = zeros( N );
	for ( i = 0; i < len; i++ ) {
		for ( j = 0; j < N; j++ ) {
			arr = arrays[ j ];
			io[ j ] = vind2bind( sh, arr.strides, iv[ j ], arr.order, i, MODE );
		}
		setViewOffsets( views, io );
		v[ 0 ] = strategy( views[ 0 ] );
		set( ybuf, io[1], fcn( v, opts ) );
	}
}


// EXPORTS //

module.exports = unarynd;
