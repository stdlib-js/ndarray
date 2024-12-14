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

var isPropertyKey = require( '@stdlib/assert/is-property-key' );
var flags = require( './../../base/flags' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a specified flag for a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {(string|symbol)} name - flag name
* @throws {TypeError} first argument must be an ndarray having one or more dimensions
* @throws {TypeError} second argument must be a valid property name
* @returns {*} flag value
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = flag( zeros( [ 3, 3, 3 ] ), 'READONLY' );
* // returns <boolean>
*/
function flag( x, name ) {
	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isPropertyKey( name ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a valid property name. Value: `%s`.', name ) );
	}
	return flags( x, false )[ name ];
}


// EXPORTS //

module.exports = flag;
