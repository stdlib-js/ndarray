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

# countTruthy

> Count the number of truthy elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var countTruthy = require( '@stdlib/ndarray/count-truthy' );
```

#### countTruthy( x\[, options] )

Counts the number of truthy elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions.

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform reduction:
var out = countTruthy( x );
// returns <ndarray>

var v = out.get();
// returns 5
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [`ndarray`][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform reduction:
var out = countTruthy( x, {
    'dims': [ 1, 2 ]
});
// returns <ndarray>

var v = ndarray2array( out );
// returns [ 2, 2, 1 ]
```

By default, the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a shape matching only the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor] (i.e., the reduced dimensions are dropped). To include the reduced dimensions as singleton dimensions in the output [`ndarray`][@stdlib/ndarray/ctor], set the `keepdims` option to `true`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Perform reduction:
var out = countTruthy( x, {
    'dims': [ 1, 2 ],
    'keepdims': true
});
// returns <ndarray>

var v = ndarray2array( out );
// returns [ [ [ 2 ] ], [ [ 2 ] ], [ [ 1 ] ] ]
```

#### countTruthy.assign( x, out\[, options] )

Counts the number of truthy elements along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions and assigns results to a provided output [`ndarray`][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [], {
    'dtype': 'int32'
});

// Perform reduction:
var out = countTruthy.assign( x, y );
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

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

```javascript
var array = require( '@stdlib/ndarray/array' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create an input ndarray:
var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 0.0, 6.0 ] ] ] );
// returns <ndarray>

// Create an output ndarray:
var y = empty( [ 3 ], {
    'dtype': 'int32'
});

// Perform reduction:
var out = countTruthy.assign( x, y, {
    'dims': [ 1, 2 ]
});

var bool = ( out === y );
// returns true

var v = ndarray2array( y );
// returns [ 2, 2, 1 ]
```

</section>

<!-- /.usage -->

<section class="notes">

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
var countTruthy = require( '@stdlib/ndarray/count-truthy' );

var x = zeros( [ 2, 4, 5 ], {
    'dtype': 'float64'
});
x = fillBy( x, bernoulli( 0.90 ) );
console.log( ndarray2array( x ) );

var y = countTruthy( x );
console.log( 'countTruthy(x[:,:,:]) =' );
console.log( y.get() );

y = countTruthy( x, {
    'dims': [ 0 ],
    'keepdims': true
});
console.log( 'countTruthy(x[:,j,k]) =' );
console.log( ndarray2array( y ) );

y = countTruthy( x, {
    'dims': [ 1 ],
    'keepdims': true
});
console.log( 'countTruthy(x[i,:,k]) =' );
console.log( ndarray2array( y ) );

y = countTruthy( x, {
    'dims': [ 2 ],
    'keepdims': true
});
console.log( 'countTruthy(x[i,j,:]) =' );
console.log( ndarray2array( y ) );

y = countTruthy( x, {
    'dims': [ 0, 1 ],
    'keepdims': true
});
console.log( 'countTruthy(x[:,:,k]) =' );
console.log( ndarray2array( y ) );

y = countTruthy( x, {
    'dims': [ 0, 2 ],
    'keepdims': true
});
console.log( 'countTruthy(x[:,j,:]) =' );
console.log( ndarray2array( y ) );

y = countTruthy( x, {
    'dims': [ 1, 2 ],
    'keepdims': true
});
console.log( 'countTruthy(x[i,:,:]) =' );
console.log( ndarray2array( y ) );

y = countTruthy( x, {
    'dims': [ 0, 1, 2 ],
    'keepdims': true
});
console.log( 'countTruthy(x[:,:,:]) =' );
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
