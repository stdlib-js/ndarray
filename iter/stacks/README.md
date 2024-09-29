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

# nditerStacks

> Create an iterator which iterates over each subarray in a stack of subarrays according to a list of specified stack dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nditerStacks = require( '@stdlib/ndarray/iter/stacks' );
```

#### nditerStacks( x, dims\[, options] )

Returns an iterator which iterates over each subarray in a stack of subarrays according to a list of specified stack dimensions.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerStacks( x, [ 1, 2 ] );

var v = iter.next().value;
// returns <ndarray>

var arr = ndarray2array( v );
// returns [ [ 1, 2 ], [ 3, 4 ] ]

v = iter.next().value;
// returns <ndarray>

arr = ndarray2array( v );
// returns [ [ 5, 6 ], [ 7, 8 ] ]

// ...
```

The function accepts the following `options`:

-   **readonly**: boolean indicating whether returned [`ndarray`][@stdlib/ndarray/ctor] views should be read-only. In order to return writable [`ndarray`][@stdlib/ndarray/ctor] views, the input [`ndarray`][@stdlib/ndarray/ctor] must be writable. If the input [`ndarray`][@stdlib/ndarray/ctor] is read-only, setting this option to `false` raises an exception. Default: `true`.

By default, the iterator returns [`ndarray`][@stdlib/ndarray/ctor] views which are **read-only**. To return writable [views][@stdlib/ndarray/slice], set the `readonly` option to `false`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerStacks( x, [ 1, 2 ], {
    'readonly': false
});

var v = iter.next().value;
// returns <ndarray>

var arr = ndarray2array( v );
// returns [ [ 1, 2 ], [ 3, 4 ] ]

v.set( 0, 0, 10 );

arr = ndarray2array( v );
// returns [ [ 10, 2 ], [ 3, 4 ] ]
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The input [`ndarray`][@stdlib/ndarray/ctor] must have at least `dims.length+1` dimensions.
-   The list of provided index dimensions must be unique and resolve to index dimensions sorted in ascending order (i.e., the function does **not** allow rearranging [`ndarray`][@stdlib/ndarray/ctor] dimensions by specifying an arbitrary index order).
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
var nditerStacks = require( '@stdlib/ndarray/iter/stacks' );

// Define an input array:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Create an iterator for iterating over matrices:
var it = nditerStacks( x, [ 1, 2 ] );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( ndarray2array( v.value ) );
}

// Create an iterator for iterating over matrices:
it = nditerStacks( x, [ 0, 2 ] );

// Perform manual iteration...
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( ndarray2array( v.value ) );
}

// Create an iterator for iterating over matrices:
it = nditerStacks( x, [ 0, 1 ] );

// Perform manual iteration...
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

</section>

<!-- /.links -->