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

/*
* The following modules are intentionally not exported: function-object, napi, unary
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
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/ndarray/base/assert}
*/
setReadOnly( ns, 'assert', require( './../../base/assert' ) );

/**
* @name bind2vind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/bind2vind}
*/
setReadOnly( ns, 'bind2vind', require( './../../base/bind2vind' ) );

/**
* @name broadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/broadcast-array}
*/
setReadOnly( ns, 'broadcastArray', require( './../../base/broadcast-array' ) );

/**
* @name broadcastShapes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/broadcast-shapes}
*/
setReadOnly( ns, 'broadcastShapes', require( './../../base/broadcast-shapes' ) );

/**
* @name buffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer}
*/
setReadOnly( ns, 'buffer', require( './../../base/buffer' ) );

/**
* @name bufferCtors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer-ctors}
*/
setReadOnly( ns, 'bufferCtors', require( './../../base/buffer-ctors' ) );

/**
* @name bufferDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer-dtype}
*/
setReadOnly( ns, 'bufferDataType', require( './../../base/buffer-dtype' ) );

/**
* @name bufferDataTypeEnum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer-dtype-enum}
*/
setReadOnly( ns, 'bufferDataTypeEnum', require( './../../base/buffer-dtype-enum' ) );

/**
* @name bytesPerElement
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/bytes-per-element}
*/
setReadOnly( ns, 'bytesPerElement', require( './../../base/bytes-per-element' ) );

/**
* @name char2dtype
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/char2dtype}
*/
setReadOnly( ns, 'char2dtype', require( './../../base/char2dtype' ) );

/**
* @name clampIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/clamp-index}
*/
setReadOnly( ns, 'clampIndex', require( './../../base/clamp-index' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ctor}
*/
setReadOnly( ns, 'ndarray', require( './../../base/ctor' ) );

/**
* @name dtypeChar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-char}
*/
setReadOnly( ns, 'dtypeChar', require( './../../base/dtype-char' ) );

/**
* @name dtypeDesc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-desc}
*/
setReadOnly( ns, 'dtypeDesc', require( './../../base/dtype-desc' ) );

/**
* @name dtypeEnum2Str
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-enum2str}
*/
setReadOnly( ns, 'dtypeEnum2Str', require( './../../base/dtype-enum2str' ) );

/**
* @name dtypeResolveEnum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-resolve-enum}
*/
setReadOnly( ns, 'dtypeResolveEnum', require( './../../base/dtype-resolve-enum' ) );

/**
* @name dtypeResolveStr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-resolve-str}
*/
setReadOnly( ns, 'dtypeResolveStr', require( './../../base/dtype-resolve-str' ) );

/**
* @name dtypeStr2Enum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-str2enum}
*/
setReadOnly( ns, 'dtypeStr2Enum', require( './../../base/dtype-str2enum' ) );

/**
* @name dtype2c
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype2c}
*/
setReadOnly( ns, 'dtype2c', require( './../../base/dtype2c' ) );

/**
* @name dtypes2signatures
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtypes2signatures}
*/
setReadOnly( ns, 'dtypes2signatures', require( './../../base/dtypes2signatures' ) );

/**
* @name expandDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/expand-dimensions}
*/
setReadOnly( ns, 'expandDimensions', require( './../../base/expand-dimensions' ) );

/**
* @name scalar2ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/from-scalar}
*/
setReadOnly( ns, 'scalar2ndarray', require( './../../base/from-scalar' ) );

/**
* @name ind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ind}
*/
setReadOnly( ns, 'ind', require( './../../base/ind' ) );

/**
* @name ind2sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ind2sub}
*/
setReadOnly( ns, 'ind2sub', require( './../../base/ind2sub' ) );

/**
* @name iterationOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/iteration-order}
*/
setReadOnly( ns, 'iterationOrder', require( './../../base/iteration-order' ) );

/**
* @name maxViewBufferIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/max-view-buffer-index}
*/
setReadOnly( ns, 'maxViewBufferIndex', require( './../../base/max-view-buffer-index' ) );

/**
* @name maybeBroadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/maybe-broadcast-array}
*/
setReadOnly( ns, 'maybeBroadcastArray', require( './../../base/maybe-broadcast-array' ) );

/**
* @name metaDataProps
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/meta-data-props}
*/
setReadOnly( ns, 'metaDataProps', require( './../../base/meta-data-props' ) );

/**
* @name minViewBufferIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/min-view-buffer-index}
*/
setReadOnly( ns, 'minViewBufferIndex', require( './../../base/min-view-buffer-index' ) );

/**
* @name minmaxViewBufferIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/minmax-view-buffer-index}
*/
setReadOnly( ns, 'minmaxViewBufferIndex', require( './../../base/minmax-view-buffer-index' ) );

/**
* @name ndarraylike2object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ndarraylike2object}
*/
setReadOnly( ns, 'ndarraylike2object', require( './../../base/ndarraylike2object' ) );

/**
* @name nonsingletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/nonsingleton-dimensions}
*/
setReadOnly( ns, 'nonsingletonDimensions', require( './../../base/nonsingleton-dimensions' ) );

/**
* @name numel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/numel}
*/
setReadOnly( ns, 'numel', require( './../../base/numel' ) );

/**
* @name prependSingletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/prepend-singleton-dimensions}
*/
setReadOnly( ns, 'prependSingletonDimensions', require( './../../base/prepend-singleton-dimensions' ) );

/**
* @name removeSingletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/remove-singleton-dimensions}
*/
setReadOnly( ns, 'removeSingletonDimensions', require( './../../base/remove-singleton-dimensions' ) );

/**
* @name serializeMetaData
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/serialize-meta-data}
*/
setReadOnly( ns, 'serializeMetaData', require( './../../base/serialize-meta-data' ) );

/**
* @name shape2strides
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/shape2strides}
*/
setReadOnly( ns, 'shape2strides', require( './../../base/shape2strides' ) );

/**
* @name singletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/singleton-dimensions}
*/
setReadOnly( ns, 'singletonDimensions', require( './../../base/singleton-dimensions' ) );

/**
* @name strides2offset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/strides2offset}
*/
setReadOnly( ns, 'strides2offset', require( './../../base/strides2offset' ) );

/**
* @name strides2order
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/strides2order}
*/
setReadOnly( ns, 'strides2order', require( './../../base/strides2order' ) );

/**
* @name sub2ind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/sub2ind}
*/
setReadOnly( ns, 'sub2ind', require( './../../base/sub2ind' ) );

/**
* @name ndarray2array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/to-array}
*/
setReadOnly( ns, 'ndarray2array', require( './../../base/to-array' ) );

/**
* @name transpose
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/transpose}
*/
setReadOnly( ns, 'transpose', require( './../../base/transpose' ) );

/**
* @name unary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary}
*/
setReadOnly( ns, 'unary', require( './../../base/unary' ) );

/**
* @name unaryLoopOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary-loop-interchange-order}
*/
setReadOnly( ns, 'unaryLoopOrder', require( './../../base/unary-loop-interchange-order' ) );

/**
* @name unaryBlockSize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary-tiling-block-size}
*/
setReadOnly( ns, 'unaryBlockSize', require( './../../base/unary-tiling-block-size' ) );

/**
* @name vind2bind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/vind2bind}
*/
setReadOnly( ns, 'vind2bind', require( './../../base/vind2bind' ) );

/**
* @name wrapIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/wrap-index}
*/
setReadOnly( ns, 'wrapIndex', require( './../../base/wrap-index' ) );

/**
* @name zeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/zeros}
*/
setReadOnly( ns, 'zeros', require( './../../base/zeros' ) );

/**
* @name zerosLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/zeros-like}
*/
setReadOnly( ns, 'zerosLike', require( './../../base/zeros-like' ) );


// EXPORTS //

module.exports = ns;
