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

# zerosLike

> Create a zero-filled ndarray having the same shape and [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var zerosLike = require( '@stdlib/ndarray/base/zeros-like' );
```

#### zerosLike( x )

Creates a zero-filled ndarray having the same shape and [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

```javascript
var zeros = require( '@stdlib/ndarray/base/zeros' );

var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var y = zerosLike( x );
// returns <ndarray>

var sh = y.shape;
// returns [ 2, 2 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Along with data type, shape, and order, the function infers the "class" of the returned ndarray from the provided ndarray. For example, if provided a "base" [ndarray][@stdlib/ndarray/base/ctor], the function returns a base [ndarray][@stdlib/ndarray/base/ctor]. If provided a non-base [ndarray][@stdlib/ndarray/ctor], the function returns a non-base [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var zeros = require( '@stdlib/ndarray/base/zeros' );
var zerosLike = require( '@stdlib/ndarray/base/zeros-like' );

// Get a list of data types:
var dt = dtypes( 'numeric' );

// Generate zero-filled arrays...
var x;
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = zeros( dt[ i ], [ 2, 2 ], 'row-major' );
    y = zerosLike( x );
    console.log( y.data );
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
-   <span class="package-name">[`@stdlib/ndarray/base/zeros`][@stdlib/ndarray/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray/tree/main/base/ctor

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/ndarray/base/zeros]: https://github.com/stdlib-js/ndarray/tree/main/base/zeros

<!-- </related-links> -->

</section>

<!-- /.links -->
