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

# stride

> Return the stride along a specified dimension for a provided [ndarray][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stride = require( '@stdlib/ndarray/stride' );
```

#### stride( x, dim )

Returns the stride along a specified dimension for a provided [ndarray][@stdlib/ndarray/ctor].

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );

var x = zeros( [ 3, 2, 3 ] );
// returns <ndarray>

var st = stride( x, 0 );
// returns 6
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dim**: dimension index. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A "stride" is the linear distance (i.e., number of elements) between adjacent elements along a specified dimension.
-   This function is intended as a slight performance optimization over [`@stdlib/ndarray/strides`][@stdlib/ndarray/strides] when **only** a single stride is needed. For retrieving multiple strides, use [`@stdlib/ndarray/strides`][@stdlib/ndarray/strides] directly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var slice = require( '@stdlib/ndarray/slice' );
var E = require( '@stdlib/slice/multi' );
var S = require( '@stdlib/slice/ctor' );
var stride = require( '@stdlib/ndarray/stride' );

// Create an array:
var x = zeros( [ 10, 10, 10, 10 ] );
// returns <ndarray>

// Define some slices:
var slices = [
    // :,:,:,:
    E( null, null, null, null ),

    // 5:10,4,2:4,::-1
    E( S( 5, 10 ), 4, S( 2, 4 ), S( null, null, -1 ) ),

    // :,:,2,:
    E( null, null, 2, null ),

    // 1,2,3,:
    E( 1, 2, 3, null ),

    // 1,3,::2,4::2
    E( 1, 3, S( null, null, 2 ), S( 4, null, 2 ) )
];

// Resolve the stride of the first dimension for each slice...
var s;
var i;
for ( i = 0; i < slices.length; i++ ) {
    s = slice( x, slices[ i ] );
    console.log( '(%s) => %d', s.shape.join( ',' ), stride( s, 0 ) );
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

-   <span class="package-name">[`@stdlib/ndarray/array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray/offset`][@stdlib/ndarray/offset]</span><span class="delimiter">: </span><span class="description">return the index offset specifying the underlying buffer index of the first iterated ndarray element.</span>
-   <span class="package-name">[`@stdlib/ndarray/order`][@stdlib/ndarray/order]</span><span class="delimiter">: </span><span class="description">return the layout order of a provided ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray/shape`][@stdlib/ndarray/shape]</span><span class="delimiter">: </span><span class="description">return the shape of a provided ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray/strides`][@stdlib/ndarray/strides]</span><span class="delimiter">: </span><span class="description">return the strides of a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/strides]: https://github.com/stdlib-js/ndarray/tree/main/strides

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/offset]: https://github.com/stdlib-js/ndarray/tree/main/offset

[@stdlib/ndarray/order]: https://github.com/stdlib-js/ndarray/tree/main/order

[@stdlib/ndarray/shape]: https://github.com/stdlib-js/ndarray/tree/main/shape

<!-- </related-links> -->

</section>

<!-- /.links -->
