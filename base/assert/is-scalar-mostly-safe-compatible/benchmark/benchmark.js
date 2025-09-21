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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var dtypes = require( './../../../../base/dtype-strings' );
var pkg = require( './../package.json' ).name;
var isScalarMostlySafeCompatible = require( './../lib' ); // eslint-disable-line id-length


// VARIABLES //

var DTYPES = dtypes();


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		3,
		-3,
		3.14,
		true,
		false,
		null,
		'beep',
		{}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = isScalarMostlySafeCompatible( values[ i%values.length ], DTYPES[ i%DTYPES.length ] ); // eslint-disable-line max-len
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
