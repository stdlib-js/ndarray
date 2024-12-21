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
* @param {Object} target - target object
* @param {string} property - property name
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @param {Function} prop2slice - function for converting an indexing expression to a slice
* @throws {Error} invalid slice operation
* @throws {RangeError} number of slice dimensions must match the number of array dimensions
* @returns {FancyArray} result
*/
function getSlice( target, property, receiver, prop2slice ) {
	var strict;
	var s;

	strict = false; // TODO: support strict mode
	s = prop2slice( target, property, strict );
	try {
		return slice( receiver, s, strict, false );
	} catch ( err ) {
		throw new err.constructor( errMessage( err.message ) );
	}
}


// EXPORTS //

module.exports = getSlice;
