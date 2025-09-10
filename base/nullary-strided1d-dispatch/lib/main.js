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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var isFunctionArray = require( '@stdlib/assert/is-function-array' );
var isDataType = require( './../../../base/assert/is-data-type' );
var contains = require( '@stdlib/array/base/assert/contains' );
var nullaryStrided1d = require( './../../../base/nullary-strided1d' );
var resolveEnum = require( './../../../base/dtype-resolve-enum' );
var ndims = require( './../../../ndims' );
var getDType = require( './../../../base/dtype' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var join = require( '@stdlib/array/base/join' );
var copy = require( '@stdlib/array/base/copy' );
var everyBy = require( '@stdlib/array/base/every-by' );
var objectAssign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var indexOfTypes = require( './index_of_types.js' );


// FUNCTIONS //

/**
* Returns a list of data type enumeration constants.
*
* @private
* @param {Collection} types - list of types
* @returns {IntegerArray} list of data type enumeration constants
*/
function types2enums( types ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < types.length; i++ ) {
		out.push( resolveEnum( types[ i ] ) ); // note: we're assuming that `types[i]` is a known data type; otherwise, the resolved enum will be `null`
	}
	return out;
}


// MAIN //

/**
* Constructor for applying a strided function to an ndarray.
*
* @constructor
* @param {Object} table - dispatch table
* @param {Function} table.default - default strided function
* @param {StringArray} [table.types=[]] - one-dimensional list of ndarray data types describing specialized output ndarray argument signatures
* @param {ArrayLikeObject<Function>} [table.fcns=[]] - list of strided functions which are specific to specialized output ndarray argument signatures
* @param {ArrayLikeObject<StringArray>} idtypes - list containing lists of supported input data types for each ndarray argument
* @param {StringArray} odtypes - list of supported data types
* @param {Options} [options] - function options
* @param {boolean} [options.strictTraversalOrder=false] - boolean specifying whether to require that element traversal match the memory layout of an output ndarray
* @throws {TypeError} first argument must be an object having valid properties
* @throws {Error} first argument must be an object having valid properties
* @throws {TypeError} second argument must be an array containing arrays of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {NullaryStrided1dDispatch} instance
*
* @example
* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'all' );
*
* var table = {
*     'default': base
* };
* var sorthp = new NullaryStrided1dDispatch( table, [ idt ], odt );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var order = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* sorthp.assign( x, order );
*
* var arr = ndarray2array( x );
* // returns [ -3.0, -1.0, 2.0 ]
*/
function NullaryStrided1dDispatch( table, idtypes, odtypes, options ) {
	var dt;
	var i;
	if ( !( this instanceof NullaryStrided1dDispatch ) ) {
		if ( arguments.length > 3 ) {
			return new NullaryStrided1dDispatch( table, idtypes, odtypes, options ); // eslint-disable-line max-len
		}
		return new NullaryStrided1dDispatch( table, idtypes, odtypes );
	}
	if ( !isObject( table ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', table ) );
	}
	if ( !isFunction( table.default ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object having a "default" property and an associated method.' ) );
	}
	if ( hasProp( table, 'types' ) && !isCollection( table.types ) && !isEmptyCollection( table.types ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object having a "types" property whose associated value is an array-like object.' ) );
	}
	if ( hasProp( table, 'fcns' ) && !isFunctionArray( table.fcns ) && !isEmptyCollection( table.fcns ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object having a "fcns" property whose associated value is an array-like object containing functions.' ) );
	}
	if ( !isCollection( idtypes ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', idtypes ) );
	}
	for ( i = 0; i < idtypes.length; i++ ) {
		dt = idtypes[ i ];
		if (
			!isCollection( dt ) ||
			dt.length < 1 ||
			!everyBy( dt, isDataType )
		) {
			throw new TypeError( format( 'invalid argument. Second argument must contain arrays of data types. Value: `%s`.', idtypes ) );
		}
	}
	if (
		!isCollection( odtypes ) ||
		odtypes.length < 1 ||
		!everyBy( odtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array of data types. Value: `%s`.', odtypes ) );
	}
	this._table = {
		'default': table.default,
		'types': ( table.types ) ? types2enums( table.types ) : [], // note: convert to enums (i.e., integers) to ensure faster comparisons
		'fcns': ( table.fcns ) ? copy( table.fcns ) : []
	};
	if ( this._table.types.length !== this._table.fcns.length ) {
		throw new Error( 'invalid argument. First argument specifies an unexpected number of types. An output ndarray data type must be specified for each provided strided function.' );
	}
	this._idtypes = idtypes;
	this._odtypes = odtypes;
	if ( arguments.length > 3 ) {
		this._apply = nullaryStrided1d.factory( options ); // note: delegate options validation to factory method
	} else {
		this._apply = nullaryStrided1d;
	}
	return this;
}

/**
* Applies a strided function and assigns results to a provided output ndarray.
*
* @name assign
* @memberof NullaryStrided1dDispatch.prototype
* @type {Function}
* @param {ndarrayLike} out - output ndarray
* @param {...ndarrayLike} [args] - additional ndarray arguments
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform an operation
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed output ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of output ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarrayLike} output ndarray
*
* @example
* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'all' );
*
* var table = {
*     'default': base
* };
* var sorthp = new NullaryStrided1dDispatch( table, [ idt ], odt );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var order = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var out = sorthp.assign( x, order );
* // returns <ndarray>
*
* var arr = ndarray2array( x );
* // returns [ -3.0, -1.0, 2.0 ]
*
* var bool = ( out === x );
* // returns true
*/
setReadOnly( NullaryStrided1dDispatch.prototype, 'assign', function assign( out ) {
	var options;
	var dtypes;
	var nargs;
	var opts;
	var args;
	var arr;
	var err;
	var flg;
	var odt;
	var dt;
	var N;
	var f;
	var i;

	nargs = arguments.length;
	if ( !isndarrayLike( out ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', out ) );
	}
	// Validate the output ndarray data type...
	odt = getDType( out );
	if ( !contains( this._odtypes, odt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( this._odtypes, '", "' ), odt ) );
	}
	args = [ out ];

	// Resolve additional ndarray arguments...
	for ( i = 1; i < nargs; i++ ) {
		arr = arguments[ i ];
		if ( !isndarrayLike( arr ) ) {
			break;
		}
		args.push( arr );
	}
	// If we processed all but the last argument, assume that the last argument is an options argument...
	if ( i === nargs-1 ) {
		options = arguments[ i ];
		flg = true;
	}
	// Otherwise, if we have more than one argument remaining, then at least one argument is not an ndarray but should be...
	else if ( i < nargs-1 ) {
		throw new TypeError( format( 'invalid argument. Argument %d must be an ndarray-like object. Value: `%s`.', i, arguments[ i ] ) );
	}
	// Verify that additional ndarray arguments have expected dtypes...
	for ( i = 1; i < args.length; i++ ) {
		dt = getDType( args[ i ] );
		if ( !contains( this._idtypes[ i-1 ], dt ) ) {
			throw new TypeError( format( 'invalid argument. Argument %d must have one of the following data types: "%s". Data type: `%s`.', i, join( this._idtypes[ i-1 ], '", "' ), dt ) );
		}
	}
	// Validate any provided options...
	N = ndims( out );
	opts = objectAssign( {}, defaults );
	if ( flg ) {
		err = validate( opts, N, options );
		if ( err ) {
			throw err;
		}
	}
	// When a list of dimensions is not provided, apply the strided function across all dimensions...
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Resolve the lower-level strided function satisfying the output ndarray data type:
	dtypes = [ resolveEnum( odt ) ];
	i = indexOfTypes( this._table.fcns.length, 1, this._table.types, 1, 1, 0, dtypes, 1, 0 ); // eslint-disable-line max-len
	if ( i >= 0 ) {
		f = this._table.fcns[ i ];
	} else {
		f = this._table.default;
	}
	// Perform operation:
	this._apply( f, args, opts.dims ); // note: we assume that this lower-level function handles further validation of the output ndarray (e.g., expected shape, etc)

	return out;
});


// EXPORTS //

module.exports = NullaryStrided1dDispatch;
