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

var ind2sub = require( './../../../ind2sub' );
var numel = require( './../../../base/numel' );


// MAIN //

/**
* Return an ndarray function which fills one or more ndarrays.
*
* @private
* @param {*} value - fill value
* @returns {Function} ndarray function
*/
function fill( value ) {
	return ndarrayFcn;

	/**
	* ndarray function.
	*
	* @private
	* @param {Array<ndarrayLike>} arrays - ndarrays
	*/
	function ndarrayFcn( arrays ) {
		var opts;
		var sub;
		var arr;
		var sh;
		var M;
		var N;
		var i;
		var j;

		sh = arrays[ 0 ].shape;
		N = numel( sh );
		M = arrays.length;
		opts = {
			'order': ''
		};
		for ( j = 0; j < M; j++ ) {
			arr = arrays[ j ];
			opts.order = arrays[ j ].order;
			for ( i = 0; i < N; i++ ) {
				sub = ind2sub( sh, i, opts );
				sub.push( value );
				arr.set.apply( arr, sub );
			}
		}
	}
}


// EXPORTS //

module.exports = fill;
