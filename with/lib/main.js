/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isCollection = require( '@stdlib/assert/is-collection' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var getShape = require( './../../shape' );
var emptyLike = require( './../../empty-like' );
var normalizeIndex = require( './../../base/normalize-index' );
var assign = require( './../../base/assign' );
var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a new ndarray with the element at a specified index replaced by a provided value.
*
* @param {ndarray} x - input ndarray
* @param {IntegerArray} indices - indices of the element to replace
* @param {*} value - value to set
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} second argument must be an array of integers
* @throws {RangeError} second argument must be an array of valid indices
* @throws {RangeError} number of indices must equal the number of input ndarray dimensions
* @returns {ndarray} output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1, 2, 3, 4 ];
* var shape = [ 2, 2 ];
* var order = 'row-major';
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, order  );
*
* var out = ndarrayWith( x, [ 0, 0 ], 5 );
* // returns <ndarray>
*
* var v = out.get( 0, 0 );
* // returns 5
*/
function ndarrayWith( x, indices, value ) {
	var args;
	var out;
	var idx;
	var get;
	var sh;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isCollection( indices ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array of integers. Value: `%s`.', indices ) );
	}
	sh = getShape( x );
	if ( indices.length !== sh.length ) {
		throw new RangeError( format( 'invalid argument. Number of indices does not match the number of array dimensions. Array shape: (%s). Number of indices: %u.', join( sh, ',' ), indices.length ) );
	}
	// Copy the input array:
	out = emptyLike( x );
	assign( [ x, out ] );

	// Resolve an element accessor for retrieving indices:
	get = resolveGetter( indices );

	// Normalize the provided indices...
	args = [];
	for ( i = 0; i < sh.length; i++ ) {
		idx = get( indices, i );
		if ( !isInteger( idx ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an array of integers. Value: `%s`.', indices ) );
		}
		idx = normalizeIndex( idx, sh[ i ] );
		if ( idx === -1 ) {
			throw new RangeError( format( 'invalid argument. Second argument contains an out-of-bounds index. Array shape: (%s). Value: `[%s]`.', join( sh, ',' ), join( indices, ',' ) ) );
		}
		args.push( idx );
	}
	args.push( value );

	// Set the element at the specified indices:
	out.set.apply( out, args );
	return out;
}


// EXPORTS //

module.exports = ndarrayWith;
