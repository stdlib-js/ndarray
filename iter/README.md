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

# Iterators

> Multidimensional array iterators.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray/iter' );
```

#### ns

Namespace containing utilities for iterating over multidimensional arrays.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`nditerColumnEntries( x[, options] )`][@stdlib/ndarray/iter/column-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, column]` pairs for each column in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerColumns( x[, options] )`][@stdlib/ndarray/iter/columns]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each column in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerEntries( x[, options] )`][@stdlib/ndarray/iter/entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, value]` pairs for each element in a provided `ndarray`.</span>
-   <span class="signature">[`nditerIndices( shape[, options] )`][@stdlib/ndarray/iter/indices]</span><span class="delimiter">: </span><span class="description">create an iterator which returns indices for use indexing into an `ndarray` having a specified shape.</span>
-   <span class="signature">[`nditerMatrices( x[, options] )`][@stdlib/ndarray/iter/matrices]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each matrix in a stack of matrices.</span>
-   <span class="signature">[`nditerMatrixEntries( x[, options] )`][@stdlib/ndarray/iter/matrix-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.</span>
-   <span class="signature">[`nditerRowEntries( x[, options] )`][@stdlib/ndarray/iter/row-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, row]` pairs for each row in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerRows( x[, options] )`][@stdlib/ndarray/iter/rows]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each row in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditer2arrayEach( iterator )`][@stdlib/ndarray/iter/to-array-each]</span><span class="delimiter">: </span><span class="description">create an iterator which converts each iterated `ndarray` to a generic array.</span>
-   <span class="signature">[`nditerValues( x[, options] )`][@stdlib/ndarray/iter/values]</span><span class="delimiter">: </span><span class="description">create an iterator which returns individual elements from a provided `ndarray`.</span>

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
var ns = require( '@stdlib/ndarray/iter' );

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

[@stdlib/ndarray/iter/column-entries]: https://github.com/stdlib-js/ndarray/tree/main/iter/column-entries

[@stdlib/ndarray/iter/columns]: https://github.com/stdlib-js/ndarray/tree/main/iter/columns

[@stdlib/ndarray/iter/entries]: https://github.com/stdlib-js/ndarray/tree/main/iter/entries

[@stdlib/ndarray/iter/indices]: https://github.com/stdlib-js/ndarray/tree/main/iter/indices

[@stdlib/ndarray/iter/matrices]: https://github.com/stdlib-js/ndarray/tree/main/iter/matrices

[@stdlib/ndarray/iter/matrix-entries]: https://github.com/stdlib-js/ndarray/tree/main/iter/matrix-entries

[@stdlib/ndarray/iter/row-entries]: https://github.com/stdlib-js/ndarray/tree/main/iter/row-entries

[@stdlib/ndarray/iter/rows]: https://github.com/stdlib-js/ndarray/tree/main/iter/rows

[@stdlib/ndarray/iter/to-array-each]: https://github.com/stdlib-js/ndarray/tree/main/iter/to-array-each

[@stdlib/ndarray/iter/values]: https://github.com/stdlib-js/ndarray/tree/main/iter/values

<!-- </toc-links> -->

</section>

<!-- /.links -->
