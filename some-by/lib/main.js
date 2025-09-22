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

var isFunction = require( '@stdlib/assert/is-function' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isIntegerDataType = require( './../../base/assert/is-integer-data-type' );
var unaryReduceSubarrayBy = require( './../../base/unary-reduce-subarray-by' );
var base = require( './../../base/some-by' );
var spreadDimensions = require( './../../base/spread-dimensions' );
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
var getDtype = require( './../../dtype' );
var getShape = require( './../../shape' ); // note: non-base accessor is intentional due to the input array originating in userland
var getOrder = require( './../../base/order' );
var getData = require( './../../base/data-buffer' );
var getStrides = require( './../../base/strides' );
var getOffset = require( './../../base/offset' );
var defaults = require( './../../defaults' );
var empty = require( './../../empty' );
var ndarrayCtor = require( './../../base/ctor' );
var maybeBroadcastArray = require( './../../base/maybe-broadcast-array' );
var broadcastScalar = require( './../../base/broadcast-scalar' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
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
* Tests whether at least `n` elements along one or more ndarray dimensions pass a test implemented by a predicate function.
*
* @param {ndarray} x - input ndarray
* @param {(ndarray|integer)} n - number of elements which must pass a test
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be an ndarray-like object or a scalar value
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {Error} dimension indices must be unique
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
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
* var out = someBy( x, 3, isEven );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*/
function someBy( x, n, options, predicate, thisArg ) {
	var nargs;
	var opts;
	var view;
	var ctx;
	var err;
	var idx;
	var shx;
	var shy;
	var ord;
	var flg;
	var cb;
	var N;
	var v;
	var y;
	var o;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	// Case: someBy( x, n, predicate )
	if ( nargs < 4 ) {
		if ( !isFunction( options ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', options ) );
		}
		cb = options;
	}
	// Case: someBy( x, n, options, predicate, thisArg )
	else if ( nargs > 4 ) {
		flg = true;
		o = options;
		cb = predicate;
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', cb ) );
		}
		ctx = thisArg;
	}
	// Case: someBy( x, n, predicate, thisArg )
	else if ( isFunction( options ) ) {
		cb = options;
		ctx = predicate;
	}
	// Case: someBy( x, n, options, predicate )
	else if ( isFunction( predicate ) ) {
		flg = true;
		o = options;
		cb = predicate;
	}
	// Case: someBy( x, n, ???, ??? )
	else {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', predicate ) );
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

	// Resolve input array meta data:
	ord = getOrder( x );

	if ( isndarrayLike( n ) ) {
		if ( !isIntegerDataType( getDtype( n ) ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must have an integer data type. Value: `%s`.', n ) );
		}
		try {
			v = maybeBroadcastArray( n, shy );
		} catch ( err ) { // eslint-disable-line no-unused-vars
			throw new Error( 'invalid argument. Second argument must be broadcast-compatible with the non-reduced dimensions of the input array.' );
		}
	} else {
		if ( !isInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer or an ndarray-like object. Value: `%s`.', n ) );
		}
		v = broadcastScalar( n, DEFAULT_DTYPE, shy, ord );
	}
	// Initialize an output array whose shape matches that of the non-reduced dimensions and which has the same memory layout as the input array:
	y = empty( shy, {
		'dtype': 'bool',
		'order': ord
	});

	// Reinterpret the output array as an "indexed" array to ensure faster element access:
	view = new ndarrayCtor( 'uint8', reinterpretBoolean( getData( y ), 0 ), shy, getStrides( y, false ), getOffset( y ), getOrder( y ) );

	// Perform the reduction:
	unaryReduceSubarrayBy( base, [ x, view, v ], opts.dims, cb, ctx );

	// Check whether we need to reinsert singleton dimensions which can be useful for broadcasting the returned output array to the shape of the original input array...
	if ( opts.keepdims ) {
		y = spreadDimensions( N, y, idx );
	}
	return y;
}


// EXPORTS //

module.exports = someBy;
