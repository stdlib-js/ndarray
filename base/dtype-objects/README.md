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

# Data Type Objects

> Return an object mapping supported [data type][@stdlib/ndarray/dtypes] strings to data type [objects][@stdlib/ndarray/dtype-ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypeObjects = require( '@stdlib/ndarray/base/dtype-objects' );
```

#### dtypeObjects()

Returns an object mapping supported [data type][@stdlib/ndarray/dtypes] strings to data type [objects][@stdlib/ndarray/dtype-ctor].

```javascript
var out = dtypeObjects();
// {...}
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
var dtypeStrings = require( '@stdlib/ndarray/base/dtype-strings' );
var dtypeObjects = require( '@stdlib/ndarray/base/dtype-objects' );

var dt = dtypeStrings();
// returns [...]

var o = dtypeObjects();
// returns {...}

var i;
for ( i = 0; i < dt.length; i++ ) {
    console.log( '%s => %s', dt[ i ], o[ dt[ i ] ].description );
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

[@stdlib/ndarray/dtype-ctor]: https://github.com/stdlib-js/ndarray/tree/main/dtype-ctor

</section>

<!-- /.links -->
