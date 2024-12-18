/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Convert an ndarray to an object supporting fancy indexing.
*
* @module @stdlib/ndarray/to-fancy
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2fancy = require( '@stdlib/ndarray/to-fancy' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = ndarray2fancy( x );
* // returns <ndarray>
*
* var v = y[ '1:,:' ];
* // returns <ndarray>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var ndindex = require( '@stdlib/utils/noop' ); // FIXME: update once we support ndarray indices
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );
setReadOnly( main, 'idx', ndindex );


// EXPORTS //

module.exports = main;
