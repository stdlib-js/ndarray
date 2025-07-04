<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Base

> Base ndarray.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray/base' );
```

#### ns

Base ndarray.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc keywords="-assertion" > -->

<div class="namespace-toc">

-   <span class="signature">[`assign( arrays )`][@stdlib/ndarray/base/assign]</span><span class="delimiter">: </span><span class="description">assign elements in an input ndarray to elements in an output ndarray.</span>
-   <span class="signature">[`binaryLoopOrder( shape, stridesX, stridesY, stridesZ )`][@stdlib/ndarray/base/binary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`binaryOutputDataType( xdtype, ydtype, policy )`][@stdlib/ndarray/base/binary-output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type for a binary function.</span>
-   <span class="signature">[`binaryBlockSize( dtypeX, dtypeY, dtypeZ )`][@stdlib/ndarray/base/binary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`binary( arrays, fcn )`][@stdlib/ndarray/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in input ndarrays and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`bind2vind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/bind2vind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an underlying data buffer to a linear index in an array view.</span>
-   <span class="signature">[`broadcastArray( arr, shape )`][@stdlib/ndarray/base/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape.</span>
-   <span class="signature">[`broadcastArrays( arrays )`][@stdlib/ndarray/base/broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`broadcastScalar( value, dtype, shape, order )`][@stdlib/ndarray/base/broadcast-scalar]</span><span class="delimiter">: </span><span class="description">broadcast a scalar value to an `ndarray` having a specified shape.</span>
-   <span class="signature">[`broadcastShapes( shapes )`][@stdlib/ndarray/base/broadcast-shapes]</span><span class="delimiter">: </span><span class="description">broadcast array shapes to a single shape.</span>
-   <span class="signature">[`bufferCtors( dtype )`][@stdlib/ndarray/base/buffer-ctors]</span><span class="delimiter">: </span><span class="description">ndarray data buffer constructors.</span>
-   <span class="signature">[`bufferDataTypeEnum( buffer )`][@stdlib/ndarray/base/buffer-dtype-enum]</span><span class="delimiter">: </span><span class="description">return the data type enumeration constant of an ndarray data buffer.</span>
-   <span class="signature">[`bufferDataType( buffer )`][@stdlib/ndarray/base/buffer-dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an ndarray data buffer.</span>
-   <span class="signature">[`buffer( dtype, size )`][@stdlib/ndarray/base/buffer]</span><span class="delimiter">: </span><span class="description">create a contiguous linear ndarray data buffer.</span>
-   <span class="signature">[`bytesPerElement( dtype )`][@stdlib/ndarray/base/bytes-per-element]</span><span class="delimiter">: </span><span class="description">return the number of bytes per element provided an underlying array data type.</span>
-   <span class="signature">[`char2dtype( [ch] )`][@stdlib/ndarray/base/char2dtype]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a provided single letter character abbreviation.</span>
-   <span class="signature">[`clampIndex( idx, max )`][@stdlib/ndarray/base/clamp-index]</span><span class="delimiter">: </span><span class="description">restrict an index to the interval `[0,max]`.</span>
-   <span class="signature">[`countFalsy( arrays )`][@stdlib/ndarray/base/count-falsy]</span><span class="delimiter">: </span><span class="description">count the number of falsy elements in an ndarray.</span>
-   <span class="signature">[`countIf( arrays, predicate[, thisArg] )`][@stdlib/ndarray/base/count-if]</span><span class="delimiter">: </span><span class="description">count the number of elements in an ndarray which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`countTruthy( arrays )`][@stdlib/ndarray/base/count-truthy]</span><span class="delimiter">: </span><span class="description">count the number of truthy elements in an ndarray.</span>
-   <span class="signature">[`ndarray( dtype, buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/ctor]</span><span class="delimiter">: </span><span class="description">create a multidimensional array.</span>
-   <span class="signature">[`data( x )`][@stdlib/ndarray/base/data-buffer]</span><span class="delimiter">: </span><span class="description">return the underlying data buffer of a provided ndarray.</span>
-   <span class="signature">[`dtypeChar( [dtype] )`][@stdlib/ndarray/base/dtype-char]</span><span class="delimiter">: </span><span class="description">return the single letter abbreviation for an underlying array data type.</span>
-   <span class="signature">[`dtypeDesc( [dtype] )`][@stdlib/ndarray/base/dtype-desc]</span><span class="delimiter">: </span><span class="description">return the description for a specified data type.</span>
-   <span class="signature">[`dtypeEnum2Str( dtype )`][@stdlib/ndarray/base/dtype-enum2str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with an ndarray data type enumeration constant.</span>
-   <span class="signature">[`dtypeResolveEnum( dtype )`][@stdlib/ndarray/base/dtype-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeResolveStr( dtype )`][@stdlib/ndarray/base/dtype-resolve-str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeStr2Enum( dtype )`][@stdlib/ndarray/base/dtype-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an ndarray data type string.</span>
-   <span class="signature">[`dtype( x )`][@stdlib/ndarray/base/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of a provided ndarray.</span>
-   <span class="signature">[`dtype2c( dtype )`][@stdlib/ndarray/base/dtype2c]</span><span class="delimiter">: </span><span class="description">return the C data type associated with a provided data type value.</span>
-   <span class="signature">[`dtypes2signatures( dtypes, nin, nout )`][@stdlib/ndarray/base/dtypes2signatures]</span><span class="delimiter">: </span><span class="description">transform a list of array argument data types into a list of signatures.</span>
-   <span class="signature">[`emptyLike( x )`][@stdlib/ndarray/base/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`empty( dtype, shape, order )`][@stdlib/ndarray/base/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having a specified shape and data type.</span>
-   <span class="signature">[`everyBy( arrays, predicate[, thisArg] )`][@stdlib/ndarray/base/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in an ndarray pass a test implemented by a predicate function.</span>
-   <span class="signature">[`every( arrays )`][@stdlib/ndarray/base/every]</span><span class="delimiter">: </span><span class="description">test whether every element in an ndarray is truthy.</span>
-   <span class="signature">[`expandDimensions( x, axis )`][@stdlib/ndarray/base/expand-dimensions]</span><span class="delimiter">: </span><span class="description">expand the shape of an array by inserting a new dimension of size one at a specified axis.</span>
-   <span class="signature">[`fillBy( x, fcn[, thisArg] )`][@stdlib/ndarray/base/fill-by]</span><span class="delimiter">: </span><span class="description">fill an input ndarray according to a callback function.</span>
-   <span class="signature">[`fill( x, value )`][@stdlib/ndarray/base/fill]</span><span class="delimiter">: </span><span class="description">fill an input ndarray with a specified value.</span>
-   <span class="signature">[`flag( x, name )`][@stdlib/ndarray/base/flag]</span><span class="delimiter">: </span><span class="description">return a specified flag for a provided ndarray.</span>
-   <span class="signature">[`flags( x, copy )`][@stdlib/ndarray/base/flags]</span><span class="delimiter">: </span><span class="description">return the flags of a provided ndarray.</span>
-   <span class="signature">[`fliplr( x, writable )`][@stdlib/ndarray/base/fliplr]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along the last dimension is reversed.</span>
-   <span class="signature">[`flipud( x, writable )`][@stdlib/ndarray/base/flipud]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along the second-to-last dimension is reversed.</span>
-   <span class="signature">[`forEach( arrays, fcn[, thisArg] )`][@stdlib/ndarray/base/for-each]</span><span class="delimiter">: </span><span class="description">invoke a callback function once for each ndarray element.</span>
-   <span class="signature">[`scalar2ndarrayLike( x, value )`][@stdlib/ndarray/base/from-scalar-like]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.</span>
-   <span class="signature">[`scalar2ndarray( value, dtype, order )`][@stdlib/ndarray/base/from-scalar]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray.</span>
-   <span class="signature">[`includes( arrays )`][@stdlib/ndarray/base/includes]</span><span class="delimiter">: </span><span class="description">test whether an ndarray contains a specified value.</span>
-   <span class="signature">[`ind( idx, max, mode )`][@stdlib/ndarray/base/ind]</span><span class="delimiter">: </span><span class="description">return an index given an index mode.</span>
-   <span class="signature">[`ind2sub( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/ind2sub]</span><span class="delimiter">: </span><span class="description">convert a linear index to an array of subscripts.</span>
-   <span class="signature">[`iterationOrder( strides )`][@stdlib/ndarray/base/iteration-order]</span><span class="delimiter">: </span><span class="description">given a stride array, determine array iteration order.</span>
-   <span class="signature">[`loopOrder( shape, strides )`][@stdlib/ndarray/base/loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`map( arrays, fcn[, thisArg] )`][@stdlib/ndarray/base/map]</span><span class="delimiter">: </span><span class="description">apply a callback function to elements in an input ndarray and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`maxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/max-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the maximum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`maybeBroadcastArray( arr, shape )`][@stdlib/ndarray/base/maybe-broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.</span>
-   <span class="signature">[`maybeBroadcastArrays( arrays )`][@stdlib/ndarray/base/maybe-broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`metaDataProps( meta, dtypes, obj )`][@stdlib/ndarray/base/meta-data-props]</span><span class="delimiter">: </span><span class="description">define non-enumerable read-only properties which expose ndarray function meta data.</span>
-   <span class="signature">[`minSignedIntegerDataType( value )`][@stdlib/ndarray/base/min-signed-integer-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum ndarray data type for storing a provided signed integer value.</span>
-   <span class="signature">[`minUnsignedIntegerDataType( value )`][@stdlib/ndarray/base/min-unsigned-integer-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum ndarray data type for storing a provided unsigned integer value.</span>
-   <span class="signature">[`minViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/min-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`minmaxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/minmax-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.</span>
-   <span class="signature">[`ndarraylike2ndarray( x )`][@stdlib/ndarray/base/ndarraylike2ndarray]</span><span class="delimiter">: </span><span class="description">convert an ndarray-like object to an `ndarray`.</span>
-   <span class="signature">[`ndarraylike2object( x )`][@stdlib/ndarray/base/ndarraylike2object]</span><span class="delimiter">: </span><span class="description">convert an `ndarray`-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`ndarraylike2scalar( x )`][@stdlib/ndarray/base/ndarraylike2scalar]</span><span class="delimiter">: </span><span class="description">convert an ndarray-like object to a scalar value.</span>
-   <span class="signature">[`ndims( x )`][@stdlib/ndarray/base/ndims]</span><span class="delimiter">: </span><span class="description">return the number of ndarray dimensions.</span>
-   <span class="signature">[`nextCartesianIndex( shape, order, idx, dim )`][@stdlib/ndarray/base/next-cartesian-index]</span><span class="delimiter">: </span><span class="description">return the next Cartesian index (i.e., set of subscripts/dimension indices).</span>
-   <span class="signature">[`nonsingletonDimensions( shape )`][@stdlib/ndarray/base/nonsingleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of non-singleton dimensions.</span>
-   <span class="signature">[`normalizeIndex( idx, max )`][@stdlib/ndarray/base/normalize-index]</span><span class="delimiter">: </span><span class="description">normalize an index to the interval `[0,max]`.</span>
-   <span class="signature">[`normalizeIndices( indices, max )`][@stdlib/ndarray/base/normalize-indices]</span><span class="delimiter">: </span><span class="description">normalize a list of indices to the interval `[0,max]`.</span>
-   <span class="signature">[`nullaryLoopOrder( shape, stridesX )`][@stdlib/ndarray/base/nullary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`nullaryBlockSize( dtypeX )`][@stdlib/ndarray/base/nullary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`nullary( arrays, fcn )`][@stdlib/ndarray/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`numelDimension( x, dim )`][@stdlib/ndarray/base/numel-dimension]</span><span class="delimiter">: </span><span class="description">return the size (i.e., number of elements) of a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`numel( shape )`][@stdlib/ndarray/base/numel]</span><span class="delimiter">: </span><span class="description">return the number of elements in an array.</span>
-   <span class="signature">[`offset( x )`][@stdlib/ndarray/base/offset]</span><span class="delimiter">: </span><span class="description">return the index offset specifying the underlying buffer index of the first iterated ndarray element.</span>
-   <span class="signature">[`order( x )`][@stdlib/ndarray/base/order]</span><span class="delimiter">: </span><span class="description">return the layout order of a provided ndarray.</span>
-   <span class="signature">[`outputDataType( dtypes, policy )`][@stdlib/ndarray/base/output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type from a list of input ndarray data types.</span>
-   <span class="signature">[`outputPolicyEnum2Str( policy )`][@stdlib/ndarray/base/output-policy-enum2str]</span><span class="delimiter">: </span><span class="description">return the policy string associated with an output ndarray data type policy enumeration constant.</span>
-   <span class="signature">[`outputPolicyResolveEnum( policy )`][@stdlib/ndarray/base/output-policy-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type policy value.</span>
-   <span class="signature">[`outputPolicyResolveStr( dtype )`][@stdlib/ndarray/base/output-policy-resolve-str]</span><span class="delimiter">: </span><span class="description">return the policy string associated with a supported ndarray data type policy value.</span>
-   <span class="signature">[`outputPolicyStr2Enum( policy )`][@stdlib/ndarray/base/output-policy-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an output ndarray data type policy string.</span>
-   <span class="signature">[`prependSingletonDimensions( x, n )`][@stdlib/ndarray/base/prepend-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">prepend singleton dimensions.</span>
-   <span class="signature">[`promoteDataTypes( dtypes )`][@stdlib/ndarray/base/promote-dtypes]</span><span class="delimiter">: </span><span class="description">resolve the data type that results from applying promotion rules to a provided list of data types.</span>
-   <span class="signature">[`removeSingletonDimensions( x )`][@stdlib/ndarray/base/remove-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">remove singleton dimensions.</span>
-   <span class="signature">[`reverseDimension( x, dim, writable )`][@stdlib/ndarray/base/reverse-dimension]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along a specified dimension is reversed.</span>
-   <span class="signature">[`reverse( x, writable )`][@stdlib/ndarray/base/reverse]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along each dimension is reversed.</span>
-   <span class="signature">[`serializeMetaData( x )`][@stdlib/ndarray/base/serialize-meta-data]</span><span class="delimiter">: </span><span class="description">serialize ndarray meta data.</span>
-   <span class="signature">[`shape( x, copy )`][@stdlib/ndarray/base/shape]</span><span class="delimiter">: </span><span class="description">return the shape of a provided ndarray.</span>
-   <span class="signature">[`shape2strides( shape, order )`][@stdlib/ndarray/base/shape2strides]</span><span class="delimiter">: </span><span class="description">generate a stride array from an array shape.</span>
-   <span class="signature">[`singletonDimensions( shape )`][@stdlib/ndarray/base/singleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of singleton dimensions.</span>
-   <span class="signature">[`sliceAssign( x, y, slice, strict )`][@stdlib/ndarray/base/slice-assign]</span><span class="delimiter">: </span><span class="description">assign element values from a broadcasted input `ndarray` to corresponding elements in an output `ndarray` view.</span>
-   <span class="signature">[`sliceDimensionFrom( x, dim, start, strict, writable )`][@stdlib/ndarray/base/slice-dimension-from]</span><span class="delimiter">: </span><span class="description">return a shifted view of an input ndarray along a specified dimension.</span>
-   <span class="signature">[`sliceDimensionTo( x, dim, stop, strict, writable )`][@stdlib/ndarray/base/slice-dimension-to]</span><span class="delimiter">: </span><span class="description">return a truncated view of an input ndarray along a specified dimension.</span>
-   <span class="signature">[`sliceDimension( x, dim, slice, strict, writable )`][@stdlib/ndarray/base/slice-dimension]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray when sliced along a specified dimension.</span>
-   <span class="signature">[`sliceFrom( x, start, strict, writable )`][@stdlib/ndarray/base/slice-from]</span><span class="delimiter">: </span><span class="description">return a shifted view of an input ndarray.</span>
-   <span class="signature">[`sliceTo( x, stop, strict, writable )`][@stdlib/ndarray/base/slice-to]</span><span class="delimiter">: </span><span class="description">return a truncated view of an input ndarray.</span>
-   <span class="signature">[`slice( x, slice, strict, writable )`][@stdlib/ndarray/base/slice]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray.</span>
-   <span class="signature">[`someBy( arrays, predicate[, thisArg ] )`][@stdlib/ndarray/base/some-by]</span><span class="delimiter">: </span><span class="description">test whether at least `n` elements in an ndarray pass a test implemented by a predicate function.</span>
-   <span class="signature">[`spreadDimensions( ndims, x, dims )`][@stdlib/ndarray/base/spread-dimensions]</span><span class="delimiter">: </span><span class="description">expand the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.</span>
-   <span class="signature">[`stride( x, dim )`][@stdlib/ndarray/base/stride]</span><span class="delimiter">: </span><span class="description">return the stride along a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`strides( x, copy )`][@stdlib/ndarray/base/strides]</span><span class="delimiter">: </span><span class="description">return the strides of a provided ndarray.</span>
-   <span class="signature">[`strides2offset( shape, strides )`][@stdlib/ndarray/base/strides2offset]</span><span class="delimiter">: </span><span class="description">determine the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.</span>
-   <span class="signature">[`strides2order( strides )`][@stdlib/ndarray/base/strides2order]</span><span class="delimiter">: </span><span class="description">determine the order of a multidimensional array based on a provided stride array.</span>
-   <span class="signature">[`sub2ind( shape, strides, offset, ...subscripts, mode )`][@stdlib/ndarray/base/sub2ind]</span><span class="delimiter">: </span><span class="description">convert subscripts to a linear index.</span>
-   <span class="signature">[`ndarray2array( buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/to-array]</span><span class="delimiter">: </span><span class="description">convert an ndarray buffer to a generic array.</span>
-   <span class="signature">[`toNormalizedIndices( indices, max )`][@stdlib/ndarray/base/to-normalized-indices]</span><span class="delimiter">: </span><span class="description">normalize a list of indices to the interval `[0,max]`.</span>
-   <span class="signature">[`toReversed( x )`][@stdlib/ndarray/base/to-reversed]</span><span class="delimiter">: </span><span class="description">return a new ndarray where the order of elements of an input ndarray is reversed along each dimension.</span>
-   <span class="signature">[`toUniqueNormalizedIndices( indices, max )`][@stdlib/ndarray/base/to-unique-normalized-indices]</span><span class="delimiter">: </span><span class="description">return a list of unique indices after normalizing to the interval `[0,max]`.</span>
-   <span class="signature">[`transpose( x )`][@stdlib/ndarray/base/transpose]</span><span class="delimiter">: </span><span class="description">transpose a matrix (or a stack of matrices).</span>
-   <span class="signature">[`unaryAccumulate( arrays, initial, clbk )`][@stdlib/ndarray/base/unary-accumulate]</span><span class="delimiter">: </span><span class="description">perform a reduction over elements in an input ndarray.</span>
-   <span class="signature">[`unaryBy( arrays, fcn, clbk[, thisArg] )`][@stdlib/ndarray/base/unary-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element in an input ndarray according to a callback function and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`unaryInputCastingDataType( idtype, odtype, policy )`][@stdlib/ndarray/base/unary-input-casting-dtype]</span><span class="delimiter">: </span><span class="description">resolve the input ndarray casting data type for a unary function.</span>
-   <span class="signature">[`unaryLoopOrder( shape, stridesX, stridesY )`][@stdlib/ndarray/base/unary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`unaryOutputDataType( dtype, policy )`][@stdlib/ndarray/base/unary-output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type for a unary function.</span>
-   <span class="signature">[`unaryReduceStrided1dAssignStruct( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-reduce-strided1d-assign-struct]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function which accepts an output `struct` object and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1dBy( fcn, arrays, dims[, options], clbk[, thisArg] )`][@stdlib/ndarray/base/unary-reduce-strided1d-by]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function accepting a callback and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatchByFactory( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by-factory]</span><span class="delimiter">: </span><span class="description">create a function for performing a reduction on an input ndarray according to a callback function.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatchBy( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by]</span><span class="delimiter">: </span><span class="description">constructor for performing a reduction on an input ndarray according to a callback function.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatchFactory( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory]</span><span class="delimiter">: </span><span class="description">create a function for performing a reduction on an input ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatch( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]</span><span class="delimiter">: </span><span class="description">constructor for performing a reduction on an input ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1d( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-reduce-strided1d]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceSubarrayBy( fcn, arrays, dims[, options], clbk[, thisArg] )`][@stdlib/ndarray/base/unary-reduce-subarray-by]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray according to a callback function and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceSubarray( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-reduce-subarray]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryStrided1dDispatchFactory( table, idtypes, odtypes, policies[, options] )`][@stdlib/ndarray/base/unary-strided1d-dispatch-factory]</span><span class="delimiter">: </span><span class="description">create a function for applying a strided function an input ndarray.</span>
-   <span class="signature">[`unaryStrided1dDispatch( table, idtypes, odtypes, policies[, options] )`][@stdlib/ndarray/base/unary-strided1d-dispatch]</span><span class="delimiter">: </span><span class="description">constructor for applying a strided function to an input ndarray.</span>
-   <span class="signature">[`unaryStrided1d( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-strided1d]</span><span class="delimiter">: </span><span class="description">apply a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryBlockSize( dtypeX, dtypeY )`][@stdlib/ndarray/base/unary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`unary( arrays, fcn )`][@stdlib/ndarray/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in an input ndarray and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`vind2bind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/vind2bind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an array view to a linear index in an underlying data buffer.</span>
-   <span class="signature">[`wrapIndex( idx, max )`][@stdlib/ndarray/base/wrap-index]</span><span class="delimiter">: </span><span class="description">wrap an index on the interval `[0,max]`.</span>
-   <span class="signature">[`zerosLike( x )`][@stdlib/ndarray/base/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`zeros( dtype, shape, order )`][@stdlib/ndarray/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

</div>

<!-- </toc> -->

The namespace contains the following sub-namespaces:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/ndarray/base/assert]</span><span class="delimiter">: </span><span class="description">base ndarray assertion utilities.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/ndarray/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/ndarray/base/assert]: https://github.com/stdlib-js/ndarray/tree/main/base/assert

[@stdlib/ndarray/base/assign]: https://github.com/stdlib-js/ndarray/tree/main/base/assign

[@stdlib/ndarray/base/binary-loop-interchange-order]: https://github.com/stdlib-js/ndarray/tree/main/base/binary-loop-interchange-order

[@stdlib/ndarray/base/binary-output-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/binary-output-dtype

[@stdlib/ndarray/base/binary-tiling-block-size]: https://github.com/stdlib-js/ndarray/tree/main/base/binary-tiling-block-size

[@stdlib/ndarray/base/binary]: https://github.com/stdlib-js/ndarray/tree/main/base/binary

[@stdlib/ndarray/base/bind2vind]: https://github.com/stdlib-js/ndarray/tree/main/base/bind2vind

[@stdlib/ndarray/base/broadcast-array]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-array

[@stdlib/ndarray/base/broadcast-arrays]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-arrays

[@stdlib/ndarray/base/broadcast-scalar]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-scalar

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray/tree/main/base/buffer-ctors

[@stdlib/ndarray/base/buffer-dtype-enum]: https://github.com/stdlib-js/ndarray/tree/main/base/buffer-dtype-enum

[@stdlib/ndarray/base/buffer-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/buffer-dtype

[@stdlib/ndarray/base/buffer]: https://github.com/stdlib-js/ndarray/tree/main/base/buffer

[@stdlib/ndarray/base/bytes-per-element]: https://github.com/stdlib-js/ndarray/tree/main/base/bytes-per-element

[@stdlib/ndarray/base/char2dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/char2dtype

[@stdlib/ndarray/base/clamp-index]: https://github.com/stdlib-js/ndarray/tree/main/base/clamp-index

[@stdlib/ndarray/base/count-falsy]: https://github.com/stdlib-js/ndarray/tree/main/base/count-falsy

[@stdlib/ndarray/base/count-if]: https://github.com/stdlib-js/ndarray/tree/main/base/count-if

[@stdlib/ndarray/base/count-truthy]: https://github.com/stdlib-js/ndarray/tree/main/base/count-truthy

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray/tree/main/base/ctor

[@stdlib/ndarray/base/data-buffer]: https://github.com/stdlib-js/ndarray/tree/main/base/data-buffer

[@stdlib/ndarray/base/dtype-char]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-char

[@stdlib/ndarray/base/dtype-desc]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-desc

[@stdlib/ndarray/base/dtype-enum2str]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-enum2str

[@stdlib/ndarray/base/dtype-resolve-enum]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-resolve-enum

[@stdlib/ndarray/base/dtype-resolve-str]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-resolve-str

[@stdlib/ndarray/base/dtype-str2enum]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-str2enum

[@stdlib/ndarray/base/dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype

[@stdlib/ndarray/base/dtype2c]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype2c

[@stdlib/ndarray/base/dtypes2signatures]: https://github.com/stdlib-js/ndarray/tree/main/base/dtypes2signatures

[@stdlib/ndarray/base/empty-like]: https://github.com/stdlib-js/ndarray/tree/main/base/empty-like

[@stdlib/ndarray/base/empty]: https://github.com/stdlib-js/ndarray/tree/main/base/empty

[@stdlib/ndarray/base/every-by]: https://github.com/stdlib-js/ndarray/tree/main/base/every-by

[@stdlib/ndarray/base/every]: https://github.com/stdlib-js/ndarray/tree/main/base/every

[@stdlib/ndarray/base/expand-dimensions]: https://github.com/stdlib-js/ndarray/tree/main/base/expand-dimensions

[@stdlib/ndarray/base/fill-by]: https://github.com/stdlib-js/ndarray/tree/main/base/fill-by

[@stdlib/ndarray/base/fill]: https://github.com/stdlib-js/ndarray/tree/main/base/fill

[@stdlib/ndarray/base/flag]: https://github.com/stdlib-js/ndarray/tree/main/base/flag

[@stdlib/ndarray/base/flags]: https://github.com/stdlib-js/ndarray/tree/main/base/flags

[@stdlib/ndarray/base/fliplr]: https://github.com/stdlib-js/ndarray/tree/main/base/fliplr

[@stdlib/ndarray/base/flipud]: https://github.com/stdlib-js/ndarray/tree/main/base/flipud

[@stdlib/ndarray/base/for-each]: https://github.com/stdlib-js/ndarray/tree/main/base/for-each

[@stdlib/ndarray/base/from-scalar-like]: https://github.com/stdlib-js/ndarray/tree/main/base/from-scalar-like

[@stdlib/ndarray/base/from-scalar]: https://github.com/stdlib-js/ndarray/tree/main/base/from-scalar

[@stdlib/ndarray/base/includes]: https://github.com/stdlib-js/ndarray/tree/main/base/includes

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray/tree/main/base/ind

[@stdlib/ndarray/base/ind2sub]: https://github.com/stdlib-js/ndarray/tree/main/base/ind2sub

[@stdlib/ndarray/base/iteration-order]: https://github.com/stdlib-js/ndarray/tree/main/base/iteration-order

[@stdlib/ndarray/base/loop-interchange-order]: https://github.com/stdlib-js/ndarray/tree/main/base/loop-interchange-order

[@stdlib/ndarray/base/map]: https://github.com/stdlib-js/ndarray/tree/main/base/map

[@stdlib/ndarray/base/max-view-buffer-index]: https://github.com/stdlib-js/ndarray/tree/main/base/max-view-buffer-index

[@stdlib/ndarray/base/maybe-broadcast-array]: https://github.com/stdlib-js/ndarray/tree/main/base/maybe-broadcast-array

[@stdlib/ndarray/base/maybe-broadcast-arrays]: https://github.com/stdlib-js/ndarray/tree/main/base/maybe-broadcast-arrays

[@stdlib/ndarray/base/meta-data-props]: https://github.com/stdlib-js/ndarray/tree/main/base/meta-data-props

[@stdlib/ndarray/base/min-signed-integer-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/min-signed-integer-dtype

[@stdlib/ndarray/base/min-unsigned-integer-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/min-unsigned-integer-dtype

[@stdlib/ndarray/base/min-view-buffer-index]: https://github.com/stdlib-js/ndarray/tree/main/base/min-view-buffer-index

[@stdlib/ndarray/base/minmax-view-buffer-index]: https://github.com/stdlib-js/ndarray/tree/main/base/minmax-view-buffer-index

[@stdlib/ndarray/base/ndarraylike2ndarray]: https://github.com/stdlib-js/ndarray/tree/main/base/ndarraylike2ndarray

[@stdlib/ndarray/base/ndarraylike2object]: https://github.com/stdlib-js/ndarray/tree/main/base/ndarraylike2object

[@stdlib/ndarray/base/ndarraylike2scalar]: https://github.com/stdlib-js/ndarray/tree/main/base/ndarraylike2scalar

[@stdlib/ndarray/base/ndims]: https://github.com/stdlib-js/ndarray/tree/main/base/ndims

[@stdlib/ndarray/base/next-cartesian-index]: https://github.com/stdlib-js/ndarray/tree/main/base/next-cartesian-index

[@stdlib/ndarray/base/nonsingleton-dimensions]: https://github.com/stdlib-js/ndarray/tree/main/base/nonsingleton-dimensions

[@stdlib/ndarray/base/normalize-index]: https://github.com/stdlib-js/ndarray/tree/main/base/normalize-index

[@stdlib/ndarray/base/normalize-indices]: https://github.com/stdlib-js/ndarray/tree/main/base/normalize-indices

[@stdlib/ndarray/base/nullary-loop-interchange-order]: https://github.com/stdlib-js/ndarray/tree/main/base/nullary-loop-interchange-order

[@stdlib/ndarray/base/nullary-tiling-block-size]: https://github.com/stdlib-js/ndarray/tree/main/base/nullary-tiling-block-size

[@stdlib/ndarray/base/nullary]: https://github.com/stdlib-js/ndarray/tree/main/base/nullary

[@stdlib/ndarray/base/numel-dimension]: https://github.com/stdlib-js/ndarray/tree/main/base/numel-dimension

[@stdlib/ndarray/base/numel]: https://github.com/stdlib-js/ndarray/tree/main/base/numel

[@stdlib/ndarray/base/offset]: https://github.com/stdlib-js/ndarray/tree/main/base/offset

[@stdlib/ndarray/base/order]: https://github.com/stdlib-js/ndarray/tree/main/base/order

[@stdlib/ndarray/base/output-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/output-dtype

[@stdlib/ndarray/base/output-policy-enum2str]: https://github.com/stdlib-js/ndarray/tree/main/base/output-policy-enum2str

[@stdlib/ndarray/base/output-policy-resolve-enum]: https://github.com/stdlib-js/ndarray/tree/main/base/output-policy-resolve-enum

[@stdlib/ndarray/base/output-policy-resolve-str]: https://github.com/stdlib-js/ndarray/tree/main/base/output-policy-resolve-str

[@stdlib/ndarray/base/output-policy-str2enum]: https://github.com/stdlib-js/ndarray/tree/main/base/output-policy-str2enum

[@stdlib/ndarray/base/prepend-singleton-dimensions]: https://github.com/stdlib-js/ndarray/tree/main/base/prepend-singleton-dimensions

[@stdlib/ndarray/base/promote-dtypes]: https://github.com/stdlib-js/ndarray/tree/main/base/promote-dtypes

[@stdlib/ndarray/base/remove-singleton-dimensions]: https://github.com/stdlib-js/ndarray/tree/main/base/remove-singleton-dimensions

[@stdlib/ndarray/base/reverse-dimension]: https://github.com/stdlib-js/ndarray/tree/main/base/reverse-dimension

[@stdlib/ndarray/base/reverse]: https://github.com/stdlib-js/ndarray/tree/main/base/reverse

[@stdlib/ndarray/base/serialize-meta-data]: https://github.com/stdlib-js/ndarray/tree/main/base/serialize-meta-data

[@stdlib/ndarray/base/shape]: https://github.com/stdlib-js/ndarray/tree/main/base/shape

[@stdlib/ndarray/base/shape2strides]: https://github.com/stdlib-js/ndarray/tree/main/base/shape2strides

[@stdlib/ndarray/base/singleton-dimensions]: https://github.com/stdlib-js/ndarray/tree/main/base/singleton-dimensions

[@stdlib/ndarray/base/slice-assign]: https://github.com/stdlib-js/ndarray/tree/main/base/slice-assign

[@stdlib/ndarray/base/slice-dimension-from]: https://github.com/stdlib-js/ndarray/tree/main/base/slice-dimension-from

[@stdlib/ndarray/base/slice-dimension-to]: https://github.com/stdlib-js/ndarray/tree/main/base/slice-dimension-to

[@stdlib/ndarray/base/slice-dimension]: https://github.com/stdlib-js/ndarray/tree/main/base/slice-dimension

[@stdlib/ndarray/base/slice-from]: https://github.com/stdlib-js/ndarray/tree/main/base/slice-from

[@stdlib/ndarray/base/slice-to]: https://github.com/stdlib-js/ndarray/tree/main/base/slice-to

[@stdlib/ndarray/base/slice]: https://github.com/stdlib-js/ndarray/tree/main/base/slice

[@stdlib/ndarray/base/some-by]: https://github.com/stdlib-js/ndarray/tree/main/base/some-by

[@stdlib/ndarray/base/spread-dimensions]: https://github.com/stdlib-js/ndarray/tree/main/base/spread-dimensions

[@stdlib/ndarray/base/stride]: https://github.com/stdlib-js/ndarray/tree/main/base/stride

[@stdlib/ndarray/base/strides]: https://github.com/stdlib-js/ndarray/tree/main/base/strides

[@stdlib/ndarray/base/strides2offset]: https://github.com/stdlib-js/ndarray/tree/main/base/strides2offset

[@stdlib/ndarray/base/strides2order]: https://github.com/stdlib-js/ndarray/tree/main/base/strides2order

[@stdlib/ndarray/base/sub2ind]: https://github.com/stdlib-js/ndarray/tree/main/base/sub2ind

[@stdlib/ndarray/base/to-array]: https://github.com/stdlib-js/ndarray/tree/main/base/to-array

[@stdlib/ndarray/base/to-normalized-indices]: https://github.com/stdlib-js/ndarray/tree/main/base/to-normalized-indices

[@stdlib/ndarray/base/to-reversed]: https://github.com/stdlib-js/ndarray/tree/main/base/to-reversed

[@stdlib/ndarray/base/to-unique-normalized-indices]: https://github.com/stdlib-js/ndarray/tree/main/base/to-unique-normalized-indices

[@stdlib/ndarray/base/transpose]: https://github.com/stdlib-js/ndarray/tree/main/base/transpose

[@stdlib/ndarray/base/unary-accumulate]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-accumulate

[@stdlib/ndarray/base/unary-by]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-by

[@stdlib/ndarray/base/unary-input-casting-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-input-casting-dtype

[@stdlib/ndarray/base/unary-loop-interchange-order]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-loop-interchange-order

[@stdlib/ndarray/base/unary-output-dtype]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-output-dtype

[@stdlib/ndarray/base/unary-reduce-strided1d-assign-struct]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-assign-struct

[@stdlib/ndarray/base/unary-reduce-strided1d-by]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-by

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by-factory]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-dispatch-by-factory

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-dispatch-by

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-dispatch-factory

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-dispatch

[@stdlib/ndarray/base/unary-reduce-strided1d]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d

[@stdlib/ndarray/base/unary-reduce-subarray-by]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-subarray-by

[@stdlib/ndarray/base/unary-reduce-subarray]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-subarray

[@stdlib/ndarray/base/unary-strided1d-dispatch-factory]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-strided1d-dispatch-factory

[@stdlib/ndarray/base/unary-strided1d-dispatch]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-strided1d-dispatch

[@stdlib/ndarray/base/unary-strided1d]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-strided1d

[@stdlib/ndarray/base/unary-tiling-block-size]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-tiling-block-size

[@stdlib/ndarray/base/unary]: https://github.com/stdlib-js/ndarray/tree/main/base/unary

[@stdlib/ndarray/base/vind2bind]: https://github.com/stdlib-js/ndarray/tree/main/base/vind2bind

[@stdlib/ndarray/base/wrap-index]: https://github.com/stdlib-js/ndarray/tree/main/base/wrap-index

[@stdlib/ndarray/base/zeros-like]: https://github.com/stdlib-js/ndarray/tree/main/base/zeros-like

[@stdlib/ndarray/base/zeros]: https://github.com/stdlib-js/ndarray/tree/main/base/zeros

<!-- </toc-links> -->

</section>

<!-- /.links -->
