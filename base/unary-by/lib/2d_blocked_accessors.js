/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var loopOrder = require( './../../../base/unary-loop-interchange-order' );
var blockSize = require( './../../../base/unary-tiling-block-size' );


// MAIN //

/**
* Applies a unary function to each element retrieved from a two-dimensional input ndarray according to a callback function and assigns results to elements in an equivalently shaped output ndarray via loop blocking.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} y.accessors - data buffer accessors
* @param {Function} fcn - unary function to apply to callback return values
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
*
* @example
* var cidentityf = require( '@stdlib/complex/float32/base/identity' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* function scale( z ) {
*     return new Complex64( realf(z)*10.0, imagf(z)*10.0 );
* }
*
* // Create data buffers:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var ybuf = new Complex64Array( 4 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 2, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
* var sy = [ 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Define getters and setters:
* function getter( buf, idx ) {
*     return buf.get( idx );
* }
*
* function setter( buf, idx, value ) {
*     buf.set( value, idx );
* }
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'complex64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
* var y = {
*     'dtype': 'complex64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
*
* // Apply the unary function:
* blockedunary2d( x, y, scale, cidentityf );
*
* var v = y.data.get( 0 );
*
* var re = realf( v );
* // returns 10.0
*
* var im = imagf( v );
* // returns 20.0
*/
function blockedunary2d( x, y, fcn, clbk, thisArg ) {
	var bsize;
	var xbuf;
	var ybuf;
	var get;
	var set;
	var dx0;
	var dx1;
	var dy0;
	var dy1;
	var ox1;
	var oy1;
	var sh;
	var s0;
	var s1;
	var sx;
	var sy;
	var ox;
	var oy;
	var ix;
	var iy;
	var i0;
	var i1;
	var j0;
	var j1;
	var o;
	var v;
	var i;

	// Note on variable naming convention: s#, dx#, dy#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the loop interchange order:
	o = loopOrder( x.shape, x.strides, y.strides );
	sh = o.sh;
	sx = o.sx;
	sy = o.sy;

	// Determine the block size:
	bsize = blockSize( x.dtype, y.dtype );

	// Cache the indices of the first indexed elements in the respective ndarrays...
	ox = x.offset;
	oy = y.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;

	// Cache offset increments for the innermost loop...
	dx0 = sx[0];
	dy0 = sy[0];

	// Cache accessors:
	get = x.accessors[0];
	set = y.accessors[1];

	// Iterate over blocks...
	i = 0;
	for ( j1 = sh[1]; j1 > 0; ) {
		if ( j1 < bsize ) {
			s1 = j1;
			j1 = 0;
		} else {
			s1 = bsize;
			j1 -= bsize;
		}
		ox1 = ox + ( j1*sx[1] );
		oy1 = oy + ( j1*sy[1] );
		for ( j0 = sh[0]; j0 > 0; ) {
			if ( j0 < bsize ) {
				s0 = j0;
				j0 = 0;
			} else {
				s0 = bsize;
				j0 -= bsize;
			}
			// Compute index offsets for the first input and output ndarray elements in the current block...
			ix = ox1 + ( j0*sx[0] );
			iy = oy1 + ( j0*sy[0] );

			// Compute loop offset increments...
			dx1 = sx[1] - ( s0*sx[0] );
			dy1 = sy[1] - ( s0*sy[0] );

			// Iterate over the ndarray dimensions...
			for ( i1 = 0; i1 < s1; i1++ ) {
				for ( i0 = 0; i0 < s0; i0++ ) {
					v = clbk.call( thisArg, get( xbuf, ix ), i, [ ix, iy ], [ x, y ] );
					if ( v !== void 0 ) {
						set( ybuf, iy, fcn( v ) );
					}
					ix += dx0;
					iy += dy0;
					i += 1;
				}
				ix += dx1;
				iy += dy1;
			}
		}
	}
}


// EXPORTS //

module.exports = blockedunary2d;
