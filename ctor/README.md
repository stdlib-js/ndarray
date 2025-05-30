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

<!-- lint disable maximum-heading-length -->

# ndarray

> Multidimensional array constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
```

<a name="main"></a>

#### ndarray( dtype, buffer, shape, strides, offset, order\[, options] )

Returns an `ndarray` instance.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );
// returns <ndarray>
```

The constructor expects the following arguments:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes].
-   **buffer**: data buffer.
-   **shape**: array shape (dimensions).
-   **strides**: array strides which are index offsets specifying how to access along corresponding dimensions.
-   **offset**: index offset specifying the location of the first indexed element in the data buffer.
-   **order**: array order, which is either `row-major` (C-style) or `column-major` (Fortran-style).

The constructor accepts the following `options`:

-   **mode**: specifies how to handle indices which exceed array dimensions. Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions. If provided fewer modes than dimensions, the constructor recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: `boolean` indicating whether an array should be **read-only**. Default: `false`.

The constructor supports the following `modes`:

-   **throw**: specifies that an `ndarray` instance should throw an error when an index exceeds array dimensions.
-   **normalize**: specifies that an `ndarray` instance should normalize negative indices and throw an error when an index exceeds array dimensions.
-   **wrap**: specifies that an `ndarray` instance should wrap around an index exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that an `ndarray` instance should set an index exceeding array dimensions to either `0` (minimum index) or the maximum index.

By default, an `ndarray` instance **throws** when provided an index which exceeds array dimensions. To support alternative indexing behavior, set the `mode` option, which will affect all public methods for getting and setting array elements.

```javascript
var opts = {
    'mode': 'clamp'
};

// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
// returns <ndarray>

// Attempt to access an out-of-bounds linear index (clamped):
var v = arr.iget( 10 );
// returns 4.0
```

By default, the `mode` option is applied to subscripts which exceed array dimensions. To specify behavior for each dimension, set the `submode` option.

```javascript
var opts = {
    'submode': [ 'wrap', 'clamp' ]
};

// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 2, 2, 2 ];
var order = 'row-major';
var strides = [ 4, 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
// returns <ndarray>

// Attempt to access out-of-bounds subscripts:
var v = arr.get( -2, 10, -1 ); // linear index: 3
// returns 4.0
```

* * *

### Properties

<a name="static-prop-name"></a>

#### ndarray.name

String value of the ndarray constructor name.

```javascript
var str = ndarray.name;
// returns 'ndarray'
```

<a name="prop-byte-length"></a>

#### ndarray.prototype.byteLength

Size (in bytes) of the array (if known).

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Specify the array configuration:
var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'float64', buffer, shape, strides, offset, order );

// Get the byte length:
var nbytes = arr.byteLength;
// returns 32
```

If unable to determine the size of the array, the property value is `null`.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the byte length:
var nbytes = arr.byteLength;
// returns null
```

<a name="prop-bytes-per-element"></a>

#### ndarray.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element (if known).

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Specify the array configuration:
var buffer = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'float32', buffer, shape, strides, offset, order );

// Get the number of bytes per element:
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 4
```

If size of each array element is unknown, the property value is `null`.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the number of bytes per element:
var nbytes = arr.BYTES_PER_ELEMENT;
// returns null
```

<a name="prop-data"></a>

#### ndarray.prototype.data

A reference to the underlying data buffer.

```javascript
var Int8Array = require( '@stdlib/array/int8' );

// Specify the array configuration:
var buffer = new Int8Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'int8', buffer, shape, strides, offset, order );

// Get the buffer reference:
var d = arr.data;
// returns <Int8Array>[ 1, 2, 3, 4 ]

var bool = ( d === buffer );
// returns true
```

<a name="prop-dtype"></a>

#### ndarray.prototype.dtype

Underlying [data type][@stdlib/ndarray/dtypes].

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

// Specify the array configuration:
var buffer = new Uint8Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'uint8', buffer, shape, strides, offset, order );

// Get the underlying data type:
var dtype = arr.dtype;
// returns 'uint8'
```

<a name="prop-flags"></a>

#### ndarray.prototype.flags

Meta information, such as information regarding the memory layout of the array. The returned `object` has the following properties:

-   **ROW_MAJOR_CONTIGUOUS**: `boolean` indicating if an array is row-major contiguous.
-   **COLUMN_MAJOR_CONTIGUOUS**: `boolean` indicating if an array is column-major contiguous.
-   **READONLY**: `boolean` indicating whether an array is **read-only**.

An array is contiguous if (1) an array is compatible with being stored in a single memory segment and (2) each array element is adjacent to the next array element. Note that an array can be both row-major contiguous and column-major contiguous at the same time (e.g., if an array is a 1-dimensional ndarray with `strides = [1]`).

```javascript
var Int32Array = require( '@stdlib/array/int32' );

// Specify the array configuration:
var buffer = new Int32Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, 2 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'int32', buffer, shape, strides, offset, order );

// Get the array flags:
var flg = arr.flags;
// returns {...}
```

<a name="prop-length"></a>

#### ndarray.prototype.length

Number of array elements.

```javascript
var Uint16Array = require( '@stdlib/array/uint16' );

// Specify the array configuration:
var buffer = new Uint16Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ -1, -2 ];
var offset = 3;

// Create a new ndarray:
var arr = ndarray( 'uint16', buffer, shape, strides, offset, order );

// Get the array length:
var len = arr.length;
// returns 4
```

<a name="prop-ndims"></a>

#### ndarray.prototype.ndims

Number of dimensions.

```javascript
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );

// Specify the array configuration:
var buffer = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, -1 ];
var offset = 3;

// Create a new ndarray:
var arr = ndarray( 'uint8c', buffer, shape, strides, offset, order );

// Get the number of dimensions:
var ndims = arr.ndims;
// returns 2
```

<a name="prop-offset"></a>

#### ndarray.prototype.offset

Index offset which specifies the `buffer` index at which to start iterating over array elements.

```javascript
var Int16Array = require( '@stdlib/array/int16' );

// Specify the array configuration:
var buffer = new Int16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, -1 ];
var offset = 10;

// Create a new ndarray:
var arr = ndarray( 'int16', buffer, shape, strides, offset, order );

// Get the index offset:
var o = arr.offset;
// returns 10
```

<a name="prop-order"></a>

#### ndarray.prototype.order

Array order. The array order is either row-major (C-style) or column-major (Fortran-style).

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

// Specify the array configuration:
var buffer = new Uint32Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'uint32', buffer, shape, strides, offset, order );

// Get the array order:
var ord = arr.order;
// returns 'row-major'
```

<a name="prop-shape"></a>

#### ndarray.prototype.shape

Returns a copy of the array shape.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the array shape:
var dims = arr.shape;
// returns [ 2, 2 ]
```

<a name="prop-strides"></a>

#### ndarray.prototype.strides

Returns a copy of the array strides which specify how to access data along corresponding array dimensions.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ -1, 2 ];
var offset = 1;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the array strides:
var s = arr.strides;
// returns [ -1, 2 ]
```

* * *

### Methods

<a name="method-get"></a>

#### ndarray.prototype.get( i, j, k, ... )

Returns an array element specified according to provided subscripts. The number of provided subscripts must **equal** the number of dimensions.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the element located at (1,1):
var v = arr.get( 1, 1 );
// returns 6.0
```

<a name="method-iget"></a>

#### ndarray.prototype.iget( idx )

Returns an array element located at a specified linear index.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the element located at index 3:
var v = arr.iget( 3 );
// returns 6.0
```

For zero-dimensional arrays, the input argument is ignored and, for clarity, should **not** be provided.

<a name="method-set"></a>

#### ndarray.prototype.set( i, j, k, ..., v )

Sets an array element specified according to provided subscripts. The number of provided subscripts must **equal** the number of dimensions.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Set the element located at (1,1):
arr.set( 1, 1, 40.0 );
var v = arr.get( 1, 1 );
// returns 40.0

// Get the underlying buffer:
var d = arr.data;
// returns [ 1.0, 2.0, 3.0, 40.0 ]
```

The method returns the `ndarray` instance. If an array is **read-only**, the method raises an exception.

<a name="method-iset"></a>

#### ndarray.prototype.iset( idx, v )

Sets an array element located at a specified linear index.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Set the element located at index 3:
arr.iset( 3, 40.0 );
var v = arr.iget( 3 );
// returns 40.0

// Get the underlying buffer:
var d = arr.data;
// returns [ 1.0, 2.0, 3.0, 40.0 ]
```

For zero-dimensional arrays, the first, and **only**, argument should be the value `v` to set.

The method returns the `ndarray` instance. If an array is **read-only**, the method raises an exception.

<a name="method-to-string"></a>

#### ndarray.prototype.toString()

Serializes an `ndarray` as a `string`.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 3, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Serialize to a string:
var str = arr.toString();
// returns "ndarray( 'generic', [ 3, 4, 5, 6, 7, 8 ], [ 3, 2 ], [ 2, 1 ], 0, 'row-major' )"
```

The method does **not** serialize data outside of the buffer region defined by the array configuration.

<a name="method-to-json"></a>

#### ndarray.prototype.toJSON()

Serializes an `ndarray` as a [JSON][json] `object`. `JSON.stringify()` implicitly calls this method when stringifying an `ndarray` instance.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 3, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Serialize to JSON:
var o = arr.toJSON();
// returns { 'type': 'ndarray', 'dtype': 'generic', 'flags': {...}, 'offset': 0, 'order': 'row-major', 'shape': [ 3, 2 ], 'strides': [ 2, 1 ], 'data': [ 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] }
```

The method does **not** serialize data outside of the buffer region defined by the array configuration.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   To create a zero-dimensional array, provide an empty `shape` and a single `strides` element equal to `0`. The `order` can be either `row-major` or `column-major` and has no effect on data storage or access.

    ```javascript
    var buffer = [ 1 ];
    var shape = [];
    var order = 'row-major';
    var strides = [ 0 ];
    var offset = 0;

    // Create a new zero-dimensional array:
    var arr = ndarray( 'generic', buffer, shape, strides, offset, order );
    // returns <ndarray>
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var ndarray = require( '@stdlib/ndarray/ctor' );

// Create a data buffer:
var buffer = new Float32Array( (3*3*3*3) + 100 );

// Specify the array shape:
var shape = [ 3, 3, 3, 3 ];

// Specify the array strides:
var strides = [ 27, 9, 3, 1 ];

// Specify the index offset:
var offset = 4;

// Specify the order:
var order = 'row-major'; // C-style

// Create a new ndarray:
var arr = ndarray( 'float32', buffer, shape, strides, offset, order );

// Retrieve an array value:
var v = arr.get( 1, 2, 1, 2 );
// returns 0.0

// Set an array value:
arr.set( 1, 2, 1, 2, 10.0 );

// Retrieve the array value:
v = arr.get( 1, 2, 1, 2 );
// returns 10.0

// Serialize the array as a string:
var str = arr.toString();
// returns "ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 3, 3, 3, 3 ], [ 27, 9, 3, 1 ], 0, 'row-major' )"

// Serialize the array as JSON:
str = JSON.stringify( arr.toJSON() );
// e.g., returns '{"type":"ndarray","dtype":"float32","flags":{"READONLY":false},"order":"row-major","shape":[3,3,3,3],"strides":[27,9,3,1],"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}'
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/ctor.h"
```

#### ndarray

Structure holding ndarray data.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

struct ndarray {
    // Underlying data type:
    int16_t dtype;

    // Pointer to the underlying byte array:
    uint8_t *data;

    // Number of array dimensions:
    int64_t ndims;

    // Array shape (dimensions):
    int64_t *shape;

    // Array strides (in bytes) specifying how to iterate over a strided array:
    int64_t *strides;

    // Byte offset which specifies the location at which to start iterating over array elements:
    int64_t offset;

    // Array order (either row-major (C-style) or column-major (Fortran-style)):
    int8_t order;

    // Mode specifying how to handle indices which exceed array dimensions:
    int8_t imode;

    // Number of subscript modes:
    int64_t nsubmodes;

    // Mode(s) specifying how to handle subscripts which exceed array dimensions on a per dimension basis:
    int8_t *submodes;

    // Number of array elements:
    int64_t length;

    // Size in bytes:
    int64_t byteLength;

    // Number of bytes per element (i.e., item size):
    int64_t BYTES_PER_ELEMENT;

    // Bit mask providing information regarding the memory layout of the array (e.g., see macros):
    int64_t flags;
};
```

#### STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG

Macro defining a flag indicating whether an ndarray is row-major (C-style) contiguous.

```c
#define STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG 0x0001
```

Notes:

-   Row-major order indicates that the last ndarray index varies the fastest.
-   Contiguous means that an ndarray is compatible with being stored in a single memory segment and that ndarray elements are adjacent to each other in memory.
-   `strides` array is in reverse order to that of column-major order.
-   An ndarray can be both row-major and column-major contiguous (e.g., if an ndarray is one-dimensional).

#### STDLIB_NDARRAY_COLUMN_MAJOR_CONTIGUOUS_FLAG

Macro defining a flag indicating whether an ndarray is column-major (Fortran-style) contiguous.

```c
#define STDLIB_NDARRAY_COLUMN_MAJOR_CONTIGUOUS_FLAG 0x0002
```

Notes:

-   Column-major order indicates that the first ndarray index varies the fastest.
-   Contiguous means that an ndarray is compatible with being stored in a single memory segment and that ndarray elements are adjacent to each other in memory.
-   `strides` array is in reverse order to that of row-major order.
-   An ndarray can be both row-major and column-major contiguous (e.g., if an ndarray is one-dimensional).

* * *

<!-- NOTE: keep functions in alphabetical order -->

#### stdlib_ndarray_allocate( dtype, \*data, ndims, \*shape, \*strides, offset, order, imode, nsubmodes, \*submodes )

Returns a pointer to a dynamically allocated ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

// Specify the underlying data type:
enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t buffer[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Specify the number of array dimensions:
int64_t ndims = 1;

// Specify the array shape:
int64_t shape[] = { 3 }; // vector consisting of 3 doubles

// Specify the array strides:
int64_t strides[] = { STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT };

// Specify the byte offset:
int64_t offset = 0;

// Specify the array order (note: this does not matter for a 1-dimensional array):
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
int64_t nsubmodes = 1;

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( dtype, buffer, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **dtype**: `[in] int16_t` [data type][@stdlib/ndarray/dtypes].
-   **data**: `[in] uint8_t*` pointer to the underlying byte array.
-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (i.e., dimensions).
-   **strides**: `[in] int64_t*` array strides (in bytes).
-   **offset**: `[in] int64_t` byte offset specifying the location of the first element.
-   **order**: `[in] int8_t` specifies whether an array is [row-major][@stdlib/ndarray/orders] (C-style) or [column-major][@stdlib/ndarray/orders] (Fortran-style).
-   **imode**: `[in] int8_t` specifies the [index mode][@stdlib/ndarray/index-modes] (i.e., how to handle indices which exceed array dimensions).
-   **nsubmodes**: `[in] int64_t` number of subscript modes.
-   **submodes**: `[in] int8_t*` specifies how to handle subscripts which [exceed][@stdlib/ndarray/index-modes] array dimensions on a per dimension basis (if provided fewer submodes than dimensions, submodes are recycled using modulo arithmetic).

```c
struct ndarray * stdlib_ndarray_allocate( int16_t dtype, uint8_t *data, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset, int8_t order, int8_t imode, int64_t nsubmodes, int8_t *submodes );
```

Notes:

-   The user is responsible for freeing the allocated memory.
-   To allocate a zero-dimensional ndarray, provide a `shape` argument equal to a null pointer, an `ndims` argument equal to `0`, and a `strides` argument consisting of a single element equal to `0`. The `order` argument can be either row-major or column-major and has no effect on data storage or access.

#### stdlib_ndarray_bytelength( \*arr )

Returns the size of an ndarray (in bytes).

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the ndarray size:
int64_t N = stdlib_ndarray_bytelength( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t stdlib_ndarray_bytelength( const struct ndarray *arr );
```

#### stdlib_ndarray_data( \*arr )

Returns a pointer to an ndarray's underlying byte array.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the underlying byte array:
uint8_t *data = stdlib_ndarray_data( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
uint8_t * stdlib_ndarray_data( const struct ndarray *arr );
```

#### stdlib_ndarray_dimension( \*arr, i )

Returns an ndarray dimension.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve a dimension:
int64_t dim = stdlib_ndarray_dimension( x, 0 );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **i**: `[in] int64_t` dimension index.

```c
int64_t stdlib_ndarray_dimension( const struct ndarray *arr, const int64_t i );
```

Notes:

-   The function does perform bounds checking for the dimension index.
-   If an input ndarray is zero-dimensional, the function always returns `-1`.

#### stdlib_ndarray_disable_flags( \*arr, flags )

Disables specified ndarray flags.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Disables specified ndarray flags:
int8_t status = stdlib_ndarray_disable_flags( x, STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **flags**: `[in] int64_t` bit mask to disable flags.

The function returns a status code of `0` if able to successfully disable flags.

```c
int8_t stdlib_ndarray_disable_flags( const struct ndarray *arr, const int64_t flags );
```

Notes:

-   The function does not perform any sanity checks and **assumes** the user knows what s/he is doing.

#### stdlib_ndarray_dtype( \*arr )

Returns the data type of an ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the dtype:
enum STDLIB_NDARRAY_DTYPE dtype = stdlib_ndarray_dtype( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int16_t stdlib_ndarray_dtype( const struct ndarray *arr );
```

#### stdlib_ndarray_enable_flags( \*arr, flags )

Enables specified ndarray flags.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Enables specified ndarray flags:
int8_t status = stdlib_ndarray_enable_flags( x, STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **flags**: `[in] int64_t` bit mask to enable flags.

The function returns a status code of `0` if able to successfully enable flags.

```c
int8_t stdlib_ndarray_enable_flags( const struct ndarray *arr, const int64_t flags );
```

Notes:

-   The function does not perform any sanity checks and **assumes** the user knows what s/he is doing.

#### stdlib_ndarray_flags( \*arr )

Returns ndarray flags as a single integer value.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the ndarray flags:
int64_t flags = stdlib_ndarray_flags( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t stdlib_ndarray_flags( const struct ndarray *arr );
```

#### stdlib_ndarray_free( \*arr )

Frees an ndarray's allocated memory.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
void stdlib_ndarray_free( struct ndarray *arr );
```

#### stdlib_ndarray_has_flags( \*arr, flags )

Tests whether an ndarray has specified flags enabled.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Test whether an ndarray is row-major contiguous:
int8_t out = stdlib_ndarray_flags( x, STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **flags**: `[in] int64_t` bit mask specifying flags to test against.

The function returns `1` if flags are set and `0` otherwise.

```c
int8_t stdlib_ndarray_has_flags( const struct ndarray *arr, const int64_t flags );
```

#### stdlib_ndarray_index_mode( \*arr )

Returns the index mode of an ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/index_modes.h"
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = stdlib_ndarray_index_mode( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int8_t stdlib_ndarray_index_mode( const struct ndarray *arr );
```

#### stdlib_ndarray_length( \*arr )

Returns the number of elements in an ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the number of elements:
int64_t N = stdlib_ndarray_length( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t stdlib_ndarray_length( const struct ndarray *arr );
```

#### stdlib_ndarray_ndims( \*arr )

Returns the number of ndarray dimensions.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the number of dimensions:
int64_t ndims = stdlib_ndarray_ndims( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t stdlib_ndarray_ndims( const struct ndarray *arr );
```

#### stdlib_ndarray_nsubmodes( \*arr )

Returns the number of ndarray subscript modes.

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the number of index modes:
int64_t n = stdlib_ndarray_nsubmodes( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t stdlib_ndarray_nsubmodes( const struct ndarray *arr );
```

#### stdlib_ndarray_offset( \*arr )

Returns an ndarray index offset (in bytes).

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the index offset:
int64_t offset = stdlib_ndarray_offset( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t stdlib_ndarray_offset( const struct ndarray *arr );
```

#### stdlib_ndarray_order( \*arr )

Returns the order of an ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the order:
enum STDLIB_NDARRAY_ORDER order = stdlib_ndarray_order( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int8_t stdlib_ndarray_order( const struct ndarray *arr );
```

#### stdlib_ndarray_shape( \*arr )

Returns a pointer to an array containing an ndarray shape (dimensions).

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the shape:
int64_t *shape = stdlib_ndarray_shape( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t * stdlib_ndarray_shape( const struct ndarray *arr );
```

Notes:

-   If an input ndarray is zero-dimensional, the function returns a null pointer.

#### stdlib_ndarray_stride( \*arr, i )

Returns an ndarray stride (in bytes).

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve a stride:
int64_t s = stdlib_ndarray_stride( x, 0 );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **i**: `[in] int64_t` dimension index.

```c
int64_t stdlib_ndarray_stride( const struct ndarray *arr, const int64_t i );
```

Notes:

-   The function does perform bounds checking for the dimension index.

#### stdlib_ndarray_strides( \*arr )

Returns a pointer to an array containing ndarray strides (in bytes).

```c
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the strides:
int64_t *strides = stdlib_ndarray_strides( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int64_t * stdlib_ndarray_strides( const struct ndarray *arr );
```

#### stdlib_ndarray_submode( \*arr, i )

Returns an ndarray subscript mode.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/index_modes.h"
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve an index mode:
enum STDLIB_NDARRAY_INDEX_MODE mode = stdlib_ndarray_submode( x, 0 );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **i**: `[in] int64_t` dimension index.

```c
int8_t stdlib_ndarray_submode( const struct ndarray *arr, const int64_t i );
```

Notes:

-   If an ndarray has fewer subscript modes than dimensions, modes are recycled using modulo arithmetic.
-   The function does not perform bounds checking for the dimension index.

#### stdlib_ndarray_submodes( \*arr )

Returns ndarray subscript modes.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/index_modes.h"
#include <stdlib.h>
#include <stdio.h>

// ...

// Create an ndarray:
struct ndarray *x = stdlib_ndarray_allocate( ... );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( 1 );
}

// ...

// Retrieve the index subscript modes:
int8_t *modes = stdlib_ndarray_submodes( x );

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.

```c
int8_t * stdlib_ndarray_submodes( const struct ndarray *arr );
```

* * *

#### stdlib_ndarray_get( \*arr, \*sub, \*out )

Returns an ndarray data element.

```c
int8_t stdlib_ndarray_get( const struct ndarray *arr, const int64_t *sub, void *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] void *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function requires a `void` pointer for the output address `out` in order to provide a generic API supporting ndarrays having different data types.

#### stdlib_ndarray_get_float64( \*arr, \*sub, \*out )

Returns a double-precision floating-point ndarray data element.

```c
int8_t stdlib_ndarray_get_float64( const struct ndarray *arr, const int64_t *sub, double *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] double *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_float32( \*arr, \*sub, \*out )

Returns a single-precision floating-point ndarray data element.

```c
int8_t stdlib_ndarray_get_float32( const struct ndarray *arr, const int64_t *sub, float *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] float *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_uint64( \*arr, \*sub, \*out )

Returns an unsigned 64-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_uint64( const struct ndarray *arr, const int64_t *sub, uint64_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] uint64_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_int64( \*arr, \*sub, \*out )

Returns a signed 64-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_int64( const struct ndarray *arr, const int64_t *sub, int64_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] int64_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_uint32( \*arr, \*sub, \*out )

Returns an unsigned 32-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_uint32( const struct ndarray *arr, const int64_t *sub, uint32_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] uint32_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_int32( \*arr, \*sub, \*out )

Returns a signed 32-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_int32( const struct ndarray *arr, const int64_t *sub, int32_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] int32_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_uint16( \*arr, \*sub, \*out )

Returns an unsigned 16-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_uint16( const struct ndarray *arr, const int64_t *sub, uint16_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] uint16_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_int16( \*arr, \*sub, \*out )

Returns a signed 16-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_int16( const struct ndarray *arr, const int64_t *sub, int16_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] int16_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_uint8( \*arr, \*sub, \*out )

Returns an unsigned 8-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_uint8( const struct ndarray *arr, const int64_t *sub, uint8_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] uint8_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_int8( \*arr, \*sub, \*out )

Returns a signed 8-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_get_int8( const struct ndarray *arr, const int64_t *sub, int8_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] int8_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_complex128( \*arr, \*sub, \*out )

Returns a double-precision complex floating-point ndarray data element.

```c
int8_t stdlib_ndarray_get_complex128( const struct ndarray *arr, const int64_t *sub, stdlib_complex128_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] stdlib_complex128_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_complex64( \*arr, \*sub, \*out )

Returns a single-precision complex floating-point ndarray data element.

```c
int8_t stdlib_ndarray_get_complex64( const struct ndarray *arr, const int64_t *sub, stdlib_complex64_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] stdlib_complex64_t *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

#### stdlib_ndarray_get_bool( \*arr, \*sub, \*out )

Returns a boolean ndarray data element.

```c
int8_t stdlib_ndarray_get_bool( const struct ndarray *arr, const int64_t *sub, bool *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.
-   **out**: `[out] bool *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.

* * *

#### stdlib_ndarray_get_ptr( \*arr, \*sub )

Returns a pointer to an ndarray data element in the underlying byte array.

```c
uint8_t * stdlib_ndarray_get_ptr( const struct ndarray *arr, const int64_t *sub );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **sub**: `[in] int64_t *` ndarray subscripts.

#### stdlib_ndarray_get_ptr_value( \*arr, \*idx, \*out )

Returns an ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_value( const struct ndarray *arr, const uint8_t *idx, void *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray *` input ndarray.
-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] void *` output address.

Notes:

-   The function does **not** perform bounds checking and **assumes** you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function requires a `void` pointer for the output address `out` in order to provide a generic API supporting ndarrays having different data types.

#### stdlib_ndarray_get_ptr_float64( \*idx, \*out )

Returns a double-precision floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_float64( const uint8_t *idx, double *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] double *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_float32( \*idx, \*out )

Returns a single-precision floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_float32( const uint8_t *idx, float *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] float *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_uint64( \*idx, \*out )

Returns an unsigned 64-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_uint64( const uint8_t *idx, uint64_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] uint64_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_int64( \*idx, \*out )

Returns a signed 64-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_int64( const uint8_t *idx, int64_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] int64_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_uint32( \*idx, \*out )

Returns an unsigned 32-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_uint32( const uint8_t *idx, uint32_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] uint32_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_int32( \*idx, \*out )

Returns a signed 32-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_int32( const uint8_t *idx, int32_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] int32_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_uint16( \*idx, \*out )

Returns an unsigned 16-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_uint16( const uint8_t *idx, uint16_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] uint16_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_int16( \*idx, \*out )

Returns a signed 16-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_int16( const uint8_t *idx, int16_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] int16_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_uint8( \*idx, \*out )

Returns an unsigned 8-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_uint8( const uint8_t *idx, uint8_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] uint8_t *` output address.

Notes:

-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_int8( \*idx, \*out )

Returns a signed 8-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_int8( const uint8_t *idx, int8_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] int8_t *` output address.

Notes:

-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_complex128( \*idx, \*out )

Returns a double-precision complex floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_complex128( const uint8_t *idx, stdlib_complex128_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] stdlib_complex128_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_complex64( \*idx, \*out )

Returns a single-precision complex floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_complex64( const uint8_t *idx, stdlib_complex64_t *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] stdlib_complex64_t *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_get_ptr_bool( \*idx, \*out )

Returns a boolean ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_get_ptr_bool( const uint8_t *idx, bool *out );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t *` byte array pointer to an ndarray data element.
-   **out**: `[out] bool *` output address.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

* * *

#### stdlib_ndarray_iget( \*arr, idx, \*out )

Returns an ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget( const struct ndarray *arr, const int64_t idx, void *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] void *` output address.

Notes:

-   The function returns `-1` if unable to get an element and `0` otherwise.
-   The function requires a `void` pointer for the output address `out` in order to provide a generic API supporting ndarrays having different data types.
-   The function places the burden on the user to ensure that the output address is compatible with the data type of input ndarray data elements.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_float64( \*arr, idx, \*out )

Returns a double-precision floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_float64( const struct ndarray *arr, const int64_t idx, double *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] double *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_float32( \*arr, idx, \*out )

Returns a single-precision floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_float32( const struct ndarray *arr, const int64_t idx, float *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] float *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_uint64( \*arr, idx, \*out )

Returns an unsigned 64-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_uint64( const struct ndarray *arr, const int64_t idx, uint64_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] uint64_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_int64( \*arr, idx, \*out )

Returns a signed 64-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_int64( const struct ndarray *arr, const int64_t idx, int64_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] int64_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_uint32( \*arr, idx, \*out )

Returns an unsigned 32-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_uint32( const struct ndarray *arr, const int64_t idx, uint32_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] uint32_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_int32( \*arr, idx, \*out )

Returns a signed 32-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_int32( const struct ndarray *arr, const int64_t idx, int32_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] int32_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_uint16( \*arr, idx, \*out )

Returns an unsigned 16-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_uint16( const struct ndarray *arr, const int64_t idx, uint16_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] uint16_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_int16( \*arr, idx, \*out )

Returns a signed 16-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_int16( const struct ndarray *arr, const int64_t idx, int16_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] int16_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_uint8( \*arr, idx, \*out )

Returns an unsigned 8-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_uint8( const struct ndarray *arr, const int64_t idx, uint8_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] uint8_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_int8( \*arr, idx, \*out )

Returns a signed 8-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_int8( const struct ndarray *arr, const int64_t idx, int8_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] int8_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_complex128( \*arr, idx, \*out )

Returns a double-precision complex floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_complex128( const struct ndarray *arr, const int64_t idx, stdlib_complex128_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] stdlib_complex128_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_complex64( \*arr, idx, \*out )

Returns a single-precision complex floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_complex64( const struct ndarray *arr, const int64_t idx, stdlib_complex64_t *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] stdlib_complex64_t *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iget_bool( \*arr, idx, \*out )

Returns a boolean ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iget_bool( const struct ndarray *arr, const int64_t idx, bool *out );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **out**: `[out] bool *` output address.

Notes:

-   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
-   The function returns `-1` if unable to get an element and `0` otherwise.
-   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.

* * *

#### stdlib_ndarray_iget_ptr( \*arr, idx )

Returns a pointer in the underlying byte array for an ndarray data element located at a specified linear index.

```c
uint8_t * stdlib_ndarray_iget_ptr( const struct ndarray *arr, const int64_t idx );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.

For zero-dimensional arrays, the function returns a pointer to the first (and only) indexed element, regardless of the value of `idx`.

* * *

#### stdlib_ndarray_iset( \*arr, idx, \*v )

Sets an ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset( const struct ndarray *arr, const int64_t idx, const void *v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] void*` value to set.

Notes:

-   The function returns `-1` if unable to set an element and `0` otherwise.
-   The function requires a pointer to a data value `v` in order to provide a generic API supporting ndarrays having different data types.
-   The function has no way of determining whether `v` actually points to a memory address compatible with the underlying input ndarray data type. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_float64( \*arr, idx, v )

Sets a double-precision floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_float64( const struct ndarray *arr, const int64_t idx, const double v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] double` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_float32( \*arr, idx, v )

Sets a single-precision floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_float32( const struct ndarray *arr, const int64_t idx, const float v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] float` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_uint64( \*arr, idx, v )

Sets an unsigned 64-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_uint64( const struct ndarray *arr, const int64_t idx, const uint64_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] uint64_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_int64( \*arr, idx, v )

Sets a signed 64-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_int64( const struct ndarray *arr, const int64_t idx, const int64_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] int64_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_uint32( \*arr, idx, v )

Sets an unsigned 32-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_uint32( const struct ndarray *arr, const int64_t idx, const uint32_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] uint32_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_int32( \*arr, idx, v )

Sets a signed 32-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_int32( const struct ndarray *arr, const int64_t idx, const int32_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] int32_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_uint16( \*arr, idx, v )

Sets an unsigned 16-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_uint16( const struct ndarray *arr, const int64_t idx, const uint16_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] uint16_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_int16( \*arr, idx, v )

Sets a signed 16-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_int16( const struct ndarray *arr, const int64_t idx, const int16_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] int16_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_uint8( \*arr, idx, v )

Sets an unsigned 8-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_uint8( const struct ndarray *arr, const int64_t idx, const uint8_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] uint8_t` value to set.

Notes:

-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_int8( \*arr, idx, v )

Sets a signed 8-bit integer ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_int8( const struct ndarray *arr, const int64_t idx, const int8_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] int8_t` value to set.

Notes:

-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_complex128( \*arr, idx, v )

Sets a double-precision complex floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_complex128( const struct ndarray *arr, const int64_t idx, const stdlib_complex128_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] stdlib_complex128_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_complex64( \*arr, idx, v )

Sets a single-precision complex floating-point ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_complex64( const struct ndarray *arr, const int64_t idx, const stdlib_complex64_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] stdlib_complex64_t` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

#### stdlib_ndarray_iset_bool( \*arr, idx, v )

Sets a boolean ndarray data element located at a specified linear index.

```c
int8_t stdlib_ndarray_iset_bool( const struct ndarray *arr, const int64_t idx, const bool v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] int64_t` linear view index.
-   **v**: `[in] bool` value to set.

Notes:

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.

* * *

#### stdlib_ndarray_set( \*arr, \*sub, \*v )

Sets an ndarray data element.

```c
int8_t stdlib_ndarray_set( const struct ndarray *arr, const int64_t *sub, const void *v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] void*` value to set.

Notes

-   The function returns `-1` if unable to set an element and `0` otherwise.
-   The function requires a pointer to a data value `v` in order to provide a generic API supporting ndarrays having different data types.
-   The function has no way of determining whether `v` actually points to a memory address compatible with the underlying input ndarray data type. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.

#### stdlib_ndarray_set_float64( \*arr, \*sub, v )

Sets a double-precision floating-point ndarray data element.

```c
int8_t stdlib_ndarray_set_float64( const struct ndarray *arr, const int64_t *sub, const double v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] double` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_float32( \*arr, \*sub, v )

Sets a single-precision floating-point ndarray data element.

```c
int8_t stdlib_ndarray_set_float32( const struct ndarray *arr, const int64_t *sub, const float v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] float` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_uint64( \*arr, \*sub, v )

Sets an unsigned 64-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_uint64( const struct ndarray *arr, const int64_t *sub, const uint64_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] uint64_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_int64( \*arr, \*sub, v )

Sets a signed 64-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_int64( const struct ndarray *arr, const int64_t *sub, const int64_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] int64_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_uint32( \*arr, \*sub, v )

Sets an unsigned 32-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_uint32( const struct ndarray *arr, const int64_t *sub, const uint32_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] uint32_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_int32( \*arr, \*sub, v )

Sets a signed 32-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_int32( const struct ndarray *arr, const int64_t *sub, const int32_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] int32_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_uint16( \*arr, \*sub, v )

Sets an unsigned 16-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_uint16( const struct ndarray *arr, const int64_t *sub, const uint16_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] uint16_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_int16( \*arr, \*sub, v )

Sets a signed 16-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_int16( const struct ndarray *arr, const int64_t *sub, const int16_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] int16_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_uint8( \*arr, \*sub, v )

Sets an unsigned 8-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_uint8( const struct ndarray *arr, const int64_t *sub, const uint8_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] uint8_t` value to set.

Notes

-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_int8( \*arr, \*sub, v )

Sets a signed 8-bit integer ndarray data element.

```c
int8_t stdlib_ndarray_set_int8( const struct ndarray *arr, const int64_t *sub, const int8_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] int8_t` value to set.

Notes

-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_complex128( \*arr, \*sub, v )

Sets a double-precision complex floating-point ndarray data element.

```c
int8_t stdlib_ndarray_set_complex128( const struct ndarray *arr, const int64_t *sub, const stdlib_complex128_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] stdlib_complex128_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_complex64( \*arr, \*sub, v )

Sets a single-precision complex floating-point ndarray data element.

```c
int8_t stdlib_ndarray_set_complex64( const struct ndarray *arr, const int64_t *sub, const stdlib_complex64_t v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] stdlib_complex64_t` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

#### stdlib_ndarray_set_bool( \*arr, \*sub, v )

Sets a boolean ndarray data element.

```c
int8_t stdlib_ndarray_set_bool( const struct ndarray *arr, const int64_t *sub, const bool v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **sub**: `[in] int64_t*` ndarray subscripts.
-   **v**: `[in] bool` value to set.

Notes

-   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.

* * *

#### stdlib_ndarray_set_ptr_value( \*arr, \*idx, \*v )

Sets an ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_value( const struct ndarray *arr, uint8_t *idx, const void *v );
```

The function accepts the following arguments:

-   **arr**: `[in] struct ndarray*` input ndarray.
-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] void*` value to set.

Notes:

-   The function does **not** perform bounds checking, and, thus, the function does **not** prevent you from overwriting **unowned** memory. Accordingly, the function **assumes** you know what you are doing.
-   The function returns `-1` if unable to set an element and `0` otherwise.
-   The function requires a pointer to a data value `v` in order to provide a generic API supporting ndarrays having different data types.

#### stdlib_ndarray_set_ptr_float64( \*idx, v )

Sets a double-precision floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_float64( uint8_t *idx, const double v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] double` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_float32( \*idx, v )

Sets a single-precision floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_float32( uint8_t *idx, const float v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] float` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_uint64( \*idx, v )

Sets an unsigned 64-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_uint64( uint8_t *idx, const uint64_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] uint64_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_int64( \*idx, v )

Sets a signed 64-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_int64( uint8_t *idx, const int64_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] int64_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_uint32( \*idx, v )

Sets an unsigned 32-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_uint32( uint8_t *idx, const uint32_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] uint32_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_int32( \*idx, v )

Sets a signed 32-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_int32( uint8_t *idx, const int32_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] int32_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_uint16( \*idx, v )

Sets an unsigned 16-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_uint16( uint8_t *idx, const uint16_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] uint16_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_int16( \*idx, v )

Sets a signed 16-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_int16( uint8_t *idx, const int16_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] int16_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_uint8( \*idx, v )

Sets an unsigned 8-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_uint8( uint8_t *idx, const uint8_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] uint8_t` value to set.

Notes:

-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_int8( \*idx, v )

Sets a signed 8-bit integer ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_int8( uint8_t *idx, const int8_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] int8_t` value to set.

Notes:

-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_complex128( \*idx, v )

Sets a double-precision complex floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_complex128( uint8_t *idx, const stdlib_complex128_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] stdlib_complex128_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_complex64( \*idx, v )

Sets a single-precision complex floating-point ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_complex64( uint8_t *idx, const stdlib_complex64_t v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] stdlib_complex64_t` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

#### stdlib_ndarray_set_ptr_bool( \*idx, v )

Sets a boolean ndarray data element specified by a byte array pointer.

```c
int8_t stdlib_ndarray_set_ptr_bool( uint8_t *idx, const bool v );
```

The function accepts the following arguments:

-   **idx**: `[in] uint8_t*` byte array pointer to an ndarray data element.
-   **v**: `[in] bool` value to set.

Notes:

-   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
-   The function always returns `0`.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/base/dtype_char.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

void print_ndarray_contents( const struct ndarray *x ) {
    int64_t i;
    double v;
    int8_t s;

    for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
        s = stdlib_ndarray_iget_float64( x, i, &v ); // WARNING: assumes `x->dtype` is float64
        if ( s != 0 ) {
            printf( "Unable to resolve data element.\n" );
            exit( 1 );
        }
        printf( "data[%"PRId64"] = %f\n", i, v );
    }
}

int main( void ) {
    // Manually create an ndarray (WARNING: this is for illustration purposes only, as the fields of an ndarray are subject to change; for ABI compatibility, use utility functions for accessing ndarray data)...
    struct ndarray *x1 = malloc( sizeof( struct ndarray ) );
    if ( x1 == NULL ) {
        printf( "Error allocating memory.\n" );
        exit( 1 );
    }

    // Specify the underlying data type:
    enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;
    x1->dtype = dtype;

    // Create an underlying byte array:
    uint8_t buffer[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
    x1->data = buffer;

    // Explicitly specify the number of bytes per element:
    x1->BYTES_PER_ELEMENT = STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT;

    // Specify the array shape:
    int64_t shape[] = { 3 }; // vector consisting of 3 doubles
    x1->shape = shape;

    // Specify the array strides:
    int64_t strides[] = { x1->BYTES_PER_ELEMENT };
    x1->strides = strides;

    // Specify the byte offset:
    x1->offset = 0;

    // Specify the array order (note: this does not matter for a 1-dimensional array):
    enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
    x1->order = order;

    // Specify the index mode:
    enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
    x1->imode = imode;

    // Specify the subscript index modes:
    int8_t submodes[] = { imode };
    x1->submodes = submodes;
    x1->nsubmodes = 1;

    // Explicitly specify the number of array dimensions:
    x1->ndims = 1; // vector

    // Explicitly specify the number of array elements (doubles):
    x1->length = x1->shape[ 0 ];

    // Explicitly specify the number of bytes:
    x1->byteLength = (x1->length) * (x1->BYTES_PER_ELEMENT);

    // Explicitly set the array flags:
    x1->flags = stdlib_ndarray_flags( x1 );

    printf( "dtype = %u\n", stdlib_ndarray_dtype( x1 ) );
    printf( "length = %"PRId64"\n", stdlib_ndarray_length( x1 ) );
    printf( "byteLength = %"PRId64"\n", stdlib_ndarray_bytelength( x1 ) );
    printf( "ltr = %u\n", stdlib_ndarray_dtype_char( stdlib_ndarray_dtype( x1 ) ) );
    printf( "\n" );

    // Use the function interface to create an ndarray (NOTE: for future ABI compatibility, using the following function interface should be preferred)...
    struct ndarray *x2 = stdlib_ndarray_allocate( dtype, buffer, 1, shape, strides, 0, order, imode, 1, submodes );
    if ( x2 == NULL ) {
        printf( "Error allocating memory.\n" );
        exit( 1 );
    }

    printf( "dtype = %u\n", stdlib_ndarray_dtype( x2 ) );
    printf( "length = %"PRId64"\n", stdlib_ndarray_length( x2 ) );
    printf( "byteLength = %"PRId64"\n", stdlib_ndarray_bytelength( x2 ) );
    printf( "ltr = %u\n", stdlib_ndarray_dtype_char( stdlib_ndarray_dtype( x2 ) ) );
    printf( "\n" );

    // Set values in the underlying byte array using pointers:
    int64_t sub[] = { 0 };
    uint8_t *ptr = stdlib_ndarray_get_ptr( x2, sub );
    if ( ptr == NULL ) {
        printf( "Unable to resolve data pointer.\n" );
        exit( 1 );
    }
    *(double *)ptr = 1.0;

    sub[ 0 ] = 1;
    ptr = stdlib_ndarray_get_ptr( x2, sub );
    if ( ptr == NULL ) {
        printf( "Unable to resolve data pointer.\n" );
        exit( 1 );
    }
    *(double *)ptr = 2.0;

    sub[ 0 ] = 2;
    ptr = stdlib_ndarray_get_ptr( x2, sub );
    if ( ptr == NULL ) {
        printf( "Unable to resolve data pointer.\n" );
        exit( 1 );
    }
    *(double *)ptr = 3.0;

    // Print out the current ndarray elements:
    print_ndarray_contents( x2 );
    printf( "\n" );

    // Set values in the underlying byte array using a "generic" function:
    sub[ 0 ] = 0;
    double v = 4.0;
    int8_t status = stdlib_ndarray_set( x2, sub, (void *)&v );
    if ( status != 0 ) {
        printf( "Unable to set data element.\n" );
        exit( 1 );
    }

    sub[ 0 ] = 1;
    v = 5.0;
    status = stdlib_ndarray_set( x2, sub, (void *)&v );
    if ( status != 0 ) {
        printf( "Unable to set data element.\n" );
        exit( 1 );
    }

    sub[ 0 ] = 2;
    v = 6.0;
    status = stdlib_ndarray_set( x2, sub, (void *)&v );
    if ( status != 0 ) {
        printf( "Unable to set data element.\n" );
        exit( 1 );
    }

    // Print out the current ndarray elements:
    print_ndarray_contents( x2 );
    printf( "\n" );

    // Set values in the underlying byte array using a specialized function:
    sub[ 0 ] = 0;
    status = stdlib_ndarray_set_float64( x2, sub, 7.0 );
    if ( status != 0 ) {
        printf( "Unable to set data element.\n" );
        exit( 1 );
    }

    sub[ 0 ] = 1;
    status = stdlib_ndarray_set_float64( x2, sub, 8.0 );
    if ( status != 0 ) {
        printf( "Unable to set data element.\n" );
        exit( 1 );
    }

    sub[ 0 ] = 2;
    status = stdlib_ndarray_set_float64( x2, sub, 9.0 );
    if ( status != 0 ) {
        printf( "Unable to set data element.\n" );
        exit( 1 );
    }

    // Print out the current ndarray elements:
    print_ndarray_contents( x2 );
    printf( "\n" );

    // Free allocated memory:
    stdlib_ndarray_free( x1 );
    stdlib_ndarray_free( x2 );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray/fancy`][@stdlib/ndarray/fancy]</span><span class="delimiter">: </span><span class="description">fancy multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray/tree/main/orders

[@stdlib/ndarray/index-modes]: https://github.com/stdlib-js/ndarray/tree/main/index-modes

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray/tree/main/array

[@stdlib/ndarray/fancy]: https://github.com/stdlib-js/ndarray/tree/main/fancy

<!-- </related-links> -->

</section>

<!-- /.links -->
