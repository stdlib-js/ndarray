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

# Promotion Rules

> Return the ndarray [data type][@stdlib/ndarray/dtypes] with the smallest size and closest "kind" to which ndarray [data types][@stdlib/ndarray/dtypes] can be **safely** cast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var promotionRules = require( '@stdlib/ndarray/promotion-rules' );
```

#### promotionRules( \[dtype1, dtype2] )

If provided [data types][@stdlib/ndarray/dtypes], returns the ndarray [data type][@stdlib/ndarray/dtypes] with the smallest size and closest "kind" to which ndarray [data types][@stdlib/ndarray/dtypes] can be **safely** cast.

```javascript
var out = promotionRules( 'float32', 'uint32' );
// returns 'float64'
```

If a [data type][@stdlib/ndarray/dtypes] to which [data types][@stdlib/ndarray/dtypes] can be safely cast does **not** exist (or is not supported), the function returns `-1`.

```javascript
var out = promotionRules( 'binary', 'generic' );
// returns -1
```

If not provided [data types][@stdlib/ndarray/dtypes], the function returns a promotion table.

```javascript
var out = promotionRules();
// returns {...}

var f32 = out[ 'float32' ];
// returns {...}

var rule = f32[ 'uint32' ];
// returns 'float64'
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = promotionRules( 'foo', 'generic' );
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
var cartesianProduct = require( '@stdlib/array/cartesian-product' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var unzip = require( '@stdlib/utils/unzip' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var promotionRules = require( '@stdlib/ndarray/promotion-rules' );

// Get the list of supported ndarray data types:
var dt = dtypes();

// Generate a list of data type pairs:
var pairs = cartesianProduct( dt, dt );

// Split the pairs into separate arrays:
var args = unzip( pairs );

// Print the promotion rule for each pair of ndarray data types:
logEachMap( '(%s, %s) => %s', args[ 0 ], args[ 1 ], promotionRules );
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

-   <span class="package-name">[`@stdlib/ndarray/casting-modes`][@stdlib/ndarray/casting-modes]</span><span class="delimiter">: </span><span class="description">list of ndarray casting modes.</span>
-   <span class="package-name">[`@stdlib/ndarray/dtypes`][@stdlib/ndarray/dtypes]</span><span class="delimiter">: </span><span class="description">list of ndarray data types.</span>
-   <span class="package-name">[`@stdlib/ndarray/safe-casts`][@stdlib/ndarray/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/ndarray/casting-modes]: https://github.com/stdlib-js/ndarray/tree/main/casting-modes

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray/tree/main/safe-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
