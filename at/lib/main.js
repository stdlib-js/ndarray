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

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var normalizeIndex = require( './../../base/normalize-index' );
var getShape = require( './../../shape' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an ndarray element.
*
* @param {ndarrayLike} x - input ndarray
* @param {...integer} [indices] - indices
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} index arguments must be integers
* @throws {RangeError} number of index arguments must equal the number of dimensions
* @returns {*} ndarray element
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3 ] );
* // returns <ndarray>
*
* var v = at( x, 0, 0 );
* // returns 0
*
* v = at( x, 5, 5 );
* // returns undefined
*/
function at( x ) {
	var nargs;
	var args;
	var idx;
	var sh;
	var N;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	sh = getShape( x );
	N = sh.length;
	nargs = arguments.length - 1;
	if ( nargs < N ) {
		throw new RangeError( 'invalid invocation. Insufficient arguments. Array shape: (%s). Number of indices: %u.', sh.join( ',' ), nargs );
	} else if ( nargs > N ) {
		throw new RangeError( 'invalid invocation. Too many arguments. Array shape: (%s). Number of indices: %u.', sh.join( ',' ), nargs );
	}
	args = [];
	for ( i = 1; i <= nargs; i++ ) {
		idx = arguments[ i ];
		if ( !isInteger( idx ) ) {
			throw new TypeError( format( 'invalid argument. Index arguments must be integers. Value: `%s`.', idx ) );
		}
		idx = normalizeIndex( idx, sh[i-1]-1 );
		if ( idx === -1 ) {
			// Index is out-of-bounds...
			return;
		}
		args.push( idx );
	}
	return x.get.apply( x, args );
}


// EXPORTS //

module.exports = at;
