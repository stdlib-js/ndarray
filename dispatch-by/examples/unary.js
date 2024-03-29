/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var naryFunction = require( '@stdlib/utils/nary-function' );
var unaryBy = require( './../../base/unary-by' );
var ndarray = require( './../../ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var abs = require( '@stdlib/math/base/special/abs' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var dispatchBy = require( './../lib' );

var types = [ 'float64', 'float64' ];

var data = [
	sqrt
];

var fcn = dispatchBy( unaryBy, types, data, 3, 1, 1 );

var xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

fcn( x, y, naryFunction( abs, 1 ) );
console.log( ybuf );
// => <Float64Array>[ 1.0, ~1.414, ~1.732, 2.0, ~2.236 ]
