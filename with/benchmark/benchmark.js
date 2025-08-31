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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var zeros = require( './../../zeros' );
var pkg = require( './../package.json' ).name;
var ndarrayWith = require( './../lib' );


// MAIN //

bench( pkg+':ndims=1', function benchmark( b ) {
	var v;
	var x;
	var i;

	x = zeros( [ 5 ], {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ndarrayWith( x, [ 4 ], 5 );
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

bench( pkg+':ndims=2', function benchmark( b ) {
	var v;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ndarrayWith( x, [ 1, 1 ], 5 );
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

bench( pkg+':ndims=3', function benchmark( b ) {
	var v;
	var x;
	var i;

	x = zeros( [ 2, 2, 2 ], {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ndarrayWith( x, [ 1, 1, 1 ], 5 );
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

bench( pkg+':ndims=4', function benchmark( b ) {
	var v;
	var x;
	var i;

	x = zeros( [ 2, 2, 2, 2 ], {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ndarrayWith( x, [ 1, 1, 1, 1 ], 5 );
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

bench( pkg+':ndims=5', function benchmark( b ) {
	var v;
	var x;
	var i;

	x = zeros( [ 2, 2, 2, 2, 2 ], {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ndarrayWith( x, [ 1, 1, 1, 1, 1 ], 5 );
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
