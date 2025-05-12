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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var add = require( '@stdlib/number/float64/base/add' );
var filledarray = require( '@stdlib/array/filled' );
var shape2strides = require( './../../../base/shape2strides' );
var orders = require( './../../../orders' );
var pkg = require( './../package.json' ).name;
var binary = require( './../lib' );


// VARIABLES //

var TYPES = [
	'float64'
];
var ORDERS = orders();


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - input ndarray data type
* @param {string} ytype - output ndarray data type
* @param {string} order - memory layout
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype, ytype, order ) {
	var x;
	var y;

	x = discreteUniform( len, -100, 100, {
		'dtype': xtype
	});
	y = filledarray( 0.0, len, ytype );

	x = {
		'dtype': xtype,
		'data': x,
		'shape': shape,
		'strides': shape2strides( shape, order ),
		'offset': 0,
		'order': order
	};
	y = {
		'dtype': ytype,
		'data': y,
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
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			binary( [ x, x, y ], add );
			if ( isnan( y.data[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( y.data[ i%len ] ) ) {
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
	var t2;
	var f;
	var i;
	var j;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( k = 0; k < ORDERS.length; k++ ) {
		ord = ORDERS[ k ];
		for ( j = 0; j < TYPES.length; j++ ) {
			t1 = TYPES[ j ];
			t2 = TYPES[ j ];
			for ( i = min; i <= max; i++ ) {
				len = pow( 10, i );

				sh = [ len ];
				f = createBenchmark( len, sh, t1, t2, ord );
				bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+ord+',yorder='+ord+',xtype='+t1+',ytype='+t2, f );
			}
		}
	}
}

main();
