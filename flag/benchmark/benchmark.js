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
var zeros = require( './../../zeros' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var flag = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var names;
	var out;
	var i;

	values = [
		zeros( [ 10, 10, 10, 1 ] ),
		zeros( [ 5, 5, 5, 1, 1 ] ),
		zeros( [ 3, 4, 5 ] )
	];
	names = [
		'ROW_MAJOR_CONTIGUOUS',
		'COLUMN_MAJOR_CONTIGUOUS',
		'READONLY'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = flag( values[ i%values.length ], names[ i%names.length ] );
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
