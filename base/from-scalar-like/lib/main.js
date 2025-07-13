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

// MODULES //

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isAccessorArray = require( '@stdlib/array/base/assert/is-accessor-array' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var setter = require( '@stdlib/array/base/setter' );
var getDType = require( './../../../base/dtype' );
var getOrder = require( './../../../base/order' );
var emptyArray = require( '@stdlib/array/empty' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );


// MAIN //

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided ndarray.
*
* @param {ndarray} x - input array
* @param {*} value - scalar value
* @throws {TypeError} first argument must have a recognized data type
* @returns {ndarray} ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'float32'
*
* var v = y.get();
* // returns 1.0
*/
function scalar2ndarrayLike( x, value ) {
	var buf;
	var set;
	var dt;

	dt = getDType( x );
	if ( dt === 'binary' ) {
		buf = allocUnsafe( 1 );
	} else {
		buf = emptyArray( 1, dt );
	}
	if ( /^complex/.test( dt ) && isNumber( value ) ) {
		value = [ value, 0.0 ]; // note: we're assuming that the ComplexXXArray setter accepts an array of interleaved real and imaginary components
	}
	if ( isAccessorArray( buf ) ) {
		set = accessorSetter( dt );
	} else {
		set = setter( dt );
	}
	set( buf, 0, value );
	return new x.constructor( dt, buf, [], [ 0 ], 0, getOrder( x ) );
}


// EXPORTS //

module.exports = scalar2ndarrayLike;
