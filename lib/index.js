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
* @name array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/array}
*/
setReadOnly( ns, 'array', require( './../array' ) );

/**
* @name at
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/at}
*/
setReadOnly( ns, 'at', require( './../at' ) );

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/ndarray/base}
*/
setReadOnly( ns, 'base', require( './../base' ) );

/**
* @name broadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/broadcast-array}
*/
setReadOnly( ns, 'broadcastArray', require( './../broadcast-array' ) );

/**
* @name broadcastArrays
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/broadcast-arrays}
*/
setReadOnly( ns, 'broadcastArrays', require( './../broadcast-arrays' ) );

/**
* @name castingModes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/casting-modes}
*/
setReadOnly( ns, 'castingModes', require( './../casting-modes' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/ctor}
*/
setReadOnly( ns, 'ndarray', require( './../ctor' ) );

/**
* @name dataBuffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/data-buffer}
*/
setReadOnly( ns, 'dataBuffer', require( './../data-buffer' ) );

/**
* @name defaults
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/defaults}
*/
setReadOnly( ns, 'defaults', require( './../defaults' ) );

/**
* @name dispatch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/dispatch}
*/
setReadOnly( ns, 'dispatch', require( './../dispatch' ) );

/**
* @name dtype
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/dtype}
*/
setReadOnly( ns, 'dtype', require( './../dtype' ) );

/**
* @name dtypes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/dtypes}
*/
setReadOnly( ns, 'dtypes', require( './../dtypes' ) );

/**
* @name empty
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/empty}
*/
setReadOnly( ns, 'empty', require( './../empty' ) );

/**
* @name emptyLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/empty-like}
*/
setReadOnly( ns, 'emptyLike', require( './../empty-like' ) );

/**
* @name FancyArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/fancy}
*/
setReadOnly( ns, 'FancyArray', require( './../fancy' ) );

/**
* @name flag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/flag}
*/
setReadOnly( ns, 'flag', require( './../flag' ) );

/**
* @name flags
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/flags}
*/
setReadOnly( ns, 'flags', require( './../flags' ) );

/**
* @name scalar2ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/from-scalar}
*/
setReadOnly( ns, 'scalar2ndarray', require( './../from-scalar' ) );

/**
* @name ind2sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/ind2sub}
*/
setReadOnly( ns, 'ind2sub', require( './../ind2sub' ) );

/**
* @name indexModes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/index-modes}
*/
setReadOnly( ns, 'indexModes', require( './../index-modes' ) );

/**
* @name iter
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/ndarray/iter}
*/
setReadOnly( ns, 'iter', require( './../iter' ) );

/**
* @name maybeBroadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/maybe-broadcast-array}
*/
setReadOnly( ns, 'maybeBroadcastArray', require( './../maybe-broadcast-array' ) );

/**
* @name maybeBroadcastArrays
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/maybe-broadcast-arrays}
*/
setReadOnly( ns, 'maybeBroadcastArrays', require( './../maybe-broadcast-arrays' ) );

/**
* @name minDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/min-dtype}
*/
setReadOnly( ns, 'minDataType', require( './../min-dtype' ) );

/**
* @name mostlySafeCasts
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/mostly-safe-casts}
*/
setReadOnly( ns, 'mostlySafeCasts', require( './../mostly-safe-casts' ) );

/**
* @name ndims
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/ndims}
*/
setReadOnly( ns, 'ndims', require( './../ndims' ) );

/**
* @name nextDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/next-dtype}
*/
setReadOnly( ns, 'nextDataType', require( './../next-dtype' ) );

/**
* @name numel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/numel}
*/
setReadOnly( ns, 'numel', require( './../numel' ) );

/**
* @name numelDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/numel-dimension}
*/
setReadOnly( ns, 'numelDimension', require( './../numel-dimension' ) );

/**
* @name offset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/offset}
*/
setReadOnly( ns, 'offset', require( './../offset' ) );

/**
* @name order
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/order}
*/
setReadOnly( ns, 'order', require( './../order' ) );

/**
* @name orders
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/orders}
*/
setReadOnly( ns, 'orders', require( './../orders' ) );

/**
* @name outputDataTypePolicies
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/output-dtype-policies}
*/
setReadOnly( ns, 'outputDataTypePolicies', require( './../output-dtype-policies' ) );

/**
* @name promotionRules
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/promotion-rules}
*/
setReadOnly( ns, 'promotionRules', require( './../promotion-rules' ) );

/**
* @name safeCasts
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/safe-casts}
*/
setReadOnly( ns, 'safeCasts', require( './../safe-casts' ) );

/**
* @name sameKindCasts
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/same-kind-casts}
*/
setReadOnly( ns, 'sameKindCasts', require( './../same-kind-casts' ) );

/**
* @name shape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/shape}
*/
setReadOnly( ns, 'shape', require( './../shape' ) );

/**
* @name slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice}
*/
setReadOnly( ns, 'slice', require( './../slice' ) );

/**
* @name sliceAssign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-assign}
*/
setReadOnly( ns, 'ndsliceAssign', require( './../slice-assign' ) );

/**
* @name sliceDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-dimension}
*/
setReadOnly( ns, 'sliceDimension', require( './../slice-dimension' ) );

/**
* @name sliceDimensionFrom
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-dimension-from}
*/
setReadOnly( ns, 'sliceDimensionFrom', require( './../slice-dimension-from' ) );

/**
* @name sliceDimensionTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-dimension-to}
*/
setReadOnly( ns, 'sliceDimensionTo', require( './../slice-dimension-to' ) );

/**
* @name sliceFrom
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-from}
*/
setReadOnly( ns, 'sliceFrom', require( './../slice-from' ) );

/**
* @name sliceTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-to}
*/
setReadOnly( ns, 'sliceTo', require( './../slice-to' ) );

/**
* @name stride
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/stride}
*/
setReadOnly( ns, 'stride', require( './../stride' ) );

/**
* @name strides
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/strides}
*/
setReadOnly( ns, 'strides', require( './../strides' ) );

/**
* @name sub2ind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/sub2ind}
*/
setReadOnly( ns, 'sub2ind', require( './../sub2ind' ) );

/**
* @name ndarray2array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/to-array}
*/
setReadOnly( ns, 'ndarray2array', require( './../to-array' ) );

/**
* @name zeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/zeros}
*/
setReadOnly( ns, 'zeros', require( './../zeros' ) );

/**
* @name zerosLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/zeros-like}
*/
setReadOnly( ns, 'zerosLike', require( './../zeros-like' ) );


// EXPORTS //

module.exports = ns;
