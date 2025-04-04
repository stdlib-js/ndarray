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

# fill

> Fill an input [`ndarray`][@stdlib/ndarray/ctor] with a specified value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fill = require( '@stdlib/ndarray/fill' );
```

#### fill( x, value )

Fills an input [`ndarray`][@stdlib/ndarray/ctor] with a specified value.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = zeros( [ 3, 1, 2 ], {
    'dtype': 'float64'
});

var y = fill( x, 10.0 );
// returns <ndarray>

var bool = ( y === x );
// returns true

var arr = ndarray2array( x );
// returns [ [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ] ]
```

The function accepts the following arguments:

-   **x**: array-like object containing an input [`ndarray`][@stdlib/ndarray/ctor].
-   **value**: scalar value.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An input [`ndarray`][@stdlib/ndarray/ctor] **must** be writable. If provided a **read-only** [`ndarray`][@stdlib/ndarray/ctor], the function throws an error.
-   If `value` is a number and `x` has a complex [data type][@stdlib/ndarray/dtypes], the function fills an input [`ndarray`][@stdlib/ndarray/ctor] with a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.
-   A `value` must be able to safely cast to the input [`ndarray`][@stdlib/ndarray/ctor] [data type][@stdlib/ndarray/dtypes]. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input [`ndarray`][@stdlib/ndarray/ctor]).
-   The function **mutates** the input [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var fill = require( '@stdlib/ndarray/fill' );

// Create a zero-filled ndarray:
var x = zeros( [ 5, 2 ], {
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Fill the ndarray with a scalar value:
fill( x, 10.0 );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/fill-by`][@stdlib/ndarray/fill-by]</span><span class="delimiter">: </span><span class="description">fill an input ndarray according to a callback function.</span>
-   <span class="package-name">[`@stdlib/ndarray/map`][@stdlib/ndarray/map]</span><span class="delimiter">: </span><span class="description">apply a callback to elements in an input ndarray and assign results to elements in a new output ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray/zeros`][@stdlib/ndarray/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/ndarray/fill-by]: https://github.com/stdlib-js/ndarray/tree/main/fill-by

[@stdlib/ndarray/map]: https://github.com/stdlib-js/ndarray/tree/main/map

[@stdlib/ndarray/zeros]: https://github.com/stdlib-js/ndarray/tree/main/zeros

<!-- </related-links> -->

</section>

<!-- /.links -->
