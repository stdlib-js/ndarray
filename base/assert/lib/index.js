/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name hasEqualShape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/has-equal-shape}
*/
setReadOnly( ns, 'hasEqualShape', require( './../../../base/assert/has-equal-shape' ) );

/**
* @name isAllowedDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-allowed-data-type-cast}
*/
setReadOnly( ns, 'isAllowedDataTypeCast', require( './../../../base/assert/is-allowed-data-type-cast' ) );

/**
* @name isBooleanDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-boolean-data-type}
*/
setReadOnly( ns, 'isBooleanDataType', require( './../../../base/assert/is-boolean-data-type' ) );

/**
* @name isBooleanIndexDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-boolean-index-data-type}
*/
setReadOnly( ns, 'isBooleanIndexDataType', require( './../../../base/assert/is-boolean-index-data-type' ) );

/**
* @name isBufferLengthCompatible
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-buffer-length-compatible}
*/
setReadOnly( ns, 'isBufferLengthCompatible', require( './../../../base/assert/is-buffer-length-compatible' ) );

/**
* @name isBufferLengthCompatibleShape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape}
*/
setReadOnly( ns, 'isBufferLengthCompatibleShape', require( './../../../base/assert/is-buffer-length-compatible-shape' ) );

/**
* @name isCastingMode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-casting-mode}
*/
setReadOnly( ns, 'isCastingMode', require( './../../../base/assert/is-casting-mode' ) );

/**
* @name isColumnMajor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-column-major}
*/
setReadOnly( ns, 'isColumnMajor', require( './../../../base/assert/is-column-major' ) );

/**
* @name isColumnMajorContiguous
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-column-major-contiguous}
*/
setReadOnly( ns, 'isColumnMajorContiguous', require( './../../../base/assert/is-column-major-contiguous' ) );

/**
* @name isColumnMajorString
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-column-major-string}
*/
setReadOnly( ns, 'isColumnMajorString', require( './../../../base/assert/is-column-major-string' ) );

/**
* @name isComplexFloatingPointDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-complex-floating-point-data-type}
*/
setReadOnly( ns, 'isComplexFloatingPointDataType', require( './../../../base/assert/is-complex-floating-point-data-type' ) );

/**
* @name isContiguous
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-contiguous}
*/
setReadOnly( ns, 'isContiguous', require( './../../../base/assert/is-contiguous' ) );

/**
* @name isDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-data-type}
*/
setReadOnly( ns, 'isDataType', require( './../../../base/assert/is-data-type' ) );

/**
* @name isDataTypeString
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-data-type-string}
*/
setReadOnly( ns, 'isDataTypeString', require( './../../../base/assert/is-data-type-string' ) );

/**
* @name isFloatingPointDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-floating-point-data-type}
*/
setReadOnly( ns, 'isFloatingPointDataType', require( './../../../base/assert/is-floating-point-data-type' ) );

/**
* @name isIndexDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-index-data-type}
*/
setReadOnly( ns, 'isIndexDataType', require( './../../../base/assert/is-index-data-type' ) );

/**
* @name isIndexMode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-index-mode}
*/
setReadOnly( ns, 'isIndexMode', require( './../../../base/assert/is-index-mode' ) );

/**
* @name isInputCastingPolicy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-input-casting-policy}
*/
setReadOnly( ns, 'isInputCastingPolicy', require( './../../../base/assert/is-input-casting-policy' ) );

/**
* @name isIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-integer-data-type}
*/
setReadOnly( ns, 'isIntegerDataType', require( './../../../base/assert/is-integer-data-type' ) );

/**
* @name isIntegerIndexDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-integer-index-data-type}
*/
setReadOnly( ns, 'isIntegerIndexDataType', require( './../../../base/assert/is-integer-index-data-type' ) );

/**
* @name isMaskIndexDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-mask-index-data-type}
*/
setReadOnly( ns, 'isMaskIndexDataType', require( './../../../base/assert/is-mask-index-data-type' ) );

/**
* @name isMostlySafeDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-mostly-safe-data-type-cast}
*/
setReadOnly( ns, 'isMostlySafeDataTypeCast', require( './../../../base/assert/is-mostly-safe-data-type-cast' ) );

/**
* @name isNumericDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-numeric-data-type}
*/
setReadOnly( ns, 'isNumericDataType', require( './../../../base/assert/is-numeric-data-type' ) );

/**
* @name isOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-order}
*/
setReadOnly( ns, 'isOrder', require( './../../../base/assert/is-order' ) );

/**
* @name isOutputDataTypePolicy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-output-data-type-policy}
*/
setReadOnly( ns, 'isOutputDataTypePolicy', require( './../../../base/assert/is-output-data-type-policy' ) );

/**
* @name isReadOnly
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-read-only}
*/
setReadOnly( ns, 'isReadOnly', require( './../../../base/assert/is-read-only' ) );

/**
* @name isRealDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-real-data-type}
*/
setReadOnly( ns, 'isRealDataType', require( './../../../base/assert/is-real-data-type' ) );

/**
* @name isRealFloatingPointDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-real-floating-point-data-type}
*/
setReadOnly( ns, 'isRealFloatingPointDataType', require( './../../../base/assert/is-real-floating-point-data-type' ) );

/**
* @name isRowMajor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-row-major}
*/
setReadOnly( ns, 'isRowMajor', require( './../../../base/assert/is-row-major' ) );

/**
* @name isRowMajorContiguous
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-row-major-contiguous}
*/
setReadOnly( ns, 'isRowMajorContiguous', require( './../../../base/assert/is-row-major-contiguous' ) );

/**
* @name isRowMajorString
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-row-major-string}
*/
setReadOnly( ns, 'isRowMajorString', require( './../../../base/assert/is-row-major-string' ) );

/**
* @name isSafeDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-safe-data-type-cast}
*/
setReadOnly( ns, 'isSafeDataTypeCast', require( './../../../base/assert/is-safe-data-type-cast' ) );

/**
* @name isSameKindDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-same-kind-data-type-cast}
*/
setReadOnly( ns, 'isSameKindDataTypeCast', require( './../../../base/assert/is-same-kind-data-type-cast' ) );

/**
* @name isScalarMostlySafeCompatible
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-scalar-mostly-safe-compatible}
*/
setReadOnly( ns, 'isScalarMostlySafeCompatible', require( './../../../base/assert/is-scalar-mostly-safe-compatible' ) );

/**
* @name isSignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-signed-integer-data-type}
*/
setReadOnly( ns, 'isSignedIntegerDataType', require( './../../../base/assert/is-signed-integer-data-type' ) );

/**
* @name isSingleSegmentCompatible
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-single-segment-compatible}
*/
setReadOnly( ns, 'isSingleSegmentCompatible', require( './../../../base/assert/is-single-segment-compatible' ) );

/**
* @name isStructDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-struct-data-type}
*/
setReadOnly( ns, 'isStructDataType', require( './../../../base/assert/is-struct-data-type' ) );

/**
* @name isUnsignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-unsigned-integer-data-type}
*/
setReadOnly( ns, 'isUnsignedIntegerDataType', require( './../../../base/assert/is-unsigned-integer-data-type' ) );


// EXPORTS //

module.exports = ns;
