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

# isAllowedCast

> Determine whether an ndarray [data type][@stdlib/ndarray/dtypes] can be cast to another ndarray [data type][@stdlib/ndarray/dtypes] according to a specified [casting mode][@stdlib/ndarray/casting-modes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
```

#### isAllowedCast( from, to, casting )

Returns a boolean indicating whether an ndarray [data type][@stdlib/ndarray/dtypes] can be cast to another ndarray [data type][@stdlib/ndarray/dtypes] according to a specified [`casting`][@stdlib/ndarray/casting-modes] mode.

```javascript
var bool = isAllowedCast( 'float32', 'float64', 'safe' );
// returns true

bool = isAllowedCast( 'float64', 'int32', 'safe' );
// returns false
```

The following [`casting`][@stdlib/ndarray/casting-modes] modes are supported:

-   `none`: only allow casting between identical types.
-   `equiv`: allow casting between identical and byte swapped types.
-   `safe`: only allow "safe" casts.
-   `mostly-safe`: allow "safe" casts and, for floating-point data types, downcasts.
-   `same-kind`: allow "safe" casts and casts within the same kind (e.g., between signed integers or between floats).
-   `unsafe`: allow casting between all types (including between integers and floats).

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
var modes = require( '@stdlib/ndarray/casting-modes' );
var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );

var DTYPES;
var MODES;
var bool;
var dt1;
var dt2;
var i;
var j;
var k;

// Get a list of supported ndarray data types and casting modes:
DTYPES = dtypes();
MODES = modes();

// For each data type and mode, determine whether one can cast to another data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt1 = DTYPES[ i ];
    for ( j = 0; j < DTYPES.length; j++ ) {
        dt2 = DTYPES[ j ];
        for ( k = 0; k < MODES.length; k++ ) {
            bool = isAllowedCast( dt1, dt2, MODES[ k ] );
            console.log( '%s => %s. %s: %s.', dt1, dt2, MODES[ k ], bool );
        }
    }
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

[@stdlib/ndarray/casting-modes]: https://github.com/stdlib-js/ndarray/tree/main/casting-modes

</section>

<!-- /.links -->
