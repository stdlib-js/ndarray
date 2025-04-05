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

# includes

> Test whether an [`ndarray`][@stdlib/ndarray/ctor] contains a specified value along one or more dimensions.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var includes = require( '@stdlib/ndarray/includes' );
```

#### includes( x, searchElement\[, options] )

Tests whether an [`ndarray`][@stdlib/ndarray/ctor] contains a specified value along one or more dimensions.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var sh = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an input ndarray:
var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );

// Perform reduction:
var out = includes( x, 6.0 );
// returns <ndarray>

var v = out.get();
// returns true
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **searchElement**: search element. May be either a scalar or an [`ndarray`][@stdlib/ndarray/ctor]. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the non-reduced dimensions of input [`ndarray`][@stdlib/ndarray/ctor]. Must have a [data type][@stdlib/ndarray/dtypes] which can be (mostly) [safely cast][@stdlib/ndarray/mostly-safe-casts] to the data type of the input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [`ndarray`][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var sh = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an input ndarray:
var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );

// Perform reduction:
var out = includes( x, 6.0, {
    'dims': [ 1, 2 ]
});
// returns <ndarray>

var v = ndarray2array( out );
// returns [ false, true, false ]
```

By default, the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a shape matching only the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor] (i.e., the reduced dimensions are dropped). To include the reduced dimensions as singleton dimensions in the output [`ndarray`][@stdlib/ndarray/ctor], set the `keepdims` option to `true`.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var sh = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an input ndarray:
var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );

// Perform reduction:
var out = includes( x, 6.0, {
    'dims': [ 1, 2 ],
    'keepdims': true
});
// returns <ndarray>

var v = ndarray2array( out );
// returns [ [ [ false ] ], [ [ true ] ], [ [ false ] ] ]
```

#### includes.assign( x, searchElement, out\[, options] )

Tests whether an [`ndarray`][@stdlib/ndarray/ctor] contains a specified value along one or more dimensions and assigns results to a provided output [`ndarray`][@stdlib/ndarray/ctor].

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var empty = require( '@stdlib/ndarray/empty' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var sh = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an input ndarray:
var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );

// Create an output ndarray:
var y = empty( [], {
    'dtype': 'bool'
});

// Perform reduction:
var out = includes.assign( x, 6.0, y );
// returns <ndarray>

var bool = ( out === y );
// returns true

var v = y.get();
// returns true
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **searchElement**: search element. May be either a scalar or an [`ndarray`][@stdlib/ndarray/ctor]. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the non-reduced dimensions of input [`ndarray`][@stdlib/ndarray/ctor]. Must have a [data type][@stdlib/ndarray/dtypes] which can be (mostly) [safely cast][@stdlib/ndarray/mostly-safe-casts] to the data type of the input [`ndarray`][@stdlib/ndarray/ctor].
-   **out**: output [`ndarray`][@stdlib/ndarray/ctor]. The output [`ndarray`][@stdlib/ndarray/ctor] must have a shape matching the non-reduced dimensions of the input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform a reduction.

By default, the function performs a reduction over all elements in a provided [`ndarray`][@stdlib/ndarray/ctor]. To reduce specific dimensions, set the `dims` option.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var sh = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an input ndarray:
var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );

// Create an output ndarray:
var y = empty( [ 3 ], {
    'dtype': 'bool'
});

// Perform reduction:
var out = includes.assign( x, 6.0, y, {
    'dims': [ 1, 2 ]
});

var bool = ( out === y );
// returns true

var v = ndarray2array( y );
// returns [ false, true, false ]
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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var fillBy = require( '@stdlib/ndarray/fill-by' );
var zeros = require( '@stdlib/ndarray/zeros' );
var includes = require( '@stdlib/ndarray/includes' );

var x = zeros( [ 2, 4, 5 ], {
    'dtype': 'float64'
});
x = fillBy( x, discreteUniform( 0, 10 ) );
console.log( ndarray2array( x ) );

var y = includes( x, 1 );
console.log( 'includes(x[:,:,:], 1) =' );
console.log( y.get() );

y = includes( x, 2, {
    'dims': [ 0 ],
    'keepdims': true
});
console.log( 'includes(x[:,j,k], 2) =' );
console.log( ndarray2array( y ) );

y = includes( x, 3, {
    'dims': [ 1 ],
    'keepdims': true
});
console.log( 'includes(x[i,:,k], 3) =' );
console.log( ndarray2array( y ) );

y = includes( x, 4, {
    'dims': [ 2 ],
    'keepdims': true
});
console.log( 'includes(x[i,j,:], 4) =' );
console.log( ndarray2array( y ) );

y = includes( x, 5, {
    'dims': [ 0, 1 ],
    'keepdims': true
});
console.log( 'includes(x[:,:,k], 5) =' );
console.log( ndarray2array( y ) );

y = includes( x, 6, {
    'dims': [ 0, 2 ],
    'keepdims': true
});
console.log( 'includes(x[:,j,:], 6) =' );
console.log( ndarray2array( y ) );

y = includes( x, 7, {
    'dims': [ 1, 2 ],
    'keepdims': true
});
console.log( 'includes(x[i,:,:], 7) =' );
console.log( ndarray2array( y ) );

y = includes( x, 8, {
    'dims': [ 0, 1, 2 ],
    'keepdims': true
});
console.log( 'includes(x[:,:,:], 8) =' );
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

[@stdlib/ndarray/mostly-safe-casts]: https://github.com/stdlib-js/ndarray/tree/main/mostly-safe-casts

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray/tree/main/base/broadcast-shapes

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
