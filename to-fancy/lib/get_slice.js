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

var slice = require( './../../base/slice' );
var errMessage = require( './error_message.js' );


// MAIN //

/**
* Returns an ndarray view.
*
* @private
* @param {ndarrayLike} target - target object
* @param {string} property - property name
* @param {Object} ctx - context object
* @param {Function} ctx.postGetArray - function to process a retrieved ndarray
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.prop2slice - function for converting an indexing expression to a slice
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of ndarray dimensions
* @returns {ndarrayLike} result
*/
function getSlice( target, property, ctx ) {
	var s = ctx.prop2slice( target, property, ctx.strict );
	if ( s === null ) {
		// Ensure consistency with normal object behavior by returning `undefined` for any "unrecognized" property name:
		return;
	}
	try {
		return ctx.postGetArray( slice( target, s, ctx.strict, false ) );
	} catch ( err ) {
		// In principle, we should only error when in "strict" mode and a slice exceeds ndarray bounds...
		throw new err.constructor( errMessage( err.message ) );
	}
}


// EXPORTS //

module.exports = getSlice;
