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

# flattenBy

> Flatten an [ndarray][@stdlib/ndarray/ctor] according to a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var flattenBy = require( '@stdlib/ndarray/flatten-by' );
```

#### flattenBy( x\[, options], fcn\[, thisArg] )

Flattens an [ndarray][@stdlib/ndarray/ctor] according to a callback function.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( value ) {
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flattenBy( x, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **fcn**: callback function.
-   **thisArg**: callback execution context (_optional_).

The function accepts the following options:

-   **order**: order in which input [ndarray][@stdlib/ndarray/ctor] elements should be flattened. Must be one of the following:

    -   `'row-major'`: flatten elements in lexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in lexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] row-by-row.
    -   `'column-major'`: flatten elements in colexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in colexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] column-by-column.
    -   `'any'`: flatten according to the physical layout of the input [ndarray][@stdlib/ndarray/ctor] data in memory, regardless of the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].
    -   `'same'`: flatten according to the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].

    Default: `'row-major'`.

-   **depth**: maximum number of input [ndarray][@stdlib/ndarray/ctor] dimensions to flatten.

By default, the function flattens all dimensions of the input [ndarray][@stdlib/ndarray/ctor]. To flatten to a desired depth, specify the `depth` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( value ) {
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var opts = {
    'depth': 1
};

var y = flattenBy( x, opts, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 2.0, 4.0 ], [ 6.0, 8.0 ], [ 10.0, 12.0 ] ]
```

By default, the input [ndarray][@stdlib/ndarray/ctor] is flattened in lexicographic order. To flatten elements in a different order, specify the `order` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( value ) {
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var opts = {
    'order': 'column-major'
};

var y = flattenBy( x, opts, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, 6.0, 10.0, 4.0, 8.0, 12.0 ]
```

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this, max-len -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function scale( value ) {
    this.count += 1;
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var ctx = {
    'count': 0
};

var y = flattenBy( x, scale, ctx );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]

var count = ctx.count;
// returns 6
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **always** returns a copy of input [ndarray][@stdlib/ndarray/ctor] data, even when an input [ndarray][@stdlib/ndarray/ctor] already has the desired number of dimensions.

-   The callback function is provided the following arguments:

    -   **value**: current array element.
    -   **indices**: current array element indices.
    -   **arr**: the input [ndarray][@stdlib/ndarray/ctor].

-   The order in which array elements are traversed and passed to a provided callback function is **not** guaranteed to match the order of array elements in an [ndarray][@stdlib/ndarray/ctor] view. Accordingly, a provided callback should avoid making assumptions regarding the order of provided elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var flattenBy = require( '@stdlib/ndarray/flatten-by' );

function scale( value ) {
    return value * 2.0;
}

var xbuf = discreteUniform( 12, -100, 100, {
    'dtype': 'generic'
});

var x = array( xbuf, {
    'shape': [ 2, 2, 3 ],
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var y = flattenBy( x, scale );
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

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray/tree/main/orders

</section>

<!-- /.links -->
