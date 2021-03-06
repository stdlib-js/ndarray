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

# maybeBroadcastArray

> Broadcast an [ndarray][@stdlib/ndarray/base/ctor] to a specified shape if and only if the specified shape differs from the provided [ndarray][@stdlib/ndarray/base/ctor]'s shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
```

#### maybeBroadcastArray( arr, shape )

Broadcasts an [ndarray][@stdlib/ndarray/base/ctor] to a specified `shape` if and only if the specified `shape` differs from the provided [ndarray][@stdlib/ndarray/base/ctor]'s shape.

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Broadcast to a 2x2x2 ndarray:
var y = maybeBroadcastArray( x, [ 2, 2, 2 ] );
// returns <ndarray>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if a provided [ndarray][@stdlib/ndarray/base/ctor] is [incompatible][@stdlib/ndarray/base/broadcast-shapes] with a provided shape.
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] has the same shape as the specified shape, the function returns the provided [ndarray][@stdlib/ndarray/base/ctor].
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] has a different (broadcast compatible) shape than the specified shape, the function returns a new (base) [ndarray][@stdlib/ndarray/base/ctor] view of the provided [ndarray][@stdlib/ndarray/base/ctor]'s data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned [ndarray][@stdlib/ndarray/base/ctor], copy the [ndarray][@stdlib/ndarray/base/ctor] **before** performing operations which may mutate elements.
-   A returned [ndarray][@stdlib/ndarray/base/ctor] is a "base" [ndarray][@stdlib/ndarray/base/ctor], and, thus, a returned [ndarray][@stdlib/ndarray/base/ctor] view does not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var numel = require( '@stdlib/ndarray/base/numel' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );

// Create a 2x2 array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Broadcast the array to 3x2x2:
var y = maybeBroadcastArray( x, [ 3, 2, 2 ] );
// returns <ndarray>

// Retrieve the shape:
var sh = y.shape;
// returns [ 3, 2, 2 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
    console.log( 'Y[%s] = %d', ind2sub( sh, i ).join( ', ' ), y.iget( i ) );
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
