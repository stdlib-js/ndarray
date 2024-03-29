<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# ndarraylike2object

> Convert an [`ndarray`][@stdlib/ndarray/ctor]-like object to an object likely to have the same "shape".

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );
```

#### ndarraylike2object( x )

Converts an [`ndarray`][@stdlib/ndarray/ctor]-like object to an object likely to have the same "shape".

```javascript
var array = require( '@stdlib/ndarray/array' );

var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
var obj = ndarraylike2object( arr );
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned object has the following properties:

    -   **ref**: reference to the original [`ndarray`][@stdlib/ndarray/ctor]-like object.
    -   **dtype**: underlying data type.
    -   **data**: data buffer.
    -   **length**: number of elements.
    -   **shape**: array dimensions.
    -   **strides**: array strides.
    -   **offset**: index offset.
    -   **order**: order.
    -   **accessorProtocol**: `boolean` indicating whether the data buffer supports the get/set protocol (i.e., uses accessors for getting and setting elements).
    -   **accessors**: a two-element array whose first element is an accessor for retrieving an ndarray element and whose second element is an accessor for setting an ndarray element.

-   The getter accessor accepts two arguments:

    -   **data**: data buffer.
    -   **idx**: element index.

-   The setter accessor accepts three arguments:

    -   **data**: data buffer.
    -   **idx**: element index.
    -   **value**: value to set.

-   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding [`ndarray`][@stdlib/ndarray/ctor] meta data to ensure that internal functions operating on ndarrays are provided consistent argument "shapes".

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );

// Create an ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

// Convert to a standardized object:
var obj = ndarraylike2object( x );
// returns {...}

// Print various properties:
console.log( 'dtype: %s', obj.dtype );
console.log( 'ndims: %d', obj.shape.length );
console.log( 'numel: %d', obj.length );
console.log( 'shape: [ %s ]', obj.shape.join( ', ' ) );
console.log( 'strides: [ %s ]', obj.strides.join( ', ' ) );
console.log( 'offset: %d', obj.offset );
console.log( 'order: %s', obj.order );
console.log( 'accessor protocol: %s', obj.accessorProtocol );
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

</section>

<!-- /.links -->
