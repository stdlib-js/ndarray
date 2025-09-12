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
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var resolve = require( './../../../base/dtype-resolve-enum' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var getData = require( './../../../base/data-buffer' );
var getDType = require( './../../../base/dtype' );
var serialize = require( './../../../base/serialize-meta-data' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var COMPLEX64 = resolve( 'complex64' );
var COMPLEX128 = resolve( 'complex128' );
var BOOLEAN = resolve( 'bool' );


// MAIN //

/**
* Returns a function which dispatches to a native add-on applying a unary function to an input ndarray.
*
* ## Notes
*
* -   The returned function has the following signature:
*
*     ```text
*     f( x, y )
*     ```
*
*     where
*
*     -   **x**: input ndarray.
*     -   **y**: output ndarray.
*
* -   The add-on function should have the following signature:
*
*     ```text
*     f( xbuf, metaX, ybuf, metaY )
*     ```
*
*     where
*
*     -   **xbuf**: input ndarray data buffer.
*     -   **metaX**: serialized input ndarray meta data.
*     -   **ybuf**: output array data buffer.
*     -   **metaY**: serialized output ndarray meta data.
*
* -   The fallback function should have the following signature:
*
*     ```text
*     f( x, y )
*     ```
*
*     where
*
*     -   **x**: input ndarray.
*     -   **y**: output ndarray.
*
* @param {Function} addon - add-on interface
* @param {Function} fallback - fallback function
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @returns {Function} dispatch function
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* function addon( x, metaX, y, metaY ) {
*     // Call into native add-on...
* }
*
* function fallback( x, y ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with ndarray arguments:
* var x = array( [ [ 1, 2], [ 3, 4 ] ] );
* var y = zeros( [ 2, 2 ] );
* f( x, y );
*/
function dispatch( addon, fallback ) {
	if ( !isFunction( addon ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', addon ) );
	}
	if ( !isFunction( fallback ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fallback ) );
	}
	return dispatcher;

	/**
	* Dispatches to a native add-on.
	*
	* @private
	* @param {ndarray} x - input array
	* @param {ndarray} y - output array
	* @throws {TypeError} unable to resolve an ndarray function supporting the provided argument data types
	* @returns {ndarray} output array
	*/
	function dispatcher( x, y ) {
		var dtypeX;
		var dtypeY;
		var dataX;
		var dataY;
		var viewX;
		var viewY;

		dataX = getData( x );
		dataY = getData( y );

		// WARNING: we assume that, if we're provided something which has a data buffer resembling a typed array, we're provided an ndarray with a typed array buffer; however, this can lead to potential unintended errors as the native add-on may not work with non-typed array objects (e.g., generic arrays)...
		if ( !isTypedArrayLike( dataX ) || !isTypedArrayLike( dataY ) ) {
			fallback( x, y );
			return y;
		}
		dtypeX = resolve( getDType( x ) );
		dtypeY = resolve( getDType( y ) );
		if ( dtypeX === null || dtypeY === null ) {
			throw new TypeError( 'invalid arguments. Unable to resolve an ndarray function supporting the provided argument data types.' );
		}
		if ( dtypeX === COMPLEX64 ) {
			viewX = reinterpretComplex64( dataX, 0 );
		} else if ( dtypeX === COMPLEX128 ) {
			viewX = reinterpretComplex128( dataX, 0 );
		} else if ( dtypeX === BOOLEAN ) {
			viewX = reinterpretBoolean( dataX, 0 );
		} else {
			viewX = dataX;
		}
		if ( dtypeY === COMPLEX64 ) {
			viewY = reinterpretComplex64( dataY, 0 );
		} else if ( dtypeY === COMPLEX128 ) {
			viewY = reinterpretComplex128( dataY, 0 );
		} else if ( dtypeY === BOOLEAN ) {
			viewY = reinterpretBoolean( dataY, 0 );
		} else {
			viewY = dataY;
		}
		addon( viewX, serialize( x ), viewY, serialize( y ) );
		return y;
	}
}


// EXPORTS //

module.exports = dispatch;
