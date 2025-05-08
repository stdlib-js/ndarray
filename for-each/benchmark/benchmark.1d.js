/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var shape2strides = require( './../../base/shape2strides' );
var ndarray = require( './../../ctor' );
var pkg = require( './../package.json' ).name;
var forEach = require( './../lib' );


// VARIABLES //

var xtypes = [ 'generic' ];
var orders = [ 'row-major', 'column-major' ];


// FUNCTIONS //

/**
* Callback invoked for each ndarray element.
*
* @private
* @param {number} value - array element
* @throws {Error} unexpected error
*/
function fcn( value ) {
	if ( isnan( value ) ) {
		throw new Error( 'unexpected error' );
	}
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - input ndarray data type
* @param {string} order - ndarray memory layout
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype, order ) {
	var strides;
	var xbuf;
	var x;

	xbuf = discreteUniform( len, -100, 100, {
		'dtype': xtype
	});
	strides = shape2strides( shape, order );
	x = ndarray( xtype, xbuf, shape, strides, 0, order );

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
			forEach( x, fcn );
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
		for ( j = 0; j < xtypes.length; j++ ) {
			t1 = xtypes[ j ];
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
