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

<!-- lint disable maximum-heading-length -->

# UnaryStrided1dDispatchBy

> Constructor for performing a reduction on an input ndarray according to a callback function.

<section class="usage">

## Usage

```javascript
var UnaryStrided1dDispatchBy = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by' );
```

#### UnaryStrided1dDispatchBy( table, idtypes, odtypes, policies )

Constructor for performing a reduction on an input ndarray according to a callback function.

```javascript
var base = require( '@stdlib/stats/base/ndarray/max-by' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = new UnaryStrided1dDispatchBy( table, [ dtypes ], dtypes, policies );
```

The constructor has the following parameters:

-   **table**: strided reduction function dispatch table. Must have the following properties:

    -   **default**: default strided reduction function which should be invoked when provided ndarrays have data types which do not have a corresponding specialized implementation.

    A dispatch table may have the following additional properties:

    -   **types**: one-dimensional list of ndarray data types describing specialized input ndarray argument signatures. Only the input ndarray argument data types should be specified. Output ndarray and additional input ndarray argument data types should be omitted and are not considered during dispatch. The length of `types` must equal the number of strided functions specified by `fcns` (i.e., for every input ndarray data type, there must be a corresponding strided reduction function in `fcns`).
    -   **fcns**: list of strided reduction functions which are specific to specialized input ndarray argument signatures.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **policies**: dispatch policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/output-dtype-policies].
    -   **casting**: input ndarray casting [policy][@stdlib/ndarray/input-casting-policies].

#### UnaryStrided1dDispatchBy.prototype.apply( x\[, ...args]\[, options], clbk\[, thisArg] )

Performs a reduction on a provided input ndarray according to a callback function.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/stats/base/ndarray/max-by' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = new UnaryStrided1dDispatchBy( table, [ dtypes ], dtypes, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

function clbk( v ) {
    return v * 2.0;
}

var y = unary.apply( x, clbk );
// returns <ndarray>

var v = y.get();
// returns 4.0
```

The method has the following parameters:

-   **x**: input ndarray.
-   **...args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).
-   **clbk**: callback function.
-   **thisArg**: callback function execution context (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.
-   **dtype**: output ndarray data type. Setting this option overrides the output data type policy.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions. Default: `false`.

By default, the method returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/stats/base/ndarray/max-by' );
var getDType = require( '@stdlib/ndarray/dtype' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policies = {
    'output': 'same',
    'casting': 'none'
};

var unary = new UnaryStrided1dDispatchBy( table, [ dtypes ], dtypes, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

function clbk( v ) {
    return v * 2.0;
}

var opts = {
    'dtype': 'float64'
};
var y = unary.apply( x, opts, clbk );
// returns <ndarray>

var dt = getDType( y );
// returns 'float64'
```

#### UnaryStrided1dDispatchBy.prototype.assign( x\[, ...args], out\[, options], clbk\[, thisArg] )

Performs a reduction on a provided input ndarray according to a callback function and assigns results to a provided output ndarray.

```javascript
var base = require( '@stdlib/stats/base/ndarray/max-by' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
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
var unary = new UnaryStrided1dDispatchBy( table, [ idt ], odt, policies );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0 ];
var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );

function clbk( v ) {
    return v * 2.0;
}

var out = unary.assign( x, y, clbk );
// returns <ndarray>

var v = out.get();
// returns 4.0

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **out**: output ndarray.
-   **options**: function options (_optional_).
-   **clbk**: callback function.
-   **thisArg**: callback function execution context (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A strided reduction function should have the following signature:

    ```text
    f( arrays, clbk, thisArg )
    ```

    where

    -   **arrays**: array containing an input ndarray, followed by any additional ndarray arguments.
    -   **clbk**: callback function.
    -   **thisArg**: callback function execution context.

-   The output data type policy only applies to the `apply` method. For the `assign` method, the output ndarray is allowed to have any supported output data type.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var base = require( '@stdlib/stats/base/ndarray/max-by' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var uniform = require( '@stdlib/random/base/uniform' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var UnaryStrided1dDispatchBy = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = idt;

// Define dispatch policies:
var policies = {
    'output': 'same',
    'casting': 'none'
};

// Define a dispatch table:
var table = {
    'default': base
};

// Create an interface for performing a reduction:
var maxBy = new UnaryStrided1dDispatchBy( table, [ idt ], odt, policies );

// Define a function for creating an object with a random value:
function random() {
    return {
        'value': uniform( -1.0, 1.0 )
    };
}

// Generate an array of random numbers:
var xbuf = filledarrayBy( 100, 'generic', random );

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );

// Define an accessor function:
function accessor( v ) {
    return v.value * 100.0;
}

// Perform a reduction:
var opts = {
    'dims': [ 0 ]
};
var y = maxBy.apply( x, opts, accessor );

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
