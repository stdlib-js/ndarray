<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Node-API ndarray dtype

> C API for returning the ndarray [data type][@stdlib/ndarray/dtypes] corresponding to a Node-API typed array type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```c
#include "stdlib/ndarray/base/napi/typedarray_type_to_dtype.h"
```

#### stdlib_ndarray_napi_typedarray_type_to_dtype( napi_typedarray_type vtype )

Returns the ndarray [data type][@stdlib/ndarray/dtypes] corresponding to a Node-API typed array type.

```c
#include "stdlib/ndarray/base/napi/typedarray_type_to_dtype.h"
#include "stdlib/ndarray/dtypes.h"
#include <node_api.h>
#include <assert.h>

// Add-on function export...
napi_value addon( napi_env env, napi_callback_info info ) {

    // ...

    // Get function arguments...
    size_t argc = 1;
    napi_value argv[ 1 ];
    napi_status status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
    assert( status == napi_ok );

    // ...

    // Get a typed array argument...
    napi_typedarray_type vtype;
    size_t xlen;
    void *X;
    status = napi_get_typedarray_info( env, argv[ 0 ], &vtype, &xlen, &X, NULL, NULL );
    assert( status == napi_ok );

    // ...

    // Return the corresponding ndarray data type for the input typed array:
    enum STDLIB_NDARRAY_DTYPE dtype = stdlib_ndarray_napi_typedarray_type_to_dtype( vtype );

    // ...
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

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

</section>

<!-- /.links -->
