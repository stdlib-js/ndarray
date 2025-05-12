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

# fillBy

> Fill an input [ndarray][@stdlib/ndarray/ctor] according to a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fillBy = require( '@stdlib/ndarray/fill-by' );
```

#### fillBy( x, fcn\[, thisArg] )

Fills an input [ndarray][@stdlib/ndarray/ctor] according to a callback function.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function fcn( value ) {
    return value + 10.0;
}

var x = zeros( [ 3, 1, 2 ], {
    'dtype': 'float64'
});

var y = fillBy( x, fcn );
// returns <ndarray>

var bool = ( y === x );
// returns true

var arr = ndarray2array( y );
// returns [ [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ] ]
```

The function accepts the following arguments:

-   **x**: array-like object containing an input [ndarray][@stdlib/ndarray/ctor].
-   **fcn**: callback function.
-   **thisArg**: callback function execution context (_optional_).

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function fcn( value ) {
    return value + this.factor;
}

var x = zeros( [ 3, 1, 2 ], {
    'dtype': 'float64'
});

var ctx = {
    'factor': 10.0
};
var y = fillBy( x, fcn, ctx );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ] ]
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An input [ndarray][@stdlib/ndarray/ctor] **must** be writable. If provided a **read-only** [ndarray][@stdlib/ndarray/ctor], the function throws an error.
-   The function **mutates** the input [ndarray][@stdlib/ndarray/ctor].
-   The function assumes that each element in the underlying input [ndarray][@stdlib/ndarray/ctor] data buffer has one, and only one, corresponding element in input [ndarray][@stdlib/ndarray/ctor] view (i.e., a provided [ndarray][@stdlib/ndarray/ctor] is not a broadcasted [ndarray][@stdlib/ndarray/ctor] view).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var fillBy = require( '@stdlib/ndarray/fill-by' );

// Create a zero-filled ndarray:
var x = zeros( [ 5, 2 ], {
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Fill the ndarray with random values:
fillBy( x, discreteUniform( -100, 100 ) );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/fill`][@stdlib/ndarray/fill]</span><span class="delimiter">: </span><span class="description">fill an input ndarray with a specified value.</span>
-   <span class="package-name">[`@stdlib/ndarray/map`][@stdlib/ndarray/map]</span><span class="delimiter">: </span><span class="description">apply a callback to elements in an input ndarray and assign results to elements in a new output ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray/zeros`][@stdlib/ndarray/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- <related-links> -->

[@stdlib/ndarray/fill]: https://github.com/stdlib-js/ndarray/tree/main/fill

[@stdlib/ndarray/map]: https://github.com/stdlib-js/ndarray/tree/main/map

[@stdlib/ndarray/zeros]: https://github.com/stdlib-js/ndarray/tree/main/zeros

<!-- </related-links> -->

</section>

<!-- /.links -->
