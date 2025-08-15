<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# scalar2ndarrayLike

> Convert a scalar value to a zero-dimensional ndarray having the same [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var scalar2ndarrayLike = require( '@stdlib/ndarray/base/from-scalar-like' );
```

#### scalar2ndarrayLike( x, value )

Returns a zero-dimensional ndarray containing a provided scalar `value` and having the same [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

```javascript
var zeros = require( '@stdlib/ndarray/base/zeros' );

var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var y = scalar2ndarrayLike( x, 1.0 );
// returns <ndarray>

var sh = y.shape;
// returns []

var dt = y.dtype;
// returns 'float32'

var v = y.get();
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Along with data type and order, the function infers the "class" of the returned ndarray from the provided ndarray. For example, if provided a "base" [ndarray][@stdlib/ndarray/base/ctor], the function returns a base [ndarray][@stdlib/ndarray/base/ctor]. If provided a non-base [ndarray][@stdlib/ndarray/ctor], the function returns a non-base [ndarray][@stdlib/ndarray/ctor].
-   If `value` is a number and a provided ndarray has a complex [data type][@stdlib/ndarray/dtypes], the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var empty = require( '@stdlib/ndarray/base/empty' );
var scalar2ndarrayLike = require( '@stdlib/ndarray/base/from-scalar-like' );

// Get a list of data types:
var dt = dtypes();

// Generate zero-dimensional arrays...
var x;
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = empty( dt[ i ], [ 2, 2 ], 'row-major' );
    y = scalar2ndarrayLike( x, i );
    console.log( y.get() );
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
