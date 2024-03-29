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

# Casting Modes

> List of ndarray casting modes.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var modes = require( '@stdlib/ndarray/casting-modes' );
```

#### modes()

Returns a list of ndarray casting modes.

```javascript
var out = modes();
// returns [ 'none', 'equiv', 'safe', 'mostly-safe', 'same-kind', 'unsafe' ]
```

The output `array` contains the following modes:

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
var indexOf = require( '@stdlib/utils/index-of' );
var modes = require( '@stdlib/ndarray/casting-modes' );

var MODES = modes();
var bool;

function isMode( str ) {
    if ( indexOf( MODES, str ) === -1 ) {
        return false;
    }
    return true;
}

bool = isMode( 'none' );
// returns true

bool = isMode( 'equiv' );
// returns true

bool = isMode( 'safe' );
// returns true

bool = isMode( 'mostly-safe' );
// returns true

bool = isMode( 'same-kind' );
// returns true

bool = isMode( 'unsafe' );
// returns true

bool = isMode( 'beep' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- </related-links> -->

</section>

<!-- /.links -->
