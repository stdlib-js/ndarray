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

# ndarraylike2ndarray

> Convert an ndarray-like object to an [`ndarray`][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarraylike2ndarray = require( '@stdlib/ndarray/ndarraylike2ndarray' );
```

#### ndarraylike2ndarray( x\[, options] )

Converts an ndarray-like object to an [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );

var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
var out = ndarraylike2ndarray( arr );
// returns <ndarray>
```

The function supports the same `options` as [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided a **read-only** [`ndarray`][@stdlib/ndarray/ctor], the function returns a **read-only** [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarraylike2ndarray = require( '@stdlib/ndarray/ndarraylike2ndarray' );

// Create an ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

// Create another ndarray sharing the same data:
var out = ndarraylike2ndarray( x );
// returns <ndarray>

// Print various properties:
console.log( 'dtype: %s', out.dtype );
console.log( 'ndims: %d', out.shape.length );
console.log( 'length: %d', out.length );
console.log( 'shape: [ %s ]', out.shape.join( ', ' ) );
console.log( 'strides: [ %s ]', out.strides.join( ', ' ) );
console.log( 'offset: %d', out.offset );
console.log( 'order: %s', out.order );
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
