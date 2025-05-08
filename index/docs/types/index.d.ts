/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { GenericBooleanIndexArray, GenericIntegerIndexArray, IndexArray, MaskArrayIndex, BooleanArrayIndex, Int32ArrayIndex, GenericBooleanArrayIndex, GenericIntegerArrayIndex, CartesianInt32ArrayIndex, CartesianGenericArrayIndex, LinearInt32ArrayIndex, LinearGenericArrayIndex, ndindex, BaseIndexArrayObject, ndindexObject, IndexArrayKinds, uint8ndarray, int32ndarray, booleanndarray } from '@stdlib/types/ndarray';

/**
* Interface describing "base" function options.
*/
interface BaseOptions {
	/**
	* Boolean indicating whether to continue persisting an index object after first usage (default: `false`).
	*/
	persist?: boolean;
}

/**
* Interface describing function options.
*/
interface Options extends BaseOptions {
	/**
	* Specifies whether a provided integer input ndarray is of a specialized kind.
	*/
	kind?: IndexArrayKinds;
}

/**
* Interface describing function options for a Cartesian ndarray index.
*/
interface CartesianOptions extends BaseOptions {
	/**
	* Specifies whether a provided integer input ndarray contains Cartesian indices.
	*/
	kind: 'cartesian';
}

/**
* Interface describing function options for a linear ndarray index.
*/
interface LinearOptions extends BaseOptions {
	/**
	* Specifies whether a provided integer input ndarray contains indices representing locations in linear memory.
	*/
	kind: 'linear';
}

/**
* Interface defining common methods for constructors and functions which create `ndindex` objects.
*/
interface BaseConstructor {
	/**
	* Frees the `ndindex` associated with a provided identifier.
	*
	* @param id - identifier
	* @returns boolean indicating whether an `ndindex` was successfully freed
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../../array' );
	*
	* var idx = new ndindex( array( new Uint8Array( [ 1, 0, 1, 0 ] ) ), {
	*     'persist': true
	* });
	* // returns <ndindex>
	*
	* // ...
	*
	* var out = ndindex.free( idx.id );
	* // returns true
	*/
	free( id: string ): boolean;

	/**
	* Returns ndarray index data associated with a provided identifier.
	*
	* @param id - identifier
	* @returns object containing ndarray index data
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../../array' );
	*
	* var idx = new ndindex( array( new Uint8Array( [ 1, 0, 1, 0 ] ) ), {
	*     'persist': true
	* });
	* // returns <ndindex>
	*
	* // ...
	*
	* var o = ndindex.get( idx.id );
	* // returns {...}
	*
	* var d = o.data;
	* // returns <ndarray>
	*
	* var t = o.type;
	* // returns 'mask'
	*
	* var dt = o.dtype;
	* // returns 'uint8'
	*/
	get<T extends BaseIndexArrayObject = ndindexObject>( id: string ): T | null;
}

/**
* Interface defining an `ndindex` constructor which is both "newable" and "callable".
*/
interface Constructor extends BaseConstructor {
	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = new ndindex( x );
	* // returns <ndindex>
	*/
	new( x: uint8ndarray, options?: BaseOptions ): MaskArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var BooleanArray = require( '@stdlib/array/bool' );
	* var array = require( './../../../array' );
	*
	* var x = array( new BooleanArray( [ true, false, true, false ] ) );
	*
	* var idx = new ndindex( x );
	* // returns <ndindex>
	*/
	new( x: booleanndarray, options?: BaseOptions ): BooleanArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = new ndindex( x, {
	*     'kind': 'cartesian'
	* });
	* // returns <ndindex>
	*/
	new( x: int32ndarray, options: CartesianOptions ): CartesianInt32ArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = new ndindex( x, {
	*     'kind': 'linear'
	* });
	* // returns <ndindex>
	*/
	new( x: int32ndarray, options: LinearOptions ): LinearInt32ArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = new ndindex( x );
	* // returns <ndindex>
	*/
	new( x: int32ndarray, options?: Options ): Int32ArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = new ndindex( x, {
	*     'kind': 'cartesian'
	* });
	* // returns <ndindex>
	*/
	new( x: GenericIntegerIndexArray, options: CartesianOptions ): CartesianGenericArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = new ndindex( x, {
	*     'kind': 'linear'
	* });
	* // returns <ndindex>
	*/
	new( x: GenericIntegerIndexArray, options: LinearOptions ): LinearGenericArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = new ndindex( x );
	* // returns <ndindex>
	*/
	new( x: GenericIntegerIndexArray, options?: Options ): GenericIntegerArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ true, false, true, false ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = new ndindex( x );
	* // returns <ndindex>
	*/
	new( x: GenericBooleanIndexArray, options?: BaseOptions ): GenericBooleanArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = new ndindex( x );
	* // returns <ndindex>
	*/
	new( x: IndexArray, options?: Options ): ndindex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex( x );
	* // returns <ndindex>
	*/
	( x: uint8ndarray, options?: BaseOptions ): MaskArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var BooleanArray = require( '@stdlib/array/bool' );
	* var array = require( './../../../array' );
	*
	* var x = array( new BooleanArray( [ true, false, true, false ] ) );
	*
	* var idx = ndindex( x );
	* // returns <ndindex>
	*/
	( x: booleanndarray, options?: BaseOptions ): BooleanArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex( x, {
	*     'kind': 'cartesian'
	* });
	* // returns <ndindex>
	*/
	( x: int32ndarray, options: CartesianOptions ): CartesianInt32ArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex( x, {
	*     'kind': 'linear'
	* });
	* // returns <ndindex>
	*/
	( x: int32ndarray, options: LinearOptions ): LinearInt32ArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex( x );
	* // returns <ndindex>
	*/
	( x: int32ndarray, options?: Options ): Int32ArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = ndindex( x, {
	*     'kind': 'cartesian'
	* });
	* // returns <ndindex>
	*/
	( x: GenericIntegerIndexArray, options: CartesianOptions ): CartesianGenericArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = ndindex( x, {
	*     'kind': 'linear'
	* });
	* // returns <ndindex>
	*/
	( x: GenericIntegerIndexArray, options: LinearOptions ): LinearGenericArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = ndindex( x );
	* // returns <ndindex>
	*/
	( x: GenericIntegerIndexArray, options?: Options ): GenericIntegerArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ true, false, true, false ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = ndindex( x );
	* // returns <ndindex>
	*/
	( x: GenericBooleanIndexArray, options?: BaseOptions ): GenericBooleanArrayIndex;

	/**
	* ndarray index constructor.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
	* @returns ndindex instance
	*
	* @example
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex( x );
	* // returns <ndindex>
	*/
	( x: IndexArray, options?: Options ): ndindex;

	/**
	* String value of the constructor name.
	*/
	name: 'ndindex';

	/**
	* Returns an ndarray index containing Cartesian indices.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex.cartesianIndex( x );
	* // returns <ndindex>
	*/
	cartesianIndex: CartesianIndexFactory;

	/**
	* Returns an ndarray index containing indices representing locations in linear memory.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex.linearIndex( x );
	* // returns <ndindex>
	*/
	linearIndex: LinearIndexFactory;
}

/**
* Interface for creating index objects for ndarrays containing Cartesian indices.
*/
interface CartesianIndexFactory extends BaseConstructor {
	/**
	* Returns an ndarray index containing Cartesian indices.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex.cartesianIndex( x );
	* // returns <ndindex>
	*/
	( x: int32ndarray, options?: BaseOptions ): CartesianInt32ArrayIndex;

	/**
	* Returns an ndarray index containing Cartesian indices.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = ndindex.cartesianIndex( x );
	* // returns <ndindex>
	*/
	( x: GenericIntegerIndexArray, options?: BaseOptions ): CartesianGenericArrayIndex;
}

/**
* Interface for creating index objects for ndarrays containing linear indices.
*/
interface LinearIndexFactory extends BaseConstructor {
	/**
	* Returns an ndarray index containing indices representing locations in linear memory.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var array = require( './../../../array' );
	*
	* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
	*
	* var idx = ndindex.linearIndex( x );
	* // returns <ndindex>
	*/
	( x: int32ndarray, options?: BaseOptions ): LinearInt32ArrayIndex;

	/**
	* Returns an ndarray index containing indices representing locations in linear memory.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ndindex instance
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ 1, 2, 3, 4 ], {
	*     'dtype': 'generic'
	* });
	*
	* var idx = ndindex.linearIndex( x );
	* // returns <ndindex>
	*/
	( x: GenericIntegerIndexArray, options?: BaseOptions ): LinearGenericArrayIndex;
}

/**
* ndarray index constructor.
*
* @param x - input ndarray
* @param options - function options
* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
* @param options.kind - specifies whether a provided ndarray is a specialized kind of integer input ndarray
* @returns ndindex instance
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
*
* var idx = new ndindex( x );
* // returns <ndindex>
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
*
* var idx = ndindex.cartesianIndex( x );
* // returns <ndindex>
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Int32Array( [ 1, 0, 1, 0 ] ) );
*
* var idx = ndindex.linearIndex( x );
* // returns <ndindex>
*/
declare var ctor: Constructor;


// EXPORTS //

export = ctor;
