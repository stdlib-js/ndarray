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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
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
* Returns an iterator which iterates over each subarray in a stack of subarrays.
*
* @param {ndarray} x - input value
* @param {PositiveInteger} ndims - number of dimensions to stack
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=true] - boolean indicating whether returned views should be read-only
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} first argument must have at least `ndims+1` dimensions
* @throws {TypeError} second argument must be a positive integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} cannot write to a read-only array
* @returns {Iterator} iterator
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditerSubarrays( x, 2 );
*
* var v = iter.next().value;
* // returns <ndarray>
*
* var arr = ndarray2array( v );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*
* v = iter.next().value;
* // returns <ndarray>
*
* arr = ndarray2array( v );
* // returns [ [ 5, 6 ], [ 7, 8 ] ]
*
* // ...
*/
function nditerSubarrays( x, ndims ) {
	var options;
	var shape;
	var opts;
	var iter;
	var FLG;
	var idx;
	var dim;
	var S;
	var M;
	var N;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isPositiveInteger( ndims ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', ndims ) );
	}
	opts = {
		'writable': false
	};
	if ( arguments.length > 2 ) {
		options = arguments[ 2 ];
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
	M = shape.length;

	// Ensure that the input array has sufficient dimensions...
	if ( M <= ndims ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray having at least %d dimensions.', ndims+1 ) );
	}
	// Check whether the input array is empty...
	N = numel( shape );
	if ( N === 0 ) {
		FLG = true;
	}
	// Compute the number of subarrays across all stacks of subarrays:
	dim = M - ndims - 1;
	for ( i = dim+1; i < M; i++ ) {
		N /= shape[ i ];
	}
	S = shape[ dim ];

	// Initialize an index array for generating slices:
	idx = zeros( M );

	// Set the last `ndims` elements to `null` to indicate that we want a full "slice" for the last `ndims` dimensions:
	for ( i = dim+1; i < M; i++ ) {
		idx[ i ] = null;
	}
	// Initialize a counter:
	i = -1;

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
		var s;
		var j;

		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		// Create a multi-slice for the current view:
		s = args2multislice( idx );

		// Update the index array:
		j = ( idx[ dim ] + 1 ) % S;
		idx[ dim ] = j;
		if ( j === 0 ) {
			// If we've iterated over all the subarrays in the current stack, move on to the next set of subarrays:
			idx = nextCartesianIndex( shape, 'row-major', idx, dim-1, idx );
		}
		// Return the next slice:
		return {
			'value': slice( x, s, true, opts.writable ),
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
		return nditerSubarrays( x, ndims, opts );
	}
}


// EXPORTS //

module.exports = nditerSubarrays;
