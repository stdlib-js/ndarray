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

var isMethodIn = require( '@stdlib/assert/is-method-in' );
var getShape = require( './../../base/shape' ); // note: we intentionally use the "base" version, as every ndarray-like object should have a shape property
var getStrides = require( './../../strides' );
var getOrder = require( './../../order' );
var numel = require( './../../base/numel' );
var ind2sub = require( './../../base/ind2sub' );
var resolveIndex = require( './resolve_index.js' );


// FUNCTIONS //

/**
* Returns an ndarray element according to a linear index.
*
* ## Notes
*
* -   This function assumes the presence of an `#.iget` method, which all stdlib ndarrays are expected to have.
*
* @private
* @param {ndarrayLike} x - input ndarray
* @param {string} idx - linear index string
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {RangeError} index exceeds ndarray bounds
* @returns {(*|void)} value
*/
function iget( x, idx, strict ) {
	idx = resolveIndex( idx, numel( getShape( x, false ) ), strict );
	if ( idx === -1 ) {
		// Even for 0-D ndarrays, where, at least in stdlib, one may provide an index argument to `iget`, always return undefined...
		return;
	}
	return x.iget( idx );
}

/**
* Returns an ndarray element according to a linear index.
*
* ## Notes
*
* -   For ndarray-like objects not having an `#.iget` method, this function falls back to resolving a linear index to an array of corresponding subscripts and calling a `#.get` method, which all ndarray-like objects are expected to have.
*
* @private
* @param {ndarrayLike} x - input ndarray
* @param {string} idx - linear index string
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {RangeError} index exceeds ndarray bounds
* @returns {(*|void)} value
*/
function get( x, idx, strict ) {
	var sub;
	var sh;

	sh = getShape( x, false );
	idx = resolveIndex( idx, numel( sh ), strict );

	// In non-strict mode, avoid triggering an exception and always return undefined if unable to resolve a linear index...
	if ( idx === -1 ) {
		return;
	}
	// Convert a linear index to an array of subscripts according to the current ndarray view:
	sub = ind2sub( sh, getStrides( x ), 0, getOrder( x ), idx, 'throw' );

	// Use the `#.get` method, which every ndarray-like object is expected to have, in order to resolve an ndarray element:
	return x.get.apply( x, sub );
}


// MAIN //

/**
* Returns an accessor for retrieving an ndarray element according to a linear index.
*
* @private
* @param {ndarrayLike} x - input ndarray
* @returns {Function} accessor function
*/
function getter( x ) {
	if ( isMethodIn( x, 'iget' ) ) {
		return iget;
	}
	return get;
}


// EXPORTS //

module.exports = getter;
