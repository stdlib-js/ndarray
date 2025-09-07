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

# broadcastArrayExceptDimensions

> Broadcast an input [ndarray][@stdlib/ndarray/base/ctor] to a target shape while keeping a list of specified dimensions unchanged.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var broadcastArrayExceptDimensions = require( '@stdlib/ndarray/base/broadcast-array-except-dimensions' );
```

#### broadcastArrayExceptDimensions( arr, shape, dims )

Broadcasts an input [ndarray][@stdlib/ndarray/base/ctor] to a target shape while keeping a list of specified dimensions unchanged.

```javascript
var array = require( '@stdlib/ndarray/array' );
var getShape = require( '@stdlib/ndarray/shape' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Perform broadcasting:
var y = broadcastArrayExceptDimensions( x, [ 3, 2, 2 ], [ -1 ] );
// returns <ndarray>

var ysh = getShape( y );
// returns [ 3, 2, 2 ]
```

The function accepts the following arguments:

-   **arr**: input ndarray.
-   **shape**: target shape.
-   **dims**: list of dimensions to exclude from broadcasting. Should be a list of negative integers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if a provided [ndarray][@stdlib/ndarray/base/ctor] is [incompatible][@stdlib/ndarray/base/broadcast-shapes] with a provided shape.
-   The returned [ndarray][@stdlib/ndarray/base/ctor] is a "base" [ndarray][@stdlib/ndarray/base/ctor], and, thus, the returned [ndarray][@stdlib/ndarray/base/ctor] does not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.
-   The function always returns a new [ndarray][@stdlib/ndarray/base/ctor] instance even if the input [ndarray][@stdlib/ndarray/base/ctor] shape and the desired shape are the same.

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
var getShape = require( '@stdlib/ndarray/shape' );
var broadcastArrayExceptDimensions = require( '@stdlib/ndarray/base/broadcast-array-except-dimensions' );

// Create a 1x3 array:
var x = array( [ [ 1, 2, 3 ] ] );
// returns <ndarray>

// Broadcast the array to 2x1x3:
var y = broadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
// returns <ndarray>

// Retrieve the shape:
var sh = getShape( y );
// returns [ 2, 1, 3 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var sub;
var v;
var i;
for ( i = 0; i < N; i++ ) {
    v = y.iget( i );
    sub = ind2sub( sh, i );
    console.log( 'Y[%s] = %d', sub.join( ', ' ), v );
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
