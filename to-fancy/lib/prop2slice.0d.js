/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var trim = require( '@stdlib/string/base/trim' );
var replace = require( '@stdlib/string/base/replace' );
var MultiSlice = require( '@stdlib/slice/multi' );
var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
var getShape = require( './../../base/shape' );
var format = require( '@stdlib/string/format' );
var isMultiSlice = require( './is_multislice_string.js' );
var isSlice = require( './is_slice_string.js' );
var isInteger = require( './is_integer_string.js' );
var isSubsequence = require( './is_subsequence_string.js' );
var isEllipsis = require( './is_ellipsis_string.js' );
var isEmptyString = require( './is_empty_string.js' );
var parseMultiSlice = require( './parse_multislice.js' );
var parseSlice = require( './parse_slice.js' );
var parseInteger = require( './parse_integer.js' );


// FUNCTIONS //

/**
* Parses a subsequence string.
*
* @private
* @param {string} raw - original unprocessed input string
* @param {string} str - subsequence string
* @param {NonNegativeIntegerArray} shape - array dimensions
* @throws {Error} invalid slice operation
* @throws {RangeError} slice exceeds array bounds
* @returns {MultiSlice} MultiSlice object
*
* @example
* var s = parseSubsequence( ' ... ', '...', [], false );
* // returns <MultiSlice>
*/
function parseSubsequence( raw, str, shape ) {
	var s = seq2multislice( str, shape, true );
	if ( s.code ) {
		if ( s.code === 'ERR_SLICE_INVALID_INCREMENT' ) {
			throw new Error( format( 'invalid operation. A subsequence increment must be a non-zero integer. Value: `%s`.', raw ) );
		}
		if ( s.code === 'ERR_SLICE_INVALID_ELLIPSIS' ) {
			throw new Error( format( 'invalid operation. A subsequence may only include a single ellipsis. Value: `%s`.', raw ) );
		}
		if ( s.code === 'ERR_SLICE_INVALID_SUBSEQUENCE' ) {
			throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', raw ) );
		}
		// s.code === 'ERR_SLICE_TOO_MANY_DIMENSIONS'
		throw new RangeError( format( 'invalid operation. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.', shape.join( ',' ), replace( str, /\.\.\.,/, '' ).split( ',' ).length ) );
	}
	return s;
}


// MAIN //

/**
* Converts a zero-dimensional ndarray indexing expression to a slice.
*
* @private
* @param {Object} target - target object
* @param {string} property - property name
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @returns {MultiSlice} multi-slice object
*/
function prop2slice( target, property ) {
	var prop = trim( property );
	if ( isEmptyString( prop ) || isEllipsis( prop ) ) {
		return new MultiSlice();
	}
	if ( isSlice( prop ) ) {
		return parseSlice( property, prop );
	}
	if ( isMultiSlice( prop ) ) {
		return parseMultiSlice( property, prop );
	}
	if ( isInteger( prop ) ) {
		return parseInteger( property, prop );
	}
	if ( isSubsequence( prop ) ) {
		return parseSubsequence( property, prop, getShape( target, false ) );
	}
	// Everything else (including undefined/non-existent properties):
	return null;
}


// EXPORTS //

module.exports = prop2slice;
