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

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var UnaryStrided1dDispatch = require( './../../../base/unary-strided1d-dispatch' );


// MAIN //

/**
* Returns a function for applying a strided function a provided ndarray.
*
* @param {Object} table - dispatch table
* @param {Function} table.default - default strided function
* @param {StringArray} [table.types] - one-dimensional list of ndarray data types describing specialized input and output ndarray argument signatures
* @param {ArrayLikeObject<Function>} [table.fcns] - list of strided functions which are specific to specialized input and output ndarray argument signatures
* @param {ArrayLikeObject<StringArray>} idtypes - list containing lists of supported input data types for each ndarray argument
* @param {StringArray} odtypes - list of supported output data types
* @param {Object} policies - policies
* @param {string} policies.output - output data type policy
* @param {string} policies.casting - input ndarray casting policy
* @param {Options} [options] - function options
* @param {boolean} [options.strictTraversalOrder=false] - boolean specifying whether to require that element traversal match the memory layout of an input ndarray
* @throws {TypeError} first argument must be an object having valid properties
* @throws {Error} first argument must be an object having valid properties
* @throws {TypeError} second argument must be an array containing arrays of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be an object having supported policies
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function for applying a strided function an ndarray
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/cumax' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var cumax = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = cumax( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ -1.0, 2.0, 2.0 ]
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/cumax' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var cumax = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0, 0.0, 0.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var out = cumax.assign( x, y );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ -1.0, 2.0, 2.0 ]
*
* var bool = ( out === y );
* // returns true
*/
function factory( table, idtypes, odtypes, policies, options ) {
	var f;
	if ( arguments.length > 4 ) {
		f = new UnaryStrided1dDispatch( table, idtypes, odtypes, policies, options ); // eslint-disable-line max-len
	} else {
		f = new UnaryStrided1dDispatch( table, idtypes, odtypes, policies );
	}
	setReadOnly( main, 'assign', assign );
	return main;

	/**
	* Applies a strided function to a provided input ndarray.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @param {...ndarrayLike} [args] - additional ndarray arguments
	* @param {Options} [options] - function options
	* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
	* @param {string} [options.dtype] - output ndarray data type
	* @throws {TypeError} first argument must be an ndarray-like object
	* @throws {TypeError} options argument must be an object
	* @throws {RangeError} dimension indices must not exceed input ndarray bounds
	* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
	* @throws {Error} must provide valid options
	* @returns {ndarray} output ndarray
	*/
	function main() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return f.apply.apply( f, args );
	}

	/**
	* Applies a strided function to a provided input ndarray and assigns results to a provided output ndarray.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @param {...ndarrayLike} [args] - additional ndarray arguments
	* @param {ndarrayLike} out - output ndarray
	* @param {Options} [options] - function options
	* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} first argument must have a supported data type
	* @throws {TypeError} output argument must be an ndarray
	* @throws {TypeError} options argument must be an object
	* @throws {RangeError} dimension indices must not exceed input ndarray bounds
	* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
	* @throws {Error} must provide valid options
	* @returns {ndarrayLike} output ndarray
	*/
	function assign() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return f.assign.apply( f, args );
	}
}


// EXPORTS //

module.exports = factory;
