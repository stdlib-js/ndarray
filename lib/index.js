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
* @name ndarrayMinDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/min-dtype}
*/
setReadOnly( ns, 'ndarrayMinDataType', require( './../min-dtype' ) );

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
