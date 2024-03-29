/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var dtypes = require( './../../../dtypes' );
var nullaryBlockSize = require( './../lib' );

// Get the list of ndarray dtypes:
var dt = dtypes();

// Resolve the block size for each dtype...
var b;
var i;
console.log( 'block_size, xdtype' );
for ( i = 0; i < dt.length; i++ ) {
	b = nullaryBlockSize( dt[ i ] );
	console.log( '%d, %s', b, dt[ i ] );
}
