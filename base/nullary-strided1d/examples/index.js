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

/* eslint-disable max-len */

'use strict';

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( './../../../base/to-array' );
var numelDimension = require( './../../../base/numel-dimension' );
var getData = require( './../../../base/data-buffer' );
var getStride = require( './../../../base/stride' );
var getOffset = require( './../../../base/offset' );
var ndarraylike2scalar = require( './../../../base/ndarraylike2scalar' );
var gsorthp = require( '@stdlib/blas/ext/base/gsorthp' ).ndarray;
var nullaryStrided1d = require( './../lib' );

function wrapper( arrays ) {
	var x = arrays[ 0 ];
	var o = arrays[ 1 ];
	return gsorthp( numelDimension( x, 0 ), ndarraylike2scalar( o ), getData( x ), getStride( x, 0 ), getOffset( x ) );
}

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
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var sortOrder = {
	'dtype': 'generic',
	'data': [ 1.0 ],
	'shape': [ 2 ],
	'strides': [ 0 ],
	'offset': 0,
	'order': 'row-major'
};

nullaryStrided1d( wrapper, [ x, sortOrder ], [ 0, 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
