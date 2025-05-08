/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var add = require( '@stdlib/number/float64/base/add' );
var shape2strides = require( './../../../base/shape2strides' );
var ndarray2array = require( './../../../base/to-array' );
var binary = require( './../lib' );

var N = 10;
var x = {
	'dtype': 'generic',
	'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
	'shape': [ 5, 2 ],
	'strides': [ 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var y = {
	'dtype': 'generic',
	'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
	'shape': x.shape.slice(),
	'strides': shape2strides( x.shape, 'column-major' ),
	'offset': 0,
	'order': 'column-major'
};
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );

var z = {
	'dtype': 'generic',
	'data': filledarray( 0, N, 'generic' ),
	'shape': x.shape.slice(),
	'strides': shape2strides( x.shape, 'column-major' ),
	'offset': 0,
	'order': 'column-major'
};

binary( [ x, y, z ], add );
console.log( ndarray2array( z.data, z.shape, z.strides, z.offset, z.order ) );
