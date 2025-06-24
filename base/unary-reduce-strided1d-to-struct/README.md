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

# unaryReduceStrided1d

> Perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function and assign results to a provided output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unaryReduceStrided1d = require( '@stdlib/ndarray/base/unary-reduce-strided1d-to-struct' );
```

#### unaryReduceStrided1d( fcn, arrays, dims\[, options] )

Performs a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function and assigns results to a provided output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var structFactory = require( '@stdlib/array/struct-factory' );
var ztest = require( '@stdlib/stats/base/ndarray/ztest' );

var ResultsArray = structFactory( Float64Results );

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = new ResultsArray( 3 );

// Define the array shapes:
var xsh = [ 1, 3, 2, 2 ];
var ysh = [ 1, 3 ];

// Define the array strides:
var sx = [ 12, 4, 2, 1 ];
var sy = [ 3, 1 ];

// Define the index offsets:
var ox = 0;
var oy = 0;

// Create an input ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': xsh,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Create an output ndarray-like object:
var y = {
    'dtype': Float64Results,
    'data': ybuf,
    'shape': ysh,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Create additional parameter ndarray-like objects:
var alternative = {
    'dtype': 'generic',
    'data': [ 'two-sided' ],
    'shape': ysh,
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var alpha = {
    'dtype': 'float64',
    'data': [ 0.05 ],
    'shape': ysh,
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var mu = {
    'dtype': 'float64',
    'data': [ 0.0 ],
    'shape': ysh,
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var sigma = {
    'dtype': 'float64',
    'data': [ 1.0 ],
    'shape': ysh,
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};

// Perform a reduction:
unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [ 2, 3 ] );

var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
// returns [ [ <Float64Results>, <Float64Results>, <Float64Results> ] ]
```

The function accepts the following arguments:

-   **fcn**: function which will be applied to a one-dimensional subarray and should store reduction results in an output [`struct`][@stdlib/dstructs/struct] object.
-   **arrays**: array-like object containing one input ndarray and one output ndarray, followed by any additional ndarray arguments.
-   **dims**: list of dimensions over which to perform a reduction.
-   **options**: function options which are passed through to `fcn` (_optional_).

Each provided ndarray should be an object with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

#### TODO: document factory method

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output ndarray and any additional ndarray arguments are expected to have the same dimensions as the non-reduced dimensions of the input ndarray. When calling the reduction function, any additional ndarray arguments are provided as zero-dimensional ndarray-like objects.

-   The reduction function is expected to have the following signature:

    ```text
    fcn( arrays[, options] )
    ```

    where

    -   **arrays**: array containing a one-dimensional subarray of the input ndarray, a zero-dimensional subarray of the output ndarray containing the output [`struct`][@stdlib/dstructs/struct] object, and any additional ndarray arguments as zero-dimensional ndarrays.
    -   **options**: function options (_optional_).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before performing a reduction in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var normal = require( '@stdlib/random/array/normal' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var structFactory = require( '@stdlib/array/struct-factory' );
var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
var unaryReduceStrided1d = require( '@stdlib/ndarray/base/unary-reduce-strided1d-to-struct' );

var ResultsArray = structFactory( Float64Results );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': normal( N, 0.0, 1.0, {
        'dtype': 'generic'
    }),
    'shape': [ 1, 5, 2 ],
    'strides': [ 10, 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': Float64Results,
    'data': new ResultsArray( 2 ),
    'shape': [ 1, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var alternative = {
    'dtype': 'generic',
    'data': [ 'two-sided' ],
    'shape': [ 1, 2 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var alpha = {
    'dtype': 'generic',
    'data': [ 0.05 ],
    'shape': [ 1, 2 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var mu = {
    'dtype': 'generic',
    'data': [ 0.0 ],
    'shape': [ 1, 2 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var sigma = {
    'dtype': 'generic',
    'data': [ 1.0 ],
    'shape': [ 1, 2 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};

unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [ 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

</section>

<!-- /.links -->
