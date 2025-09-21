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

# Enumeration Constants

> Return an object mapping supported [data type][@stdlib/ndarray/dtypes] strings to enumeration constants.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypeEnums = require( '@stdlib/ndarray/base/dtype-enums' );
```

#### dtypeEnums()

Returns an object mapping supported [data type][@stdlib/ndarray/dtypes] strings to enumeration constants.

```javascript
var out = dtypeEnums();
// {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Downstream consumers of a returned mapping should **not** rely on specific integer values (e.g., `int8 == 0`). Instead, the object should be used in an opaque manner.
-   The main purpose of this function is JavaScript and C inter-operation of ndarray objects.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypeStrings = require( '@stdlib/ndarray/base/dtype-strings' );
var dtypeEnums = require( '@stdlib/ndarray/base/dtype-enums' );

var dt = dtypeStrings();
// returns [...]

var enums = dtypeEnums();
// returns {...}

var i;
for ( i = 0; i < dt.length; i++ ) {
    console.log( '%s => %d', dt[ i ], enums[ dt[ i ] ] );
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
