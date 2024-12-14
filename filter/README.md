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

# filter

> Return a shallow copy of an [ndarray][@stdlib/ndarray/ctor] containing only those elements which pass a test implemented by a predicate function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var filter = require( '@stdlib/ndarray/filter' );
```

#### filter( x\[, options], predicate\[, thisArg] )

Returns a shallow copy of an [ndarray][@stdlib/ndarray/ctor] containing only those elements which pass a test implemented by a `predicate` function.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function predicate( z ) {
    return z > 6.0;
}

var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var shape = [ 2, 3 ];
var strides = [ 6, 1 ];
var offset = 1;

var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var y = filter( x, predicate );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 8.0, 9.0, 10.0 ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options.
-   **predicate**: predicate function.
-   **thisArg**: predicate function execution context.

The function accepts the following options:

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. If not specified, the output ndarray [data type][@stdlib/ndarray/dtypes] is inferred from the input [ndarray][@stdlib/ndarray/ctor].
-   **order**: index iteration order. By default, the function iterates over elements according to the [layout order][@stdlib/ndarray/orders] of the provided [ndarray][@stdlib/ndarray/ctor]. Accordingly, for row-major input [ndarrays][@stdlib/ndarray/ctor], the last dimension indices increment fastest. For column-major input [ndarrays][@stdlib/ndarray/ctor], the first dimension indices increment fastest. To override the inferred order and ensure that indices increment in a specific manor, regardless of the input [ndarray][@stdlib/ndarray/ctor]'s layout order, explicitly set the iteration order. Note, however, that iterating according to an order which does not match that of the input [ndarray][@stdlib/ndarray/ctor] may, in some circumstances, result in performance degradation due to cache misses. Must be either `'row-major'` or `'column-major'`.

By default, the output ndarray [data type][@stdlib/ndarray/dtypes] is inferred from the input [ndarray][@stdlib/ndarray/ctor]. To return an ndarray with a different [data type][@stdlib/ndarray/dtypes], specify the `dtype` option.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function predicate( z ) {
    return z > 6.0;
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
var y = filter( x, opts, predicate );
// returns <ndarray>

var dt = dtype( y );
// returns 'float32'

var arr = ndarray2array( y );
// returns [ 8.0, 9.0, 10.0 ]
```

The `predicate` function is provided the following arguments:

-   **value**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** perform explicit casting (e.g., from a real-valued floating-point number to a complex floating-point number). Any such casting should be performed **prior to** calling this function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var array = require( '@stdlib/ndarray/array' );
var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var filter = require( '@stdlib/ndarray/filter' );

var buffer = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = array( buffer, {
    'shape': [ 5, 2 ],
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var y = filter( x, naryFunction( isPositive, 1 ) );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray/tree/main/orders

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
