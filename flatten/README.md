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

# flatten

> Return a flattened copy of an input [ndarray][@stdlib/ndarray/ctor].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var flatten = require( '@stdlib/ndarray/flatten' );
```

#### flatten( x\[, options] )

Returns a flattened copy of an input [ndarray][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flatten( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The function accepts the following options:

-   **order**: order in which input [ndarray][@stdlib/ndarray/ctor] elements should be flattened. Must be one of the following:

    -   `'row-major'`: flatten elements in lexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in lexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] row-by-row.
    -   `'column-major'`: flatten elements in colexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in colexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] column-by-column.
    -   `'any'`: flatten according to the physical layout of the input [ndarray][@stdlib/ndarray/ctor] data in memory, regardless of the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].
    -   `'same'`: flatten according to the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].

    Default: `'row-major'`.

-   **depth**: maximum number of input [ndarray][@stdlib/ndarray/ctor] dimensions to flatten.

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having the same [data type][@stdlib/ndarray/dtypes] as a provided input [ndarray][@stdlib/ndarray/ctor].

By default, the function flattens all dimensions of the input [ndarray][@stdlib/ndarray/ctor]. To flatten to a desired depth, specify the `depth` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flatten( x, {
    'depth': 1
});
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
```

By default, the input [ndarray][@stdlib/ndarray/ctor] is flattened in lexicographic order. To flatten elements in a different order, specify the `order` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flatten( x, {
    'order': 'column-major'
});
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ]
```

By default, the output ndarray [data type][@stdlib/ndarray/dtypes] is inferred from the input [ndarray][@stdlib/ndarray/ctor]. To return an ndarray with a different [data type][@stdlib/ndarray/dtypes], specify the `dtype` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flatten( x, {
    'dtype': 'float32'
});
// returns <ndarray>

var dt = dtype( y );
// returns 'float32'

var arr = ndarray2array( y );
// returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **always** returns a copy of input [ndarray][@stdlib/ndarray/ctor] data, even when an input [ndarray][@stdlib/ndarray/ctor] already has the desired number of dimensions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var flatten = require( '@stdlib/ndarray/flatten' );

var xbuf = discreteUniform( 12, -100, 100, {
    'dtype': 'generic'
});

var x = array( xbuf, {
    'shape': [ 2, 2, 3 ],
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var y = flatten( x );
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
