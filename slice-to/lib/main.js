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

'use strict';

// MODULES //

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );
var isUndefined = require( '@stdlib/assert/is-undefined' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var getShape = require( './../../shape' );
var base = require( './../../base/slice-to' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Tests whether an ending index argument is invalid.
*
* @private
* @param {*} index - index argument
* @returns {boolean} boolean indicating if an argument is invalid
*
* @example
* var bool = isInvalidIndex( 4 );
* // returns false
*
* @example
* var bool = isInvalidIndex( {} );
* // returns true
*/
function isInvalidIndex( index ) {
	return !(
		isNumber( index ) ||
		isNull( index ) ||
		isUndefined( index )
	);
}


// MAIN //

/**
* Returns a read-only truncated view of an input ndarray.
*
* @param {ndarray} x - input array
* @param {...(null|integer|undefined)} stop - ending indices (exclusive)
* @param {Options} [options] - options
* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} must provide valid ending indices
* @throws {Error} insufficient arguments
* @throws {Error} too many arguments
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} number of ending indices must match the number of array dimensions
* @throws {RangeError} index exceeds array bounds
* @returns {ndarray} ndarray view
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var y = sliceTo( x, 2, null );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
function sliceTo( x, stop ) {
	var options;
	var nargs;
	var opts;
	var args;
	var sh;
	var i;

	opts = {
		'strict': true
	};
	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( isPlainObject( arguments[ nargs-1 ] ) ) {
		nargs -= 1;
		options = arguments[ nargs ];
		if ( hasOwnProp( options, 'strict' ) ) {
			if ( !isBoolean( options.strict ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'strict', options.strict ) );
			}
			opts.strict = options.strict;
		}
		sh = getShape( x );
		if ( nargs === 1 && sh.length > 0 ) {
			throw new RangeError( format( 'invalid argument. Number of indices does not match the number of array dimensions. Array shape: (%s). Number of indices: %u.', sh.join( ',' ), 0 ) );
		}
	}
	if ( isArrayLikeObject( stop ) ) {
		args = stop;
		if ( nargs > 2 ) {
			throw new Error( 'invalid invocation. Too many arguments.' );
		}
	} else {
		args = [];
		for ( i = 1; i < nargs; i++ ) {
			args.push( arguments[ i ] );
		}
	}
	for ( i = 0; i < args.length; i++ ) {
		if ( isInvalidIndex( args[ i ] ) ) {
			throw new TypeError( format( 'invalid argument. Each index argument must be either an integer, null, or undefined. Value: `%s`.', String( args[ i ] ) ) );
		}
	}
	return base( x, args, opts.strict, false );
}


// EXPORTS //

module.exports = sliceTo;
