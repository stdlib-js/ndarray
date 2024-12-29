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

# forEach

> Invoke a callback function once for each [ndarray][@stdlib/ndarray/ctor] element.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var forEach = require( '@stdlib/ndarray/for-each' );
```

#### forEach( x, fcn\[, thisArg] )

Invokes a callback function once for each [ndarray][@stdlib/ndarray/ctor] element.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );

var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var shape = [ 2, 3 ];
var strides = [ 6, 1 ];
var offset = 1;

var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

forEach( x, naryFunction( log, 1 ) );
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context _(optional)_.

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this, max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

function accumulate( z ) {
    this.sum += z;
}

var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var shape = [ 2, 3 ];
var strides = [ 6, 1 ];
var offset = 1;
var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

var ctx = {
    'sum': 0
};

forEach( x, accumulate, ctx );
var sum = ctx.sum;
// returns 36
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a callback function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );
var forEach = require( '@stdlib/ndarray/for-each' );

var buffer = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var shape = [ 5, 2 ];
var strides = [ 2, 1 ];
var offset = 0;
var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );

log( ndarray2array( x ) );
forEach( x, naryFunction( log, 2 ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
