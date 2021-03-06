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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var buffer = require( './../../base/buffer' );
var ndarray = require( './../../ctor' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If `dtype` is not provided and `value`
*
*     -   is a `number`, the default data type is `'float64'`.
*     -   is a complex number object, the default data type is `'complex128'`.
*     -   is any other value type, the default data type is `'generic'`.
*
* @param {*} value - scalar value
* @param {string} [dtype] - output array data type
* @throws {TypeError} second argument must be a recognized data type
* @returns {ndarray} ndarray
*
* @example
* var x = scalar2ndarray( 1.0 );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float64'
*
* var v = x.get();
* // returns 1.0
*
* @example
* var x = scalar2ndarray( 1.0, 'float32' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float32'
*
* var v = x.get();
* // returns 1.0
*/
function scalar2ndarray( value, dtype ) {
	var buf;
	var flg;
	var dt;
	var v;
	var o;

	flg = isNumber( value );
	if ( arguments.length < 2 ) {
		if ( flg ) {
			dt = 'float64';
		} else if ( isComplexLike( value ) ) {
			dt = 'complex128';
		} else {
			dt = 'generic';
		}
	} else {
		dt = dtype;
	}
	buf = buffer( dt, 1 );
	if ( buf === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a recognized data type. Value: `%s`.', dt ) );
	}
	if ( /^complex/.test( dt ) && flg ) {
		v = [ value, 0.0 ]; // note: we're assuming that the ComplexXXArray setter accepts an array of interleaved real and imaginary components
	} else {
		v = value;
	}
	o = arraylike2object( buf );
	o.setter( buf, 0, v );
	return new ndarray( dt, buf, [], [ 0 ], 0, 'row-major' );
}


// EXPORTS //

module.exports = scalar2ndarray;
