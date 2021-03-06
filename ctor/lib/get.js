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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var getIndex = require( './../../base/ind' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an array element.
*
* ## Notes
*
* -   The number of indices should **equal** the number of dimensions. Accordingly, for zero-dimensional arrays, no indices should be provided.
*
* @private
* @param {...integer} [idx] - indices
* @throws {TypeError} provided indices must be integer valued
* @throws {RangeError} index exceeds array dimensions
* @throws {RangeError} number of indices must equal the number of dimensions
* @returns {*} array element
*/
function get() {
	var idx;
	var ind;
	var M;
	var i;

	if ( arguments.length !== this._ndims ) {
		throw new RangeError( format( 'invalid arguments. Number of indices must match the number of dimensions. ndims: `%u`. nargs: `%u`.', this._ndims, arguments.length ) );
	}
	idx = this._offset;
	M = this._submode.length;
	for ( i = 0; i < arguments.length; i++ ) {
		if ( !isInteger( arguments[ i ] ) ) {
			throw new TypeError( format( 'invalid argument. Indices must be integer valued. Argument: `%u`. Value: `%s`.', i, arguments[ i ] ) );
		}
		ind = getIndex( arguments[ i ], this._shape[ i ]-1, this._submode[ i%M ] ); // eslint-disable-line max-len
		idx += this._strides[ i ] * ind;
	}
	if ( this._accessors ) {
		return this._buffer.get( idx );
	}
	return this._buffer[ idx ];
}


// EXPORTS //

module.exports = get;
