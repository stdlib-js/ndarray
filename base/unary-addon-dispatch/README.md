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

# dispatch

> Dispatch to a native add-on applying a unary function to an input ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dispatch = require( '@stdlib/ndarray/base/unary-addon-dispatch' );
```

#### dispatch( addon, fallback )

Returns a function which dispatches to a native add-on applying a unary function to an input ndarray.

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var dispatch = require( '@stdlib/ndarray/base/unary-addon-dispatch' );

function addon( x, metaX, y, metaY ) {
    // Call into native add-on...
}

function fallback( x, y ) {
    // Fallback JavaScript implementation...
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// ...

// Invoke the dispatch function with ndarray arguments:
var x = array( [ [ 1, 2], [ 3, 4 ] ] );
var y = zeros( [ 2, 2 ] );
f( x, y );
```

The returned function has the following signature:

```text
f( x, y )
```

where

-   **x**: input ndarray.
-   **y**: output ndarray.

The `addon` function should have the following signature:

```text
f( xbuf, metaX, ybuf, metaY )
```

where

-   **xbuf**: input ndarray data buffer.
-   **metaX**: [serialized][@stdlib/ndarray/base/serialize-meta-data] input ndarray meta data.
-   **ybuf**: output ndarray data buffer.
-   **metaY**: [serialized][@stdlib/ndarray/base/serialize-meta-data] output ndarray meta data.

The `fallback` function should have the following signature:

```text
f( x, y )
```

where

-   **x**: input ndarray.
-   **y**: output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   To determine whether to dispatch to the `addon` function, the returned dispatch function checks whether the underlying ndarray data buffers are typed arrays. If the data buffers are typed arrays, the dispatch function invokes the `addon` function; otherwise, the dispatch function invokes the `fallback` function.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dispatch = require( '@stdlib/ndarray/base/unary-addon-dispatch' );

function addon( xbuf, metaX, ybuf, metaY ) {
    console.log( xbuf );
    // => <Float64Array>[ 1, 2, 3, 4 ]

    console.log( ybuf );
    // => <Float64Array>[ 0, 0, 0, 0 ]
}

function fallback( x, y ) {
    console.log( ndarray2array( x ) );
    // => [ [ 1, 2 ], [ 3, 4 ] ]

    console.log( ndarray2array( y ) );
    // => [ [ 0, 0 ], [ 0, 0 ] ]
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// Create ndarrays:
var opts = {
    'dtype': 'float64',
    'casting': 'unsafe'
};
var x = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
var y = zeros( [ 2, 2 ], opts );

// Dispatch to the add-on function:
f( x, y );

// Define new ndarrays:
opts = {
    'dtype': 'generic'
};
x = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
y = zeros( [ 2, 2 ], opts );

// Dispatch to the fallback function:
f( x, y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/serialize-meta-data]: https://github.com/stdlib-js/ndarray/tree/main/base/serialize-meta-data

</section>

<!-- /.links -->
