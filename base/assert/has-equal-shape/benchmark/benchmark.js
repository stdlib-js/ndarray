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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var array = require( './../../../../array' );
var pkg = require( './../package.json' ).name;
var hasEqualShape = require( './../lib' );


// MAIN //

bench( pkg+'::true', function benchmark( b ) {
	var values;
	var out;
	var v;
	var i;

	values = [
		array( [ [ 1, 2 ], [ 3, 4 ] ] ),
		array( [ [ 1, 2 ], [ 3, 4 ] ] )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ];
		out = hasEqualShape( v, v );
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

bench( pkg+'::false', function benchmark( b ) {
	var values;
	var out;
	var v1;
	var v2;
	var i;

	values = [
		array( [ [ 1, 2 ], [ 3, 4 ] ] ),
		array( [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v1 = values[ i%values.length ];
		v2 = values[ (i+1)%values.length ];
		out = hasEqualShape( v1, v2 );
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
