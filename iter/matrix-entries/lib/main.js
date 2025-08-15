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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var zeros = require( '@stdlib/array/base/zeros' );
var getShape = require( './../../../shape' );
var numel = require( './../../../base/numel' );
var slice = require( './../../../base/slice' );
var nextCartesianIndex = require( './../../../base/next-cartesian-index' ).assign;
var args2multislice = require( '@stdlib/slice/base/args2multislice' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.
*
* @param {ndarray} x - input array
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=true] - boolean indicating whether returned views should be read-only
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} first argument must have at least three dimensions
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} cannot write to a read-only array
* @returns {Iterator} iterator
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditerMatrixEntries( x );
*
* var v = iter.next().value;
* // returns [...]
*
* var idx = v[ 0 ];
* // returns [ 0, null, null ]
*
* var mat = ndarray2array( v[ 1 ] );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*
* v = iter.next().value;
* // returns [...]
*
* idx = v[ 0 ];
* // returns [ 1, null, null ]
*
* mat = ndarray2array( v[ 1 ] );
* // returns [ [ 5, 6 ], [ 7, 8 ] ]
*
* // ...
*/
function nditerMatrixEntries( x ) {
	var options;
	var shape;
	var ndims;
	var opts;
	var iter;
	var FLG;
	var idx;
	var dim;
	var S2;
	var N;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	opts = {
		'writable': false
	};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'readonly' ) ) {
			if ( !isBoolean( options.readonly ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'readonly', options.readonly ) );
			}
			opts.writable = !options.readonly;
			if ( opts.writable && isReadOnly( x ) ) {
				throw new Error( format( 'invalid option. Cannot write to read-only array.' ) );
			}
		}
	}
	// Retrieve input array meta data:
	shape = getShape( x );
	ndims = shape.length;

	// Ensure that the input array has sufficient dimensions...
	if ( ndims < 3 ) {
		throw new TypeError( 'invalid argument. First argument must be an ndarray having at least three dimensions.' );
	}

	// Check whether the input array is empty...
	N = numel( shape );
	if ( N === 0 ) {
		FLG = true;
	}
	// Compute the number of matrices across all stacks of matrices:
	N /= shape[ ndims-1 ] * shape[ ndims-2 ];
	dim = ndims - 3;
	S2 = shape[ dim ];

	// Initialize a counter:
	i = -1;

	// Initialize an index array:
	idx = zeros( ndims );

	// Set the last two elements to `null` to indicate that we want a full "slice" for the last two dimensions:
	idx[ ndims-1 ] = null;
	idx[ ndims-2 ] = null;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var indices;
		var s;
		var j;
		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		// Cache the current state of the index array:
		indices = idx.slice();

		// Create a multi-slice for the current view:
		s = args2multislice( idx );

		// Update the index array:
		j = ( idx[ dim ] + 1 ) % S2;
		idx[ dim ] = j;
		if ( j === 0 ) {
			// If we've iterated over all the matrices in the current stack, move on to the next set of matrices:
			idx = nextCartesianIndex( shape, 'row-major', idx, dim-1, idx );
		}
		// Return the next matrix entry:
		return {
			'value': [ indices, slice( x, s, true, opts.writable ) ],
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return nditerMatrixEntries( x, opts );
	}
}


// EXPORTS //

module.exports = nditerMatrixEntries;
