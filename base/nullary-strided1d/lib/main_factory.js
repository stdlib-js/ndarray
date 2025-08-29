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
var strategy = require( './strategy.js' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var blockednullary2d = require( './2d_blocked.js' );
var blockednullary3d = require( './3d_blocked.js' );
var blockednullary4d = require( './4d_blocked.js' );
var blockednullary5d = require( './5d_blocked.js' );
var blockednullary6d = require( './6d_blocked.js' );
var blockednullary7d = require( './7d_blocked.js' );
var blockednullary8d = require( './8d_blocked.js' );
var blockednullary9d = require( './9d_blocked.js' );
var blockednullary10d = require( './10d_blocked.js' );
var nullary0d = require( './0d.js' );
var nullary1d = require( './1d.js' );
var nullary2d = require( './2d.js' );
var nullary3d = require( './3d.js' );
var nullary4d = require( './4d.js' );
var nullary5d = require( './5d.js' );
var nullary6d = require( './6d.js' );
var nullary7d = require( './7d.js' );
var nullary8d = require( './8d.js' );
var nullary9d = require( './9d.js' );
var nullary10d = require( './10d.js' );
var nullarynd = require( './nd.js' );


// VARIABLES //

var NULLARY = [
	nullary0d,
	nullary1d,
	nullary2d,
	nullary3d,
	nullary4d,
	nullary5d,
	nullary6d,
	nullary7d,
	nullary8d,
	nullary9d,
	nullary10d
];
var BLOCKED_NULLARY = [
	blockednullary2d, // 0
	blockednullary3d,
	blockednullary4d,
	blockednullary5d,
	blockednullary6d,
	blockednullary7d,
	blockednullary8d,
	blockednullary9d,
	blockednullary10d // 8
];
var MAX_DIMS = NULLARY.length - 1;


// MAIN //

/**
* Returns a function for applying a one-dimensional strided array function to a list of specified dimensions in an ndarray.
*
* @private
* @param {Options} [options] - function options
* @param {boolean} [options.strictTraversalOrder=false] - boolean specifying whether to require that element traversal match the memory layout of the target ndarray
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function for applying a strided array function
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
* var gsorthp = require( '@stdlib/blas/ext/base/gsorthp' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     var o = arrays[ 1 ];
*     return gsorthp( numelDimension( x, 0 ), ndarraylike2scalar( o ), getData( x ), getStride( x, 0 ), getOffset( x ) );
* }
*
* // Create a data buffer:
* var xbuf = [ 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* // Define an array shape:
* var xsh = [ 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an ndarray-like object:
* var x = {
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an ndarray-like object for the sort order:
* var sortOrder = {
*     'dtype': 'generic',
*     'data': [ 1.0 ],
*     'shape': [ 1, 3 ],
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Apply strided function:
* var f = factory();
* f( wrapper, [ x, sortOrder ], [ 2, 3 ] );
*
* var arr = ndarray2array( x.data, x.shape, x.strides, x.offset, x.order );
* // returns [ [ [ [ 9.0, 10.0 ], [ 11.0, 12.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ], [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ]
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
* var gsorthp = require( '@stdlib/blas/ext/base/gsorthp' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     var o = arrays[ 1 ];
*     return gsorthp( numelDimension( x, 0 ), ndarraylike2scalar( o ), getData( x ), getStride( x, 0 ), getOffset( x ) );
* }
*
* // Create a data buffer:
* var xbuf = [ 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* // Define an array shape:
* var xsh = [ 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an ndarray-like object:
* var x = {
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an ndarray-like object for the sort order:
* var sortOrder = {
*     'dtype': 'generic',
*     'data': [ 1.0 ],
*     'shape': [],
*     'strides': [ 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Apply strided function:
* var f = factory();
* f( wrapper, [ x, sortOrder ], [ 0, 1, 2, 3 ] );
*
* var arr = ndarray2array( x.data, x.shape, x.strides, x.offset, x.order );
* // returns [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ], [ [ 9.0, 10.0 ], [ 11.0, 12.0 ] ] ] ]
*/
function factory( options ) {
	var OPTS;
	var err;

	OPTS = defaults();
	if ( arguments.length ) {
		err = validate( OPTS, options );
		if ( err ) {
			throw err;
		}
	}
	return nullaryStrided1d;

	/**
	* Applies a one-dimensional strided array function to a list of specified dimensions in an ndarray.
	*
	* @private
	* @param {Function} fcn - wrapper for a one-dimensional strided array function
	* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
	* @param {IntegerArray} dims - list of dimensions to which to apply a strided array function
	* @param {Options} [options] - function options
	* @throws {Error} arrays must have the expected number of dimensions
	* @throws {RangeError} dimension indices must not exceed target ndarray bounds
	* @throws {RangeError} number of dimension indices must not exceed the number of target ndarray dimensions
	* @throws {Error} must provide unique dimension indices
	* @throws {Error} arrays must have the same loop dimension sizes
	* @returns {void}
	*/
	function nullaryStrided1d( fcn, arrays, dims, options ) {
		var strategyX;
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
		var scx;
		var slx;
		var ord;
		var ns;
		var d;
		var s;
		var N;
		var M;
		var K;
		var x;
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
		// Cache a reference to the input array:
		x = arr[ 0 ];

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
		// Check whether we've been provided a valid number of dimensions...
		if ( M > ndims ) {
			throw new RangeError( format( 'invalid argument. Number of specified dimensions cannot exceed the number of dimensions in the input array. Number of dimensions: %d. Value: [%s].', ndims, join( dims, ',' ) ) );
		}
		// Verify that provided ancillary ndarrays have the expected number of dimensions...
		K = ndims - M;
		for ( i = 1; i < N; i++ ) {
			if ( arr[ i ].shape.length !== K ) {
				throw new Error( format( 'invalid argument. Array arguments after the first array must have the same number of loop dimensions. Input array shape: [%s]. Number of loop dimensions: %d. Array shape: [%s] (index: %d).', join( shx, ',' ), K, join( arr[ i ].shape, ',' ), i ) );
			}
		}
		// Resolve the loop dimensions and associated strides:
		ldims = indicesComplement( shx.length, d );
		tmp = takeIndexed2( shx, x.strides, ldims );
		shl = tmp[ 0 ];
		slx = tmp[ 1 ];

		// Resolve the core dimensions and associated strides:
		tmp = takeIndexed2( shx, x.strides, d );
		shc = tmp[ 0 ];
		scx = tmp[ 1 ];

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
			}
		];
		initializeViews( arr, views );

		// Determine the strategy for marshaling data to and from sub-array views of the input array before and after performing an operation:
		strategyX = strategy( views[ 0 ] );

		// Determine whether we can avoid iteration altogether...
		if ( K === 0 ) {
			return NULLARY[ K ]( fcn, arr, strategyX, opts );
		}
		// Determine whether we only have one loop dimension and can thus readily perform one-dimensional iteration...
		if ( K === 1 ) {
			return NULLARY[ K ]( fcn, arr, views, shl, slx, strategyX, opts );
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
			return NULLARY[ 1 ]( fcn, arr, views, [ shl[i] ], slx, strategyX, opts ); // eslint-disable-line max-len
		}
		iox = iterationOrder( slx ); // +/-1

		// Determine whether we can avoid blocked iteration...
		ord = strides2order( slx );
		if ( iox !== 0 && K <= MAX_DIMS ) {
			// So long as iteration for each respective array always moves in the same direction (i.e., no mixed sign strides) and the memory layouts are the same, we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			return NULLARY[ K ]( fcn, arr, views, shl, slx, ord === 1, strategyX, opts ); // eslint-disable-line max-len
		}
		// Check whether blocked iteration is prohibited due to a requirement that the order of element traversal match the memory layout of a provided ndarray...
		if ( OPTS.strictTraversalOrder && K <= MAX_DIMS ) {
			// We have two choices here: (1) we could copy to contiguous memory or (2) we can perform normal nested loop iteration, even though this is not cache-optimal based on the assumption that, while this may hurt performance, for many cases (i.e., smaller ndarrays), this should be fine and likely better than performing a complete copy...
			return NULLARY[ K ]( fcn, arr, views, shl, slx, ord === 1, strategyX, opts ); // eslint-disable-line max-len
		}
		// At this point, we're either dealing with non-contiguous n-dimensional arrays, high dimensional n-dimensional arrays, and/or arrays having differing memory layouts, so our only hope is that we can still perform blocked iteration...

		// Determine whether we can perform blocked iteration...
		if ( K <= MAX_DIMS ) {
			return BLOCKED_NULLARY[ K-2 ]( fcn, arr, views, shl, slx, strategyX, opts ); // eslint-disable-line max-len
		}
		// Perform linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
		nullarynd( fcn, arr, views, shl, slx, strategyX, opts );
	}
}


// EXPORTS //

module.exports = factory;
