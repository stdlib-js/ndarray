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

var isScalarMostlySafeCompatible = require( './../../base/assert/is-scalar-mostly-safe-compatible' ); // eslint-disable-line id-length
var isMostlySafeCast = require( './../../base/assert/is-mostly-safe-data-type-cast' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var unaryReduceSubarray = require( './../../base/unary-reduce-subarray' );
var ndims = require( './../../ndims' );
var base = require( './../../base/includes' );
var getShape = require( './../../shape' ); // note: non-base accessor is intentional due to the input arrays originating in userland
var getOrder = require( './../../base/order' );
var getDType = require( './../../base/dtype' );
var maybeBroadcastArray = require( './../../base/maybe-broadcast-array' );
var broadcastScalar = require( './../../base/broadcast-scalar' );
var objectAssign = require( '@stdlib/object/assign' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Tests whether an ndarray contains a specified value along one or more dimensions and assigns the results to a provided output ndarray.
*
* @param {ndarray} x - input ndarray
* @param {(ndarray|*)} searchElement - search element
* @param {ndarray} y - output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {Error} second argument must be broadcast-compatible with the non-reduced dimensions of the input ndarray
* @throws {TypeError} second argument must have a data type which can be safely cast to the data type of the input ndarray
* @throws {TypeError} third argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
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
* var out = assign( x, 6.0, y );
* // returns <ndarray>
*
* var v = out.get();
* // returns true
*/
function assign( x, searchElement, y, options ) {
	var opts;
	var err;
	var ord;
	var dt;
	var N;
	var v;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( !isndarrayLike( y ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an ndarray-like object. Value: `%s`.', y ) );
	}
	N = ndims( x );

	opts = objectAssign( {}, defaults );
	if ( arguments.length > 3 ) {
		err = validate( opts, N, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Resolve input array meta data:
	dt = getDType( x );
	ord = getOrder( x );

	// Determine how to broadcast the search element...
	if ( isndarrayLike( searchElement ) ) {
		if ( !isMostlySafeCast( getDType( searchElement ), dt ) ) {
			throw new TypeError( format( 'invalid argument. Second argument cannot be safely cast to the input array data type. Value: `%s`.', searchElement ) );
		}
		try {
			v = maybeBroadcastArray( searchElement, getShape( y ) );
		} catch ( err ) { // eslint-disable-line no-unused-vars
			throw new Error( 'invalid argument. Second argument must be broadcast-compatible with the non-reduced dimensions of the input array.' );
		}
	} else if ( isScalarMostlySafeCompatible( searchElement, dt ) ) {
		v = broadcastScalar( searchElement, dt, getShape( y ), ord );
	} else {
		throw new TypeError( format( 'invalid argument. Second argument cannot be safely cast to the input array data type. Value: `%s`.', searchElement ) );
	}
	// Perform the reduction:
	unaryReduceSubarray( base, [ x, y, v ], opts.dims ); // note: we assume that this lower-level function handles further validation of the output ndarray (e.g., expected shape, etc)
	return y;
}


// EXPORTS //

module.exports = assign;
