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

var isReadOnly = require( './../../../base/assert/is-read-only' );
var getDType = require( './../../../base/dtype' );
var getShape = require( './../../../base/shape' );
var getStrides = require( './../../../base/strides' );
var getOffset = require( './../../../base/offset' );
var getOrder = require( './../../../base/order' );
var getData = require( './../../../base/data-buffer' );


// MAIN //

/**
* Returns an array without singleton dimensions.
*
* ## Notes
*
* -   If a provided ndarray does not have any singleton dimensions, the function returns the provided ndarray unchanged.
* -   If a provided ndarray does have singleton dimensions, the function returns a new ndarray view.
*
* @param {ndarray} x - input array
* @returns {ndarray} squeezed array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
*     'ndmin': 5
* });
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 1, 1, 1, 2, 2 ]
*
* var y = removeSingletonDimensions( x );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 2, 2 ]
*
* var v = y.get( 0, 0 );
* // returns 1
*
* v = y.get( 0, 1 );
* // returns 2
*
* v = y.get( 1, 0 );
* // returns 3
*
* v = y.get( 1, 1 );
* // returns 4
*/
function removeSingletonDimensions( x ) {
	var strides;
	var shape;
	var sh;
	var st;
	var N;
	var i;

	sh = getShape( x, false );
	st = getStrides( x, false );
	N = sh.length;

	strides = [];
	shape = [];

	// Check for singleton dimensions...
	for ( i = 0; i < N; i++ ) {
		if ( sh[ i ] !== 1 ) {
			shape.push( sh[ i ] );
			strides.push( st[ i ] );
		}
	}
	if ( shape.length === N ) {
		// We did not find any singleton dimensions...
		return x;
	}
	if ( isReadOnly( x ) ) {
		// If provided a read-only view, the returned array should also be read-only...
		return new x.constructor( getDType( x ), getData( x ), shape, strides, getOffset( x ), getOrder( x ), { // eslint-disable-line max-len
			'readonly': true
		});
	}
	return new x.constructor( getDType( x ), getData( x ), shape, strides, getOffset( x ), getOrder( x ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = removeSingletonDimensions;
