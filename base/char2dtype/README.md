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

# char2dtype

> Return the [data type][@stdlib/ndarray/dtypes] string associated with a provided [single letter character abbreviation][@stdlib/ndarray/base/dtype-char].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var char2dtype = require( '@stdlib/ndarray/base/char2dtype' );
```

#### char2dtype( \[ch] )

Returns the [data type][@stdlib/ndarray/dtypes] string associated with a provided [single letter character abbreviation][@stdlib/ndarray/base/dtype-char].

```javascript
var out = char2dtype( 'd' );
// returns 'float64'

out = char2dtype( 'i' );
// returns 'int32'
```

If provided an unknown or unsupported [single letter character abbreviation][@stdlib/ndarray/base/dtype-char], the function returns `null`.

```javascript
var out = char2dtype( '(' );
// returns null
```

If not provided a [data type][@stdlib/ndarray/dtypes] string, the function returns an object mapping [single letter character abbreviations][@stdlib/ndarray/base/dtype-char] to [data type][@stdlib/ndarray/dtypes] strings.

```javascript
var out = char2dtype();
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
var char2dtype = require( '@stdlib/ndarray/base/char2dtype' );

var chars = [
    dtypeChar( 'float64' ),
    dtypeChar( 'float32' ),
    dtypeChar( 'int8' ),
    dtypeChar( 'uint8' ),
    dtypeChar( 'uint8c' ),
    dtypeChar( 'int16' ),
    dtypeChar( 'uint16' ),
    dtypeChar( 'int32' ),
    dtypeChar( 'uint32' ),
    dtypeChar( 'binary' ),
    dtypeChar( 'generic' ),
    '('
];

var i;
for ( i = 0; i < chars.length; i++ ) {
    console.log( '%s => %s', chars[ i ], char2dtype( chars[ i ] ) );
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

[@stdlib/ndarray/base/dtype-char]: https://github.com/stdlib-js/ndarray/tree/main/base/dtype-char

</section>

<!-- /.links -->
