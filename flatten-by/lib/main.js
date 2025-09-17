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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );
var isOrder = require( './../../base/assert/is-order' );
var getShape = require( './../../shape' );
var getOrder = require( './../../order' );
var getStrides = require( './../../strides' );
var getData = require( './../../base/data-buffer' );
var getDType = require( './../../base/dtype' );
var shape2strides = require( './../../base/shape2strides' );
var strides2order = require( './../../base/strides2order' );
var flattenShape = require( './../../base/flatten-shape' );
var map = require( './../../base/map' );
var emptyLike = require( './../../empty-like' );
var ndarray = require( './../../ctor' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var ROW_MAJOR = 'row-major';
var COL_MAJOR = 'column-major';


// MAIN //

/**
* Flattens an ndarray according to a callback function.
*
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.depth] - maximum number of dimensions to flatten
* @param {string} [options.order='row-major'] - order in which input ndarray elements should be flattened
* @param {Function} fcn - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
* // return <ndarray>
*
* var y = flattenBy( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
function flattenBy( x, options, fcn, thisArg ) {
	var hasOpts;
	var nargs;
	var view;
	var opts;
	var ctx;
	var xsh;
	var cb;
	var st;
	var y;
	var o;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	nargs = arguments.length;
	xsh = getShape( x );
	hasOpts = false;

	// Define default options:
	opts = {
		'depth': xsh.length, // by default, flatten to a one-dimensional ndarray
		'order': ROW_MAJOR   // by default, flatten in lexicographic order (i.e., trailing dimensions first; e.g., if `x` is a matrix, flatten row-by-row)
	};

	// Case: flattenBy( x, fcn )
	if ( nargs <= 2 ) {
		cb = options;
	}
	// Case: flattenBy( x, ???, ??? )
	else if ( nargs === 3 ) {
		// Case: flattenBy( x, fcn, thisArg )
		if ( isFunction( options ) ) {
			cb = options;
			ctx = fcn;
		}
		// Case: flattenBy( x, options, fcn )
		else {
			hasOpts = true;
			cb = fcn;
		}
	}
	// Case: flattenBy( x, options, fcn, thisArg )
	else {
		hasOpts = true;
		cb = fcn;
		ctx = thisArg;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', cb ) );
	}
	if ( hasOpts ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'depth' ) ) {
			if ( !isNonNegativeInteger( options.depth ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', options.depth ) );
			}
			opts.depth = options.depth;
		}
		if ( hasOwnProp( options, 'order' ) ) {
			if ( options.order === 'any' ) {
				// When 'any', we want to flatten according to the physical layout of the data in memory...
				o = strides2order( getStrides( x ) );
				if ( o === 1 ) {
					// Data is currently arranged in row-major order:
					opts.order = ROW_MAJOR;
				} else if ( o === 2 ) {
					// Data is currently arranged in column-major order:
					opts.order = COL_MAJOR;
				} else { // o === 0 || o === 3 (i.e., neither row- nor column-major || both row- and column-major
					// When the data is either both row- and column-major (e.g., a one-dimensional ndarray) or neither row- nor column-major (e.g., unordered strides), fallback to flattening according to the stated order of the input ndarray:
					opts.order = getOrder( x );
				}
			} else if ( options.order === 'same' ) {
				// When 'same', we want to flatten according to the stated order of the input ndarray:
				opts.order = getOrder( x );
			} else if ( isOrder( options.order ) ) {
				// When provided a specific order, flatten according to that order regardless of the order of the input ndarray:
				opts.order = options.order;
			} else {
				throw new TypeError( format( 'invalid option. `%s` option must be a recognized order. Option: `%s`.', 'order', options.order ) );
			}
		}
	}
	// Create an output ndarray having contiguous memory:
	y = emptyLike( x, {
		'shape': flattenShape( xsh, opts.depth ),
		'order': opts.order
	});

	// Create a view on top of output ndarray having the same shape as the input ndarray:
	st = ( xsh.length > 0 ) ? shape2strides( xsh, opts.order ) : [ 0 ];
	view = ndarray( getDType( y ), getData( y ), xsh, st, 0, opts.order );

	// Transform and assign elements to the output ndarray:
	map( [ x, view ], cb, ctx );
	return y;
}


// EXPORTS //

module.exports = flattenBy;
