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
var pkg = require( './../package.json' ).name;
var numel = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var n;
	var i;

	values = [
		zeros( [ 10, 10, 10 ] ),
		zeros( [ 5, 5, 5 ] ),
		zeros( [ 3, 4, 5 ] )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		n = numel( values[ i%values.length ] );
		if ( n !== n ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( n !== n ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
