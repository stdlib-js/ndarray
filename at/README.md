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

# at

> Return an [`ndarray`][@stdlib/ndarray/ctor] element.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var at = require( '@stdlib/ndarray/at' );
```

#### at( x\[, ...indices] )

Returns an [`ndarray`][@stdlib/ndarray/ctor] element.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

var v = at( x, 0, 0 );
// returns 1

v = at( x, 0, 1 );
// returns 2

v = at( x, 1, 0 );
// returns 3

v = at( x, 1, 1 );
// returns 4
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **indices**: index arguments. The number of index arguments **must** equal the number of dimensions.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided out-of-bounds indices, the function always returns `undefined`.

    ```javascript
    var array = require( '@stdlib/ndarray/array' );

    var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
    // returns <ndarray>

    var v = at( x, 10, 20 );
    // returns undefined
    ```

-   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.

    ```javascript
    var array = require( '@stdlib/ndarray/array' );

    var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
    // returns <ndarray>

    var v = at( x, -1, -1 );
    // returns 4

    v = at( x, -2, -2 );
    // returns 1
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var cartesianProduct = require( '@stdlib/array/cartesian-product' );
var zeroTo = require( '@stdlib/array/zero-to' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var array = require( '@stdlib/ndarray/array' );
var at = require( '@stdlib/ndarray/at' );

// Define a two-dimensional array:
var shape = [ 5, 5 ];
var x = array( discreteUniform( 25, -100, 100 ), {
    'shape': shape
});

// Define lists of dimension indices:
var i0 = zeroTo( shape[ 0 ], 'generic' );
var i1 = zeroTo( shape[ 1 ], 'generic' );

// Create a list of index pairs:
var indices = cartesianProduct( i0, i1 );

// Print array contents...
var idx;
var i;
for ( i = 0; i < x.length; i++ ) {
    idx = indices[ i ];
    console.log( 'x[%d,%d] = %d', idx[ 0 ], idx[ 1 ], at( x, idx[ 0 ], idx[ 1 ] ) );
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
-   <span class="package-name">[`@stdlib/ndarray/slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

<!-- </related-links> -->

</section>

<!-- /.links -->
