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

# dtypes2enums

> Resolve a list of [data type][@stdlib/ndarray/dtypes] enumeration constants.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypes2enums = require( '@stdlib/ndarray/base/dtypes2enums' );
```

#### dtypes2enums( dtypes )

Resolves a list of [data type][@stdlib/ndarray/dtypes] enumeration constants.

```javascript
var out = dtypes2enums( [ 'float32', 'float64' ] );
// returns [...]
```

The function accepts the following arguments:

-   **dtypes**: an array of [data types][@stdlib/ndarray/dtypes].

If the function is unable to resolve an enumeration constant for a provided [data type][@stdlib/ndarray/dtypes], the corresponding element in the returned array will be `null`.

```javascript
var out = dtypes2enums( [ 'foo', 'bar' ] );
// returns [ null, null ]
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
var dtypes = require( '@stdlib/ndarray/dtypes' );
var logEach = require( '@stdlib/console/log-each' );
var dtypes2enums = require( '@stdlib/ndarray/base/dtypes2enums' );

// Get the list of supported data types:
var dt = dtypes();

// Resolve enumeration constants:
var enums = dtypes2enums( dt );

// Print the results:
logEach( '%s => %d', dt, enums );
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
