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

import assert = require( './../../../base/assert' );
import assign = require( './../../../base/assign' );
import binaryLoopOrder = require( './../../../base/binary-loop-interchange-order' );
import binaryBlockSize = require( './../../../base/binary-tiling-block-size' );
import bind2vind = require( './../../../base/bind2vind' );
import broadcastArray = require( './../../../base/broadcast-array' );
import broadcastArrays = require( './../../../base/broadcast-arrays' );
import broadcastScalar = require( './../../../base/broadcast-scalar' );
import broadcastShapes = require( './../../../base/broadcast-shapes' );
import buffer = require( './../../../base/buffer' );
import bufferCtors = require( './../../../base/buffer-ctors' );
import bufferDataType = require( './../../../base/buffer-dtype' );
import bufferDataTypeEnum = require( './../../../base/buffer-dtype-enum' );
import bytesPerElement = require( './../../../base/bytes-per-element' );
import char2dtype = require( './../../../base/char2dtype' );
import clampIndex = require( './../../../base/clamp-index' );
import ndarray = require( './../../../base/ctor' );
import data = require( './../../../base/data-buffer' );
import dtype = require( './../../../base/dtype' );
import dtypeChar = require( './../../../base/dtype-char' );
import dtypeDesc = require( './../../../base/dtype-desc' );
import dtypeEnum2Str = require( './../../../base/dtype-enum2str' );
import dtypeResolveEnum = require( './../../../base/dtype-resolve-enum' );
import dtypeResolveStr = require( './../../../base/dtype-resolve-str' );
import dtypeStr2Enum = require( './../../../base/dtype-str2enum' );
import dtype2c = require( './../../../base/dtype2c' );
import dtypes2signatures = require( './../../../base/dtypes2signatures' );
import empty = require( './../../../base/empty' );
import emptyLike = require( './../../../base/empty-like' );
import expandDimensions = require( './../../../base/expand-dimensions' );
import fill = require( './../../../base/fill' );
import fillBy = require( './../../../base/fill-by' );
import flag = require( './../../../base/flag' );
import flags = require( './../../../base/flags' );
import fliplr = require( './../../../base/fliplr' );
import flipud = require( './../../../base/flipud' );
import forEach = require( './../../../base/for-each' );
import scalar2ndarray = require( './../../../base/from-scalar' );
import scalar2ndarrayLike = require( './../../../base/from-scalar-like' );
import ind = require( './../../../base/ind' );
import ind2sub = require( './../../../base/ind2sub' );
import iterationOrder = require( './../../../base/iteration-order' );
import map = require( './../../../base/map' );
import maxViewBufferIndex = require( './../../../base/max-view-buffer-index' );
import maybeBroadcastArray = require( './../../../base/maybe-broadcast-array' );
import maybeBroadcastArrays = require( './../../../base/maybe-broadcast-arrays' );
import metaDataProps = require( './../../../base/meta-data-props' );
import minSignedIntegerDataType = require( './../../../base/min-signed-integer-dtype' );
import minUnsignedIntegerDataType = require( './../../../base/min-unsigned-integer-dtype' );
import minViewBufferIndex = require( './../../../base/min-view-buffer-index' );
import minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' );
import ndarraylike2ndarray = require( './../../../base/ndarraylike2ndarray' );
import ndarraylike2object = require( './../../../base/ndarraylike2object' );
import ndims = require( './../../../base/ndims' );
import nextCartesianIndex = require( './../../../base/next-cartesian-index' );
import nonsingletonDimensions = require( './../../../base/nonsingleton-dimensions' );
import normalizeIndex = require( './../../../base/normalize-index' );
import normalizeIndices = require( './../../../base/normalize-indices' );
import nullary = require( './../../../base/nullary' );
import nullaryLoopOrder = require( './../../../base/nullary-loop-interchange-order' );
import nullaryBlockSize = require( './../../../base/nullary-tiling-block-size' );
import numel = require( './../../../base/numel' );
import numelDimension = require( './../../../base/numel-dimension' );
import offset = require( './../../../base/offset' );
import order = require( './../../../base/order' );
import outputPolicyEnum2Str = require( './../../../base/output-policy-enum2str' );
import outputPolicyResolveEnum = require( './../../../base/output-policy-resolve-enum' );
import outputPolicyResolveStr = require( './../../../base/output-policy-resolve-str' );
import outputPolicyStr2Enum = require( './../../../base/output-policy-str2enum' );
import prependSingletonDimensions = require( './../../../base/prepend-singleton-dimensions' );
import removeSingletonDimensions = require( './../../../base/remove-singleton-dimensions' );
import reverse = require( './../../../base/reverse' );
import reverseDimension = require( './../../../base/reverse-dimension' );
import serializeMetaData = require( './../../../base/serialize-meta-data' );
import shape = require( './../../../base/shape' );
import shape2strides = require( './../../../base/shape2strides' );
import singletonDimensions = require( './../../../base/singleton-dimensions' );
import slice = require( './../../../base/slice' );
import sliceAssign = require( './../../../base/slice-assign' );
import sliceDimension = require( './../../../base/slice-dimension' );
import sliceDimensionFrom = require( './../../../base/slice-dimension-from' );
import sliceDimensionTo = require( './../../../base/slice-dimension-to' );
import sliceFrom = require( './../../../base/slice-from' );
import sliceTo = require( './../../../base/slice-to' );
import spreadDimensions = require( './../../../base/spread-dimensions' );
import stride = require( './../../../base/stride' );
import strides = require( './../../../base/strides' );
import strides2offset = require( './../../../base/strides2offset' );
import strides2order = require( './../../../base/strides2order' );
import sub2ind = require( './../../../base/sub2ind' );
import ndarray2array = require( './../../../base/to-array' );
import toNormalizedIndices = require( './../../../base/to-normalized-indices' );
import toReversed = require( './../../../base/to-reversed' );
import toUniqueNormalizedIndices = require( './../../../base/to-unique-normalized-indices' );
import transpose = require( './../../../base/transpose' );
import unary = require( './../../../base/unary' );
import unaryBy = require( './../../../base/unary-by' );
import unaryLoopOrder = require( './../../../base/unary-loop-interchange-order' );
import unaryOutputDataType = require( './../../../base/unary-output-dtype' );
import unaryBlockSize = require( './../../../base/unary-tiling-block-size' );
import vind2bind = require( './../../../base/vind2bind' );
import wrapIndex = require( './../../../base/wrap-index' );
import zeros = require( './../../../base/zeros' );
import zerosLike = require( './../../../base/zeros-like' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base ndarray assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Assigns elements in an ndarray to elements in an ndarray.
	*
	* @param arrays - array-like object containing one input ndarray and one output ndarray
	* @throws arrays must have the same number of dimensions
	* @throws arrays must have the same shape
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var ybuf = new Float64Array( 6 );
	*
	* // Define the shape of the input and output arrays:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	* var sy = [ 2, 2, 1 ];
	*
	* // Define the index offsets:
	* var ox = 1;
	* var oy = 0;
	*
	* // Create the input and output ndarrays:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
	*
	* // Copy elements:
	* ns.assign( [ x, y ] );
	*
	* console.log( y.data );
	* // => <Float64Array>[ 2.0, 3.0, 6.0, 7.0, 10.0, 11.0 ]
	*/
	assign: typeof assign;

	/**
	* Reorders ndarray dimensions and associated strides for loop interchange.
	*
	* ## Notes
	*
	* -   The returned object has the following properties:
	*
	*     -   **sh**: dimensions sorted in loop order.
	*     -   **sx**: first input ndarray strides sorted in loop order.
	*     -   **sy**: second input ndarray strides sorted in loop order.
	*     -   **sz**: output ndarray strides sorted in loop order.
	*
	* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
	*
	*     The purpose of this function is to order ndarray dimensions according to the magnitude of array strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
	*
	* -   Cache performance may be degraded if the layout order (i.e., row-major or column-major) differs for the input and output ndarrays. This function is intended to optimize cache performance for the most common layout order. Accordingly, if the output ndarray has a different layout order (e.g., if the input ndarrays are row-major and the output ndarray is column-major), cache misses are likely for the output ndarray. In general, to ensure best performance, input and output ndarrays should have the same layout order.
	*
	* -   The function assumes that the input and output ndarrays have the same shape. Hence, loop interchange order should only be determined **after** broadcasting.
	*
	* @param sh - array dimensions
	* @param sx - first input array stride lengths
	* @param sy - second input array stride lengths
	* @param sz - output array stride lengths
	* @returns loop interchange data
	*
	* @example
	* var sh = [ 2, 3, 4 ];
	*
	* var sx = [ 12, 4, 1 ]; // row-major
	* var sy = [ 24, 8, 1 ]; // row-major
	* var sz = [ 1, -2, 6 ]; // column-major
	*
	* var o = loopOrder( sh, sx, sy, sz );
	* // returns {...}
	*
	* var ssh = o.sh;
	* // returns [ 4, 3, 2 ]
	*
	* var ssx = o.sx;
	* // returns [ 1, 4, 12 ]
	*
	* var ssy = o.sy;
	* // returns [ 1, 8, 24 ]
	*
	* var ssz = o.sz;
	* // returns [ 6, -2, 1 ]
	*/
	binaryLoopOrder: typeof binaryLoopOrder;

	/**
	* Returns a loop block size for multi-dimensional array tiled loops.
	*
	* @param dtypeX - first input array data type
	* @param dtypeY - second input array data type
	* @param dtypeZ - output array data type
	* @returns block size (in units of elements)
	*
	* @example
	* var bsize = ns.binaryBlockSize( 'float64', 'float64', 'float64' );
	* // returns <number>
	*/
	binaryBlockSize: typeof binaryBlockSize;

	/**
	* Converts a linear index in an underlying data buffer to a linear index in an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index in an underlying data buffer
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns linear index in an array view
	*
	* @example
	* var shape = [ 3, 3 ];
	* var strides = [ -3, 1 ];
	* var offset = 6;
	* var order = 'row-major';
	* var mode = 'throw';
	*
	* var ind = ns.bind2vind( shape, strides, offset, order, 7, mode );
	* // returns 1
	*/
	bind2vind: typeof bind2vind;

	/**
	* Broadcasts an ndarray to a specified shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
	* -   The returned array is a view on the input array data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned array, copy the array before performing operations which may mutate elements.
	* -   The returned array is a "base" ndarray, and, thus, the returned array does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.
	* -   The function always returns a new ndarray instance even if the input ndarray shape and the desired shape are the same.
	*
	* @param arr - input array
	* @param shape - desired shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
	* @returns broadcasted array
	*
	* @example
	* var array = require( './../../../array' );
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
	* -   The returned arrays are views on their respective underlying array data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a returned array, copy the array before performing operations which may mutate elements.
	* -   The returned arrays are "base" ndarrays, and, thus, returned arrays do not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast ndarray-like objects within internal implementations and to do so with minimal overhead.
	* -   The function always returns new ndarray instances even if an input ndarray shape and the broadcasted shape are the same.
	*
	* @param arrays - input arrays
	* @throws input arrays must be broadcast compatible
	* @returns list of broadcasted arrays
	*
	* @example
	* var array = require( './../../../array' );
	* var zeros = require( './../../../zeros' );
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
	* var zeros = require( './../../../zeros' );
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
	* Broadcasts a scalar value to an ndarray having a specified shape.
	*
	* @param value - scalar value
	* @param dtype - array data type
	* @param shape - array shape
	* @param order - array order
	* @returns ndarray
	*
	* @example
	* var x = ns.broadcastScalar( 1.0, 'generic', [ 2, 2 ], 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var v = x.get( 0, 1 );
	* // returns 1.0
	*/
	broadcastScalar: typeof broadcastScalar;

	/**
	* Broadcasts array shapes to a single shape.
	*
	* ## Notes
	*
	* -   Two respective dimensions in two shape arrays are compatible if
	*
	*     1.  the dimensions are equal.
	*     2.  one dimension is `1`.
	*
	* -   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast with one another).
	*
	* @param shapes - array shapes
	* @returns broadcast shape
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 6, 1 ],
	*     [ 7, 1, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 7, 6, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 5, 4 ],
	*     [ 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 5, 4 ]
	*
	* @example
	* var shapes = [
	*     [ 5, 4 ],
	*     [ 4 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 5, 4 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 15, 1, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 3, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 3, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 1, 7, 1, 5 ],
	*     [ 8, 4, 1, 6, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 4, 7, 6, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 0 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 1, 1, 6, 0 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 8, 0, 1, 6, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 0, 1, 6, 1 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 8, 1, 6, 1 ],
	*     [ 8, 0, 1, 6, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns null
	*
	* @example
	* var shapes = [
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [
	*     [],
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [
	*     [ 3, 2, 1 ],
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 3, 2, 1 ]
	*
	* @example
	* var shapes = [
	*     [],
	*     [ 3, 2, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 3, 2, 1 ]
	*/
	broadcastShapes: typeof broadcastShapes;

	/**
	* Returns a contiguous linear ndarray data buffer.
	*
	* @param dtype - data type
	* @param size - buffer size
	* @returns data buffer
	*
	* @example
	* var buf = ns.buffer( 'float64', 3 );
	* // returns <Float64Array>[ 0.0, 0.0, 0.0 ]
	*/
	buffer: typeof buffer;

	/**
	* Returns an ndarray data buffer constructor.
	*
	* @param dtype - data type
	* @returns data buffer constructor or null
	*
	* @example
	* var ctor = ns.bufferCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.bufferCtors( 'float' );
	* // returns null
	*/
	bufferCtors: typeof bufferCtors;

	/**
	* Returns the data type of an ndarray data buffer.
	*
	* @param value - input value
	* @returns data type
	*
	* @example
	* var dt = ns.bufferDataType( [ 1, 2, 3 ] );
	* // returns 'generic'
	*
	* var dt = ns.bufferDataType( 'beep' );
	* // returns null
	*/
	bufferDataType: typeof bufferDataType;

	/**
	* Returns the data type enumeration constant for a provided ndarray data buffer.
	*
	* @param arr - strided array
	* @returns data type enumeration constant or null
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( 10 );
	*
	* var c = ns.bufferDataTypeEnum( x );
	* // returns <number>
	*/
	bufferDataTypeEnum: typeof bufferDataTypeEnum;

	/**
	* Returns the number of bytes per element provided an underlying array data type.
	*
	* @param dtype - data type
	* @returns number of bytes per element
	*
	* @example
	* var nbytes = ns.bytesPerElement( 'float64' );
	* // returns 8
	*
	* nbytes = ns.bytesPerElement( 'generic' );
	* // returns null
	*/
	bytesPerElement: typeof bytesPerElement;

	/**
	* Returns an object mapping single letter character abbreviations to data type strings.
	*
	* @returns object mapping single letter character abbreviations to data type strings
	*
	* @example
	* var out = ns.char2dtype();
	* // returns {...}
	*/
	char2dtype: typeof char2dtype;

	/**
	* Restricts an index to the interval `[0,max]`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.clampIndex( -1, 10 );
	* // returns 0
	*
	* idx = ns.clampIndex( 15, 10 );
	* // returns 10
	*
	* idx = ns.clampIndex( 5, 10 );
	* // returns 5
	*/
	clampIndex: typeof clampIndex;

	/**
	* ndarray constructor.
	*
	* ## Notes
	*
	* -   To create a zero-dimensional array,
	*
	*     ```javascript
	*     var buffer = [ 1 ];
	*     var shape = [];
	*     var strides = [ 0 ];
	*     var offset = 0;
	*
	*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*     ```
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
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
	* var zeros = require( './../../../zeros' );
	*
	* var x = zeros( [ 3, 3, 3 ], {
	*     'dtype': 'float64'
	* });
	*
	* var out = ns.data( x );
	* // returns <Float64Array>
	*/
	data: typeof data;

	/**
	* Returns the data type of a provided ndarray.
	*
	* @param x - input ndarray
	* @returns data type
	*
	* @example
	* var zeros = require( './../../../zeros' );
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
	* Returns an object mapping data type strings to single letter character abbreviations.
	*
	* @returns object mapping data type strings to single letter character abbreviations
	*
	* @example
	* var obj = ns.dtypeChar();
	* // returns {...}
	*/
	dtypeChar: typeof dtypeChar;

	/**
	* Returns an object mapping data type strings to descriptions.
	*
	* @returns object mapping data type strings to descriptions
	*
	* @example
	* var obj = ns.dtypeDesc();
	* // returns {...}
	*/
	dtypeDesc: typeof dtypeDesc;

	/**
	* Returns the data type string associated with an ndarray data type enumeration constant.
	*
	* @param dtype - data type enumeration constant
	* @returns data type string
	*
	* @example
	* var str2enum = require( './../../../base/dtype-str2enum' );
	*
	* var v = str2enum( 'float64' );
	* // returns <number>
	*
	* var dt = ns.dtypeEnum2Str( v );
	* // returns 'float64'
	*/
	dtypeEnum2Str: typeof dtypeEnum2Str;

	/**
	* Returns the enumeration constant associated with an ndarray data type value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param dtype - data type value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.dtypeResolveEnum( 'float64' );
	* // returns <number>
	*/
	dtypeResolveEnum: typeof dtypeResolveEnum;

	/**
	* Returns the data type string associated with an ndarray data type value.
	*
	* @param dtype - data type value
	* @returns data type string
	*
	* @example
	* var str2enum = require( './../../../base/dtype-str2enum' );
	*
	* var v = ns.dtypeResolveStr( str2enum( 'float64' ) );
	* // returns 'float64'
	*/
	dtypeResolveStr: typeof dtypeResolveStr;

	/**
	* Returns the enumeration constant associated with a ndarray data type string.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param dtype - data type string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.dtypeStr2Enum( 'float64' );
	* // returns <number>
	*/
	dtypeStr2Enum: typeof dtypeStr2Enum;

	/**
	* Returns the C data type associated with a provided data type value.
	*
	* @param dtype - data type value
	* @returns C data type (or null)
	*
	* @example
	* var out = ns.dtype2c( 'float64' );
	* // returns 'double'
	*
	* out = ns.dtype2c( 'generic' );
	* // returns null
	*/
	dtype2c: typeof dtype2c;

	/**
	* Transforms a list of array argument data types into a list of signatures.
	*
	* @param dtypes - list of array argument data types
	* @param nin - number of input array arguments
	* @param nout - number of output array arguments
	* @throws first argument must be an array-like object
	* @throws second argument must be a nonnegative integer
	* @throws third argument must be a nonnegative integer
	* @throws first argument must have at least one element
	* @throws first argument must be compatible with second and third arguments
	* @returns list of signatures
	*
	* @example
	* var dtypes = [
	*     'float64', 'float64',
	*     'float32', 'float32'
	* ];
	*
	* var sigs = ns.dtypes2signatures( dtypes, 1, 1 );
	* // returns [ '(float64) => (float64)', '(float32) => (float32)' ]
	*/
	dtypes2signatures: typeof dtypes2signatures;

	/**
	* Creates an uninitialized array having a specified shape and data type.
	*
	* @param dtype - underlying data type
	* @param shape - array shape
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns output array
	*
	* @example
	* var arr = ns.empty( 'float32', [ 2, 2 ], 'row-major' );
	* // returns <ndarray>
	*
	* var sh = arr.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = arr.dtype;
	* // returns 'float32'
	*/
	empty: typeof empty;

	/**
	* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var zeros = require( './../../../base/zeros' );
	*
	* var x = zeros( 'generic', [ 2, 2 ], 'row-major' );
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
	* Expands the shape of an array by inserting a new dimension of size one at a specified axis.
	*
	* ## Notes
	*
	* -   A provided axis must reside on the interval `[-N-1, N]`, where `N` is the rank (i.e., number of dimensions) of the provided input array. If provided a negative `axis`, the axis position at which to insert a singleton dimension is computed as `N + axis + 1`. Hence, if provided `-1`, the resolved axis position is `N` (i.e., a singleton dimension is appended to the input array).
	*
	* @param x - input array
	* @param axis - axis at which to insert a singleton dimension
	* @returns output array
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.expandDimensions( x, 1 );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 2, 1, 2 ]
	*
	* var v = y.get( 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0, 0 );
	* // returns 3
	*
	* v = y.get( 1, 0, 1 );
	* // returns 4
	*/
	expandDimensions: typeof expandDimensions;

	/**
	* Fills an input ndarray with a specified value.
	*
	* ## Notes
	*
	* -   A `value` must be able to safely cast to the input ndarray data type. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input ndarray).
	*
	* @param x - input ndarray
	* @param value - scalar value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Create a data buffer:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Define the shape of the input array:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 2, 2, 1 ];
	*
	* // Define the index offset:
	* var ox = 0;
	*
	* // Create the input ndarray-like object:
	* var x = {
	*     'dtype': 'float64',
	*     'data': xbuf,
	*     'shape': shape,
	*     'strides': sx,
	*     'offset': ox,
	*     'order': 'row-major'
	* };
	*
	* ns.fill( x, 10.0 );
	*
	* console.log( x.data );
	* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
	*/
	fill: typeof fill;

	/**
	* Fills an input ndarray according to a callback function.
	*
	* @param x - input ndarray
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function fcn() {
	*     return 10.0;
	* }
	*
	* // Create a data buffer:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Define the shape of the input array:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 2, 2, 1 ];
	*
	* // Define the index offset:
	* var ox = 0;
	*
	* // Create the input ndarray-like object:
	* var x = {
	*     'dtype': 'float64',
	*     'data': xbuf,
	*     'shape': shape,
	*     'strides': sx,
	*     'offset': ox,
	*     'order': 'row-major'
	* };
	*
	* ns.fillBy( x, fcn );
	*
	* console.log( x.data );
	* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
	*/
	fillBy: typeof fillBy;

	/**
	* Returns a specified flag for a provided ndarray.
	*
	* @param x - input ndarray
	* @param name - flag name
	* @returns flag value
	*
	* @example
	* var zeros = require( './../../../zeros' );
	*
	* var o = ns.flag( zeros( [ 3, 3, 3 ] ), 'READONLY' );
	* // returns <boolean>
	*/
	flag: typeof flag;

	/**
	* Returns the flags of a provided ndarray.
	*
	* ## Notes
	*
	* -   When `copy` is `false`, changes to the returned object may mutate the input ndarray flags. If there is a chance that the returned object will be mutated (either directly or by downstream consumers), set `copy` to `true` to prevent unintended side effects.
	*
	* @param x - input ndarray
	* @param copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `flags` property
	* @returns flags
	*
	* @example
	* var zeros = require( './../../../zeros' );
	*
	* var o = ns.flags( zeros( [ 3, 3, 3 ] ), false );
	* // returns {...}
	*/
	flags: typeof flags;

	/**
	* Returns a view of an input ndarray in which the order of elements along the last dimension is reversed.
	*
	* @param x - input array
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var typedarray = require( '@stdlib/array/typed' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var y = ns.fliplr( x, false );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]
	*/
	fliplr: typeof fliplr;

	/**
	* Returns a view of an input ndarray in which the order of elements along the second-to-last dimension is reversed.
	*
	* @param x - input array
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var typedarray = require( '@stdlib/array/typed' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var y = ns.flipud( x, false );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]
	*/
	flipud: typeof flipud;

	/**
	* Invokes a callback function once for each ndarray element.
	*
	* @param arrays - array-like object containing an output ndarray
	* @param fcn - callback function
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var naryFunction = require( '@stdlib/utils/nary-function' );
	* var log = require( '@stdlib/console/log' );
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( 12 );
	*
	* // Define the shape of the array:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	*
	* // Define the index offset:
	* var ox = 1;
	*
	* // Create the output ndarray:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	*
	* // Apply the callback function:
	* ns.forEach( [ x ], naryFunction( log, 1 ) );
	*/
	forEach: typeof forEach;

	/**
	* Returns a zero-dimensional ndarray containing a provided scalar value.
	*
	* @param value - scalar value
	* @param dtype - array data type
	* @param order - memory layout (row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var x = ns.scalar2ndarray( 1.0, 'generic', 'row-major' );
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
	* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
	*
	* @param x - input array
	* @param value - scalar value
	* @returns zero-dimensional ndarray
	*
	* @example
	* var zeros = require( './../../../base/zeros' );
	*
	* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
	* // returns <ndarray>
	*
	* var y = ns.scalar2ndarrayLike( x, 1.0 );
	* // returns <ndarray>
	*
	* var sh = y.shape;
	* // returns []
	*
	* var dt = y.dtype;
	* // returns 'generic'
	*
	* var v = y.get();
	* // returns 1.0
	*/
	scalar2ndarrayLike: typeof scalar2ndarrayLike;

	/**
	* Returns an index given an index mode.
	*
	* @param idx - index
	* @param max - maximum index
	* @param mode - specifies how to handle an index outside the interval `[0,max]`
	* @returns index
	*
	* @example
	* var idx = ns.ind( 2, 9, 'clamp' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'clamp' );
	* // returns 9
	*
	* idx = ns.ind( -1, 9, 'clamp' );
	* // returns 0
	*
	* @example
	* var idx = ns.ind( 2, 9, 'wrap' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'wrap' );
	* // returns 0
	*
	* idx = ns.ind( -1, 9, 'wrap' );
	* // returns 9
	*
	* @example
	* var idx = ns.ind( 2, 9, 'throw' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'throw' );
	* // throws <RangeError>
	*
	* idx = ns.ind( -1, 9, 'throw' );
	* // throws <RangeError>
	*
	* @example
	* var idx = ns.ind( 2, 9, 'normalize' );
	* // returns 2
	*
	* idx = ns.ind( -5, 9, 'normalize' );
	* // returns 5
	*
	* idx = ns.ind( -20, 9, 'normalize' );
	* // throws <RangeError>
	*
	* @example
	* var fcn = ns.ind.factory( 'clamp' );
	*
	* var idx = fcn( 2, 9 );
	* // returns 2
	*
	* idx = fcn( 10, 9 );
	* // returns 9
	*
	* idx = fcn( -1, 9 );
	* // returns 0
	*/
	ind: typeof ind;

	/**
	* Converts a linear index to an array of subscripts.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   **throw**: throw an error when a linear index exceeds array dimensions.
	*     -   **normalize**: normalize negative indices and throw an error when a linear index exceeds array dimensions.
	*     -   **wrap**: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   **clamp**: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view.
	*
	*     ```text
	*     Dims: 2x2
	*     Buffer: [ 1, 2, 3, 4 ]
	*
	*     View = [ a00, a01,
	*              a10, a11 ]
	*
	*     Strides: 2,1
	*     Offset: 0
	*
	*     View = [ 1, 2,
	*              3, 4 ]
	*
	*     Strides: 2,-1
	*     Offset: 1
	*
	*     View = [ 2, 1,
	*              4, 3 ]
	*
	*     Strides: -2,1
	*     Offset: 2
	*
	*     View = [ 3, 4,
	*              1, 2 ]
	*
	*     Strides: -2,-1
	*     Offset: 3
	*
	*     View = [ 4, 3,
	*              2, 1 ]
	*     ```
	*
	*     ```javascript
	*     var shape = [ 2, 2 ];
	*     var order = 'row-major';
	*     var strides = [ -2, 1 ];
	*     var offset = 2;
	*     var mode = 'throw';
	*
	*     // From the perspective of a view...
	*     var s = ind2sub( shape, strides, 0, order, 0, mode );
	*     // returns [ 0, 0 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 1, mode );
	*     // returns [ 0, 1 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 2, mode );
	*     // returns [ 1, 0 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 3, mode );
	*     // returns [ 1, 1 ]
	*
	*     // From the perspective of an underlying buffer...
	*     s = ind2sub( shape, strides, offset, order, 0, mode );
	*     // returns [ 1, 0 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 1, mode );
	*     // returns [ 1, 1 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 2, mode );
	*     // returns [ 0, 0 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 3, mode );
	*     // returns [ 0, 1 ]
	*     ```
	*
	*     In short, from the perspective of a view, view data is always ordered.
	*
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var strides = [ 9, 6, 1 ];
	* var offset = 0;
	* var order = 'row-major';
	*
	* var s = ns.ind2sub( shape, strides, offset, order, 17, 'throw' );
	* // returns [ 1, 2, 2 ]
	*/
	ind2sub: typeof ind2sub;

	/**
	* Returns array iteration order.
	*
	* ## Notes
	*
	* -   Return value key:
	*
	*     -   `0`: unordered (i.e., strides of mixed sign; e.g., `[ 9, -3, 1 ]`)
	*     -   `1`: ordered left-to-right (i.e., all nonnegative strides)
	*     -   `-1`: ordered right-to-left (i.e., all negative strides)
	*
	* @param strides - stride array
	* @returns iteration order
	*
	* @example
	* var o = ns.iterationOrder( [ 2, 1 ] );
	* // returns 1
	*
	* o = ns.iterationOrder( [ -2, 1 ] );
	* // returns 0
	*
	* o = ns.iterationOrder( [ -2, -1 ] );
	* // returns -1
	*/
	iterationOrder: typeof iterationOrder;

	/**
	* Applies a callback function to the elements in an input ndarray and assigns results to the elements in an output ndarray.
	*
	* @param arrays - array-like object containing one input ndarray and one output ndarray
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @throws arrays must have the same number of dimensions
	* @throws arrays must have the same shape
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var ybuf = new Float64Array( 6 );
	*
	* // Define the shape of the input and output arrays:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	* var sy = [ 2, 2, 1 ];
	*
	* // Define the index offsets:
	* var ox = 1;
	* var oy = 0;
	*
	* // Create the input and output ndarrays:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
	*
	* // Apply the ns.map function:
	* ns.map( [ x, y ], scale );
	*
	* console.log( y.data );
	* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
	*/
	map: typeof map;

	/**
	* Computes the maximum linear index in an underlying data buffer accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear index
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 0;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 99;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 0;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 99;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*/
	maxViewBufferIndex: typeof maxViewBufferIndex;

	/**
	* Broadcasts an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
	* -   If a provided ndarray has the same shape as the specified shape, the function returns the provided ndarray.
	* -   If a provided ndarray has a different (broadcast compatible) shape than the specified shape, the function returns a new (base) ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned array, copy the array before performing operations which may mutate elements.
	* -   A returned array view is a "base" ndarray, and, thus, a returned array view does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.
	*
	* @param arr - input array
	* @param shape - desired shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
	* @throws input array and desired shape must be broadcast compatible
	* @returns broadcasted array
	*
	* @example
	* var array = require( './../../../array' );
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
	* -   If a provided ndarray has a different (broadcast compatible) shape than the common shape, the function returns a new (base) ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a returned array, copy the array before performing operations which may mutate elements.
	* -   A returned array view is a "base" ndarray, and, thus, a returned array view does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast ndarray-like objects within internal implementations and to do so with minimal overhead.
	*
	* @param arrays - input arrays
	* @throws input arrays must be broadcast compatible
	* @returns list of broadcasted arrays
	*
	* @example
	* var array = require( './../../../array' );
	* var zeros = require( './../../../zeros' );
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
	* var out = ns.maybeBroadcastArrays( [ x, y ] );
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
	* Defines non-enumerable read-only properties which expose ndarray function meta data.
	*
	* @param meta - function meta data
	* @param meta.nargs - total number of arguments
	* @param meta.nin - total number of input arrays
	* @param meta.nout - total number of output arrays
	* @param dtypes - list of ndarray data types
	* @param obj - object on which to define properties
	* @returns object on which properties were defined
	*
	* @example
	* // Define ndarray function meta data:
	* var meta = {
	*     'nargs': 2,
	*     'nin': 1,
	*     'nout': 1
	* };
	*
	* // Define the list of ndarray data types:
	* var dtypes = [
	*     'float64', 'float64',
	*     'float32', 'float32',
	*     'generic', 'generic'
	* ];
	*
	* // Define an object/function on which to set the properties:
	* var obj = {};
	*
	* // Set the properties:
	* ns.metaDataProps( meta, dtypes, obj );
	*/
	metaDataProps: typeof metaDataProps;

	/**
	* Returns the minimum ndarray data type for storing a provided signed integer value.
	*
	* @param value - scalar value
	* @returns ndarray data type
	*
	* @example
	* var dt = ns.minSignedIntegerDataType( 1280 );
	* // returns 'int16'
	*
	* @example
	* var dt = ns.minSignedIntegerDataType( 3 );
	* // returns 'int8'
	*/
	minSignedIntegerDataType: typeof minSignedIntegerDataType;

	/**
	* Returns the minimum ndarray data type for storing a provided unsigned integer value.
	*
	* @param value - scalar value
	* @returns ndarray data type
	*
	* @example
	* var dt = ns.minUnsignedIntegerDataType( 1280 );
	* // returns 'uint16'
	*
	* @example
	* var dt = ns.minUnsignedIntegerDataType( 3 );
	* // returns 'uint8'
	*/
	minUnsignedIntegerDataType: typeof minUnsignedIntegerDataType;

	/**
	* Computes the minimum linear index in an underlying data buffer accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear index
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 10;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 109;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 10;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 109;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*/
	minViewBufferIndex: typeof minViewBufferIndex;

	/**
	* Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear indices
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 10;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 10, 109 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 99;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 0, 99 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 10;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 10, 109 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 99;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 0, 99 ]
	*/
	minmaxViewBufferIndex: typeof minmaxViewBufferIndex;

	/**
	* Converts an ndarray-like object to an ndarray.
	*
	* @param x - input ndarray
	* @returns ndarray
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
	*
	* var out = ns.ndarraylike2ndarray( x );
	* // returns <ndarray>
	*/
	ndarraylike2ndarray: typeof ndarraylike2ndarray;

	/**
	* Converts an ndarray-like object to an object likely to have the same "shape".
	*
	* ## Notes
	*
	* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding ndarray meta data to ensure that internal functions operating on ndarrays are provided consistent argument "shapes".
	*
	* @param x - input ndarray
	* @returns object containing ndarray data
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
	*
	* var obj = ns.ndarraylike2object( x );
	* // returns {...}
	*/
	ndarraylike2object: typeof ndarraylike2object;

	/**
	* Returns the number of ndarray dimensions.
	*
	* @param x - input ndarray
	* @returns number of dimensions
	*
	* @example
	* var zeros = require( './../../../zeros' );
	*
	* var n = ns.ndims( zeros( [ 3, 3, 3 ] ) );
	* // returns 3
	*/
	ndims: typeof ndims;

	/**
	* Returns the next Cartesian index (i.e., set of subscripts/dimension indices).
	*
	* ## Notes
	*
	* -   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
	* -   If provided an empty shape (i.e., a shape corresponding to a zero-dimensional ndarray) or a dimension index `dim` which is out-of-bounds, the function returns `null`.
	*
	* @param shape - array shape
	* @param order - iteration order
	* @param idx - current dimension indices
	* @param dim - index of the dimension from which to start incrementing (inclusive)
	* @returns updated dimension indices
	*
	* @example
	* var shape = [ 12 ];
	* var idx = ns.nextCartesianIndex( shape, 'row-major', [ 2 ], 0 );
	* // returns [ 3 ]
	*
	* @example
	* var shape = [ 2, 2, 2 ];
	*
	* var idx = ns.nextCartesianIndex( shape, 'row-major', [ 0, 0, 1 ], -1 );
	* // returns [ 0, 1, 0 ]
	*
	* idx = ns.nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 0, 1, 1 ]
	*
	* idx = ns.nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 0, 0 ]
	*
	* idx = ns.nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 0, 1 ]
	*
	* idx = ns.nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 1, 0 ]
	*
	* idx = ns.nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 1, 1 ]
	*
	* @example
	* var shape = [];
	* var idx = ns.nextCartesianIndex( shape, 'row-major', [], 0 );
	* // returns null
	*
	* @example
	* var shape = [ 12 ];
	* var idx = ns.nextCartesianIndex( shape, 'row-major', [ 2 ], -10 );
	* // returns null
	*
	* @example
	* var shape = [ 12 ];
	* var idx = ns.nextCartesianIndex( shape, 'column-major', [ 2 ], 10 );
	* // returns null
	*/
	nextCartesianIndex: typeof nextCartesianIndex;

	/**
	* Returns the number of non-singleton dimensions.
	*
	* ## Notes
	*
	* -   A singleton dimension is a dimension whose size is equal to `1`.
	*
	* @param shape - array shape
	* @returns number of non-singleton dimensions
	*
	* @example
	* var n = ns.nonsingletonDimensions( [ 3, 3, 1, 2 ] );
	* // returns 3
	*
	* @example
	* var n = ns.nonsingletonDimensions( [ 1, 1 ] );
	* // returns 0
	*/
	nonsingletonDimensions: typeof nonsingletonDimensions;

	/**
	* Normalizes an index to the interval `[0,max]`.
	*
	* ## Notes
	*
	* -   If provided an out-of-bounds index, the function returns `-1`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.normalizeIndex( -2, 10 );
	* // returns 9
	*
	* idx = ns.normalizeIndex( 15, 10 );
	* // returns -1
	*
	* idx = ns.normalizeIndex( 5, 10 );
	* // returns 5
	*/
	normalizeIndex: typeof normalizeIndex;

	/**
	* Normalizes a list of indices to the interval `[0,max]`.
	*
	* ## Notes
	*
	* -   If provided an out-of-bounds index, the function returns `null`.
	* -   The function mutates the input array, even when provided an out-of-bounds index.
	*
	* @param indices - indices
	* @param max - maximum index
	* @returns normalized indices or null
	*
	* @example
	* var indices = ns.normalizeIndices( [ -2, 5 ], 10 );
	* // returns [ 9, 5 ]
	*
	* indices = ns.normalizeIndices( [ -2, 15 ], 10 );
	* // returns null
	*/
	normalizeIndices: typeof normalizeIndices;

	/**
	* Applies a nullary callback and assigns results to elements in an output ndarray.
	*
	* @param arrays - array-like object containing an output ndarray
	* @param fcn - nullary callback
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	*
	* function fcn() {
	*     return 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( 12 );
	*
	* // Define the shape of the output array:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	*
	* // Define the index offset:
	* var ox = 1;
	*
	* // Create the output ndarray:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	*
	* // Apply the ns.nullary function:
	* ns.nullary( [ x ], fcn );
	*
	* console.log( x.data );
	* // => <Float64Array>[ 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0 ]
	*/
	nullary: typeof nullary;

	/**
	* Reorders ndarray dimensions and associated strides for loop interchange.
	*
	* ## Notes
	*
	* -   The returned object has the following properties:
	*
	*     -   **sh**: dimensions sorted in loop order.
	*     -   **sx**: ndarray strides sorted in loop order.
	*     -   **idx**: dimension indices sorted in loop order.
	*
	* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
	*
	*     The purpose of this function is to order ndarray dimensions according to the magnitude of array strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
	*
	* @param sh - array dimensions
	* @param sx - array stride lengths
	* @returns loop interchange data
	*
	* @example
	* var sh = [ 2, 3, 4 ];
	*
	* var sx = [ 12, 4, 1 ]; // row-major
	*
	* var o = ns.nullaryLoopOrder( sh, sx );
	* // returns {...}
	*
	* var ssh = o.sh;
	* // returns [ 4, 3, 2 ]
	*
	* var ssx = o.sx;
	* // returns [ 1, 4, 12 ]
	*
	* var idx = o.idx;
	* // returns [ 2, 1, 0 ]
	*/
	nullaryLoopOrder: typeof nullaryLoopOrder;

	/**
	* Returns a loop block size for multi-dimensional array tiled loops.
	*
	* @param dtypeX - array data type
	* @returns block size (in units of elements)
	*
	* @example
	* var bsize = ns.nullaryBlockSize( 'float64' );
	* // returns <number>
	*/
	nullaryBlockSize: typeof nullaryBlockSize;

	/**
	* Returns the number of elements in an array.
	*
	* @param shape - array shape
	* @returns number of elements
	*
	* @example
	* var n = ns.numel( [ 3, 3, 3 ] );
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
	* var zeros = require( './../../../zeros' );
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
	* var zeros = require( './../../../zeros' );
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
	* var zeros = require( './../../../zeros' );
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
	* Returns the policy string associated with an output ndarray data type policy enumeration constant.
	*
	* @param policy - policy enumeration constant
	* @returns policy string
	*
	* @example
	* var str2enum = require( './../../../base/output-policy-str2enum' );
	*
	* var v = str2enum( 'same' );
	* // returns <number>
	*
	* var policy = ns.outputPolicyEnum2Str( v );
	* // returns 'same'
	*/
	outputPolicyEnum2Str: typeof outputPolicyEnum2Str;

	/**
	* Returns the enumeration constant associated with an ndarray data type policy value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `SAME == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param policy - policy value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.outputPolicyResolveEnum( 'same' );
	* // returns <number>
	*/
	outputPolicyResolveEnum: typeof outputPolicyResolveEnum;

	/**
	* Returns the policy string associated with an output ndarray data type policy value.
	*
	* @param policy - policy value
	* @returns policy string
	*
	* @example
	* var str2enum = require( './../../../base/output-policy-str2enum' );
	*
	* var v = ns.outputPolicyResolveStr( str2enum( 'same' ) );
	* // returns 'same'
	*/
	outputPolicyResolveStr: typeof outputPolicyResolveStr;

	/**
	* Returns the enumeration constant associated with an output ndarray data type policy string.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `SAME == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param policy - policy string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.outputPolicyStr2Enum( 'same' );
	* // returns <number>
	*/
	outputPolicyStr2Enum: typeof outputPolicyStr2Enum;

	/**
	* Returns an array with a specified number of prepended singleton dimensions.
	*
	* @param x - input array
	* @param n - number of singleton dimensions to prepend
	* @returns output array
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.prependSingletonDimensions( x, 3 );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 1, 1, 1, 2, 2 ]
	*
	* var v = y.get( 0, 0, 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 0, 0, 0, 1, 0 );
	* // returns 3
	*
	* v = y.get( 0, 0, 0, 1, 1 );
	* // returns 4
	*/
	prependSingletonDimensions: typeof prependSingletonDimensions;

	/**
	* Returns an array without singleton dimensions.
	*
	* ## Notes
	*
	* -   If a provided ndarray does not have any singleton dimensions, the function returns the provided ndarray unchanged.
	* -   If a provided ndarray does have singleton dimensions, the function returns a new ndarray view.
	*
	* @param x - input array
	* @returns squeezed array
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
	*     'ndmin': 5
	* });
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 1, 1, 1, 2, 2 ]
	*
	* var y = ns.removeSingletonDimensions( x );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 2, 2 ]
	*
	* var v = y.get( 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0 );
	* // returns 3
	*
	* v = y.get( 1, 1 );
	* // returns 4
	*/
	removeSingletonDimensions: typeof removeSingletonDimensions;

	/**
	* Returns a view of an input ndarray in which the order of elements along each dimension is reversed.
	*
	* @param x - input array
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var typedarray = require( '@stdlib/array/typed' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float64' );
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* var y = ns.reverse( x, false );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
	*/
	reverse: typeof reverse;

	/**
	* Returns a view of an input ndarray in which the order of elements along a specified dimension is reversed.
	*
	* @param x - input array
	* @param dim - index of dimension to reverse
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var typedarray = require( '@stdlib/array/typed' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var y = ns.reverseDimension( x, 0, false );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]
	*/
	reverseDimension: typeof reverseDimension;

	/**
	* Serializes ndarray meta data.
	*
	* ## Notes
	*
	* -   Serialization is performed according to host byte order (endianness).
	*
	* -   Meta data format:
	*
	*     ```text
	*     | <endianness> (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) | <flags> (4 bytes) |
	*     ```
	*
	*     which translates to the following `ArrayBuffer` layout:
	*
	*     ```text
	*     ArrayBuffer[
	*         <endianness>[int8],
	*         <dtype>[int16],
	*         <ndims>[int64],
	*         <shape>[ndims*int64],
	*         <strides>[ndims*int64],
	*         <offset>[int64],
	*         <order>[int8],
	*         <mode>[int8],
	*         <nsubmodes>[int64],
	*         <submodes>[nsubmodes*int8]
	*         <flags>[int32]
	*     ]
	*     ```
	*
	*     where `strides` and `offset` are in units of bytes.
	*
	* -   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.
	*
	* -   Buffer length:
	*
	*     ```text
	*     1 + 2 + 8 + (ndims*8) + (ndims*8) + 8 + 1 + 1 + 8 + (nsubmodes*1) + 4 = 33 + (ndims*16) + nsubmodes
	*     ```
	*
	*     For example, consider a three-dimensional ndarray with one subscript index mode (submode):
	*
	*     ```text
	*     33 + (3*16) + 1 = 82 bytes
	*     ```
	*
	* -   Views:
	*
	*     -   endianness: `Int8Array( buf, 0, 1 )`
	*     -   dtype: `Int16Array( buf, 1, 1 )`
	*     -   ndims: `Int64Array( buf, 3, 1 )`
	*     -   shape: `Int64Array( buf, 11, ndims )`
	*     -   strides: `Int64Array( buf, 11+(ndims*8), ndims )`
	*     -   offset: `Int64Array( buf, 11+(ndims*16), 1 )`
	*     -   order: `Int8Array( buf, 19+(ndims*16), 1 )`
	*     -   mode: `Int8Array( buf, 20+(ndims*16), 1 )`
	*     -   nsubmodes: `Int64Array( buf, 21+(ndims*16), 1 )`
	*     -   submodes: `Int8Array( buf, 29+(ndims*16), nsubmodes )`
	*     -   flags: `Int32Array( buf, 29+(ndims*16)+nsubmodes, 1)`
	*
	* @param x - input ndarray
	* @returns serialized meta data
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	*
	* var dv = ns.serializeMetaData( x );
	* // returns <DataView>
	*/
	serializeMetaData: typeof serializeMetaData;

	/**
	* Returns the shape of a provided ndarray.
	*
	* ## Notes
	*
	* -   When `copy` is `false`, changes to the returned shape array may mutate the input ndarray shape. If there is a chance that the returned shape will be mutated (either directly or by downstream consumers), set `copy` to `true` to prevent unintended side effects.
	*
	* @param x - input ndarray
	* @param copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `shape` property
	* @returns shape
	*
	* @example
	* var zeros = require( './../../../zeros' );
	*
	* var sh = ns.shape( zeros( [ 3, 3, 3 ] ), false );
	* // returns [ 3, 3, 3 ]
	*/
	shape: typeof shape;

	/**
	* Generates a stride array from an array shape.
	*
	* @param shape - array shape
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns array strides
	*
	* @example
	* var s = ns.shape2strides( [ 3, 2 ], 'row-major' );
	* // returns [ 2, 1 ]
	*
	* s = ns.shape2strides( [ 3, 2 ], 'column-major' );
	* // returns [ 1, 3 ]
	*/
	shape2strides: typeof shape2strides;

	/**
	* Returns the number of singleton dimensions.
	*
	* ## Notes
	*
	* -   A singleton dimension is a dimension whose size is equal to `1`.
	*
	* @param shape - array shape
	* @returns number of singleton dimensions
	*
	* @example
	* var n = ns.singletonDimensions( [ 3, 3, 1, 2 ] );
	* // returns 1
	*
	* @example
	* var n = ns.singletonDimensions( [ 2, 2 ] );
	* // returns 0
	*/
	singletonDimensions: typeof singletonDimensions;

	/**
	* Returns a view of an input ndarray.
	*
	* @param x - input array
	* @param s - multi-slice object
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/ns.slice/ctor' );
	* var MultiSlice = require( '@stdlib/ns.slice/multi' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var s = new MultiSlice( new Slice( null, null, -2 ), new Slice( null, null, -1 ) );
	* // returns <MultiSlice>
	*
	* var y = ns.slice( x, s, false, false );
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
	* @param s - multi-slice object for the output array
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/slice/ctor' );
	* var MultiSlice = require( '@stdlib/slice/multi' );
	* var ndarray = require( './../../../ctor' );
	* var ndzeros = require( './../../../zeros' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var s = new MultiSlice( s0, s1, s2 );
	* // returns <MultiSlice>
	*
	* // Perform assignment:
	* var out = ns.sliceAssign( x, y, s, false );
	* // returns <ndarray>
	*
	* var bool = ( out === y );
	* // returns true
	*
	* arr = ndarray2array( y );
	* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
	*/
	sliceAssign: typeof sliceAssign;

	/**
	* Returns a view of an input ndarray when sliced along a specified dimension.
	*
	* @param x - input array
	* @param dim - index of dimension to slice
	* @param s - slice object or an integer
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/slice/ctor' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var y = ns.sliceDimension( x, 0, s, false, false );
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
	* Returns a shifted view of an input ndarray along a specified dimension.
	*
	* @param x - input array
	* @param dim - index of dimension to slice
	* @param start - starting index (inclusive)
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var y = ns.sliceDimensionFrom( x, 0, 1, false, false );
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
	* Returns a truncated view of an input ndarray along a specified dimension.
	*
	* @param x - input array
	* @param dim - index of dimension to slice
	* @param stop - ending index (exclusive)
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var y = ns.sliceDimensionTo( x, 0, 2, false, false );
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
	* Returns a shifted view of an input ndarray.
	*
	* @param x - input array
	* @param start - starting indices (inclusive)
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var s = [ 1, null ];
	* var y = ns.sliceFrom( x, s, false, false );
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
	* Returns a truncated view of an input ndarray.
	*
	* @param x - input array
	* @param stop - ending indices (exclusive)
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @param writable - boolean indicating whether a returned array should be writable
	* @returns output array
	*
	* @example
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
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
	* var s = [ 2, null ];
	* var y = ns.sliceTo( x, s, false, false );
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
	* Expands the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.
	*
	* ## Notes
	*
	* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`. If provided a negative dimension index, the position at which to place a respective dimension is computed as `ndims + index`.
	* -   Provided dimension indices must resolve to normalized dimension indices arranged in ascending order.
	*
	* @param ndims - number of dimensions in the output array
	* @param x - input array
	* @param dims - dimension indices
	* @returns output array
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.spreadDimensions( 5, x, [ 1, 3 ] );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 1, 2, 1, 2, 1 ]
	*
	* var v = y.get( 0, 0, 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 0, 1, 0 );
	* // returns 2
	*
	* v = y.get( 0, 1, 0, 0, 0 );
	* // returns 3
	*
	* v = y.get( 0, 1, 0, 1, 0 );
	* // returns 4
	*/
	spreadDimensions: typeof spreadDimensions;

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
	* var zeros = require( './../../../zeros' );
	*
	* var st = ns.stride( zeros( [ 3, 3, 3 ] ), 0 );
	* // returns 9
	*/
	stride: typeof stride;

	/**
	* Returns the strides of a provided ndarray.
	*
	* ## Notes
	*
	* -   When `copy` is `false`, changes to the returned strides array may mutate the input ndarray strides. If there is a chance that the returned strides will be mutated (either directly or by downstream consumers), set `copy` to `true` to prevent unintended side effects.
	*
	* @param x - input ndarray
	* @param copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `strides` property
	* @returns strides
	*
	* @example
	* var zeros = require( './../../../zeros' );
	*
	* var st = ns.strides( zeros( [ 3, 3, 3 ] ), false );
	* // returns [ 9, 3, 1 ]
	*/
	strides: typeof strides;

	/**
	* Returns the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @returns offset
	*
	* @example
	* var shape = [ 2, 3, 10 ];
	* var strides = [ 30, -10, 1 ];
	*
	* var offset = ns.strides2offset( shape, strides );
	* // returns 20
	*/
	strides2offset: typeof strides2offset;

	/**
	* Determines the order of a multidimensional array based on a provided stride array.
	*
	* @param strides - stride array
	* @returns order
	*
	* @example
	* var order = ns.strides2order( [ 2, 1 ] );
	* // returns 1
	*
	* @example
	* var order = ns.strides2order( [ 1, 2 ] );
	* // returns 2
	*
	* @example
	* var order = ns.strides2order( [ 1, 1, 1 ] );
	* // returns 3
	*
	* @example
	* var order = ns.strides2order( [ 2, 3, 1 ] );
	* // returns 0
	*/
	strides2order: typeof strides2order;

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
	* -   When provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
	*
	* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.
	*
	*     ```text
	*     Dims: 2x2
	*     Buffer: [ 1, 2, 3, 4 ]
	*
	*     View = [ a00, a01,
	*              a10, a11 ]
	*
	*     Strides: 2,1
	*     Offset: 0
	*
	*     View = [ 1, 2,
	*              3, 4 ]
	*
	*     Strides: 2,-1
	*     Offset: 1
	*
	*     View = [ 2, 1,
	*              4, 3 ]
	*
	*     Strides: -2,1
	*     Offset: 2
	*
	*     View = [ 3, 4,
	*              1, 2 ]
	*
	*     Strides: -2,-1
	*     Offset: 3
	*
	*     View = [ 4, 3,
	*              2, 1 ]
	*     ```
	*
	*     ```javascript
	*     var shape = [ 2, 2 ];
	*     var strides = [ -2, 1 ];
	*     var offset = 2;
	*     var mode = [ 'throw' ];
	*
	*     // From the perspective of a view...
	*     var idx = sub2ind( shape, strides, 0, 0, 0, mode );
	*     // returns 0
	*
	*     idx = sub2ind( shape, strides, 0, 0, 1, mode );
	*     // returns 1
	*
	*     idx = sub2ind( shape, strides, 0, 1, 0, mode );
	*     // returns 2
	*
	*     idx = sub2ind( shape, strides, 0, 1, 1, mode );
	*     // returns 3
	*
	*     // From the perspective of an underlying buffer...
	*     idx = sub2ind( shape, strides, offset, 0, 0, mode );
	*     // returns 2
	*
	*     idx = sub2ind( shape, strides, offset, 0, 1, mode );
	*     // returns 3
	*
	*     idx = sub2ind( shape, strides, offset, 1, 0, mode );
	*     // returns 0
	*
	*     idx = sub2ind( shape, strides, offset, 1, 1, mode );
	*     // returns 1
	*     ```
	*
	*     In short, from the perspective of a view, view data is always ordered.
	*
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param args - subscripts followed by a `mode` specifying how to handle subscripts which exceed array dimensions
	* @param mode - specifies how to handle subscripts which exceed array dimensions
	* @throws must provide subscripts which do not exceed array dimensions
	* @returns linear index
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var strides = [ 9, 3, 1 ];
	* var offset = 0;
	* var mode = [ 'throw' ]
	*
	* var idx = ns.sub2ind( shape, strides, offset, 1, 2, 2, mode );
	* // returns 17
	*/
	sub2ind: typeof sub2ind;

	/**
	* Converts an ndarray buffer to a generic array (which may include nested arrays).
	*
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns array (which may include nested arrays)
	*
	* @example
	* var buffer = [ 1, 2, 3, 4 ];
	* var shape = [ 2, 2 ];
	* var order = 'row-major';
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray2array( buffer, shape, strides, offset, order );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*/
	ndarray2array: typeof ndarray2array;

	/**
	* Normalizes a list of indices to the interval `[0,max]`.
	*
	* ## Notes
	*
	* -   If provided an out-of-bounds index, the function normalizes the index to `-1`.
	*
	* @param indices - indices
	* @param max - maximum index
	* @returns normalized indices
	*
	* @example
	* var indices = ns.toNormalizedIndices( [ -2, 5 ], 10 );
	* // returns [ 9, 5 ]
	*
	* indices = ns.toNormalizedIndices( [ -2, 15 ], 10 );
	* // returns [ 9, -1 ]
	*/
	toNormalizedIndices: typeof toNormalizedIndices;

	/**
	* Returns a new ndarray where the order of elements of an input ndarray is reversed along each dimension.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var typedarray = require( '@stdlib/array/typed' );
	* var ndarray = require( './../../../ctor' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float64' );
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 3, 2 ]
	*
	* var arr = ndarray2array( x );
	* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* var y = ns.toReversed( x );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* arr = ndarray2array( y );
	* // returns [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
	*/
	toReversed: typeof toReversed;

	/**
	* Returns a list of unique indices after normalizing to the interval `[0,max]`.
	*
	* ## Notes
	*
	* -   If provided an out-of-bounds index, the function returns `null`.
	*
	* @param indices - indices
	* @param max - maximum index
	* @returns normalized indices (or null)
	*
	* @example
	* var indices = ns.toUniqueNormalizedIndices( [ -2, 5 ], 10 );
	* // returns [ 9, 5 ]
	*
	* indices = ns.toUniqueNormalizedIndices( [ -2, 15 ], 10 );
	* // returns null
	*/
	toUniqueNormalizedIndices: typeof toUniqueNormalizedIndices;

	/**
	* Transposes a matrix (or a stack of matrices).
	*
	* @param x - input array
	* @returns ndarray view
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
	*     'dtype': 'generic'
	* });
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 3 ]
	*
	* var y = ns.transpose( x );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
	* // returns true
	*
	* bool = ( x.data === y.data );
	* // returns true
	*/
	transpose: typeof transpose;

	/**
	* Applies a unary callback to elements in an ndarray and assigns results to elements in an ndarray.
	*
	* @param arrays - array-like object containing one input ndarray and one output ndarray
	* @param fcn - unary callback
	* @throws arrays must have the same number of dimensions
	* @throws arrays must have the same shape
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var ybuf = new Float64Array( 6 );
	*
	* // Define the shape of the input and output arrays:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	* var sy = [ 2, 2, 1 ];
	*
	* // Define the index offsets:
	* var ox = 1;
	* var oy = 0;
	*
	* // Create the input and output ndarrays:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
	*
	* // Apply the ns.unary function:
	* ns.unary( [ x, y ], scale );
	*
	* console.log( y.data );
	* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
	*/
	unary: typeof unary;

	/**
	* Applies a unary function to elements in an ndarray and assigns results to elements in an ndarray.
	*
	* @param arrays - array-like object containing one input ndarray and one output ndarray
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @throws arrays must have the same number of dimensions
	* @throws arrays must have the same shape
	*
	* @example
	* var identity = require( '@stdlib/number/float64/base/identity' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( './../../../ctor' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var ybuf = new Float64Array( 6 );
	*
	* // Define the shape of the input and output arrays:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	* var sy = [ 2, 2, 1 ];
	*
	* // Define the index offsets:
	* var ox = 1;
	* var oy = 0;
	*
	* // Create the input and output ndarrays:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
	*
	* // Apply the unary function:
	* ns.unaryBy( [ x, y ], scale, identity );
	*
	* console.log( y.data );
	* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
	*/
	unaryBy: typeof unaryBy;

	/**
	* Reorders ndarray dimensions and associated strides for loop interchange.
	*
	* ## Notes
	*
	* -   The returned object has the following properties:
	*
	*     -   **sh**: dimensions sorted in loop order.
	*     -   **sx**: input ndarray strides sorted in loop order.
	*     -   **sy**: output ndarray strides sorted in loop order.
	*     -   **idx**: dimension indices sorted in loop order.
	*
	* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
	*
	*     The purpose of this function is to order ndarray dimensions according to the magnitude of **input array** strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
	*
	* -   Cache performance may be degraded if the layout order (i.e., row-major or column-major) differs for the input and output ndarrays. This function is intended to optimize cache performance for the input ndarray. If the output ndarray has a different layout order (e.g., if the input ndarray is row-major and the output ndarray is column-major), cache misses are likely for the output ndarray. In general, to ensure best performance, input and output ndarrays should have the same layout order.
	*
	* -   The function assumes that the input and output ndarrays have the same shape. Hence, loop interchange order should only be determined **after** broadcasting.
	*
	* @param sh - array dimensions
	* @param sx - input array stride lengths
	* @param sy - output array stride lengths
	* @returns loop interchange data
	*
	* @example
	* var sh = [ 2, 3, 4 ];
	*
	* var sx = [ 12, 4, 1 ]; // row-major
	* var sy = [ 1, -2, 6 ]; // column-major
	*
	* var o = ns.unaryLoopOrder( sh, sx, sy );
	* // returns {...}
	*
	* var ssh = o.sh;
	* // returns [ 4, 3, 2 ]
	*
	* var ssx = o.sx;
	* // returns [ 1, 4, 12 ]
	*
	* var ssy = o.sy;
	* // returns [ 6, -2, 1 ]
	*
	* var idx = o.idx;
	* // returns [ 2, 1, 0 ]
	*/
	unaryLoopOrder: typeof unaryLoopOrder;

	/**
	* Resolves the output ndarray data type for a unary function.
	*
	* @param dtype - input ndarray data type
	* @param policy - output ndarray data type policy
	* @returns output ndarray data type
	*
	* @example
	* var dt = ns.unaryOutputDataType( 'float64', 'complex_floating_point' );
	* // returns <string>
	*/
	unaryOutputDataType: typeof unaryOutputDataType;

	/**
	* Returns a loop block size for multi-dimensional array tiled loops.
	*
	* @param dtypeX - input array data type
	* @param dtypeY - output array data type
	* @returns block size (in units of elements)
	*
	* @example
	* var bsize = ns.unaryBlockSize( 'float64', 'float64' );
	* // returns <number>
	*/
	unaryBlockSize: typeof unaryBlockSize;

	/**
	* Converts a linear index in an array view to a linear index in an underlying data buffer.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index in an array view
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns linear index in an underlying data buffer
	*
	* @example
	* var shape = [ 3, 3 ];
	* var strides = [ -3, 1 ];
	* var offset = 6;
	* var order = 'row-major';
	* var mode = 'throw';
	*
	* var ind = ns.vind2bind( shape, strides, offset, order, 1, mode );
	* // returns 7
	*/
	vind2bind: typeof vind2bind;

	/**
	* Wraps an index on the interval `[0,max]`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.wrapIndex( -1, 10 );
	* // returns 10
	*
	* idx = ns.wrapIndex( 13, 10 );
	* // returns 2
	*
	* idx = ns.wrapIndex( 6, 10 );
	* // returns 6
	*/
	wrapIndex: typeof wrapIndex;

	/**
	* Creates a zero-filled array having a specified shape and data type.
	*
	* @param dtype - underlying data type
	* @param shape - array shape
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns zero-filled array
	*
	* @example
	* var arr = ns.zeros( 'float64', [ 2, 2 ], 'row-major' );
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
	* @returns zero-filled array
	*
	* @example
	* var zeros = require( './../../../base/zeros' );
	*
	* var x = zeros( 'generic', [ 2, 2 ], 'row-major' );
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
* Base ndarray.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
