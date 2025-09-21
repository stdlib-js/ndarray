<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# isScalarMostlySafeCompatible

> Determine whether a scalar value can be safely cast or, for floating-point data types, downcast to specified ndarray [data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isScalarMostlySafeCompatible = require( '@stdlib/ndarray/base/assert/is-scalar-mostly-safe-compatible' );
```

#### isScalarMostlySafeCompatible( value, dtype )

Returns a boolean indicating whether a scalar value can be safely cast or, for floating-point data types, downcast to specified ndarray [data type][@stdlib/ndarray/dtypes].

<!-- eslint-disable id-length -->

```javascript
var bool = isScalarMostlySafeCompatible( 3.14, 'float64' );
// returns true

bool = isScalarMostlySafeCompatible( 3.14, 'int32' );
// returns false
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

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray/base/dtype-strings' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var isScalarMostlySafeCompatible = require( '@stdlib/ndarray/base/assert/is-scalar-mostly-safe-compatible' );

// Determine whether a decimal value can be cast to various data types...
logEachMap( '%f => %s: %s', 3.14, dtypes(), isScalarMostlySafeCompatible );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

</section>

<!-- /.links -->
