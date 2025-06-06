/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isArray = require( '@stdlib/assert/is-array' );
var shape2strides = require( './../../../base/shape2strides' );
var pkg = require( './../package.json' ).name;
var binaryLoopOrder = require( './../lib' );


// MAIN //

bench( pkg+'::row-major', function benchmark( b ) {
	var strides;
	var factors;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	factors = [
		-1,
		1
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ i%shape.length ] *= factors[ i%factors.length ];
		out = binaryLoopOrder( shape, strides, strides, strides );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out.sh ) || !isArray( out.sx ) || !isArray( out.sy ) || !isArray( out.sz ) ) { // eslint-disable-line max-len
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::column-major', function benchmark( b ) {
	var strides;
	var factors;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'column-major' );
	factors = [
		-1,
		1
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ i%shape.length ] *= factors[ i%factors.length ];
		out = binaryLoopOrder( shape, strides, strides, strides );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out.sh ) || !isArray( out.sx ) || !isArray( out.sy ) || !isArray( out.sz ) ) { // eslint-disable-line max-len
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
