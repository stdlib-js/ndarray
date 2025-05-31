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

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var unaryReduceSubarray = require( './../../base/unary-reduce-subarray' );
var base = require( './../../base/count-truthy' );
var spreadDimensions = require( './../../base/spread-dimensions' );
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
var getShape = require( './../../shape' ); // note: non-base accessor is intentional due to the input array originating in userland
var getOrder = require( './../../base/order' );
var empty = require( './../../empty' );
var defaults = require( './../../defaults' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var objectAssign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.integer_index' );


// MAIN //

/**
* Counts the number of truthy elements along one or more ndarray dimensions.
*
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform reduction:
* var out = countTruthy( x );
* // returns <ndarray>
*
* var v = out.get();
* // returns 5
*/
function countTruthy( x, options ) {
	var opts;
	var err;
	var idx;
	var shx;
	var shy;
	var N;
	var y;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	shx = getShape( x );
	N = shx.length;

	opts = objectAssign( {}, DEFAULTS );
	if ( arguments.length > 1 ) {
		err = validate( opts, N, options );
		if ( err ) {
			throw err;
		}
	}
	// When a list of dimensions is not provided, reduce the entire input array across all dimensions...
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Resolve the list of non-reduced dimensions:
	idx = indicesComplement( N, opts.dims );

	// Resolve the output array shape:
	shy = takeIndexed( shx, idx );

	// Initialize an output array whose shape matches that of the non-reduced dimensions and which has the same memory layout as the input array:
	y = empty( shy, {
		'dtype': DEFAULT_DTYPE,
		'order': getOrder( x )
	});

	// Perform the reduction:
	unaryReduceSubarray( base, [ x, y ], opts.dims );

	// Check whether we need to reinsert singleton dimensions which can be useful for broadcasting the returned output array to the shape of the original input array...
	if ( opts.keepdims ) {
		y = spreadDimensions( N, y, idx );
	}
	return y;
}


// EXPORTS //

module.exports = countTruthy;
