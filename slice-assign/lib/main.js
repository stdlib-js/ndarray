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
var isMultiSlice = require( '@stdlib/assert/is-multi-slice' );
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isReadOnly = require( './../../base/assert/is-read-only' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var MultiSlice = require( '@stdlib/slice/multi' );
var args2multislice = require( '@stdlib/slice/base/args2multislice' );
var base = require( './../../base/slice-assign' );
var getShape = require( './../../shape' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* @param {ndarray} x - input array
* @param {ndarray} y - output array
* @param {...*} s - slice arguments
* @param {Options} [options] - options
* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} second argument must be an ndarray
* @throws {TypeError} must provide valid slice arguments
* @throws {Error} insufficient arguments
* @throws {Error} too many arguments
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} number of slice dimensions must match the number of output array dimensions
* @throws {RangeError} slice exceeds array bounds
* @throws {Error} input array must be broadcast compatible with an output array view
* @throws {TypeError} input array cannot be safely cast to the output array data type
* @throws {Error} cannot write to a read-only ndarray
* @returns {ndarray} output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
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
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1, s2 );
* // returns <MultiSlice>
*
* // Perform assignment:
* var out = sliceAssign( x, y, s );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/
function sliceAssign( x, y, s ) {
	var options;
	var nargs;
	var opts;
	var args;
	var sh;
	var S;
	var i;

	opts = {
		'strict': true
	};
	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isndarrayLike( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray. Value: `%s`.', y ) );
	}
	if ( isReadOnly( y ) ) {
		throw new Error( 'invalid argument. Cannot write to a read-only array.' );
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
		sh = getShape( y );
		if ( nargs === 2 && sh.length > 0 ) {
			throw new RangeError( format( 'invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.', sh.join( ',' ), 0 ) );
		}
	}
	if ( isMultiSlice( s ) ) {
		S = s;
		if ( nargs > 3 ) {
			throw new Error( 'invalid invocation. Too many arguments.' );
		}
	} else {
		if ( isArrayLikeObject( s ) ) {
			args = s;
			if ( nargs > 3 ) {
				throw new Error( 'invalid invocation. Too many arguments.' );
			}
		} else {
			args = [];
			for ( i = 2; i < nargs; i++ ) {
				args.push( arguments[ i ] );
			}
		}
		try {
			S = args2multislice( args );
		} catch ( err ) { // eslint-disable-line no-unused-vars
			// Search for the first offending value...
			for ( i = 0; i < args.length; i++ ) {
				try {
					new MultiSlice( args[ i ] ); // eslint-disable-line no-new
				} catch ( err ) { // eslint-disable-line no-unused-vars
					throw new TypeError( format( 'invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.', String( args[ i ] ) ) );
				}
			}
		}
	}
	return base( x, y, S, opts.strict );
}


// EXPORTS //

module.exports = sliceAssign;
