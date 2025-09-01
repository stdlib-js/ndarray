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

/* eslint-disable stdlib/no-redeclare */

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( './../../../base/to-array' );
var find = require( './../lib' );

function isEven( value ) {
	return value % 2.0 === 0.0;
}

var x = {
	'dtype': 'float64',
	'data': discreteUniform( 10, 0.0, 10.0, {
		'dtype': 'float64'
	}),
	'shape': [ 5, 2 ],
	'strides': [ 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var sv = {
	'dtype': 'float64',
	'data': new Float64Array( [ NaN ] ),
	'shape': [],
	'strides': [ 0 ],
	'offset': 0,
	'order': x.order
};
console.log( 'Sentinel Value: %d', sv.data[ 0 ] );

var out = find( [ x, sv ], isEven );
console.log( out );
