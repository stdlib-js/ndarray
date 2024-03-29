<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# unaryOutputDataType

> Resolve the output ndarray [data type][@stdlib/ndarray/dtypes] for a unary function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var unaryOutputDataType = require( '@stdlib/ndarray/base/unary-output-dtype' );
```

#### unaryOutputDataType( dtype, policy )

Resolves the output ndarray [data type][@stdlib/ndarray/dtypes] for a unary function according to a [data type policy][@stdlib/ndarray/output-dtype-policies].

```javascript
var dt = unaryOutputDataType( 'int32', 'floating_point' );
// returns 'float64'
```

If `policy` is a [data type][@stdlib/ndarray/dtypes], the function always returns the `policy` value (i.e., the second argument).

```javascript
var dt = unaryOutputDataType( 'float32', 'float64' );
// returns 'float64'

dt = unaryOutputDataType( 'int32', 'float64' );
// returns 'float64'

// ...
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
var naryFunction = require( '@stdlib/utils/nary-function' );
var map2 = require( '@stdlib/utils/map2' );
var unzip = require( '@stdlib/utils/unzip' );
var cartesianProduct = require( '@stdlib/array/base/cartesian-product' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var logEach = require( '@stdlib/console/log-each' );
var unaryOutputDataType = require( '@stdlib/ndarray/base/unary-output-dtype' );

// Get the list of real-valued data types:
var dt = dtypes( 'real' );

// Define a list of output data type policies:
var policies = [
    'default',
    'real',
    'floating_point',
    'complex_floating_point'
];

// Generate dtype-policy argument pairs:
var args = cartesianProduct( dt, policies );

// Unzip the argument pair array:
args = unzip( args );

// Resolve output data types:
var out = map2( args[ 0 ], args[ 1 ], naryFunction( unaryOutputDataType, 2 ) );

// Print results:
logEach( 'dtypes: (%10s, %10s). policy: %s.', args[ 0 ], out, args[ 1 ] );
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

</section>

<!-- /.links -->
