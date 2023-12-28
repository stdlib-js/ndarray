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

var bench = require( '@stdlib/bench' );
var array = require( './../../../array' );
var zeros = require( './../../../zeros' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var broadcastArrays = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} narrays - number of arrays to broadcast
* @param {PositiveInteger} ndims - number of dimensions
* @returns {Function} benchmark function
*/
function createBenchmark( narrays, ndims ) {
	var arrays;
	var shape;
	var sh;
	var x;
	var y;
	var i;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	sh = x.shape;

	shape = [];
	for ( i = 0; i < ndims; i++ ) {
		shape.push( 0 );
	}
	for ( i = ndims; i >= 1; i-- ) {
		if ( i > sh.length ) {
			shape[ ndims-i ] = 5;
		} else {
			shape[ ndims-i ] = sh[ i-1 ];
		}
	}
	arrays = [ x ];
	for ( i = 1; i < narrays; i++ ) {
		if ( i < narrays-1 ) {
			y = zeros( sh );
		} else {
			y = zeros( shape );
		}
		arrays.push( y );
	}

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = broadcastArrays( arrays );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( !isArray( out ) || !isndarrayLike( out[ 0 ] ) ) {
			b.fail( 'should return an array of ndarrays' );
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
	var min;
	var max;
	var f;
	var i;

	min = 1;
	max = 10;

	for ( i = min; i <= max; i++ ) {
		f = createBenchmark( i, 10 );
		bench( pkg+'::ndarray,2d::num_arrays='+i+',from_ndims=2,to_ndims=10', f );
	}
}

main();
