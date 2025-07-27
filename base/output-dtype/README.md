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

# outputDataType

> Resolve the output ndarray [data type][@stdlib/ndarray/dtypes] from a list of input ndarray [data types][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var outputDataType = require( '@stdlib/ndarray/base/output-dtype' );
```

#### outputDataType( dtypes, policy )

Resolves the output ndarray [data type][@stdlib/ndarray/dtypes] from a list of input ndarray [data types][@stdlib/ndarray/dtypes] according to a [data type policy][@stdlib/ndarray/output-dtype-policies].

```javascript
var dt = outputDataType( [ 'int32', 'uint32' ], 'floating_point' );
// returns 'float64'
```

The function supports the following parameters:

-   **dtypes**: list of input ndarray [data types][@stdlib/ndarray/dtypes].
-   **policy**: output [data type policy][@stdlib/ndarray/output-dtype-policies].

If `policy` is a [data type][@stdlib/ndarray/dtypes], the function always returns the `policy` value (i.e., the second argument).

```javascript
var dt = outputDataType( [ 'float32', 'float32' ], 'float64' );
// returns 'float64'

dt = outputDataType( [ 'int32', 'complex128' ], 'float64' );
// returns 'float64'

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided more than [data type][@stdlib/ndarray/dtypes], the function **always** applies [type promotion][@stdlib/ndarray/promotion-rules] to the provided data types, except for the following [data type policies][@stdlib/ndarray/output-dtype-policies]:

    -   `default`
    -   `default_index`
    -   `same`
    -   `<dtype>`

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var unzip = require( '@stdlib/utils/unzip' );
var cartesianProduct = require( '@stdlib/array/base/cartesian-product' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var outputDataType = require( '@stdlib/ndarray/base/output-dtype' );

// Get the list of real-valued data types:
var dt = dtypes( 'real' );

// Define a list of output data type policies:
var policies = [
    'default',
    'real',
    'floating_point',
    'complex_floating_point',
    'promoted'
];

// Generate data type pairs:
var pairs = cartesianProduct( dt, dt );

// Generate argument pairs:
var args = cartesianProduct( pairs, policies );

// Unzip the argument pair array:
args = unzip( args );

// Resolve output data types:
logEachMap( 'dtypes: (%15s). policy: %-24s. output dtype: %s.', args[ 0 ], args[ 1 ], naryFunction( outputDataType, 2 ) );
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

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray/tree/main/output-dtype-policies

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray/tree/main/promotion-rules

</section>

<!-- /.links -->
