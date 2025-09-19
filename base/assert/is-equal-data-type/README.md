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

# isEqualDataType

> Test whether two values are equal ndarray [data types][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isEqualDataType = require( '@stdlib/ndarray/base/assert/is-equal-data-type' );
```

#### isEqualDataType( v1, v2 )

Tests whether two values are equal ndarray [data types][@stdlib/ndarray/dtypes].

```javascript
var bool = isEqualDataType( 'float32', 'float32' );
// returns true

bool = isEqualDataType( 'int32', 'int16' );
// returns false
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
var DataType = require( '@stdlib/ndarray/dtype-ctor' );
var isEqualDataType = require( '@stdlib/ndarray/base/assert/is-equal-data-type' );

var bool = isEqualDataType( 'binary', 'binary' );
// returns true

bool = isEqualDataType( 'float32', 'float32' );
// returns true

bool = isEqualDataType( 'float64', new DataType( 'float64' ) );
// returns true

bool = isEqualDataType( 'generic', new DataType( 'generic' ) );
// returns true

bool = isEqualDataType( 'int16', 'int32' );
// returns false

bool = isEqualDataType( 'int32', new DataType( 'int16') );
// returns false

bool = isEqualDataType( 'foo', 'foo' );
// returns false

bool = isEqualDataType( {}, {} );
// returns false
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
