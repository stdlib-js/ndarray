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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var floor = require( '@stdlib/math/base/special/floor' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ctors = require( '@stdlib/array/typed-complex-ctors' );
var shape2strides = require( './../../../base/shape2strides' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var pkg = require( './../package.json' ).name;
var forEach = require( './../lib/2d_accessors.js' );


// VARIABLES //

var types = [ 'complex64' ];
var order = 'row-major';
var VALUE = new Complex64( 10.0, -10.0 );


// FUNCTIONS //

/**
* Returns an array data buffer element.
*
* @private
* @param {Collection} buf - data buffer
* @param {NonNegativeInteger} idx - element index
* @returns {*} element
*/
function get( buf, idx ) {
	return buf.get( idx );
}

/**
* Sets an array data buffer element.
*
* @private
* @param {Collection} buf - data buffer
* @param {NonNegativeInteger} idx - element index
* @param {*} value - value to set
*/
function set( buf, idx, value ) {
	buf.set( value, idx );
}

/**
* Returns a constant.
*
* @private
* @returns {number} constant value
*/
function fcn() {
	return VALUE;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - output ndarray data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype ) {
	var xbuf;
	var x;

	xbuf = discreteUniform( len*2, -100, 100 );
	x = {
		'dtype': xtype,
		'data': new ( ctors( xtype ) )( xbuf.buffer ),
		'shape': shape,
		'strides': shape2strides( shape, order ),
		'offset': 0,
		'order': order,
		'accessorProtocol': true,
		'accessors': [ get, set ]
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
			forEach( x, fcn );
			if ( isnan( xbuf[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( xbuf[ i%len ] ) ) {
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
	max = 5; // 10^max

	for ( j = 0; j < types.length; j++ ) {
		t1 = types[ j ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );

			sh = [ len/2, 2 ];
			f = createBenchmark( len, sh, t1 );
			bench( pkg+'::accessors:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );

			sh = [ 2, len/2 ];
			f = createBenchmark( len, sh, t1 );
			bench( pkg+'::accessors:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );

			len = floor( sqrt( len ) );
			sh = [ len, len ];
			len *= len;
			f = createBenchmark( len, sh, t1 );
			bench( pkg+'::accessors:ndims='+sh.length+',len='+len+',shape=['+sh.join(',')+'],xorder='+order+',xtype='+t1, f );
		}
	}
}

main();
