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

# binaryInputCastingDataType

> Resolve the casting [data type][@stdlib/ndarray/dtypes] for an input ndarray provided to a binary function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var binaryInputCastingDataType = require( '@stdlib/ndarray/base/binary-input-casting-dtype' );
```

#### binaryInputCastingDataType( idtype1, idtype2, odtype, policy )

Resolves the casting [data type][@stdlib/ndarray/dtypes] for an input ndarray provided to a binary function according to a [data type policy][@stdlib/ndarray/input-casting-policies].

<!-- eslint-disable id-length -->

```javascript
var dt = binaryInputCastingDataType( 'int32', 'int32', 'float64', 'promoted' );
// returns 'float64'
```

The function supports the following parameters:

-   **idtype1**: input ndarray data type.
-   **idtype2**: additional input ndarray data type.
-   **odtype**: output ndarray data type.
-   **policy**: input ndarray [casting policy][@stdlib/ndarray/input-casting-policies].

If `policy` is a [data type][@stdlib/ndarray/dtypes], the function always returns the `policy` value (i.e., the fourth argument).

<!-- eslint-disable id-length -->

```javascript
var dt = binaryInputCastingDataType( 'float32', 'float32', 'float64', 'complex128' );
// returns 'complex128'

dt = binaryInputCastingDataType( 'int32', 'float64', 'float64', 'complex128' );
// returns 'complex128'

// ...
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
var naryFunction = require( '@stdlib/utils/nary-function' );
var unzip = require( '@stdlib/utils/unzip' );
var nCartesianProduct = require( '@stdlib/array/base/n-cartesian-product' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var inputCastingDataType = require( '@stdlib/ndarray/base/binary-input-casting-dtype' );

var idt1 = [
    'float32',
    'float64'
];

var idt2 = [
    'int8',
    'uint8',
    'uint16',
    'uint32'
];

var odt = [
    'float32',
    'float64',
    'complex64',
    'complex128'
];

// Define a list of casting policies:
var policies = [
    'promoted',
    'accumulation',
    'output'
];

// Generate dtype-policy argument groups:
var args = nCartesianProduct( idt1, idt2, odt, policies );

// Unzip the argument arrays:
args = unzip( args );

// Resolve casting data types:
logEachMap( 'dtypes: (%10s, %10s, %10s). policy: %20s. result: %10s.', args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], naryFunction( inputCastingDataType, 4 ) );
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

[@stdlib/ndarray/input-casting-policies]: https://github.com/stdlib-js/ndarray/tree/main/input-casting-policies

</section>

<!-- /.links -->
