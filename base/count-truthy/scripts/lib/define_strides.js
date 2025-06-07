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

var shape2strides = require( './../../../../base/shape2strides' );
var gscal = require( '@stdlib/blas/base/gscal' );
var replace = require( '@stdlib/string/replace' );


// MAIN //

/**
* Defines array strides in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @param {Array<Array>} shapes - array of shape arrays
* @param {PositiveInteger} nb1 - bytes per element for the first array
* @param {string} order - memory layout order
* @returns {string} updated string
*/
function defineStrides( tmpl, shapes, nb1, order ) {
	var strides;
	var tmp;
	var st;
	var i;

	for ( i = 1; i < shapes.length; i++ ) {
		strides = shape2strides( shapes[ i ], order );

		tmp = '{{INPUT_NDARRAY_1_STRIDES_'+i+'D}}';
		st = gscal( strides.length, nb1, strides.slice(), 1 );
		tmpl = replace( tmpl, tmp, st.join( ', ' ) );
	}
	return tmpl;
}


// EXPORTS //

module.exports = defineStrides;
