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

var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Applies a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {NonNegativeIntegerArray} shape - loop dimensions
* @param {IntegerArray} stridesX - loop dimension strides for the input ndarray
* @param {IntegerArray} stridesY - loop dimension strides for the output ndarray
* @param {boolean} isRowMajor - boolean indicating if provided arrays are in row-major order
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
* var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
* var gcusum = require( '@stdlib/blas/ext/base/gcusum' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     var y = arrays[ 1 ];
*     var s = arrays[ 2 ];
*     return gcusum( numelDimension( x, 0 ), ndarraylike2scalar( s ), getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) );
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
* unary3d( wrapper, [ x, y, initial ], views, [ 1, 1, 3 ], [ 12, 12, 4 ], [ 12, 12, 4 ], true, strategy, strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ [ 1.0, 3.0 ], [ 6.0, 10.0 ] ], [ [ 5.0, 11.0 ], [ 18.0, 26.0 ] ], [ [ 9.0, 19.0 ], [ 30.0, 42.0 ] ] ] ] ]
*/
function unary3d( fcn, arrays, views, shape, stridesX, stridesY, isRowMajor, strategyX, strategyY, opts ) { // eslint-disable-line max-len
	var dv0;
	var dv1;
	var dv2;
	var S0;
	var S1;
	var S2;
	var sv;
	var iv;
	var i0;
	var i1;
	var i2;
	var v;
	var i;

	// Note on variable naming convention: S#, dv#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	if ( isRowMajor ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = shape[ 2 ];
		S1 = shape[ 1 ];
		S2 = shape[ 0 ];
		dv0 = [                                   // offset increment for innermost loop
			stridesX[2],
			stridesY[2]
		];
		dv1 = [
			stridesX[1] - ( S0*stridesX[2] ),
			stridesY[1] - ( S0*stridesY[2] )
		];
		dv2 = [                                   // offset increment for outermost loop
			stridesX[0] - ( S1*stridesX[1] ),
			stridesY[0] - ( S1*stridesY[1] )
		];
		for ( i = 2; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[2] );
			dv1.push( sv[1] - ( S0*sv[2] ) );
			dv2.push( sv[0] - ( S1*sv[1] ) );
		}
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = shape[ 0 ];
		S1 = shape[ 1 ];
		S2 = shape[ 2 ];
		dv0 = [                                   // offset increment for innermost loop
			stridesX[0],
			stridesY[0]
		];
		dv1 = [
			stridesX[1] - ( S0*stridesX[0] ),
			stridesY[1] - ( S0*stridesY[0] )
		];
		dv2 = [                                   // offset increment for outermost loop
			stridesX[2] - ( S1*stridesX[1] ),
			stridesY[2] - ( S1*stridesY[1] )
		];
		for ( i = 2; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[0] );
			dv1.push( sv[1] - ( S0*sv[0] ) );
			dv2.push( sv[2] - ( S1*sv[1] ) );
		}
	}
	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Iterate over the loop dimensions...
	for ( i2 = 0; i2 < S2; i2++ ) {
		for ( i1 = 0; i1 < S1; i1++ ) {
			for ( i0 = 0; i0 < S0; i0++ ) {
				setViewOffsets( views, iv );
				v[ 0 ] = strategyX.input( views[ 0 ] );
				v[ 1 ] = strategyY.input( views[ 1 ] );
				fcn( v, opts );
				strategyY.output( views[ 1 ] );
				incrementOffsets( iv, dv0 );
			}
			incrementOffsets( iv, dv1 );
		}
		incrementOffsets( iv, dv2 );
	}
}


// EXPORTS //

module.exports = unary3d;
