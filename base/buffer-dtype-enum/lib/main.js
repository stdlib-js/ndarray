/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var str2enum = require( './../../../base/dtype-str2enum' );
var dtype = require( './../../../base/buffer-dtype' );


// MAIN //

/**
* Returns the data type enumeration constant for a provided ndarray data buffer.
*
* @param {Collection} arr - strided array
* @returns {(integer|null)} data type enumeration constant or null
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( 10 );
*
* var c = dtypeEnum( x );
* // returns <number>
*/
function dtypeEnum( arr ) {
	var dt = dtype( arr );
	if ( dt ) {
		return str2enum( dt );
	}
	return null;
}


// EXPORTS //

module.exports = dtypeEnum;
