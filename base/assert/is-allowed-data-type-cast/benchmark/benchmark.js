/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var dtypes = require( './../../../../dtypes' );
var pkg = require( './../package.json' ).name;
var isAllowedCast = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// MAIN //

bench( pkg+':casting=unsafe', function benchmark( b ) {
	var out;
	var N;
	var i;
	var j;
	var k;

	N = DTYPES.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = (i+1) % N;
		out = isAllowedCast( DTYPES[ j ], DTYPES[ k ], 'unsafe' );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':casting=equiv', function benchmark( b ) {
	var out;
	var N;
	var i;
	var j;
	var k;

	N = DTYPES.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = (i+1) % N;
		out = isAllowedCast( DTYPES[ j ], DTYPES[ k ], 'equiv' );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':casting=safe', function benchmark( b ) {
	var out;
	var N;
	var i;
	var j;
	var k;

	N = DTYPES.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = (i+1) % N;
		out = isAllowedCast( DTYPES[ j ], DTYPES[ k ], 'safe' );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':casting=mostly-safe', function benchmark( b ) {
	var out;
	var N;
	var i;
	var j;
	var k;

	N = DTYPES.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = (i+1) % N;
		out = isAllowedCast( DTYPES[ j ], DTYPES[ k ], 'mostly-safe' );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':casting=none', function benchmark( b ) {
	var out;
	var N;
	var i;
	var j;
	var k;

	N = DTYPES.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = (i+1) % N;
		out = isAllowedCast( DTYPES[ j ], DTYPES[ k ], 'none' );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':casting=same-kind', function benchmark( b ) {
	var out;
	var N;
	var i;
	var j;
	var k;

	N = DTYPES.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = (i+1) % N;
		out = isAllowedCast( DTYPES[ j ], DTYPES[ k ], 'same-kind' );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
