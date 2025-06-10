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

var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );
var wrap = require( './callback_wrapper.js' );


// MAIN //

/**
* Performs a reduction over an input ndarray according to callback function and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Function} strategy - input ndarray reshape strategy
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {NonNegativeIntegerArray} ibuf - workspace for storing iteration indices
* @param {NonNegativeIntegerArray} ldims - list of loop dimensions
* @param {NonNegativeIntegerArray} cdims - list of "core" dimensions
* @param {IntegerArray} strides - loop dimension strides for the input ndarray
* @param {boolean} isRowMajor - boolean indicating whether the input ndarray is row-major
* @param {Options} opts - function options
* @param {boolean} hasOpts - boolean indicating whether to pass an options argument to a reduction function
* @param {Function} clbk - callback function
* @param {*} thisArg - callback exection context
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var zeros = require( '@stdlib/array/base/zeros' );
* var maxBy = require( '@stdlib/stats/base/ndarray/max-by' );
*
* function clbk( value ) {
*     return value * 2.0;
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var ybuf = toAccessorArray( new Float64Array( [ 0.0, 0.0, 0.0 ] ) );
*
* // Define the array shapes:
* var xsh = [ 1, 1, 3, 2, 2 ];
* var ysh = [ 1, 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 4, 2, 1 ];
* var sy = [ 3, 3, 1 ];
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
* // Create a workspace array for storing iteration indices:
* var ibuf = zeros( xsh.length );
*
* // Define the loop and core dimensions:
* var ldims = [ 0, 1, 2 ];
* var cdims = [ 3, 4 ];
*
* // Resolve the loop dimension strides for the input array:
* var slx = [ 12, 12, 4 ];
*
* // Perform a reduction:
* unary3d( maxBy, [ x, y ], strategy, views, ibuf, ldims, cdims, slx, true, {}, false, clbk, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ 8.0, 16.0, 24.0 ] ] ]
*/
function unary3d( fcn, arrays, strategy, views, ibuf, ldims, cdims, strides, isRowMajor, opts, hasOpts, clbk, thisArg ) {
	var ybuf;
	var set;
	var dv0;
	var dv1;
	var dv2;
	var sh;
	var S0;
	var S1;
	var S2;
	var sv;
	var iv;
	var i0;
	var i1;
	var i2;
	var x;
	var y;
	var v;
	var i;
	var f;

	// Note on variable naming convention: S#, dv#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Cache a reference to the input ndarray:
	x = arrays[ 0 ];

	// Resolve the output ndarray and associated shape:
	y = arrays[ 1 ];
	sh = y.shape;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	if ( isRowMajor ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 2 ];
		S1 = sh[ 1 ];
		S2 = sh[ 0 ];
		dv0 = [ strides[2] ];                     // offset increment for innermost loop
		dv1 = [ strides[1] - ( S0*strides[2] ) ];
		dv2 = [ strides[0] - ( S1*strides[1] ) ]; // offset increment for outermost loop
		for ( i = 1; i < arrays.length; i++ ) {
			sv = arrays[ i ].strides;
			dv0.push( sv[2] );
			dv1.push( sv[1] - ( S0*sv[2] ) );
			dv2.push( sv[0] - ( S1*sv[1] ) );
		}
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		dv0 = [ strides[0] ];                     // offset increment for innermost loop
		dv1 = [ strides[1] - ( S0*strides[0] ) ];
		dv2 = [ strides[2] - ( S1*strides[1] ) ]; // offset increment for outermost loop
		for ( i = 1; i < arrays.length; i++ ) {
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

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Cache accessors:
	set = y.accessors[ 1 ];

	// Iterate over the non-reduced ndarray dimensions...
	for ( i2 = 0; i2 < S2; i2++ ) {
		for ( i1 = 0; i1 < S1; i1++ ) {
			for ( i0 = 0; i0 < S0; i0++ ) {
				setViewOffsets( views, iv );
				v[ 0 ] = strategy( views[ 0 ] );
				f = wrap( x.ref, views[ 0 ], ibuf, ldims, [ i2, i1, i0 ], cdims, clbk, thisArg );
				set( ybuf, iv[1], ( hasOpts ) ? fcn( v, opts, f ) : fcn( v, f ) );
				incrementOffsets( iv, dv0 );
			}
			incrementOffsets( iv, dv1 );
		}
	}
}


// EXPORTS //

module.exports = unary3d;
