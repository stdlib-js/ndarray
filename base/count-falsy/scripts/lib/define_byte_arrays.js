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

var numel = require( './../../../../base/numel' );
var filledarray = require( '@stdlib/array/filled' );
var replace = require( '@stdlib/string/replace' );


// MAIN //

/**
* Defines byte arrays in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @param {Array<Array>} shapes - array of shape arrays
* @param {PositiveInteger} nb1 - bytes per element for input array
* @param {PositiveInteger} nb2 - bytes per element for output array
* @returns {string} updated string
*/
function defineByteArrays( tmpl, shapes, nb1, nb2 ) {
	var bytes;
	var tmp;
	var N;
	var i;

	bytes = filledarray( 0, nb1, 'generic' ).join( ', ' );
	tmpl = replace( tmpl, '{{INPUT_NDARRAY_1_BYTES_0D}}', bytes );

	bytes = filledarray( 0, nb2, 'generic' ).join( ', ' );
	tmpl = replace( tmpl, '{{OUTPUT_NDARRAY_BYTES}}', bytes );

	for ( i = 1; i < shapes.length; i++ ) {
		N = numel( shapes[ i ] );

		tmp = '{{INPUT_NDARRAY_1_BYTES_'+i+'D}}';
		bytes = filledarray( 0, nb1*N, 'generic' ).join( ', ' );
		tmpl = replace( tmpl, tmp, bytes );
	}
	return tmpl;
}


// EXPORTS //

module.exports = defineByteArrays;
