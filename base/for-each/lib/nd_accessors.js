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
* Invokes a callback function once for each ndarray element.
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
* @param {Array<Function>} x.accessors - data buffer
* @param {Callback} fcn - callback function
* @param {*} thisArg - callback function execution context
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var log = require( '@stdlib/console/log' );
*
* function fcn( value ) {
*     log( '%s', value.toString() );
* }
*
* // Create a data buffer:
* var xbuf = new Complex64Array( 8 );
*
* // Define the shape of the array:
* var shape = [ 2, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
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
* // Create an ndarray-like object:
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
*
* // Apply the callback function:
* forEachnd( x, fcn, {} );
*/
function forEachnd( x, fcn, thisArg ) {
	var xbuf;
	var ordx;
	var len;
	var get;
	var idx;
	var sh;
	var sx;
	var ox;
	var ix;
	var i;

	sh = x.shape;

	// Compute the total number of elements over which to iterate:
	len = numel( sh );

	// Cache a reference to the output ndarray data buffer:
	xbuf = x.data;

	// Cache a reference to the stride array:
	sx = x.strides;

	// Cache the index of the first indexed element:
	ox = x.offset;

	// Cache the array order:
	ordx = x.order;

	// Cache accessor:
	get = x.accessors[ 0 ];

	// Iterate over each element based on the linear **view** index, regardless as to how the data is stored in memory...
	for ( i = 0; i < len; i++ ) {
		ix = vind2bind( sh, sx, ox, ordx, i, MODE );
		idx = ind2sub( sh, sx, 0, ordx, i, MODE ); // return subscripts from the perspective of the ndarray view
		fcn.call( thisArg, get( xbuf, ix ), idx, x.ref );
	}
}


// EXPORTS //

module.exports = forEachnd;
