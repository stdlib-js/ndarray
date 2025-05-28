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

# promoteDataTypes

> Resolve the data type that results from applying [promotion rules][@stdlib/ndarray/promotion-rules] to a provided list of data types.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var promoteDataTypes = require( '@stdlib/ndarray/base/promote-dtypes' );
```

#### promoteDataTypes( dtypes )

Returns a data type that results from applying [promotion rules][@stdlib/ndarray/promotion-rules] to a provided list of data types.

```javascript
var dt = promoteDataTypes( [ 'float32', 'float64' ] );
// returns 'float64'
```

The function returns `null` if provided data types which cannot be safely cast to a promoted data type.

```javascript
var dt = promoteDataTypes( [ 'binary', 'complex128' ] );
// returns null
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
var dtypes = require( '@stdlib/ndarray/dtypes' );
var cartesianProduct = require( '@stdlib/array/base/cartesian-product' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var promoteDataTypes = require( '@stdlib/ndarray/base/promote-dtypes' );

// Get the list of supported data types:
var dt = dtypes();

// Generate data type pairs:
var pairs = cartesianProduct( dt, dt );

// Resolve promoted data types:
logEachMap( '(%s) => %s', pairs, promoteDataTypes );
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

</section>

<!-- /.links -->
