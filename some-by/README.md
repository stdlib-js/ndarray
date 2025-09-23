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

# someBy

> Test whether at least `n` elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions pass a test implemented by a predicate function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var someBy = require( '@stdlib/ndarray/some-by' );
```

#### someBy( x, n\[, options], predicate\[, thisArg] )

Tests whether at least `n` elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions pass a test implemented by a predicate function.

```javascript
var array = require( '@stdlib/ndarray/array' );

function predicate( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform reduction:
var out = someBy( x, 2, predicate );
// returns <ndarray>

console.log( out.get() );
// => true
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **n**: number of elements which must pass the test implemented by a predicate function. May be either a scalar or an [`ndarray`][@stdlib/ndarray/ctor]. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the non-reduced dimensions of input [`ndarray`][@stdlib/ndarray/ctor]. Must have an integer [data type][@stdlib/ndarray/dtypes].
-   **options**: function options (_optional_).
-   **predicate**: predicate function.
-   **thisArg**: predicate execution context (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [`ndarray`][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function predicate( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

var opts = {
    'dims': [ 0, 1 ]
};

// Perform reduction:
var out = someBy( x, 2, opts, predicate );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ true, true ]
```

By default, the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a shape matching only the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor] (i.e., the reduced dimensions are dropped). To include the reduced dimensions as singleton dimensions in the output [`ndarray`][@stdlib/ndarray/ctor], set the `keepdims` option to `true`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function predicate( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

var opts = {
    'dims': [ 0, 1 ],
    'keepdims': true
};

// Perform reduction:
var out = someBy( x, 2, opts, predicate );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ [ [ true, true ] ] ]
```

To set the predicate function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array = require( '@stdlib/ndarray/array' );

function predicate( value ) {
    this.count += 1;
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create a context object:
var ctx = {
    'count': 0
};

// Perform reduction:
var out = someBy( x, 2, predicate, ctx );
// returns <ndarray>

var v = out.get();
// returns true

var count = ctx.count;
// returns 2
```

#### someBy.assign( x, n, out\[, options], predicate\[, thisArg] )

Tests whether at least `n` elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions pass a test implemented by a predicate function and assigns results to a provided output [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );

function predicate( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [], {
    'dtype': 'bool'
});

// Perform reduction:
var out = someBy.assign( x, 2, y, predicate );
// returns <ndarray>

var bool = ( out === y );
// returns true

var v = y.get();
// returns true
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **n**: number of elements which must pass the test implemented by a predicate function. May be either a scalar or an [`ndarray`][@stdlib/ndarray/ctor]. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the non-reduced dimensions of input [`ndarray`][@stdlib/ndarray/ctor]. Must have an integer [data type][@stdlib/ndarray/dtypes].
-   **out**: output [`ndarray`][@stdlib/ndarray/ctor]. The output [`ndarray`][@stdlib/ndarray/ctor] must have a shape matching the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **predicate**: predicate function.
-   **thisArg**: predicate execution context (_optional_).

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function predicate( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [ 2 ], {
    'dtype': 'bool'
});

var opts = {
    'dims': [ 0, 1 ]
};

// Perform reduction:
var out = someBy.assign( x, 2, y, opts, predicate );

var bool = ( out === y );
// returns true

var v = ndarray2array( y );
// returns [ true, true ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The predicate function is provided the following arguments:

    -   **value**: current array element.
    -   **indices**: current array element indices.
    -   **arr**: the input ndarray.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var fillBy = require( '@stdlib/ndarray/fill-by' );
var zeros = require( '@stdlib/ndarray/zeros' );
var someBy = require( '@stdlib/ndarray/some-by' );

var x = zeros( [ 2, 4, 5 ], {
    'dtype': 'float64'
});
x = fillBy( x, discreteUniform( 0, 10 ) );
console.log( ndarray2array( x ) );

var n = scalar2ndarray( 4, {
    'dtype': 'int8'
});
var y = someBy( x, n, isEven );
console.log( y.get() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
