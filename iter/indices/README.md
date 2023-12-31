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

# nditerIndices

> Create an iterator which returns indices for use indexing into an [`ndarray`][@stdlib/ndarray/ctor] having a specified shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nditerIndices = require( '@stdlib/ndarray/iter/indices' );
```

#### nditerIndices( shape\[, options] )

Returns an iterator which returns indices for use indexing into an [`ndarray`][@stdlib/ndarray/ctor] having a specified `shape`.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerIndices( x.shape );

var v = iter.next().value;
// returns [ 0, 0, 0 ]

v = iter.next().value;
// returns [ 0, 0, 1 ]

v = iter.next().value;
// returns [ 0, 1, 0 ]

// ...
```

The function accepts the following `options`:

-   **order**: index iteration order. By default, the returned [iterator][mdn-iterator-protocol] iterates over the last dimensions first, thus corresponding to iteration over contiguous data stored in row-major order. Must be either `'row-major'` or `'column-major'`.

By default, the iterator returns indices such that the last dimensions are iterated over first. To return indices according to a specified order, set the `order` option.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
    'order': 'row-major'
});
// returns <ndarray>

var iter = nditerIndices( x.shape, {
    'order': 'column-major'
});

var v = iter.next().value;
// returns [ 0, 0, 0 ]

v = iter.next().value;
// returns [ 1, 0, 0 ]

v = iter.next().value;
// returns [ 0, 1, 0 ]

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

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var nditerIndices = require( '@stdlib/ndarray/iter/indices' );

// Define an input array:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Create an iterator for generating indices:
var it = nditerIndices( x.shape );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( x.get.apply( x, v.value ) );
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

-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray/iter/entries`][@stdlib/ndarray/iter/entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns \[index, value] pairs for each element in a provided ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray/iter/values`][@stdlib/ndarray/iter/values]</span><span class="delimiter">: </span><span class="description">create an iterator which returns individual elements from a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

[@stdlib/ndarray/iter/entries]: https://github.com/stdlib-js/ndarray/tree/main/iter/entries

[@stdlib/ndarray/iter/values]: https://github.com/stdlib-js/ndarray/tree/main/iter/values

<!-- </related-links> -->

</section>

<!-- /.links -->
