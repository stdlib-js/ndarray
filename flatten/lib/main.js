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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
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
var assign = require( './../../base/assign' );
var ndarray = require( './../../base/ctor' );
var emptyLike = require( './../../empty-like' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var ROW_MAJOR = 'row-major';
var COL_MAJOR = 'column-major';


// MAIN //

/**
* Returns a flattened copy of an input ndarray.
*
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.depth] - maximum number of dimensions to flatten
* @param {string} [options.order='row-major'] - order in which input ndarray elements should be flattened
* @param {*} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
* // returns <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
*     'shape': [ 2, 3 ],
*     'order': 'column-major'
* });
* // returns <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
*     'shape': [ 2, 3 ],
*     'order': 'row-major'
* });
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'column-major'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
*     'shape': [ 2, 3 ],
*     'order': 'column-major'
* });
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'row-major'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
*     'shape': [ 2, 3 ],
*     'order': 'row-major'
* });
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'same'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
*     'shape': [ 2, 3 ],
*     'order': 'column-major'
* });
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'same'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -6, -2 ], 10, 'row-major' );
* // returns <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* // Create an ndarray whose stated order is column-major, but which has been transposed:
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -6, -2 ], 10, 'column-major' );
* // returns <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* // Create an ndarray whose stated order is column-major, but which has been transposed:
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -6, -2 ], 10, 'column-major' );
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'same'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 3.0, 5.0, 2.0, 4.0, 1.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* // Create an ndarray whose stated order is column-major, but which has been transposed:
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -6, -2 ], 10, 'column-major' );
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'any'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* // Create an ndarray whose stated order is row-major, but which has been transposed:
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -2, -4 ], 10, 'row-major' );
* // returns <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 4.0, 2.0, 5.0, 3.0, 1.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* // Create an ndarray whose stated order is row-major, but which has been transposed:
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -2, -4 ], 10, 'row-major' );
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'same'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 4.0, 2.0, 5.0, 3.0, 1.0 ]
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var xbuf = [ 1.0, null, 2.0, null, 3.0, null, 4.0, null, 5.0, null, 6.0, null ];
*
* // Create an ndarray whose stated order is row-major, but which has been transposed:
* var x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ -2, -4 ], 10, 'row-major' );
* // returns <ndarray>
*
* var y = flatten( x, {
*     'order': 'any'
* });
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ]
*/
function flatten( x, options ) {
	var view;
	var opts;
	var xsh;
	var st;
	var o;
	var y;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	xsh = getShape( x );

	// Define default options:
	opts = {
		'depth': xsh.length,    // by default, flatten to a one-dimensional ndarray
		'order': ROW_MAJOR,     // by default, flatten in lexicographic order (i.e., trailing dimensions first; e.g., if `x` is a matrix, flatten row-by-row)
		'dtype': getDType( x )
	};

	// Resolve function options...
	if ( arguments.length > 1 ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'depth' ) ) {
			if ( !isNonNegativeInteger( options.depth ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', 'depth', options.depth ) );
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
		if ( hasOwnProp( options, 'dtype' ) ) {
			// Delegate `dtype` validation to `emptyLike` during output array creation:
			opts.dtype = options.dtype;
		}
	}
	// Create an output ndarray having contiguous memory:
	y = emptyLike( x, {
		'shape': flattenShape( xsh, opts.depth ),
		'order': opts.order,
		'dtype': opts.dtype
	});

	// Create a view on top of the output ndarray having the same shape as the input ndarray:
	st = ( xsh.length > 0 ) ? shape2strides( xsh, opts.order ) : [ 0 ];
	view = new ndarray( opts.dtype, getData( y ), xsh, st, 0, opts.order );

	// Copy elements to the output ndarray:
	assign( [ x, view ] );

	return y;
}


// EXPORTS //

module.exports = flatten;
