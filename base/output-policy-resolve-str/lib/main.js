/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var enum2str = require( './../../../base/output-policy-enum2str' );
var str2enum = require( './../../../base/output-policy-str2enum' );


// MAIN //

/**
* Returns the policy string associated with a supported ndarray data type policy value.
*
* @param {*} policy - policy value
* @returns {(string|null)} policy string or null
*
* @example
* var str2enum = require( '@stdlib/ndarray/base/output-policy-str2enum' );
*
* var v = resolve( str2enum( 'same' ) );
* // returns 'same'
*/
function resolve( policy ) {
	var t = ( typeof policy );
	if ( t === 'string' ) {
		return ( str2enum( policy ) === null ) ? null : policy;
	}
	if ( t === 'number' ) {
		return enum2str( policy );
	}
	return null;
}


// EXPORTS //

module.exports = resolve;
