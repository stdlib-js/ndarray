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

# sliceAssign

> Assign element values from a broadcasted input [`ndarray`][@stdlib/ndarray/ctor] to corresponding elements in an output [`ndarray`][@stdlib/ndarray/ctor] view.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceAssign = require( '@stdlib/ndarray/slice-assign' );
```

#### sliceAssign( x, y, ...s\[, options] )

Assigns element values from a broadcasted input [`ndarray`][@stdlib/ndarray/ctor] to corresponding elements in an output [`ndarray`][@stdlib/ndarray/ctor] view.

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Define an input array:
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

// Define an output array:
var y = ndzeros( [ 2, 3, 2 ], {
    'dtype': x.dtype
});

// Create a slice:
var s0 = null;
var s1 = new Slice( null, null, -1 );
var s2 = new Slice( null, null, -1 );
var s = new MultiSlice( s0, s1, s2 );
// returns <MultiSlice>

// Perform assignment:
var out = sliceAssign( x, y, s );
// returns <ndarray>

var bool = ( out === y );
// returns true

arr = ndarray2array( y );
// returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **y**: output [`ndarray`][@stdlib/ndarray/ctor].
-   **s**: a [`MultiSlice`][@stdlib/slice/multi] instance, an array of slice arguments, or slice arguments as separate arguments.
-   **options**: function options.

The function supports three (mutually exclusive) means for providing slice arguments:

1.  providing a single [`MultiSlice`][@stdlib/slice/multi] instance.
2.  providing a single array of slice arguments.
3.  providing slice arguments as separate arguments.

The following example demonstrates each invocation style achieving equivalent results.

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// 1. Using a MultiSlice:
var x = scalar2ndarray( 10.0 );
var y = ndzeros( [ 2, 3 ] );

var s0 = 0;
var s1 = new Slice( 1, null, 1 );
var s = new MultiSlice( s0, s1 );
// returns <MultiSlice>

var out = sliceAssign( x, y, s );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ [ 0.0, 10.0, 10.0 ], [ 0.0, 0.0, 0.0 ] ]

// 2. Using an array of slice arguments:
x = scalar2ndarray( 10.0 );
y = ndzeros( [ 2, 3 ] );

out = sliceAssign( x, y, [ s0, s1 ] );
// returns <ndarray>

arr = ndarray2array( out );
// returns [ [ 0.0, 10.0, 10.0 ], [ 0.0, 0.0, 0.0 ] ]

// 3. Providing separate arguments:
x = scalar2ndarray( 10.0 );
y = ndzeros( [ 2, 3 ] );

out = sliceAssign( x, y, s0, s1 );
// returns <ndarray>

arr = ndarray2array( out );
// returns [ [ 0.0, 10.0, 10.0 ], [ 0.0, 0.0, 0.0 ] ]
```

The function supports the following `options`:

-   **strict**: boolean indicating whether to enforce strict bounds checking.

By default, the function throws an error when provided a slice which exceeds array bounds. To ignore slice indices exceeding array bounds, set the `strict` option to `false`.

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Define an input array:
var x = scalar2ndarray( 10.0 );

// Define an output array:
var y = ndzeros( [ 3, 2 ], {
    'dtype': x.dtype
});

// Create a slice:
var s0 = new Slice( 1, null, 1 );
var s1 = new Slice( 10, 20, 1 );
var s = new MultiSlice( s0, s1 );
// returns <MultiSlice>

// Perform assignment:
var out = sliceAssign( x, y, s, {
    'strict': false
});
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 0.0, 0.0 ], [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   An output [`ndarray`][@stdlib/ndarray/ctor] **must** be writable. If provided a **read-only** [`ndarray`][@stdlib/ndarray/ctor], the function throws an error.
-   A **slice argument** must be either a [`Slice`][@stdlib/slice/ctor], an integer, `null`, or `undefined`.
-   The number of slice dimensions must match the number of output array dimensions. Hence, if `y` is a zero-dimensional [`ndarray`][@stdlib/ndarray/ctor], then, if `s` is a [`MultiSlice`][@stdlib/slice/multi], `s` should be empty, and, if `s` is an array, `s` should not contain any slice arguments. Similarly, if `y` is a one-dimensional [`ndarray`][@stdlib/ndarray/ctor], then, if `s` is a [`MultiSlice`][@stdlib/slice/multi], `s` should have one slice dimension, and, if `s` is an array, `s` should contain a single slice argument. And so on and so forth.
-   The input [`ndarray`][@stdlib/ndarray/ctor] **must** be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output [`ndarray`][@stdlib/ndarray/ctor] view.
-   The input [`ndarray`][@stdlib/ndarray/ctor] must have a [data type][@stdlib/ndarray/dtypes] which can be [safely cast][@stdlib/ndarray/safe-casts] to the output [`ndarray`][@stdlib/ndarray/ctor] data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the [same kind][@stdlib/ndarray/same-kind-casts] (e.g., element values from a `'float64'` input [`ndarray`][@stdlib/ndarray/ctor] can be assigned to corresponding elements in a `'float32'` output [`ndarray`][@stdlib/ndarray/ctor]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var E = require( '@stdlib/slice/multi' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var slice = require( '@stdlib/ndarray/slice' );
var sliceAssign = require( '@stdlib/ndarray/slice-assign' );

// Alias `null` to allow for more compact indexing expressions:
var _ = null;

// Create an output ndarray:
var y = ndzeros( [ 3, 3, 3 ] );

// Update each matrix...
var s1 = E( 0, _, _ );
sliceAssign( scalar2ndarray( 100 ), y, s1 );

var a1 = ndarray2array( slice( y, s1 ) );
// returns [ [ 100, 100, 100 ], [ 100, 100, 100 ], [ 100, 100, 100 ] ]

var s2 = E( 1, _, _ );
sliceAssign( scalar2ndarray( 200 ), y, s2 );

var a2 = ndarray2array( slice( y, s2 ) );
// returns [ [ 200, 200, 200 ], [ 200, 200, 200 ], [ 200, 200, 200 ] ]

var s3 = E( 2, _, _ );
sliceAssign( scalar2ndarray( 300 ), y, s3 );

var a3 = ndarray2array( slice( y, s3 ) );
// returns [ [ 300, 300, 300 ], [ 300, 300, 300 ], [ 300, 300, 300 ] ]

// Update the second rows in each matrix:
var s4 = E( _, 1, _ );
sliceAssign( scalar2ndarray( 400 ), y, s4 );

var a4 = ndarray2array( slice( y, s4 ) );
// returns [ [ 400, 400, 400 ], [ 400, 400, 400 ], [ 400, 400, 400 ] ]

// Update the second columns in each matrix:
var s5 = E( _, _, 1 );
sliceAssign( scalar2ndarray( 500 ), y, s5 );

var a5 = ndarray2array( slice( y, s5 ) );
// returns [ [ 500, 500, 500 ], [ 500, 500, 500 ], [ 500, 500, 500 ] ]

// Return the contents of the entire ndarray:
var a6 = ndarray2array( y );
/* returns
  [
    [
      [ 100, 500, 100 ],
      [ 400, 500, 400 ],
      [ 100, 500, 100 ]
    ],
    [
      [ 200, 500, 200 ],
      [ 400, 500, 400 ],
      [ 200, 500, 200 ]
    ],
    [
      [ 300, 500, 300 ],
      [ 400, 500, 400 ],
      [ 300, 500, 300 ]
    ]
  ]
*/
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray/tree/main/safe-casts

[@stdlib/ndarray/same-kind-casts]: https://github.com/stdlib-js/ndarray/tree/main/same-kind-casts

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

<!-- </related-links> -->

</section>

<!-- /.links -->
