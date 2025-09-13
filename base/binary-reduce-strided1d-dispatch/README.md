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

<!-- lint disable max-heading-length -->

# BinaryStrided1dDispatch

> Constructor for performing a reduction on two input ndarrays.

<section class="usage">

## Usage

```javascript
var BinaryStrided1dDispatch = require( '@stdlib/ndarray/base/binary-reduce-strided1d-dispatch' );
```

#### BinaryStrided1dDispatch( table, idtypes, odtypes, policies )

Constructor for performing a reduction on two input ndarrays.

```javascript
var base = require( '@stdlib/blas/base/ndarray/gdot' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'promoted',
    'casting': 'promoted'
};

var binary = new BinaryStrided1dDispatch( table, [ dtypes, dtypes ], dtypes, policies );
```

The constructor has the following parameters:

-   **table**: strided reduction function dispatch table. Must have the following properties:

    -   **default**: default strided reduction function which should be invoked when provided ndarrays have data types which do not have a corresponding specialized implementation.

    A dispatch table may have the following additional properties:

    -   **types**: one-dimensional list of ndarray data types describing specialized input ndarray argument signatures. Only the input ndarray argument data types should be specified. Output ndarray and additional input ndarray argument data types should be omitted and are not considered during dispatch. The length of `types` must be twice the number of strided functions specified by `fcns` (i.e., for every pair of input ndarray data types, there must be a corresponding strided reduction function in `fcns`).
    -   **fcns**: list of strided reduction functions which are specific to specialized input ndarray argument signatures.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **policies**: dispatch policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/output-dtype-policies].
    -   **casting**: input ndarray casting [policy][@stdlib/ndarray/input-casting-policies].

#### BinaryStrided1dDispatch.prototype.apply( x, y\[, ...args]\[, options] )

Performs a reduction on two provided input ndarrays.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/blas/base/ndarray/gdot' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'promoted',
    'casting': 'promoted'
};

var binary = new BinaryStrided1dDispatch( table, [ dtypes, dtypes ], dtypes, policies );

var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var z = binary.apply( x, y );
// returns <ndarray>

var v = z.get();
// returns -5.0
```

The method has the following parameters:

-   **x**: first input ndarray.
-   **y**: second input ndarray.
-   **...args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.
-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions. Default: `false`.

By default, the method returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/blas/base/ndarray/gdot' );
var getDType = require( '@stdlib/ndarray/dtype' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'promoted',
    'casting': 'promoted'
};

var binary = new BinaryStrided1dDispatch( table, [ dtypes, dtypes ], dtypes, policies );

var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var z = binary.apply( x, y, {
    'dtype': 'float64'
});
// returns <ndarray>

var dt = getDType( z );
// returns 'float64'
```

#### BinaryStrided1dDispatch.prototype.assign( x, y\[, ...args], out\[, options] )

Performs a reduction on two provided input ndarrays and assigns results to a provided output ndarray.

```javascript
var base = require( '@stdlib/blas/base/ndarray/gdot' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var idt = dtypes( 'real_and_generic' );
var odt = idt;
var policies = {
    'output': 'promoted',
    'casting': 'promoted'
};

var table = {
    'default': base
};
var binary = new BinaryStrided1dDispatch( table, [ idt, idt ], odt, policies );

var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var zbuf = [ 0.0 ];
var z = new ndarray( 'generic', zbuf, [], [ 0 ], 0, 'row-major' );

var out = binary.assign( x, y, z );
// returns <ndarray>

var v = out.get();
// returns -5.0

var bool = ( out === z );
// returns true
```

The method has the following parameters:

-   **x**: first input ndarray.
-   **x**: second input ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **out**: output ndarray.
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A strided reduction function should have the following signature:

    ```text
    f( arrays )
    ```

    where

    -   **arrays**: array containing two input ndarrays, followed by any additional ndarray arguments.

-   The output data type policy only applies to the `apply` method. For the `assign` method, the output ndarray is allowed to have any supported output data type.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ddot = require( '@stdlib/blas/base/ndarray/ddot' );
var sdot = require( '@stdlib/blas/base/ndarray/sdot' );
var base = require( '@stdlib/blas/base/ndarray/gdot' );
var uniform = require( '@stdlib/random/array/uniform' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var BinaryStrided1dDispatch = require( '@stdlib/ndarray/base/binary-reduce-strided1d-dispatch' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define dispatch policies:
var policies = {
    'output': 'promoted',
    'casting': 'promoted'
};

// Define a dispatch table:
var table = {
    'types': [
        'float64', 'float64', // input data types
        'float32', 'float32'  // input data types
    ],
    'fcns': [
        ddot,
        sdot
    ],
    'default': base
};

// Create an interface for performing a reduction:
var dot = new BinaryStrided1dDispatch( table, [ idt, idt ], odt, policies );

// Generate arrays of random numbers:
var xbuf = uniform( 100, -1.0, 1.0, {
    'dtype': 'generic'
});
var ybuf = uniform( 100, -1.0, 1.0, {
    'dtype': 'generic'
});

// Wrap in ndarrays:
var x = new ndarray( 'generic', xbuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );
var y = new ndarray( 'generic', ybuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );

// Perform a reduction:
var z = dot.apply( x, y, {
    'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( z );
console.log( dt );

// Print the results:
console.log( ndarray2array( z ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray/tree/main/output-dtype-policies

[@stdlib/ndarray/input-casting-policies]: https://github.com/stdlib-js/ndarray/tree/main/input-casting-policies

</section>

<!-- /.links -->
