/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import array = require( './../../array' );
import at = require( './../../at' );
import base = require( './../../base' );
import broadcastArray = require( './../../broadcast-array' );
import broadcastArrays = require( './../../broadcast-arrays' );
import castingModes = require( './../../casting-modes' );
import ndarray = require( './../../ctor' );
import dataBuffer = require( './../../data-buffer' );
import defaults = require( './../../defaults' );
import dispatch = require( './../../dispatch' );
import dtype = require( './../../dtype' );
import dtypes = require( './../../dtypes' );
import empty = require( './../../empty' );
import emptyLike = require( './../../empty-like' );
import FancyArray = require( './../../fancy' );
import fill = require( './../../fill' );
import fillBy = require( './../../fill-by' );
import filter = require( './../../filter' );
import filterMap = require( './../../filter-map' );
import flag = require( './../../flag' );
import flags = require( './../../flags' );
import forEach = require( './../../for-each' );
import scalar2ndarray = require( './../../from-scalar' );
import ind2sub = require( './../../ind2sub' );
import ndindex = require( './../../index' );
import indexModes = require( './../../index-modes' );
import iter = require( './../../iter' );
import map = require( './../../map' );
import maybeBroadcastArray = require( './../../maybe-broadcast-array' );
import maybeBroadcastArrays = require( './../../maybe-broadcast-arrays' );
import minDataType = require( './../../min-dtype' );
import mostlySafeCasts = require( './../../mostly-safe-casts' );
import ndarraylike2ndarray = require( './../../ndarraylike2ndarray' );
import ndims = require( './../../ndims' );
import nextDataType = require( './../../next-dtype' );
import numel = require( './../../numel' );
import numelDimension = require( './../../numel-dimension' );
import offset = require( './../../offset' );
import order = require( './../../order' );
import orders = require( './../../orders' );
import outputDataTypePolicies = require( './../../output-dtype-policies' );
import promotionRules = require( './../../promotion-rules' );
import reject = require( './../../reject' );
import safeCasts = require( './../../safe-casts' );
import sameKindCasts = require( './../../same-kind-casts' );
import shape = require( './../../shape' );
import slice = require( './../../slice' );
import ndsliceAssign = require( './../../slice-assign' );
import sliceDimension = require( './../../slice-dimension' );
import sliceDimensionFrom = require( './../../slice-dimension-from' );
import sliceDimensionTo = require( './../../slice-dimension-to' );
import sliceFrom = require( './../../slice-from' );
import sliceTo = require( './../../slice-to' );
import stride = require( './../../stride' );
import strides = require( './../../strides' );
import sub2ind = require( './../../sub2ind' );
import ndarray2array = require( './../../to-array' );
import ndarray2json = require( './../../to-json' );
import zeros = require( './../../zeros' );
import zerosLike = require( './../../zeros-like' );

/**
* Interface describing the `ndarray` namespace.
*/
interface Namespace {
	/**
	* Returns a multidimensional array.
	*
	* @param buffer - data source
	* @param options - function options
	* @param options.buffer - data source
	* @param options.dtype - underlying storage data type (if the input data is not of the same type, this option specifies the data type to which to cast the input data) (default: 'float64')
	* @param options.order - specifies the memory layout of the array as either row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @param options.shape - array shape
	* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
	* @param options.copy - boolean indicating whether to copy source data to a new data buffer (default: false)
	* @param options.flatten - boolean indicating whether to automatically flatten generic array data sources (default: true)
	* @param options.ndmin - minimum number of dimensions (default: 0)
	* @param options.casting - casting rule used to determine what constitutes an acceptable cast (default: 'safe')
	* @param options.readonly - boolean indicating whether an array should be read-only
	* @throws must provide valid options
	* @throws must provide either an array shape, data source, or both
	* @throws invalid cast
	* @throws data source must be compatible with specified meta data
	* @returns ndarray instance
	*
	* @example
	* var arr = ns.array( [ [ 1, 2 ], [ 3, 4 ] ] );
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
	* var arr = ns.array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
	* // returns <ndarray>
	*
	* var v = arr.get( 0 );
	* // returns [ 1, 2 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/ns.array/float64' );
	*
	* var opts = {
	*     'shape': [ 2, 2 ]
	* };
	*
	* var arr = ns.array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), opts );
	* // returns <ndarray>
	*
	* var v = arr.get( 0, 0 );
	* // returns 1.0
	*/
	array: typeof array;

	/**
	* Returns an ndarray element.
	*
	* ## Notes
	*
	* -   The number of index arguments must equal the number of ndarray dimensions.
	* -   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.
	* -   If provided out-of-bounds indices, the function always returns `undefined`.
	*
	* @param x - input ndarray
	* @param indices - index arguments
	* @returns ndarray element
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 3, 3 ], {
	*     'dtype': 'generic'
	* });
	* // returns <ndarray>
	*
	* var v = ns.at( x, 0, 0 );
	* // returns 0
	*
	* v = ns.at( x, 5, 5 );
	* // returns undefined
	*/
	at: typeof at;

	/**
	* Base ndarray.
	*/
	base: typeof base;

	/**
	* Broadcasts an ndarray to a specified shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
	* -   The returned array is a **read-only** view on the input array data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the input array may affect multiple elements. If you need to write to the input array, copy the input array before broadcasting.
	* -   The function always returns a new ndarray instance even if the input ndarray shape and the desired shape are the same.
	*
	* @param x - input array
	* @param shape - desired shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
	* @returns broadcasted array
	*
	* @example
	* var array = require( './../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.broadcastArray( x, [ 3, 2, 2 ] );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var v = y.get( 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0, 0 );
	* // returns 1
	*
	* v = y.get( 1, 1, 0 );
	* // returns 3
	*
	* v = y.get( 2, 0, 0 );
	* // returns 1
	*
	* v = y.get( 2, 1, 1 );
	* // returns 4
	*/
	broadcastArray: typeof broadcastArray;

	/**
	* Broadcasts ndarrays to a common shape.
	*
	* ## Notes
	*
	* -   The function throws an error if provided broadcast-incompatible ndarrays.
	* -   The returned arrays are **read-only** views on their respective underlying array data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to an input array, copy the array before broadcasting.
	* -   The function always returns new ndarray instances even if an input ndarray shape and the broadcasted shape are the same.
	*
	* @param arrays - input arrays
	* @throws input arrays must be broadcast compatible
	* @returns list of broadcasted arrays
	*
	* @example
	* var array = require( './../../array' );
	* var zeros = require( './../../zeros' );
	*
	* var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x1.shape;
	* // returns [ 2, 2 ]
	*
	* var y1 = zeros( [ 3, 2, 2 ] );
	* // returns <ndarray>
	*
	* var shy = y1.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var out = ns.broadcastArrays( [ x1, y1 ] );
	* // returns <ndarray>
	*
	* var x2 = out[ 0 ];
	* // returns <ndarray>
	*
	* var y2 = out[ 1 ];
	* // returns <ndarray>
	*
	* shx = x2.shape;
	* // returns [ 3, 2, 2 ]
	*
	* shy = y2.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var v = x2.get( 0, 0, 0 );
	* // returns 1
	*
	* v = x2.get( 0, 0, 1 );
	* // returns 2
	*
	* v = x2.get( 1, 0, 0 );
	* // returns 1
	*
	* v = x2.get( 1, 1, 0 );
	* // returns 3
	*
	* v = x2.get( 2, 0, 0 );
	* // returns 1
	*
	* v = x2.get( 2, 1, 1 );
	* // returns 4
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 2, 2 ] );
	* // returns <ndarray>
	*
	* var y = zeros( [ 4, 2 ] );
	* // returns <ndarray>
	*
	* var out = ns.broadcastArrays( [ x, y ] );
	* // throws <Error>
	*/
	broadcastArrays: typeof broadcastArrays;

	/**
	* Returns a list of ndarray casting modes.
	*
	* ## Notes
	*
	* -   The output array contains the following modes:
	*
	*     -   'none': only allow casting between identical types
	*     -   'equiv': allow casting between identical and byte swapped types
	*     -   'safe': only allow "safe" casts
	*     -   'mostly-safe': allow "safe" casts and, for floating-point data types, downcasts
	*     -   'same-kind': allow "safe" casts and casts within the same kind (e.g.,
	*    between signed integers or between floats)
	*     -   'unsafe': allow casting between all types (including between integers and
	*    floats)
	*
	* @returns list of ndarray casting modes
	*
	* @example
	* var list = ns.castingModes();
	* // returns [ 'none', 'equiv', 'safe', 'mostly-safe', 'same-kind', 'unsafe' ]
	*/
	castingModes: typeof castingModes;

	/**
	* ndarray constructor.
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param options - function options
	* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
	* @param options.readonly - specifies whether an array should be read-only (default: false)
	* @throws `buffer` argument `get` and `set` properties must be functions
	* @throws `shape` argument must be an array-like object containing nonnegative integers
	* @throws `shape` argument length must equal the number of dimensions
	* @throws `strides` argument must be an array-like object containing integers
	* @throws `strides` argument length must equal the number of dimensions (except for zero-dimensional arrays; in which case, the `strides` argument length must be equal to `1`)
	* @throws for zero-dimensional ndarrays, the `strides` argument must contain a single element equal to `0`
	* @throws `offset` argument must be a nonnegative integer
	* @throws `buffer` argument must be compatible with specified meta data
	* @throws must provide valid options
	* @throws too many dimensions
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	ndarray: typeof ndarray;

	/**
	* Returns the underlying data buffer of a provided ndarray.
	*
	* @param x - input ndarray
	* @returns underlying data buffer
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 3, 3, 3 ], {
	*     'dtype': 'float64'
	* });
	*
	* var out = ns.dataBuffer( x );
	* // returns <Float64Array>
	*/
	dataBuffer: typeof dataBuffer;

	/**
	* Returns default ndarray settings.
	*
	* @returns default settings
	*
	* @example
	* var o = ns.defaults();
	* // returns {...}
	*
	* @example
	* var v = ns.defaults.get( 'order' );
	* // returns <string>
	*/
	defaults: typeof defaults;

	/**
	* Returns an ndarray function interface which performs multiple dispatch.
	*
	* @param fcns - list of ndarray functions
	* @param types - one-dimensional list of ndarray argument data types
	* @param data - ndarray function data (e.g., callbacks)
	* @param nargs - total number of ndarray function interface arguments
	* @param nin - number of input ndarrays
	* @param nout - number of output ndarrays
	* @throws first argument must be either a function or an array of functions
	* @throws second argument must be an array-like object
	* @throws third argument must be an array-like object or `null`
	* @throws third and first arguments must have the same number of elements
	* @throws fourth argument must be a positive integer
	* @throws fifth argument must be a nonnegative integer
	* @throws sixth argument must be a nonnegative integer
	* @throws fourth argument must equal the specified number of input and output arrays
	* @throws number of types must match the number of functions times the total number of array arguments for each function
	* @throws interface must accept at least one input and/or output ndarray
	* @returns ndarray function interface
	*
	* @example
	* var unary = require( './../../base/unary' );
	* var abs = require( '@stdlib/math/base/special/abs' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../ctor' );
	*
	* var types = [
	*     'float64', 'float64'
	* ];
	*
	* var data = [
	*     abs
	* ];
	*
	* var fcn = ns.dispatch( unary, types, data, 2, 1, 1 );
	*
	* // ...
	*
	* var xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
	* var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
	*
	* fcn( x, y );
	* // ybuf => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dispatch: typeof dispatch;

	/**
	* Returns the data type of a provided ndarray.
	*
	* @param x - input ndarray
	* @returns data type
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 3, 3, 3 ], {
	*     'ns.dtype': 'float64'
	* });
	*
	* var dt = ns.dtype( x );
	* // returns 'float64'
	*/
	dtype: typeof dtype;

	/**
	* Returns a list of ndarray data types.
	*
	* @param kind - data type kind
	* @returns list of ndarray data types
	*
	* @example
	* var list = ns.dtypes();
	* // returns [...]
	*
	* @example
	* var list = ns.dtypes( 'floating_point' );
	* // returns [...]
	*/
	dtypes: typeof dtypes;

	/**
	* Creates an uninitialized array having a specified shape and data type.
	*
	* @param shape - array shape
	* @param options - options
	* @param options.dtype - underlying data type (default: 'float64')
	* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
	* @returns zero-filled array
	*
	* @example
	* var arr = ns.empty( [ 2, 2 ] );
	* // returns <ndarray>
	*
	* var sh = arr.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = arr.dtype;
	* // returns 'float64'
	*/
	empty: typeof empty;

	/**
	* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
	*
	* @param x - input array
	* @param options - options
	* @param options.dtype - output array data type
	* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
	* @param options.shape - output array shape
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
	* @returns output array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 2, 2 ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var y = ns.emptyLike( x );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* dt = y.dtype;
	* // returns 'generic'
	*/
	emptyLike: typeof emptyLike;

	/**
	* Fancy array constructor.
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param options - function options
	* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
	* @param options.readonly - specifies whether an array should be read-only (default: false)
	* @throws `buffer` argument `get` and `set` properties must be functions
	* @throws `shape` argument must be an array-like object containing nonnegative integers
	* @throws `shape` argument length must equal the number of dimensions
	* @throws `strides` argument must be an array-like object containing integers
	* @throws `strides` argument length must equal the number of dimensions (except for zero-dimensional arrays; in which case, the `strides` argument length must be equal to `1`)
	* @throws for zero-dimensional ndarrays, the `strides` argument must contain a single element equal to `0`
	* @throws `offset` argument must be a nonnegative integer
	* @throws `buffer` argument must be compatible with specified meta data
	* @throws must provide valid options
	* @throws too many dimensions
	* @returns an ndarray
	*
	* @example
	* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = new ns.FancyArray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	FancyArray: typeof FancyArray;

	/**
	* Fills an input ndarray with a specified value.
	*
	* ## Notes
	*
	* -   A `value` must be able to safely cast to the input ndarray data type. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input ndarray).
	*
	* @param x - input ndarray
	* @param value - scalar value
	* @returns input ndarray
	*
	* @example
	* var zeros = require( './../../zeros' );
	* var getData = require( './../../data-buffer' );
	*
	* var x = zeros( [ 3, 1, 2 ], {
	*     'dtype': 'float64'
	* });
	*
	* ns.fill( x, 10.0 );
	*
	* console.log( getData( x ) );
	* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
	*/
	fill: typeof fill;

	/**
	* Fills an input ndarray according to a callback function.
	*
	* @param x - input ndarray
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @returns input ndarray
	*
	* @example
	* var zeros = require( './../../zeros' );
	* var getData = require( './../../data-buffer' );
	*
	* function fcn() {
	*     return 10.0;
	* }
	*
	* var x = zeros( [ 3, 1, 2 ], {
	*     'dtype': 'float64'
	* });
	*
	* ns.fillBy( x, fcn );
	*
	* console.log( getData( x ) );
	* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
	*/
	fillBy: typeof fillBy;

	/**
	* Returns a shallow copy of an ndarray containing only those elements which pass a test implemented by a predicate function.
	*
	* @param x - input ndarray
	* @param options - options
	* @param options.dtype - output ndarray data type
	* @param options.order - iteration order
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var shape = [ 2, 3 ];
	* var strides = [ 6, 1 ];
	* var offset = 1;
	*
	* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var y = ns.filter( x, opts, isEven );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ 2.0, 4.0, 8.0, 10.0 ]
	*/
	filter: typeof filter;

	/**
	* Filters and maps elements in an input ndarray to elements in a new output ndarray according to a callback function.
	*
	* @param x - input ndarray
	* @param options - options
	* @param options.dtype - output ndarray data type
	* @param options.order - iteration order
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* function scale( z ) {
	*     if ( z > 5.0 ) {
	*         return z * 10.0;
	*     }
	* }
	*
	* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var shape = [ 2, 3 ];
	* var strides = [ 6, 1 ];
	* var offset = 1;
	*
	* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var y = ns.filterMap( x, opts, scale );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ 80.0, 90.0, 100.0 ]
	*/
	filterMap: typeof filterMap;

	/**
	* Returns a specified flag for a provided ndarray.
	*
	* @param x - input ndarray
	* @param name - flag name
	* @returns flag value
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var o = ns.flag( zeros( [ 3, 3, 3 ] ), 'READONLY' );
	* // returns <boolean>
	*/
	flag: typeof flag;

	/**
	* Returns the flags of a provided ndarray.
	*
	* @param x - input ndarray
	* @returns flags
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var o = ns.flags( zeros( [ 3, 3, 3 ] ) );
	* // returns {...}
	*/
	flags: typeof flags;

	/**
	* Invokes a callback function once for each ndarray element.
	*
	* @param x - input ndarray
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	*
	* @example
	* var ndarray = require( './../../ctor' );
	* var naryFunction = require( '@stdlib/utils/nary-function' );
	* var log = require( '@stdlib/console/log' );
	*
	* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
	* var shape = [ 2, 3 ];
	* var strides = [ 3, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* // Apply the callback function:
	* ns.forEach( x, naryFunction( log, 1 ) );
	*/
	forEach: typeof forEach;

	/**
	* Returns a zero-dimensional ndarray containing a provided scalar value.
	*
	* ## Notes
	*
	* -   If a `dtype` option is not provided and `value`
	*
	*     -   is a number, the default data type is the default real-valued floating-point data type.
	*     -   is a boolean, the default data type is the default boolean data type.
	*     -   is a complex number object of a known complex data type, the data type is the same as the provided value.
	*     -   is a complex number object of an unknown complex data type, the default data type is the default complex-valued floating-point data type.
	*     -   is any other value type, the default data type is `'generic'`.
	*
	* @param value - scalar value
	* @param options - options
	* @returns zero-dimensional ndarray
	*
	* @example
	* var x = ns.scalar2ndarray( 1.0, {
	*     'dtype': generic'
	* });
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns []
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var v = x.get();
	* // returns 1.0
	*/
	scalar2ndarray: typeof scalar2ndarray;

	/**
	* Converts a linear index to an array of subscripts.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   **throw**: throw an error when a linear index exceeds array dimensions.
	*     -   **normalize**: normalize negative linear indices and throw an error when a linear index exceeds array dimensions.
	*     -   **wrap**: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   **clamp**: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	* @param shape - array shape
	* @param idx - linear index
	* @param options - function options
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions (default: 'throw')
	* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @throws shape argument must be an array-like object containing nonnegative integers
	* @throws must provide valid options
	* @throws must provide a linear index which does not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var s = ns.ind2sub( [ 3, 3, 3 ], 17 );
	* // returns [ 1, 2, 2 ]
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var out = [ 0, 0, 0 ];
	*
	* var s = ns.ind2sub.assign( shape, 17, out );
	* // returns [ 1, 2, 2 ]
	*
	* var bool = ( s === out );
	* // returns true
	*/
	ind2sub: typeof ind2sub;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../array' );
	*
	* var x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = new ns.ndindex( x );
	* // returns <ns.ndindex>
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ns.ndindex.cartesianIndex( x );
	* // returns <ns.ndindex>
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ns.ndindex.linearIndex( x );
	* // returns <ns.ndindex>
	*/
	ndindex: typeof ndindex;

	/**
	* Returns a list of ndarray index modes.
	*
	* ## Notes
	*
	* -   The output array contains the following modes:
	*
	*     -   **throw**: specifies that a function should throw an error when an index is
	*     outside a restricted interval.
	*     -   **normalize**: specifies that a function should normalize negative indices and throw an error when an index is outside a restricted interval.
	*     -   **wrap**: specifies that a function should wrap around an index using modulo
	*     arithmetic.
	*     -   **clamp**: specifies that a function should set an index less than zero to
	*     zero (minimum index) and set an index greater than a maximum index value to
	*     the maximum possible index.
	*
	* @returns list of ndarray index modes
	*
	* @example
	* var list = ns.indexModes();
	* // returns [ 'throw', 'normalize', 'clamp', 'wrap' ]
	*/
	indexModes: typeof indexModes;

	/**
	* Multidimensional array iterators.
	*/
	iter: typeof iter;

	/**
	* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
	*
	* @param x - input ndarray
	* @param options - options
	* @param options.dtype - output ndarray data type
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* function scale( z ) {
	*     return z * 10.0;
	* }
	*
	* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var shape = [ 2, 3 ];
	* var strides = [ 6, 1 ];
	* var offset = 1;
	*
	* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var y = ns.map( x, opts, scale );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
	*/
	map: typeof map;

	/**
	* Broadcasts an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
	* -   If a provided ndarray has the same shape as the specified shape, the function returns the provided ndarray.
	* -   If a provided ndarray has a different (broadcast compatible) shape than the specified shape, the function returns a new **read-only** ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the input array may affect multiple elements. If you need to write to the input array, copy the array before broadcasting.
	*
	* @param x - input array
	* @param shape - desired shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
	* @throws input array and desired shape must be broadcast compatible
	* @returns broadcasted array
	*
	* @example
	* var array = require( './../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.maybeBroadcastArray( x, [ 3, 2, 2 ] );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var v = y.get( 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0, 0 );
	* // returns 1
	*
	* v = y.get( 1, 1, 0 );
	* // returns 3
	*
	* v = y.get( 2, 0, 0 );
	* // returns 1
	*
	* v = y.get( 2, 1, 1 );
	* // returns 4
	*/
	maybeBroadcastArray: typeof maybeBroadcastArray;

	/**
	* Broadcasts ndarrays to a common shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided broadcast-incompatible ndarrays.
	* -   If a provided ndarray has a shape matching the common shape, the function returns the provided ndarray.
	* -   If a provided ndarray has a different (broadcast compatible) shape than the common shape, the function returns a new **read-only** ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to an input array, copy the array before broadcasting.
	*
	* @param arrays - input arrays
	* @throws input arrays must be broadcast compatible
	* @returns list of broadcasted arrays
	*
	* @example
	* var array = require( './../../array' );
	* var zeros = require( './../../zeros' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y1 = zeros( [ 3, 2, 2 ] );
	* // returns <ndarray>
	*
	* var shy = y1.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var out = ns.maybeBroadcastArrays( x, y );
	* // returns <ndarray>
	*
	* var x2 = out[ 0 ];
	* // returns <ndarray>
	*
	* var y2 = out[ 1 ];
	* // returns <ndarray>
	*
	* shx = x2.shape;
	* // returns [ 3, 2, 2 ]
	*
	* shy = y2.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var v = x2.get( 0, 0, 0 );
	* // returns 1
	*
	* v = x2.get( 0, 0, 1 );
	* // returns 2
	*
	* v = x2.get( 1, 0, 0 );
	* // returns 1
	*
	* v = x2.get( 1, 1, 0 );
	* // returns 3
	*
	* v = x2.get( 2, 0, 0 );
	* // returns 1
	*
	* v = x2.get( 2, 1, 1 );
	* // returns 4
	*/
	maybeBroadcastArrays: typeof maybeBroadcastArrays;

	/**
	* Returns the minimum ndarray data type of the closest "kind" necessary for storing a provided scalar value.
	*
	* @param value - scalar value
	* @returns ndarray data type
	*
	* @example
	* var dt = ns.minDataType( 3.141592653589793 );
	* // returns 'float32'
	*
	* @example
	* var dt = ns.minDataType( 3 );
	* // returns 'uint8'
	*/
	minDataType: typeof minDataType;

	/**
	* Returns a list of ndarray data types to which a provided ndarray data type can be safely cast and, for floating-point data types, can be downcast.
	*
	* ## Notes
	*
	* -   If not provided an ndarray data type, the function returns a casting table.
	* -   If provided an unrecognized ndarray data type, the function returns `null`.
	*
	* @param dtype - ndarray data type value
	* @returns list of ndarray data types or null
	*
	* @example
	* var list = ns.mostlySafeCasts( 'float32' );
	* // returns [...]
	*/
	mostlySafeCasts: typeof mostlySafeCasts;

	/**
	* Converts an ndarray-like object to an ndarray.
	*
	* ## Notes
	*
	* -   If provided a read-only ndarray, the function returns a read-only ndarray.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
	* @param options.readonly - specifies whether an array should be read-only
	* @returns ndarray
	*
	* @example
	* var array = require( './../../array' );
	*
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
	*
	* var out = ns.ndarraylike2ndarray( x );
	* // returns <ndarray>
	*/
	ndarraylike2ndarray: typeof ndarraylike2ndarray;

	/**
	* Returns the number of ndarray dimensions.
	*
	* @param x - input ndarray
	* @returns number of dimensions
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var n = ns.ndims( zeros( [ 3, 3, 3 ] ) );
	* // returns 3
	*/
	ndims: typeof ndims;

	/**
	* Returns the next larger ndarray data type of the same kind.
	*
	* ## Notes
	*
	* -   If not provided a data type, the function returns a table.
	* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
	* -   If provided an unrecognized data type, the function returns `null`.
	*
	* @param dtype - ndarray data type value
	* @returns next larger data type(s) or null
	*
	* @example
	* var dt = ns.nextDataType( 'float32' );
	* // returns 'float64'
	*/
	nextDataType: typeof nextDataType;

	/**
	* Returns the number of elements in an ndarray.
	*
	* @param x - input ndarray
	* @returns number of elements
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var n = ns.numel( zeros( [ 3, 3, 3 ] ) );
	* // returns 27
	*/
	numel: typeof numel;

	/**
	* Returns the size (i.e., number of elements) of a specified dimension for a provided ndarray.
	*
	* @param x - input ndarray
	* @param dim - dimension index
	* @returns dimension size
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var d = ns.numelDimension( zeros( [ 4, 2, 3 ] ), 0 );
	* // returns 4
	*/
	numelDimension: typeof numelDimension;

	/**
	* Returns the index offset specifying the underlying buffer index of the first iterated ndarray element.
	*
	* @param x - input ndarray
	* @returns index offset
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var n = ns.offset( zeros( [ 3, 3, 3 ] ) );
	* // returns 0
	*/
	offset: typeof offset;

	/**
	* Returns the layout order of a provided ndarray.
	*
	* ## Notes
	*
	* -   If unable to resolve a layout order, the function returns `null`.
	*
	* @param x - input ndarray
	* @returns layout order (or null)
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 3, 3, 3 ], {
	*     'ns.order': 'row-major'
	* });
	*
	* var o = ns.order( x );
	* // returns 'row-major'
	*/
	order: typeof order;

	/**
	* Returns a list of ndarray orders.
	*
	* ## Notes
	*
	* -   The output array contains the following orders:
	*
	*     -   row-major: row-major (C-style) order.
	*     -   column-major: column-major (Fortran-style) order.
	*
	* @returns list of ndarray orders
	*
	* @example
	* var list = ns.orders();
	* // e.g., returns [ 'row-major', 'column-major' ]
	*/
	orders: typeof orders;

	/**
	* Returns a list of output ndarray data type policies.
	*
	* ## Notes
	*
	* -   The output array contains the following data type policies:
	*
	*     -   `same`: return the same data type.
	*     -   `promoted`: return a promoted data type.
	*     -   `boolean`: return a boolean data type.
	*     -   `boolean_and_generic`: return a boolean or "generic" data type.
	*     -   `signed_integer`: return a signed integer data type.
	*     -   `signed_integer_and_generic`: return a signed integer or "generic" data type.
	*     -   `unsigned_integer`: return an unsigned integer data type.
	*     -   `unsigned_integer_and_generic`: return an unsigned integer or "generic" data type.
	*     -   `integer`: return an integer data type (i.e., either signed or unsigned).
	*     -   `integer_and_generic`: return an integer (i.e., either signed or unsigned) or "generic" data type.
	*     -   `floating_point`: return a floating-point data type (i.e., either real-valued or complex-valued).
	*     -   `floating_point_and_generic`: return a floating-point (i.e., either real-valued or complex-valued) or "generic" data type.
	*     -   `real_floating_point`: return a real-valued floating-point data type.
	*     -   `real_floating_point_and_generic`: return a real-valued or "generic" floating-point data type.
	*     -   `complex_floating_point`: return a complex-valued floating-point data type.
	*     -   `complex_floating_point_and_generic`: return a complex-valued or "generic" floating-point data type.
	*     -   `real`: return a real-valued data type.
	*     -   `real_and_generic`: return a real-valued or "generic" data type.
	*     -   `numeric`: return a numeric data type.
	*     -   `numeric_and_generic`: return a numeric or "generic" data type.
	*     -   `default`: return the default data type.
	*
	* @returns list of data type policies
	*
	* @example
	* var list = ns.outputDataTypePolicies();
	* // returns [...]
	*/
	outputDataTypePolicies: typeof outputDataTypePolicies;

	/**
	* Returns a type promotion table displaying the ndarray data types with the smallest size and closest "kind" to which ndarray data types can be safely cast.
	*
	* @returns promotion rule table
	*
	* @example
	* var table = ns.promotionRules();
	* // returns {...}
	*/
	promotionRules: typeof promotionRules;

	/**
	* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
	*
	* @param x - input ndarray
	* @param options - options
	* @param options.dtype - output ndarray data type
	* @param options.order - iteration order
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var shape = [ 2, 3 ];
	* var strides = [ 6, 1 ];
	* var offset = 1;
	*
	* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var y = ns.reject( x, opts, isOdd );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ 2.0, 4.0, 8.0, 10.0 ]
	*/
	reject: typeof reject;

	/**
	* Returns a list of ndarray data types to which a provided ndarray data type can be safely cast.
	*
	* ## Notes
	*
	* -   If not provided an ndarray data type, the function returns a casting table.
	* -   If provided an unrecognized ndarray data type, the function returns `null`.
	*
	* @param dtype - ndarray data type value
	* @returns list of ndarray data types or null
	*
	* @example
	* var list = ns.safeCasts( 'float32' );
	* // returns [...]
	*/
	safeCasts: typeof safeCasts;

	/**
	* Returns a list of ndarray data types to which a provided ndarray data type can be safely cast or cast within the same "kind".
	*
	* ## Notes
	*
	* -   If not provided an ndarray data type, the function returns a casting table.
	* -   If provided an unrecognized ndarray data type, the function returns `null`.
	*
	* @param dtype - ndarray data type value
	* @returns list of ndarray data types or null
	*
	* @example
	* var list = ns.sameKindCasts( 'float32' );
	* // returns [...]
	*/
	sameKindCasts: typeof sameKindCasts;

	/**
	* Returns the shape of a provided ndarray.
	*
	* @param x - input ndarray
	* @returns shape
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var sh = ns.shape( zeros( [ 3, 3, 3 ] ) );
	* // returns [ 3, 3, 3 ]
	*/
	shape: typeof shape;

	/**
	* Returns a read-only view of an input ndarray.
	*
	* @param x - input array
	* @param slices - slice arguments
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/ns.slice/ctor' );
	* var MultiSlice = require( '@stdlib/ns.slice/multi' );
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* var s0 = new Slice( null, null, -2 );
	* var s1 = new Slice( null, null, -1 );
	*
	* var y = ns.slice( x, s0, s1 );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 6, 5 ], [ 2, 1 ] ]
	*/
	slice: typeof slice;

	/**
	* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
	*
	* ## Notes
	*
	* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
	* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
	*
	* @param x - input array
	* @param y - output array
	* @param slices - slice arguments
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/slice/ctor' );
	* var MultiSlice = require( '@stdlib/slice/multi' );
	* var ndarray = require( './../../ctor' );
	* var ndzeros = require( './../../zeros' );
	* var ndarray2array = require( './../../to-array' );
	*
	* // Define an input array:
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* // Define an output array:
	* var y = ndzeros( [ 2, 3, 2 ], {
	*     'dtype': x.dtype
	* });
	*
	* // Create a slice:
	* var s0 = null;
	* var s1 = new Slice( null, null, -1 );
	* var s2 = new Slice( null, null, -1 );
	* // returns <MultiSlice>
	*
	* // Perform assignment:
	* var out = ns.ndsliceAssign( x, y, s0, s1, s2 );
	* // returns <ndarray>
	*
	* var bool = ( out === y );
	* // returns true
	*
	* arr = ndarray2array( y );
	* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
	*/
	ndsliceAssign: typeof ndsliceAssign;

	/**
	* Returns a read-only view of an input ndarray when sliced along a specified dimension.
	*
	* @param x - input array
	* @param dim - index of dimension to slice
	* @param s - slice object or an integer
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/slice/ctor' );
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* var s = new Slice( null, null, -1 );
	* // returns <Slice>
	*
	* var y = ns.sliceDimension( x, 0, s );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]
	*/
	sliceDimension: typeof sliceDimension;

	/**
	* Returns a read-only shifted view of an input ndarray along a specified dimension.
	*
	* @param x - input array
	* @param dim - index of dimension to slice
	* @param start - starting index (inclusive)
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* var y = ns.sliceDimensionFrom( x, 0, 1 );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 3, 4 ], [ 5, 6 ] ]
	*/
	sliceDimensionFrom: typeof sliceDimensionFrom;

	/**
	* Returns a read-only truncated view of an input ndarray along a specified dimension.
	*
	* @param x - input array
	* @param dim - index of dimension to slice
	* @param stop - ending index (exclusive)
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* var y = ns.sliceDimensionTo( x, 0, 2 );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*/
	sliceDimensionTo: typeof sliceDimensionTo;

	/**
	* Returns a read-only shifted view of an input ndarray.
	*
	* @param x - input array
	* @param start - starting indices (inclusive)
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* var y = ns.sliceFrom( x, 1, null );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 3, 4 ], [ 5, 6 ] ]
	*/
	sliceFrom: typeof sliceFrom;

	/**
	* Returns a read-only truncated view of an input ndarray.
	*
	* @param x - input array
	* @param stop - ending indices (exclusive)
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../ctor' );
	* var ndarray2array = require( './../../to-array' );
	*
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* var y = ns.sliceTo( x, 2, null );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*/
	sliceTo: typeof sliceTo;

	/**
	* Returns the stride along a specified dimension for a provided ndarray.
	*
	* ## Notes
	*
	* -   A "stride" is the linear distance (i.e., number of elements) between adjacent elements along a specified dimension.
	*
	* @param x - input ndarray
	* @param dim - dimension index
	* @returns stride
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var st = ns.stride( zeros( [ 3, 3, 3 ] ), 0 );
	* // returns 9
	*/
	stride: typeof stride;

	/**
	* Returns the strides of a provided ndarray.
	*
	* @param x - input ndarray
	* @returns strides
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var sh = ns.strides( zeros( [ 3, 3, 3 ] ) );
	* // returns [ 9, 3, 1 ]
	*/
	strides: typeof strides;

	/**
	* Converts subscripts to a linear index.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   **throw**: throw an error when a subscript exceeds array dimensions.
	*     -   **normalize**: normalize negative subscripts and throw an error when a subscript exceeds array dimensions.
	*     -   **wrap**: wrap around subscripts exceeding array dimensions using modulo arithmetic.
	*     -   **clamp**: set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.
	*
	* -   If provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
	*
	* @param shape - array shape
	* @param args - subscripts followed by an optional options object
	* @throws first argument must be an array-like object containing nonnegative integers
	* @throws subscripts must be integer valued
	* @throws must provide valid options
	* @throws must provide subscripts which do not exceed array dimensions
	* @throws number of subscripts much match the number of dimensions
	* @returns linear index
	*
	* @example
	* var i = ns.sub2ind( [ 3, 3, 3 ], 1, 2, 2 );
	* // returns 17
	*/
	sub2ind: typeof sub2ind;

	/**
	* Converts an ndarray to a generic array (which may include nested arrays).
	*
	* @param x - input ndarray
	* @returns array (which may include nested arrays)
	*
	* @example
	* var array = require( './../../array' );
	*
	* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* var out = ns.ndarray2array( arr );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*/
	ndarray2array: typeof ndarray2array;

	/**
	* Serializes an ndarray as a JSON object.
	*
	* ## Notes
	*
	* -   The function does **not** serialize data outside of the buffer region defined by the ndarray view.
	*
	* @param x - input ndarray
	* @returns JSON object
	*
	* @example
	* var array = require( './../../array' );
	*
	* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
	* // returns <ndarray>
	*
	* var o = ns.ndarray2json( x );
	* // returns {...}
	*/
	ndarray2json: typeof ndarray2json;

	/**
	* Creates a zero-filled array having a specified shape and data type.
	*
	* @param shape - array shape
	* @param options - options
	* @param options.dtype - underlying data type (default: 'float64')
	* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
	* @param options.readonly - boolean indicating whether an array should be read-only
	* @returns zero-filled array
	*
	* @example
	* var arr = ns.zeros( [ 2, 2 ] );
	* // returns <ndarray>
	*
	* var sh = arr.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = arr.dtype;
	* // returns 'float64'
	*/
	zeros: typeof zeros;

	/**
	* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
	*
	* @param x - input array
	* @param options - options
	* @param options.dtype - output array data type
	* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
	* @param options.shape - output array shape
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
	* @param options.readonly - boolean indicating whether an array should be read-only
	* @returns zero-filled array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( [ 2, 2 ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var y = ns.zerosLike( x );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* dt = y.dtype;
	* // returns 'generic'
	*/
	zerosLike: typeof zerosLike;
}

/**
* Multidimensional arrays.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
