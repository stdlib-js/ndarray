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
var Float64Array = require( '@stdlib/array/float64' );
var ndarrayBase = require( './../../../base/ctor' );
var ndarray = require( './../../../ctor' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var pkg = require( './../package.json' ).name;
var spreadDimensions = require( './../lib' );


// MAIN //

bench( pkg+'::base_ndarray,2d', function benchmark( b ) {
	var strides;
	var values;
	var buffer;
	var offset;
	var dtype;
	var shape;
	var order;
	var out;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	values = [
		ndarrayBase( dtype, buffer, shape, strides, offset, order ),
		ndarrayBase( dtype, buffer, shape, strides, offset, order ),
		ndarrayBase( dtype, buffer, shape, strides, offset, order ),
		ndarrayBase( dtype, buffer, shape, strides, offset, order ),
		ndarrayBase( dtype, buffer, shape, strides, offset, order )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = spreadDimensions( 2, values[ i%values.length ], [ 1 ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndarray,2d', function benchmark( b ) {
	var strides;
	var values;
	var buffer;
	var offset;
	var dtype;
	var shape;
	var order;
	var out;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	values = [
		ndarray( dtype, buffer, shape, strides, offset, order ),
		ndarray( dtype, buffer, shape, strides, offset, order ),
		ndarray( dtype, buffer, shape, strides, offset, order ),
		ndarray( dtype, buffer, shape, strides, offset, order ),
		ndarray( dtype, buffer, shape, strides, offset, order )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = spreadDimensions( 2, values[ i%values.length ], [ 1 ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isndarrayLike( out ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
