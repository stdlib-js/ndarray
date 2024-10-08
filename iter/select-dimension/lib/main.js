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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../../base/assert/is-read-only' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var nulls = require( '@stdlib/array/base/nulls' );
var getShape = require( './../../../shape' );
var normalizeIndex = require( './../../../base/normalize-index' );
var numel = require( './../../../base/numel' );
var ndslice = require( './../../../base/slice' );
var Slice = require( '@stdlib/slice/ctor' );
var args2multislice = require( '@stdlib/slice/base/args2multislice' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an iterator which iterates over each view along a specified dimension.
*
* @param {ndarray} x - input value
* @param {integer} dim - dimension index
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=true] - boolean indicating whether returned views should be read-only
* @param {boolean} [options.keepdim=false] - boolean indicating whether returned views should include the selected dimension as a singleton dimension
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} second argument must be an integer
* @throws {RangeError} dimension index exceeds the number of dimensions
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
* var iter = nditerSelectDimension( x, 0 );
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
function nditerSelectDimension( x, dim ) {
	var options;
	var shape;
	var ndims;
	var opts;
	var iter;
	var FLG;
	var idx;
	var N;
	var d;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isInteger( dim ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', dim ) );
	}
	opts = {
		'writable': false,
		'keepdim': false
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
		if ( hasOwnProp( options, 'keepdim' ) ) {
			if ( !isBoolean( options.keepdim ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'keepdim', options.keepdim ) );
			}
			opts.keepdim = options.keepdim;
		}
	}
	// Retrieve input array meta data:
	shape = getShape( x );
	ndims = shape.length;

	// Normalize the dimension index:
	d = normalizeIndex( dim, ndims-1 );
	if ( d === -1 ) {
		throw new RangeError( format( 'invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.', ndims, dim ) );
	}
	// Check whether the input array is empty...
	N = numel( shape );
	if ( N === 0 ) {
		FLG = true;
	}
	// Compute the number of views (i.e., the dimension size):
	N = shape[ d ];

	// Initialize a counter:
	i = -1;

	// Initialize an index array for generating slices:
	idx = nulls( ndims );

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

		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		// Update the index array to generate the next view:
		if ( opts.keepdim ) {
			idx[ d ] = new Slice( i, i+1, 1 );
		} else {
			idx[ d ] = i;
		}
		// Create a multi-slice for the next view:
		s = args2multislice( idx );

		// Return the next slice:
		return {
			'value': ndslice( x, s, true, opts.writable ),
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
		return nditerSelectDimension( x, dim, opts );
	}
}


// EXPORTS //

module.exports = nditerSelectDimension;
