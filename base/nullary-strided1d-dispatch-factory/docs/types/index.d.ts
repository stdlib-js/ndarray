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
* Interface defining factory options.
*/
interface FactoryOptions {
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
type Nullary<T> = ( arrays: [ typedndarray<T> ], options?: unknown ) => typedndarray<T>;

/**
* Strided function.
*
* @param arrays - input ndarrays
* @param options - function options
* @returns result
*/
type NullaryWithAdditionalArrays<T> = ( arrays: [ typedndarray<T>, ...Array<typedndarray<T>> ], options?: unknown ) => typedndarray<T>;

/**
* Base dispatch table.
*/
interface BaseDispatchTable<T> {
	/**
	* Default strided function.
	*/
	default: Nullary<T> | NullaryWithAdditionalArrays<T>;
}

/**
* Dispatch table.
*/
interface DispatchTable<T> extends BaseDispatchTable<T> {
	/**
	* One-dimensional list of ndarray data types describing specialized output ndarray argument signatures.
	*/
	types: ArrayLike<DataType>;

	/**
	* List of strided functions which are specific to specialized output ndarray argument signatures.
	*/
	fcns: ArrayLike<Nullary<T> | NullaryWithAdditionalArrays<T>>;
}


/**
* Interface for applying an operation to an ndarray.
*/
interface NullaryFunction<T> {
	/**
	* Applies a strided function and assign results to a provided output ndarray.
	*
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
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
	* var sorthp = factory( table, [ idt ], odt );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var order = scalar2ndarray( 1.0, {
	*     'dtype': 'generic'
	* });
	*
	* var out = sorthp( x, order );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ -3.0, -1.0, 2.0 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	<V extends OutputArray<T> = OutputArray<T>>( out: V, options?: BaseOptions ): V;

	/**
	* Applies a strided function and assigns results to a provided output ndarray.
	*
	* @param out - output ndarray
	* @param x - additional ndarray argument
	* @param args - output ndarray, additional array arguments, and function options
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
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
	* var sorthp = factory( table, [ idt ], odt );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var order = scalar2ndarray( 1.0, {
	*      'dtype': 'generic'
	* });
	*
	* var out = sorthp( x, order );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ -3.0, -1.0, 2.0 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	<V extends OutputArray<T> = OutputArray<T>>( out: V, x: InputArray<T>, ...args: Array<V | BaseOptions> ): V;
}

/**
* Creates a function for applying a strided function to an output ndarray.
*
* @param table - dispatch table
* @param idtypes - list containing lists of supported input data types for each ndarray argument
* @param odtypes - list of supported output data types
* @param options - function options
* @returns function for applying a nullary function
*
* @example
* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
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
* var sorthp = factory( table, [ idt ], odt );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var order = scalar2ndarray( 1.0, {
*      'dtype': 'generic'
* });
*
* var out = sorthp( x, order );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ -3.0, -1.0, 2.0 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function factory<T = unknown>( table: DispatchTable<T> | BaseDispatchTable<T>, idtypes: ArrayLike<ArrayLike<DataType>>, odtypes: ArrayLike<DataType>, options?: FactoryOptions ): NullaryFunction<T>;


// EXPORTS //

export = factory;
