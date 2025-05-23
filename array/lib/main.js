/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isArray = require( '@stdlib/assert/is-array' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var strides2order = require( './../../base/strides2order' );
var numel = require( './../../base/numel' );
var ndarray = require( './../../ctor' );
var isColumnMajor = require( './../../base/assert/is-column-major-string' );
var isDataType = require( './../../base/assert/is-data-type' );
var isOrder = require( './../../base/assert/is-order' );
var isCastingMode = require( './../../base/assert/is-casting-mode' );
var isAllowedCast = require( './../../base/assert/is-allowed-data-type-cast' );
var createBuffer = require( './../../base/buffer' );
var getBufferDType = require( './../../base/buffer-dtype' );
var getDType = require( './../../dtype' );
var getShape = require( './../../shape' );
var getStrides = require( './../../strides' );
var getOffset = require( './../../offset' );
var getOrder = require( './../../order' );
var getData = require( './../../data-buffer' );
var arrayShape = require( '@stdlib/array/shape' );
var flatten = require( '@stdlib/array/base/flatten' );
var format = require( '@stdlib/string/format' );
var isArrayLikeObject = require( './is_array_like_object.js' );
var getDefaults = require( './defaults.js' );
var castBuffer = require( './cast_buffer.js' );
var copyView = require( './copy_view.js' );
var expandShape = require( './expand_shape.js' );
var expandStrides = require( './expand_strides.js' );


// VARIABLES //

var defaults = getDefaults();


// MAIN //

/**
* Returns a multidimensional array.
*
* @param {(ArrayLikeObject|TypedArrayLike|Buffer|ndarrayLike)} [buffer] - data source
* @param {Options} [options] - function options
* @param {(ArrayLikeObject|TypedArrayLike|Buffer|ndarrayLike)} [options.buffer] - data source
* @param {string} [options.dtype="float64"] - underlying storage data type (if the input data is not of the same type, this option specifies the data type to which to cast the input data)
* @param {string} [options.order="row-major"] - specifies the memory layout of the array as either row-major (C-style) or column-major (Fortran-style)
* @param {NonNegativeIntegerArray} [options.shape] - array shape
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param {boolean} [options.copy=false] - boolean indicating whether to copy source data to a new data buffer
* @param {boolean} [options.flatten=true] - boolean indicating whether to automatically flatten generic array data sources
* @param {NonNegativeInteger} [options.ndmin=0] - minimum number of dimensions
* @param {string} [options.casting="safe"] - casting rule used to determine what constitutes an acceptable cast
* @param {boolean} [options.readonly=false] - boolean indicating if an array should be read-only
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide either an array shape, data source, or both
* @throws {Error} invalid cast
* @throws {RangeError} data source must be compatible with specified meta data
* @returns {ndarray} ndarray instance
*
* @example
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var v = arr.get( 0, 0 );
* // returns 1
*
* @example
* var opts = {
*     'dtype': 'generic',
*     'flatten': false
* };
*
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
* // returns <ndarray>
*
* var v = arr.get( 0 );
* // returns [ 1, 2 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var opts = {
*     'shape': [ 2, 2 ]
* };
*
* var arr = array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), opts );
* // returns <ndarray>
*
* var v = arr.get( 0, 0 );
* // returns 1.0
*/
function array() {
	var options;
	var strides;
	var buffer;
	var offset;
	var order;
	var dtype;
	var btype;
	var shape;
	var ndims;
	var nopts;
	var opts;
	var osh;
	var len;
	var ord;
	var FLG;

	if ( arguments.length === 1 ) {
		if ( isArrayLikeObject( arguments[ 0 ] ) ) {
			buffer = arguments[ 0 ];
			options = {};
		} else {
			options = arguments[ 0 ];
			if ( !isObject( options ) ) {
				throw new TypeError( format( 'invalid argument. Must provide either a valid data source, options argument, or both. Value: `%s`.', options ) );
			}
			if ( hasOwnProp( options, 'buffer' ) ) {
				buffer = options.buffer;
				if ( !isArrayLikeObject( buffer ) ) { // weak test
					throw new TypeError( format( 'invalid option. `%s` option must be an array-like object, typed-array-like, a Buffer, or an ndarray. Option: `%s`.', 'buffer', buffer ) );
				}
			}
		}
	} else {
		buffer = arguments[ 0 ];
		if ( !isArrayLikeObject( buffer ) ) { // weak test
			throw new TypeError( format( 'invalid option. Data source must be an array-like object, typed-array-like, a Buffer, or an ndarray. Value: `%s`.', buffer ) );
		}
		options = arguments[ 1 ];
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		// Note: we ignore whether `options` has a `buffer` property
	}
	if ( buffer ) {
		if ( isndarrayLike( buffer ) ) {
			btype = getDType( buffer );
			FLG = true;
		} else {
			btype = getBufferDType( buffer ) || 'generic'; // fallback to a "generic" dtype when provided, e.g., a generic accessor array as a data source
			FLG = false;
		}
	}
	nopts = {};
	opts = {};

	// Validate some options before others...
	if ( hasOwnProp( options, 'casting' ) ) {
		opts.casting = options.casting;
		if ( !isCastingMode( opts.casting ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a recognized casting mode. Option: `%s`.', 'casting', opts.casting ) );
		}
	} else {
		opts.casting = defaults.casting;
	}
	if ( hasOwnProp( options, 'flatten' ) ) {
		opts.flatten = options.flatten;
		if ( !isBoolean( opts.flatten ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'flatten', opts.flatten ) );
		}
	} else {
		opts.flatten = defaults.flatten;
	}
	if ( hasOwnProp( options, 'ndmin' ) ) {
		opts.ndmin = options.ndmin;
		if ( !isNonNegativeInteger( opts.ndmin ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', 'ndmin', opts.ndmin ) );
		}
		// TODO: validate that minimum number of dimensions does not exceed the maximum number of possible dimensions (in theory, infinite; in practice, determined by max array length; see https://github.com/stdlib-js/stdlib/blob/ac350059877c036640775d6b30d0e98e840d07cf/lib/node_modules/%40stdlib/ndarray/ctor/lib/main.js#L57)
	} else {
		opts.ndmin = defaults.ndmin;
	}

	// Validate the remaining options...
	if ( hasOwnProp( options, 'dtype' ) ) {
		dtype = options.dtype;
		if ( !isDataType( dtype ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a recognized data type. Option: `%s`.', 'dtype', dtype ) );
		}
		if ( btype && !isAllowedCast( btype, dtype, opts.casting ) ) {
			throw new Error( format( 'invalid option. Data type cast is not allowed. Casting mode: `%s`. From: `%s`. To: `%s`.', opts.casting, btype, dtype ) );
		}
	} else if ( btype ) { // btype !== void 0
		// TODO: reconcile difference in behavior when provided a generic array and no `dtype` option. Currently, we cast here, but do not allow casting a generic array (by default) when explicitly providing a `dtype` option.

		// Only cast generic array data sources when not provided an ndarray...
		if ( !FLG && btype === 'generic' ) {
			dtype = defaults.dtype;
		} else {
			dtype = btype;
		}
	} else {
		dtype = defaults.dtype;
	}
	if ( hasOwnProp( options, 'order' ) ) {
		order = options.order;
		if ( order === 'any' || order === 'same' ) {
			if ( FLG ) {
				// If the user indicated that "any" order suffices (meaning the user does not care about ndarray order), then we use the default order, unless the input ndarray is either unequivocally "row-major" or "column-major" or configured as such....
				if ( order === 'any' ) {
					// Compute the layout order in order to ascertain whether an ndarray can be considered both "row-major" and "column-major":
					ord = strides2order( getStrides( buffer ) );

					// If the ndarray can be considered both "row-major" and "column-major", then use the default order; otherwise, use the ndarray's stated layout order...
					if ( ord === 3 ) {
						order = defaults.order;
					} else {
						order = getOrder( buffer );
					}
				}
				// Otherwise, use the same order as the provided ndarray...
				else if ( order === 'same' ) {
					order = getOrder( buffer );
				}
			} else {
				order = defaults.order;
			}
		} else if ( !isOrder( order ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a recognized order. Option: `%s`.', 'order', order ) );
		}
	} else {
		order = defaults.order;
	}
	if ( hasOwnProp( options, 'mode' ) ) {
		nopts.mode = options.mode;
	} else {
		nopts.mode = defaults.mode;
	}
	if ( hasOwnProp( options, 'submode' ) ) {
		nopts.submode = options.submode;
	} else {
		nopts.submode = [ nopts.mode ];
	}
	if ( hasOwnProp( options, 'readonly' ) ) {
		nopts.readonly = options.readonly;
	} else {
		nopts.readonly = defaults.readonly;
	}
	if ( hasOwnProp( options, 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isBoolean( opts.copy ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'copy', opts.copy ) );
		}
	} else {
		opts.copy = defaults.copy;
	}
	// If not provided a shape, infer from a provided data source...
	if ( hasOwnProp( options, 'shape' ) ) {
		shape = options.shape;
		if ( !isArrayLikeObject( shape ) ) { // weak test
			throw new TypeError( format( 'invalid option. `%s` option must be an array-like object containing nonnegative integers. Option: `%s`.', 'shape', shape ) );
		}
		ndims = shape.length;
		len = numel( shape );
	} else if ( buffer ) {
		if ( FLG ) {
			shape = getShape( buffer );
			ndims = shape.length;
			len = numel( shape );
		} else if ( opts.flatten && isArray( buffer ) ) {
			shape = arrayShape( buffer );
			osh = shape; // cache a reference to the inferred shape
			ndims = shape.length;
			len = numel( shape );
		} else {
			ndims = 1;
			len = buffer.length;
			shape = [ len ]; // assume a 1-dimensional array (vector)
		}
	} else {
		throw new Error( 'invalid arguments. Must provide either a data source, array shape, or both.' );
	}
	// Adjust the array shape to satisfy the minimum number of dimensions...
	if ( ndims < opts.ndmin ) {
		shape = expandShape( ndims, shape, opts.ndmin );
		ndims = opts.ndmin;
	}
	// If not provided a data buffer, create it; otherwise, see if we need to cast a provided data buffer to another data type or perform a copy...
	if ( FLG ) {
		if ( numel( buffer.shape ) !== len ) {
			throw new RangeError( 'invalid arguments. Array shape is incompatible with provided data source. Number of data source elements does not match array shape.' );
		}
		if ( btype !== dtype || opts.copy ) {
			buffer = copyView( buffer, dtype );
		} else {
			strides = getStrides( buffer );
			offset = getOffset( buffer );
			buffer = getData( buffer );
			if ( strides.length < ndims ) {
				// Account for augmented dimensions (note: expanding the strides array to account for prepended singleton dimensions does **not** affect the index offset):
				strides = expandStrides( ndims, shape, strides, order );
			}
		}
	} else if ( buffer ) {
		if ( btype === 'generic' && opts.flatten && isArray( buffer ) ) {
			buffer = flatten( buffer, osh || arrayShape( buffer ), isColumnMajor( order ) );
		}
		if ( buffer.length !== len ) {
			throw new RangeError( 'invalid arguments. Array shape is incompatible with provided data source. Number of data source elements does not match array shape.' );
		}
		if ( btype !== dtype || opts.copy ) {
			buffer = castBuffer( buffer, len, dtype );
		}
	} else {
		buffer = createBuffer( dtype, len );
	}
	// If we have yet to determine array strides, we assume that we can compute the strides, along with the index offset, for a **contiguous** data source based solely on the array shape and specified memory layout order...
	if ( strides === void 0 ) {
		strides = shape2strides( shape, order );
		offset = strides2offset( shape, strides );
	}
	return new ndarray( dtype, buffer, shape, strides, offset, order, nopts );
}


// EXPORTS //

module.exports = array;
