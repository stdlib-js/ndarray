/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var strides2order = require( './../../../base/strides2order' );


// MAIN //

/**
* Applies a nullary callback and assigns results to elements in an output ndarray.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @param {Callback} fcn - nullary callback
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* function fcn() {
*     return new Complex64( 10.0, -10.0 );
* }
*
* // Create a data buffer:
* var xbuf = new Complex64Array( 8 );
*
* // Define the shape of the output array:
* var shape = [ 1, 1, 1, 1, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 4, 4, 2, 1 ];
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
* // Create the output ndarray-like object:
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
* // Apply the nullary function:
* nullary6d( x, fcn );
*
* var v = x.data.get( 0 );
*
* var re = realf( v );
* // returns 10.0
*
* var im = imagf( v );
* // returns -10.0
*/
function nullary6d( x, fcn ) {
	var xbuf;
	var set;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var dx5;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var S5;
	var sx;
	var ix;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;

	// Note on variable naming convention: S#, dx#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = x.shape;
	sx = x.strides;
	if ( strides2order( sx ) === 1 ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 5 ];
		S1 = sh[ 4 ];
		S2 = sh[ 3 ];
		S3 = sh[ 2 ];
		S4 = sh[ 1 ];
		S5 = sh[ 0 ];
		dx0 = sx[ 5 ];                // offset increment for innermost loop
		dx1 = sx[ 4 ] - ( S0*sx[5] );
		dx2 = sx[ 3 ] - ( S1*sx[4] );
		dx3 = sx[ 2 ] - ( S2*sx[3] );
		dx4 = sx[ 1 ] - ( S3*sx[2] );
		dx5 = sx[ 0 ] - ( S4*sx[1] ); // offset increment for outermost loop
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		S4 = sh[ 4 ];
		S5 = sh[ 5 ];
		dx0 = sx[ 0 ];                // offset increment for innermost loop
		dx1 = sx[ 1 ] - ( S0*sx[0] );
		dx2 = sx[ 2 ] - ( S1*sx[1] );
		dx3 = sx[ 3 ] - ( S2*sx[2] );
		dx4 = sx[ 4 ] - ( S3*sx[3] );
		dx5 = sx[ 5 ] - ( S4*sx[4] ); // offset increment for outermost loop
	}
	// Set a pointer to the first indexed element:
	ix = x.offset;

	// Cache a reference to the output ndarray buffer:
	xbuf = x.data;

	// Cache accessor:
	set = x.accessors[ 1 ];

	// Iterate over the ndarray dimensions...
	for ( i5 = 0; i5 < S5; i5++ ) {
		for ( i4 = 0; i4 < S4; i4++ ) {
			for ( i3 = 0; i3 < S3; i3++ ) {
				for ( i2 = 0; i2 < S2; i2++ ) {
					for ( i1 = 0; i1 < S1; i1++ ) {
						for ( i0 = 0; i0 < S0; i0++ ) {
							set( xbuf, ix, fcn() );
							ix += dx0;
						}
						ix += dx1;
					}
					ix += dx2;
				}
				ix += dx3;
			}
			ix += dx4;
		}
		ix += dx5;
	}
}


// EXPORTS //

module.exports = nullary6d;
