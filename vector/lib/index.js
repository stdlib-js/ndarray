/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name BooleanVector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/bool}
*/
setReadOnly( ns, 'BooleanVector', require( './../../vector/bool' ) );

/**
* @name vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/ctor}
*/
setReadOnly( ns, 'vector', require( './../../vector/ctor' ) );

/**
* @name Float32Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/float32}
*/
setReadOnly( ns, 'Float32Vector', require( './../../vector/float32' ) );

/**
* @name Float64Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/float64}
*/
setReadOnly( ns, 'Float64Vector', require( './../../vector/float64' ) );

/**
* @name Int8Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/int8}
*/
setReadOnly( ns, 'Int8Vector', require( './../../vector/int8' ) );

/**
* @name Int16Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/int16}
*/
setReadOnly( ns, 'Int16Vector', require( './../../vector/int16' ) );

/**
* @name Int32Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/int32}
*/
setReadOnly( ns, 'Int32Vector', require( './../../vector/int32' ) );

/**
* @name Uint8Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/uint8}
*/
setReadOnly( ns, 'Uint8Vector', require( './../../vector/uint8' ) );

/**
* @name Uint8ClampedVector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/uint8c}
*/
setReadOnly( ns, 'Uint8ClampedVector', require( './../../vector/uint8c' ) );

/**
* @name Uint16Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/uint16}
*/
setReadOnly( ns, 'Uint16Vector', require( './../../vector/uint16' ) );

/**
* @name Uint32Vector
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/vector/uint32}
*/
setReadOnly( ns, 'Uint32Vector', require( './../../vector/uint32' ) );


// EXPORTS //

module.exports = ns;
