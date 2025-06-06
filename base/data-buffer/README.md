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

# data

> Return the underlying [data buffer][@stdlib/ndarray/base/buffer] of a provided [ndarray][@stdlib/ndarray/base/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var data = require( '@stdlib/ndarray/base/data-buffer' );
```

#### data( x )

Returns the underlying [data buffer][@stdlib/ndarray/base/buffer] of a provided [ndarray][@stdlib/ndarray/base/ctor].

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );

var x = zeros( [ 3, 2, 3 ], {
    'dtype': 'float64'
});
// returns <ndarray>

var out = data( x );
// returns <Float64Array>
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
var zeros = require( '@stdlib/ndarray/zeros' );
var data = require( '@stdlib/ndarray/base/data-buffer' );

// Create a 'float64' array...
var opts = {
    'dtype': 'float64'
};
var x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

var buf = data( x );
// returns <Float64Array>

// Create a 'float32' array...
opts = {
    'dtype': 'float32'
};
x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

buf = data( x );
// returns <Float32Array>

// Create a 'complex128' array...
opts = {
    'dtype': 'complex128'
};
x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

buf = data( x );
// returns <Complex128Array>

// Create an 'int32' array...
opts = {
    'dtype': 'int32'
};
x = zeros( [ 2, 2 ], opts );
// returns <ndarray>

buf = data( x );
// returns <Int32Array>
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

[@stdlib/ndarray/base/buffer]: https://github.com/stdlib-js/ndarray/tree/main/base/buffer

</section>

<!-- /.links -->
