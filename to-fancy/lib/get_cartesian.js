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

var scalar2ndarrayLike = require( './../../base/from-scalar-like' );
var getShape = require( './../../base/shape' );
var resolveSubscripts = require( './resolve_subscripts.js' );


// MAIN //

/**
* Returns the element associated with a specified set of subscripts.
*
* @private
* @param {ndarrayLike} target - target object
* @param {string} property - index string
* @param {Object} ctx - context object
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.postGetArray - function to process a retrieved ndarray
* @throws {RangeError} index exceeds ndarray bounds
* @throws {RangeError} number of indices must match the number of ndarray dimensions
* @returns {(ndarrayLike|void)} result
*/
function getCartesian( target, property, ctx ) {
	var sub;
	var v;

	sub = resolveSubscripts( property, getShape( target, false ), ctx.strict );
	if ( sub === void 0 ) {
		return;
	}
	// Use the `get` method, which we expect every ndarray-like object to have, in order to resolve a single element:
	v = target.get.apply( target, sub );
	if ( v === void 0 ) {
		return;
	}
	// Return the element as a 0-D ndarray to ensure consistency with linear indexing and slicing:
	return ctx.postGetArray( scalar2ndarrayLike( target, v ) );
}


// EXPORTS //

module.exports = getCartesian;
