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

# sliceFrom

> Return a read-only shifted view of an input [ndarray][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceFrom = require( '@stdlib/ndarray/slice-from' );
```

#### sliceFrom( x, ...start\[, options] )

Returns a **read-only** shifted view of an input [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = sliceFrom( x, 1, null );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **start**: an array of starting indices (inclusive) or starting indices (inclusive) as separate arguments. Each index must be either `null`, `undefined`, or an integer. A value of `null` or `undefined` indicates to include all elements along a corresponding dimension. A negative integer indicates to resolve a starting index relative to the last element along a corresponding dimension, with the last element having index `-1`.
-   **options**: function options.

The function supports two (mutually exclusive) means for providing index arguments:

1.  providing a single array of index arguments.
2.  providing index arguments as separate arguments.

The following example demonstrates each invocation style returning equivalent results.

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

// 1. Using an array of index arguments:
var y = sliceFrom( x, [ 1, null ] );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

// 2. Providing separate arguments:
y = sliceFrom( x, 1, null );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2 ]

arr = ndarray2array( y );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
```

The function supports the following `options`:

-   **strict**: boolean indicating whether to enforce strict bounds checking.

By default, the function throws an error when provided an index argument which exceeds array bounds. To return an empty array when an index exceeds array bounds, set the `strict` option to `false`.

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3, 2 ]

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = sliceFrom( x, null, 20, {
    'strict': false
});
// returns <ndarray>

sh = y.shape;
// returns [ 3, 0 ]

arr = ndarray2array( y );
// returns []
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   An **index argument** must be either an integer, `null`, or `undefined`.
-   The number of indices must match the number of array dimensions. Hence, if `x` is a zero-dimensional [ndarray][@stdlib/ndarray/ctor], then, if `start` is an array, `start` should not contain any index arguments. Similarly, if `x` is a one-dimensional [ndarray][@stdlib/ndarray/ctor], then, if `start` is an array, `start` should contain a single index argument. And so on and so forth.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var sliceFrom = require( '@stdlib/ndarray/slice-from' );

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
    'shape': [ 3, 3, 3 ]
});

// Get the last two rows of each matrix:
var y1 = sliceFrom( x, null, 1, null );
// returns <ndarray>

var a1 = ndarray2array( y1 );
// returns [ [ [ 3, 4, 5 ], [ 6, 7, 8 ] ], [ [ 12, 13, 14 ], [ 15, 16, 17 ] ], [ [ 21, 22, 23 ], [ 24, 25, 26 ] ] ]

// Get the last two rows and columns of each matrix:
var y2 = sliceFrom( x, null, 1, 1 );
// returns <ndarray>

var a2 = ndarray2array( y2 );
// returns [ [ [ 4, 5 ], [ 7, 8 ] ], [ [ 13, 14 ], [ 16, 17 ] ], [ [ 22, 23 ], [ 25, 26 ] ] ]

// Get the last two 2x2 matrices:
var y3 = sliceFrom( x, 1, 1, 1 );
// returns <ndarray>

var a3 = ndarray2array( y3 );
// returns [ [ [ 13, 14 ], [ 16, 17 ] ], [ [ 22, 23 ], [ 25, 26 ] ] ]
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
-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray/slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray/slice-dimension-from`][@stdlib/ndarray/slice-dimension-from]</span><span class="delimiter">: </span><span class="description">return a read-only shifted view of an input ndarray along a specific dimension.</span>
-   <span class="package-name">[`@stdlib/ndarray/slice-to`][@stdlib/ndarray/slice-to]</span><span class="delimiter">: </span><span class="description">return a read-only truncated view of an input ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

[@stdlib/ndarray/slice-dimension-from]: https://github.com/stdlib-js/ndarray/tree/main/slice-dimension-from

[@stdlib/ndarray/slice-to]: https://github.com/stdlib-js/ndarray/tree/main/slice-to

<!-- </related-links> -->

</section>

<!-- /.links -->
