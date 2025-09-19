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

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var isStructDataType = require( './../../../base/assert/is-struct-data-type' );
var structFactory = require( '@stdlib/array/struct-factory' );
var table = require( './ctors.js' );


// VARIABLES //

// Initialize a cache to storing memoized struct array constructors:
var CACHE = {}; // TODO: consider adding/using `@stdlib/array/memoized-struct-factory`; should we need to memoize struct array constructors elsewhere, we should centralize that logic, rather than have multiple caches.


// MAIN //

/**
* Returns an ndarray data buffer constructor.
*
* @param {*} dtype - data type
* @returns {(Function|null)} data buffer constructor or null
*
* @example
* var ctor = ctors( 'float64' );
* // returns <Function>
*
* @example
* var ctor = ctors( 'float' );
* // returns null
*/
function ctors( dtype ) {
	var struct;
	var ctor;
	var key;

	// Case: string || dtype_instance_with_string
	if ( !isFunction( dtype ) ) {
		key = String( dtype );
		ctor = table[ key ] || null;
		if ( ctor ) {
			return ctor;
		}
	}
	// Case: struct_ctor || dtype_instance_with_struct_ctor
	if ( isStructDataType( dtype ) ) {
		if ( key ) {
			// Data type instance (note: we assume that `key === struct.layout`):
			struct = dtype.value;
		} else {
			// Struct constructor:
			struct = dtype;
			key = struct.layout;
		}
		ctor = CACHE[ key ];
		if ( ctor ) {
			return ctor;
		}
		ctor = structFactory( struct );
		CACHE[ key ] = ctor;
		return ctor;
	}
	return null;
}


// EXPORTS //

module.exports = ctors;
