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

// MAIN //

/**
* Performs a reduction over elements in a one-dimensional input ndarray.
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
* var shape = [ 4 ];
*
* // Define the array strides:
* var sx = [ 1 ];
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
* var v = accumulate1d( x, new Complex64( 0.0, 0.0 ), add );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 16.0
*
* var im = imagf( v );
* // returns 20.0
*/
function accumulate1d( x, initial, clbk ) {
	var xbuf;
	var get;
	var dx0;
	var acc;
	var S0;
	var ix;
	var i0;

	// Note on variable naming convention: S#, dx#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables: dimensions and loop offset (pointer) increments...
	S0 = x.shape[ 0 ];
	dx0 = x.strides[ 0 ];

	// Set the pointer to the first indexed element:
	ix = x.offset;

	// Cache a reference to the input ndarray buffer:
	xbuf = x.data;

	// Cache a reference to the accessor:
	get = x.accessors[ 0 ];

	// Initialize the accumulator:
	acc = initial;

	// Iterate over the ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		acc = clbk( acc, get( xbuf, ix ) ); // eslint-disable-line node/callback-return
		ix += dx0;
	}
	return acc;
}


// EXPORTS //

module.exports = accumulate1d;
