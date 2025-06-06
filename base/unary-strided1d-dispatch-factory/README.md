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

# unaryStrided1dDispatchFactory

> Create a function for applying a strided function an input ndarray.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var unaryStrided1dDispatchFactory = require( '@stdlib/ndarray/base/unary-strided1d-dispatch-factory' );
```

#### unaryStrided1dDispatchFactory( table, idtypes, odtypes, policies\[, options] )

Returns a function for applying a strided function an input ndarray.

<!-- eslint-disable id-length -->

```javascript
var base = require( '@stdlib/stats/base/ndarray/cumax' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policies );
```

The function has the following parameters:

-   **table**: strided function dispatch table. Must have the following properties:

    -   **default**: default strided function which should be invoked when provided ndarrays have data types which do not have a corresponding specialized implementation.

    A dispatch table may have the following additional properties:

    -   **types**: one-dimensional list of ndarray data types describing specialized input and output ndarray argument signatures. Only the input and output ndarray argument data types should be specified. Additional ndarray argument data types should be omitted and are not considered during dispatch. The length of `types` must equal the number of strided functions specified by `fcns` multiplied by two (i.e., for every pair of input-output ndarray data types, there must be a corresponding strided function in `fcns`).
    -   **fcns**: list of strided functions which are specific to specialized input and output ndarray argument signatures.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **policies**: dispatch policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/output-dtype-policies].
    -   **casting**: input ndarray casting [policy][@stdlib/ndarray/input-casting-policies].

-   **options**: function options (_optional_).

The function supports the following options:

-   **strictTraversalOrder**: boolean specifying whether the order of element traversal must match the memory layout order of an input ndarray. Default: `false`.

#### unary( x\[, ...args]\[, options] )

Applies a strided function to a provided input ndarray.

<!-- eslint-disable id-length -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/stats/base/ndarray/cumax' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -1.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **x**: input ndarray.
-   **...args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform operation.
-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.

By default, the function returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

<!-- eslint-disable id-length -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/stats/base/ndarray/cumax' );
var getDType = require( '@stdlib/ndarray/dtype' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary( x, {
    'dtype': 'float64'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'float64'
```

#### unary.assign( x\[, ...args], out\[, options] )

Applies a strided function to a provided input ndarray and assigns results to a provided output ndarray.

<!-- eslint-disable id-length -->

```javascript
var base = require( '@stdlib/stats/base/ndarray/cumax' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var idt = dtypes( 'real_and_generic' );
var odt = idt;
var policies = {
    'output': 'same',
    'casting': 'none'
};

var table = {
    'default': base
};
var unary = unaryStrided1dDispatchFactory( table, [ idt ], odt, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0, 0.0, 0.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var out = unary.assign( x, y );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ -1.0, 2.0, 2.0 ]

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **out**: output ndarray.
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform operation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A strided function should have the following signature:

    ```text
    f( arrays )
    ```

    where

    -   **arrays**: array containing an input and an output ndarray, followed by any additional ndarray arguments.

-   The output data type policy only applies to the function returned by the main function. For the `assign` method, the output ndarray is allowed to have any supported output data type.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length, max-len, array-element-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var dcumax = require( '@stdlib/stats/base/ndarray/dcumax' );
var scumax = require( '@stdlib/stats/base/ndarray/scumax' );
var base = require( '@stdlib/stats/base/ndarray/cumax' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var unaryStrided1dDispatchFactory = require( '@stdlib/ndarray/base/unary-strided1d-dispatch-factory' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define dispatch policies:
var policies = {
    'output': 'same',
    'casting': 'none'
};

// Define a dispatch table:
var table = {
    'types': [
        'float64', 'float64', // input, output
        'float32', 'float32'  // input, output
    ],
    'fcns': [
        dcumax,
        scumax
    ],
    'default': base
};

// Create an interface for performing an operation:
var cumax = unaryStrided1dDispatchFactory( table, [ idt ], odt, policies );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cumax( x, {
    'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
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
