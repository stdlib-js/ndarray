<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# ndarray Native Add-ons

> C APIs for creating Node-API ndarray native add-ons.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This package exposes an absolute file path for the directory containing header files for various C APIs. The various C APIs facilitate the creation of Node-API ndarray native add-ons.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/ndarray/base/napi' );
```

#### headerDir

Absolute file path for the directory containing header files for C APIs.

```javascript
var dir = headerDir;
// returns <string>
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

```javascript
var headerDir = require( '@stdlib/ndarray/base/napi' );

console.log( headerDir );
// => <string>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This package exposes various C APIs to facilitate the creation of Node-API ndarray native add-ons. The included C APIs are the APIs implemented in the following packages:

<!-- NOTE: please keep in alphabetical order -->

-   [`@stdlib/ndarray/base/napi/unary`][@stdlib/ndarray/base/napi/unary]: Node-API interfaces and macros for registering one or more [`@stdlib/ndarray/base/unary`][@stdlib/ndarray/base/unary] interfaces with support for multiple dispatch.
-   [`@stdlib/ndarray/base/unary`][@stdlib/ndarray/base/unary]: ndarray loops for operating on a single input ndarray and one or more output ndarrays.
-   [`@stdlib/ndarray/dtypes`][@stdlib/ndarray/dtypes]: supported ndarray data types.

For API documentation, consult the individual packages.

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/napi.h"
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/napi.h"

// TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

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

[@stdlib/ndarray/base/napi/unary]: https://github.com/stdlib-js/ndarray/tree/main/base/napi/unary

[@stdlib/ndarray/base/unary]: https://github.com/stdlib-js/ndarray/tree/main/base/unary

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

</section>

<!-- /.links -->
