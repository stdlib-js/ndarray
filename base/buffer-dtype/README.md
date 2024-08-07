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

# Buffer Data Type

> Return the data type of an ndarray data buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtype = require( '@stdlib/ndarray/base/buffer-dtype' );
```

#### dtype( buffer )

Returns the [data type][@stdlib/ndarray/dtypes] of an ndarray data [`buffer`][@stdlib/ndarray/base/buffer-ctors].

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var buf = new Float64Array( 10 );

var dt = dtype( buf );
// returns 'float64'
```

If provided an ndarray data [`buffer`][@stdlib/ndarray/base/buffer-ctors] having an unknown or unsupported [data type][@stdlib/ndarray/dtypes], the function returns `null`.

```javascript
var dt = dtype( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var bufferCtors = require( '@stdlib/ndarray/base/buffer-ctors' );
var isFunction = require( '@stdlib/assert/is-function' );
var dtype = require( '@stdlib/ndarray/base/buffer-dtype' );

// Get a list of supported ndarray buffer data types:
var DTYPES = dtypes();

// Buffer length:
var len = 10;

// For each supported data type, create a buffer and confirm its data type...
var ctor;
var buf;
var dt;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = bufferCtors( DTYPES[ i ] );
    if ( DTYPES[ i ] === 'binary' && isFunction( ctor.alloc ) ) {
        buf = ctor.alloc( len );
    } else {
        buf = new ctor( len );
    }
    dt = dtype( buf );
    console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
}

// Try an array-like object...
buf = {
    'length': 10
};
dt = dtype( buf );
console.log( '%s == %s => %s', 'generic', dt, dt === 'generic' );
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

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray/tree/main/base/buffer-ctors

</section>

<!-- /.links -->
