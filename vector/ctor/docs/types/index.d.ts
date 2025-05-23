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

/* eslint-disable @typescript-eslint/unified-signatures */

/// <reference types="@stdlib/types"/>

import { DataTypeMap, TypedDataTypeMap, Order, Mode } from '@stdlib/types/ndarray';
import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import ArrayBuffer = require( '@stdlib/array/buffer' );

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*/
	order?: Order;

	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Boolean indicating whether an array should be read-only (default: false).
	*/
	readonly?: boolean;
}

/**
* Interface for the function returned by the factory method.
*/
interface GenericVector {
	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( options?: Options ): DataTypeMap<number>['generic'];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param length - vector length
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( length: number, options?: Options ): DataTypeMap<number>['generic'];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param obj - array-like object or iterable from which to generate a vector
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	<T = unknown>( obj: Collection<T> | AccessorArrayLike<T> | Iterable<T>, options?: Options ): DataTypeMap<T>['generic'];
}

/**
* Interface for the function returned by the factory method.
*/
interface TypedVector<T extends keyof TypedDataTypeMap> {
	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( options?: Options ): TypedDataTypeMap[T];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param length - vector length
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( length: number, options?: Options ): TypedDataTypeMap[T];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param obj - array-like object or iterable from which to generate a vector
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( obj: Collection<unknown> | AccessorArrayLike<unknown> | Iterable<unknown>, options?: Options ): TypedDataTypeMap[T];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( buffer: ArrayBuffer, options?: Options ): TypedDataTypeMap[T];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first vector element
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( buffer: ArrayBuffer, byteOffset: number, options?: Options ): TypedDataTypeMap[T];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first vector element
	* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*/
	( buffer: ArrayBuffer, byteOffset: number, length: number, options?: Options ): TypedDataTypeMap[T];
}

/**
* Interface for creating a vector (i.e., a one-dimensional ndarray).
*/
interface Vector {
	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param dtype - data type (default: 'float64')
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( 'float32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( 'float32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*/
	<T = number, U extends keyof DataTypeMap<T> = 'float64'>( dtype?: U, options?: Options ): DataTypeMap<T>[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*/
	<U extends keyof DataTypeMap<number> = 'float64'>( options: Options ): DataTypeMap<number>[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param length - vector length
	* @param dtype - data type (default: 'float64')
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( 2, 'float32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( 2, 'float32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*/
	<T = number, U extends keyof DataTypeMap<T> = 'float64'>( length: number, dtype?: U, options?: Options ): DataTypeMap<T>[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param length - vector length
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( 2, {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*/
	<U extends keyof DataTypeMap<number> = 'float64'>( length: number, options: Options ): DataTypeMap<number>[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param obj - array-like object or iterable from which to generate a vector
	* @param dtype - data type (default: 'float64')
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( [ 1.0, 2.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( [ 1, 2 ], 'int32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'int32'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( [ 1, 2 ], 'int32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'int32'
	*/
	<T = unknown, U extends keyof DataTypeMap<T> = 'float64'>( obj: Collection<T> | AccessorArrayLike<T> | Iterable<T>, dtype?: U, options?: Options ): DataTypeMap<T>[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param obj - array-like object or iterable from which to generate a vector
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	*
	* var arr = vector( [ 1.0, 2.0 ], {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*/
	<T = unknown, U extends keyof DataTypeMap<T> = 'float64'>( obj: Collection<T> | AccessorArrayLike<T> | Iterable<T>, options: Options ): DataTypeMap<T>[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param dtype - data type (default: 'float64')
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 'float32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 4
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 'float32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 4
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*/
	<U extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, dtype?: U, options?: Options ): TypedDataTypeMap[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*/
	<U extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, options: Options ): TypedDataTypeMap[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first vector element (default: 0)
	* @param dtype - data type (default: 'float64')
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 8 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 1
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 8, 'float32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 8, 'float32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*/
	<U extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset?: number, dtype?: U, options?: Options ): TypedDataTypeMap[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first vector element
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 8 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 1
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = vector( buf, 8, {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*/
	<U extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset: number, options: Options ): TypedDataTypeMap[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first vector element (default: 0)
	* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
	* @param dtype - data type (default: 'float64')
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = vector( buf, 8, 2, 'int32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'int32'
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = vector( buf, 8, 2, 'int32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'int32'
	*/
	<U extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset?: number, length?: number, dtype?: U, options?: Options ): TypedDataTypeMap[U];

	/**
	* Creates a vector (i.e., a one-dimensional ndarray).
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first vector element
	* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	* var getDType = require( './../../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = vector( buf, 8, 2, {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*/
	<U extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset: number, length: number, options: Options ): TypedDataTypeMap[U];

	/**
	* Returns a function for creating a vector (i.e., a one-dimensional ndarray).
	*
	* @param dtype - data type
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector by default
	* @param options.mode - specifies the default behavior when handling indices which exceed vector dimensions
	* @param options.order - default memory layout (either row-major or column-major)
	* @returns function for creating a vector
	*
	* @example
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var Float32Vector = vector.factory( 'float32' );
	*
	* var arr = new Float32Vector( [ 1, 2, 3 ] );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* var len = numel( arr );
	* // returns 3
	*
	* @example
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var Float32Vector = vector.factory( 'float32' );
	*
	* var arr = new Float32Vector( 3 );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* var len = numel( arr );
	* // returns 3
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var Float32Vector = vector.factory( 'float32' );
	*
	* var buf = new ArrayBuffer( 12 );
	* var arr = new Float32Vector( buf );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* var len = numel( arr );
	* // returns 3
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var Float32Vector = vector.factory( 'float32' );
	*
	* var buf = new ArrayBuffer( 12 );
	* var arr = new Float32Vector( buf, 4 );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var Float32Vector = vector.factory( 'float32' );
	*
	* var buf = new ArrayBuffer( 12 );
	* var arr = new Float32Vector( buf, 4, 1 );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* var len = numel( arr );
	* // returns 1
	*/
	factory<T extends keyof TypedDataTypeMap>( dtype: T, options?: Options ): TypedVector<T>;

	/**
	* Returns a function for creating a vector (i.e., a one-dimensional ndarray).
	*
	* @param dtype - data type
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector by default
	* @param options.mode - specifies the default behavior when handling indices which exceed vector dimensions
	* @param options.order - default memory layout (either row-major or column-major)
	* @returns function for creating a vector
	*
	* @example
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var GenericVector = vector.factory( 'generic' );
	*
	* var arr = new GenericVector( [ 1, 2, 3 ] );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'generic'
	*
	* var len = numel( arr );
	* // returns 3
	*
	* @example
	* var getDType = require( './../../../../dtype' );
	* var numel = require( './../../../../numel' );
	*
	* var GenericVector = vector.factory( 'generic' );
	*
	* var arr = new GenericVector( 3 );
	* // returns <ndarray>
	*
	* var dt = getDType( arr );
	* // returns 'generic'
	*
	* var len = numel( arr );
	* // returns 3
	*/
	factory( dtype: 'generic', options?: Options ): GenericVector;
}

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param arg - length, typed array, array-like object, buffer, or iterable
* @param byteOffset - integer byte offset specifying the location of the first vector element (default: 0)
* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector();
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector( 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector( [ 1.0, 2.0 ] );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = vector( [ 1.0, 2.0 ], 'float32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 8, 2, 'int32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'int32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 8, 2, 'int32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'int32'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var numel = require( '@stdlib/ndarray/numel' );
*
* var Float32Vector = vector.factory( 'float32' );
*
* var arr = new Float32Vector( [ 1, 2, 3 ] );
* // returns <ndarray>
*
* var dt = getDType( arr );
* // returns 'float32'
*
* var len = numel( arr );
* // returns 3
*/
declare var vector: Vector;


// EXPORTS //

export = vector;
