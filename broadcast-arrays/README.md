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

# broadcastArrays

> Broadcast [ndarrays][@stdlib/ndarray/ctor] to a common shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var broadcastArrays = require( '@stdlib/ndarray/broadcast-arrays' );
```

#### broadcastArrays( ...arrays )

Broadcasts a list of [ndarrays][@stdlib/ndarray/ctor] to a common shape.

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Create a 2x2x2 ndarray:
var y = zeros( [ 2, 2, 2 ] );
// returns <ndarray>

// Broadcast to a common shape:
var out = broadcastArrays( [ x, y ] );
// returns [ <ndarray>, <ndarray> ]
```

The function supports two (mutually exclusive) means for providing [ndarray][@stdlib/ndarray/ctor] arguments:

1.  providing a single array of [ndarray][@stdlib/ndarray/ctor] arguments.
2.  providing [ndarray][@stdlib/ndarray/ctor] arguments as separate arguments.

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Create a 2x2x2 ndarray:
var y = zeros( [ 2, 2, 2 ] );
// returns <ndarray>

// Broadcast to a common shape:
var out = broadcastArrays( x, y );
// returns [ <ndarray>, <ndarray> ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if provided [broadcast-incompatible][@stdlib/ndarray/base/broadcast-shapes] ndarrays.
-   Returned [ndarrays][@stdlib/ndarray/ctor] are **read-only** views on their respective underlying data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a returned [ndarray][@stdlib/ndarray/ctor], copy the [ndarray][@stdlib/ndarray/ctor] **before** broadcasting.
-   The function always returns new [ndarray][@stdlib/ndarray/ctor] instances even if an input [ndarray][@stdlib/ndarray/ctor] shape and the broadcasted shape are the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var numel = require( '@stdlib/ndarray/base/numel' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var broadcastArrays = require( '@stdlib/ndarray/broadcast-arrays' );

// Create a 2x2 array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Create a 3x2x2 array:
var y = zeros( [ 3, 2, 2 ] );
// returns <ndarray>

// Broadcast the arrays to a common shape:
var out = broadcastArrays( [ x, y ] );
// returns [ <ndarray>, <ndarray> ]

// Retrieve the common shape:
var sh = out[ 0 ].shape;
// returns [ 3, 2, 2 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
    console.log( 'X[%s] = %d', ind2sub( sh, i ).join( ', ' ), out[ 0 ].iget( i ) );
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
-   <span class="package-name">[`@stdlib/ndarray/broadcast-array`][@stdlib/ndarray/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape.</span>
-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray/maybe-broadcast-arrays`][@stdlib/ndarray/maybe-broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/broadcast-array]: https://github.com/stdlib-js/ndarray/tree/main/broadcast-array

[@stdlib/ndarray/maybe-broadcast-arrays]: https://github.com/stdlib-js/ndarray/tree/main/maybe-broadcast-arrays

<!-- </related-links> -->

</section>

<!-- /.links -->
