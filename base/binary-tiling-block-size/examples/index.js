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
var cartesianSquare = require( '@stdlib/array/base/cartesian-square' );
var promotionRules = require( './../../../promotion-rules' );
var binaryBlockSize = require( './../lib' );

// Generate a list of input ndarray dtype pairs:
var dt = cartesianSquare( dtypes() );

// Resolve the block size for each dtype pair and its promoted dtype...
var t;
var b;
var i;
console.log( 'block_size, xdtype, ydtype, zdtype' );
for ( i = 0; i < dt.length; i++ ) {
	t = promotionRules.apply( null, dt[ i ] );
	dt[ i ].push( ( t === -1 ) ? 'generic' : t );
	b = binaryBlockSize.apply( null, dt[ i ] );
	console.log( '%d, %s, %s, %s', b, dt[i][0], dt[i][1], dt[i][2] );
}
