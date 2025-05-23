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

# fill

> Fill an input ndarray with a specified value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fill = require( '@stdlib/ndarray/base/fill' );
```

#### fill( x, value )

Fills an input ndarray with a specified value.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define the shape of the input array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 2, 2, 1 ];

// Define the index offset:
var ox = 0;

// Create the input ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

fill( x, 10.0 );

console.log( x.data );
// => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
```

The function accepts the following arguments:

-   **x**: array-like object containing an input ndarray.
-   **value**: scalar value.

A provided ndarray should be an object with the following properties:

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

-   If `value` is a number and `x` has a complex [data type][@stdlib/ndarray/dtypes], the function fills an input ndarray with a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.
-   A `value` must be able to safely cast to the input ndarray [data type][@stdlib/ndarray/dtypes]. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input ndarray).
-   The function **mutates** the input ndarray.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var fill = require( '@stdlib/ndarray/base/fill' );

var x = {
    'dtype': 'generic',
    'data': filledarrayBy( 10, 'generic', discreteUniform( -100, 100 ) ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};

fill( x, 10.0 );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
