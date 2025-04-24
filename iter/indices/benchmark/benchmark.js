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
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var array = require( './../../../array' );
var pkg = require( './../package.json' ).name;
var nditerIndices = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var iter;
	var x;
	var i;

	x = array( [ [ 1, 2, 3, 4 ] ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = nditerIndices( x.shape );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( iter ) ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var xbuf;
	var iter;
	var x;
	var z;
	var i;

	xbuf = [];
	xbuf.length = b.iterations + 1;
	x = array( xbuf, {
		'shape': [ xbuf.length, 1 ],
		'dtype': 'generic',
		'copy': false
	});

	iter = nditerIndices( x.shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( typeof z !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( z ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
