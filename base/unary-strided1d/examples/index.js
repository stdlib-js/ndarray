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
var zeros = require( '@stdlib/array/base/zeros' );
var ndarray2array = require( './../../../base/to-array' );
var numelDimension = require( './../../../base/numel-dimension' );
var getData = require( './../../../base/data-buffer' );
var getStride = require( './../../../base/stride' );
var getOffset = require( './../../../base/offset' );
var ndarraylike2scalar = require( './../../../base/ndarraylike2scalar' );
var gcusum = require( '@stdlib/blas/ext/base/gcusum' ).ndarray;
var unaryStrided1d = require( './../lib' );

function wrapper( arrays ) {
	var x = arrays[ 0 ];
	var y = arrays[ 1 ];
	var s = arrays[ 2 ];
	return gcusum( numelDimension( x, 0 ), ndarraylike2scalar( s ), getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) );
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
var initial = {
	'dtype': 'generic',
	'data': [ 0.0 ],
	'shape': [ 1, 2 ],
	'strides': [ 0, 0 ],
	'offset': 0,
	'order': 'row-major'
};
var y = {
	'dtype': 'generic',
	'data': zeros( N ),
	'shape': [ 1, 5, 2 ],
	'strides': [ 10, 2, 1 ],
	'offset': 0,
	'order': 'row-major'
};

unaryStrided1d( wrapper, [ x, y, initial ], [ 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
