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
var floor = require( '@stdlib/math/base/special/floor' );
var uniform = require( '@stdlib/random/array/uniform' );
var add = require( '@stdlib/number/float64/base/add' );
var shape2strides = require( './../../../base/shape2strides' );
var pkg = require( './../package.json' ).name;
var accumulateUnary = require( './../lib/10d_blocked.js' );


// VARIABLES //

var types = [ 'float64' ];
var order = 'column-major';


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - input ndarray data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype ) {
	var x = uniform( len, -100.0, 100.0, {
		'dtype': xtype
	});
	x = {
		'dtype': xtype,
		'data': x,
		'shape': shape,
		'strides': shape2strides( shape, order ),
		'offset': 0,
		'order': order
	};
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
			out = accumulateUnary( x, 0.0, add );
			if ( isnan( out ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( out ) ) {
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
	var sh;
	var t1;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < types.length; j++ ) {
		t1 = types[ j ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );

			sh = [ len/2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ];
			f = createBenchmark( len, sh, t1 );
			bench( pkg+'::blocked:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );

			sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, len/2 ];
			f = createBenchmark( len, sh, t1 );
			bench( pkg+'::blocked:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );

			len = floor( pow( len, 1.0/10.0 ) );
			sh = [ len, len, len, len, len, len, len, len, len, len ];
			len *= pow( len, 9 );
			f = createBenchmark( len, sh, t1 );
			bench( pkg+'::blocked:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );
		}
	}
}

main();
