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

# ndarray2array

> Convert an [ndarray][@stdlib/ndarray/ctor] to a generic array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
```

#### ndarray2array( x )

Converts an [ndarray][@stdlib/ndarray/ctor] to a generic array (which may include nested arrays).

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var buffer = [ 1, 2, 3, 4 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var x = ndarray( 'generic', buffer, shape, strides, offset, order );
// returns <ndarray>

var out = ndarray2array( x );
// returns [ [ 1, 2 ], [ 3, 4 ] ]
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
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create a data buffer:
var buffer = zeroTo( 27 );

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'column-major';
var ndims = shape.length;

// Compute array meta data:
var strides = shape2strides( shape, order );
var offset = strides2offset( shape, strides );

// Print array information:
console.log( '' );
console.log( 'Dims: %s', shape.join( 'x' ) );

// Randomly flip strides and convert an ndarray to a nested array...
var arr;
var i;
var j;
for ( i = 0; i < 20; i++ ) {
    j = discreteUniform( 0, ndims-1 );
    strides[ j ] *= -1;
    offset = strides2offset( shape, strides );

    console.log( '' );
    console.log( 'Strides: %s', strides.join( ',' ) );
    console.log( 'Offset: %d', offset );

    arr = ndarray( 'generic', buffer, shape, strides, offset, order );
    console.log( JSON.stringify( ndarray2array( arr ) ) );
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

-   <span class="package-name">[`@stdlib/ndarray/array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray/to-json`][@stdlib/ndarray/to-json]</span><span class="delimiter">: </span><span class="description">serialize an ndarray as a JSON object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/to-json]: https://github.com/stdlib-js/ndarray/tree/main/to-json

<!-- </related-links> -->

</section>

<!-- /.links -->
