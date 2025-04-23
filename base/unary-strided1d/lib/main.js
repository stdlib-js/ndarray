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

var ndarray2object = require( './../../../base/ndarraylike2object' );
var normalizeIndices = require( './../../../base/to-unique-normalized-indices' );
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
var takeIndexed2 = require( '@stdlib/array/base/take-indexed2' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
var iterationOrder = require( './../../../base/iteration-order' );
var numel = require( './../../../base/numel' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var initializeViews = require( './initialize_array_views.js' );
var strategy = require( './strategy.js' );
var blockedunary2d = require( './2d_blocked.js' );
var blockedunary3d = require( './3d_blocked.js' );
var blockedunary4d = require( './4d_blocked.js' );
var blockedunary5d = require( './5d_blocked.js' );
var blockedunary6d = require( './6d_blocked.js' );
var blockedunary7d = require( './7d_blocked.js' );
var blockedunary8d = require( './8d_blocked.js' );
var blockedunary9d = require( './9d_blocked.js' );
var blockedunary10d = require( './10d_blocked.js' );
var unary0d = require( './0d.js' );
var unary1d = require( './1d.js' );
var unary2d = require( './2d.js' );
var unary3d = require( './3d.js' );
var unary4d = require( './4d.js' );
var unary5d = require( './5d.js' );
var unary6d = require( './6d.js' );
var unary7d = require( './7d.js' );
var unary8d = require( './8d.js' );
var unary9d = require( './9d.js' );
var unary10d = require( './10d.js' );
var unarynd = require( './nd.js' );


// VARIABLES //

var UNARY = [
	unary0d,
	unary1d,
	unary2d,
	unary3d,
	unary4d,
	unary5d,
	unary6d,
	unary7d,
	unary8d,
	unary9d,
	unary10d
];
var BLOCKED_UNARY = [
	blockedunary2d, // 0
	blockedunary3d,
	blockedunary4d,
	blockedunary5d,
	blockedunary6d,
	blockedunary7d,
	blockedunary8d,
	blockedunary9d,
	blockedunary10d // 8
];
var MAX_DIMS = UNARY.length - 1;


// MAIN //

/**
* Applies a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array function
* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
* @param {IntegerArray} dims - list of dimensions to which to apply a strided array function
* @param {Options} [options] - function options
* @throws {Error} arrays must have the expected number of dimensions
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide unique dimension indices
* @throws {Error} arrays must have the same loop dimension sizes
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
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 12, 4, 2, 1 ];
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
*     'shape': [ 1, 3 ],
*     'strides': [ 0, 0 ],
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
* // Apply strided function:
* unaryStrided1d( wrapper, [ x, y, initial ], [ 2, 3 ] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ 1.0, 3.0 ], [ 6.0, 10.0 ] ], [ [ 5.0, 11.0 ], [ 18.0, 26.0 ] ], [ [ 9.0, 19.0 ], [ 30.0, 42.0 ] ] ] ]
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
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 12, 4, 2, 1 ];
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
*     'shape': [],
*     'strides': [ 0 ],
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
* // Apply strided function:
* unaryStrided1d( wrapper, [ x, y, initial ], [ 0, 1, 2, 3 ] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ 1.0, 3.0 ], [ 6.0, 10.0 ] ], [ [ 15.0, 21.0 ], [ 28.0, 36.0 ] ], [ [ 45.0, 55.0 ], [ 66.0, 78.0 ] ] ] ]
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
* var xsh = [ 3, 2, 2 ];
* var ysh = [ 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
* var sy = [ 4, 2, 1 ];
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
*     'shape': [ 3, 2, 2 ],
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
* // Apply strided function:
* unaryStrided1d( wrapper, [ x, y, initial ], [] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ], [ [ 9.0, 10.0 ], [ 11.0, 12.0 ] ] ]
*/
function unaryStrided1d( fcn, arrays, dims, options ) { // eslint-disable-line max-statements
	var strategyX;
	var strategyY;
	var views;
	var ndims;
	var ldims;
	var opts;
	var arr;
	var tmp;
	var len;
	var shl;
	var shc;
	var shx;
	var iox;
	var ioy;
	var scx;
	var scy;
	var slx;
	var sly;
	var ns;
	var d;
	var s;
	var N;
	var M;
	var K;
	var x;
	var y;
	var i;
	var j;

	if ( arguments.length > 3 ) {
		opts = options;
	} else {
		opts = {};
	}
	// Standardize ndarray meta data...
	N = arrays.length;
	arr = [];
	for ( i = 0; i < N; i++ ) {
		arr.push( ndarray2object( arrays[ i ] ) );
	}
	// Cache references to the input and output arrays:
	x = arr[ 0 ];
	y = arr[ 1 ];

	// Resolve the number of input array dimensions:
	shx = x.shape;
	ndims = shx.length;

	// Verify that we've been provided a list of unique dimension indices...
	M = dims.length;
	d = normalizeIndices( dims, ndims );
	if ( d === null ) {
		throw new RangeError( format( 'invalid argument. Third argument contains an out-of-bounds dimension index. Value: [%s].', join( dims, ',' ) ) );
	}
	d.sort();
	if ( d.length !== M ) {
		throw new Error( format( 'invalid argument. Third argument must contain a list of unique dimension indices. Value: [%s].', join( dims, ',' ) ) );
	}
	// Check whether we've been provided a valid number of dimensions...
	if ( M > ndims ) {
		throw new RangeError( format( 'invalid argument. Number of specified dimensions cannot exceed the number of dimensions in the input array. Number of dimensions: %d. Value: [%s].', ndims, join( dims, ',' ) ) );
	}
	// Verify that provided ancillary ndarrays have the expected number of dimensions...
	K = ndims - M;
	for ( i = 2; i < N; i++ ) {
		if ( arr[ i ].shape.length !== K ) {
			throw new Error( format( 'invalid argument. Array arguments after the first two arrays must have the same number of loop dimensions. Input array shape: [%s]. Number of loop dimensions: %d. Array shape: [%s] (index: %d).', join( shx, ',' ), K, join( arr[ i ].shape, ',' ), i ) );
		}
	}
	// Verify that the input and output arrays have the same shape...
	if ( ndims !== y.shape.length ) {
		throw new Error( 'invalid arguments. Input and output arrays must have the same shape.' );
	}
	for ( i = 0; i < ndims; i++ ) {
		if ( shx[ i ] !== y.shape[ i ] ) {
			throw new Error( 'invalid arguments. Input and output arrays must have the same shape.' );
		}
	}
	// Resolve the loop dimensions and associated strides:
	ldims = indicesComplement( shx.length, d );
	tmp = takeIndexed2( shx, x.strides, ldims );
	shl = tmp[ 0 ];
	slx = tmp[ 1 ];

	sly = takeIndexed( y.strides, ldims );

	// Resolve the core dimensions and associated strides:
	tmp = takeIndexed2( shx, x.strides, d );
	shc = tmp[ 0 ];
	scx = tmp[ 1 ];

	scy = takeIndexed( y.strides, d );

	// Verify that provided ancillary arrays have the same loop dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < K; i++ ) {
		s = shl[ i ];
		for ( j = 2; j < N; j++ ) {
			if ( s !== arr[ j ].shape[ i ] ) {
				throw new Error( format( 'invalid argument. Loop dimensions must be consistent across all provided arrays. Input array shape: [%s]. Loop dimension indices: [%s]. Loop dimensions: [%s]. Array shape: [%s] (index: %d).', join( shx, ',' ), join( ldims, ',' ), join( shl, ',' ), join( arr[ j ].shape, ',' ), j ) );
			}
		}
		// Note that, if one of the dimensions is `0`, the length will be `0`...
		len *= s;

		// Check whether the current dimension is a singleton dimension...
		if ( s === 1 ) {
			ns += 1;
		}
	}
	// Check whether we were provided empty ndarrays...
	if ( len === 0 || ( shc.length && numel( shc ) === 0 ) ) {
		return;
	}
	// Initialize ndarray-like objects for representing sub-array views...
	views = [
		{
			'dtype': x.dtype,
			'data': x.data,
			'shape': shc,
			'strides': scx,
			'offset': x.offset,
			'order': x.order
		},
		{
			'dtype': y.dtype,
			'data': y.data,
			'shape': shc,
			'strides': scy,
			'offset': y.offset,
			'order': y.order
		}
	];
	initializeViews( arr, views );

	// Determine the strategy for marshaling data to and from sub-array views of the input and output arrays before and after performing an operation:
	strategyX = strategy( views[ 0 ] );
	strategyY = strategy( views[ 1 ] );

	// Determine whether we can avoid iteration altogether...
	if ( K === 0 ) {
		return UNARY[ K ]( fcn, arr, strategyX, strategyY, opts );
	}
	// Determine whether we only have one loop dimension and can thus readily perform one-dimensional iteration...
	if ( K === 1 ) {
		return UNARY[ K ]( fcn, arr, views, shl, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	// Determine whether the loop dimensions have only **one** non-singleton dimension (e.g., shape=[10,1,1,1]) so that we can treat loop iteration as being equivalent to one-dimensional iteration...
	if ( ns === K-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < K; i++ ) {
			if ( shl[ i ] !== 1 ) {
				break;
			}
		}
		for ( j = 0; j < N; j++ ) {
			arr[ j ].strides = [ arr[j].strides[i] ];
		}
		slx = [ slx[i] ];
		sly = [ sly[i] ];
		return UNARY[ 1 ]( fcn, arr, views, [ shl[i] ], slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	iox = iterationOrder( slx ); // +/-1
	ioy = iterationOrder( sly ); // +/-1

	// Determine whether we can avoid blocked iteration...
	if ( iox !== 0 && ioy !== 0 && iox === ioy && K <= MAX_DIMS ) {
		// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		return UNARY[ K ]( fcn, arr, views, shl, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( K <= MAX_DIMS ) {
		return BLOCKED_UNARY[ K-2 ]( fcn, arr, views, shl, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	unarynd( fcn, arr, views, shl, slx, sly, strategyX, strategyY, opts );
}


// EXPORTS //

module.exports = unaryStrided1d;
