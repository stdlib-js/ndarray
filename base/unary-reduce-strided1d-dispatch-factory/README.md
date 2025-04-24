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

> Create a function for performing a reduction on an input ndarray.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var unaryStrided1dDispatchFactory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory' );
```

#### unaryStrided1dDispatchFactory( table, idtypes, odtypes, policy )

Returns a function for performing a reduction on an input ndarray.

<!-- eslint-disable id-length -->

```javascript
var base = require( '@stdlib/stats/base/ndarray/max' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policy );
```

-   **table**: strided reduction function dispatch table. Must have a `'default'` property and a corresponding strided reduction function. May have additional properties corresponding to specific data types and associated specialized strided reduction functions.
-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.
-   **odtypes**: list of supported input data types.
-   **policy**: output data type policy.

#### unary( x\[, ...args]\[, options] )

Performs a reduction on a provided input ndarray.

<!-- eslint-disable id-length -->

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/stats/base/ndarray/max' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policy );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = unary( x );
// returns <ndarray>

var v = y.get();
// returns 2.0
```

The function has the following parameters:

-   **x**: input ndarray.
-   **...args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.
-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions. Default: `false`.

By default, the function returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

<!-- eslint-disable id-length -->

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var base = require( '@stdlib/stats/base/ndarray/max' );
var getDType = require( '@stdlib/ndarray/dtype' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = unaryStrided1dDispatchFactory( table, [ dtypes ], dtypes, policy );

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

Performs a reduction on a provided input ndarray and assigns results to a provided output ndarray.

<!-- eslint-disable id-length -->

```javascript
var base = require( '@stdlib/stats/base/ndarray/max' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var idt = dtypes( 'real_and_generic' );
var odt = idt;
var policy = 'same';

var table = {
    'default': base
};
var unary = unaryStrided1dDispatchFactory( table, [ idt ], odt, policy );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0 ];
var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );

var out = unary.assign( x, y );
// returns <ndarray>

var v = out.get();
// returns 2.0

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **out**: output ndarray.
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output data type policy only applies to the function returned by `factory`. For the `assign` method, the output ndarray is allowed to have any data type.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length, max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var base = require( '@stdlib/stats/base/ndarray/max' );
var uniform = require( '@stdlib/random/array/uniform' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var unaryStrided1dDispatchFactory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define the policy mapping an input data type to an output data type:
var policy = 'same';

// Define a dispatch table:
var table = {
    'default': base
};

// Create an interface for performing a reduction:
var max = unaryStrided1dDispatchFactory( table, [ idt ], odt, policy );

// Generate an array of random numbers:
var xbuf = uniform( 100, -1.0, 1.0, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );

// Perform a reduction:
var y = max( x, {
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

</section>

<!-- /.links -->
