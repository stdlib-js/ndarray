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

var propertiesIn = require( '@stdlib/utils/properties-in' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var ndarray = require( './../../ctor' );
var defaults = require( './../../defaults' );


// MAIN //

/**
* Tests whether a property name exists on the parent prototype.
*
* @private
* @name hasProperty
* @type {Function}
* @param {(string|symbol)} name - property name
* @returns {boolean} boolean indicating whether the property exists on the parent prototype
*
* @example
* var bool = hasProperty( 'get' );
* // returns true
*
* bool = hasProperty( 'foo' );
* // returns false
*/
var hasProperty = contains( propertiesIn( new ndarray( 'generic', [ 0 ], [], [ 0 ], 0, defaults.get( 'order' ) ) ) );


// EXPORTS //

module.exports = hasProperty;
