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
var isReadOnly = require( './../../base/assert/is-read-only' );
var base = require( './../../base/fill' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Fills an input ndarray with a specified value.
*
* @param {ndarray} x - input ndarray
* @param {*} value - scalar value
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument cannot be safely cast to the input ndarray data type
* @throws {Error} cannot write to a read-only ndarray
* @returns {ndarray} input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'float64'
* });
*
* fill( x, 10.0 );
*
* console.log( getData( x ) );
* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
function fill( x, value ) {
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( isReadOnly( x ) ) {
		throw new Error( 'invalid argument. Cannot write to a read-only array.' );
	}
	base( x, value );
	return x;
}


// EXPORTS //

module.exports = fill;
