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
* @name ndarrayCastingModes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/casting-modes}
*/
setReadOnly( ns, 'ndarrayCastingModes', require( './../casting-modes' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/ctor}
*/
setReadOnly( ns, 'ndarray', require( './../ctor' ) );

/**
* @name ndarrayDataBuffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/data-buffer}
*/
setReadOnly( ns, 'ndarrayDataBuffer', require( './../data-buffer' ) );

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
* @name ndarrayDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/dtype}
*/
setReadOnly( ns, 'ndarrayDataType', require( './../dtype' ) );

/**
* @name ndarrayDataTypes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/dtypes}
*/
setReadOnly( ns, 'ndarrayDataTypes', require( './../dtypes' ) );

/**
* @name ndempty
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/empty}
*/
setReadOnly( ns, 'ndempty', require( './../empty' ) );

/**
* @name ndemptyLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/empty-like}
*/
setReadOnly( ns, 'ndemptyLike', require( './../empty-like' ) );

/**
* @name FancyArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/fancy}
*/
setReadOnly( ns, 'FancyArray', require( './../fancy' ) );

/**
* @name ndarrayFlag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/flag}
*/
setReadOnly( ns, 'ndarrayFlag', require( './../flag' ) );

/**
* @name ndarrayFlags
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/flags}
*/
setReadOnly( ns, 'ndarrayFlags', require( './../flags' ) );

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
* @name ndarrayIndexModes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/index-modes}
*/
setReadOnly( ns, 'ndarrayIndexModes', require( './../index-modes' ) );

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
* @name ndarrayMinDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/min-dtype}
*/
setReadOnly( ns, 'ndarrayMinDataType', require( './../min-dtype' ) );

/**
* @name ndarrayMostlySafeCasts
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/mostly-safe-casts}
*/
setReadOnly( ns, 'ndarrayMostlySafeCasts', require( './../mostly-safe-casts' ) );

/**
* @name ndims
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/ndims}
*/
setReadOnly( ns, 'ndims', require( './../ndims' ) );

/**
* @name ndarrayNextDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/next-dtype}
*/
setReadOnly( ns, 'ndarrayNextDataType', require( './../next-dtype' ) );

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
* @name ndarrayOffset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/offset}
*/
setReadOnly( ns, 'ndarrayOffset', require( './../offset' ) );

/**
* @name ndarrayOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/order}
*/
setReadOnly( ns, 'ndarrayOrder', require( './../order' ) );

/**
* @name ndarrayOrders
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/orders}
*/
setReadOnly( ns, 'ndarrayOrders', require( './../orders' ) );

/**
* @name ndarrayOutputDataTypePolicies
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/output-dtype-policies}
*/
setReadOnly( ns, 'ndarrayOutputDataTypePolicies', require( './../output-dtype-policies' ) );

/**
* @name ndarrayPromotionRules
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/promotion-rules}
*/
setReadOnly( ns, 'ndarrayPromotionRules', require( './../promotion-rules' ) );

/**
* @name ndarraySafeCasts
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/safe-casts}
*/
setReadOnly( ns, 'ndarraySafeCasts', require( './../safe-casts' ) );

/**
* @name ndarraySameKindCasts
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/same-kind-casts}
*/
setReadOnly( ns, 'ndarraySameKindCasts', require( './../same-kind-casts' ) );

/**
* @name ndarrayShape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/shape}
*/
setReadOnly( ns, 'ndarrayShape', require( './../shape' ) );

/**
* @name ndslice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice}
*/
setReadOnly( ns, 'ndslice', require( './../slice' ) );

/**
* @name ndsliceAssign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-assign}
*/
setReadOnly( ns, 'ndsliceAssign', require( './../slice-assign' ) );

/**
* @name ndsliceDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-dimension}
*/
setReadOnly( ns, 'ndsliceDimension', require( './../slice-dimension' ) );

/**
* @name ndsliceDimensionFrom
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-dimension-from}
*/
setReadOnly( ns, 'ndsliceDimensionFrom', require( './../slice-dimension-from' ) );

/**
* @name ndsliceDimensionTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-dimension-to}
*/
setReadOnly( ns, 'ndsliceDimensionTo', require( './../slice-dimension-to' ) );

/**
* @name ndsliceFrom
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-from}
*/
setReadOnly( ns, 'ndsliceFrom', require( './../slice-from' ) );

/**
* @name ndsliceTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/slice-to}
*/
setReadOnly( ns, 'ndsliceTo', require( './../slice-to' ) );

/**
* @name ndarrayStride
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/stride}
*/
setReadOnly( ns, 'ndarrayStride', require( './../stride' ) );

/**
* @name ndarrayStrides
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/strides}
*/
setReadOnly( ns, 'ndarrayStrides', require( './../strides' ) );

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
* @name ndzeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/zeros}
*/
setReadOnly( ns, 'ndzeros', require( './../zeros' ) );

/**
* @name ndzerosLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/zeros-like}
*/
setReadOnly( ns, 'ndzerosLike', require( './../zeros-like' ) );


// EXPORTS //

module.exports = ns;
