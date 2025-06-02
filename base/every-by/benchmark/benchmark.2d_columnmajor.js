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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var floor = require( '@stdlib/math/base/special/floor' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var shape2strides = require( './../../../base/shape2strides' );
var pkg = require( './../package.json' ).name;
var everyBy = require( './../lib/2d.js' );


// VARIABLES //

var types = [ 'float64' ];
var order = 'column-major';


// FUNCTIONS //

/**
* Callback function.
*
* @param {*} value - ndarray element
* @returns {boolean} result
*/
function clbk( value ) {
	return value > 0.0;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - ndarray data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype ) {
	var x;

	x = discreteUniform( len, 1, 100 );
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
			out = everyBy( x, clbk );
			if ( typeof out !== 'boolean' ) {
				b.fail( 'should return a boolean' );
			}
		}
		b.toc();
		if ( !isBoolean( out ) ) {
			b.fail( 'should return a boolean' );
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

			sh = [ len/2, 2 ];
			f = createBenchmark( len, sh, t1 );
			bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );

			sh = [ 2, len/2 ];
			f = createBenchmark( len, sh, t1 );
			bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );

			len = floor( sqrt( len ) );
			sh = [ len, len ];
			len *= len;
			f = createBenchmark( len, sh, t1 );
			bench( pkg+':ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );
		}
	}
}

main();
