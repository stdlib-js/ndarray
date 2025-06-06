<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ndarray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multidimensional arrays.

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray' );
```

#### ns

ndarray namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following functions to create multidimensional arrays:

<!-- <toc pattern="+(array|ctor)"> -->

<div class="namespace-toc">

-   <span class="signature">[`array( [buffer,] [options] )`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">create a multidimensional array.</span>
-   <span class="signature">[`ndarray( dtype, buffer, shape, strides, offset, order[, options] )`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>

</div>

<!-- </toc> -->

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(base|iter)"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/ndarray/base]</span><span class="delimiter">: </span><span class="description">base ndarray.</span>
-   <span class="signature">[`iter`][@stdlib/ndarray/iter]</span><span class="delimiter">: </span><span class="description">multidimensional array iterators.</span>

</div>

<!-- </toc> -->

In addition, the namespace contains the following multidimensional array utility functions:

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`at( x[, ...indices] )`][@stdlib/ndarray/at]</span><span class="delimiter">: </span><span class="description">return an `ndarray` element.</span>
-   <span class="signature">[`broadcastArray( x, shape )`][@stdlib/ndarray/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape.</span>
-   <span class="signature">[`broadcastArrays( ...arrays )`][@stdlib/ndarray/broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`castingModes()`][@stdlib/ndarray/casting-modes]</span><span class="delimiter">: </span><span class="description">list of ndarray casting modes.</span>
-   <span class="signature">[`countFalsy( x[, options] )`][@stdlib/ndarray/count-falsy]</span><span class="delimiter">: </span><span class="description">count the number of falsy elements along one or more `ndarray` dimensions.</span>
-   <span class="signature">[`countIf( x[, options], predicate[, thisArg] )`][@stdlib/ndarray/count-if]</span><span class="delimiter">: </span><span class="description">count the number of truthy elements along one or more `ndarray` dimensions.</span>
-   <span class="signature">[`countTruthy( x[, options] )`][@stdlib/ndarray/count-truthy]</span><span class="delimiter">: </span><span class="description">count the number of truthy elements along one or more `ndarray` dimensions.</span>
-   <span class="signature">[`dataBuffer( x )`][@stdlib/ndarray/data-buffer]</span><span class="delimiter">: </span><span class="description">return the underlying data buffer of a provided ndarray.</span>
-   <span class="signature">[`defaults()`][@stdlib/ndarray/defaults]</span><span class="delimiter">: </span><span class="description">default ndarray settings.</span>
-   <span class="signature">[`dispatch( fcns, types, data, nargs, nin, nout )`][@stdlib/ndarray/dispatch]</span><span class="delimiter">: </span><span class="description">create an ndarray function interface which performs multiple dispatch.</span>
-   <span class="signature">[`dtype( x )`][@stdlib/ndarray/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of a provided ndarray.</span>
-   <span class="signature">[`dtypes( [kind] )`][@stdlib/ndarray/dtypes]</span><span class="delimiter">: </span><span class="description">list of ndarray data types.</span>
-   <span class="signature">[`emptyLike( x[, options] )`][@stdlib/ndarray/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`empty( shape[, options] )`][@stdlib/ndarray/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having a specified shape and data type.</span>
-   <span class="signature">[`every( x[, options] )`][@stdlib/ndarray/every]</span><span class="delimiter">: </span><span class="description">test whether every element along one or more `ndarray` dimensions is truthy.</span>
-   <span class="signature">[`FancyArray( dtype, buffer, shape, strides, offset, order[, options] )`][@stdlib/ndarray/fancy]</span><span class="delimiter">: </span><span class="description">fancy multidimensional array constructor.</span>
-   <span class="signature">[`fillBy( x, fcn[, thisArg] )`][@stdlib/ndarray/fill-by]</span><span class="delimiter">: </span><span class="description">fill an input ndarray according to a callback function.</span>
-   <span class="signature">[`fill( x, value )`][@stdlib/ndarray/fill]</span><span class="delimiter">: </span><span class="description">fill an input `ndarray` with a specified value.</span>
-   <span class="signature">[`filterMap( x[, options], fcn[, thisArg] )`][@stdlib/ndarray/filter-map]</span><span class="delimiter">: </span><span class="description">filter and map elements in an input ndarray to elements in a new output ndarray according to a callback function.</span>
-   <span class="signature">[`filter( x[, options], predicate[, thisArg] )`][@stdlib/ndarray/filter]</span><span class="delimiter">: </span><span class="description">return a shallow copy of an ndarray containing only those elements which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`flag( x, name )`][@stdlib/ndarray/flag]</span><span class="delimiter">: </span><span class="description">return a specified flag for a provided ndarray.</span>
-   <span class="signature">[`flags( x )`][@stdlib/ndarray/flags]</span><span class="delimiter">: </span><span class="description">return the flags of a provided ndarray.</span>
-   <span class="signature">[`forEach( x, fcn[, thisArg] )`][@stdlib/ndarray/for-each]</span><span class="delimiter">: </span><span class="description">invoke a callback function once for each ndarray element.</span>
-   <span class="signature">[`scalar2ndarray( value[, options] )`][@stdlib/ndarray/from-scalar]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray.</span>
-   <span class="signature">[`includes( x, searchElement[, options] )`][@stdlib/ndarray/includes]</span><span class="delimiter">: </span><span class="description">test whether an `ndarray` contains a specified value along one or more dimensions.</span>
-   <span class="signature">[`ind2sub( shape, idx[, options] )`][@stdlib/ndarray/ind2sub]</span><span class="delimiter">: </span><span class="description">convert a linear index to an array of subscripts.</span>
-   <span class="signature">[`indexModes()`][@stdlib/ndarray/index-modes]</span><span class="delimiter">: </span><span class="description">list of ndarray index modes.</span>
-   <span class="signature">[`ndindex( x[, options] )`][@stdlib/ndarray/index]</span><span class="delimiter">: </span><span class="description">ndarray index constructor.</span>
-   <span class="signature">[`inputCastingPolicies()`][@stdlib/ndarray/input-casting-policies]</span><span class="delimiter">: </span><span class="description">list of input ndarray casting policies.</span>
-   <span class="signature">[`map( x[, options], fcn[, thisArg] )`][@stdlib/ndarray/map]</span><span class="delimiter">: </span><span class="description">apply a callback function to elements in an input ndarray and assign results to elements in a new output ndarray.</span>
-   <span class="signature">[`maybeBroadcastArray( x, shape )`][@stdlib/ndarray/maybe-broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.</span>
-   <span class="signature">[`maybeBroadcastArrays( arrays )`][@stdlib/ndarray/maybe-broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`minDataType( value )`][@stdlib/ndarray/min-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum ndarray data type of the closest "kind" necessary for storing a provided scalar value.</span>
-   <span class="signature">[`mostlySafeCasts( [dtype] )`][@stdlib/ndarray/mostly-safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast and, for floating-point data types, can be downcast.</span>
-   <span class="signature">[`ndarraylike2ndarray( x[, options] )`][@stdlib/ndarray/ndarraylike2ndarray]</span><span class="delimiter">: </span><span class="description">convert an ndarray-like object to an `ndarray`.</span>
-   <span class="signature">[`ndims( x )`][@stdlib/ndarray/ndims]</span><span class="delimiter">: </span><span class="description">return the number of ndarray dimensions.</span>
-   <span class="signature">[`nextDataType( [dtype] )`][@stdlib/ndarray/next-dtype]</span><span class="delimiter">: </span><span class="description">return the next larger ndarray data type of the same kind.</span>
-   <span class="signature">[`numelDimension( x, dim )`][@stdlib/ndarray/numel-dimension]</span><span class="delimiter">: </span><span class="description">return the size (i.e., number of elements) of a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`numel( x )`][@stdlib/ndarray/numel]</span><span class="delimiter">: </span><span class="description">return the number of elements in an ndarray.</span>
-   <span class="signature">[`offset( x )`][@stdlib/ndarray/offset]</span><span class="delimiter">: </span><span class="description">return the index offset specifying the underlying buffer index of the first iterated ndarray element.</span>
-   <span class="signature">[`order( x )`][@stdlib/ndarray/order]</span><span class="delimiter">: </span><span class="description">return the layout order of a provided ndarray.</span>
-   <span class="signature">[`orders()`][@stdlib/ndarray/orders]</span><span class="delimiter">: </span><span class="description">list of ndarray orders.</span>
-   <span class="signature">[`outputDataTypePolicies()`][@stdlib/ndarray/output-dtype-policies]</span><span class="delimiter">: </span><span class="description">list of output ndarray data type policies.</span>
-   <span class="signature">[`promotionRules( [dtype1, dtype2] )`][@stdlib/ndarray/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the ndarray data type with the smallest size and closest "kind" to which ndarray data types can be **safely** cast.</span>
-   <span class="signature">[`reject( x[, options], predicate[, thisArg] )`][@stdlib/ndarray/reject]</span><span class="delimiter">: </span><span class="description">return a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.</span>
-   <span class="signature">[`safeCasts( [dtype] )`][@stdlib/ndarray/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast.</span>
-   <span class="signature">[`sameKindCasts( [dtype] )`][@stdlib/ndarray/same-kind-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast or cast within the same "kind".</span>
-   <span class="signature">[`shape( x )`][@stdlib/ndarray/shape]</span><span class="delimiter">: </span><span class="description">return the shape of a provided ndarray.</span>
-   <span class="signature">[`sliceAssign( x, y, ...s[, options] )`][@stdlib/ndarray/slice-assign]</span><span class="delimiter">: </span><span class="description">assign element values from a broadcasted input `ndarray` to corresponding elements in an output `ndarray` view.</span>
-   <span class="signature">[`sliceDimensionFrom( x, dim, start[, options] )`][@stdlib/ndarray/slice-dimension-from]</span><span class="delimiter">: </span><span class="description">return a read-only shifted view of an input `ndarray` along a specified dimension.</span>
-   <span class="signature">[`sliceDimensionTo( x, dim, stop[, options] )`][@stdlib/ndarray/slice-dimension-to]</span><span class="delimiter">: </span><span class="description">return a read-only truncated view of an input `ndarray` along a specified dimension.</span>
-   <span class="signature">[`sliceDimension( x, dim, slice[, options] )`][@stdlib/ndarray/slice-dimension]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input `ndarray` when sliced along a specified dimension.</span>
-   <span class="signature">[`sliceFrom( x, ...start[, options] )`][@stdlib/ndarray/slice-from]</span><span class="delimiter">: </span><span class="description">return a read-only shifted view of an input ndarray.</span>
-   <span class="signature">[`sliceTo( x, ...stop[, options] )`][@stdlib/ndarray/slice-to]</span><span class="delimiter">: </span><span class="description">return a read-only truncated view of an input ndarray.</span>
-   <span class="signature">[`slice( x, ...s[, options] )`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input `ndarray`.</span>
-   <span class="signature">[`someBy( x, n[, options], predicate[, thisArg] )`][@stdlib/ndarray/some-by]</span><span class="delimiter">: </span><span class="description">test whether at least `n` elements along one or more `ndarray` dimensions pass a test implemented by a predicate function.</span>
-   <span class="signature">[`stride( x, dim )`][@stdlib/ndarray/stride]</span><span class="delimiter">: </span><span class="description">return the stride along a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`strides( x )`][@stdlib/ndarray/strides]</span><span class="delimiter">: </span><span class="description">return the strides of a provided ndarray.</span>
-   <span class="signature">[`sub2ind( shape, ...subscripts[, options] )`][@stdlib/ndarray/sub2ind]</span><span class="delimiter">: </span><span class="description">convert subscripts to a linear index.</span>
-   <span class="signature">[`ndarray2array( x )`][@stdlib/ndarray/to-array]</span><span class="delimiter">: </span><span class="description">convert an ndarray to a generic array.</span>
-   <span class="signature">[`ndarray2fancy( x[, options] )`][@stdlib/ndarray/to-fancy]</span><span class="delimiter">: </span><span class="description">convert an ndarray to an object supporting fancy indexing.</span>
-   <span class="signature">[`ndarray2json( x )`][@stdlib/ndarray/to-json]</span><span class="delimiter">: </span><span class="description">serialize an ndarray as a JSON object.</span>
-   <span class="signature">[`vector`][@stdlib/ndarray/vector]</span><span class="delimiter">: </span><span class="description">vector constructors and associated utilities.</span>
-   <span class="signature">[`zerosLike( x[, options] )`][@stdlib/ndarray/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`zeros( shape[, options] )`][@stdlib/ndarray/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/ndarray' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray

[test-image]: https://github.com/stdlib-js/ndarray/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray/main/LICENSE

<!-- <toc-links> -->

[@stdlib/ndarray/at]: https://github.com/stdlib-js/ndarray/tree/main/at

[@stdlib/ndarray/broadcast-array]: https://github.com/stdlib-js/ndarray/tree/main/broadcast-array

[@stdlib/ndarray/broadcast-arrays]: https://github.com/stdlib-js/ndarray/tree/main/broadcast-arrays

[@stdlib/ndarray/casting-modes]: https://github.com/stdlib-js/ndarray/tree/main/casting-modes

[@stdlib/ndarray/count-falsy]: https://github.com/stdlib-js/ndarray/tree/main/count-falsy

[@stdlib/ndarray/count-if]: https://github.com/stdlib-js/ndarray/tree/main/count-if

[@stdlib/ndarray/count-truthy]: https://github.com/stdlib-js/ndarray/tree/main/count-truthy

[@stdlib/ndarray/data-buffer]: https://github.com/stdlib-js/ndarray/tree/main/data-buffer

[@stdlib/ndarray/defaults]: https://github.com/stdlib-js/ndarray/tree/main/defaults

[@stdlib/ndarray/dispatch]: https://github.com/stdlib-js/ndarray/tree/main/dispatch

[@stdlib/ndarray/dtype]: https://github.com/stdlib-js/ndarray/tree/main/dtype

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/empty-like]: https://github.com/stdlib-js/ndarray/tree/main/empty-like

[@stdlib/ndarray/empty]: https://github.com/stdlib-js/ndarray/tree/main/empty

[@stdlib/ndarray/every]: https://github.com/stdlib-js/ndarray/tree/main/every

[@stdlib/ndarray/fancy]: https://github.com/stdlib-js/ndarray/tree/main/fancy

[@stdlib/ndarray/fill-by]: https://github.com/stdlib-js/ndarray/tree/main/fill-by

[@stdlib/ndarray/fill]: https://github.com/stdlib-js/ndarray/tree/main/fill

[@stdlib/ndarray/filter-map]: https://github.com/stdlib-js/ndarray/tree/main/filter-map

[@stdlib/ndarray/filter]: https://github.com/stdlib-js/ndarray/tree/main/filter

[@stdlib/ndarray/flag]: https://github.com/stdlib-js/ndarray/tree/main/flag

[@stdlib/ndarray/flags]: https://github.com/stdlib-js/ndarray/tree/main/flags

[@stdlib/ndarray/for-each]: https://github.com/stdlib-js/ndarray/tree/main/for-each

[@stdlib/ndarray/from-scalar]: https://github.com/stdlib-js/ndarray/tree/main/from-scalar

[@stdlib/ndarray/includes]: https://github.com/stdlib-js/ndarray/tree/main/includes

[@stdlib/ndarray/ind2sub]: https://github.com/stdlib-js/ndarray/tree/main/ind2sub

[@stdlib/ndarray/index-modes]: https://github.com/stdlib-js/ndarray/tree/main/index-modes

[@stdlib/ndarray/index]: https://github.com/stdlib-js/ndarray/tree/main/index

[@stdlib/ndarray/input-casting-policies]: https://github.com/stdlib-js/ndarray/tree/main/input-casting-policies

[@stdlib/ndarray/map]: https://github.com/stdlib-js/ndarray/tree/main/map

[@stdlib/ndarray/maybe-broadcast-array]: https://github.com/stdlib-js/ndarray/tree/main/maybe-broadcast-array

[@stdlib/ndarray/maybe-broadcast-arrays]: https://github.com/stdlib-js/ndarray/tree/main/maybe-broadcast-arrays

[@stdlib/ndarray/min-dtype]: https://github.com/stdlib-js/ndarray/tree/main/min-dtype

[@stdlib/ndarray/mostly-safe-casts]: https://github.com/stdlib-js/ndarray/tree/main/mostly-safe-casts

[@stdlib/ndarray/ndarraylike2ndarray]: https://github.com/stdlib-js/ndarray/tree/main/ndarraylike2ndarray

[@stdlib/ndarray/ndims]: https://github.com/stdlib-js/ndarray/tree/main/ndims

[@stdlib/ndarray/next-dtype]: https://github.com/stdlib-js/ndarray/tree/main/next-dtype

[@stdlib/ndarray/numel-dimension]: https://github.com/stdlib-js/ndarray/tree/main/numel-dimension

[@stdlib/ndarray/numel]: https://github.com/stdlib-js/ndarray/tree/main/numel

[@stdlib/ndarray/offset]: https://github.com/stdlib-js/ndarray/tree/main/offset

[@stdlib/ndarray/order]: https://github.com/stdlib-js/ndarray/tree/main/order

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray/tree/main/orders

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray/tree/main/output-dtype-policies

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray/tree/main/promotion-rules

[@stdlib/ndarray/reject]: https://github.com/stdlib-js/ndarray/tree/main/reject

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray/tree/main/safe-casts

[@stdlib/ndarray/same-kind-casts]: https://github.com/stdlib-js/ndarray/tree/main/same-kind-casts

[@stdlib/ndarray/shape]: https://github.com/stdlib-js/ndarray/tree/main/shape

[@stdlib/ndarray/slice-assign]: https://github.com/stdlib-js/ndarray/tree/main/slice-assign

[@stdlib/ndarray/slice-dimension-from]: https://github.com/stdlib-js/ndarray/tree/main/slice-dimension-from

[@stdlib/ndarray/slice-dimension-to]: https://github.com/stdlib-js/ndarray/tree/main/slice-dimension-to

[@stdlib/ndarray/slice-dimension]: https://github.com/stdlib-js/ndarray/tree/main/slice-dimension

[@stdlib/ndarray/slice-from]: https://github.com/stdlib-js/ndarray/tree/main/slice-from

[@stdlib/ndarray/slice-to]: https://github.com/stdlib-js/ndarray/tree/main/slice-to

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray/tree/main/slice

[@stdlib/ndarray/some-by]: https://github.com/stdlib-js/ndarray/tree/main/some-by

[@stdlib/ndarray/stride]: https://github.com/stdlib-js/ndarray/tree/main/stride

[@stdlib/ndarray/strides]: https://github.com/stdlib-js/ndarray/tree/main/strides

[@stdlib/ndarray/sub2ind]: https://github.com/stdlib-js/ndarray/tree/main/sub2ind

[@stdlib/ndarray/to-array]: https://github.com/stdlib-js/ndarray/tree/main/to-array

[@stdlib/ndarray/to-fancy]: https://github.com/stdlib-js/ndarray/tree/main/to-fancy

[@stdlib/ndarray/to-json]: https://github.com/stdlib-js/ndarray/tree/main/to-json

[@stdlib/ndarray/vector]: https://github.com/stdlib-js/ndarray/tree/main/vector

[@stdlib/ndarray/zeros-like]: https://github.com/stdlib-js/ndarray/tree/main/zeros-like

[@stdlib/ndarray/zeros]: https://github.com/stdlib-js/ndarray/tree/main/zeros

[@stdlib/ndarray/base]: https://github.com/stdlib-js/ndarray/tree/main/base

[@stdlib/ndarray/iter]: https://github.com/stdlib-js/ndarray/tree/main/iter

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray/tree/main/ctor

<!-- </toc-links> -->

</section>

<!-- /.links -->
