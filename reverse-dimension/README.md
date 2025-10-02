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

# reverseDimension

> Return a **read-only** view of an input [`ndarray`][@stdlib/ndarray/ctor] in which the order of elements along a specified dimension is reversed.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro section element. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reverseDimension = require( '@stdlib/ndarray/reverse-dimension' );
```

#### reverseDimension( x, dim )

Returns a read-only view of an input [`ndarray`][@stdlib/ndarray/ctor] in which the order of elements along a specified dimension is reversed.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], {
    'shape': [ 3, 2 ]
});
// returns <ndarray>

var arr = ndarray2array( x );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = reverseDimension( x, 0 );
// returns <ndarray>

arr = ndarray2array( y );
// returns [ [ 5.0, 6.0 ], [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dim**: index of dimension along which to reverse elements. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.

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
var uniform = require( '@stdlib/random/uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var reverseDimension = require( '@stdlib/ndarray/reverse-dimension' );

var x = uniform( [ 3, 3, 3 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

var y = reverseDimension( x, 0 );
console.log( ndarray2array( y ) );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
