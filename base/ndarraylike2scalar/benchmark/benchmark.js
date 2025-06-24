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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var ndarraylike2scalar = require( './../lib' );


// MAIN //

bench( pkg+'::base_ndarray', function benchmark( b ) {
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
	buffer = new Float64Array( 1 );
	shape = [];
	strides = [ 0 ];
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
		out = ndarraylike2scalar( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( out ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndarray', function benchmark( b ) {
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
	buffer = new Float64Array( 1 );
	shape = [];
	strides = [ 0 ];
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
		out = ndarraylike2scalar( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( out ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndarray_like', function benchmark( b ) {
	var strides;
	var values;
	var buffer;
	var offset;
	var dtype;
	var shape;
	var order;
	var out;
	var obj;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( 1 );
	shape = [];
	strides = [ 0 ];
	offset = 0;
	order = 'row-major';

	values = [];
	for ( i = 0; i < 5; i++ ) {
		obj = {
			'dtype': dtype,
			'data': buffer,
			'shape': shape,
			'strides': strides,
			'offset': offset,
			'order': order
		};
		values.push( obj );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = ndarraylike2scalar( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( out ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
