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

var getShape = require( './../../base/shape' );
var resolveSubscripts = require( './resolve_subscripts.js' );


// MAIN //

/**
* Sets the element associated with a specified set of subscripts.
*
* @private
* @param {ndarrayLike} target - target object
* @param {string} property - index string
* @param {*} value - new value
* @param {Object} ctx - context object
* @param {string} ctx.dtype - target ndarray data type
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.validator - function for validating new values
* @param {(Function|null)} ctx.preSetElement - function for normalizing new values (if necessary)
* @throws {TypeError} assigned value cannot be safely cast to the target ndarray data type
* @throws {TypeError} target ndarray must have a supported data type
* @throws {RangeError} index exceeds ndarray bounds
* @throws {RangeError} number of indices must match the number of ndarray dimensions
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setCartesian( target, property, value, ctx ) {
	var args;
	var err;
	var v;

	err = ctx.validator( value, ctx.dtype );
	if ( err ) {
		throw err;
	}
	if ( ctx.preSetElement ) {
		v = ctx.preSetElement( value );
	} else {
		v = value;
	}
	args = resolveSubscripts( property, getShape( target, false ), ctx.strict );
	if ( args === void 0 ) {
		return false;
	}
	args.push( v );

	// Use the `set` method, which we expect every ndarray-like object to have, in order to set a single element:
	target.set.apply( target, args );

	return true;
}


// EXPORTS //

module.exports = setCartesian;
