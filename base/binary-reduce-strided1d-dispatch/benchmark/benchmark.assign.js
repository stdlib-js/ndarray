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
var dtypes = require( '@stdlib/array/dtypes' );
var uniform = require( '@stdlib/random/array/uniform' );
var zeros = require( '@stdlib/array/zeros' );
var ndarray = require( './../../../base/ctor' );
var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
var pkg = require( './../package.json' ).name;
var BinaryStrided1dDispatch = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var policies;
	var binary;
	var table;
	var out;
	var dt;
	var x;
	var y;

	table = {
		'default': gdot
	};
	dt = dtypes( 'real_floating_point' );
	policies = {
		'output': 'promoted',
		'casting': 'promoted'
	};
	binary = new BinaryStrided1dDispatch( table, [ dt, dt ], dt, policies );

	x = uniform( len, -50.0, 50.0, {
		'dtype': 'float64'
	});
	y = uniform( len, -50.0, 50.0, {
		'dtype': 'float64'
	});

	x = new ndarray( 'float64', x, [ len ], [ 1 ], 0, 'row-major' );
	y = new ndarray( 'float64', y, [ len ], [ 1 ], 0, 'row-major' );

	out = new ndarray( 'float64', zeros( 1, 'float64' ), [], [ 0 ], 0, 'row-major' );

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
			o = binary.assign( x, y, out );
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
		bench( pkg+':assign:len='+len, f );
	}
}

main();
