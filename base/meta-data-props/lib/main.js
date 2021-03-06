/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var dtypes2signatures = require( './../../../base/dtypes2signatures' );


// MAIN //

/**
* Defines non-enumerable read-only properties which expose ndarray function meta data.
*
* @param {Object} meta - function meta data
* @param {NonNegativeInteger} meta.nargs - total number of arguments
* @param {NonNegativeInteger} meta.nin - total number of input arrays
* @param {NonNegativeInteger} meta.nout - total number of output arrays
* @param {ArrayLikeObject} dtypes - list of ndarray data types
* @param {(Function|Object)} obj - object on which to define properties
* @returns {(Function|Object)} object on which properties were defined
*
* @example
* // Define ndarray function meta data:
* var meta = {
*     'nargs': 2,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of ndarray data types:
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
*
* // Define an object on which to set the properties:
* var obj = {};
*
* // Set the properties:
* setProps( meta, dtypes, obj );
*
* @example
* // Define ndarray function meta data:
* var meta = {
*     'nargs': 2,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of ndarray data types:
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
*
* // Define a function on which to set the properties:
* function abs( x, y ) {
*     // Implementation...
* }
*
* // Set the properties:
* setProps( meta, dtypes, abs );
*/
function setProps( meta, dtypes, obj ) {
	// Define the number of arguments:
	setReadOnly( obj, 'nargs', meta.nargs );

	// Define the number of input arrays:
	setReadOnly( obj, 'nin', meta.nin );

	// Define the number of output arrays:
	setReadOnly( obj, 'nout', meta.nout );

	// Define a read-only accessor for listing a function's supported array data types:
	setReadOnlyAccessor( obj, 'types', types );

	return obj;

	/**
	* Returns a list of array type signatures.
	*
	* @private
	* @returns {StringArray} list of signatures
	*/
	function types() {
		return dtypes2signatures( dtypes, meta.nin, meta.nout );
	}
}


// EXPORTS //

module.exports = setProps;
