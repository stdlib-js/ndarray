
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

var isComplexDataType = require( './../../base/assert/is-complex-floating-point-data-type' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( './../../base/assert/is-read-only' );
var getDType = require( './../../dtype' );
var getShape = require( './../../shape' );
var getStrides = require( './../../strides' );
var getOffset = require( './../../offset' );
var getOrder = require( './../../order' );
var numel = require( './../../base/numel' );
var ind2sub = require( './../../base/ind2sub' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'toJSON' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}


// MAIN //

/**
* Serializes an ndarray as a JSON object.
*
* ## Notes
*
* -   The function does **not** serialize data outside of the buffer region defined by the ndarray view.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray-like object
* @returns {Object} JSON representation
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var o = toJSON( x );
* // returns {...}
*/
function toJSON( x ) {
	var out;
	var len;
	var sh;
	var st;
	var o;
	var v;
	var i;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	// Defer to input argument's custom implementation, if already defined...
	if ( hasMethod( x, 'toJSON' ) ) {
		return x.toJSON();
	}
	// Build an object containing all ndarray properties needed to revive a serialized ndarray...
	out = {};
	out.type = 'ndarray';
	out.dtype = getDType( x );
	out.flags = {
		'READONLY': isReadOnly( x )
	};
	out.order = getOrder( x );

	sh = getShape( x );
	out.shape = sh;

	st = getStrides( x );
	out.strides = st.slice();

	o = getOffset( x );

	len = numel( out.shape );

	// Flip the signs of negative strides:
	for ( i = 0; i < st.length; i++ ) {
		if ( out.strides[ i ] < 0 ) {
			out.strides[ i ] *= -1;
		}
	}
	// Cast data to generic array...
	out.data = [];
	if ( isComplexDataType( out.dtype ) ) {
		for ( i = 0; i < len; i++ ) {
			v = x.get.apply( x, ind2sub( sh, st, o, out.order, i, 'throw' ) );
			out.data.push( real( v ), imag( v ) );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			out.data.push( x.get.apply( x, ind2sub( sh, st, o, out.order, i, 'throw' ) ) );
		}
	}
	return out;
}


// EXPORTS //

module.exports = toJSON;
