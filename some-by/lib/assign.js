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
var isIntegerDataType = require( './../../base/assert/is-integer-data-type' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var unaryReduceSubarrayBy = require( './../../base/unary-reduce-subarray-by' );
var ndims = require( './../../ndims' );
var base = require( './../../base/some-by' );
var getDtype = require( './../../dtype' );
var getShape = require( './../../shape' ); // note: non-base accessor is intentional due to the input arrays originating in userland
var getOrder = require( './../../base/order' );
var defaults = require( './../../defaults' );
var maybeBroadcastArray = require( './../../base/maybe-broadcast-array' );
var broadcastScalar = require( './../../base/broadcast-scalar' );
var objectAssign = require( '@stdlib/object/assign' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
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
* @param {(ndarray|integer)} n - number of elements which must pass the test
* @param {ndarray} y - output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {Error} second argument must be broadcast-compatible with the non-reduced dimensions of the input ndarray
* @throws {TypeError} third argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
* var empty = require( '@stdlib/ndarray/empty' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
*
* // Create an output ndarray:
* var y = empty( [], {
*     'dtype': 'bool'
* });
*
* // Perform reduction:
* var out = assign( x, 3, y, isEven );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*/
function assign( x, n, y, options, predicate, thisArg ) {
	var nargs;
	var opts;
	var err;
	var ord;
	var flg;
	var ctx;
	var cb;
	var N;
	var v;
	var o;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( !isndarrayLike( y ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an ndarray-like object. Value: `%s`.', y ) );
	}
	// Case: assign( x, n, y, predicate )
	if ( nargs < 5 ) {
		cb = options;
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', cb ) );
		}
	}
	// Case: assign( x, n, y, options, predicate, thisArg )
	else if ( nargs > 5 ) {
		flg = true;
		o = options;
		cb = predicate;
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Fifth argument must be a function. Value: `%s`.', cb ) );
		}
		ctx = thisArg;
	}
	// Case: assign( x, n, y, predicate, thisArg )
	else if ( isFunction( options ) ) {
		cb = options;
		ctx = predicate;
	}
	// Case: assign( x, n, y, options, predicate )
	else if ( isFunction( predicate ) ) {
		flg = true;
		o = options;
		cb = predicate;
	}
	// Case: assign( x, n, y, ???, ??? )
	else {
		throw new TypeError( format( 'invalid argument. Fifth argument must be a function. Value: `%s`.', predicate ) );
	}
	N = ndims( x );
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
	// Resolve input array meta data:
	ord = getOrder( x );

	if ( isndarrayLike( n ) ) {
		if ( isIntegerDataType( getDtype( n ) ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must have an integer data type. Value: `%s`.', n ) );
		}
		try {
			v = maybeBroadcastArray( n, getShape( y ) );
		} catch ( err ) { // eslint-disable-line no-unused-vars
			throw new Error( 'invalid argument. Second argument must be broadcast-compatible with the non-reduced dimensions of the input array.' );
		}
	} else {
		if ( !isInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer or an ndarray-like object. Value: `%s`.', n ) );
		}
		v = broadcastScalar( n, DEFAULT_DTYPE, getShape( y ), ord );
	}
	// Perform the reduction:
	unaryReduceSubarrayBy( base, [ x, y, v ], opts.dims, cb, ctx ); // note: we assume that this lower-level function handles further validation of the output ndarray (e.g., expected shape, etc)
	return y;
}


// EXPORTS //

module.exports = assign;
