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

var shape2strides = require( './../../../base/shape2strides' );
var strides2offset = require( './../../../base/strides2offset' );
var numel = require( './../../../base/numel' );
var randu = require( '@stdlib/random/base/randu' );
var vind2bind = require( './../lib' );

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'row-major';

// Compute array meta data:
var len = numel( shape );
var strides = shape2strides( shape, order );

// Randomly flip the sign of strides...
var i;
for ( i = 0; i < shape.length; i++ ) {
	if ( randu() < 0.5 ) {
		strides[ i ] *= -1;
	}
}

// Compute the underlying data buffer index offset:
var offset = strides2offset( shape, strides );

// Print array info:
console.log( 'Dims: %s', shape.join( 'x' ) );
console.log( 'Strides: %s', strides.join( ',' ) );
console.log( 'Offset: %d', offset );

// For each view index, determine the corresponding index into an array's underlying data buffer...
var ind;
for ( i = 0; i < len; i++ ) {
	ind = vind2bind( shape, strides, offset, order, i, 'throw' );
	console.log( 'view[%d] => buffer[%d]', i, ind );
}
