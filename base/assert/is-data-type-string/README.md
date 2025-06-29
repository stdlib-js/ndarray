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

# isDataTypeString

> Test if an input value is a supported built-in ndarray [data type][@stdlib/ndarray/dtypes] string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isDataTypeString = require( '@stdlib/ndarray/base/assert/is-data-type-string' );
```

#### isDataTypeString( value )

Tests if an input value is a supported built-in ndarray [data type][@stdlib/ndarray/dtypes] string.

```javascript
var bool = isDataTypeString( 'float32' );
// returns true

bool = isDataTypeString( 'int32' );
// returns true
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
var isDataTypeString = require( '@stdlib/ndarray/base/assert/is-data-type-string' );

var bool = isDataTypeString( 'binary' );
// returns true

bool = isDataTypeString( 'float32' );
// returns true

bool = isDataTypeString( 'float64' );
// returns true

bool = isDataTypeString( 'generic' );
// returns true

bool = isDataTypeString( 'int16' );
// returns true

bool = isDataTypeString( 'int32' );
// returns true

bool = isDataTypeString( 'int8' );
// returns true

bool = isDataTypeString( 'uint16' );
// returns true

bool = isDataTypeString( 'uint32' );
// returns true

bool = isDataTypeString( 'uint8' );
// returns true

bool = isDataTypeString( 'uint8c' );
// returns true

bool = isDataTypeString( '' );
// returns false

bool = isDataTypeString( 'foo' );
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
