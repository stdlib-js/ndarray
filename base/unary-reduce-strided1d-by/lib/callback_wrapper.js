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

var put = require( '@stdlib/array/base/put' );
var ind2sub = require( './../../../base/ind2sub' ).assign;
var zeros = require( '@stdlib/array/base/zeros' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Wraps a provided callback function.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {ndarray} view - reduced view of the input ndarray
* @param {NonNegativeIntegerArray} idx - workspace for storing iteration indices
* @param {NonNegativeIntegerArray} ldims - loop dimensions
* @param {NonNegativeIntegerArray} lidx - current loop iteration indices
* @param {NonNegativeIntegerArray} cdims - core dimensions
* @param {Function} clbk - callback function
* @param {thisArg} thisArg - callback execution context
* @returns {Function} callback wrapper
*/
function wrap( arr, view, idx, ldims, lidx, cdims, clbk, thisArg ) {
	var cidx = zeros( cdims.length ); // workspace for storing core iteration indices
	put( idx, ldims, lidx, MODE );
	return wrapper;

	/**
	* Invokes a callback function.
	*
	* @private
	* @param {*} v - value
	* @param {NonNegativeInteger} aidx - current array element index
	* @returns {*} result
	*/
	function wrapper( v, aidx ) {
		ind2sub( view.shape, view.strides, view.offset, view.order, aidx, MODE, cidx ); // eslint-disable-line max-len
		put( idx, cdims, cidx, MODE );
		return clbk.call( thisArg, v, idx.slice(), arr );
	}
}


// EXPORTS //

module.exports = wrap;
