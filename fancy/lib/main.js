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

/* eslint-disable max-len */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var parent = require( './../../ctor' ); // eslint-disable-line stdlib/no-redeclare
var inherit = require( '@stdlib/utils/inherit' );
var ndarray2fancy = require( './../../to-fancy' );


// MAIN //

/**
* Fancy ndarray constructor.
*
* @constructor
* @param {string} dtype - data type
* @param {Collection} buffer - data buffer
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - array strides
* @param {NonNegativeInteger} offset - index offset
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {Options} [options] - function options
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param {boolean} [options.readonly=false] - boolean indicating whether an array should be read-only
* @throws {TypeError} `dtype` argument must be a supported ndarray data type
* @throws {TypeError} `buffer` argument must be an array-like object, typed-array-like, or a Buffer
* @throws {TypeError} `buffer` argument `get` and `set` properties must be functions
* @throws {TypeError} `shape` argument must be an array-like object containing nonnegative integers
* @throws {Error} `shape` argument length must equal the number of dimensions
* @throws {TypeError} `strides` argument must be an array-like object containing integers
* @throws {Error} `strides` argument length must equal the number of dimensions (except for zero-dimensional arrays; in which case, the `strides` argument length must be equal to `1`)
* @throws {Error} for zero-dimensional ndarrays, the `strides` argument must contain a single element equal to `0`
* @throws {TypeError} `offset` argument must be a nonnegative integer
* @throws {TypeError} `order` argument must be a supported ndarray order
* @throws {Error} `buffer` argument must be compatible with specified meta data
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} too many dimensions
* @returns {FancyArray} FancyArray instance
*
* @example
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = new FancyArray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <FancyArray>
*/
function FancyArray( dtype, buffer, shape, strides, offset, order, options ) {
	var nargs = arguments.length;
	if ( !( this instanceof FancyArray ) ) {
		if ( nargs < 7 ) {
			return new FancyArray( dtype, buffer, shape, strides, offset, order );
		}
		return new FancyArray( dtype, buffer, shape, strides, offset, order, options );
	}
	// Call the parent constructor:
	parent.call( this, dtype, buffer, shape, strides, offset, order, ( nargs < 7 ) ? {} : options );

	// Proxy the current instance:
	return ndarray2fancy( this );
}

// Inherit from the parent constructor:
inherit( FancyArray, parent );

/**
* Constructor name.
*
* @name name
* @memberof FancyArray
* @type {string}
* @default 'ndarray'
*
* @example
* var str = FancyArray.name;
* // returns 'ndarray'
*/
setReadOnly( FancyArray, 'name', 'ndarray' );


// EXPORTS //

module.exports = FancyArray;
