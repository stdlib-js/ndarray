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

var ndarray2array = require( './../../../base/to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );
var forEach = require( './../lib' );

var x = {
	'dtype': 'generic',
	'data': zeroTo( 10 ),
	'shape': [ 5, 2 ],
	'strides': [ -2, 1 ],
	'offset': 8,
	'order': 'row-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
	'dtype': 'generic',
	'data': zeroTo( 10 ),
	'shape': [ 5, 2 ],
	'strides': [ 1, -5 ],
	'offset': 5,
	'order': 'column-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
	'dtype': 'generic',
	'data': zeroTo( 18 ),
	'shape': [ 2, 3, 3 ],
	'strides': [ 9, 3, 1 ],
	'offset': 0,
	'order': 'row-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
	'dtype': 'generic',
	'data': zeroTo( 18 ),
	'shape': [ 2, 3, 3 ],
	'strides': [ -1, -2, -6 ],
	'offset': 17,
	'order': 'column-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );
