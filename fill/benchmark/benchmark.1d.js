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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var zeros = require( './../../zeros' );
var pkg = require( './../package.json' ).name;
var fill = require( './../lib' );


// VARIABLES //

var types = [ 'float64' ];
var orders = [ 'row-major', 'column-major' ];


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - input ndarray data type
* @param {string} order - memory layout
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype, order ) {
	var x = zeros( shape, {
		'dtype': xtype,
		'order': order
	});
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			fill( x, i );
			if ( isnan( x.data[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( x.data[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
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
	var ord;
	var sh;
	var t1;
	var f;
	var i;
	var j;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( k = 0; k < orders.length; k++ ) {
		ord = orders[ k ];
		for ( j = 0; j < types.length; j++ ) {
			t1 = types[ j ];
			for ( i = min; i <= max; i++ ) {
				len = pow( 10, i );

				sh = [ len ];
				f = createBenchmark( len, sh, t1, ord );
				bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+ord+',xtype='+t1, f );
			}
		}
	}
}

main();
