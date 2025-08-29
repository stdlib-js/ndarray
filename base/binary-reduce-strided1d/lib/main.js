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
var iterationOrder = require( './../../../base/iteration-order' );
var strides2order = require( './../../../base/strides2order' );
var anyIsEntryIn = require( '@stdlib/array/base/any-is-entry-in' );
var numel = require( './../../../base/numel' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var initializeViews = require( './initialize_array_views.js' );
var reshapeStrategy = require( './reshape_strategy.js' );
var blockedaccessorbinary2d = require( './2d_blocked_accessors.js' );
var blockedaccessorbinary3d = require( './3d_blocked_accessors.js' );
var blockedaccessorbinary4d = require( './4d_blocked_accessors.js' );
var blockedaccessorbinary5d = require( './5d_blocked_accessors.js' );
var blockedaccessorbinary6d = require( './6d_blocked_accessors.js' );
var blockedaccessorbinary7d = require( './7d_blocked_accessors.js' );
var blockedaccessorbinary8d = require( './8d_blocked_accessors.js' );
var blockedaccessorbinary9d = require( './9d_blocked_accessors.js' );
var blockedaccessorbinary10d = require( './10d_blocked_accessors.js' );
var blockedbinary2d = require( './2d_blocked.js' );
var blockedbinary3d = require( './3d_blocked.js' );
var blockedbinary4d = require( './4d_blocked.js' );
var blockedbinary5d = require( './5d_blocked.js' );
var blockedbinary6d = require( './6d_blocked.js' );
var blockedbinary7d = require( './7d_blocked.js' );
var blockedbinary8d = require( './8d_blocked.js' );
var blockedbinary9d = require( './9d_blocked.js' );
var blockedbinary10d = require( './10d_blocked.js' );
var accessorbinary0d = require( './0d_accessors.js' );
var accessorbinary1d = require( './1d_accessors.js' );
var accessorbinary2d = require( './2d_accessors.js' );
var accessorbinary3d = require( './3d_accessors.js' );
var accessorbinary4d = require( './4d_accessors.js' );
var accessorbinary5d = require( './5d_accessors.js' );
var accessorbinary6d = require( './6d_accessors.js' );
var accessorbinary7d = require( './7d_accessors.js' );
var accessorbinary8d = require( './8d_accessors.js' );
var accessorbinary9d = require( './9d_accessors.js' );
var accessorbinary10d = require( './10d_accessors.js' );
var accessorbinarynd = require( './nd_accessors.js' );
var binary0d = require( './0d.js' );
var binary1d = require( './1d.js' );
var binary2d = require( './2d.js' );
var binary3d = require( './3d.js' );
var binary4d = require( './4d.js' );
var binary5d = require( './5d.js' );
var binary6d = require( './6d.js' );
var binary7d = require( './7d.js' );
var binary8d = require( './8d.js' );
var binary9d = require( './9d.js' );
var binary10d = require( './10d.js' );
var binarynd = require( './nd.js' );


// VARIABLES //

var BINARY = [
	binary0d,
	binary1d,
	binary2d,
	binary3d,
	binary4d,
	binary5d,
	binary6d,
	binary7d,
	binary8d,
	binary9d,
	binary10d
];
var ACCESSOR_BINARY = [
	accessorbinary0d,
	accessorbinary1d,
	accessorbinary2d,
	accessorbinary3d,
	accessorbinary4d,
	accessorbinary5d,
	accessorbinary6d,
	accessorbinary7d,
	accessorbinary8d,
	accessorbinary9d,
	accessorbinary10d
];
var BLOCKED_BINARY = [
	blockedbinary2d, // 0
	blockedbinary3d,
	blockedbinary4d,
	blockedbinary5d,
	blockedbinary6d,
	blockedbinary7d,
	blockedbinary8d,
	blockedbinary9d,
	blockedbinary10d // 8
];
var BLOCKED_ACCESSOR_BINARY = [
	blockedaccessorbinary2d, // 0
	blockedaccessorbinary3d,
	blockedaccessorbinary4d,
	blockedaccessorbinary5d,
	blockedaccessorbinary6d,
	blockedaccessorbinary7d,
	blockedaccessorbinary8d,
	blockedaccessorbinary9d,
	blockedaccessorbinary10d // 8
];
var MAX_DIMS = BINARY.length - 1;


// FUNCTIONS //

/**
* Returns a boolean indicating if at least one ndarray data buffer implements the accessor protocol.
*
* @private
* @param {ndarrayLike} x - first ndarray
* @param {ndarrayLike} y - second ndarray
* @param {ndarrayLike} z - third ndarray
* @returns {boolean} boolean indicating whether an ndarray data buffer implements the accessor protocol
*/
function hasAccessors( x, y, z ) {
	return anyIsEntryIn( [ x, y, z ], 'accessorProtocol', true );
}


// MAIN //

/**
* Performs a reduction over a list of specified dimensions in two input ndarrays via a one-dimensional strided array binary reduction function and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
* @param {IntegerArray} dims - list of dimensions over which to perform a reduction
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
* var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var zbuf = new Float64Array( [ 0.0, 0.0, 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3, 2, 2 ];
* var zsh = [ 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 12, 4, 2, 1 ];
* var sz = [ 3, 1 ];
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
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var z = {
*     'dtype': 'float64',
*     'data': zbuf,
*     'shape': zsh,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* binaryReduceStrided1d( gdot, [ x, y, z ], [ 2, 3 ] );
*
* var arr = ndarray2array( z.data, z.shape, z.strides, z.offset, z.order );
* // returns [ [ 30.0, 174.0, 446.0 ] ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var zbuf = new Float64Array( [ 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3, 2, 2 ];
* var zsh = [];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 12, 4, 2, 1 ];
* var sz = [ 0 ];
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
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var z = {
*     'dtype': 'float64',
*     'data': zbuf,
*     'shape': zsh,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* binaryReduceStrided1d( gdot, [ x, y, z ], [ 0, 1, 2, 3 ] );
*
* var v = z.data;
* // returns <Float64Array>[ 650.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var zbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 3, 2, 2 ];
* var ysh = [ 3, 2, 2 ];
* var zsh = [ 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
* var sy = [ 4, 2, 1 ];
* var sz = [ 4, 2, 1 ];
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
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var z = {
*     'dtype': 'float64',
*     'data': zbuf,
*     'shape': zsh,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* binaryReduceStrided1d( gdot, [ x, y, z ], [] );
*
* var arr = ndarray2array( z.data, z.shape, z.strides, z.offset, z.order );
* // returns [ [ [ 1.0, 4.0 ], [ 9.0, 16.0 ] ], [ [ 25.0, 36.0 ], [ 49.0, 64.0 ] ], [ [ 81.0, 100.0 ], [ 121.0, 144.0 ] ] ]
*/
function binaryReduceStrided1d( fcn, arrays, dims, options ) { // eslint-disable-line max-statements
	var strategyX;
	var strategyY;
	var views;
	var ndims;
	var ldims;
	var opts;
	var ordx;
	var ordy;
	var ordz;
	var tmpx;
	var tmpy;
	var arr;
	var len;
	var shx;
	var shy;
	var shc;
	var shl;
	var iox;
	var ioy;
	var ioz;
	var scx;
	var scy;
	var slx;
	var sly;
	var sz;
	var ns;
	var d;
	var s;
	var N;
	var M;
	var K;
	var x;
	var y;
	var z;
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
	z = arr[ 2 ];

	// Resolve the number of input array dimensions:
	shx = x.shape;
	shy = y.shape;
	ndims = shx.length;

	// Verify that both input arrays have the same shape:
	if ( shx.length !== shy.length ) {
		throw new Error( format( 'invalid argument. Input arrays must have the same number of dimensions. First array dimensions: %d. Second array dimensions: %d.', shx.length, shy.length ) );
	}
	for ( i = 0; i < ndims; i++ ) {
		if ( shx[ i ] !== shy[ i ] ) {
			throw new Error( format( 'invalid argument. Input arrays must have the same shape. First array shape: [%s]. Second array shape: [%s].', join( shx, ',' ), join( shy, ',' ) ) );
		}
	}

	// Verify that we've been provided a list of unique dimension indices...
	M = dims.length;
	d = normalizeIndices( dims, ndims-1 );
	if ( d === null ) {
		throw new RangeError( format( 'invalid argument. Third argument contains an out-of-bounds dimension index. Value: [%s].', join( dims, ',' ) ) );
	}
	d.sort();
	if ( d.length !== M ) {
		throw new Error( format( 'invalid argument. Third argument must contain a list of unique dimension indices. Value: [%s].', join( dims, ',' ) ) );
	}
	// Check whether we've been provided a valid number of dimensions to reduce...
	if ( M > ndims ) {
		throw new RangeError( format( 'invalid argument. Number of specified dimensions cannot exceed the number of dimensions in the input array. Number of dimensions: %d. Value: [%s].', ndims, join( dims, ',' ) ) );
	}
	// Verify that provided ndarrays have the expected number of dimensions...
	K = ndims - M;
	if ( z.shape.length !== K ) {
		throw new Error( format( 'invalid argument. Output array must have the same number of non-reduced dimensions as input arrays. Input array shape: [%s]. Number of non-reduced dimensions: %d. Output array shape: [%s].', join( shx, ',' ), K, join( z.shape, ',' ) ) );
	}

	// Resolve the non-reduced ("loop") dimensions and associated strides:
	ldims = indicesComplement( shx.length, d );
	tmpx = takeIndexed2( shx, x.strides, ldims );
	tmpy = takeIndexed2( shy, y.strides, ldims );
	shl = tmpx[ 0 ]; // tmpx[ 0 ] == tmpy[ 0 ]
	slx = tmpx[ 1 ];
	sly = tmpy[ 1 ];

	// Resolve the reduced ("core") dimensions and associated strides:
	tmpx = takeIndexed2( shx, x.strides, d );
	tmpy = takeIndexed2( shy, y.strides, d );
	shc = tmpx[ 0 ]; // tmpx[ 0 ] == tmpy[ 0 ]
	scx = tmpx[ 1 ];
	scy = tmpy[ 1 ];

	// Verify that the provided arrays have the same loop dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < K; i++ ) {
		s = shl[ i ];
		for ( j = 2; j < N; j++ ) {
			if ( s !== arr[ j ].shape[ i ] ) {
				throw new Error( format( 'invalid argument. Non-reduced dimensions must be consistent across all provided arrays. Input array shape: [%s]. Non-reduced dimension indices: [%s]. Non-reduced dimensions: [%s]. Array shape: [%s] (index: %d).', join( shx, ',' ), join( ldims, ',' ), join( shl, ',' ), join( arr[ j ].shape, ',' ), j ) );
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

	// Determine the strategy for reshaping sub-array views of the input arrays prior to performing a reduction:
	strategyX = reshapeStrategy( views[ 0 ] );
	strategyY = reshapeStrategy( views[ 1 ] );

	// Determine whether we can avoid iteration altogether...
	if ( K === 0 ) {
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ K ]( fcn, arr, strategyX, strategyY, opts );
		}
		return BINARY[ K ]( fcn, arr, strategyX, strategyY, opts );
	}
	// Determine whether we only have one loop dimension and can thus readily perform one-dimensional iteration...
	if ( K === 1 ) {
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ K ]( fcn, arr, views, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
		}
		return BINARY[ K ]( fcn, arr, views, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	sz = z.strides;

	// Determine whether the loop dimensions have only **one** non-singleton dimension (e.g., shape=[10,1,1,1]) so that we can treat loop iteration as being equivalent to one-dimensional iteration...
	if ( ns === K-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < K; i++ ) {
			if ( shl[ i ] !== 1 ) {
				break;
			}
		}
		z.shape = [ shl[i] ];
		for ( j = 0; j < N; j++ ) {
			arr[ j ].strides = [ arr[j].strides[i] ];
		}
		slx = [ slx[i] ];
		sly = [ sly[i] ];
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ 1 ]( fcn, arr, views, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
		}
		return BINARY[ 1 ]( fcn, arr, views, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	iox = iterationOrder( slx ); // +/-1
	ioy = iterationOrder( sly ); // +/-1
	ioz = iterationOrder( sz ); // +/-1

	// Determine whether we can avoid blocked iteration...
	ordx = strides2order( slx );
	ordy = strides2order( sly );
	ordz = strides2order( sz );
	if ( iox !== 0 && ioy !== 0 && ioz !== 0 && ordx === ordz && ordy === ordz && K <= MAX_DIMS ) { // eslint-disable-line max-len
		// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides) and the memory layouts are the same, we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		if ( hasAccessors( x, y, z ) ) {
			return ACCESSOR_BINARY[ K ]( fcn, arr, views, slx, sly, ordx === 1, strategyX, strategyY, opts ); // eslint-disable-line max-len
		}
		return BINARY[ K ]( fcn, arr, views, slx, sly, ordx === 1, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( K <= MAX_DIMS ) {
		if ( hasAccessors( x, y, z ) ) {
			return BLOCKED_ACCESSOR_BINARY[ K-2 ]( fcn, arr, views, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
		}
		return BLOCKED_BINARY[ K-2 ]( fcn, arr, views, slx, sly, strategyX, strategyY, opts ); // eslint-disable-line max-len
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	if ( hasAccessors( x, y, z ) ) {
		return accessorbinarynd( fcn, arr, views, strategyX, strategyY, opts );
	}
	binarynd( fcn, arr, views, strategyX, strategyY, opts );
}


// EXPORTS //

module.exports = binaryReduceStrided1d;
