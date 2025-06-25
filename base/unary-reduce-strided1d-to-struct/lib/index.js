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

/**
* Perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function and assign results to a provided output ndarray.
*
* @module @stdlib/ndarray/base/unary-reduce-strided1d-to-struct
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
* var unaryReduceStrided1d = require( '@stdlib/ndarray/base/unary-reduce-strided1d-to-struct' );
*
* var ResultsArray = structFactory( Float64Results );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new ResultsArray( 3 );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': Float64Results,
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create additional parameter ndarray-like objects:
* var alternative = {
*     'dtype': 'generic',
*     'data': [ 'two-sided' ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unaryReduceStrided1d( ztest, [ x, y, alternative, alpha, mu, sigma ], [ 2, 3 ] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ <Float64Results>, <Float64Results>, <Float64Results> ] ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var base = require( '@stdlib/stats/base/ndarray/ztest' );
* var unaryReduceStrided1d = require( '@stdlib/ndarray/base/unary-reduce-strided1d-to-struct' );
*
* var ResultsArray = structFactory( Float64Results );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new ResultsArray( 3 );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': Float64Results,
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create additional parameter ndarray-like objects:
* var alternative = {
*     'dtype': 'generic',
*     'data': [ 'two-sided' ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Create a function for performing a reduction over subarrays:
* var ztest = unaryReduceStrided1d.factory( base );
* // returns <Function>
*
* // Perform a reduction:
* ztest( [ x, y, alternative, alpha, mu, sigma ], [ 2, 3 ] );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ <Float64Results>, <Float64Results>, <Float64Results> ] ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

// exports: { "factory": "main.factory" }
