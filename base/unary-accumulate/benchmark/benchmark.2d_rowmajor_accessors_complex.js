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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var floor = require( '@stdlib/math/base/special/floor' );
var uniform = require( '@stdlib/random/array/uniform' );
var add = require( '@stdlib/complex/float32/base/add' );
var ctors = require( '@stdlib/array/typed-complex-ctors' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var shape2strides = require( './../../../base/shape2strides' );
var pkg = require( './../package.json' ).name;
var accumulateUnary = require( './../lib/2d_accessors.js' );


// VARIABLES //

var types = [ 'complex64' ];
var order = 'row-major';
var abtype = {
	'complex64': 'float32',
	'complex128': 'float64'
};


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
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @param {NonNegativeIntegerArray} shape - ndarray shape
* @param {string} xtype - input ndarray data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, shape, xtype ) {
	var xbuf;
	var x;

	xbuf = uniform( len*2, -100.0, 100.0, {
		'dtype': abtype[ xtype ]
	});
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
		var out;
		var z;
		var i;

		z = new Complex64( 3.0, 5.0 );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = accumulateUnary( x, z, add );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( !isComplex64( out ) ) {
			b.fail( 'should return a complex number' );
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
