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

# ndarray2fancy

> Convert an ndarray to an object supporting fancy indexing.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A fancy ndarray is an [`ndarray`][@stdlib/ndarray/ctor] which supports slicing via indexing expressions.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );

// Create a plain ndarray:
var buffer = [ 1, 2, 3, 4, 5, 6 ];
var x = new ndarray( 'generic', buffer, [ 6 ], [ 1 ], 0, 'row-major' );
// returns <ndarray>

// Convert to a fancy ndarray:
var y = ndarray2fancy( x );

// Select the first 3 elements:
var z = y[ ':3' ];
// returns <ndarray>

var arr = ndarray2array( z );
// returns [ 1, 2, 3 ]

// Select every other element, starting with the second element:
z = y[ '1::2' ];
// returns <ndarray>

arr = ndarray2array( z );
// returns [ 2, 4, 6 ]

// Reverse the array, starting with last element and skipping every other element:
z = y[ '::-2' ];
// returns <ndarray>

arr = ndarray2array( z );
// returns [ 6, 4, 2 ]
```

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarray2fancy = require( '@stdlib/ndarray/to-fancy' );
```

#### ndarray2fancy( x\[, options] )

Converts an [ndarray][@stdlib/ndarray/ctor] to an object supporting fancy indexing.

```javascript
console.log( 'TODO' );
```

The function supports the following options:

-   **cache**: cache for resolving ndarray index objects. Must have a `get` method which accepts a single argument: a string identifier associated with an ndarray index.

    If an ndarray index associated with a provided identifier exists, the `get` method should return an object having the following properties:

    -   **data**: the underlying index ndarray.
    -   **type**: the index type. Must be either `'mask'`, `'bool'`, or `'int'`.
    -   **kind**: the index kind. Must be either `''`, `'cartesian'`, or `'linear'`.
    -   **dtype**: the [data type][@stdlib/ndarray/dtypes] of the underlying ndarray.

    If an ndarray index is not associated with a provided identifier, the `get` method should return `null`.

    Default: [`ndindex`][@stdlib/ndarray/index].

-   **strict**: boolean indicating whether to enforce strict bounds checking. Default: `false`.

By default, the function returns a fancy ndarray which does **not** enforce strict bounds checking. For example,

```javascript
console.log( 'TODO' );
```

To enforce strict bounds checking, set the `strict` option to `true`.

<!-- run throws: false -->

```javascript
console.log( 'TODO' );
```

#### ndarray2fancy.factory( \[options] )

Returns a function for converting an [ndarray][@stdlib/ndarray/ctor] to an object supporting fancy indexing.

```javascript
var fcn = ndarray2fancy.factory();

console.log( 'TODO' );
```

The function supports the following options:

-   **cache**: default cache for resolving ndarray index objects. Must have a `get` method which accepts a single argument: a string identifier associated with an ndarray index.

    If an ndarray index associated with a provided identifier exists, the `get` method should return an object having the following properties:

    -   **data**: the underlying index ndarray.
    -   **type**: the index type. Must be either `'mask'`, `'bool'`, or `'int'`.
    -   **kind**: the index kind. Must be either `''`, `'cartesian'`, or `'linear'`.
    -   **dtype**: the [data type][@stdlib/ndarray/dtypes] of the underlying ndarray.

    If an ndarray index is not associated with a provided identifier, the `get` method should return `null`.

    Default: [`ndindex`][@stdlib/ndarray/index].

-   **strict**: boolean indicating whether to enforce strict bounds checking by default. Default: `false`.

By default, the function returns a function which, by default, does **not** enforce strict bounds checking. For example,

```javascript
var fcn = ndarray2fancy.factory();

console.log( 'TODO' );
```

To enforce strict bounds checking by default, set the `strict` option to `true`.

<!-- run throws: false -->

```javascript
var fcn = ndarray2fancy.factory({
    'strict': true
});

console.log( 'TODO' );
```

The returned function supports the same options as above. When the returned function is provided option values, those values override the factory method defaults.

#### ndarray2fancy.idx( x\[, options] )

Wraps a provided ndarray as an ndarray index object.

```javascript
console.log( 'TODO' );
```

For documentation and usage, see [`ndindex`][@stdlib/ndarray/index].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   A fancy ndarray shares the **same** data as the provided input [ndarray][@stdlib/ndarray/ctor]. Hence, any mutations to the returned ndarray will affect the underlying input ndarray and vice versa.
-   For operations returning a new ndarray (e.g., when slicing or invoking an instance method), a fancy ndarray returns a new fancy ndarray having the same configuration as specified by `options`.
-   A fancy ndarray supports indexing using positive and negative integers (both numeric literals and strings), [`Slice`][@stdlib/slice/ctor] and [`MultiSlice`][@stdlib/slice/multi] instances, [subsequence expressions][@stdlib/slice/seq2multislice], and [index arrays][@stdlib/ndarray/index] (boolean, mask, and integer).
-   A fancy ndarray supports all properties and methods of the input ndarray, and, thus, a fancy ndarray can be consumed by any API which supports ndarray-like objects.
-   Indexing expressions provide a convenient and powerful means for creating and operating on ndarray views; however, their use does entail a performance cost. Indexing expressions are best suited for interactive use (e.g., in the [REPL][@stdlib/repl]) and scripting. For performance critical applications, prefer equivalent functional APIs supporting ndarray-like objects.
-   In older JavaScript environments which do **not** support [`Proxy`][@stdlib/proxy/ctor] objects, the use of indexing expressions is **not** supported.

### Bounds Checking

// TODO: see array/to-fancy

### Linear Indexing

// TODO: only applies to non-zero-dimensional ndarrays. In non-strict mode, out-of-bounds indices return `undefined` and fail to assign.

### Broadcasting

// TODO: see array/to-fancy

### Casting

// TODO: see array/to-fancy

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap, array-element-newline, comma-spacing -->

```javascript
var S = require( '@stdlib/slice/ctor' );
var E = require( '@stdlib/slice/multi' );
var toArray = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2fancy = require( '@stdlib/ndarray/to-fancy' );

var buffer = [
    1, 2,
    3, 4,  // 0
    5, 6,  // 1
    7, 8,  // 2
    9, 10
];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 2;

// Create a normal ndarray:
var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

// Convert to a fancy ndarray:
var y = ndarray2fancy( x );

// Access an ndarray property:
var ndims = y.ndims;
// returns 2

// Retrieve an ndarray element:
var v = y.get( 2, 1 );
// returns 8

// Set an ndarray element:
y.set( 2, 1, 20 );
v = y.get( 2, 1 );
// returns 20

// Create an alias for `undefined` for more concise slicing expressions:
var _ = void 0;

// Create a multi-dimensional slice:
var s = E( S(0,_,2), _ );
// returns <MultiSlice>

// Use the slice to create a view on the original ndarray:
var y1 = y[ s ];
console.log( toArray( y1 ) );
// => [ [ 3, 4 ], [ 7, 20 ] ]

// Use alternative syntax:
var y2 = y[ [ S(0,_,2), _ ] ];
console.log( toArray( y2 ) );
// => [ [ 3, 4 ], [ 7, 20 ] ]

// Use alternative syntax:
var y3 = y[ '0::2,:' ];
console.log( toArray( y3 ) );
// => [ [ 3, 4 ], [ 7, 20 ] ]

// Flip dimensions:
var y4 = y[ [ S(_,_,-2), S(_,_,-1) ] ];
console.log( toArray( y4 ) );
// => [ [ 20, 7 ], [ 4, 3 ] ]
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

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/index]: https://github.com/stdlib-js/ndarray/tree/main/index

[@stdlib/repl]: https://github.com/stdlib-js/repl

[@stdlib/proxy/ctor]: https://github.com/stdlib-js/proxy-ctor

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi

[@stdlib/slice/seq2multislice]: https://github.com/stdlib-js/slice-seq2multislice

</section>

<!-- /.links -->
