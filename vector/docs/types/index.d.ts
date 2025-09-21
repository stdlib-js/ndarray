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

/* eslint-disable max-lines */

import BooleanVector = require( './../../../vector/bool' );
import Complex64Vector = require( './../../../vector/complex64' );
import Complex128Vector = require( './../../../vector/complex128' );
import vector = require( './../../../vector/ctor' );
import Float32Vector = require( './../../../vector/float32' );
import Float64Vector = require( './../../../vector/float64' );
import Int8Vector = require( './../../../vector/int8' );
import Int16Vector = require( './../../../vector/int16' );
import Int32Vector = require( './../../../vector/int32' );
import Uint8Vector = require( './../../../vector/uint8' );
import Uint8ClampedVector = require( './../../../vector/uint8c' );
import Uint16Vector = require( './../../../vector/uint16' );
import Uint32Vector = require( './../../../vector/uint32' );

/**
* Interface describing the `vector` namespace.
*/
interface Namespace {
	/**
	* Creates a boolean vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new BooleanVeBooleanVector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new BooleanVeBooleanVector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new BooleanVeBooleanVector( [ true, false ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanVeBooleanVector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	BooleanVector: typeof BooleanVector;

	/**
	* Creates a single-precision complex floating-point vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Complex64VeComplex64Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Complex64VeComplex64Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Complex64VeComplex64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex64VeComplex64Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Complex64Vector: typeof Complex64Vector;

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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Complex128VeComplex128Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Complex128VeComplex128Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Complex128VeComplex128Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 64 );
	* var arr = new Complex128VeComplex128Vector( buf, 16, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Complex128Vector: typeof Complex128Vector;

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
	* var getDType = require( './../../../dtype' );
	* var numel = require( './../../../numel' );
	*
	* var arr = ns.vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var getDType = require( './../../../dtype' );
	* var numel = require( './../../../numel' );
	*
	* var arr = ns.vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var getDType = require( './../../../dtype' );
	* var numel = require( './../../../numel' );
	*
	* var arr = ns.vector( [ 1.0, 2.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float64'
	*
	* @example
	* var getDType = require( './../../../dtype' );
	* var numel = require( './../../../numel' );
	*
	* var arr = ns.vector( [ 1.0, 2.0 ], 'float32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'float32'
	*
	* @example
	* var numel = require( './../../../numel' );
	* var getDType = require( './../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.vector( buf, 8, 2, 'int32' );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'int32'
	*
	* @example
	* var numel = require( './../../../numel' );
	* var getDType = require( './../../../dtype' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.vector( buf, 8, 2, 'int32', {} );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* var dt = getDType( arr );
	* // returns 'int32'
	*
	* @example
	* var getDType = require( './../../../dtype' );
	* var numel = require( './../../../numel' );
	*
	* var Float32Vector = ns.vector.factory( 'float32' );
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
	vector: typeof vector;

	/**
	* Creates a single-precision floating-point vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Float32VeFloat32Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Float32VeFloat32Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Float32VeFloat32Vector( [ 1.0, 2.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Float32VeFloat32Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Float32Vector: typeof Float32Vector;

	/**
	* Creates a double-precision floating-point vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Float64VeFloat64Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Float64VeFloat64Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Float64VeFloat64Vector( [ 1.0, 2.0 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Float64VeFloat64Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Float64Vector: typeof Float64Vector;

	/**
	* Creates a signed 8-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int8VeInt8Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int8VeInt8Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int8VeInt8Vector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Int8VeInt8Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Int8Vector: typeof Int8Vector;

	/**
	* Creates a signed 16-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int16VeInt16Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int16VeInt16Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int16VeInt16Vector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Int16VeInt16Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Int16Vector: typeof Int16Vector;

	/**
	* Creates a signed 32-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int32VeInt32Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int32VeInt32Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Int32VeInt32Vector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Int32VeInt32Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Int32Vector: typeof Int32Vector;

	/**
	* Creates an unsigned 8-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint8VeUint8Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint8VeUint8Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint8VeUint8Vector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Uint8VeUint8Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Uint8Vector: typeof Uint8Vector;

	/**
	* Creates a clamped unsigned 8-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint8ClampedVeUint8ClampedVector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint8ClampedVeUint8ClampedVector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint8ClampedVeUint8ClampedVector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Uint8ClampedVeUint8ClampedVector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Uint8ClampedVector: typeof Uint8ClampedVector;

	/**
	* Creates an unsigned 16-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint16VeUint16Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint16VeUint16Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint16VeUint16Vector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Uint16VeUint16Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Uint16Vector: typeof Uint16Vector;

	/**
	* Creates an unsigned 32-bit integer vector (i.e., a one-dimensional ndarray).
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
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint32VeUint32Vector();
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 0
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint32VeUint32Vector( 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	*
	* var arr = new Uint32VeUint32Vector( [ 1, 2 ] );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*
	* @example
	* var numel = require( './../../../numel' );
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Uint32VeUint32Vector( buf, 8, 2 );
	* // returns <ndarray>
	*
	* var len = numel( arr );
	* // returns 2
	*/
	Uint32Vector: typeof Uint32Vector;
}

/**
* Vector constructors and associated utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
