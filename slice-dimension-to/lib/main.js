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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var base = require( './../../base/slice-dimension-to' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a read-only truncated view of an input ndarray along a specified dimension.
*
* @param {ndarray} x - input array
* @param {integer} dim - index of dimension to slice
* @param {integer} stop - ending index (exclusive)
* @param {Options} [options] - options
* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {TypeError} second argument must be an integer
* @throws {TypeError} third argument must be an integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} dimension index exceeds the number of dimensions
* @throws {RangeError} slice exceeds array bounds
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
* var y = sliceDimensionTo( x, 0, 2 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
function sliceDimensionTo( x, dim, stop ) {
	var options;
	var opts;

	opts = {
		'strict': true
	};
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isInteger( dim ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', dim ) );
	}
	if ( !isInteger( stop ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an integer. Value: `%s`.', stop ) );
	}
	if ( arguments.length > 3 ) {
		options = arguments[ 3 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'strict' ) ) {
			if ( !isBoolean( options.strict ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'strict', options.strict ) );
			}
			opts.strict = options.strict;
		}
	}
	return base( x, dim, stop, opts.strict, false );
}


// EXPORTS //

module.exports = sliceDimensionTo;
