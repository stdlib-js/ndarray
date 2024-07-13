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
var isCollection = require( '@stdlib/assert/is-collection' );
var typedarray = require( '@stdlib/array/typed' );
var ndarray = require( './../../../ctor' );
var pkg = require( './../package.json' ).name;
var data = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		ndarray( 'float64', typedarray( 20000, 'float64' ), [ 10, 10, 10, 1 ], [ 1000, 100, 10, 1 ], 100, 'row-major' ),
		ndarray( 'int32', typedarray( 20000, 'int32' ), [ 5, 5, 5, 1, 1 ], [ 125, 25, 5, 1, 1 ], 50, 'row-major' ),
		ndarray( 'uint8', typedarray( 20000, 'uint8' ), [ 3, 4, 5 ], [ 20, 5, 1 ], 72, 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = data( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return a collection' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return a collection' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
