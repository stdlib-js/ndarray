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

# Policies

> List of input ndarray casting policies.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var policies = require( '@stdlib/ndarray/input-casting-policies' );
```

#### policies()

Returns a list of input ndarray casting policies.

```javascript
var out = policies();
// e.g., returns [ 'none', 'promoted', ... ]
```

The output array contains the following policies:

-   `none`: no guidance on specific casting behavior. An input ndarray may or may not be cast depending on the needs of an implementation.
-   `promoted`: cast an input ndarray to a promoted data type.
-   `accumulation`: cast an input ndarray to a data type amenable to accumulation.
-   `output`: cast an input ndarray to the data type of the output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The following is some general guidance for the casting policies listed above:

    -   **none**: applies whenever an input ndarray casting behavior should be entirely left up to an implementation. For example, an implementation may choose to cast internally in order to take advantage of specialized algorithms operating on specific data types.
    -   **promoted**: applies whenever an input ndarray should be cast to the data type resolved from applying the rules of [type promotion][@stdlib/ndarray/promotion-rules] to an implementation's input and output ndarrays. For example, suppose an implementation is computing the sum and the data type of the input ndarray is `int32` and the data type of the output ndarray is `float32`. In this scenario, casting `int32` to `float32` is not desirable as not all `int32` values can be safely represented in `float32`, thus potentially leading to significant accumulated numerical error. Instead, we can promote `int32` to `float64`, compute the sum, and then downcast the result for more accurate summation.
    -   **accumulation**: applies whenever an input ndarray should be cast to a data type amenable to accumulation, irrespective of the output ndarray or other input ndarrays. For example, suppose an implementation is computing the sum and determining whether the sum passes a threshold, and further suppose that the data type of the input ndarray is `int8` and the data type of the output ndarray is `bool`. In this scenario, as `int8` has a small range of values, computing the sum has a high risk of overflow, rendering the results potentially meaningless, and type promotion is not applicable. As such, an implementation may prefer to internally cast `int8` to a data type more amenable to accumulation, such as `int32`.
    -   **output**: applies whenever an input ndarray should always be cast to the data type of the output ndarray. This might apply when an implementation wraps a type homogeneous interface, such as those commonly found in BLAS/LAPACK routines.

-   Whether an implementation supports a casting policy depends on the implementation. Supporting casting policies is mainly envisioned for generalized utilities wrapping lower-level APIs and needing to accommodate varied use cases (e.g., [`@stdlib/ndarray/base/unary-reduce-strided1d-dispatch`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]). Exposing casting policies as part of user-facing APIs is generally not a good idea.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var indexOf = require( '@stdlib/utils/index-of' );
var policies = require( '@stdlib/ndarray/input-casting-policies' );

var POLICIES = policies();

function isPolicy( str ) {
    if ( indexOf( POLICIES, str ) === -1 ) {
        return false;
    }
    return true;
}

var bool = isPolicy( 'none' );
// returns true

bool = isPolicy( 'output' );
// returns true

bool = isPolicy( 'promoted' );
// returns true

bool = isPolicy( 'beep' );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray/tree/main/promotion-rules

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]: https://github.com/stdlib-js/ndarray/tree/main/base/unary-reduce-strided1d-dispatch

</section>

<!-- /.links -->
