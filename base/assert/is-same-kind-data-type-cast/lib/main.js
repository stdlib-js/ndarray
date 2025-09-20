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

var sameKindCasts = require( './../../../../same-kind-casts' );
var resolveStr = require( './../../../../base/dtype-resolve-str' );


// VARIABLES //

var TABLE = sameKindCasts();


// MAIN //

/**
* Returns a boolean indicating if a provided ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.
*
* @param {*} from - ndarray data type
* @param {*} to - ndarray data type
* @returns {boolean} boolean indicating if a data type can be cast to another data type
*
* @example
* var bool = isSameKindCast( 'float32', 'float64' );
* // returns true
*
* bool = isSameKindCast( 'uint16', 'int16' );
* // returns false
*/
function isSameKindCast( from, to ) {
	var t;
	from = resolveStr( from );
	to = resolveStr( to );
	if ( from === to ) { // note: for "struct" data types, require strict equality to be considered a safe cast
		return true;
	}
	t = TABLE[ from ];
	if ( t ) {
		return t[ to ] > 0;
	}
	return false;
}


// EXPORTS //

module.exports = isSameKindCast;
