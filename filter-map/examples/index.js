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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( './../../to-array' );
var array = require( './../../array' );
var filterMap = require( './../lib' );

function fcn( v ) {
	if ( v > 0 ) {
		return v * 100;
	}
}

var buffer = discreteUniform( 10, -100, 100, {
	'dtype': 'generic'
});
var x = array( buffer, {
	'shape': [ 5, 2 ],
	'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var y = filterMap( x, fcn );
console.log( ndarray2array( y ) );
