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

// MODULES //

var strides2offset = require( './../../../base/strides2offset' );
var getDType = require( './../../../base/dtype' );
var getShape = require( './../../../base/shape' );
var getStrides = require( './../../../base/strides' );
var getOrder = require( './../../../base/order' );
var getData = require( './../../../base/data-buffer' );


// MAIN //

/**
* Transpose a matrix (or a stack of matrices).
*
* @param {ndarray} x - input array
* @throws {Error} must provide an array with two or more dimensions
* @returns {ndarray} ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 3 ]
*
* var y = transpose( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* var bool = ( x.data === y.data );
* // returns true
*
* bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
* // returns true
*/
function transpose( x ) {
	var tmp;
	var sh;
	var st;
	var N;

	sh = getShape( x, true );
	N = sh.length;
	if ( N < 2 ) {
		throw new Error( 'invalid argument. Must provide an ndarray having two or more dimensions.' );
	}
	st = getStrides( x, true );

	tmp = sh[ N-2 ];
	sh[ N-2 ] = sh[ N-1 ];
	sh[ N-1 ] = tmp;

	tmp = st[ N-2 ];
	st[ N-2 ] = st[ N-1 ];
	st[ N-1 ] = tmp;

	// FIXME: handling of offset seems incorrect. Should also handle READ-ONLY arrays.
	return new x.constructor( getDType( x ), getData( x ), sh, st, strides2offset( sh, st ), getOrder( x ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = transpose;
