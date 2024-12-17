/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var toArray = require( './../../base/to-array' );
var getStrides = require( './../../strides' );
var getOffset = require( './../../offset' );
var getShape = require( './../../shape' );
var getOrder = require( './../../order' );
var getData = require( './../../data-buffer' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Converts an ndarray to a generic array (which may include nested arrays).
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
* @returns {(EmptyArray|Array|Array<Array>)} array (which may include nested arrays)
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1, 2, 3, 4 ];
* var shape = [ 2, 2 ];
* var order = 'row-major';
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var arr = ndarray( 'generic', buffer, shape, strides, offset, order  );
*
* var out = ndarray2array( arr );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
function ndarray2array( x ) {
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	return toArray( getData( x ), getShape( x ), getStrides( x ), getOffset( x ), getOrder( x ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = ndarray2array;
