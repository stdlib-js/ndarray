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

var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var ndarray2array = require( './../../to-array' );
var fillBy = require( './../../fill-by' );
var zeros = require( './../../zeros' );
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var countIf = require( './../lib' );

var x = zeros( [ 2, 4, 5 ], {
	'dtype': 'float64'
});
x = fillBy( x, bernoulli( 0.90 ) );
console.log( ndarray2array( x ) );

var y = countIf( x, isPositiveNumber );
console.log( 'countIf(x[:,:,:]) =' );
console.log( y.get() );

var opts = {
	'dims': [ 0 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,j,k]) =' );
console.log( ndarray2array( y ) );

opts = {
	'dims': [ 1 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[i,:,k]) =' );
console.log( ndarray2array( y ) );

opts = {
	'dims': [ 2 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[i,j,:]) =' );
console.log( ndarray2array( y ) );

opts = {
	'dims': [ 0, 1 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,:,k]) =' );
console.log( ndarray2array( y ) );

opts = {
	'dims': [ 0, 2 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,j,:]) =' );
console.log( ndarray2array( y ) );

opts = {
	'dims': [ 1, 2 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[i,:,:]) =' );
console.log( ndarray2array( y ) );

opts = {
	'dims': [ 0, 1, 2 ],
	'keepdims': true
};
y = countIf( x, opts, isPositiveNumber );
console.log( 'countIf(x[:,:,:]) =' );
console.log( ndarray2array( y ) );
