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

# Assert

> Base ndarray assertion utilities.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray/base/assert' );
```

#### ns

Base ndarray assertion utilities.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`hasEqualShape( x, y )`][@stdlib/ndarray/base/assert/has-equal-shape]</span><span class="delimiter">: </span><span class="description">test if two ndarrays have the same shape.</span>
-   <span class="signature">[`isAllowedDataTypeCast( from, to, casting )`][@stdlib/ndarray/base/assert/is-allowed-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be cast to another ndarray data type according to a specified casting mode.</span>
-   <span class="signature">[`isBooleanDataType( value )`][@stdlib/ndarray/base/assert/is-boolean-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray boolean data type.</span>
-   <span class="signature">[`isBooleanIndexDataType( value )`][@stdlib/ndarray/base/assert/is-boolean-index-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray boolean index data type.</span>
-   <span class="signature">[`isBufferLengthCompatibleShape( len, shape )`][@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape]</span><span class="delimiter">: </span><span class="description">determine if a buffer length is compatible with an array shape.</span>
-   <span class="signature">[`isBufferLengthCompatible( len, shape, strides, offset )`][@stdlib/ndarray/base/assert/is-buffer-length-compatible]</span><span class="delimiter">: </span><span class="description">determine if a buffer length is compatible with ndarray meta data.</span>
-   <span class="signature">[`isCastingMode( value )`][@stdlib/ndarray/base/assert/is-casting-mode]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray casting mode.</span>
-   <span class="signature">[`isColumnMajorContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-column-major-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is column-major contiguous.</span>
-   <span class="signature">[`isColumnMajorString( value )`][@stdlib/ndarray/base/assert/is-column-major-string]</span><span class="delimiter">: </span><span class="description">test whether an input value is the string representing column-major order.</span>
-   <span class="signature">[`isColumnMajor( strides )`][@stdlib/ndarray/base/assert/is-column-major]</span><span class="delimiter">: </span><span class="description">given a stride array, determine whether an array is column-major.</span>
-   <span class="signature">[`isComplexFloatingPointDataType( value )`][@stdlib/ndarray/base/assert/is-complex-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray complex-valued floating-point data type.</span>
-   <span class="signature">[`isContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is contiguous.</span>
-   <span class="signature">[`isDataType( value )`][@stdlib/ndarray/base/assert/is-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray data type.</span>
-   <span class="signature">[`isFloatingPointDataType( value )`][@stdlib/ndarray/base/assert/is-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray floating-point data type.</span>
-   <span class="signature">[`isIndexDataType( value )`][@stdlib/ndarray/base/assert/is-index-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray index data type.</span>
-   <span class="signature">[`isIndexMode( value )`][@stdlib/ndarray/base/assert/is-index-mode]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray index mode.</span>
-   <span class="signature">[`isInputCastingPolicy( value )`][@stdlib/ndarray/base/assert/is-input-casting-policy]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported input ndarray casting policy.</span>
-   <span class="signature">[`isIntegerDataType( value )`][@stdlib/ndarray/base/assert/is-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray integer data type.</span>
-   <span class="signature">[`isIntegerIndexDataType( value )`][@stdlib/ndarray/base/assert/is-integer-index-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray integer index data type.</span>
-   <span class="signature">[`isMaskIndexDataType( value )`][@stdlib/ndarray/base/assert/is-mask-index-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray mask index data type.</span>
-   <span class="signature">[`isMostlySafeDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-mostly-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast or, for floating-point data types, downcast to another ndarray data type.</span>
-   <span class="signature">[`isNumericDataType( value )`][@stdlib/ndarray/base/assert/is-numeric-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray numeric data type.</span>
-   <span class="signature">[`isOrder( value )`][@stdlib/ndarray/base/assert/is-order]</span><span class="delimiter">: </span><span class="description">test if an input value is an ndarray order.</span>
-   <span class="signature">[`isOutputDataTypePolicy( value )`][@stdlib/ndarray/base/assert/is-output-data-type-policy]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray output data type policy.</span>
-   <span class="signature">[`isReadOnly( arr )`][@stdlib/ndarray/base/assert/is-read-only]</span><span class="delimiter">: </span><span class="description">test if an ndarray is **read-only**.</span>
-   <span class="signature">[`isRealDataType( value )`][@stdlib/ndarray/base/assert/is-real-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray real-valued data type.</span>
-   <span class="signature">[`isRealFloatingPointDataType( value )`][@stdlib/ndarray/base/assert/is-real-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray real-valued floating-point data type.</span>
-   <span class="signature">[`isRowMajorContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-row-major-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is row-major contiguous.</span>
-   <span class="signature">[`isRowMajorString( value )`][@stdlib/ndarray/base/assert/is-row-major-string]</span><span class="delimiter">: </span><span class="description">test whether an input value is the string representing row-major order.</span>
-   <span class="signature">[`isRowMajor( strides )`][@stdlib/ndarray/base/assert/is-row-major]</span><span class="delimiter">: </span><span class="description">given a stride array, determine whether an array is row-major.</span>
-   <span class="signature">[`isSafeDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast to another ndarray data type.</span>
-   <span class="signature">[`isSameKindDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-same-kind-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.</span>
-   <span class="signature">[`isScalarMostlySafeCompatible( value, dtype )`][@stdlib/ndarray/base/assert/is-scalar-mostly-safe-compatible]</span><span class="delimiter">: </span><span class="description">determine whether a scalar value can be safely cast or, for floating-point data types, downcast to specified ndarray data type.</span>
-   <span class="signature">[`isSignedIntegerDataType( value )`][@stdlib/ndarray/base/assert/is-signed-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray signed integer data type.</span>
-   <span class="signature">[`isSingleSegmentCompatible( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-single-segment-compatible]</span><span class="delimiter">: </span><span class="description">determine if an array is compatible with a single memory segment.</span>
-   <span class="signature">[`isStructDataType( value )`][@stdlib/ndarray/base/assert/is-struct-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray struct data type.</span>
-   <span class="signature">[`isUnsignedIntegerDataType( value )`][@stdlib/ndarray/base/assert/is-unsigned-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray unsigned integer data type.</span>

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
var ns = require( '@stdlib/ndarray/base/assert' );

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

[@stdlib/ndarray/base/assert/has-equal-shape]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/has-equal-shape

[@stdlib/ndarray/base/assert/is-allowed-data-type-cast]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-allowed-data-type-cast

[@stdlib/ndarray/base/assert/is-boolean-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-boolean-data-type

[@stdlib/ndarray/base/assert/is-boolean-index-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-boolean-index-data-type

[@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-buffer-length-compatible-shape

[@stdlib/ndarray/base/assert/is-buffer-length-compatible]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-buffer-length-compatible

[@stdlib/ndarray/base/assert/is-casting-mode]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-casting-mode

[@stdlib/ndarray/base/assert/is-column-major-contiguous]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-column-major-contiguous

[@stdlib/ndarray/base/assert/is-column-major-string]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-column-major-string

[@stdlib/ndarray/base/assert/is-column-major]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-column-major

[@stdlib/ndarray/base/assert/is-complex-floating-point-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-complex-floating-point-data-type

[@stdlib/ndarray/base/assert/is-contiguous]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-contiguous

[@stdlib/ndarray/base/assert/is-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-data-type

[@stdlib/ndarray/base/assert/is-floating-point-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-floating-point-data-type

[@stdlib/ndarray/base/assert/is-index-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-index-data-type

[@stdlib/ndarray/base/assert/is-index-mode]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-index-mode

[@stdlib/ndarray/base/assert/is-input-casting-policy]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-input-casting-policy

[@stdlib/ndarray/base/assert/is-integer-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-integer-data-type

[@stdlib/ndarray/base/assert/is-integer-index-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-integer-index-data-type

[@stdlib/ndarray/base/assert/is-mask-index-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-mask-index-data-type

[@stdlib/ndarray/base/assert/is-mostly-safe-data-type-cast]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-mostly-safe-data-type-cast

[@stdlib/ndarray/base/assert/is-numeric-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-numeric-data-type

[@stdlib/ndarray/base/assert/is-order]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-order

[@stdlib/ndarray/base/assert/is-output-data-type-policy]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-output-data-type-policy

[@stdlib/ndarray/base/assert/is-read-only]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-read-only

[@stdlib/ndarray/base/assert/is-real-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-real-data-type

[@stdlib/ndarray/base/assert/is-real-floating-point-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-real-floating-point-data-type

[@stdlib/ndarray/base/assert/is-row-major-contiguous]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-row-major-contiguous

[@stdlib/ndarray/base/assert/is-row-major-string]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-row-major-string

[@stdlib/ndarray/base/assert/is-row-major]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-row-major

[@stdlib/ndarray/base/assert/is-safe-data-type-cast]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-safe-data-type-cast

[@stdlib/ndarray/base/assert/is-same-kind-data-type-cast]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-same-kind-data-type-cast

[@stdlib/ndarray/base/assert/is-scalar-mostly-safe-compatible]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-scalar-mostly-safe-compatible

[@stdlib/ndarray/base/assert/is-signed-integer-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-signed-integer-data-type

[@stdlib/ndarray/base/assert/is-single-segment-compatible]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-single-segment-compatible

[@stdlib/ndarray/base/assert/is-struct-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-struct-data-type

[@stdlib/ndarray/base/assert/is-unsigned-integer-data-type]: https://github.com/stdlib-js/ndarray/tree/main/base/assert/is-unsigned-integer-data-type

<!-- </toc-links> -->

</section>

<!-- /.links -->
