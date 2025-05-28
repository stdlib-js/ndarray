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

var promotionRules = require( './../../../promotion-rules' );


// MAIN //

/**
* Returns a data type that results from applying promotion rules to a provided list of data types.
*
* @param {StringArray} dtypes - list of data types
* @returns {(string|null)} result
*
* @example
* var dt = promoteDataTypes( [ 'float32', 'float64' ] );
* // returns 'float64'
*
* @example
* var dt = promoteDataTypes( [ 'binary', 'complex128' ] );
* // returns null
*/
function promoteDataTypes( dtypes ) {
	var dt;
	var N;
	var i;

	N = dtypes.length;
	if ( N === 0 ) {
		return null;
	}
	dt = dtypes[ 0 ];
	for ( i = 1; i < dtypes.length; i++ ) {
		dt = promotionRules( dt, dtypes[ i ] );
		if ( dt === null || dt === -1 ) {
			return null;
		}
	}
	return dt;
}


// EXPORTS //

module.exports = promoteDataTypes;
