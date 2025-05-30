/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import hasEqualShape = require( './../../../../base/assert/has-equal-shape' );
import isAllowedDataTypeCast = require( './../../../../base/assert/is-allowed-data-type-cast' );
import isBooleanDataType = require( './../../../../base/assert/is-boolean-data-type' );
import isBufferLengthCompatible = require( './../../../../base/assert/is-buffer-length-compatible' );
import isBufferLengthCompatibleShape = require( './../../../../base/assert/is-buffer-length-compatible-shape' );
import isCastingMode = require( './../../../../base/assert/is-casting-mode' );
import isColumnMajor = require( './../../../../base/assert/is-column-major' );
import isColumnMajorContiguous = require( './../../../../base/assert/is-column-major-contiguous' );
import isColumnMajorString = require( './../../../../base/assert/is-column-major-string' );
import isComplexFloatingPointDataType = require( './../../../../base/assert/is-complex-floating-point-data-type' );
import isContiguous = require( './../../../../base/assert/is-contiguous' );
import isDataType = require( './../../../../base/assert/is-data-type' );
import isFloatingPointDataType = require( './../../../../base/assert/is-floating-point-data-type' );
import isIndexMode = require( './../../../../base/assert/is-index-mode' );
import isIntegerDataType = require( './../../../../base/assert/is-integer-data-type' );
import isMostlySafeDataTypeCast = require( './../../../../base/assert/is-mostly-safe-data-type-cast' );
import isNumericDataType = require( './../../../../base/assert/is-numeric-data-type' );
import isOrder = require( './../../../../base/assert/is-order' );
import isOutputDataTypePolicy = require( './../../../../base/assert/is-output-data-type-policy' );
import isReadOnly = require( './../../../../base/assert/is-read-only' );
import isRealDataType = require( './../../../../base/assert/is-real-data-type' );
import isRealFloatingPointDataType = require( './../../../../base/assert/is-real-floating-point-data-type' );
import isRowMajor = require( './../../../../base/assert/is-row-major' );
import isRowMajorContiguous = require( './../../../../base/assert/is-row-major-contiguous' );
import isRowMajorString = require( './../../../../base/assert/is-row-major-string' );
import isSafeDataTypeCast = require( './../../../../base/assert/is-safe-data-type-cast' );
import isSameKindDataTypeCast = require( './../../../../base/assert/is-same-kind-data-type-cast' );
import isScalarMostlySafeCompatible = require( './../../../../base/assert/is-scalar-mostly-safe-compatible' );
import isSignedIntegerDataType = require( './../../../../base/assert/is-signed-integer-data-type' );
import isSingleSegmentCompatible = require( './../../../../base/assert/is-single-segment-compatible' );
import isUnsignedIntegerDataType = require( './../../../../base/assert/is-unsigned-integer-data-type' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests whether two ndarrays have the same shape.
	*
	* @param x - first input ndarray
	* @param y - second input ndarray
	* @returns boolean indicating whether two ndarrays have the same shape
	*
	* @example
	* var array = require( './../../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* var y = array( [ [ 5, 6 ], [ 7, 8 ] ] );
	*
	* var bool = ns.hasEqualShape( x, y );
	* // returns true
	*/
	hasEqualShape: typeof hasEqualShape;

	/**
	* Returns a boolean indicating if a provided ndarray data type can be cast to another ndarray data type according to a specified casting mode.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @param casting - ndarray casting mode
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isAllowedDataTypeCast( 'float32', 'float64', 'safe' );
	* // returns true
	*
	* bool = ns.isAllowedDataTypeCast( 'float64', 'int32', 'safe' );
	* // returns false
	*/
	isAllowedDataTypeCast: typeof isAllowedDataTypeCast;

	/**
	* Tests whether an input value is a supported ndarray boolean data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray boolean data type
	*
	* @example
	* var bool = ns.isBooleanDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'bool' );
	* // returns true
	*
	* bool = ns.isBooleanDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'foo' );
	* // returns false
	*/
	isBooleanDataType: typeof isBooleanDataType;

	/**
	* Returns a boolean indicating if a buffer length is compatible with provided ndarray meta data.
	*
	* @param len - buffer length
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if a buffer length is compatible
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isBufferLengthCompatible( 4, shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 2;
	*
	* var bool = ns.isBufferLengthCompatible( 4, shape, strides, offset );
	* // returns false
	*/
	isBufferLengthCompatible: typeof isBufferLengthCompatible;

	/**
	* Returns a boolean indicating if a buffer length is compatible with a provided shape array.
	*
	* @param len - buffer length
	* @param shape - array shape
	* @returns boolean indicating if a buffer length is compatible with a provided shape array
	*
	* @example
	* var shape = [ 2, 2 ];
	*
	* var bool = ns.isBufferLengthCompatibleShape( 4, shape );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	*
	* var bool = ns.isBufferLengthCompatibleShape( 3, shape );
	* // returns false
	*/
	isBufferLengthCompatibleShape: typeof isBufferLengthCompatibleShape;

	/**
	* Tests whether an input value is a supported ndarray casting mode.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray casting mode
	*
	* @example
	* var bool = ns.isCastingMode( 'none' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'equiv' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'safe' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'mostly-safe' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'same-kind' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'unsafe' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'foo' );
	* // returns false
	*/
	isCastingMode: typeof isCastingMode;

	/**
	* Returns a boolean indicating if an array is column-major based on a provided stride array.
	*
	* @param strides - integer stride array
	* @returns boolean indicating if an array is column-major
	*
	* @example
	* var bool = ns.isColumnMajor( [ 1, 2 ] );
	* // returns true
	*
	* bool = ns.isColumnMajor( [ 2, 1 ] );
	* // returns false
	*/
	isColumnMajor: typeof isColumnMajor;

	/**
	* Returns a boolean indicating if an array is column-major contiguous.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is column-major contiguous
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 1, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isColumnMajorContiguous( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 1, -2 ];
	* var offset = 2;
	*
	* var bool = ns.isColumnMajorContiguous( shape, strides, offset );
	* // returns false
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isColumnMajorContiguous( shape, strides, offset );
	* // returns false
	*/
	isColumnMajorContiguous: typeof isColumnMajorContiguous;

	/**
	* Tests whether an input value is the string representing column-major order.
	*
	* @param v - value to test
	* @returns boolean result
	*
	* @example
	* var bool = ns.isColumnMajorString( 'column-major' );
	* // returns true
	*
	* bool = ns.isColumnMajorString( 'row-major' );
	* // returns false
	*
	* bool = ns.isColumnMajorString( 'foo' );
	* // returns false
	*/
	isColumnMajorString: typeof isColumnMajorString;

	/**
	* Tests whether an input value is a supported ndarray complex-valued floating-point data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray complex-valued floating-point data type
	*
	* @example
	* var bool = ns.isComplexFloatingPointDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'complex64' );
	* // returns true
	*
	* bool = ns.isComplexFloatingPointDataType( 'complex128' );
	* // returns true
	*
	* bool = ns.isComplexFloatingPointDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'foo' );
	* // returns false
	*/
	isComplexFloatingPointDataType: typeof isComplexFloatingPointDataType;

	/**
	* Returns a boolean indicating if an array is contiguous.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is contiguous
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isContiguous( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ -2, 1 ];
	* var offset = 2;
	*
	* var bool = ns.isContiguous( shape, strides, offset );
	* // returns false
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isContiguous( shape, strides, offset );
	* // returns false
	*/
	isContiguous: typeof isContiguous;

	/**
	* Tests whether an input value is a supported ndarray data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray data type
	*
	* @example
	* var bool = ns.isDataType( 'binary' );
	* // returns true
	*
	* bool = ns.isDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isDataType( 'generic' );
	* // returns true
	*
	* bool = ns.isDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isDataType( 'foo' );
	* // returns false
	*/
	isDataType: typeof isDataType;

	/**
	* Tests whether an input value is a supported ndarray floating-point data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray floating-point data type
	*
	* @example
	* var bool = ns.isFloatingPointDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isFloatingPointDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isFloatingPointDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'foo' );
	* // returns false
	*/
	isFloatingPointDataType: typeof isFloatingPointDataType;

	/**
	* Tests whether an input value is a supported ndarray index mode.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray index mode
	*
	* @example
	* var bool = ns.isIndexMode( 'wrap' );
	* // returns true
	*
	* bool = ns.isIndexMode( 'clamp' );
	* // returns true
	*
	* bool = ns.isIndexMode( 'throw' );
	* // returns true
	*
	* bool = ns.isIndexMode( 'foo' );
	* // returns false
	*/
	isIndexMode: typeof isIndexMode;

	/**
	* Tests whether an input value is a supported ndarray integer (i.e., signed or unsigned integer) data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray integer data type
	*
	* @example
	* var bool = ns.isIntegerDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'foo' );
	* // returns false
	*/
	isIntegerDataType: typeof isIntegerDataType;

	/**
	* Returns a boolean indicating if a provided ndarray data type can be safely cast or, for floating-point data types, downcast to another ndarray data type.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isMostlySafeDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isMostlySafeDataTypeCast( 'float64', 'int32' );
	* // returns false
	*/
	isMostlySafeDataTypeCast: typeof isMostlySafeDataTypeCast;

	/**
	* Tests whether an input value is a supported ndarray numeric data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray numeric data type
	*
	* @example
	* var bool = ns.isNumericDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isNumericDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isNumericDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'foo' );
	* // returns false
	*/
	isNumericDataType: typeof isNumericDataType;

	/**
	* Tests whether an input value is an ndarray order.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is an ndarray order
	*
	* @example
	* var bool = ns.isOrder( 'row-major' );
	* // returns true
	*
	* bool = ns.isOrder( 'column-major' );
	* // returns true
	*
	* bool = ns.isOrder( 'foo' );
	* // returns false
	*/
	isOrder: typeof isOrder;

	/**
	* Tests whether an input value is a supported ndarray output data type policy.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray output data type policy
	*
	* @example
	* var bool = ns.isOutputDataTypePolicy( 'boolean' );
	* // returns true
	*
	* bool = ns.isOutputDataTypePolicy( 'real' );
	* // returns true
	*
	* bool = ns.isOutputDataTypePolicy( 'numeric' );
	* // returns true
	*
	* bool = ns.isOutputDataTypePolicy( 'foo' );
	* // returns false
	*/
	isOutputDataTypePolicy: typeof isOutputDataTypePolicy;

	/**
	* Tests whether an ndarray is read-only.
	*
	* @param arr - input ndarray
	* @returns boolean indicating whether an ndarray is read-only
	*
	* @example
	* var array = require( './../../../../array' );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
	*     'readonly': true
	* });
	* var bool = ns.isReadOnly( x );
	* // returns true
	*
	* x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
	*     'readonly': false
	* });
	* bool = ns.isReadOnly( x );
	* // returns false
	*/
	isReadOnly: typeof isReadOnly;

	/**
	* Tests whether an input value is a supported ndarray real-valued data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray real-valued data type
	*
	* @example
	* var bool = ns.isRealDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isRealDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'complex128' );
	* // returns false
	*
	* bool = ns.isRealDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isRealDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'foo' );
	* // returns false
	*/
	isRealDataType: typeof isRealDataType;

	/**
	* Tests whether an input value is a supported ndarray real-valued floating-point data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray real-valued floating-point data type
	*
	* @example
	* var bool = ns.isRealFloatingPointDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isRealFloatingPointDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isRealFloatingPointDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'foo' );
	* // returns false
	*/
	isRealFloatingPointDataType: typeof isRealFloatingPointDataType;

	/**
	* Returns a boolean indicating if an array is row-major based on a provided stride array.
	*
	* @param strides - integer stride array
	* @returns boolean indicating if an array is row-major
	*
	* @example
	* var bool = ns.isRowMajor( [ 2, 1 ] );
	* // returns true
	*
	* bool = ns.isRowMajor( [ 1, 2 ] );
	* // returns false
	*/
	isRowMajor: typeof isRowMajor;

	/**
	* Returns a boolean indicating if an array is row-major contiguous.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is row-major contiguous
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isRowMajorContiguous( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ -2, 1 ];
	* var offset = 2;
	*
	* var bool = ns.isRowMajorContiguous( shape, strides, offset );
	* // returns false
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isRowMajorContiguous( shape, strides, offset );
	* // returns false
	*/
	isRowMajorContiguous: typeof isRowMajorContiguous;

	/**
	* Tests whether an input value is the string representing row-major order.
	*
	* @param v - value to test
	* @returns boolean result
	*
	* @example
	* var bool = ns.isRowMajorString( 'row-major' );
	* // returns true
	*
	* bool = ns.isRowMajorString( 'column-major' );
	* // returns false
	*
	* bool = ns.isRowMajorString( 'foo' );
	* // returns false
	*/
	isRowMajorString: typeof isRowMajorString;

	/**
	* Returns a boolean indicating if a provided ndarray data type can be safely cast to another ndarray data type.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @returns boolean indicating if a data type can be safely cast to another data type
	*
	* @example
	* var bool = ns.isSafeDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isSafeDataTypeCast( 'float64', 'int32' );
	* // returns false
	*/
	isSafeDataTypeCast: typeof isSafeDataTypeCast;

	/**
	* Returns a boolean indicating if a provided ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isSameKindDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isSameKindDataTypeCast( 'uint16', 'int16' );
	* // returns false
	*/
	isSameKindDataTypeCast: typeof isSameKindDataTypeCast;

	/**
	* Returns a boolean indicating whether a scalar value can be safely cast or, for floating-point data types, downcast to specified ndarray data type.
	*
	* @param value - scalar value
	* @param dtype - ndarray data type
	* @returns boolean indicating whether a scalar value can be safely cast
	*
	* @example
	* var bool = ns.isScalarMostlySafeCompatible( 3.0, 'float64' );
	* // returns true
	*
	* @example
	* var bool = ns.isScalarMostlySafeCompatible( 3.14, 'int32' );
	* // returns false
	*
	* @example
	* var bool = ns.isScalarMostlySafeCompatible( -1, 'uint32' );
	* // returns false
	*/
	isScalarMostlySafeCompatible: typeof isScalarMostlySafeCompatible;

	/**
	* Tests whether an input value is a supported ndarray signed integer data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray signed integer data type
	*
	* @example
	* var bool = ns.isSignedIntegerDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isSignedIntegerDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isSignedIntegerDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isSignedIntegerDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'foo' );
	* // returns false
	*/
	isSignedIntegerDataType: typeof isSignedIntegerDataType;

	/**
	* Returns a boolean indicating if an array is compatible with a single memory segment.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is compatible with a single memory segment
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isSingleSegmentCompatible( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 10 ];
	* var strides = [ 3 ];
	* var offset = 0;
	*
	* var bool = ns.isSingleSegmentCompatible( shape, strides, offset );
	* // returns false
	*/
	isSingleSegmentCompatible: typeof isSingleSegmentCompatible;

	/**
	* Tests whether an input value is a supported ndarray unsigned integer data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray unsigned integer data type
	*
	* @example
	* var bool = ns.isUnsignedIntegerDataType( 'binary' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'foo' );
	* // returns false
	*/
	isUnsignedIntegerDataType: typeof isUnsignedIntegerDataType;
}

/**
* Base ndarray assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
