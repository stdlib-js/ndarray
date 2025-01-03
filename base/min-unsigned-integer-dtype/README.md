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

# Minimum Data Type

> Determine the minimum ndarray [data type][@stdlib/ndarray/dtypes] for storing a provided unsigned integer value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var minUnsignedIntegerDataType = require( '@stdlib/ndarray/base/min-unsigned-integer-dtype' );
```

#### minUnsignedIntegerDataType( value )

Returns the minimum ndarray [data type][@stdlib/ndarray/dtypes] for storing a provided unsigned integer value.

<!-- eslint-disable id-length -->

```javascript
var dt = minUnsignedIntegerDataType( 9999 );
// returns 'uint16'

dt = minUnsignedIntegerDataType( 3 );
// returns 'uint8'

dt = minUnsignedIntegerDataType( 1e100 );
// returns 'float64'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Once a provided integer value exceeds the maximum values of all supported unsigned integer [data types][@stdlib/ndarray/dtypes], the function defaults to returning `'float64'`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var exp2 = require( '@stdlib/math/base/special/exp2' );
var minUnsignedIntegerDataType = require( '@stdlib/ndarray/base/min-unsigned-integer-dtype' );

// Generate random powers:
var exp = discreteUniform( 100, 0, 40, {
    'dtype': 'generic'
});

// Determine the minimum data type for each generated value...
var v;
var i;
for ( i = 0; i < exp.length; i++ ) {
    v = exp2( exp[ i ] );
    console.log( 'min(%d) => %s', v, minUnsignedIntegerDataType( v ) );
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

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

</section>

<!-- /.links -->
