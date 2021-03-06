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

# Unary

> Apply a unary callback to elements in an input ndarray and assign results to elements in an output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unary = require( '@stdlib/ndarray/base/unary' );
```

#### unary( arrays, fcn )

Applies a unary callback to elements in an input ndarray and assigns results to elements in an output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function scale( x ) {
    return x * 10.0;
}

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];
var sy = [ 2, 2, 1 ];

// Define the index offsets:
var ox = 1;
var oy = 0;

// Create the input and output ndarray-like objects:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': shape,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Apply the unary function:
unary( [ x, y ], scale );

console.log( y.data );
// => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray and one output ndarray.
-   **fcn**: unary function to apply.

Each provided ndarray should be an `object` with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a unary function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var unary = require( '@stdlib/ndarray/base/unary' );

function scale( x ) {
    return x * 10;
}

var N = 10;
var x = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

unary( [ x, y ], scale );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Character codes for data types:

-   **d**: `float64` (double-precision floating-point number).
-   **f**: `float32` (single-precision floating-point number).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **s**: `int8` (signed 8-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).
-   **k**: `int16` (signed 16-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **l**: `int64` (signed 64-bit integer).
-   **v**: `uint64` (unsigned 64-bit integer).
-   **x**: `boolean`.

Function name suffix naming convention:

```text
stdlib_ndarray_<input_data_type>_<output_data_type>[_as_<callback_arg_data_type>_<callback_return_data_type>]
```

For example,

```c
void stdlib_ndarray_d_d(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray and one double-precision floating-point output ndarray. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments and/or return values are of a different data type than the input and/or output ndarray data types, the naming convention supports appending an `as` suffix. For example,

```c
void stdlib_ndarray_f_f_as_d_d(...) {...}
```

is a function which accepts one single-precision floating-point input ndarray and one single-precision floating-point output ndarray. However, the callback accepts and returns double-precision floating-point numbers. Accordingly, the input and output values need to be cast using the following conversion sequence

```c
// Convert each input array element to double-precision:
double dxi = (double)fx[ i ];

// Evaluate the callback:
double dyi = f( dxi );

// Convert the callback return value to single-precision:
fy[ i ] = (float)dyi;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/unary.h"
```

<!-- NOTE: keep the following in alphabetical order -->

* * *

FIXME: add docs for the loop interfaces

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
// FIXME: add example
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/dispatch`][@stdlib/ndarray/dispatch]</span><span class="delimiter">: </span><span class="description">create an ndarray function interface which performs multiple dispatch.</span>

</section>

<!-- /.related -->

<section class="links">

<!-- <related-links> -->

[@stdlib/ndarray/dispatch]: https://github.com/stdlib-js/ndarray/tree/main/dispatch

<!-- </related-links> -->

</section>

<!-- /.links -->
