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

# nditerInterleaveSubarrays

> Create an iterator which iterates over interleaved subarrays.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nditerInterleaveSubarrays = require( '@stdlib/ndarray/iter/interleave-subarrays' );
```

#### nditerInterleaveSubarrays( arr, ndims )

Returns an iterator which iterates over interleaved subarrays.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerInterleaveSubarrays( [ x, x ], 2 );

var v = iter.next().value;
// returns <ndarray>

var arr = ndarray2array( v );
// returns [ [ 1, 2 ], [ 3, 4 ] ]

v = iter.next().value;
// returns <ndarray>

arr = ndarray2array( v );
// returns [ [ 1, 2 ], [ 3, 4 ] ]

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   All provided [`ndarrays`][@stdlib/ndarray/ctor] must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes].
-   After broadcasting, each broadcasted input [`ndarray`][@stdlib/ndarray/ctor] must have at least `ndims+1` dimensions.
-   For input [`ndarrays`][@stdlib/ndarray/ctor] supporting read-only views, the function returns **read-only** views of interleaved subarrays. As input [`ndarrays`][@stdlib/ndarray/ctor] may be broadcasted, a view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a subarray, copy the subarray **before** attempting mutation.
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   A returned iterator does **not** copy a provided [`ndarray`][@stdlib/ndarray/ctor]. To ensure iterable reproducibility, copy the input [`ndarray`][@stdlib/ndarray/ctor] **before** creating an iterator. Otherwise, any changes to the contents of input [`ndarray`][@stdlib/ndarray/ctor] will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an ndarray's `@@iterator` method, regardless of whether this method is defined.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var nditerInterleaveSubarrays = require( '@stdlib/ndarray/iter/interleave-subarrays' );

// Define input arrays:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});
var y = array( zeroTo( 9 ), {
    'shape': [ 3, 3 ]
});

// Create an iterator for iterating over interleaved matrices:
var it = nditerInterleaveSubarrays( [ x, y ], 2 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( ndarray2array( v.value ) );
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

-   <span class="package-name">[`@stdlib/ndarray/iter/subarrays`][@stdlib/ndarray/iter/subarrays]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each subarray in a stack of subarrays.</span>
-   <span class="package-name">[`@stdlib/ndarray/slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

<!-- <related-links> -->

[@stdlib/ndarray/iter/subarrays]: https://github.com/stdlib-js/ndarray/tree/main/iter/subarrays

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

<!-- </related-links> -->

</section>

<!-- /.links -->
