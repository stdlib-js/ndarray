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

var bench = require( '@stdlib/bench' );
var pow = require( '@stdlib/math/base/special/pow' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var vector = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {string} dtype - data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, dtype ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var arr;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			arr = vector( len, dtype );
			if ( arr.length !== len ) {
				b.fail( 'unexpected length' );
			}
		}
		b.toc();
		if ( !isndarrayLike( arr ) ) {
			b.fail( 'should return an ndarray' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var dt;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < DTYPES.length; j++ ) {
		dt = DTYPES[ j ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );
			f = createBenchmark( len, dt );
			bench( pkg+':dtype='+dt+',size='+len, f );
		}
	}
}

main();
