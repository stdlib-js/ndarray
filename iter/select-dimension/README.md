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

# nditerSelectDimension

> Create an iterator which iterates over each view along a specified dimension.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nditerSelectDimension = require( '@stdlib/ndarray/iter/select-dimension' );
```

#### nditerSelectDimension( x, dim\[, options] )

Returns an iterator which iterates over each view along a specified dimension.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerSelectDimension( x, 0 );

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
-   **keepdim**: boolean indicating whether returned [`ndarray`][@stdlib/ndarray/ctor] views should include the selected dimension as a singleton dimension. If `true`, each returned view has the same number of dimensions as the input [`ndarray`][@stdlib/ndarray/ctor]. Otherwise, each returned view has one fewer dimensions than the input [`ndarray`][@stdlib/ndarray/ctor]. Default: `false`.

By default, the iterator returns [`ndarray`][@stdlib/ndarray/ctor] views which are **read-only**. To return writable [views][@stdlib/ndarray/slice], set the `readonly` option to `false`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerSelectDimension( x, 0, {
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

By default, the iterator returns [`ndarray`][@stdlib/ndarray/ctor] views which omit the selected dimension, resulting in [`ndarray`][@stdlib/ndarray/ctor] views having one fewer dimensions than the provided input [`ndarray`][@stdlib/ndarray/ctor]. To include the selected dimension as a singleton dimension in the returned [`ndarray`][@stdlib/ndarray/ctor] views, set the `keepdim` option to `true`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerSelectDimension( x, 0, {
    'keepdim': true
});

var v = iter.next().value;
// returns <ndarray>

var arr = ndarray2array( v );
// returns [ [ [ 1, 2 ], [ 3, 4 ] ] ]

v = iter.next().value;
// returns <ndarray>

arr = ndarray2array( v );
// returns [ [ [ 5, 6 ], [ 7, 8 ] ] ]

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
-   A returned iterator does **not** copy a provided [`ndarray`][@stdlib/ndarray/ctor]. To ensure iterable reproducibility, copy the input [`ndarray`][@stdlib/ndarray/ctor] **before** creating an iterator. Otherwise, any changes to the contents of input [`ndarray`][@stdlib/ndarray/ctor] will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an ndarray's `@@iterator` method, regardless of whether this method is defined.
-   Including the selected dimension as a singleton dimension can be useful when wanting to ensure that returned views remain [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the input [`ndarray`][@stdlib/ndarray/ctor].

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
var nditerSelectDimension = require( '@stdlib/ndarray/iter/select-dimension' );

// Define an input array:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Create an iterator for iterating over matrices:
var it = nditerSelectDimension( x, 0 );

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

-   <span class="package-name">[`@stdlib/ndarray/iter/columns`][@stdlib/ndarray/iter/columns]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each column in a matrix (or stack of matrices).</span>
-   <span class="package-name">[`@stdlib/ndarray/iter/matrices`][@stdlib/ndarray/iter/matrices]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each matrix in a stack of matrices.</span>
-   <span class="package-name">[`@stdlib/ndarray/iter/rows`][@stdlib/ndarray/iter/rows]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each row in a matrix (or stack of matrices).</span>
-   <span class="package-name">[`@stdlib/ndarray/slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

<!-- <related-links> -->

[@stdlib/ndarray/iter/columns]: https://github.com/stdlib-js/ndarray/tree/main/iter/columns

[@stdlib/ndarray/iter/matrices]: https://github.com/stdlib-js/ndarray/tree/main/iter/matrices

[@stdlib/ndarray/iter/rows]: https://github.com/stdlib-js/ndarray/tree/main/iter/rows

<!-- </related-links> -->

</section>

<!-- /.links -->
