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

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var base = require( './../../base/for-each' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Invokes a callback function once for each ndarray element.
*
* @param {ndarray} x - input ndarray
* @param {Callback} fcn - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} callback argument must be a function
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
function forEach( x, fcn, thisArg ) {
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', fcn ) );
	}
	base( [ x ], fcn, thisArg );
}


// EXPORTS //

module.exports = forEach;
