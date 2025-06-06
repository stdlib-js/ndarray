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

/* eslint-disable max-depth */

'use strict';

// MODULES //

var loopOrder = require( './../../../base/nullary-loop-interchange-order' );
var blockSize = require( './../../../base/nullary-tiling-block-size' );


// MAIN //

/**
* Performs a reduction over elements in a three-dimensional input ndarray via loop blocking.
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
* @param {*} initial - initial value
* @param {Callback} clbk - callback function
* @returns {*} result
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* function add( acc, z ) {
*     return new Complex64( realf(acc)+realf(z), imagf(acc)+imagf(z) );
* }
*
* // Create a data buffer:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 1, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
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
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'complex64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
*
* // Compute the sum:
* var v = blockedaccumulate3d( x, new Complex64( 0.0, 0.0 ), add );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 16.0
*
* var im = imagf( v );
* // returns 20.0
*/
function blockedaccumulate3d( x, initial, clbk ) {
	var bsize;
	var xbuf;
	var get;
	var dx0;
	var dx1;
	var dx2;
	var ox1;
	var ox2;
	var acc;
	var sh;
	var s0;
	var s1;
	var s2;
	var sx;
	var ox;
	var ix;
	var i0;
	var i1;
	var i2;
	var j0;
	var j1;
	var j2;
	var o;

	// Note on variable naming convention: s#, dx#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the loop interchange order:
	o = loopOrder( x.shape, x.strides );
	sh = o.sh;
	sx = o.sx;

	// Determine the block size:
	bsize = blockSize( x.dtype );

	// Cache the index of the first indexed element:
	ox = x.offset;

	// Cache a reference to the input ndarray buffer:
	xbuf = x.data;

	// Cache the offset increment for the innermost loop:
	dx0 = sx[0];

	// Cache the accessor:
	get = x.accessors[0];

	// Initialize the accumulator:
	acc = initial;

	// Iterate over blocks...
	for ( j2 = sh[2]; j2 > 0; ) {
		if ( j2 < bsize ) {
			s2 = j2;
			j2 = 0;
		} else {
			s2 = bsize;
			j2 -= bsize;
		}
		ox2 = ox + ( j2*sx[2] );
		for ( j1 = sh[1]; j1 > 0; ) {
			if ( j1 < bsize ) {
				s1 = j1;
				j1 = 0;
			} else {
				s1 = bsize;
				j1 -= bsize;
			}
			dx2 = sx[2] - ( s1*sx[1] );
			ox1 = ox2 + ( j1*sx[1] );
			for ( j0 = sh[0]; j0 > 0; ) {
				if ( j0 < bsize ) {
					s0 = j0;
					j0 = 0;
				} else {
					s0 = bsize;
					j0 -= bsize;
				}
				// Compute the index offset for the first input ndarray element in the current block:
				ix = ox1 + ( j0*sx[0] );

				// Compute the loop offset increment:
				dx1 = sx[1] - ( s0*sx[0] );

				// Iterate over the ndarray dimensions...
				for ( i2 = 0; i2 < s2; i2++ ) {
					for ( i1 = 0; i1 < s1; i1++ ) {
						for ( i0 = 0; i0 < s0; i0++ ) {
							acc = clbk( acc, get( xbuf, ix ) ); // eslint-disable-line node/callback-return
							ix += dx0;
						}
						ix += dx1;
					}
					ix += dx2;
				}
			}
		}
	}
	return acc;
}


// EXPORTS //

module.exports = blockedaccumulate3d;
