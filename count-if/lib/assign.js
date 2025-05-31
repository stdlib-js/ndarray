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
var ndims = require( './../../ndims' );
var base = require( './../../base/count-if' );
var objectAssign = require( '@stdlib/object/assign' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Counts the number of elements along one or more ndarray dimensions which pass a test implemented by a predicate function and assigns the results to a provided output ndarray.
*
* @param {ndarray} x - input ndarray
* @param {ndarray} y - output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* function predicate( value ) {
*    return value > 0.0;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
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
*     'dtype': 'int32'
* });
*
* // Perform operation:
* var out = assign( x, y, predicate );
* // returns <ndarray>
*
* var v = out.get();
* // returns 5
*/
function assign( x, y, options, predicate, thisArg ) {
	var nargs;
	var opts;
	var err;
	var flg;
	var ctx;
	var cb;
	var o;
	var N;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( !isndarrayLike( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray-like object. Value: `%s`.', y ) );
	}
	N = ndims( x );

	// Case: assign( x, y, predicate )
	if ( nargs < 4 ) {
		cb = options;
	}
	// Case: assign( x, y, options, predicate, thisArg )
	else if ( nargs > 4 ) {
		flg = true;
		o = options;
		cb = predicate;
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', cb ) );
		}
		ctx = thisArg;
	}
	// Case: assign( x, y, predicate, thisArg )
	else if ( isFunction( options ) ) {
		cb = options;
		ctx = predicate;
	}
	// Case: assign( x, y, options, predicate )
	else if ( isFunction( predicate ) ) {
		flg = true;
		o = options;
		cb = predicate;
	}
	// Case: assign( x, y, ???, ??? )
	else {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', predicate ) );
	}
	opts = objectAssign( {}, defaults );
	if ( flg ) {
		err = validate( opts, N, o );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	unaryReduceSubarrayBy( base, [ x, y ], opts.dims, cb, ctx ); // note: we assume that this lower-level function handles further validation of the output ndarray (e.g., expected shape, etc)
	return y;
}


// EXPORTS //

module.exports = assign;
