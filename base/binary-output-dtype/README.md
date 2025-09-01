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

# binaryOutputDataType

> Resolve the output ndarray [data type][@stdlib/ndarray/dtypes] for a binary function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var binaryOutputDataType = require( '@stdlib/ndarray/base/binary-output-dtype' );
```

#### binaryOutputDataType( xdtype, ydtype, policy )

Resolves the output ndarray [data type][@stdlib/ndarray/dtypes] for a binary function according to a [data type policy][@stdlib/ndarray/output-dtype-policies].

```javascript
var dt = binaryOutputDataType( 'int32', 'float32', 'floating_point' );
// returns 'float64'
```

The function supports the following parameters:

-   **xdtype**: first input ndarray [data type][@stdlib/ndarray/dtypes].
-   **ydtype**: second input ndarray [data type][@stdlib/ndarray/dtypes].
-   **policy**: output [data type policy][@stdlib/ndarray/output-dtype-policies].

If `policy` is a [data type][@stdlib/ndarray/dtypes], the function always returns the `policy` value (i.e., the third argument).

```javascript
var dt = binaryOutputDataType( 'float32', 'float32', 'float64' );
// returns 'float64'

dt = binaryOutputDataType( 'int32', 'int8', 'float64' );
// returns 'float64'

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **always** applies [type promotion][@stdlib/ndarray/promotion-rules] to the provided data types, except for the following [data type policies][@stdlib/ndarray/output-dtype-policies]:

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
var nCartesianProduct = require( '@stdlib/array/base/n-cartesian-product' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var binaryOutputDataType = require( '@stdlib/ndarray/base/binary-output-dtype' );

// Get the list of real-valued data types:
var dt = dtypes( 'real' );

// Define a list of output data type policies:
var policies = [
    'default',
    'real',
    'floating_point',
    'complex_floating_point'
];

// Generate dtype-policy Cartesian products:
var args = nCartesianProduct( dt, dt, policies );

// Unzip the argument pair array:
args = unzip( args );

// Resolve output data types:
logEachMap( 'dtypes: (%7s, %7s). policy: %-24s. output dtype: %s.', args[ 0 ], args[ 1 ], args[ 2 ], naryFunction( binaryOutputDataType, 3 ) );
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
