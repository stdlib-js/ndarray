/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { DataType, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray<U> = typedndarray<U>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform an operation.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining constructor options.
*/
interface ConstructorOptions {
	/**
	* Boolean specifying whether the order of element traversal must match the memory layout of an output ndarray.
	*/
	strictTraversalOrder?: boolean;
}

/**
* Strided function.
*
* @param arrays - input ndarrays
* @param options - function options
* @returns result
*/
type Nullary<U> = ( arrays: [ typedndarray<U> ], options?: unknown ) => typedndarray<U>;

/**
* Strided function.
*
* @param arrays - input ndarrays
* @param options - function options
* @returns result
*/
type NullaryWithAdditionalArrays<T, U> = ( arrays: [ typedndarray<U>, ...Array<typedndarray<T>> ], options?: unknown ) => typedndarray<U>;

/**
* Base dispatch table.
*/
interface BaseDispatchTable<T, U> {
	/**
	* Default strided function.
	*/
	default: Nullary<U> | NullaryWithAdditionalArrays<T, U>;
}

/**
* Dispatch table.
*/
interface DispatchTable<T, U> extends BaseDispatchTable<T, U> {
	/**
	* One-dimensional list of ndarray data types describing specialized output ndarray argument signatures.
	*/
	types: ArrayLike<DataType>;

	/**
	* List of strided functions which are specific to specialized output ndarray argument signatures.
	*/
	fcns: ArrayLike<Nullary<U> | NullaryWithAdditionalArrays<T, U>>;
}

/**
* Class for applying a strided function to an ndarray.
*/
declare class NullaryStrided1dDispatch<T, U> {
	/**
	* Constructor for applying a strided function to an ndarray.
	*
	* @param table - dispatch table
	* @param idtypes - list containing lists of supported input data types for each ndarray argument
	* @param odtypes - list of supported output data types
	* @param options - function options
	* @returns instance
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
	* var dtypes = require( './../../../../dtypes' );
	* var ndarray2array = require( './../../../../to-array' );
	* var ndarray = require( './../../../../base/ctor' );
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
	*      'dtype': 'generic'
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
	constructor( table: DispatchTable<T, U> | BaseDispatchTable<T, U>, idtypes: ArrayLike<ArrayLike<DataType>>, odtypes: ArrayLike<DataType>, options?: ConstructorOptions );

	/**
	* Applies a strided function and assigns results to a provided output ndarray.
	*
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/sorthp' );
	* var dtypes = require( './../../../../dtypes' );
	* var scalar2ndarray = require( './../../../../from-scalar' );
	* var ndarray2array = require( './../../../../to-array' );
	* var ndarray = require( './../../../../base/ctor' );
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
	assign<V extends OutputArray<U> = OutputArray<U>>( out: V, options?: BaseOptions ): V;

	/**
	* Applies a strided function and assigns results to a provided output ndarray.
	*
	* @param out - output ndarray
	* @param x - additional ndarray argument
	* @param args - additional ndarray arguments and function options
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/sorthp' );
	* var dtypes = require( './../../../../dtypes' );
	* var scalar2ndarray = require( './../../../../from-scalar' );
	* var ndarray2array = require( './../../../../to-array' );
	* var ndarray = require( './../../../../base/ctor' );
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
	assign<V extends OutputArray<U> = OutputArray<U>>( out: V, x: InputArray<T>, ...args: Array<InputArray<T> | BaseOptions> ): V;
}

/**
* Interface defining a constructor which is both "newable" and "callable".
*/
interface NullaryStrided1dDispatchConstructor {
	/**
	* Constructor for applying a strided function to an ndarray.
	*
	* @param table - dispatch table
	* @param idtypes - list containing lists of supported input data types for each ndarray argument
	* @param odtypes - list of supported output data types
	* @param options - function options
	* @returns instance
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/sorthp' );
	* var dtypes = require( './../../../../dtypes' );
	* var ndarray2array = require( './../../../../to-array' );
	* var ndarray = require( './../../../../base/ctor' );
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
	*      'dtype': 'generic'
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
	new<T = unknown, U = unknown>( table: DispatchTable<T, U> | BaseDispatchTable<T, U>, idtypes: ArrayLike<ArrayLike<DataType>>, odtypes: ArrayLike<DataType>, options?: ConstructorOptions ): NullaryStrided1dDispatch<T, U>;

	/**
	* Constructor for applying a strided function to an ndarray.
	*
	* @param table - dispatch table
	* @param idtypes - list containing lists of supported input data types for each ndarray argument
	* @param odtypes - list of supported output data types
	* @param options - function options
	* @returns instance
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/sorthp' );
	* var dtypes = require( './../../../../dtypes' );
	* var ndarray2array = require( './../../../../to-array' );
	* var ndarray = require( './../../../../base/ctor' );
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
	*      'dtype': 'generic'
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
	<T = unknown, U = unknown>( table: DispatchTable<T, U> | BaseDispatchTable<T, U>, idtypes: ArrayLike<ArrayLike<DataType>>, odtypes: ArrayLike<DataType>, options?: ConstructorOptions ): NullaryStrided1dDispatch<T, U>;
}

/**
* Constructor for applying a strided function to an ndarray.
*
* @param table - dispatch table
* @param idtypes - list containing lists of supported input data types for each ndarray argument
* @param odtypes - list of supported output data types
* @param options - function options
* @returns instance
*
* @example
* var base = require( '@stdlib/blas/ext/base/ndarray/sorthp' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
*      'dtype': 'generic'
* });
*
* var y = sorthp.assign( x, order );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ -1.0, 2.0, 2.0 ]
*/
declare var ctor: NullaryStrided1dDispatchConstructor;


// EXPORTS //

export = ctor;
