<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# vind2bind

> Convert a linear index in an array view to a linear index in an underlying data buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );
```

#### vind2bind( shape, strides, offset, order, idx, mode )

Converts a linear index in an array view to a linear index in an underlying data buffer.

```javascript
var shape = [ 3, 3 ];
var order = 'row-major';
var strides = [ -3, 1 ];
var offset = 6;

var idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
// returns 7
```

The function supports the following modes:

-   **throw**: specifies that the function should throw an error when a linear index exceeds array dimensions.
-   **normalize**: specifies that the function should normalize negative linear indices and throw an error when a linear index exceeds array dimensions.
-   **wrap**: specifies that the function should wrap around a linear index exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that the function should set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, 1 ];
var offset = 2;

var idx = vind2bind( shape, strides, offset, order, -2, 'wrap' );
// returns 0

idx = vind2bind( shape, strides, offset, order, 10, 'clamp' );
// returns 1
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, -2 ];
var offset = 2;

var idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
// returns 0
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
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
var numel = require( '@stdlib/ndarray/base/numel' );
var randu = require( '@stdlib/random/base/randu' );
var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'row-major';

// Compute array meta data:
var len = numel( shape );
var strides = shape2strides( shape, order );

// Randomly flip the sign of strides...
var i;
for ( i = 0; i < shape.length; i++ ) {
    if ( randu() < 0.5 ) {
        strides[ i ] *= -1;
    }
}

// Compute the underlying data buffer index offset:
var offset = strides2offset( shape, strides );

// Print array info:
console.log( 'Dims: %s', shape.join( 'x' ) );
console.log( 'Strides: %s', strides.join( ',' ) );
console.log( 'Offset: %d', offset );

// For each view index, determine the corresponding index into an array's underlying data buffer...
var ind;
for ( i = 0; i < len; i++ ) {
    ind = vind2bind( shape, strides, offset, order, i, 'throw' );
    console.log( 'view[%d] => buffer[%d]', i, ind );
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

</section>

<!-- /.links -->
