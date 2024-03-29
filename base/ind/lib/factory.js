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

var clampIndex = require( './../../../base/clamp-index' );
var wrapIndex = require( './../../../base/wrap-index' );
var normalize = require( './../../../base/normalize-index' );
var isIndexMode = require( './../../../base/assert/is-index-mode' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var TABLE = {
	'wrap': wrapIndex,
	'clamp': clampIndex,
	'normalize': normalizeIndex,
	'throw': throwIfOutOfBounds
};


// FUNCTIONS //

/**
* Returns an index if within bounds and throw an error otherwise.
*
* @private
* @param {integer} idx - index
* @param {NonNegativeInteger} max - maximum index
* @throws {RangeError} index out-of-bounds
* @returns {integer} index
*
* @example
* var idx = throwIfOutOfBounds( 2, 9 );
* // returns 2
*
* idx = throwIfOutOfBounds( 10, 9 );
* // throws <RangeError>
*
* idx = throwIfOutOfBounds( -1, 9 );
* // throws <RangeError>
*/
function throwIfOutOfBounds( idx, max ) {
	if ( idx < 0 || idx > max ) {
		throw new RangeError( format( 'invalid argument. Index must resolve to a value on the interval: [0, %d]. Value: `%d`.', max, idx ) );
	}
	return idx;
}

/**
* Normalizes an index before performing a strict bounds check.
*
* @private
* @param {integer} idx - index
* @param {NonNegativeInteger} max - maximum index
* @throws {RangeError} index out-of-bounds
* @returns {integer} index
*
* @example
* var idx = normalizeIndex( 1, 10 );
* // returns 1
*
* idx = normalizeIndex( -4, 10 );
* // returns 7
*
* idx = normalizeIndex( -100, 10 );
* // throws <RangeError>
*/
function normalizeIndex( idx, max ) {
	var index = normalize( idx, max );
	if ( index < 0 || index > max ) {
		throw new RangeError( format( 'invalid argument. Index must resolve to a value on the interval: [0, %d]. Value: `%d`.', max, idx ) );
	}
	return index;
}


// MAIN //

/**
* Returns a function for returning an index according to a provided index mode.
*
* @param {string} mode - specifies how to handle an out-of-bounds index
* @throws {TypeError} first argument must be a recognized index mode
* @returns {Function} function for returning an index
*
* @example
* var ind = factory( 'clamp' );
*
* var idx = ind( 2, 9 );
* // returns 2
*
* idx = ind( 10, 9 );
* // returns 9
*
* idx = ind( -1, 9 );
* // returns 0
*
* @example
* var ind = factory( 'wrap' );
*
* var idx = ind( 2, 9 );
* // returns 2
*
* idx = ind( 10, 9 );
* // returns 0
*
* idx = ind( -1, 9 );
* // returns 9
*
* @example
* var ind = factory( 'throw' );
*
* var idx = ind( 2, 9 );
* // returns 2
*
* idx = ind( 10, 9 );
* // throws <RangeError>
*
* idx = ind( -1, 9 );
* // throws <RangeError>
*
* @example
* var ind = factory( 'normalize' );
*
* var idx = ind( 1, 10 );
* // returns 1
*
* idx = ind( -4, 10 );
* // returns 7
*
* idx = ind( -100, 10 );
* // throws <RangeError>
*/
function factory( mode ) {
	if ( !isIndexMode( mode ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a recognized index mode. Value: `%s`.', mode ) );
	}
	return TABLE[ mode ];
}


// EXPORTS //

module.exports = factory;
