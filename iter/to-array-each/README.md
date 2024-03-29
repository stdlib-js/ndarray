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

# nditer2arrayEach

> Create an iterator which [converts][@stdlib/ndarray/to-array] each iterated [`ndarray`][@stdlib/ndarray/ctor] to a generic array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nditer2arrayEach = require( '@stdlib/ndarray/iter/to-array-each' );
```

#### nditer2arrayEach( iterator )

Returns an iterator which [converts][@stdlib/ndarray/to-array] each iterated [`ndarray`][@stdlib/ndarray/ctor] to a generic array (which may include nested arrays).

```javascript
var array = require( '@stdlib/ndarray/array' );
var nditerRows = require( '@stdlib/ndarray/iter/rows' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditer2arrayEach( nditerRows( x ) );

var v = iter.next().value;
// returns [ 1, 2 ]

v = iter.next().value;
// returns [ 3, 4 ]

v = iter.next().value;
// returns [ 5, 6 ]

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

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var nditerRows = require( '@stdlib/ndarray/iter/rows' );
var nditer2arrayEach = require( '@stdlib/ndarray/iter/to-array-each' );

// Define an input array:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Create an iterator for iterating over rows and converting to generic arrays:
var it = nditer2arrayEach( nditerRows( x ) );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
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
-   <span class="package-name">[`@stdlib/ndarray/to-array`][@stdlib/ndarray/to-array]</span><span class="delimiter">: </span><span class="description">convert an ndarray to a generic array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/to-array]: https://github.com/stdlib-js/ndarray/tree/main/to-array

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
