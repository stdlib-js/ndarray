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

# resolve

> Return the enumeration constant associated with a supported ndarray [data type policy][@stdlib/ndarray/output-dtype-policies] value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var resolve = require( '@stdlib/ndarray/base/output-policy-resolve-enum' );
```

#### resolve( policy )

Returns the enumeration constant associated with an ndarray [data type policy][@stdlib/ndarray/output-dtype-policies] value.

```javascript
var str2enum = require( '@stdlib/ndarray/base/output-policy-str2enum' );

var v = resolve( 'same' );
// returns <number>

v = resolve( str2enum( 'same' ) );
// returns <number>
```

If unable to resolve an enumeration constant, the function returns `null`.

```javascript
var v = resolve( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Downstream consumers of this function should **not** rely on specific integer values (e.g., `SAME == 0`). Instead, the function should be used in an opaque manner.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolve = require( '@stdlib/ndarray/base/output-policy-resolve-enum' );

var v = resolve( 'same' );
// returns <number>

v = resolve( 'promoted' );
// returns <number>

v = resolve( 'integer' );
// returns <number>

v = resolve( 'floating_point' );
// returns <number>

v = resolve( 'signed_integer' );
// returns <number>

v = resolve( 'unsigned_integer' );
// returns <number>

v = resolve( 'real_floating_point' );
// returns <number>

v = resolve( 'complex_floating_point' );
// returns <number>
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

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray/tree/main/output-dtype-policies

</section>

<!-- /.links -->
