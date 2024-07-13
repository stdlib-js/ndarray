/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var castReturn = require( '@stdlib/complex/base/cast-return' );
var complexCtors = require( '@stdlib/complex/ctors' );
var bufferCtors = require( './../../base/buffer-ctors' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var ndarray = require( './../../base/ctor' );
var getDType = require( './../../dtype' );
var getShape = require( './../../shape' );
var getStrides = require( './../../strides' );
var getOffset = require( './../../offset' );
var getOrder = require( './../../order' );
var getData = require( './../../data-buffer' );


// FUNCTIONS //

/**
* Copies a "generic" ndarray view.
*
* @private
* @param {ndarray} arr - input ndarray
* @returns {Array} output data buffer
*/
function generic( arr ) {
	var len;
	var out;
	var i;

	len = arr.length;
	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( arr.iget( i ) ); // as output buffer is generic, should work with both real- and complex-valued ndarrays
	}
	return out;
}

/**
* Copies a "binary" ndarray view.
*
* @private
* @param {ndarray} arr - input ndarray
* @returns {Array} output data buffer
*/
function binary( arr ) {
	var len;
	var out;
	var i;

	len = arr.length;
	out = allocUnsafe( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = arr.iget( i ); // we're assuming that we're doing something sensible here (e.g., not trying to cast a complex-valued ndarray to a "binary" ndarray or a double-precision floating-point ndarray to binary, etc)
	}
	return out;
}

/**
* Copies a "typed" ndarray view.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {string} dtype - data type
* @returns {Array} output data buffer
*/
function typed( arr, dtype ) {
	var ctor;
	var len;
	var out;
	var set;
	var fcn;
	var o;
	var i;

	ctor = bufferCtors( dtype );
	len = arr.length;
	out = new ctor( len );

	// If the output data buffer is a complex number array, we need to use accessors...
	o = arraylike2object( out );
	if ( o.accessorProtocol ) {
		set = o.accessors[ 1 ];
		fcn = castReturn( wrapper, 1, complexCtors( dtype ) );
		for ( i = 0; i < len; i++ ) {
			set( out, i, fcn( i ) ); // we're assuming that we're doing something sensible here (e.g., not trying to cast arbitrary objects to complex numbers, etc)
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			out[ i ] = arr.iget( i ); // we're assuming that we're doing something sensible here (e.g., not trying to cast an ndarray containing generic objects to a double-precision floating-point array or a complex-valued ndarray to a real-valued ndarray, etc)
		}
	}
	return out;

	/**
	* Returns the ndarray element specified by a provided linear index.
	*
	* @private
	* @param {NonNegativeInteger} i - linear index
	* @returns {*} value
	*/
	function wrapper( i ) {
		return arr.iget( i );
	}
}


// MAIN //

/**
* Copies an ndarray view to a data buffer.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {string} dtype - data type
* @returns {(Array|TypedArray|Buffer)} output data buffer
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1.0, 2.0, 3.0 ];
* var shape = [ 3 ];
* var strides = [ -1 ];
* var vec = ndarray( 'generic', buffer, shape, strides, 2, 'row-major' );
*
* var b = copyView( vec, 'float64' );
* // returns <Float64Array>[ 3.0, 2.0, 1.0 ]
*/
function copyView( arr, dtype ) {
	var x;

	// Create a new "base" view, thus ensuring we have an `.iget` method and associated meta data...
	x = new ndarray( getDType( arr ), getData( arr ), getShape( arr ), getStrides( arr ), getOffset( arr ), getOrder( arr ) ); // eslint-disable-line max-len

	if ( dtype === 'generic') {
		return generic( x );
	}
	if ( dtype === 'binary' ) {
		return binary( x );
	}
	return typed( x, dtype );
}


// EXPORTS //

module.exports = copyView;
