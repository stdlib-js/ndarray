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

# DataType

> Data type constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var DataType = require( '@stdlib/ndarray/dtype-ctor' );
```

#### DataType( value\[, options] )

Returns a data type instance.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>
```

The constructor supports the following parameters:

-   **value**: data type value. Must be either a supported [data type][@stdlib/ndarray/dtypes] string, a [struct][@stdlib/dstructs/struct] constructor, or another data type instance.
-   **options**: constructor options (_optional_).

The constructor supports the following options:

-   **description**: data type description.

* * *

## Properties

#### DataType.prototype.alignment

Alignment (in bytes) for the data type.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.alignment;
// returns 8
```

If a data type does not have a known alignment, the returned value is `-1`.

#### DataType.prototype.byteLength

Size (in bytes) for the data type.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.byteLength;
// returns 8
```

If a data type does not have a known size, the returned value is `-1`.

#### DataType.prototype.byteOrder

Data type byte order.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.byteOrder;
// returns 'host'
```

The byte order may be one of the following values:

-   **host**: host platform byte order.
-   **little-endian**: little-endian byte order.
-   **big-endian**: big-endian byte order.

#### DataType.prototype.char

Single letter character abbreviation for the data type.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.char;
// returns 'd'
```

If a data type does not have a corresponding single letter character abbreviation, the returned value is an empty string.

#### DataType.prototype.description

Data type description.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.description;
// returns '...'
```

If a data type does not have an associated description, the returned value is an empty string.

#### DataType.prototype.enum

Enumeration constant for the data type.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.enum;
// returns <number>
```

If a data type does not have a corresponding known enumeration constant, the returned value is the enumeration constant for a user-defined data type.

**Note**: enumeration constants should be treated as **opaque** values. One should **not** assume that a data type has a specific enumeration constant value.

#### DataType.prototype.value

Raw (original) data type value.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var v = dt.value;
// returns 'float64'
```

* * *

## Methods

#### DataType.prototype.toJSON()

Returns a [JSON][json] representation of a `DataType` instance.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var o = dt.toJSON();
// e.g., returns { 'type': 'DataType', 'value': 'float64', 'byteOrder': 'host', ... }
```

[`JSON.stringify()`][mdn-json-stringify] implicitly calls this method when stringifying a `DataType` instance.

#### DataType.prototype.toString()

Returns a string representation of a `DataType` instance.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var str = dt.toString();
// returns 'float64'
```

#### DataType.prototype.valueOf()

Converts a `DataType` instance to a primitive value.

```javascript
var dt = new DataType( 'float64' );
// returns <DataType>

var str = dt.valueOf();
// returns 'float64'
```

This method returns the same value as `#.toString()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

* * *

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var DataType = require( '@stdlib/ndarray/dtype-ctor' );

var dt = new DataType( 'complex128' );

console.log( 'type: %s', typeof dt );
// => 'type: object'

console.log( 'alignment: %d', dt.alignment );
// => 'alignment: 8'

console.log( 'byteLength: %d', dt.byteLength );
// => 'byteLength: 16'

console.log( 'byteOrder: %s', dt.byteOrder );
// => 'byteOrder: host'

console.log( 'char: %s', dt.char );
// => 'char: z'

console.log( 'JSON: %s', JSON.stringify( dt ) );
// e.g., => 'JSON: {"type": "DataType","value":"complex128","byteOrder":"host",...}'
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

[json]: http://www.json.org/

[mdn-json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray/tree/main/dtypes

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

</section>

<!-- /.links -->
