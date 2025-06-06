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
import { OutputPolicy, InputCastingPolicy, DataType, typedndarray } from '@stdlib/types/ndarray';

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
	* List of dimensions over which to perform a reduction.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;

	/**
	* Boolean indicating whether the reduced dimensions should be included in the returned array as singleton dimensions. Default: `false`.
	*/
	keepdims?: boolean;
}

/**
* Strided reduction function.
*
* @param arrays - input ndarrays
* @param options - function options
* @returns result
*/
type Unary<T, U> = ( arrays: [ typedndarray<T> ], options?: unknown ) => U;

/**
* Strided reduction function.
*
* @param arrays - input ndarrays
* @param options - function options
* @returns result
*/
type UnaryWithAdditionalArrays<T, U> = ( arrays: [ typedndarray<T>, ...Array<typedndarray<T>> ], options?: unknown ) => U;

/**
* Base dispatch table.
*/
interface BaseDispatchTable<T, U> {
	/**
	* Default strided reduction function.
	*/
	default: Unary<T, U> | UnaryWithAdditionalArrays<T, U>;
}

/**
* Dispatch table.
*/
interface DispatchTable<T, U> extends BaseDispatchTable<T, U> {
	/**
	* One-dimensional list of ndarray data types describing specialized input ndarray argument signatures.
	*/
	types: ArrayLike<DataType>;

	/**
	* List of strided reduction functions which are specific to specialized input ndarray argument signatures.
	*/
	fcns: ArrayLike<Unary<T, U> | UnaryWithAdditionalArrays<T, U>>;
}

/**
* Dispatch policies.
*/
interface Policies {
	/**
	* Output data type policy.
	*/
	output: OutputPolicy;

	/**
	* Input ndarray casting policy.
	*/
	casting: InputCastingPolicy;
}

/**
* Interface for performing a reduction on an ndarray.
*/
interface UnaryFunction<T, U> {
	/**
	* Performs a reduction on a provided input ndarray.
	*
	* @param x - input ndarray
	* @param args - function options and additional array arguments
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/stats/base/ndarray/max' );
	* var dtypes = require( './../../../../dtypes' );
	* var ndarray = require( './../../../../base/ctor' );
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
	* var max = factory( table, [ idt ], odt, policies );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var y = max( x );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns 2.0
	*/
	( x: InputArray<T>, ...args: Array<InputArray<T> | Options> ): OutputArray<U>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output ndarray data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`. In principle, as well, based on the policy, it is possible to know more exactly which `InputArray` types are actually allowed.

	/**
	* Performs a reduction on a provided input ndarray and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/stats/base/ndarray/max' );
	* var dtypes = require( './../../../../dtypes' );
	* var ndarray = require( './../../../../base/ctor' );
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
	* var max = factory( table, [ idt ], odt, policies );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = [ 0.0 ];
	* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
	*
	* var out = max.assign( x, y );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 2.0
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<V extends OutputArray<U> = OutputArray<U>>( x: InputArray<T>, out: V, options?: BaseOptions ): V;

	/**
	* Performs a reduction on a provided input ndarray and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param y - additional ndarray argument
	* @param args - output ndarray, additional array arguments, and function options
	* @returns output ndarray
	*
	* @example
	* var base = require( '@stdlib/stats/base/ndarray/max' );
	* var dtypes = require( './../../../../dtypes' );
	* var ndarray = require( './../../../../base/ctor' );
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
	* var max = factory( table, [ idt ], odt, policies );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = [ 0.0 ];
	* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
	*
	* var out = max.assign( x, y );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 2.0
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<V extends OutputArray<U> = OutputArray<U>>( x: InputArray<T>, y: InputArray<T> | V, ...args: Array<InputArray<T> | V | BaseOptions> ): V;
}

/**
* Creates a function for performing a reduction on a provided ndarray.
*
* @param table - dispatch table
* @param idtypes - list containing lists of supported input data types for each ndarray argument
* @param odtypes - list of supported output data types
* @param policies - dispatch policies
* @returns function for applying a unary function
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max' );
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
* var max = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = max( x );
* // returns <ndarray>
*
* var v = y.get();
* // returns 2.0
*/
declare function factory<T = unknown, U = unknown>( table: DispatchTable<T, U> | BaseDispatchTable<T, U>, idtypes: ArrayLike<ArrayLike<DataType>>, odtypes: ArrayLike<DataType>, policies: Policies ): UnaryFunction<T, U>;


// EXPORTS //

export = factory;
