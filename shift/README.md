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

# shift

> Return an array containing a read-only truncated view of an input [`ndarray`][@stdlib/ndarray/ctor] and a read-only view of the first element(s) along a specified dimension.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var shift = require( '@stdlib/ndarray/shift' );
```

#### shift( x\[, options] )

Returns an array containing a **read-only** truncated view of an input [`ndarray`][@stdlib/ndarray/ctor] and a **read-only** view of the first element(s) along a specified dimension.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
    'shape': [ 3, 2 ]
});
// returns <ndarray>

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = shift( x );
// returns [ <ndarray>, <ndarray> ]

arr = ndarray2array( y[ 0 ] );
// returns [ [ 2.0 ], [ 4.0 ], [ 6.0 ] ]

arr = ndarray2array( y[ 1 ] );
// returns [ [ 1.0 ], [ 3.0 ], [ 5.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray. Must have one or more dimensions.
-   **options**: function options (_optional_).

The function supports the following `options`:

-   **dim**: dimension along which to perform the operation. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`. Default: `-1`.

By default, the function performs operation along the last dimension of the input [`ndarray`][@stdlib/ndarray/ctor]. To perform operation along a specific dimension, provide the `dim` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
    'shape': [ 3, 2 ]
});
// returns <ndarray>

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var opts = {
    'dim': 0
};

var y = shift( x, opts );
// returns [ <ndarray>, <ndarray> ]

arr = ndarray2array( y[ 0 ] );
// returns [ [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

arr = ndarray2array( y[ 1 ] );
// returns [ [ 1.0, 2.0 ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeroTo = require( '@stdlib/array/zero-to' );
var shift = require( '@stdlib/ndarray/shift' );

// Create an ndarray:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});
console.log( ndarray2array( x ) );

// Remove the first column from each matrix:
var y = shift( x );

console.log( ndarray2array( y[ 0 ] ) );
console.log( ndarray2array( y[ 1 ] ) );
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

</section>

<!-- /.links -->
