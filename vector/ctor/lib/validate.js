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

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isIndexMode = require( './../../../base/assert/is-index-mode' );
var isOrder = require( './../../../base/assert/is-order' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {boolean} [options.readonly] - boolean indicating whether to return a read-only vector
* @param {string} [options.mode] - specifies how to handle indices which exceed vector dimensions
* @param {string} [options.order] - memory layout (either row-major or column-major)
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'readonly': true
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'readonly' ) ) {
		opts.readonly = options.readonly;
		if ( !isBoolean( opts.readonly ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'readonly', opts.readonly ) );
		}
	}
	if ( hasOwnProp( options, 'mode' ) ) {
		opts.mode = options.mode;
		if ( !isIndexMode( opts.mode ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a valid index mode. Option: `%s`.', 'mode', opts.mode ) );
		}
	}
	if ( hasOwnProp( options, 'order' ) ) {
		opts.order = options.order;
		if ( !isOrder( opts.order ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a memory layout. Option: `%s`.', 'order', opts.order ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
