/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isComplexDataType = require( '@stdlib/array/base/assert/is-complex-floating-point-data-type' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var setter = require( '@stdlib/array/base/setter' );
var zeros = require( '@stdlib/array/base/zeros' );
var buffer = require( './../../../base/buffer' );
var ndarray = require( './../../../base/ctor' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param {*} value - scalar value
* @param {string} dtype - output array data type
* @param {NonNegativeIntegerArray} shape - output array shape
* @param {string} order - memory layout (either row-major or column-major)
* @throws {TypeError} second argument must be a recognized data type
* @returns {ndarray} ndarray
*
* @example
* var x = broadcastScalar( 1.0, 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var v = x.get( 0, 1 );
* // returns 1.0
*/
function broadcastScalar( value, dtype, shape, order ) {
	var buf;
	var set;
	var N;

	buf = buffer( dtype, 1 );
	if ( buf === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a recognized data type. Value: `%s`.', dtype ) );
	}
	if ( isComplexDataType( dtype ) && isNumber( value ) ) {
		value = [ value, 0.0 ]; // note: we're assuming that the ComplexXXArray setter accepts an array of interleaved real and imaginary components
	}
	if ( isAccessorArray( buf ) ) {
		set = accessorSetter( dtype );
	} else {
		set = setter( dtype );
	}
	set( buf, 0, value );
	N = shape.length || 1;
	return new ndarray( dtype, buf, shape, zeros( N ), 0, order );
}


// EXPORTS //

module.exports = broadcastScalar;
