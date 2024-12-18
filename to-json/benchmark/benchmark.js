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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var shape2strides = require( './../../base/shape2strides' );
var strides2offset = require( './../../base/strides2offset' );
var numel = require( './../../base/numel' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var ndarray = require( './../../ctor' );
var pkg = require( './../package.json' ).name;
var ndarray2json = require( './../lib' );


// MAIN //

bench( pkg+':order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var order;
	var shape;
	var arr;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	buffer = zeroTo( numel( shape ) );
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	arr = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = ndarray2json( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return a JSON object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var order;
	var shape;
	var arr;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	buffer = zeroTo( numel( shape ) );
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	arr = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = ndarray2json( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return a JSON object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
