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

# isSameKindCast

> Determine whether an ndarray [data type][@stdlib/ndarray/dtypes] can be safely cast to, or is of the same "kind" as, another ndarray [data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isSameKindCast = require( '@stdlib/ndarray/base/assert/is-same-kind-data-type-cast' );
```

#### isSameKindCast( from, to )

Returns a `boolean` indicating whether an ndarray [data type][@stdlib/ndarray/dtypes] can be safely cast to, or is of the same "kind" as, another ndarray [data type][@stdlib/ndarray/dtypes] (e.g., casting between signed integers or between floats).

```javascript
var bool = isSameKindCast( 'float32', 'float64' );
// returns true

bool = isSameKindCast( 'uint16', 'int16' );
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
var dtypes = require( '@stdlib/ndarray/dtypes' );
var isSameKindCast = require( '@stdlib/ndarray/base/assert/is-same-kind-data-type-cast' );

var DTYPES;
var bool;
var dt;
var i;
var j;

// Get a list of supported ndarray data types:
DTYPES = dtypes();

// For each data type, determine whether one can cast to another data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt = DTYPES[ i ];
    for ( j = 0; j < DTYPES.length; j++ ) {
        bool = isSameKindCast( dt, DTYPES[ j ] );
        console.log( '%s => %s. Allowed cast? %s.', dt, DTYPES[ j ], bool );
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

</section>

<!-- /.links -->