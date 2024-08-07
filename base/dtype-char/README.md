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

# dtypeChar

> Return the single letter abbreviation for an underlying [array data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtypeChar = require( '@stdlib/ndarray/base/dtype-char' );
```

#### dtypeChar( \[dtype] )

Returns the single letter character abbreviation for an underlying [array data type][@stdlib/ndarray/dtypes].

```javascript
var ch = dtypeChar( 'float64' );
// returns 'd'

ch = dtypeChar( 'generic' );
// returns 'o'
```

If provided an unknown or unsupported data type, the function returns `null`.

```javascript
var ch = dtypeChar( 'foobar' );
// returns null
```

If not provided a [data type][@stdlib/ndarray/dtypes] value, the function returns an object mapping [data type][@stdlib/ndarray/dtypes] strings to single letter character abbreviations.

```javascript
var obj = dtypeChar();
// returns {...}
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
var dtypeChar = require( '@stdlib/ndarray/base/dtype-char' );

var dtypes = [
    'float64',
    'float32',
    'int8',
    'uint8',
    'uint8c',
    'int16',
    'uint16',
    'int32',
    'uint32',
    'binary',
    'generic',
    'foobar'
];

var i;
for ( i = 0; i < dtypes.length; i++ ) {
    console.log( '%s => %s', dtypes[ i ], dtypeChar( dtypes[ i ] ) );
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
