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

# fillSlice

> Fill an input [`ndarray`][@stdlib/ndarray/ctor] view with a specified value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fillSlice = require( '@stdlib/ndarray/fill-slice' );
```

#### fillSlice( x, value, ...s\[, options] )

Fills an input [`ndarray`][@stdlib/ndarray/ctor] view with a specified value.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var MultiSlice = require( '@stdlib/slice/multi' );
var Slice = require( '@stdlib/slice/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = zeros( [ 3, 4 ], {
    'dtype': 'float64'
});

// Define the fill region:
var s0 = new Slice( 1, 3 );
var s1 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1 );

// Fill the region with a scalar value:
var y = fillSlice( x, 5.0, s );
// returns <ndarray>

var bool = ( y === x );
// returns true

var arr = ndarray2array( x );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 5.0, 5.0 ], [ 0.0, 0.0, 5.0, 5.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **value**: fill value.
-   **s**: a [`MultiSlice`][@stdlib/slice/multi] instance, an array of slice arguments, or slice arguments as separate arguments.
-   **options**: function options.

The function supports three (mutually exclusive) means for providing slice arguments:

1.  providing a single [`MultiSlice`][@stdlib/slice/multi] instance.
2.  providing a single array of slice arguments.
3.  providing slice arguments as separate arguments.

The following example demonstrates each invocation style achieving equivalent results.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var MultiSlice = require( '@stdlib/slice/multi' );
var Slice = require( '@stdlib/slice/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var opts = {
    'dtype': 'float64'
};

// 1. Using a MultiSlice:
var x = zeros( [ 3, 4 ], opts );

var s0 = new Slice( 1, 3 );
var s1 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1 );

var out = fillSlice( x, 5.0, s );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 5.0, 5.0 ], [ 0.0, 0.0, 5.0, 5.0 ] ]

// 2. Using an array of slice arguments:
x = zeros( [ 3, 4 ], opts );

out = fillSlice( x, 6.0, [ s0, s1 ] );
// returns <ndarray>

arr = ndarray2array( out );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 6.0, 6.0 ], [ 0.0, 0.0, 6.0, 6.0 ] ]

// 3. Providing separate arguments:
x = zeros( [ 3, 4 ], opts );

out = fillSlice( x, 7.0, s0, s1 );
// returns <ndarray>

arr = ndarray2array( out );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 7.0, 7.0 ], [ 0.0, 0.0, 7.0, 7.0 ] ]
```

The function supports the following options:

-   **strict**: boolean indicating whether to enforce strict bounds checking.

By default, the function throws an error when provided a slice which exceeds array bounds. To ignore slice indices exceeding array bounds, set the `strict` option to `false`.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var MultiSlice = require( '@stdlib/slice/multi' );
var Slice = require( '@stdlib/slice/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = zeros( [ 3, 4 ], {
    'dtype': 'float64'
});

// Define the fill region:
var s0 = new Slice( 1, null, 1 );
var s1 = new Slice( 10, 20, 1 );
var s = new MultiSlice( s0, s1 );

// Fill the region with a scalar value:
var y = fillSlice( x, 5.0, s, {
    'strict': false
});
// returns <ndarray>

var arr = ndarray2array( x );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An input [`ndarray`][@stdlib/ndarray/ctor] **must** be writable. If provided a **read-only** [`ndarray`][@stdlib/ndarray/ctor], the function throws an error.
-   A **slice argument** must be either a [`Slice`][@stdlib/slice/ctor], an integer, `null`, or `undefined`.
-   If a fill value is a number and `x` has a complex [data type][@stdlib/ndarray/dtypes], the function fills an input [`ndarray`][@stdlib/ndarray/ctor] with a complex number whose real component equals the provided fill `value` and whose imaginary component is zero.
-   A fill value must be able to safely cast to the input [`ndarray`][@stdlib/ndarray/ctor] [data type][@stdlib/ndarray/dtypes]. Fill values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input [`ndarray`][@stdlib/ndarray/ctor]).
-   The function **mutates** the input [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var MultiSlice = require( '@stdlib/slice/multi' );
var Slice = require( '@stdlib/slice/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var fillSlice = require( '@stdlib/ndarray/fill-slice' );

// Create a zero-filled ndarray:
var x = zeros( [ 2, 3, 4 ], {
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Specify the fill region:
var s0 = new Slice( 1, 2 );
var s1 = new Slice( null, null );
var s2 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1, s2 );

// Fill a slice with a scalar value:
fillSlice( x, 10.0, s );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

</section>

<!-- /.links -->
