/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var bufferCtors = require( './../../base/buffer-ctors' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );


// MAIN //

/**
* Casts buffer elements by copying those elements to a buffer of another data type.
*
* @private
* @param {(Array|TypedArray|Buffer)} buffer - input buffer
* @param {NonNegativeInteger} len - number of elements to cast
* @param {string} dtype - data type
* @returns {(Array|TypedArray|Buffer)} output buffer
*
* @example
* var b = castBuffer( [ 1.0, 2.0, 3.0 ], 3, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*/
function castBuffer( buffer, len, dtype ) {
	var ctor;
	var out;
	var i;

	ctor = bufferCtors( dtype );
	if ( dtype === 'generic' ) {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( buffer[ i ] );
		}
	} else if ( dtype === 'binary' ) {
		out = allocUnsafe( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = buffer[ i ];
		}
	} else {
		out = new ctor( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = buffer[ i ]; // TODO: wrap and use accessors here and above
		}
	}
	return out;
}


// EXPORTS //

module.exports = castBuffer;
