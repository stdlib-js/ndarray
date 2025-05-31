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

# countIf

> Count the number of truthy elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var countIf = require( '@stdlib/ndarray/count-if' );
```

#### countIf( x\[, options], predicate\[, thisArg] )

Counts the number of truthy elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions.

```javascript
var array = require( '@stdlib/ndarray/array' );

function clbk( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform operation:
var out = countIf( x, clbk );
// returns <ndarray>

var v = out.get();
// returns 5
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **predicate**: predicate function.
-   **thisArg**: predicate function execution context (_optional_).

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [`ndarray`][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function clbk( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform operation:
var opts = {
    'dims': [ 1, 2 ]
};
var out = countIf( x, opts, clbk );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ 2, 2, 1 ]
```

By default, the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a shape matching only the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor] (i.e., the reduced dimensions are dropped). To include the reduced dimensions as singleton dimensions in the output [`ndarray`][@stdlib/ndarray/ctor], set the `keepdims` option to `true`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function clbk( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform operation:
var opts = {
    'dims': [ 1, 2 ],
    'keepdims': true
};
var out = countIf( x, opts, clbk );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ [ [ 2 ] ], [ [ 2 ] ], [ [ 1 ] ] ]
```

To set the predicate function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function clbk( value ) {
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

// Perform operation:
var out = countIf( x, clbk, ctx );
// returns <ndarray>

var v = out.get();
// returns 5

var count = ctx.count;
// returns 6
```

#### countIf.assign( x, out\[, options], predicate\[, thisArg] )

Counts the number of truthy elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions and assigns results to a provided output [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );

function clbk( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [], {
    'dtype': 'int32'
});

// Perform operation:
var out = countIf.assign( x, y, clbk );
// returns <ndarray>

var bool = ( out === y );
// returns true

var v = y.get();
// returns 5
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **out**: output [`ndarray`][@stdlib/ndarray/ctor]. The output [`ndarray`][@stdlib/ndarray/ctor] must have a shape matching the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **predicate**: predicate function.
-   **thisArg**: predicate function execution context (_optional_).

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function clbk( value ) {
    return value > 0.0;
}

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [ 3 ], {
    'dtype': 'int32'
});

// Perform operation:
var opts = {
    'dims': [ 1, 2 ]
};
var out = countIf.assign( x, y, opts, clbk );

var bool = ( out === y );
// returns true

var v = ndarray2array( y );
// returns [ 2, 2, 1 ]
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
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var fillBy = require( '@stdlib/ndarray/fill-by' );
var zeros = require( '@stdlib/ndarray/zeros' );
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var countIf = require( '@stdlib/ndarray/count-if' );

var x = zeros( [ 2, 4, 5 ], {
    'dtype': 'float64'
});
x = fillBy( x, bernoulli( 0.90 ) );
console.log( ndarray2array( x ) );

var y = countIf( x, isPositiveNumber );
console.log( 'countIf(x[:,:,:]) =' );
console.log( y.get() );

var opts = {
    'dims': [ 0 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,j,k]) =' );
console.log( ndarray2array( y ) );

opts = {
    'dims': [ 1 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[i,:,k]) =' );
console.log( ndarray2array( y ) );

opts = {
    'dims': [ 2 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[i,j,:]) =' );
console.log( ndarray2array( y ) );

opts = {
    'dims': [ 0, 1 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,:,k]) =' );
console.log( ndarray2array( y ) );

opts = {
    'dims': [ 0, 2 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,j,:]) =' );
console.log( ndarray2array( y ) );

opts = {
    'dims': [ 1, 2 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[i,:,:]) =' );
console.log( ndarray2array( y ) );

opts = {
    'dims': [ 0, 1, 2 ],
    'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,:,:]) =' );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
