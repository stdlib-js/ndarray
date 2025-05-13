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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var filled = require( '@stdlib/array/base/filled' );
var ndarray2array = require( './../../../base/to-array' );
var every = require( './../../../base/every' );
var unaryReduceSubarray = require( './../lib' );

var N = 10;
var x = {
	'dtype': 'generic',
	'data': discreteUniform( N, -5, 5, {
		'dtype': 'generic'
	}),
	'shape': [ 1, 5, 2 ],
	'strides': [ 10, 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};
var y = {
	'dtype': 'generic',
	'data': filled( false, 2 ),
	'shape': [ 1, 2 ],
	'strides': [ 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};

unaryReduceSubarray( every, [ x, y ], [ 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
