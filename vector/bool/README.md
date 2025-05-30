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

# BooleanVector

> Create a boolean vector (i.e., a one-dimensional [ndarray][@stdlib/ndarray/ctor]).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
```

#### BooleanVector( \[options] )

Returns a one-dimensional boolean [ndarray][@stdlib/ndarray/ctor].

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr = new BooleanVector();
// returns <ndarray>

var len = numel( arr );
// returns 0
```

The function accepts the following options:

-   **order**: specifies whether an [ndarray][@stdlib/ndarray/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed array dimensions (see [`ndarray`][@stdlib/ndarray/ctor]). Default: `'throw'`.
-   **readonly**: boolean indicating whether an array should be **read-only**. Default: `false`.

#### BooleanVector( length\[, options] )

Returns a one-dimensional boolean [ndarray][@stdlib/ndarray/ctor] having a specified `length`.

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr = new BooleanVector( 5 );
// returns <ndarray>

var len1 = numel( arr );
// returns 5
```

#### BooleanVector( obj\[, options] )

Creates a one-dimensional boolean [ndarray][@stdlib/ndarray/ctor] from an array-like object or iterable.

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr = new BooleanVector( [ true, false, true ] );
// returns <ndarray>

var len1 = numel( arr );
// returns 3
```

#### BooleanVector( buffer\[, byteOffset\[, length]]\[, options] )

Returns a one-dimensional boolean [ndarray][@stdlib/ndarray/ctor] view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var numel = require( '@stdlib/ndarray/numel' );

var buf = new ArrayBuffer( 32 );

var arr1 = new BooleanVector( buf );
// returns <ndarray>

var len1 = numel( arr1 );
// returns 32

var arr2 = new BooleanVector( buf, 16 );
// returns <ndarray>

var len2 = numel( arr2 );
// returns 16

var arr3 = new BooleanVector( buf, 16, 1 );
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
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var every = require( '@stdlib/ndarray/every' );
var map = require( '@stdlib/ndarray/map' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );

// Create a vector containing random values:
var x = new BooleanVector( bernoulli( 10, 0.9 ) );

// Determine whether every element is truthy:
var v = every( x );
console.log( v.get() );

// Define a function which inverts individual values:
function invert( v ) {
    return !v;
}

// Apply function:
var y = map( x, invert );

// Determine whether every element is truthy:
v = every( y );
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
