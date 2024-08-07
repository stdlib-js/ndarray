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

# Safe Casts

> Return a list of ndarray [data types][@stdlib/ndarray/dtypes] to which a provided ndarray [data type][@stdlib/ndarray/dtypes] can be safely cast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var safeCasts = require( '@stdlib/ndarray/safe-casts' );
```

#### safeCasts( \[dtype] )

If provided a `dtype` argument, returns a list of ndarray [data types][@stdlib/ndarray/dtypes] to which a provided ndarray [data type][@stdlib/ndarray/dtypes] can be safely cast.

```javascript
var out = safeCasts( 'float32' );
// e.g., returns [ 'float32', 'float64', ... ]
```

If not provided a `dtype` argument, the function returns a casting table.

```javascript
var out = safeCasts();
// returns {...}

var f32 = out[ 'float32' ];
// returns {...}

var v = f32[ 'float64' ];
// returns 1
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = safeCasts( 'foo' );
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
var safeCasts = require( '@stdlib/ndarray/safe-casts' );

// Get the list of supported ndarray data types:
var DTYPES = dtypes();

// Print the list of ndarray data types to which a data type can be safely cast...
var list;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
    list = safeCasts( DTYPES[ i ] );
    console.log( '%s: %s', DTYPES[ i ], list.join( ', ' ) );
}
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
-   <span class="package-name">[`@stdlib/ndarray/same-kind-casts`][@stdlib/ndarray/same-kind-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast or cast within the same kind.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/ndarray/casting-modes]: https://github.com/stdlib-js/ndarray/tree/main/casting-modes

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/same-kind-casts]: https://github.com/stdlib-js/ndarray/tree/main/same-kind-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
