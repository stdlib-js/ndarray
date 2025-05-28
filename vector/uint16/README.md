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

# Uint16Vector

> Create an unsigned 16-bit integer vector (i.e., a one-dimensional [ndarray][@stdlib/ndarray/ctor]).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Uint16Vector = require( '@stdlib/ndarray/vector/uint16' );
```

#### Uint16Vector( \[options] )

Returns a one-dimensional unsigned 16-bit integer [ndarray][@stdlib/ndarray/ctor].

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr = new Uint16Vector();
// returns <ndarray>

var len = numel( arr );
// returns 0
```

The function accepts the following options:

-   **order**: specifies whether an [ndarray][@stdlib/ndarray/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed array dimensions (see [`ndarray`][@stdlib/ndarray/ctor]). Default: `'throw'`.
-   **readonly**: boolean indicating whether an array should be **read-only**. Default: `false`.

#### Uint16Vector( length\[, options] )

Returns a one-dimensional unsigned 16-bit integer [ndarray][@stdlib/ndarray/ctor] having a specified `length`.

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr = new Uint16Vector( 5 );
// returns <ndarray>

var len1 = numel( arr );
// returns 5
```

#### Uint16Vector( obj\[, options] )

Creates a one-dimensional unsigned 16-bit integer [ndarray][@stdlib/ndarray/ctor] from an array-like object or iterable.

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr = new Uint16Vector( [ 1, 2, 3 ] );
// returns <ndarray>

var len1 = numel( arr );
// returns 3
```

#### Uint16Vector( buffer\[, byteOffset\[, length]]\[, options] )

Returns a one-dimensional unsigned 16-bit integer [ndarray][@stdlib/ndarray/ctor] view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var numel = require( '@stdlib/ndarray/numel' );

var buf = new ArrayBuffer( 32 );

var arr1 = new Uint16Vector( buf );
// returns <ndarray>

var len1 = numel( arr1 );
// returns 16

var arr2 = new Uint16Vector( buf, 16 );
// returns <ndarray>

var len2 = numel( arr2 );
// returns 8

var arr3 = new Uint16Vector( buf, 16, 1 );
// returns <ndarray>

var len3 = numel( arr3 );
// returns 1
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sum = require( '@stdlib/blas/ext/sum' );
var map = require( '@stdlib/ndarray/map' );
var Uint16Vector = require( '@stdlib/ndarray/vector/uint16' );

// Create a vector containing random values:
var x = new Uint16Vector( discreteUniform( 10, 0, 100 ) );

// Compute the sum:
var v = sum( x );
console.log( v.get() );

// Define a function which applies a threshold to individual values:
function threshold( v ) {
    return ( v > 10 ) ? v : 0;
}

// Apply threshold:
var y = map( x, threshold );

// Recompute the sum:
v = sum( y );
console.log( v.get() );
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

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

</section>

<!-- /.links -->
