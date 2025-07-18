<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# zeros

> Create a zero-filled [ndarray][@stdlib/ndarray/base/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var zeros = require( '@stdlib/ndarray/base/zeros' );
```

#### zeros( dtype, shape, order )

Creates a zero-filled [ndarray][@stdlib/ndarray/base/ctor] having a specified shape and numeric [data type][@stdlib/ndarray/dtypes].

```javascript
var arr = zeros( 'float64', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var sh = arr.shape;
// returns [ 2, 2 ]

var dt = arr.dtype;
// returns 'float64'
```

The function accepts the following arguments:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes]. Must be a numeric [data type][@stdlib/ndarray/dtypes] or "generic".
-   **shape**: array shape.
-   **order**: specifies whether an [ndarray][@stdlib/ndarray/base/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style).

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
var zeros = require( '@stdlib/ndarray/base/zeros' );

// Get a list of data types:
var dt = dtypes( 'numeric' );

// Generate zero-filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = zeros( dt[ i ], [ 2, 2 ], 'row-major' );
    console.log( arr.data );
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

-   <span class="package-name">[`@stdlib/ndarray/base/ctor`][@stdlib/ndarray/base/ctor]</span><span class="delimiter">: </span><span class="description">base multidimensional array.</span>
-   <span class="package-name">[`@stdlib/ndarray/base/zeros-like`][@stdlib/ndarray/base/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray/tree/main/base/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/ndarray/base/zeros-like]: https://github.com/stdlib-js/ndarray/tree/main/base/zeros-like

<!-- </related-links> -->

</section>

<!-- /.links -->
