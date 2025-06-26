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

var normal = require( '@stdlib/random/array/normal' );
var ndarray2array = require( './../../../base/to-array' );
var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var structFactory = require( '@stdlib/array/struct-factory' );
var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
var unaryReduceStrided1d = require( './../lib' );

var ResultsArray = structFactory( Float64Results );

var N = 10;
var x = {
	'dtype': 'generic',
	'data': normal( N, 0.0, 1.0, {
		'dtype': 'generic'
	}),
	'shape': [ 1, 5, 2 ],
	'strides': [ 10, 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};
var y = {
	'dtype': Float64Results,
	'data': new ResultsArray( 2 ),
	'shape': [ 1, 2 ],
	'strides': [ 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};
var alternative = {
	'dtype': 'generic',
	'data': [ 'two-sided' ],
	'shape': [ 1, 2 ],
	'strides': [ 0, 0 ],
	'offset': 0,
	'order': 'row-major'
};
var alpha = {
	'dtype': 'generic',
	'data': [ 0.05 ],
	'shape': [ 1, 2 ],
	'strides': [ 0, 0 ],
	'offset': 0,
	'order': 'row-major'
};
var mu = {
	'dtype': 'generic',
	'data': [ 0.0 ],
	'shape': [ 1, 2 ],
	'strides': [ 0, 0 ],
	'offset': 0,
	'order': 'row-major'
};
var sigma = {
	'dtype': 'generic',
	'data': [ 1.0 ],
	'shape': [ 1, 2 ],
	'strides': [ 0, 0 ],
	'offset': 0,
	'order': 'row-major'
};

unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [ 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
