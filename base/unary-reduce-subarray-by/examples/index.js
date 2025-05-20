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
var everyBy = require( './../../../base/every-by' );
var unaryReduceSubarrayBy = require( './../lib' );

function clbk( value ) {
	return value > -3;
}

var x = {
	'dtype': 'generic',
	'data': discreteUniform( 40, -5, 5, {
		'dtype': 'generic'
	}),
	'shape': [ 2, 5, 2, 2 ],
	'strides': [ 1, 2, 10, 20 ],
	'offset': 0,
	'order': 'column-major'
};
var y = {
	'dtype': 'generic',
	'data': filled( false, 10 ),
	'shape': [ 2, 5 ],
	'strides': [ 1, 2 ],
	'offset': 0,
	'order': 'column-major'
};

unaryReduceSubarrayBy( everyBy, [ x, y ], [ 2, 3 ], clbk );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
