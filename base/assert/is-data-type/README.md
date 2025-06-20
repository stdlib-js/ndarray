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

# isDataType

> Test if an input value is a supported ndarray data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
```

#### isDataType( value )

Tests if an input value is a supported ndarray data type.

```javascript
var bool = isDataType( 'float32' );
// returns true

bool = isDataType( 'int32' );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns `true` when provided any supported ndarray [data type][@stdlib/ndarray/dtypes] and when provided a [struct][@stdlib/dstructs/struct] constructor describing a fixed-width composite data type.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );

var bool = isDataType( 'binary' );
// returns true

bool = isDataType( 'float32' );
// returns true

bool = isDataType( 'float64' );
// returns true

bool = isDataType( 'generic' );
// returns true

bool = isDataType( 'int16' );
// returns true

bool = isDataType( 'int32' );
// returns true

bool = isDataType( 'int8' );
// returns true

bool = isDataType( 'uint16' );
// returns true

bool = isDataType( 'uint32' );
// returns true

bool = isDataType( 'uint8' );
// returns true

bool = isDataType( 'uint8c' );
// returns true

bool = isDataType( '' );
// returns false

bool = isDataType( 'foo' );
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

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

</section>

<!-- /.links -->
