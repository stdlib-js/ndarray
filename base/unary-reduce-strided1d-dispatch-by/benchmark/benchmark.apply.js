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
var dtypes = require( './../../../dtypes' );
var uniform = require( '@stdlib/random/array/uniform' );
var ndarray = require( './../../../base/ctor' );
var maxBy = require( '@stdlib/stats/base/ndarray/max-by' );
var pkg = require( './../package.json' ).name;
var UnaryStrided1dDispatchBy = require( './../lib' );


// FUNCTIONS //

/**
* Accessor function.
*
* @private
* @param {number} v - current array element
* @returns {number} accessed value
*/
function accessor( v ) {
	return v * 2.0;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var policies;
	var unary;
	var table;
	var idt;
	var odt;
	var x;

	table = {
		'default': maxBy
	};
	idt = dtypes( 'real_and_generic' );
	odt = dtypes( 'real_and_generic' );
	policies = {
		'output': 'same',
		'casting': 'none'
	};
	unary = new UnaryStrided1dDispatchBy( table, [ idt ], odt, policies );

	x = uniform( len, -50.0, 50.0, {
		'dtype': 'float64'
	});
	x = new ndarray( 'float64', x, [ len ], [ 1 ], 0, 'row-major' );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var o;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			o = unary.apply( x, accessor );
			if ( typeof o !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( isnan( o.get() ) ) {
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
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':apply:len='+len, f );
	}
}

main();
