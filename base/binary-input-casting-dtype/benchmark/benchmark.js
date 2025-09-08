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
var isDataType = require( './../../../base/assert/is-data-type' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var resolve = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes( 'numeric' );


// MAIN //

bench( pkg+':policy=none', function benchmark( b ) {
	var out;
	var dt1;
	var dt2;
	var dt3;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dt1 = DTYPES[ i%DTYPES.length ];
		dt2 = DTYPES[ i%DTYPES.length ];
		dt3 = DTYPES[ (i+1)%DTYPES.length ];
		out = resolve( dt1, dt2, dt3, 'none' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=promoted', function benchmark( b ) {
	var out;
	var dt1;
	var dt2;
	var dt3;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dt1 = DTYPES[ i%DTYPES.length ];
		dt2 = DTYPES[ i%DTYPES.length ];
		dt3 = DTYPES[ (i+1)%DTYPES.length ];
		out = resolve( dt1, dt2, dt3, 'promoted' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=accumulation', function benchmark( b ) {
	var out;
	var dt1;
	var dt2;
	var dt3;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dt1 = DTYPES[ i%DTYPES.length ];
		dt2 = DTYPES[ i%DTYPES.length ];
		dt3 = DTYPES[ (i+1)%DTYPES.length ];
		out = resolve( dt1, dt2, dt3, 'accumulation' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=output', function benchmark( b ) {
	var out;
	var dt1;
	var dt2;
	var dt3;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dt1 = DTYPES[ i%DTYPES.length ];
		dt2 = DTYPES[ i%DTYPES.length ];
		dt3 = DTYPES[ (i+1)%DTYPES.length ];
		out = resolve( dt1, dt2, dt3, 'output' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=<dtype>', function benchmark( b ) {
	var out;
	var dt1;
	var dt2;
	var dt3;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dt1 = DTYPES[ i%DTYPES.length ];
		dt2 = DTYPES[ i%DTYPES.length ];
		dt3 = DTYPES[ (i+1)%DTYPES.length ];
		out = resolve( dt1, dt2, dt3, 'int32' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
