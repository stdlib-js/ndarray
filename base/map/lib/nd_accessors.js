/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var ind2sub = require( './../../../base/ind2sub' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Applies a callback function to elements in an -dimensional input ndarray and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {ndarrayLike} x.ref - reference to the original ndarray-like object
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
* @param {Callback} fcn - callback function
* @param {*} thisArg - callback execution context
* @returns {void}
*
* @example
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
*     'ref': null,
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
* // Apply function:
* mapnd( x, y, scale, {} );
*
* var v = y.data.get( 0 );
*
* var re = realf( v );
* // returns 10.0
*
* var im = imagf( v );
* // returns 20.0
*/
function mapnd( x, y, fcn, thisArg ) {
	var xbuf;
	var ybuf;
	var ordx;
	var ordy;
	var len;
	var get;
	var set;
	var idx;
	var sh;
	var sx;
	var sy;
	var ox;
	var oy;
	var ix;
	var iy;
	var i;

	sh = x.shape;

	// Compute the total number of elements over which to iterate:
	len = numel( sh );

	// Cache references to the input and output ndarray data buffers:
	xbuf = x.data;
	ybuf = y.data;

	// Cache references to the respective stride arrays:
	sx = x.strides;
	sy = y.strides;

	// Cache the indices of the first indexed elements in the respective ndarrays:
	ox = x.offset;
	oy = y.offset;

	// Cache the respective array orders:
	ordx = x.order;
	ordy = y.order;

	// Cache accessors:
	get = x.accessors[ 0 ];
	set = y.accessors[ 1 ];

	// Iterate over each element based on the linear **view** index, regardless as to how the data is stored in memory...
	for ( i = 0; i < len; i++ ) {
		ix = vind2bind( sh, sx, ox, ordx, i, MODE );
		iy = vind2bind( sh, sy, oy, ordy, i, MODE );
		idx = ind2sub( sh, sx, 0, ordx, i, MODE ); // return subscripts from the perspective of the ndarray view
		set( ybuf, iy, fcn.call( thisArg, get( xbuf, ix ), idx, x.ref ) );
	}
}


// EXPORTS //

module.exports = mapnd;
