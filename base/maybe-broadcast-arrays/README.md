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

# maybeBroadcastArrays

> Broadcast [ndarrays][@stdlib/ndarray/base/ctor] to a common shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var maybeBroadcastArrays = require( '@stdlib/ndarray/base/maybe-broadcast-arrays' );
```

#### maybeBroadcastArrays( arrays )

Broadcasts [ndarrays][@stdlib/ndarray/base/ctor] to a common shape.

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
var out = maybeBroadcastArrays( [ x, y ] );
// returns [ <ndarray>, <ndarray> ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if a provided [broadcast-incompatible][@stdlib/ndarray/base/broadcast-shapes] ndarrays.
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] has a shape matching the common shape, the function returns the provided [ndarray][@stdlib/ndarray/base/ctor].
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] has a different (broadcast compatible) shape than the common shape, the function returns a new (base) [ndarray][@stdlib/ndarray/base/ctor] view of the provided [ndarray][@stdlib/ndarray/base/ctor]'s data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a returned [ndarray][@stdlib/ndarray/base/ctor], copy the [ndarray][@stdlib/ndarray/base/ctor] **before** performing operations which may mutate elements.
-   A returned [ndarray][@stdlib/ndarray/base/ctor] is a "base" [ndarray][@stdlib/ndarray/base/ctor], and, thus, a returned [ndarray][@stdlib/ndarray/base/ctor] view does not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to broadcast ndarray-like objects within internal implementations and to do so with minimal overhead.

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
var maybeBroadcastArrays = require( '@stdlib/ndarray/base/maybe-broadcast-arrays' );

// Create a 2x2 array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Create a 3x2x2 array:
var y = zeros( [ 3, 2, 2 ] );
// returns <ndarray>

// Broadcast arrays to a common shape:
var out = maybeBroadcastArrays( [ x, y ] );
// returns <ndarray>

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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray/tree/main/base/ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

</section>

<!-- /.links -->
