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

# binaryBlockSize

> Resolve a loop block size for multi-dimensional array tiled loops.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var binaryBlockSize = require( '@stdlib/ndarray/base/binary-tiling-block-size' );
```

#### binaryBlockSize( dtypeX, dtypeY, dtypeZ )

Resolves a loop block size according to provided ndarray [dtypes][@stdlib/ndarray/dtypes] for multi-dimensional array tiled loops applying a binary function.

```javascript
var bsize = binaryBlockSize( 'float64', 'float64', 'float64' );
// returns <number>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned loop tiling block size is in units of elements.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var cartesianSquare = require( '@stdlib/array/base/cartesian-square' );
var promotionRules = require( '@stdlib/ndarray/promotion-rules' );
var binaryBlockSize = require( '@stdlib/ndarray/base/binary-tiling-block-size' );

// Generate a list of input ndarray dtype pairs:
var dt = cartesianSquare( dtypes() );

// Resolve the block size for each dtype pair and its promoted dtype...
var t;
var b;
var i;
console.log( 'block_size, xdtype, ydtype, zdtype' );
for ( i = 0; i < dt.length; i++ ) {
    t = promotionRules.apply( null, dt[ i ] );
    dt[ i ].push( ( t === -1 ) ? 'generic' : t );
    b = binaryBlockSize.apply( null, dt[ i ] );
    console.log( '%d, %s, %s, %s', b, dt[i][0], dt[i][1], dt[i][2] );
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
