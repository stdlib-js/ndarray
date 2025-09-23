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

# anyBy

> Test whether at least one element along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions passes a test implemented by a predicate function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var anyBy = require( '@stdlib/ndarray/any-by' );
```

#### anyBy( x\[, options], predicate\[, thisArg] )

Tests whether at least one element along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions passes a test implemented by a predicate function.

```javascript
var array = require( '@stdlib/ndarray/array' );

function isPositive( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ 1.0, -2.0 ], [ 3.0, -4.0 ] ] );

// Test whether at least one element is positive:
var out = anyBy( x, isPositive );
// returns <ndarray>

var v = out.get();
// returns true
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options _(optional)_.
-   **predicate**: predicate function.
-   **thisArg**: predicate function execution context _(optional)_.

The function accepts the following options:

-   **dims**: list of dimensions over which to perform a reduction.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [`ndarray`][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

function isPositive( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ 1.0, 2.0 ], [ -3.0, -4.0 ] ] );

var opts = {
    'dims': [ 1 ]
};

// Perform reduction:
var out = anyBy( x, opts, isPositive );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ true, false ]
```

By default, the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a shape matching only the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor] (i.e., the reduced dimensions are dropped). To include the reduced dimensions as singleton dimensions in the output [`ndarray`][@stdlib/ndarray/ctor], set the `keepdims` option to `true`.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

function isPositive( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ 1.0, 2.0 ], [ -3.0, -4.0 ] ] );

var opts = {
    'keepdims': true
};

// Perform reduction:
var out = anyBy( x, opts, isPositive );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ [ [ true ] ] ]
```

To set the function execution context, provide a `thisArg`.

```javascript
var array = require( '@stdlib/ndarray/array' );

function isPositive( value ) {
    this.count += 1;
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ -1.0, -2.0 ], [ -3.0, 4.0 ] ] );
// returns <ndarray>

// Create a context object:
var ctx = {
    'count': 0
};

// Perform reduction:
var out = anyBy( x, isPositive, ctx );
// returns <ndarray>

var v = out.get();
// returns true

var count = ctx.count;
// returns 4
```

#### anyBy.assign( x, y\[, options], predicate\[, thisArg] )

Tests whether at least one element along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions passes a test implemented by a predicate function and assigns the result to a provided output [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );

function isPositive( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ 1.0, -2.0 ], [ 3.0, -4.0 ] ] );

// Create an output ndarray:
var y = empty( [], {
    'dtype': 'bool'
});

// Perform reduction:
var out = anyBy.assign( x, y, isPositive );
// returns <ndarray>

var v = out.get();
// returns true

var bool = ( out === y );
// returns true
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **y**: output [`ndarray`][@stdlib/ndarray/ctor]. The output [`ndarray`][@stdlib/ndarray/ctor] must have a shape matching the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options _(optional)_.
-   **predicate**: predicate function.
-   **thisArg**: predicate function execution context _(optional)_.

The function accepts the following options:

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
var x = array( [ [ 1.0, 2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [ 2 ], {
    'dtype': 'bool'
});

var opts = {
    'dims': [ 1 ]
};

// Perform reduction:
var out = anyBy.assign( x, y, opts, predicate );

var bool = ( out === y );
// returns true

var v = ndarray2array( y );
// returns [ true, false ]
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
var fillBy = require( '@stdlib/ndarray/fill-by' );
var zeros = require( '@stdlib/ndarray/zeros' );
var anyBy = require( '@stdlib/ndarray/any-by' );

var x = zeros( [ 2, 4, 5 ], {
    'dtype': 'float64'
});
x = fillBy( x, discreteUniform( 0, 10 ) );
console.log( ndarray2array( x ) );

var y = anyBy( x, isEven );
console.log( y.get() );
```

</section>

<!-- /.examples -->

<!-- Section for related links. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

</section>

<!-- /.links -->
