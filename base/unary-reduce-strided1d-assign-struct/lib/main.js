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
var numel = require( './../../../base/numel' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var initializeViews = require( './initialize_array_views.js' );
var reshapeStrategy = require( './reshape_strategy.js' );
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
* Performs a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function which accepts an output `struct` object and assigns results to a provided output ndarray.
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
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [ 2, 3 ] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ <Float64Results>, <Float64Results>, <Float64Results> ] ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
*
* var ResultsArray = structFactory( Float64Results );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new ResultsArray( 1 );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 0 ];
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
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [ 0, 1, 2, 3 ] );
*
* var v = y.data.get( 0 );
* // returns <Float64Results>
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
* var ybuf = new ResultsArray( 12 );
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
*     'strides': [ 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ <Float64Results>, <Float64Results> ], [ <Float64Results>, <Float64Results> ] ], [ [ <Float64Results>, <Float64Results> ], [ <Float64Results>, <Float64Results> ] ], [ [ <Float64Results>, <Float64Results> ], [ <Float64Results>, <Float64Results> ] ] ]
*/
function unaryReduceStrided1d( fcn, arrays, dims, options ) {
	var strategy;
	var views;
	var ndims;
	var ldims;
	var opts;
	var arr;
	var tmp;
	var len;
	var shx;
	var shc;
	var shl;
	var iox;
	var ioy;
	var ord;
	var sc;
	var sl;
	var sy;
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
	for ( i = 1; i < N; i++ ) {
		if ( arr[ i ].shape.length !== K ) {
			throw new Error( format( 'invalid argument. Arrays which are not being reduced must have the same number of non-reduced dimensions. Input array shape: [%s]. Number of non-reduced dimensions: %d. Array shape: [%s] (index: %d).', join( shx, ',' ), K, join( arr[ i ].shape, ',' ), i ) );
		}
	}
	// Resolve the non-reduced ("loop") dimensions and associated strides:
	ldims = indicesComplement( shx.length, d );
	tmp = takeIndexed2( shx, x.strides, ldims );
	shl = tmp[ 0 ];
	sl = tmp[ 1 ];

	// Resolve the reduced ("core") dimensions and associated strides:
	tmp = takeIndexed2( shx, x.strides, d );
	shc = tmp[ 0 ];
	sc = tmp[ 1 ];

	// Verify that the provided arrays have the same loop dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < K; i++ ) {
		s = shl[ i ];
		for ( j = 1; j < N; j++ ) {
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
			'strides': sc,
			'offset': x.offset,
			'order': x.order
		}
	];
	initializeViews( arr, views );

	// Determine the strategy for reshaping sub-array views of the input array prior to performing a reduction:
	strategy = reshapeStrategy( views[ 0 ] );

	// Determine whether we can avoid iteration altogether...
	if ( K === 0 ) {
		return UNARY[ K ]( fcn, arr, strategy, opts );
	}
	// Determine whether we only have one loop dimension and can thus readily perform one-dimensional iteration...
	if ( K === 1 ) {
		return UNARY[ K ]( fcn, arr, views, sl, strategy, opts );
	}
	sy = y.strides;

	// Determine whether the loop dimensions have only **one** non-singleton dimension (e.g., shape=[10,1,1,1]) so that we can treat loop iteration as being equivalent to one-dimensional iteration...
	if ( ns === K-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < K; i++ ) {
			if ( shl[ i ] !== 1 ) {
				break;
			}
		}
		y.shape = [ shl[i] ];
		for ( j = 0; j < N; j++ ) {
			arr[ j ].strides = [ arr[j].strides[i] ];
		}
		sl = [ sl[i] ];
		return UNARY[ 1 ]( fcn, arr, views, sl, strategy, opts );
	}
	iox = iterationOrder( sl ); // +/-1
	ioy = iterationOrder( sy ); // +/-1

	// Determine whether we can avoid blocked iteration...
	ord = strides2order( sl );
	if ( iox !== 0 && ioy !== 0 && ord === strides2order( sy ) && K <= MAX_DIMS ) { // eslint-disable-line max-len
		// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides) and the memory layouts are the same, we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
		return UNARY[ K ]( fcn, arr, views, sl, ord === 1, strategy, opts );
	}
	// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( K <= MAX_DIMS ) {
		return BLOCKED_UNARY[ K-2 ]( fcn, arr, views, sl, strategy, opts );
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	unarynd( fcn, arr, views, sl, strategy, opts );
}


// EXPORTS //

module.exports = unaryReduceStrided1d;
