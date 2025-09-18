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
var BinaryStrided1dDispatch = require( './../../../base/binary-reduce-strided1d-dispatch' );


// MAIN //

/**
* Returns a function for performing a reduction on two input ndarrays.
*
* @param {Object} table - dispatch table
* @param {Function} table.default - default strided reduction function
* @param {StringArray} [table.types] - one-dimensional list of ndarray data types describing specialized input ndarray argument signatures
* @param {ArrayLikeObject<Function>} [table.fcns] - list of strided reduction functions which are specific to specialized input ndarray argument signatures
* @param {ArrayLikeObject<StringArray>} idtypes - list containing lists of supported input data types for each ndarray argument
* @param {StringArray} odtypes - list of supported output data types
* @param {Object} policies - policies
* @param {string} policies.output - output data type policy
* @param {string} policies.casting - input ndarray casting policy
* @throws {TypeError} first argument must be an object having valid properties
* @throws {TypeError} second argument must be an array containing arrays of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be an object having supported policies
* @throws {Error} first argument must be an object having valid properties
* @returns {Function} function for performing a reduction on two ndarrays
*
* @example
* var base = require( '@stdlib/blas/base/ndarray/gdot' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'promoted',
*     'casting': 'promoted'
* };
*
* var table = {
*     'default': base
* };
* var dot = factory( table, [ idt, idt ], odt, policies );
*
* var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var z = dot( x, y );
* // returns <ndarray>
*
* var v = z.get();
* // returns -5.0
*
* @example
* var base = require( '@stdlib/blas/base/ndarray/gdot' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'promoted',
*     'casting': 'promoted'
* };
*
* var table = {
*     'default': base
* };
* var dot = factory( table, [ idt, idt ], odt, policies );
*
* var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var zbuf = [ 0.0 ];
* var z = new ndarray( 'generic', zbuf, [], [ 0 ], 0, 'row-major' );
*
* var out = dot.assign( x, y, z );
* // returns <ndarray>
*
* var v = out.get();
* // returns -5.0
*
* var bool = ( out === z );
* // returns true
*/
function factory( table, idtypes, odtypes, policies ) {
	var f = new BinaryStrided1dDispatch( table, idtypes, odtypes, policies );
	setReadOnly( main, 'assign', assign );
	return main;

	/**
	* Performs a reduction on two provided input ndarrays.
	*
	* @private
	* @param {ndarrayLike} x - first input ndarray
	* @param {ndarrayLike} y - second input ndarray
	* @param {...ndarrayLike} [args] - additional ndarray arguments
	* @param {Options} [options] - function options
	* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
	* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
	* @param {*} [options.dtype] - output ndarray data type
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} second argument must be an ndarray
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
	* Performs a reduction on two provided input ndarrays and assigns results to a provided output ndarray.
	*
	* @private
	* @param {ndarrayLike} x - first input ndarray
	* @param {ndarrayLike} y - second input ndarray
	* @param {...ndarrayLike} [args] - additional ndarray arguments
	* @param {ndarrayLike} out - output ndarray
	* @param {Options} [options] - function options
	* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} first argument must have a supported data type
	* @throws {TypeError} second argument must be an ndarray
	* @throws {TypeError} second argument must have a supported data type
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
