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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var ndarray2array = require( './../../../to-array' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an iterator which converts each iterated ndarray to a generic array.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator protocol-compliant object
* @returns {Iterator} iterator
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var nditerRows = require( '@stdlib/ndarray/iter/rows' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditer2arrayEach( nditerRows( x ) );
*
* var v = iter.next().value;
* // returns [ 1, 2 ]
*
* v = iter.next().value;
* // returns [ 3, 4 ]
*
* v = iter.next().value;
* // returns [ 5, 6 ]
*
* // ...
*/
function nditer2arrayEach( iterator ) {
	var iter;
	var FLG;

	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.', iterator ) );
	}

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and a provided iterator is iterable, make the iterator iterable:
	if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var v;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			return v;
		}
		return {
			'value': ndarray2array( v.value ),
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return nditer2arrayEach( iterator[ iteratorSymbol ]() );
	}
}


// EXPORTS //

module.exports = nditer2arrayEach;
