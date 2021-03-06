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

# Next Data Type

> Return the next larger ndarray [data type][@stdlib/ndarray/dtypes] of the same kind.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nextDataType = require( '@stdlib/ndarray/next-dtype' );
```

#### nextDataType( \[dtype] )

If provided a `dtype` argument, returns the next larger ndarray [data type][@stdlib/ndarray/dtypes] of the same kind.

```javascript
var out = nextDataType( 'float32' );
// returns 'float64'
```

If a [data type][@stdlib/ndarray/dtypes] does not have a next larger [data type][@stdlib/ndarray/dtypes] or the next larger data type is not supported, the function returns `-1`.

```javascript
var out = nextDataType( 'float64' );
// returns -1
```

If not provided a `dtype` argument, the function returns a table.

```javascript
var out = nextDataType();
// returns {...}
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = nextDataType( 'foo' );
// returns null
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
var nextDataType = require( '@stdlib/ndarray/next-dtype' );

var DTYPES;
var dt;
var i;

// Get the list of supported ndarray data types:
DTYPES = dtypes();

// Print the next larger data type for each supported data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt = nextDataType( DTYPES[ i ] );
    console.log( '%s => %s', DTYPES[ i ], dt );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/dtypes`][@stdlib/ndarray/dtypes]</span><span class="delimiter">: </span><span class="description">list of ndarray data types.</span>
-   <span class="package-name">[`@stdlib/ndarray/promotion-rules`][@stdlib/ndarray/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the ndarray data type with the smallest size and closest kind to which ndarray data types can be safely cast.</span>
-   <span class="package-name">[`@stdlib/ndarray/safe-casts`][@stdlib/ndarray/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray/tree/main/promotion-rules

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray/tree/main/safe-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
