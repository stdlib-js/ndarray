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

import { Order, Mode, complex128ndarray } from '@stdlib/types/ndarray';
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
* Interface defining a typed vector constructor which is both "newable" and "callable".
*/
interface Complex128Vector {
	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	*
	* var arr = new Complex128Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*/
	new ( options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	*
	* var arr = new Complex128Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	new ( length: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	*
	* var arr = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	new ( obj: Collection<unknown> | AccessorArrayLike<unknown> | Iterable<unknown>, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex128Vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	new ( buffer: ArrayBuffer, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 64, 16 );
	* var arr = new Complex128Vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 3
	*/
	new ( buffer: ArrayBuffer, byteOffset: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 64, 16, 2 );
	* var arr = new Complex128Vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	new ( buffer: ArrayBuffer, byteOffset: number, length: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only vector
	* @param options.mode - specifies how to handle indices which exceed vector dimensions
	* @param options.order - memory layout (either row-major or column-major)
	* @returns one-dimensional ndarray
	*
	* @example
	* var numel = require( './../../../../numel' );
	*
	* var arr = new Complex128Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*/
	( options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	*
	* var arr = new Complex128Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	( length: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	*
	* var arr = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	( obj: Collection<unknown> | AccessorArrayLike<unknown> | Iterable<unknown>, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 64 );
	* var arr = new Complex128Vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 4
	*/
	( buffer: ArrayBuffer, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 64, 16 );
	* var arr = new Complex128Vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 3
	*/
	( buffer: ArrayBuffer, byteOffset: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 64, 16, 2 );
	* var arr = new Complex128Vector( buf );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	( buffer: ArrayBuffer, byteOffset: number, length: number, options?: Options ): complex128ndarray;
}

/**
* Creates a double-precision complex floating-point vector (i.e., a one-dimensional ndarray).
*
* @param arg - length, typed array, array-like object, buffer, or iterable
* @param byteOffset - integer byte offset specifying the location of the first vector element (default: 0)
* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = new Complex128Vector();
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = new Complex128Vector( 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
*
* var arr = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = new Complex128Vector( buf, 16, 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*/
declare var ctor: Complex128Vector;


// EXPORTS //

export = ctor;
