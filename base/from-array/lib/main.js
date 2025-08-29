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

var dtype = require( './../../../base/buffer-dtype' );
var ndarray = require( './../../../base/ctor' );


// MAIN //

/**
* Converts an array to a one-dimensional ndarray.
*
* @param {Collection} buf - input array
* @param {string} order - memory layout (either 'row-major' or 'column-major')
* @returns {ndarray} ndarray
*
* @example
* var arr = [ 1, 2, 3 ];
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'generic'
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'float64'
*/
function array2ndarray( buf, order ) {
	var dt = dtype( buf ) || 'generic';
	return new ndarray( dt, buf, [ buf.length ], [ 1 ], 0, order );
}


// EXPORTS //

module.exports = array2ndarray;
