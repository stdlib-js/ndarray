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

// var take = require( './../../take' );

// var mskfilter = require( './../../mskfilter' );

// var mskreject = require( './../../mskreject' );

var format = require( '@stdlib/string/format' );
var prop2array = require( './prop2array.js' );


// MAIN //

/**
* Returns the elements specified by an ndarray index.
*
* @private
* @param {ndarrayLike} target - target object
* @param {string} property - index string
* @param {Object} ctx - context object
* @param {Object} ctx.cache - cache for resolving ndarray index objects
* @param {Function} ctx.postGetArray - function to process a retrieved ndarray
* @throws {Error} invalid ndarray index
* @throws {RangeError} index exceeds ndarray bounds
* @returns {ndarrayLike} result
*/
function getElements( target, property, ctx ) {
	var idx = prop2array( property, ctx.cache );
	if ( idx.type === 'int' ) {
		// FIXME: handle the various "kinds" of index arrays (e.g., "linear" and "cartesian")

		// return ctx.postGetArray( take( target, idx.data ) );
		return NaN; // FIXME
	}
	if ( idx.type === 'bool' ) {
		// return ctx.postGetArray( mskfilter( target, idx.data ) );
		return NaN; // FIXME
	}
	if ( idx.type === 'mask' ) {
		// return ctx.postGetArray( mskreject( target, idx.data ) );
		return NaN; // FIXME
	}
	throw new Error( format( 'invalid operation. Unrecognized ndarray index type. Value: `%s`.', idx.type ) );
}


// EXPORTS //

module.exports = getElements;
