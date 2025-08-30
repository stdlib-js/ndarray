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

var zeros = require( './../../zeros' );
var ndarray2array = require( './../../to-array' );
var ndarrayWith = require( './../lib' );

var x = zeros( [ 1, 3, 3 ], {
	'dtype': 'float64'
});

var out = ndarrayWith( x, [ 0, 1, 1 ], 10.0 );
console.log( ndarray2array( out ) );
