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
var isFunction = require( '@stdlib/assert/is-function' );
var unaryReduceSubarrayBy = require( './../../base/unary-reduce-subarray-by' );
var base = require( './../../base/count-if' );
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
* Counts the number of elements along one or more ndarray dimensions which pass a test implemented by a predicate function.
*
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function predicate( value ) {
*    return value > 0.0;
* }
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
* var out = countIf( x, predicate );
* // returns <ndarray>
*
* var v = out.get();
* // returns 5
*/
function countIf( x, options, predicate, thisArg ) {
	var nargs;
	var opts;
	var err;
	var idx;
	var shx;
	var shy;
	var ctx;
	var flg;
	var cb;
	var o;
	var N;
	var y;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	// Case: countIf( x, predicate )
	if ( nargs < 3 ) {
		cb = options;
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', cb ) );
		}
	}
	// Case: countIf( x, options, predicate, thisArg )
	else if ( nargs > 3 ) {
		flg = true;
		o = options;
		cb = predicate;
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', cb ) );
		}
		ctx = thisArg;
	}
	// Case: countIf( x, predicate, thisArg )
	else if ( isFunction( options ) ) {
		cb = options;
		ctx = predicate;
	}
	// Case: countIf( x, options, predicate )
	else if ( isFunction( predicate ) ) {
		flg = true;
		o = options;
		cb = predicate;
	}
	// Case: countIf( x, ???, ??? )
	else {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', predicate ) );
	}
	shx = getShape( x );
	N = shx.length;

	opts = objectAssign( {}, DEFAULTS );
	if ( flg ) {
		err = validate( opts, N, o );
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
	unaryReduceSubarrayBy( base, [ x, y ], opts.dims, cb, ctx );

	// Check whether we need to reinsert singleton dimensions which can be useful for broadcasting the returned output array to the shape of the original input array...
	if ( opts.keepdims ) {
		y = spreadDimensions( N, y, idx );
	}
	return y;
}


// EXPORTS //

module.exports = countIf;
