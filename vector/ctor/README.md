<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Vector

> Create a vector (i.e., a one-dimensional [ndarray][@stdlib/ndarray/ctor]).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );
```

#### vector( \[dtype]\[, options] )

Returns a one-dimensional [ndarray][@stdlib/ndarray/ctor] having a specified [data type][@stdlib/ndarray/dtypes].

```javascript
var getDType = require( '@stdlib/ndarray/dtype' );
var numel = require( '@stdlib/ndarray/numel' );

var arr = vector();
// returns <ndarray>

var len = numel( arr );
// returns 0

var dt = getDType( arr );
// returns 'float64'
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [`float64`][@stdlib/ndarray/dtypes] data type. To specify an alternative [data type][@stdlib/ndarray/dtypes], provide a `dtype` argument.

```javascript
var getDType = require( '@stdlib/ndarray/dtype' );
var numel = require( '@stdlib/ndarray/numel' );

var arr = vector( 'int32' );
// returns <ndarray>

var len = numel( arr );
// returns 0

var dt = getDType( arr );
// returns 'int32'
```

The function accepts the following options:

-   **order**: specifies whether an [ndarray][@stdlib/ndarray/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed array dimensions (see [`ndarray`][@stdlib/ndarray/ctor]). Default: `'throw'`.
-   **readonly**: boolean indicating whether an array should be **read-only**. Default: `false`.

#### vector( length\[, dtype]\[, options] )

Returns a one-dimensional [ndarray][@stdlib/ndarray/ctor] having a specified `length`.

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr1 = vector( 5 );
// returns <ndarray>

var len1 = numel( arr1 );
// returns 5

var arr2 = vector( 5, 'uint8' );
// returns <ndarray>

var len2 = numel( arr2 );
// returns 5
```

#### vector( obj\[, dtype]\[, options] )

Creates a one-dimensional [ndarray][@stdlib/ndarray/ctor] from an array-like object or iterable.

```javascript
var numel = require( '@stdlib/ndarray/numel' );

var arr1 = vector( [ 0.5, 0.5, 0.5 ] );
// returns <ndarray>

var len1 = numel( arr1 );
// returns 3

var arr2 = vector( [ 0.5, 0.5, 0.5 ], 'float32' );
// returns <ndarray>

var len2 = numel( arr2 );
// returns 3
```

#### vector( buffer\[, byteOffset\[, length]]\[, dtype]\[, options] )

Returns a one-dimensional [ndarray][@stdlib/ndarray/ctor] view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var getDType = require( '@stdlib/ndarray/dtype' );
var numel = require( '@stdlib/ndarray/numel' );

var buf = new ArrayBuffer( 32 );

var arr1 = vector( buf );
// returns <ndarray>

var len1 = numel( arr1 );
// returns 4

var dt1 = getDType( arr1 );
// returns 'float64'

var arr2 = vector( buf, 'float32' );
// returns <ndarray>

var len2 = numel( arr2 );
// returns 8

var dt2 = getDType( arr2 );
// returns 'float32'

var arr3 = vector( buf, 16 );
// returns <ndarray>

var len3 = numel( arr3 );
// returns 2

var dt3 = getDType( arr3 );
// returns 'float64'

var arr4 = vector( buf, 16, 'float32' );
// returns <ndarray>

var len4 = numel( arr4 );
// returns 4

var dt4 = getDType( arr4 );
// returns 'float32'

var arr5 = vector( buf, 16, 1 );
// returns <ndarray>

var len5 = numel( arr5 );
// returns 1

var dt5 = getDType( arr5 );
// returns 'float64'

var arr6 = vector( buf, 10, 4, 'int16' );
// returns <ndarray>

var len6 = numel( arr6 );
// returns 4

var dt6 = getDType( arr6 );
// returns 'int16'
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var cartesianProduct = require( '@stdlib/array/cartesian-product' );
var unzip = require( '@stdlib/utils/unzip' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var getShape = require( '@stdlib/ndarray/shape' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var vector = require( '@stdlib/ndarray/vector/ctor' );

// Create an array of random array lengths:
var lens = discreteUniform( 10, 5, 15, {
    'dtype': 'int32'
});

// Resolve a list of supported ndarray date types:
var dts = dtypes();

// Create length-dtype pairs:
var pairs = cartesianProduct( lens, dts );

// Split the pairs into individual arguments:
var args = unzip( pairs );

// Define a callback to create a vector and return the vector shape:
function clbk( len, dtype ) {
    var x = vector( len, dtype );
    return getShape( x );
}

// Apply the callback and print the results:
logEachMap( 'len: %2d. dtype: %10s. shape: [%d].', args[ 0 ], args[ 1 ], clbk );
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

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

</section>

<!-- /.links -->
