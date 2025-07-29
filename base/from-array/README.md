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

# array2ndarray

> Convert an array to a one-dimensional [ndarray][@stdlib/ndarray/base/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var array2ndarray = require( '@stdlib/ndarray/base/from-array' );
```

#### array2ndarray( buf, order )

Returns a one-dimensional [ndarray][@stdlib/ndarray/base/ctor] which wraps a provided input array.

```javascript
var x = array2ndarray( [ 1, 2, 3 ], 'row-major' );
// returns <ndarray>

var sh = x.shape;
// returns [ 3 ]

var dt = x.dtype;
// returns 'generic'
```

The function supports the following parameters:

-   **buf**: input array.
-   **order**: memory [layout][@stdlib/ndarray/orders]. Must be either `'row-major'` or `'column-major'`.

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
var dtype = require( '@stdlib/ndarray/dtype' );
var typedarray = require( '@stdlib/array/typed' );
var array2ndarray = require( '@stdlib/ndarray/base/from-array' );

var buf = typedarray( 10, 'float64' );
var x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'float64'

buf = typedarray( 10, 'int32' );
x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'int32'

buf = typedarray( 10, 'complex128' );
x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'complex128'

buf = typedarray( 10, 'bool' );
x = array2ndarray( buf, 'row-major' );
console.log( dtype( x ) );
// => 'bool'
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

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray/tree/main/base/ctor

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray/tree/main/orders

</section>

<!-- /.links -->
