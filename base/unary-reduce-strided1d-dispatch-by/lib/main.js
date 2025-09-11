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

/* eslint-disable no-restricted-syntax, no-invalid-this, max-lines, max-len */

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
var isOutputDataTypePolicy = require( './../../../base/assert/is-output-data-type-policy' );
var isInputCastingPolicy = require( './../../../base/assert/is-input-casting-policy' );
var contains = require( '@stdlib/array/base/assert/contains' );
var unaryReduceStrided1dBy = require( './../../../base/unary-reduce-strided1d-by' );
var unaryOutputDataType = require( './../../../base/unary-output-dtype' );
var unaryInputCastingDataType = require( './../../../base/unary-input-casting-dtype' );
var resolveEnum = require( './../../../base/dtype-resolve-enum' );
var spreadDimensions = require( './../../../base/spread-dimensions' );
var getShape = require( './../../../shape' ); // note: non-base accessor is intentional due to input ndarrays originating in userland
var ndims = require( './../../../ndims' );
var getDType = require( './../../../base/dtype' );
var getOrder = require( './../../../base/order' );
var assign = require( './../../../base/assign' );
var baseEmpty = require( './../../../base/empty' );
var empty = require( './../../../empty' );
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
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

/**
* Reorders a list of ndarrays such that the output ndarray is the second ndarray argument when passing along to a resolved lower-level strided function.
*
* @private
* @param {Array<ndarray>} arrays - list of input ndarrays
* @param {ndarray} output - output ndarray
* @returns {Array<ndarray>} reordered list
*/
function reorder( arrays, output ) { // TODO: consider replacing with an `array/base/*` utility which expands an input array by inserting a specified value at a specified index and returns a new array
	var out;
	var i;
	var j;

	out = [];
	for ( i = 0, j = 0; i <= arrays.length; i++ ) {
		if ( i === 1 ) {
			out.push( output );
		} else {
			out.push( arrays[ j ] );
			j += 1;
		}
	}
	return out;
}


// MAIN //

/**
* Constructor for performing a reduction on an input ndarray according to a callback function.
*
* @constructor
* @param {Object} table - dispatch table
* @param {Function} table.default - default strided reduction function
* @param {StringArray} [table.types=[]] - one-dimensional list of ndarray data types describing specialized input ndarray argument signatures
* @param {ArrayLikeObject<Function>} [table.fcns=[]] - list of strided reduction functions which are specific to specialized input ndarray argument signatures
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
* @returns {UnaryStrided1dDispatchBy} instance
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max-by' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
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
* var maxBy = new UnaryStrided1dDispatchBy( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* function clbk( v ) {
*     return v * 2.0;
* }
*
* var y = maxBy.apply( x, clbk );
* // returns <ndarray>
*
* var v = y.get();
* // returns 4.0
*/
function UnaryStrided1dDispatchBy( table, idtypes, odtypes, policies ) {
	var dt;
	var i;
	if ( !( this instanceof UnaryStrided1dDispatchBy ) ) {
		return new UnaryStrided1dDispatchBy( table, idtypes, odtypes, policies );
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
	if ( !isObject( policies ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object. Value: `%s`.', policies ) );
	}
	if ( !isOutputDataTypePolicy( policies.output ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object having a supported output data type policy. Value: `%s`.', policies.output ) );
	}
	if ( !isInputCastingPolicy( policies.casting ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object having a supported casting policy. Value: `%s`.', policies.casting ) );
	}
	this._table = {
		'default': table.default,
		'types': ( table.types ) ? types2enums( table.types ) : [], // note: convert to enums (i.e., integers) to ensure faster comparisons
		'fcns': ( table.fcns ) ? copy( table.fcns ) : []
	};
	if ( this._table.types.length !== this._table.fcns.length ) {
		throw new Error( 'invalid argument. First argument specifies an unexpected number of types. An input ndarray data type must be specified for each provided strided function.' );
	}
	this._idtypes = idtypes;
	this._odtypes = odtypes;
	this._policies = {
		'output': policies.output,
		'casting': policies.casting
	};
	return this;
}

/**
* Performs a reduction on a provided input ndarray according to a callback function.
*
* @name apply
* @memberof UnaryStrided1dDispatchBy.prototype
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {...ndarrayLike} [args] - additional ndarray arguments
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {string} [options.dtype] - output ndarray data type
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max-by' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
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
* var maxBy = new UnaryStrided1dDispatchBy( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* function clbk( v ) {
*     return v * 2.0;
* }
*
* var y = maxBy.apply( x, clbk );
* // returns <ndarray>
*
* var v = y.get();
* // returns 4.0
*/
setReadOnly( UnaryStrided1dDispatchBy.prototype, 'apply', function apply( x ) {
	var thisArg;
	var options;
	var dtypes;
	var nargs;
	var clbk;
	var args;
	var opts;
	var err;
	var idx;
	var shx;
	var shy;
	var arr;
	var tmp;
	var xdt;
	var ydt;
	var flg;
	var dt;
	var f;
	var N;
	var y;
	var i;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	xdt = getDType( x );
	if ( !contains( this._idtypes[ 0 ], xdt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( this._idtypes[ 0 ], '", "' ), xdt ) );
	}
	args = [ x ];
	for ( i = 1; i < nargs; i++ ) {
		arr = arguments[ i ];
		if ( !isndarrayLike( arr ) ) {
			break;
		}
		dt = getDType( arr );
		if ( !contains( this._idtypes[ i ], dt ) ) {
			throw new TypeError( format( 'invalid argument. Argument %d must have one of the following data types: "%s". Data type: `%s`.', i, join( this._idtypes[ i ], '", "' ), dt ) );
		}
		// Note: we don't type promote additional ndarray arguments, as they are passed as scalars to the underlying strided reduction function...
		args.push( arr );
	}
	// Check whether we found a non-options argument which was not an ndarray...
	if ( i < nargs-3 ) {
		throw new TypeError( format( 'invalid argument. Argument %d must be an ndarray-like object. Value: `%s`.', i, arguments[ i ] ) );
	}
	// Case: ( ... )
	if ( i === nargs ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', arguments[ nargs-1 ] ) );
	}
	// Case: ( ..., options, clbk, thisArg )
	if ( i === nargs-3 ) {
		flg = true;
		options = arguments[ nargs-3 ];
		clbk = arguments[ nargs-2 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
		thisArg = arguments[ nargs-1 ];
	}
	// Case: ( ..., clbk )
	else if ( i === nargs-1 ) {
		clbk = arguments[ nargs-1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
	}
	// Case: ( ..., clbk, thisArg )
	else if ( isFunction( arguments[ nargs-2 ] ) ) {
		clbk = arguments[ nargs-2 ];
		thisArg = arguments[ nargs-1 ];
	}
	// Case: ( ..., options, clbk )
	else if ( isFunction( arguments[ nargs-1 ] ) ) {
		flg = true;
		options = arguments[ nargs-2 ];
		clbk = arguments[ nargs-1 ];
	}
	// Case: ( ..., ???, ??? )
	else {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', arguments[ nargs-2 ] ) );
	}
	shx = getShape( x );
	N = shx.length;

	opts = objectAssign( {}, defaults );
	if ( flg ) {
		err = validate( opts, N, this._odtypes, options );
		if ( err ) {
			throw err;
		}
	}
	// When a list of dimensions is not provided, reduce the entire input ndarray across all dimensions...
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Resolve the list of non-reduced dimensions:
	idx = indicesComplement( N, opts.dims );

	// Resolve the output array shape:
	shy = takeIndexed( shx, idx );

	// Initialize an output array whose shape matches that of the non-reduced dimensions and which has the same memory layout as the input ndarray:
	ydt = opts.dtype || unaryOutputDataType( xdt, this._policies.output );
	y = empty( shy, {
		'dtype': ydt,
		'order': getOrder( x )
	});

	// Determine whether we need to cast the input ndarray...
	dt = unaryInputCastingDataType( xdt, ydt, this._policies.casting );
	if ( xdt !== dt ) {
		// TODO: replace the following logic with a call to `ndarray/base/(?maybe-)(cast|convert|copy)` or similar utility
		tmp = baseEmpty( dt, shx, getOrder( x ) );
		assign( [ x, tmp ] );
		args[ 0 ] = tmp;
		xdt = dt;
	}
	// Resolve the lower-level strided function satisfying the input ndarray data type:
	dtypes = [ resolveEnum( xdt ) ];
	i = indexOfTypes( this._table.fcns.length, 1, this._table.types, 1, 1, 0, dtypes, 1, 0 );
	if ( i >= 0 ) {
		f = this._table.fcns[ i ];
	} else {
		f = this._table.default;
	}
	// Perform the reduction:
	unaryReduceStrided1dBy( f, reorder( args, y ), opts.dims, clbk, thisArg );

	// Check whether we need to reinsert singleton dimensions which can be useful for broadcasting the returned output array to the shape of the original input array...
	if ( opts.keepdims ) {
		y = spreadDimensions( N, y, idx );
	}
	return y;
});

/**
* Performs a reduction on a provided input ndarray according to a callback function and assigns results to a provided output ndarray.
*
* @name assign
* @memberof UnaryStrided1dDispatchBy.prototype
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {...ndarrayLike} [args] - additional ndarray arguments
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @throws {TypeError} first argument must be an ndarray
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} output argument must be an ndarray
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarrayLike} output ndarray
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max-by' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
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
* var maxBy = new UnaryStrided1dDispatchBy( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0 ];
* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
*
* function clbk( v ) {
*     return v * 2.0;
* }
*
* var out = maxBy.assign( x, y, clbk );
* // returns <ndarray>
*
* var v = out.get();
* // returns 4.0
*
* var bool = ( out === y );
* // returns true
*/
setReadOnly( UnaryStrided1dDispatchBy.prototype, 'assign', function assign( x ) {
	var thisArg;
	var options;
	var dtypes;
	var nargs;
	var clbk;
	var opts;
	var args;
	var arr;
	var err;
	var flg;
	var xdt;
	var tmp;
	var dt;
	var N;
	var f;
	var y;
	var i;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	// Validate the input ndarray data type in order to maintain similar behavior to `apply` above...
	xdt = getDType( x );
	if ( !contains( this._idtypes[ 0 ], xdt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( this._idtypes[ 0 ], '", "' ), xdt ) );
	}
	args = [ x ];

	// Resolve additional ndarray arguments...
	for ( i = 1; i < nargs; i++ ) {
		arr = arguments[ i ];
		if ( !isndarrayLike( arr ) ) {
			break;
		}
		args.push( arr );
	}
	// Ensure that we were provided an output ndarray...
	if ( i < 2 ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray-like object. Value: `%s`.', arguments[ 1 ] ) );
	}
	// Case: ( ..., out )
	if ( i === nargs ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', arguments[ nargs-1 ] ) );
	}
	// Case: ( ..., out, options, clbk, thisArg )
	if ( i === nargs-3 ) {
		flg = true;
		options = arguments[ nargs-3 ];
		clbk = arguments[ nargs-2 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
		thisArg = arguments[ nargs-1 ];
	}
	// Case: ( ..., out, clbk )
	else if ( i === nargs-1 ) {
		clbk = arguments[ nargs-1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
	}
	// Case: ( ..., out, clbk, thisArg )
	else if ( isFunction( arguments[ nargs-2 ] ) ) {
		clbk = arguments[ nargs-2 ];
		thisArg = arguments[ nargs-1 ];
	}
	// Case: ( ..., out, options, clbk )
	else if ( isFunction( arguments[ nargs-1 ] ) ) {
		flg = true;
		options = arguments[ nargs-2 ];
		clbk = arguments[ nargs-1 ];
	}
	// Case: ( ..., out, ???, ??? )
	else {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', arguments[ nargs-2 ] ) );
	}
	// Cache a reference to the output ndarray:
	y = args.pop();

	// Verify that additional ndarray arguments have expected dtypes (note: we intentionally don't validate the output ndarray dtype in order to provide an escape hatch for a user wanting to have an output ndarray having a specific dtype that `apply` does not support; note: we don't type promote additional ndarray arguments, as they are passed as scalars to the underlying strided reduction function)...
	for ( i = 1; i < args.length; i++ ) {
		dt = getDType( args[ i ] );
		if ( !contains( this._idtypes[ i ], dt ) ) {
			throw new TypeError( format( 'invalid argument. Argument %d must have one of the following data types: "%s". Data type: `%s`.', i, join( this._idtypes[ i ], '", "' ), dt ) );
		}
	}
	// Validate any provided options...
	N = ndims( x );
	opts = objectAssign( {}, defaults );
	if ( flg ) {
		err = validate( opts, N, this._odtypes, options );
		if ( err ) {
			throw err;
		}
	}
	// When a list of dimensions is not provided, reduce the entire input array across all dimensions...
	if ( opts.dims === null ) {
		opts.dims = zeroTo( N );
	}
	// Determine whether we need to cast the input ndarray...
	dt = unaryInputCastingDataType( xdt, getDType( y ), this._policies.casting );
	if ( xdt !== dt ) {
		// TODO: replace the following logic with a call to `ndarray/base/(?maybe-)(cast|convert|copy)` or similar utility
		tmp = baseEmpty( dt, getShape( x ), getOrder( x ) );
		assign( [ x, tmp ] );
		args[ 0 ] = tmp;
		xdt = dt;
	}
	// Resolve the lower-level strided function satisfying the input ndarray data type:
	dtypes = [ resolveEnum( xdt ) ];
	i = indexOfTypes( this._table.fcns.length, 1, this._table.types, 1, 1, 0, dtypes, 1, 0 );
	if ( i >= 0 ) {
		f = this._table.fcns[ i ];
	} else {
		f = this._table.default;
	}
	// Perform the reduction:
	unaryReduceStrided1dBy( f, reorder( args, y ), opts.dims, clbk, thisArg ); // note: we assume that this lower-level function handles further validation of the output ndarray (e.g., expected shape, etc)

	return y;
});


// EXPORTS //

module.exports = UnaryStrided1dDispatchBy;
