<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Data Types

> List of ndarray data types.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
```

#### dtypes( \[kind] )

Returns a list of ndarray data type strings.

```javascript
var out = dtypes();
// e.g., returns [ 'binary', 'complex32', 'complex64', 'complex128', ... ]
```

When not provided a data type "kind", the function returns an array containing the following data type strings:

-   `binary`: binary.
-   `bool`: boolean values.
-   `complex32`: half-precision complex floating-point numbers.
-   `complex64`: single-precision complex floating-point numbers.
-   `complex128`: double-precision complex floating-point numbers.
-   `float16`: half-precision floating-point numbers.
-   `float32`: single-precision floating-point numbers.
-   `float64`: double-precision floating-point numbers.
-   `generic`: values of any type.
-   `int8`: signed 8-bit integers.
-   `int16`: signed 16-bit integers.
-   `int32`: signed 32-bit integers.
-   `uint8`: unsigned 8-bit integers.
-   `uint8c`: unsigned clamped 8-bit integers.
-   `uint16`: unsigned 16-bit integers.
-   `uint32`: unsigned 32-bit integers.

To return the subset of data type strings belonging to a specified data type kind, provide a `kind` argument.

```javascript
var out = dtypes( 'floating_point' );
// returns [...]
```

The function supports the following data type kinds:

-   `floating_point`: floating-point data types.
-   `real_floating_point`: real-valued floating-point data types.
-   `complex_floating_point`: complex-valued floating-point data types.
-   `boolean`: boolean data types.
-   `integer`: integer data types.
-   `signed_integer`: signed integer data types.
-   `unsigned_integer`: unsigned integer data types.
-   `real`: real-valued data types.
-   `numeric`: numeric data types.
-   `typed`: typed data types.
-   `integer_index`: integer index data types.
-   `boolean_index`: boolean index data types.
-   `mask_index`: mask index data types.
-   `typed_index`: typed index data types.
-   `index`: index data types.
-   `all`: all data types.

Additionally, the function supports extending the "kinds" listed above by appending an `_and_generic` suffix to the kind name (e.g., `real_and_generic`).

```javascript
var out = dtypes( 'floating_point_and_generic' );
// returns [...]
```

<!-- NOTE: keep the following in alphabetical order -->

#### dtypes.binary

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a binary data type.

```javascript
var dt = dtypes.binary;
// returns <DataType>
```

#### dtypes.bool

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a boolean data type.

```javascript
var dt = dtypes.bool;
// returns <DataType>
```

#### dtypes.complex32

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a half-precision complex floating-point number data type.

```javascript
var dt = dtypes.complex32;
// returns <DataType>
```

#### dtypes.complex64

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a single-precision complex floating-point number data type.

```javascript
var dt = dtypes.complex64;
// returns <DataType>
```

#### dtypes.complex128

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a double-precision complex floating-point number data type.

```javascript
var dt = dtypes.complex128;
// returns <DataType>
```

#### dtypes.float16

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a half-precision real-valued floating-point number data type.

```javascript
var dt = dtypes.float16;
// returns <DataType>
```

#### dtypes.float32

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a single-precision real-valued floating-point number data type.

```javascript
var dt = dtypes.float32;
// returns <DataType>
```

#### dtypes.float64

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a double-precision real-valued floating-point number data type.

```javascript
var dt = dtypes.float64;
// returns <DataType>
```

#### dtypes.generic

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a "generic" data type.

```javascript
var dt = dtypes.generic;
// returns <DataType>
```

#### dtypes.int8

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a signed 8-bit integer data type.

```javascript
var dt = dtypes.int8;
// returns <DataType>
```

#### dtypes.int16

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a signed 16-bit integer data type.

```javascript
var dt = dtypes.int16;
// returns <DataType>
```

#### dtypes.int32

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing a signed 32-bit integer data type.

```javascript
var dt = dtypes.int32;
// returns <DataType>
```

#### dtypes.uint8

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing an unsigned 8-bit integer data type.

```javascript
var dt = dtypes.uint8;
// returns <DataType>
```

#### dtypes.uint8c

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing an unsigned clamped 8-bit integer data type.

```javascript
var dt = dtypes.uint8c;
// returns <DataType>
```

#### dtypes.uint16

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing an unsigned 16-bit integer data type.

```javascript
var dt = dtypes.uint16;
// returns <DataType>
```

#### dtypes.uint32

**Read-only** property returning a [data type][@stdlib/ndarray/dtype-ctor] instance representing an unsigned 32-bit integer data type.

```javascript
var dt = dtypes.uint32;
// returns <DataType>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var dtypes = require( '@stdlib/ndarray/dtypes' );

var isdtype = contains( dtypes() );

var bool = isdtype( 'float64' );
// returns true

bool = isdtype( 'int16' );
// returns true

bool = isdtype( 'uint8' );
// returns true

bool = isdtype( 'beep' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="package-name">[`@stdlib/ndarray/array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/array/typed-dtypes`][@stdlib/array/typed-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array data types.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/dtype-ctor]: https://github.com/stdlib-js/ndarray/tree/main/dtype-ctor

<!-- <related-links> -->

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array-typed-dtypes

<!-- </related-links> -->

</section>

<!-- /.links -->
