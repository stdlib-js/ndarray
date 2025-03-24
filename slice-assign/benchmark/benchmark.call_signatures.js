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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var MultiSlice = require( '@stdlib/slice/multi' );
var baseEmpty = require( './../../base/empty' );
var scalar2ndarray = require( './../../from-scalar' );
var pkg = require( './../package.json' ).name;
var sliceAssign = require( './../lib' );


// MAIN //

bench( pkg+'::2d,base,multislice', function benchmark( b ) {
	var values;
	var x;
	var v;
	var s;
	var i;

	x = scalar2ndarray( 3, {
		'dtype': 'int8'
	});

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];
	s = new MultiSlice( null, null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceAssign( x, values[ i%values.length ], s );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,base,separate_arguments', function benchmark( b ) {
	var values;
	var x;
	var v;
	var i;

	x = scalar2ndarray( 3, {
		'dtype': 'int8'
	});

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceAssign( x, values[ i%values.length ], null, null );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,base,array', function benchmark( b ) {
	var values;
	var x;
	var v;
	var i;

	x = scalar2ndarray( 3, {
		'dtype': 'int8'
	});

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceAssign( x, values[ i%values.length ], [ null, null ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
