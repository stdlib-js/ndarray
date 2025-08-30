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

# ndarrayWith

> Return a new [ndarray][@stdlib/ndarray/ctor] with the element at a specified index replaced by a provided value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarrayWith = require( '@stdlib/ndarray/with' );
```

#### ndarrayWith( x, indices, value )

Returns a new [ndarray][@stdlib/ndarray/ctor] with the element at a specified index replaced by a provided value.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );

var x = zeros( [ 2, 2 ], {
    'dtype': 'float64'
});
// returns <ndarray>

var out = ndarrayWith( x, [ 0, 0 ], 1.0 );
// returns <ndarray>

var v = out.get( 0, 0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **indices**: indices of the element to replace.
-   **value**: replacement value.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function does not validate that a provided `value` is compatible with the data type of the input [ndarray][@stdlib/ndarray/ctor]. For example, the function does not guard against precision loss when `value` is a real-valued number and the input [ndarray][@stdlib/ndarray/ctor] has an integer data type. This function should be considered a copy-on-write analog to using an [ndarray][@stdlib/ndarray/ctor]'s `set` method. Whether a `value` is silently coerced to the data type of the input [ndarray][@stdlib/ndarray/ctor] or triggers an exception when incompatible is implementation-dependent. Accordingly, any assertion logic ensuring data type compatibility should be performed **before** calling this function.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarrayWith = require( '@stdlib/ndarray/with' );

var x = zeros( [ 1, 3, 3 ], {
    'dtype': 'float64'
});

var out = ndarrayWith( x, [ 0, 1, 1 ], 10.0 );
console.log( ndarray2array( out ) );
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
