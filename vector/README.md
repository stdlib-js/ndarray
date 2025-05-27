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

# Vector

> Vector constructors and associated utilities.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray/vector' );
```

#### ns

Namespace containing ndarray vector constructors and associated utilities.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`BooleanVector()`][@stdlib/ndarray/vector/bool]</span><span class="delimiter">: </span><span class="description">create a boolean vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Complex128Vector()`][@stdlib/ndarray/vector/complex128]</span><span class="delimiter">: </span><span class="description">create a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Complex64Vector()`][@stdlib/ndarray/vector/complex64]</span><span class="delimiter">: </span><span class="description">create a single-precision complex floating-point vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`vector()`][@stdlib/ndarray/vector/ctor]</span><span class="delimiter">: </span><span class="description">create a vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Float32Vector()`][@stdlib/ndarray/vector/float32]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Float64Vector()`][@stdlib/ndarray/vector/float64]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Int16Vector()`][@stdlib/ndarray/vector/int16]</span><span class="delimiter">: </span><span class="description">create a signed 16-bit integer vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Int32Vector()`][@stdlib/ndarray/vector/int32]</span><span class="delimiter">: </span><span class="description">create a signed 32-bit integer vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Int8Vector()`][@stdlib/ndarray/vector/int8]</span><span class="delimiter">: </span><span class="description">create a signed 8-bit integer vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Uint16Vector()`][@stdlib/ndarray/vector/uint16]</span><span class="delimiter">: </span><span class="description">create an unsigned 16-bit integer vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Uint32Vector()`][@stdlib/ndarray/vector/uint32]</span><span class="delimiter">: </span><span class="description">create an unsigned 32-bit integer vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Uint8Vector()`][@stdlib/ndarray/vector/uint8]</span><span class="delimiter">: </span><span class="description">create an unsigned 8-bit integer vector (i.e., a one-dimensional ndarray).</span>
-   <span class="signature">[`Uint8ClampedVector()`][@stdlib/ndarray/vector/uint8c]</span><span class="delimiter">: </span><span class="description">create a clamped unsigned 8-bit integer vector (i.e., a one-dimensional ndarray).</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/ndarray/vector' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/ndarray/vector/bool]: https://github.com/stdlib-js/ndarray/tree/main/vector/bool

[@stdlib/ndarray/vector/complex128]: https://github.com/stdlib-js/ndarray/tree/main/vector/complex128

[@stdlib/ndarray/vector/complex64]: https://github.com/stdlib-js/ndarray/tree/main/vector/complex64

[@stdlib/ndarray/vector/ctor]: https://github.com/stdlib-js/ndarray/tree/main/vector/ctor

[@stdlib/ndarray/vector/float32]: https://github.com/stdlib-js/ndarray/tree/main/vector/float32

[@stdlib/ndarray/vector/float64]: https://github.com/stdlib-js/ndarray/tree/main/vector/float64

[@stdlib/ndarray/vector/int16]: https://github.com/stdlib-js/ndarray/tree/main/vector/int16

[@stdlib/ndarray/vector/int32]: https://github.com/stdlib-js/ndarray/tree/main/vector/int32

[@stdlib/ndarray/vector/int8]: https://github.com/stdlib-js/ndarray/tree/main/vector/int8

[@stdlib/ndarray/vector/uint16]: https://github.com/stdlib-js/ndarray/tree/main/vector/uint16

[@stdlib/ndarray/vector/uint32]: https://github.com/stdlib-js/ndarray/tree/main/vector/uint32

[@stdlib/ndarray/vector/uint8]: https://github.com/stdlib-js/ndarray/tree/main/vector/uint8

[@stdlib/ndarray/vector/uint8c]: https://github.com/stdlib-js/ndarray/tree/main/vector/uint8c

<!-- </toc-links> -->

</section>

<!-- /.links -->
