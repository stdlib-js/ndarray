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

var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var ndarray = require( './../../ctor' );
var ndarray2json = require( './../lib' );

// Create a data buffer:
var buffer = zeroTo( 27 );

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'column-major';
var ndims = shape.length;

// Compute array meta data:
var strides = shape2strides( shape, order );
var offset = strides2offset( shape, strides );

// Print array information:
console.log( '' );
console.log( 'Dims: %s', shape.join( 'x' ) );

// Randomly flip strides and convert an ndarray to JSON...
var arr;
var i;
for ( i = 0; i < 20; i++ ) {
	strides[ discreteUniform( 0, ndims-1 ) ] *= -1;
	offset = strides2offset( shape, strides );

	console.log( '' );
	console.log( 'Strides: %s', strides.join( ',' ) );
	console.log( 'Offset: %d', offset );

	arr = ndarray( 'generic', buffer, shape, strides, offset, order );
	console.log( JSON.stringify( ndarray2json( arr ) ) );
}
