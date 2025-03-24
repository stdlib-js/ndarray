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

# map

> Apply a callback function to elements in an input [ndarray][@stdlib/ndarray/ctor] and assign results to elements in a new output [ndarray][@stdlib/ndarray/ctor].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var map = require( '@stdlib/ndarray/map' );
```

#### map( x\[, options], fcn\[, thisArg] )

Applies a callback function to elements in an input [ndarray][@stdlib/ndarray/ctor] and assigns results to elements in a new output [ndarray][@stdlib/ndarray/ctor].

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( z ) {
    return z * 10.0;
}

var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var shape = [ 2, 3 ];
var strides = [ 6, 1 ];
var offset = 1;

var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var y = map( x, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options _(optional)_.
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context _(optional)_.

The function accepts the following options:

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. If not specified, the output ndarray [data type][@stdlib/ndarray/dtypes] is inferred from the input [ndarray][@stdlib/ndarray/ctor].

By default, the output ndarray [data type][@stdlib/ndarray/dtypes] is inferred from the input [ndarray][@stdlib/ndarray/ctor]. To return an ndarray with a different [data type][@stdlib/ndarray/dtypes], specify the `dtype` option.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( z ) {
    return z * 10.0;
}

var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var shape = [ 2, 3 ];
var strides = [ 6, 1 ];
var offset = 1;

var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var opts = {
    'dtype': 'float32'
};
var y = map( x, opts, scale );
// returns <ndarray>

var dt = dtype( y );
// returns 'float32'

var arr = ndarray2array( y );
// returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
```

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this, max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( z ) {
    this.count += 1;
    return z * 10.0;
}

var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var shape = [ 2, 3 ];
var strides = [ 6, 1 ];
var offset = 1;

var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var ctx = {
    'count': 0
};
var y = map( x, scale, ctx );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]

var count = ctx.count;
// returns 6
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** perform explicit casting (e.g., from a real-valued floating-point number to a complex floating-point number). Any such casting should be performed by a provided callback function.

    <!-- eslint-disable max-len -->

    ```javascript
    var Float64Array = require( '@stdlib/array/float64' );
    var ndarray = require( '@stdlib/ndarray/ctor' );
    var Complex128 = require( '@stdlib/complex/float64/ctor' );
    var ndarray2array = require( '@stdlib/ndarray/to-array' );

    function toComplex( z ) {
        return new Complex128( z, 0.0 );
    }

    var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
    var shape = [ 2, 3 ];
    var strides = [ 6, 1 ];
    var offset = 1;

    var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
    // returns <ndarray>

    var opts = {
        'dtype': 'complex128'
    };
    var y = map( x, opts, toComplex );
    // returns <ndarray>
    ```

-   The function **always** returns an [ndarray][@stdlib/ndarray/ctor] having the same shape and [order][@stdlib/ndarray/orders] as the input [ndarray][@stdlib/ndarray/ctor].

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a callback function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var abs = require( '@stdlib/math/base/special/abs' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var map = require( '@stdlib/ndarray/map' );

var buffer = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var shape = [ 5, 2 ];
var strides = [ 2, 1 ];
var offset = 0;
var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
console.log( ndarray2array( x ) );

var y = map( x, naryFunction( abs, 1 ) );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/filter`][@stdlib/ndarray/filter]</span><span class="delimiter">: </span><span class="description">return a shallow copy of an ndarray containing only those elements which pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/ndarray/filter-map`][@stdlib/ndarray/filter-map]</span><span class="delimiter">: </span><span class="description">filter and map elements in an input ndarray to elements in a new output ndarray according to a callback function.</span>
-   <span class="package-name">[`@stdlib/ndarray/for-each`][@stdlib/ndarray/for-each]</span><span class="delimiter">: </span><span class="description">invoke a callback function once for each ndarray element.</span>
-   <span class="package-name">[`@stdlib/ndarray/slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray/tree/main/orders

<!-- <related-links> -->

[@stdlib/ndarray/filter]: https://github.com/stdlib-js/ndarray/tree/main/filter

[@stdlib/ndarray/filter-map]: https://github.com/stdlib-js/ndarray/tree/main/filter-map

[@stdlib/ndarray/for-each]: https://github.com/stdlib-js/ndarray/tree/main/for-each

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

<!-- </related-links> -->

</section>

<!-- /.links -->
