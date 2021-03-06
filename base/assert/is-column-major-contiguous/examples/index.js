/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var shape2strides = require( './../../../../base/shape2strides' );
var strides2offset = require( './../../../../base/strides2offset' );
var randu = require( '@stdlib/random/base/randu' );
var isColumnMajorContiguous = require( './../lib' );

var strides;
var offset;
var shape;
var bool;
var i;
var j;

shape = [ 0, 0, 0 ];

for ( i = 0; i < 100; i++ ) {
	// Generate a random array shape:
	shape[ 0 ] = discreteUniform( 1, 10 );
	shape[ 1 ] = discreteUniform( 1, 10 );
	shape[ 2 ] = discreteUniform( 1, 10 );

	// Generate strides:
	if ( randu() < 0.5 ) {
		strides = shape2strides( shape, 'row-major' );
	} else {
		strides = shape2strides( shape, 'column-major' );
	}
	j = discreteUniform( 0, shape.length-1 );
	strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;

	strides[ 0 ] *= discreteUniform( 1, 2 ); // if scaled by 1, then single segment

	// Compute the index offset:
	offset = strides2offset( shape, strides ) + 25; // include a view offset

	// Determine if the array is column-major contiguous:
	bool = isColumnMajorContiguous( shape, strides, offset );
	console.log( 'Shape: %s. Strides: %s. Offset: %d. Contiguous: %s.', shape.join( 'x' ), strides.join( ',' ), offset, bool );
}
