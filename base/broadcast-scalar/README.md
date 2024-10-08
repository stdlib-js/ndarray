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

# broadcastScalar

> Broadcast a scalar value to an [`ndarray`][@stdlib/ndarray/base/ctor] having a specified shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
```

#### broadcastScalar( value, dtype, shape, order )

Broadcasts a scalar value to an [`ndarray`][@stdlib/ndarray/base/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

```javascript
var x = broadcastScalar( 1.0, 'float64', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 2, 2 ]

var dt = x.dtype;
// returns 'float64'

var v = x.get( 0, 0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `value` is a number and [`dtype`][@stdlib/ndarray/dtypes] is a complex [data type][@stdlib/ndarray/dtypes], the function returns an [`ndarray`][@stdlib/ndarray/base/ctor] containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.
-   The returned [ndarray][@stdlib/ndarray/base/ctor] is a view on an [ndarray][@stdlib/ndarray/base/ctor] data buffer containing a single element. The view is **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned [ndarray][@stdlib/ndarray/base/ctor], copy the [ndarray][@stdlib/ndarray/base/ctor] **before** performing operations which may mutate elements.
-   The returned [ndarray][@stdlib/ndarray/base/ctor] is a "base" [ndarray][@stdlib/ndarray/base/ctor], and, thus, the returned [ndarray][@stdlib/ndarray/base/ctor] does not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to broadcast a scalar value as an [`ndarray`][@stdlib/ndarray/base/ctor] within internal implementations and to do so with minimal overhead.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );

// Get a list of data types:
var dt = dtypes();

// Generate two-dimensional arrays...
var x;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = broadcastScalar( i, dt[ i ], [ 2, 2 ], 'row-major' );
    console.log( x.get( 0, 1 ) );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray/tree/main/base/ctor

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

</section>

<!-- /.links -->
