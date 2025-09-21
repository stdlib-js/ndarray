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

/**
* Return a list of ndarray data types.
*
* @module @stdlib/ndarray/dtypes
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
*
* var list = dtypes();
* // returns [...]
*/

// MODULES //

var dtypeObjects = require( './../../base/dtype-objects' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

assign( main, dtypeObjects() );


// EXPORTS //

module.exports = main;

// exports: { "float64": "main.float64", "float32": "main.float32", "float16": "main.float16", "complex128": "main.complex128", "complex64": "main.complex64", "complex32": "main.complex32", "int32": "main.int32", "int16": "main.int16", "int8": "main.int8", "uint32": "main.uint32", "uint16": "main.uint16", "uint8": "main.uint8", "uint8c": "main.uint8c", "bool": "main.bool", "binary": "main.binary", "generic": "main.generic" }
