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

var cartesianProduct = require( '@stdlib/array/cartesian-product' );
var zeroTo = require( '@stdlib/array/zero-to' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var array = require( './../../array' );
var at = require( './../lib' );

// Define a two-dimensional array:
var shape = [ 5, 5 ];
var x = array( discreteUniform( 25, -100, 100 ), {
	'shape': shape
});

// Define lists of dimension indices:
var i0 = zeroTo( shape[ 0 ], 'generic' );
var i1 = zeroTo( shape[ 1 ], 'generic' );

// Create a list of index pairs:
var indices = cartesianProduct( i0, i1 );

// Print array contents...
var idx;
var i;
for ( i = 0; i < x.length; i++ ) {
	idx = indices[ i ];
	console.log( 'x[%d,%d] = %d', idx[ 0 ], idx[ 1 ], at( x, idx[ 0 ], idx[ 1 ] ) );
}
